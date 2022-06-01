import { Link } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  return (
    //상단
    <>
      <div className={container}>
        <title>{pageTitle}</title>
        <div style={{ display: "flex", gap: 10 }}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                HomePage
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <main>
          {" "}
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
        {/* 하단 */}
        <div>CopyRight</div>
      </div>
    </>
  );
}

export default Layout;
