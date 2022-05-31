import { Link } from "gatsby";
import React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>HomePage</title>
      <h1>Welcome to my Gatsby site!!</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/">HomePage</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/test">test</Link>
        <br />
        <Link to="/test-space">testSpace</Link>
      </div>
      <p>I'm making this</p>
    </main>
  );
};

export default IndexPage;
