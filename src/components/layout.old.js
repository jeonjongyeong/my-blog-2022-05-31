import { Link } from "gatsby";
import React from "react";

function Layout({ children }) {
  return (
    //상단
    <>
      <main>
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="/">HomePage</Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <Link to="/test">test</Link>
          <br />
          <Link to="/test-space">testSpace</Link>
        </div>
        {children}
        {/* 하단 */}
        <div>CopyRight</div>
      </main>
    </>
  );
}

export default Layout;
