import { useRouter } from 'next/router'

export default function Profile() {
    const router = useRouter()

    return (
        <div>
            <h1>Hello {router.query.username}</h1>
        </div>
    )
}
