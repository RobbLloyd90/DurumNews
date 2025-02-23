import ArticleList from "./ArticleList";

const Home = ({ data }) => {
  return (
    <section className="background-container">
      <ArticleList articles={data.slice(0, 10)} />
    </section>
  );
};

export default Home;
