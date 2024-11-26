import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function SinglePost() {

    const { slug } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/posts/${slug}`)
            .then(resp => resp.json())
            .then(data => {
                setPost(data.data)
            })
            .catch(err => {
                console.log(err);
            })
    },
        [])

    return (
        <>
            {post ? (
                <section>
                    <div className="container text-center">
                        <h1>{post.title}</h1>
                        <div className="card">
                            <div>
                                <img src={`http://localhost:3000/imgs/posts/${post.image}`} alt="" />
                            </div>
                            <div>
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div >
                </section>
            ) : (
                <span>Dammi un attimo...</span>
            )

            }
        </>
    )
}