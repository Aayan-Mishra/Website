import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const BLOG_DIR = path.join(process.cwd(), 'src/blog');

export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  readingTime: string;
}

export async function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR);
  
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.mdx'))
      .map(async file => {
        const filePath = path.join(BLOG_DIR, file);
        const source = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(source);
        
        const mdxSource = await serialize(content);

        return {
          id: file.replace(/\.mdx$/, ''),
          frontmatter: data as BlogFrontmatter,
          content: mdxSource
        };
      })
  );

  return posts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export async function getPostById(id: string) {
  const filePath = path.join(BLOG_DIR, `${id}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(source);
  const mdxSource = await serialize(content);

  return {
    frontmatter: data as BlogFrontmatter,
    content: mdxSource
  };
} 