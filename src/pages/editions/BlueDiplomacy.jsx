import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const BlueDiplomacy = () => {
  const article = articles.find((a) => a.id === 9 && a.issue===4);// ID

  return article ? (
    <ArticlePage
      id={article.id}
      issue={article.issue}
      volume={article.volume}
      title={article.title}
      author={article.author}
      abstract={article.abstract}
      intro={article.intro}
      content={article.content}
      conclusion={article.conclusion}
      acknowledegements = {article.acknowledegements}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default BlueDiplomacy;
