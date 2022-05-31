import { Link } from "gatsby";
import React from "react";

function AboutPage() {
  return (
    <main>
      <title>About</title>
      <h1>About 페이지 입니다.</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <Link to="/">HomePage</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/test">test</Link>
        <br />
        <Link to="/test-space">testSpace</Link>
      </div>
    </main>
  );
}

export default AboutPage;
