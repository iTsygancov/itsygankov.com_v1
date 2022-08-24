import 'prismjs/themes/prism-tomorrow.min.css';

import Prism from 'prismjs';
import { ReactNode, useEffect } from 'react';


type CodeHighlighterProps = {
  children: ReactNode,
  language: string
}


const CodeHighlighter = ({ children, language }: CodeHighlighterProps) => {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div>
      <pre>
        <code className={`language-${language}`}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default CodeHighlighter;
