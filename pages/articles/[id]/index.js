import { useRouter } from "next/router";

const Index = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div style={{ textAlign: "center" }}>
      <h3> ID No: {article.id}</h3>
      <h3>
        <i> &#9733; Title: {article.title} </i>
      </h3>
      <p> &#9812; {article.body} &#9812; </p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  const paths = data.map((article) => {
    return { params: { id: article.id.toString() } };
  });

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: { article: data }, // will be passed to the page component as props
  };
}

export default Index;
