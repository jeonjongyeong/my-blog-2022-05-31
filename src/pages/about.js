import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Layout from "../components/Layout";

function AboutPage() {
  return (
    <Layout pageTitle="About">
      <main>
        <title>About</title>
        <p>전종영 블로그</p>
      </main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/img.jpg"
      />
    </Layout>
  );
}

export default AboutPage;
