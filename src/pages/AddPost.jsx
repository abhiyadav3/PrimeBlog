import React from 'react'
import {Container, PostForm,} from '../components/index'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
        <h1 className='text-4xl font-bold mb-4 '>Write your blog post.</h1>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost