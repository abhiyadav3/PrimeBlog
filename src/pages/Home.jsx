import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import blogServices from "../appwrite/blogServices";
import { useSelector } from "react-redux";
function Home() {
  const [posts, setPosts] = useState([]);
  const loginStatus = useSelector((state) => state.authSlice.status);

  useEffect(() => {
    try {
      blogServices.getPosts().then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      });
    } catch (error) {}
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-4xl font-bold mb-4 ">All Blog Posts</h1>
        {!loginStatus && <h2 className="my-4">Login to write your blog posts</h2>}
        <div className="flex flex-wrap gap-3">
          {posts.map((post) => (
            <div key={post.$id} className="w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
