import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    //상단
    <>
      <div className={container}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header>{data.site.siteMetadata.title}</header>
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
