import Posts from "../components/Posts";
import SponsorCard from "../components/SponsorCard";
import UserCard from "../components/UserCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-6 gap-8">
      <UserCard />
      <Posts />
      <SponsorCard />
    </div>
  );
};
export default Home;
