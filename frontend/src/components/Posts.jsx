import { BsFileEarmarkImage } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="flex flex-col">
      <div className="card h-[11rem] bg-base-100 shadow-xl py-6 px-4">
        <div className="flex items-center gap-4">
          <div className="avatar flex items-center gap-x-4">
            <div className="w-12 rounded-full">
              <img src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
            </div>
          </div>
          <div className="w-full">
            <textarea
              type="text"
              placeholder="What's on your mind..."
              className="input input-bordered input-accent w-full"
            />
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex items-center justify-evenly mt-4">
          <div className="flex gap-12">
            <div className="flex items-center gap-2 cursor-pointer">
              <BsFileEarmarkImage />
              <h2>Image</h2>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <BsPlayCircle />
              <h2>Clip</h2>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <AiFillAudio />
              <h2>Audio</h2>
            </div>
            <button className="btn btn-info">Post</button>
          </div>
        </div>
      </div>
      <div>
        <Post />
      </div>
    </div>
  );
};
export default Posts;
