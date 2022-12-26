import Link from "next/link";
import styles from "../../styles/firstPage.module.css";
import Layout from "../../components/layout";
const { Sider, Content } = Layout;
// pages/blog.js
import { loadPosts } from '../../lib/load-posts'


export default function FirstPost({ posts }) {
  // console.log("post", post);
  // const {firstName, secondName} = data;
  // console.log("firstName: ", firstName);
  // console.log("secondName: ", secondName);
  return (
    <Layout>
      {/* <h1>First page</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <h3>firstname: {firstName}</h3>
      <h3>secondname: {secondName}</h3>
      <style jsx>{`

      `}</style> */}
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </Layout>
  );
}

export const config = {
  runtime: "nodejs",
};

//getServerSideProps

// // This gets called on every request
// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   )
//   // Fetch data from external API
//   const response = await fetch(`https://mocki.io/v1/7c04d997-598b-49b9-b115-7b8c61049f83`)
//   const data = await response.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

// export async function getServerSideProps(context) {
//   console.log('====================================');
//   console.log("Context: ", context);
//   console.log('====================================');
//   return {
//     props: {firstName: "Ahmad", secondName: "Jajja"}, // will be passed to the page component as props
//   }
// }

//getStaticPath && getStaticProps

// // pages/posts/[id].js

// // Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// // pages/posts/[id].js

// export async function getStaticPaths() {
//   // When this is true (in preview environments) don't
//   // prerender any static pages
//   // (faster builds, but slower initial page load)
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: 'blocking',
//     }
//   }

//   // Call an external API endpoint to get posts
//   const res = await fetch('https://mocki.io/v1/7c04d997-598b-49b9-b115-7b8c61049f83')
//   const posts = await res.json()

//   // Get the paths we want to prerender based on posts
//   // In production environments, prerender all pages
//   // (slower builds, but faster initial page load)
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   // { fallback: false } means other routes should 404
//   return { paths, fallback: false }
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context) {
//   // console.log('====================================');
//   // console.log("context", context);
//   // console.log('====================================');
//   return {
//     // Passed to the page component as props
//     props: { post: {firstName: "Ahmad", secondName: "Jajja"} }
//   }
// }

//getStaticProps


// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   // const res = [{"title": "DSA"}, {"title": "SP"}]
//   const posts = [{title: "DSA"}, {title: "SP"}, {title: "DSP"}]

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }



// This function runs only on the server side
export async function getStaticProps() {
  // Instead of fetching your `/api` route you can call the same
  // function directly in `getStaticProps`
  const posts = await loadPosts()

  // Props returned will be passed to the page component
  return { props: { posts } }
}
