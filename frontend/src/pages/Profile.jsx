import UserCard from "../components/UserCard";
import Posts from "../components/Posts";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-6 px-6 gap-8">
      <UserCard />
      <Posts />
    </div>
  );
};
export default Profile;
