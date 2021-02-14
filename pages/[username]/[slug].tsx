import { useRouter } from 'next/router'

export default function PostPage({}) {
    const router = useRouter()
    console.log(router)

    return (
        <div>
            <h1>PostPage {router.query.username} {router.query.slug}</h1>
        </div>
    )
}
