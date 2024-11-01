import { Route } from "react-router-dom/cjs/react-router-dom.min";

const Home = function () {
  return (
    <section>
      <h1>Home Page</h1>
      <Route path="/home/new-user">
        <h2>Welcome, guys!</h2>
        <p>We're happy to see you here!</p>
      </Route>
    </section>
  );
};

export default Home;
