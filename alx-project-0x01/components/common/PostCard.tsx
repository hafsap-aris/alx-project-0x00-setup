const PostCard=()=>{
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Post Title</h2>
            <p className="text-gray-700 mb-4">This is a brief description of the post content. It provides an overview of the main points discussed in the post.</p>
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
        </div>
    );
}
export default PostCard;