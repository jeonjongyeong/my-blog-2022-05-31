import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Layout from "../components/layout";

function AboutPage() {
  return (
    <Layout pageTitle="Index">
      <main>
        <title>About</title>
      </main>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/img.jpg"
      />
    </Layout>
  );
}

export default AboutPage;
