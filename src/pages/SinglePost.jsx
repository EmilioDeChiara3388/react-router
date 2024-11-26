import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function SinglePost() {

    const { slug } = useParams()
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/posts/${slug}`)
            .then(resp => resp.json())
            .then(data => {
                const keys = Object.keys(data)
                if (keys.includes('error')) {
                    navigate('/404')
                } else {
                    setPost(data.data)
                }
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
                    <div className="container">
                        <div className="text-center mb-5">
                            <h1>{post.title}</h1>
                        </div>
                        <div className="row align-items-center justify-content-around p-2">
                            <div className="col">
                                <img width={360} height={330} className='object-fit-cover card-img-top' src={`http://localhost:3000/imgs/posts/${post.image}`} alt="" />
                            </div>
                            <div className="col">
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