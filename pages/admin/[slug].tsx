import { useRouter } from 'next/router'

export default function AdminPostEdit({  }) {
    const router = useRouter()
    return (
        <div>
            <h1>Edit Post</h1>
            <p>{router.query.slug}</p>
        </div>
    )
}