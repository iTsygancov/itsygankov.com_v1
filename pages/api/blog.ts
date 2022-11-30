import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { postFilePaths, POSTS_PATH } from '../../utils/mdxUtils';


export default function posts(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const posts = postFilePaths.map((filePath) => {
      const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
      const { data } = matter(source);
      return { data, filePath };
    });
    res.status(200).json(posts);
  }
}