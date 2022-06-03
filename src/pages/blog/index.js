import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash.kebabcase";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <p>나의 블로그 페이지</p>
      {data.allMdx.nodes.map((node) => (
        <>
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <div>
              <ul>
                {node.frontmatter.tags
                  ? node.frontmatter.tags.map((tag) => (
                      <li key={kebabCase(tag)}>
                        <Link to={`/tags/${kebabCase(tag)}`}>
                          {kebabCase(tag)}
                        </Link>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </article>
        </>
      ))}
      <StaticImage
        alt="image"
        src="http://www.thedrive.co.kr/news/data/20210923/p1065600010144779_443_thum.jpg"
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          tags
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
