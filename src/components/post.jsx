export default function Post({ post }) {
    const { title, body, id, userId } = post
    return (
        <div className='border rounded-md text-left p-2 bg-slate-200 text-slate-800'>
            <h5>Title: {title}</h5>
            <p>
                <small>postId: {id}</small>
            </p>
            <p>
                <small>userId: {userId}</small>
            </p>
            <p>
                <small>{body}</small>
            </p>
        </div>
    )
}
