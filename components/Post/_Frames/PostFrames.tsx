import { ReactNode } from 'react';


type PostFramesProps = {
  children: ReactNode;
};

const PostFrames = ({ children }: PostFramesProps) => {
  return (
    <>
      {children}
    </>
  );
};

export default PostFrames;
