import React, {useState, useEffect} from 'react'
import {Container, PostForm} from "../components/index"
import blogServices from '../appwrite/blogServices'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug){
            blogServices.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)

                } else {
                    navigate("/")
                }
            })
        }
    }, [slug, navigate])

  return (
    post? (
        <div className='py-8'>
            <Container>
            <h1 className='text-4xl font-bold mb-4 '>Edit your blog post.</h1>
                <PostForm post={post} />
            </Container>
        </div>

    ): null
  )
}

export default EditPost