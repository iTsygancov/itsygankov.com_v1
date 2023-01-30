import Image from 'next/image';
import { useRef, useState } from 'react';

import iconCopy from '../../../public/assets/icon-copy.svg';
import iconCopySuccess from '../../../public/assets/icon-copy--success.svg';


type PostPreTagProps = {
  children: any;
};

const cssPrefix = 'postPreTag';

const PostPreTag = ({ children }: PostPreTagProps) => {
  const textInput = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  const onExit = () => {
    setCopied(false);
  };

  const onCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(textInput?.current?.textContent);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div
      ref={textInput}
      onMouseLeave={onExit}
      className={cssPrefix}
    >
      <button
        className={
          `${cssPrefix}__button` +
          (copied ? ` ${cssPrefix}__button--success` : '')
        }
        onClick={onCopy}
      >
        <Image
          className={`${cssPrefix}__button-icon`}
          src={copied ? iconCopySuccess : iconCopy}
          layout='intrinsic'
          alt='Successfully copied icon'
        />
      </button>
      <pre>{children}</pre>
    </div>
  );
};

export default PostPreTag;
