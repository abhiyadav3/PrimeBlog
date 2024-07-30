import React from "react";
import  blogServices  from "../appwrite/blogServices";
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-200 border-2 border-gray-500 rounded-md overflow-hidden">
        <div className="w-full justify-center h-40 overflow-hidden">
          <img
            src={blogServices.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover aspect-video"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 p-2 mb-4">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
