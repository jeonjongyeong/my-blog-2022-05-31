import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/test">test</Link>
      <br />
      <Link to="/test-space">testSpace</Link>
    </main>
  );
};

export default IndexPage;
