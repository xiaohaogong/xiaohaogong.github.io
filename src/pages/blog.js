// NOW USING NATIVE DOCUSAURUS SUPPORT
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * @typedef {Object} BlogPost - creates a new type named 'BlogPost'
 * @property {string} date - eg "2021-04-24T00:00:00.000Z"
 * @property {string} formattedDate - eg "April 24, 2021"
 * @property {string} title - eg "The Service Now API and TypeScript Conditional Types"
 * @property {string} permalink - eg "/2021/04/24/service-now-api-and-typescript-conditional-types"
 */

/** @type {BlogPost[]} */
const allPosts = ((ctx) => {
  /** @type {string[]} */
  const blogpostNames = ctx.keys();

  return blogpostNames.reduce((blogposts, blogpostName, i) => {
    const module = ctx(blogpostName);
    const { date, formattedDate, title, permalink } = module.metadata;
    return [
      ...blogposts,
      {
        date,
        formattedDate,
        title,
        permalink,
      },
    ];
  }, /** @type {BlogPost[]}>} */ ([]));
  // @ts-ignore
})(require.context('../../blog/', true));

const postsByYear = allPosts.reduceRight((posts, post) => {
  const year = post.date.split('-')[0];
  const yearPosts = posts.get(year) || [];
  return posts.set(year, [post, ...yearPosts]);
}, /** @type {Map<string, BlogPost[]>} */ (new Map()));

const yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({
  year,
  posts,
}));

function Year(
  /** @type {{ year: string; posts: BlogPost[]; }} */ { year, posts }
) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{year}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.date}>
            <Link to={post.permalink}>
              {post.formattedDate} - {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogArchive() {
  return (
    <Layout title="博客归档">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">博客归档</h1>
          <p className="hero__subtitle">历史</p>
        </div>
      </header>
      <main>
        {yearsOfPosts && yearsOfPosts.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {yearsOfPosts.map((props, idx) => (
                  <Year key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default BlogArchive;