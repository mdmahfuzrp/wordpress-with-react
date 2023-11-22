import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/posts`;

    axios
      .get(url)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 md:max-w-[1300px]">
      {Object.keys(posts).length
        ? posts.map((post, index) => (
            <div
              key={index}
              className="shadow-lg border border-[#f2f2f2] py-4 px-5 rounded-xl flex flex-col justify-between"
            >
              <div>
                <img
                  src={
                    "https://flow-e.com/wp-content/uploads/bfi_thumb/12-Marketing-Blogs-You-Should-Be-Reading-34ox9rrp29n11q4d1s5pfu.jpg"
                  }
                  alt={post?.title?.rendered}
                  className="rounded-t-md mb-3 border border-black"
                />
                <h2 key={index} className="text-[24px] font-semibold">
                  {post?.title?.rendered}
                </h2>
                <p
                  className="text-base"
                  dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
                ></p>
              </div>
              <Link to={`/posts/${post?.id}`} className="bg-blue-500 w-fit mt-2 text-white py-[6px] px-2 rounded-md">
                Read More
              </Link>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Posts;
