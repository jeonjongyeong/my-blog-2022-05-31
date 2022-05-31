import { Link } from "gatsby";
import React from "react";

function TestSpacePage() {
  return (
    <main>
      <title>test space</title>
      <h1>테스트 스페이스 페이지 입니다.</h1>
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

export default TestSpacePage;
