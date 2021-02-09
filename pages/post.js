import Layout from '../components/Layout';

export default function Post({ url }) {
  return (
    <Layout title={url.query.title}>
      <p>Quam esse maxime quod quos et numquam. Quas qui et. Maiores modi dolore. Quos inventore nulla quo impedit nesciunt sed.</p>
    </Layout>
  );
} 