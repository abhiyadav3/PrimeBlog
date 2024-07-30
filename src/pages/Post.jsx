import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import blogServices from "../appwrite/blogServices";
import { Button } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.authSlice.userData);
  const isAuthor =
    post && userData ? post.userId === userData.userData.$id : false;

  useEffect(() => {
    if (slug) {
      blogServices.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);


  const deletePost = () => {
    blogServices.deletePost(post.$id).then((status) => {
      if (status) {
        blogServices.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8 mb-12">
      <div className="max-w-3xl mx-auto">
        <div className="w-full flex justify-center mb-4 relative border">
          <img
            src={blogServices.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-md"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-4xl font-bold">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
      </div>
    </div>
  ) : null;
}
