import React from "react";
import { useParams } from "react-router";
import {
  useDeletePostByIdMutation,
  useGetPostByIdQuery,
  useUpdatePostByIdMutation,
} from "../redux/services/posts/postApi";

const Blogs = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, error } = useGetPostByIdQuery(id);
  const [deletePostById] = useDeletePostByIdMutation();
  const [updatePostById] = useUpdatePostByIdMutation();

  if (error) return <div>Somthing Went Wrong!</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleDeletePost = async () => {
    try {
      const response = await deletePostById(id);
      console.log(response);
    } catch (error) {
      console.error("Error Deleting post", error);
    }
  };

  const handleUpdatePost = async () => {
    const data = { 
      title: "updated post Titel",
       body: "Updated post body" };
    try {
      const response = await updatePostById({ id, data });
      console.log("Post Updating Successfully done!", response);
    } catch (error) {
      console.error("Error Updating post:", error);
    }
  };
  return (
    <div className="p-5 space-y-2">
      {/* <span>{data.id}</span> */}
      <h1 className="text-xl font-bold capitalize">
        {data.id}. {data.title}
      </h1>
      <p className=" text-gray-900 text-sm font-semibold max-w-120 mt-4 border border-gray-400 shadow-lg">
        {data.body}
      </p>
      <p className=" text-gray-900 text-sm font-semibold max-w-120 mt-4 border border-gray-400 shadow-lg">
        Author: {data.userId}
      </p>

      <button onClick={handleDeletePost} className="p-2 bg-red-500 text-white">
        Delete This Post
      </button>
      <button onClick={handleUpdatePost} className="p-2 bg-blue-500 text-white">
        UpDate This Post
      </button>
    </div>
  );
};

export default Blogs;
