import articles from "../../data/articles";
import ArticlePage from "../../components/ArticlePage";

const LifeCycleEnvironmentalImpactAssessment = () => {
  const article = articles.find((a) => a.id === 4); // ID 

  return article ? (
    <ArticlePage
      title={article.title}
      author={article.author}
      intro={article.intro}
      content={article.content}
      references={article.references}
    />
  ) : (
    <p>Article not found</p>
  );
};

export default LifeCycleEnvironmentalImpactAssessment;
