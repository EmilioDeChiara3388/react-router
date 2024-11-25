import { useState, useEffect } from "react"
export default function PostList() {

    //const [postsData, setPostsData] = useState(initialPostsData)
    const [posts, setPosts] = useState([])


    function fetchData(url = "http://127.0.0.1:3000/") {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setPosts(data)
            })
    }

    useEffect(fetchData, [])
    return (
        <>
            <section className='posts'>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                        {
                            posts.data ?
                                posts.data.map(post => (
                                    <div className="col" key={post.slug}  >
                                        <div className="card border border-danger" >
                                            <img className='rounded' src={'http://localhost:3000/imgs/posts/' + post.image} alt="" />
                                            <div className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    <p className='m-2'> {post.title} </p>
                                                </div>
                                                <div>
                                                    <button className='mx-1 px-1'>
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) :
                                <p>Nessun risultato</p>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}