import { useState } from "react";
import { useAddNewPostMutation } from "../redux/services/posts/postApi";


const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const [addNewPost] = useAddNewPostMutation();
  console.log(addNewPost);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId,
    };
    await addNewPost(newPost)
  };

  return (
    <div className="p-5 shadow-md rounded-lg max-w-md ">
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label className="block mb-1 ">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Post Title"
            className="p-1 border focus:outline-none w-full"
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            placeholder="description"
            className="p-1 border focus:outline-none w-full"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-1 ">UserId</label>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            placeholder="Post userId"
            className="p-1 border focus:outline-none w-full"
          />
        </div>

        <button type="submit" className="px-6 py-2 bg-blue-500 text-white ">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostPage;
