// const firebaseCredentials = require(`./credentials.json`)

module.exports = {
  siteMetadata: {
    title: `Restaurante Búho`,
    description: `Restaurante de parrilla, tú mismo puedes hacer tu asado. Restaurante campestre rodeado de naturaleza y bosque.`,
    author: `@felipeospina21`,
  },
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-breakpoints",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // {
    //   resolve: `gatsby-source-firebase-collections`,
    //   options: {
    //     // credential or appConfig
    //     credential: require(`./credentials.json`),
    //     // appConfig: {
    //     //   apiKey: "AIzaSyALFdXGKJ_ZAEgWOkvEj-M_x4ur-jmuLoM",
    //     //   authDomain: "buho-app-27082.firebaseapp.com",
    //     //   projectId: "buho-app-27082",
    //     //   storageBucket: "buho-app-27082.appspot.com",
    //     //   messagingSenderId: "384099593732",
    //     //   appId: "1:384099593732:web:19453f5842cf8126d44f51",
    //     //   measurementId: "G-5WBN5QM2YL",
    //     // },
    //     types: [
    //       {
    //         type: `Kioskos`,
    //         collection: `kioskos`,
    //         map: doc => ({
    //           capacity: doc.capacity,
    //         }),
    //       },
    //     ],
    //   },
    // },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyALFdXGKJ_ZAEgWOkvEj-M_x4ur-jmuLoM",
          authDomain: "buho-app-27082.firebaseapp.com",
          projectId: "buho-app-27082",
          storageBucket: "buho-app-27082.appspot.com",
          messagingSenderId: "384099593732",
          appId: "1:384099593732:web:19453f5842cf8126d44f51",
          measurementId: "G-5WBN5QM2YL",
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                // Your custom transformers
              ],
              services: {
                // The service-specific options by the name of the service
              },
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/buho-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
