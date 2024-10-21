import { useEffect, useState } from "react"
import Post from "./post"

export default function Posts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
    }, [])
    return (
        <div>
            <h3 className='text-left py-4 text-2xl'>Posts: {posts.length}</h3>
            <div className='grid grid-cols-2 gap-4'>
                {posts.map((post) => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
        </div>
    )
}

/**
 *  TODO: 5 steps to load data from API
 *  ----------------------------------------------------------------
 *  1. create a state to store the data.
 *  2. create use effect with node dependencies.
 *  3. use fetch to load data from api.
 *
 *
 *
 **/
