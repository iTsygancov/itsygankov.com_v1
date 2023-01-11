import Image from 'next/image';
import { useRef, useState } from 'react';

import iconCopy from '../../../public/assets/icon-copy.svg';
import iconCopySuccess from '../../../public/assets/icon-copy--success.svg';


type PreProps = {
  children: any;
};

const cssPrefix = 'postPreTag';

const PostPreTag = ({ children }: PreProps) => {
  const textInput = useRef<any>(null);
  // const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  // const onEnter = () => {
  //   setHovered(true);
  // };

  const onExit = () => {
    // setHovered(false);
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
      // onMouseEnter={onEnter}
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
          layout="intrinsic"
          alt="Successfully copied icon"
        />
      </button>
      <pre>{children}</pre>
    </div>
  );
};

export default PostPreTag;
