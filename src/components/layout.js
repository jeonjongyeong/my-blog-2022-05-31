import { Link } from "gatsby";
import React from "react";
import { container } from "./layout.module.css";

function Layout({ pageTitle, children }) {
  return (
    //상단
    <>
      <div className={container}>
        <title>{pageTitle}</title>
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="/">HomePage</Link>
          <br />
          <Link to="/about">About</Link>
        </div>

        <main>{children}</main>
        {/* 하단 */}
        <div>CopyRight</div>
      </div>
    </>
  );
}

export default Layout;
