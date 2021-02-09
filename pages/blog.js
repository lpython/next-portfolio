import Link from 'next/link';
import Layout from '../components/Layout';
import Post from './post';

const PostLink = ({ title, slug  = "react-post" }) => (
  <li>
    <Link as={slug} href={`/post?title=${title}`}>
      <a>{title}</a>  
    </Link>  
  </li>  
)


export default function Blog() {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink title="react"/>
        <PostLink title="angular"/>
        <PostLink title="vue"/>
      </ul>    
    </Layout>
  );
} 