import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
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
        <div>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                HomePage
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog/" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>

        <main>
          {" "}
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
        {/* 하단 */}
        <br />
        <div>CopyRight</div>
      </div>
    </>
  );
}

export default Layout;
