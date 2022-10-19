import React from 'react';
import articleStyles from '../styles/Article.module.css';

const ArticleList = ({articles,index}) => {
  return (
    <div className={articleStyles.grid}>
   {articles.map((article)=>(
  <h3 key={index}>{article.title}</h3>


))}
    </div>
  )
}

export default ArticleList