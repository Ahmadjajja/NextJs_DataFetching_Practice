// lib/load-posts.js

// The following function is shared
// with getStaticProps and API routes
// from a `lib/` directory
export async function loadPosts() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts/')
    // const data = await res.json()
  
    return  [{title: "DSA"}, {title: "SP"}, {title: "DSP"}]
  }