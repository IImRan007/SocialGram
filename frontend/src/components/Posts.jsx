import { useContext, useEffect, useState } from "react";
// Components
import PostItem from "./PostItem";
// Context
import { PostContext } from "../context/post/PostContext";
import { getAllPosts } from "../context/post/PostActions";
// Lazy Loading Component
import Lottie from "lottie-react";
import Loader from "../assets/loading.json";

const Posts = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { dispatchPost } = useContext(PostContext);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const data = await getAllPosts();
      dispatchPost({ type: "GET_POSTS", payload: data });
      setPostData(data);
    };

    fetchPosts();
    setLoading(false);
  }, [dispatchPost]);

  if (!postData || loading) {
    return (
      <div className="flex justify-center items-center min-h-[100vh]">
        <Lottie animationData={Loader} />
      </div>
    );
  } else {
    return postData.map((post) => <PostItem key={post._id} post={post} />);
  }
};
export default Posts;
