import { RiUserSettingsFill } from "react-icons/ri";
import { MdLocationPin } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const UserCard = () => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="avatar flex items-center gap-x-4">
            <div className="w-12 rounded-full">
              <img src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
            </div>
            <div>
              <h2>Name</h2>
              <h3>Email</h3>
            </div>
          </div>
          <div>
            <RiUserSettingsFill />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <MdLocationPin />
            <h2>Location</h2>
          </div>
          <div className="flex items-center gap-4">
            <BiBriefcase />
            <h2>Designation</h2>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mt-4">
          <div className="flex items-center gap-4 justify-between">
            <h2>Profile Views in last 7 days</h2>
            <h2>21</h2>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <h2>Impressions in last 7 days</h2>
            <h2>1021</h2>
          </div>
        </div>
        <hr className="mt-4" />
        <div className="mt-4">
          <div className="flex items-center gap-4 justify-between">
            <AiFillLinkedin />
            <div>
              <h2>LinkedIn</h2>
              <h2>Network Platform</h2>
              <div></div>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between">
            <AiFillGithub />
            <div>
              <h2>Github</h2>
              <h2>Developers Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCard;
