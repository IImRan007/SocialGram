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
            <input id="audio" type="file" hidden accept="audio/*" />
            <input id="video" type="file" hidden accept="video/*" />
            <input id="image" type="file" hidden accept="image/*" />
            <div className="flex items-center gap-2 hover:bg-[#424242] hover:w-[72px] hover:h-[40px] hover:rounded-[6px]">
              <BsFileEarmarkImage />
              <label htmlFor="image" className="cursor-pointer">
                Image
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-[#424242] hover:w-[72px] hover:h-[40px] hover:rounded-[6px]">
              <BsPlayCircle />
              <label htmlFor="video" className="cursor-pointer">
                Clip
              </label>
            </div>
            <div className="flex items-center gap-2 hover:bg-[#424242] hover:w-[72px] hover:h-[40px] hover:rounded-[6px]">
              <AiFillAudio />
              <label htmlFor="audio" className="cursor-pointer">
                Audio
              </label>
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
