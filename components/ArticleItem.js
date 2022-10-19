import React from 'react';
import articleStyles from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItem = ({article}) => {
  return (
    <div className={articleStyles.card}>
        <Link href='/articles/[id]' as={`/articles/${article.id}`}>
            <a>
                {article.title}&rarr;
            </a>

        </Link>
        <h3>{article.body}</h3>

    </div>
  )
}

export default ArticleItem