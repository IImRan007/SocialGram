import { RiUserSettingsFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Icons
import { MdLocationPin } from "react-icons/md";
import { BiBriefcase } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { VscEdit } from "react-icons/vsc";
// Context
import { UserContext } from "../context/user/UserContext";
import { ProfileContext } from "../context/profile/ProfileContext";
import { getProfile } from "../context/profile/ProfileActions";

const UserCard = () => {
  const [userInfo, setUserInfo] = useState({
    userLocation: "",
    userDesignation: "",
  });
  const [profileData, setProfileData] = useState([]);
  const { userState } = useContext(UserContext);
  const { profileState, dispatchProfile } = useContext(ProfileContext);

  const { userLocation, userDesignation } = userInfo;

  const location = useLocation();

  useEffect(() => {
    const fetchProfiles = async () => {
      const data = await getProfile(userState.user.token);
      dispatchProfile({ type: "GET_USER_PROFILE", payload: data });
      setProfileData(data);
    };
    fetchProfiles();
  }, []);

  const handleChange = (e) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl py-6 px-4 h-[25rem]">
        <div className="flex items-center justify-between">
          <div className="avatar flex items-center gap-x-4">
            <div className="w-12 rounded-full">
              <img src="https://i.pinimg.com/474x/0a/a8/58/0aa8581c2cb0aa948d63ce3ddad90c81.jpg" />
            </div>
            <div className="w-40 h-12">
              <h2 className="w-fit">
                {userState.user ? userState.user?.name : "Name"}
              </h2>
              <h3 className="w-fit">
                {userState.user ? userState.user?.email : "Email"}
              </h3>
            </div>
          </div>
          <Link to="/profile">
            <RiUserSettingsFill className="cursor-pointer" />
          </Link>
        </div>
        <hr className="mt-4" />
        <div className="mt-4">
          <div className="flex items-center gap-4">
            <MdLocationPin />
            <div className="w-full flex justify-between items-center">
              <h2>
                {profileData &&
                  (profileData ? profileData[0]?.location : "Location")}
              </h2>
              {location.pathname === "/profile" ? (
                <VscEdit
                  cursor={"pointer"}
                  onClick={() => window.my_modal_5.showModal()}
                />
              ) : (
                ""
              )}
            </div>
            {/* Location Modal */}
            <dialog id="my_modal_5" className="modal modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Location</h3>
                <input
                  type="text"
                  id="userLocation"
                  value={userLocation}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="input input-bordered input-accent w-full mt-4"
                />
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Ok</button>
                </div>
              </form>
            </dialog>
          </div>
          <div className="flex items-center gap-4">
            <BiBriefcase />
            <div className="w-full flex justify-between items-center">
              <h2>
                {profileData &&
                  (profileData ? profileData[0]?.designation : "Designation")}
              </h2>
              {location.pathname === "/profile" ? (
                <VscEdit
                  cursor={"pointer"}
                  onClick={() => window.my_modal_6.showModal()}
                />
              ) : (
                ""
              )}
            </div>
            {/* Designation Modal */}
            <dialog id="my_modal_6" className="modal modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Designation</h3>
                <input
                  type="text"
                  value={userDesignation}
                  id="userDesignation"
                  onChange={handleChange}
                  placeholder="Enter your designation"
                  className="input input-bordered input-accent w-full mt-4"
                />
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Ok</button>
                </div>
              </form>
            </dialog>
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
            <div className="flex items-center gap-4">
              <AiFillLinkedin size={22} />
              <div>
                <h2>LinkedIn</h2>
                <h2>Network Platform</h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LiaExternalLinkAltSolid size={20} cursor={"pointer"} />
              {location.pathname === "/profile" ? (
                <VscEdit cursor={"pointer"} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 justify-between mt-2">
            <div className="flex items-center gap-4">
              <AiFillGithub size={22} />
              <div>
                <h2>Github</h2>
                <h2>Developers Platform</h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LiaExternalLinkAltSolid size={20} cursor={"pointer"} />
              {location.pathname === "/profile" ? (
                <VscEdit cursor={"pointer"} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCard;
