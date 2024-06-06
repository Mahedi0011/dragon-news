import { useLoaderData } from "react-router-dom";
import BrakingNews from "../BrakingNews/BrakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";



const Home = () => {

  const news = useLoaderData()

  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-4 gap-6 grid-cols-1">
        <div className=""><LeftSideNav></LeftSideNav></div>
        <div className="md:col-span-2">
          {
            news.map(aNews => <NewsCard key={aNews.id} news={aNews}></NewsCard>)
          }</div>
        <div className=""><RightSideNav></RightSideNav></div>
      </div>
    </div>
  );
};

export default Home;