const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts"

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

export async function GET() {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL)
  const posts = await request.json()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts)

  const res = new Response(sitemap, {
    headers: {
      "content-type": "text/xml",
    },
  })

  return res
}
