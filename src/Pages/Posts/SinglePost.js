import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();

  const [postData, setPostData] = useState([]);
  console.log(id);
  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/posts/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPostData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {Object.keys(postData).length ? (
        <>
        <img src={postData?.featured_src} className="w-11/12 mx-auto rounded-md md:max-w-[800px] h-[400px] object-cover" alt={postData?.title?.rendered} />
          <h1 className="text-[24px] font-semibold">{postData?.title?.rendered}</h1>
          <p
            dangerouslySetInnerHTML={{ __html: postData.content.rendered }}
            className=""
          ></p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SinglePost;
