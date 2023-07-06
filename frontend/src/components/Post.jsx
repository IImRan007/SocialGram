import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";

const Post = () => {
  const [commentDiv, setCommentDiv] = useState(false);

  return (
    <div className="card bg-base-100 shadow-xl py-6 px-4 mt-10">
      <div className="flex items-center gap-4">
        <div className="avatar flex items-center gap-x-4">
          <div className="w-12 rounded-full">
            <img src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
          </div>
        </div>
        <div>
          <h2>User Name</h2>
          <h3 className="text-[14px]">Moments Ago</h3>
        </div>
      </div>
      <div className="mt-4">
        <img
          src="https://cdn.pixabay.com/photo/2023/06/21/09/52/pied-flycatcher-8078925_1280.jpg"
          alt="post"
          className="max-w-full h-auto rounded-xl"
        />
      </div>
      <div className="mt-4">
        <video width="850" height="500" controls className="rounded-xl">
          <source
            src="https://drive.google.com/uc?id=1ufu9Ig_L1wg7Sj_GQRjDrHF7Ktfy0LCf"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="mt-4">
        <audio
          className="w-full"
          src="https://firebasestorage.googleapis.com/v0/b/butterfly-a800b.appspot.com/o/hassanansari211%40gmail.com%2Faudio%2Fmpeg?alt=media&amp;token=f40cc428-d7e1-419b-be42-84abc0c60f29"
          controls
        ></audio>
      </div>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        eveniet ullam doloribus natus impedit harum delectus amet beatae quasi
        unde! A explicabo quasi fugit unde eum? Quod molestias animi, explicabo
        neque sequi aspernatur? Dolore aperiam soluta, ducimus, error iure
        voluptas quod consequuntur mollitia iste accusamus repudiandae qui
        commodi? Qui accusamus tempora laborum quibusdam, ratione officia,
        pariatur distinctio delur nisi eveniet accusantium, et neque tempore
        architecto magni numquam vero, commodi distinctio iure ipsum. Nisi,
        reiciendis dignissimos.
      </div>
      <div className="flex mt-4 gap-4">
        <AiOutlineHeart size={22} cursor={"pointer"} />
        <BiComment
          size={22}
          cursor={"pointer"}
          onClick={() =>
            !commentDiv ? setCommentDiv(true) : setCommentDiv(false)
          }
        />
      </div>
      {commentDiv ? (
        <div className="card bg-[#1d1d1d] shadow-xl py-6 px-4 mt-4">
          <div className="flex items-center gap-4">
            <div className="avatar flex items-center gap-x-4">
              <div className="w-8 rounded-full">
                <img src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <h2>User Name</h2>
              <h3 className="text-[14px]">Moments Ago</h3>
            </div>
          </div>
          <div className="px-12 mt-2 font-semibold">Comment</div>
          <hr className="mt-2" />
          <div className="mt-4 flex items-center  justify-between">
            <input
              type="text"
              placeholder="Write comment"
              className="input input-bordered input-accent w-full max-w-xs"
            />
            <div className="bg-[#526362] rounded-md text-center p-2">
              <AiOutlineSend size={20} cursor={"pointer"} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default Post;
