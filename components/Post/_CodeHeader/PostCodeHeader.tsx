import { ReactNode } from 'react';


type PostCodeHeaderProps = {
  children: ReactNode
}

const PostCodeHeader = ({ children }: PostCodeHeaderProps) => {
  return (
    <div className="postCodeHeader">
      {children}
    </div>
  );
};

export default PostCodeHeader;