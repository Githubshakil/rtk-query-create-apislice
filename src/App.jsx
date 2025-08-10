import React from "react";
import { useGetAllPostsQuery } from "./redux/services/posts/postApi";

const App = () => {
  const { data, error, isLoading } = useGetAllPostsQuery();
  console.log(data);

  if (error) return <div>Something Went Wrong</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div>
        <ul className="p-5">
          {data.map((post, id) => (
            <li key={id}>
              {post.id}.
              {post.title}
              
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
