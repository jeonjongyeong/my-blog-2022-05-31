import { Link } from "gatsby";
import React from "react";

function Head() {
  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Link to="/">HomePage</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/test">test</Link>
      <br />
      <Link to="/test-space">testSpace</Link>
    </div>
  );
}

export default Head;
