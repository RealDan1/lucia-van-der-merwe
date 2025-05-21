import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Unlocking Your Potential: The Power of Self-Reflection',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur,
          nisi nisl aliquam enim, nec dictum nisi nisl eget sapien. Suspendisse potenti. Etiam ac mauris vitae urna
          fermentum tincidunt.
        </p>
        <p>
          Vivamus euismod, nisi eu consectetur consectetur, nisl nisl aliquam enim, nec dictum nisi nisl eget sapien.
          Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum nisi nisl eget sapien.
        </p>
        <blockquote className="quote">"Self-reflection is the school of wisdom." – Baltasar Gracián</blockquote>
        <p>
          Morbi nec metus nec lorem dictum feugiat. Proin euismod, urna eu tincidunt consectetur, nisi nisl aliquam
          enim, nec dictum nisi nisl eget sapien.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: 'Building Resilience in a Fast-Paced World',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod, urna eu tincidunt consectetur, nisi nisl
          aliquam enim, nec dictum nisi nisl eget sapien.
        </p>
        <p>
          Suspendisse potenti. Etiam ac mauris vitae urna fermentum tincidunt. Vivamus euismod, nisi eu consectetur
          consectetur, nisl nisl aliquam enim, nec dictum nisi nisl eget sapien.
        </p>
        <blockquote className="quote">
          "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself
          up." – Mary Holloway
        </blockquote>
        <p>
          Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum nisi nisl eget sapien.
        </p>
      </>
    ),
  },
];

const Blog = () => {
  const [selectedId, setSelectedId] = useState(articles[0].id);
  const selectedArticle = articles.find((a) => a.id === selectedId)!;

  return (
    <div className="blog-page fade-in">
      <aside className="blog-sidebar">
        <h2 className="sidebar-heading">Articles</h2>
        <ul>
          {articles.map((article) => (
            <li
              key={article.id}
              className={`sidebar-link${selectedId === article.id ? ' active' : ''}`}
              onClick={() => setSelectedId(article.id)}
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') setSelectedId(article.id);
              }}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </aside>
      <main className="blog-content">
        <h1 className="blog-title">{selectedArticle.title}</h1>
        <div className="blog-article">{selectedArticle.content}</div>
      </main>
    </div>
  );
};

export default Blog;
