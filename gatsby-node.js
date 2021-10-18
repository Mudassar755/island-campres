const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const allPosts = await graphql(`
    {
        allWpPost {
            nodes {
              title
              content
              featuredImage {
                node {
                  sourceUrl
                  srcSet
                }
              }
              slug
              categories {
                nodes {
                  slug
                }
              }
            }
          }
}
`)
//  console.log("data==>>")
allPosts.data.allWpPost.nodes.forEach(item => {
    createPage({
      path: `/${item.categories.nodes.map(category => category.slug)}/${item.slug}`,
      component: path.resolve(`${__dirname}/src/templates/blogPost.jsx`),
      context: {
        data: item
      },
    })
  })
 
}