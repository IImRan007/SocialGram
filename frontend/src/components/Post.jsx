import { useContext, useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostContext } from "../context/post/PostContext";
import { getAllPosts } from "../context/post/PostActions";

const Post = () => {
  const [postData, setPostData] = useState([]);
  const { dispatchPost } = useContext(PostContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      dispatchPost({ type: "GET_POSTS", payload: data });
      setPostData(data);
    };

    fetchPosts();
  }, [dispatchPost]);

  if (postData) {
    return postData.map((post) => <PostItem key={post._id} post={post} />);
  }
};
export default Post;
