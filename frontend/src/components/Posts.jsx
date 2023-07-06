import { BsFileEarmarkImage } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import { useState } from "react";
import Post from "./Post";
// Toast
import { toast } from "react-hot-toast";

const Posts = () => {
  const [description, setDescription] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const onFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgFile(event.target.files[0]);
      setAudioFile(event.target.files[0]);
      setVideoFile(event.target.files[0]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("description", description);
      formData.append("imgFile", imgFile);
      formData.append("audioFile", audioFile);
      formData.append("videoFile", videoFile);

      console.log(formData.get("imgFile"));
      // console.log(JSON.stringify(formData));

      // const response = await createProduct(formData, state.user.token);

      // dispatchProduct({ type: "CREATE_PRODUCT", payload: response });
      // navigate("/dashboard");
      toast.success("New Post Added😎");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col">
      <form
        onSubmit={handleFormSubmit}
        className="card h-[11rem] bg-base-100 shadow-xl py-6 px-4"
      >
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
              required
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered input-accent w-full"
            />
          </div>
        </div>
        <hr className="mt-2" />
        <div className="flex items-center justify-evenly mt-4">
          <div className="flex gap-12">
            <input
              id="audio"
              type="file"
              hidden
              accept="audio/*"
              onChange={onFileChange}
            />
            <input
              id="video"
              type="file"
              hidden
              accept="video/*"
              onChange={onFileChange}
            />
            <input
              id="image"
              type="file"
              hidden
              accept="image/*"
              onChange={onFileChange}
            />
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
      </form>
      <div>
        <Post />
      </div>
    </div>
  );
};
export default Posts;
