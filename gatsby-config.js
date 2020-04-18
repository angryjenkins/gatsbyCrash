module.exports = {
    siteMetadata: {
        title: `angryjenkins`,
        description: `Matt Matin's Adventures in New Media.`,
        author: `@angryjenkins`,
        keywords: ['angryjenkins','Matt Martin', 'Matthew Martin', 'web development','reactjs','angularjs','gatsbyjs','javascript','nodejs','new media', 'digital', 'front end','linux','ux','nyc'],
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/ajlogo.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/blog`,
                name: 'blog',
            },
        },
        'gatsby-transformer-remark',
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
