import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

export default function AuthCheck(props) {
    const { username } = useContext(UserContext)
    console.log(username)

    return username ? props.children : <Link href="/enter"><a>You must be signed in</a></Link>
}
