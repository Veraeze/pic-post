import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from 'react-icons/fa';

const PostFeed = ({posts, setPosts}) => {

    const handleDelete = async (postId) => {
        try {
            const res = await fetch('http://localhost:4000/picpost/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id: postId}),
            });

            const result = await res.json();
            if(result.success){
                setPosts((prev) => prev.filter((post) => post._id !== postId));
                toast.success('post deleted!')
            }
        } catch (error) {
            console.error('error deleting post:', error);

        }
    }

    return(
        <div className="p-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-pink-700 text-3xl">Tailwind is working!</div>
            {posts.map((post) => (
                <div key={post._id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
                    <img src={post.imageUrl} alt="uploaded post" className="w-full h-40 object-cover rounded-t-md"/>                    
                    <div className="p-3">
                      <p className="text-gray-800">{post.caption || 'No caption'}</p>
                      <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
                    </div>
                    <button onClick= {() => handleDelete(post._id)} className="absolute top-2 right-2 text-pink-500 hover:text-pink-700 transition" title="Delete post">
                    <FaTrash />
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;