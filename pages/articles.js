import Link from "next/link";
import articleStyle from "../styles/Articles.module.css";

const articles = ({ articles }) => {
  return (
    <div>
      <h2>Numbers of articles have {articles.length}</h2>
      <div className={articleStyle.gridStyle}>
        {articles.map((article) => (
          <div className={articleStyle.articleBox} key={article.id}>
            <h3 style={{ minHeight: "3rem" }}>
              <i>&#8594; {article.title}</i>
            </h3>
            <p>{article.body}</p>
            <button className={articleStyle.btn}>
              <Link href={`/articles/${article.id}`}>
                click here for more details
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: { articles: data },
  };
}
export default articles;
