module.exports = {
  siteMetadata: {
    title: `My Blog 2022-05-31`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};