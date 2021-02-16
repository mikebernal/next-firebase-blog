import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Loader from '../components/Loader'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { firestore, postToJSON } from '../lib/firebase'
import PostFeed from '../components/PostFeed'

// Max post to query per page
const LIMIT = 1

export default function Home(props) {
  const [posts, setPosts]     = useState(props.posts)
  const [loading, setLoading] = useState(false)
  const [postEnd, setPostEnd] = useState(false)

  const getMorePosts = async() => {
    setLoading(true)
    const last = posts[posts.length - 1]
    const cursor = typeof last.createdAt === 'number' ? fromMillis(last.createdAt) : last.createdAt

    const query = firestore
      .collectionGroup('posts')
      .where('published', '==', true)
      .orderBy('createdAt', 'desc')
      .startAfter(cursor)

    const newPosts = (await query.get()).docs.map((doc) => doc.data())

    setPosts(posts.concat(newPosts))
    setLoading(false)

    if (newPosts.length < LIMIT) {
      setPostEnd(true)
    }

    return posts
  }

  return (
    <main>
      <PostFeed posts={posts} />

      {!loading && !postEnd && <button onClick={getMorePosts}>Load more</button> }

      <Loader show={loading} />

      {postEnd && 'You have reached the end'}
    </main>
  )
}

export async function getServerSideProps(context) {
  const postsQuery = firestore
    .collectionGroup('posts')
    .where('published', '==', true)
    .orderBy('createdAt', 'desc')
    .limit(LIMIT)

    const posts = (await postsQuery.get()).docs.map(postToJSON)
    
  return {
    props: {
      posts
    }
  }
}
