import React from 'react'
import axios from 'axios'

const aboutHtml = `
<span>
  Jonathan Pan is a Executive Manager at Crown Champ Shanghai where he spends 30% of his time working with 
  Chinese investors. He travels to Shanghai and Beijing to help investors understand American real estate. 
<br><br>
Jonathan received his Bachelor of Science degree from Eastern Michigan University. After graduation, he started 
work at RE/MAX Crown Properties. This is where he began his specialization on working with first time home buyers 
and investors. His third year, he sold more than $3M in Michigan excluding his $4M sales in other states. 
Jonathan is fluent in both Mandarin and English. He is specializes his expertise in Washtenaw, Wayne, 
and Oakland County. 
<br><br>
On his free time, he loves going out to play chess, billards, darts, and socializing. Passionate on building 
relationships and meeting new people.
</span>
`

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
    <Head>
      <title>Jonathan Pan Real Estate</title>

      <meta charSet="UTF-8"/>
      <meta name="google-site-verification" content="AUPhx0-UzaJdcnMZoZ-QZMkBxCWJtmxxBYCL4clmddA"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <link rel="stylesheet" type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>

      <link rel="stylesheet" type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"/>

    </Head>
    <Body>{children}</Body>
    </Html>
  ),
  getSiteData: async () => {
    const email = 'panjona@gmail.com'
    const phoneNumber = '(734) 717-8336'
    return { email, phoneNumber, aboutHtml }
  },
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      // {
      //   path: '/about',
      //   component: 'src/containers/About',
      // },
      // {
      //   path: '/blog',
      //   component: 'src/containers/Blog',
      //   getData: () => ({
      //     posts,
      //   }),
      //   children: posts.map(post => ({
      //     path: `/post/${post.id}`,
      //     component: 'src/containers/Post',
      //     getData: () => ({
      //       post,
      //     }),
      //   })),
      // },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  siteRoot: 'https://panjonathan.com'
}
