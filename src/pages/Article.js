import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react";

const Article = function () {
  const params = useParams();
  return (
    <Fragment>
      <h1>Article Info</h1>
      <p>{params.articleId}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Fragment>
  );
};

export default Article;
