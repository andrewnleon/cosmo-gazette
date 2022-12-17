import type { NextPage } from "next";
import Cover from "../components/Cover";
import RecentWork from "../components/RecentWork";
import Review from "../components/Review";

const Home: NextPage = () => {
  return (
    <>
      <main role="main">
        <Cover />
        <RecentWork />
        <Review />
      </main>
    </>
  );
};

export default Home;