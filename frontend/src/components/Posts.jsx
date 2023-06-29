const Posts = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl py-6 px-4">
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
      </div>
    </>
  );
};
export default Posts;
