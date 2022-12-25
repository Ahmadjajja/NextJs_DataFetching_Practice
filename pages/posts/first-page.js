import Link from "next/link";
import styles from "../../styles/firstPage.module.css";   
import Layout from '../../components/layout';
const { Sider, Content } = Layout;

export default function FirstPost({ data }) {
  console.log("data", data);
  const {firstName, secondName} = data;
  console.log("firstName: ", firstName);
  console.log("secondName: ", secondName);
  return (
    <Layout>

      <h1>First page</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <h3>firstname: {firstName}</h3>
      <h3>secondname: {secondName}</h3>
      <style jsx>{`

      `}</style>
    </Layout>
  );
}


export const config = {
  runtime: 'nodejs',
}



// This gets called on every request
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  // Fetch data from external API
  const response = await fetch(`https://mocki.io/v1/7c04d997-598b-49b9-b115-7b8c61049f83`)
  const data = await response.json()

  // Pass data to the page via props
  return { props: { data } }
}




// export async function getServerSideProps(context) {
//   console.log('====================================');
//   console.log("Context: ", context);
//   console.log('====================================');
//   return {
//     props: {firstName: "Ahmad", secondName: "Jajja"}, // will be passed to the page component as props
//   }
// }



// // pages/posts/[id].js

// // Generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//     fallback: false, // can also be true or 'blocking'
//   }
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps(context) {
//   return {
//     // Passed to the page component as props
//     props: { post: {firstName: "Ahmad", secondName: "Jajja"} }
//   }
// }
