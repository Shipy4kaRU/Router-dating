import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Articles = function () {
  return (
    <section>
      <p>Articles Pages</p>
      <ul>
        <li>
          <Link to="/articles/article1">Article 1</Link>
        </li>
        <li>
          <Link to="/articles/article2">Article 2</Link>
        </li>
        <li>
          <Link to="/articles/article3">Article 3</Link>
        </li>
        <li>
          <Link to="/articles/article4">Article 4</Link>
        </li>
        <li>
          <Link to="/articles/article5">Article 5</Link>
        </li>
      </ul>
    </section>
  );
};

export default Articles;
