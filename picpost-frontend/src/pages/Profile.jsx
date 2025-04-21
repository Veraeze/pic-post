import { useEffect, useState } from "react";

const Profile = () => {
    const [userPosts, setUserPosts] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const res = await fetch('http://localhost:4000/picpost/posts');
                const data = await res.json();

                const filtered = data.data.filter(postMessage.userId == user._id);
                setUserPosts(filtered);

            } catch (error) {
                console.log('failed to fetch user posts:', error);
            }
        };
        if (user?._id) fetchUserPosts();    
    }, []);

  return (
    <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">{user?.name}'s profile</h2>
        <div className="grid gap-4">
            {userPosts.map(post => (
                <div key={post._id} className="bg-white rounded-xl shadow-md p-4">
                    <img src={post.imageUrl} alt="Post" className="rounded-xl w-full object-cover max-h-96"/>
                    <p className="mt-2 text-gray-700">{post.caption}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Profile
