type PostSubtitleProps = {
  children: any;
};

const cssPrefix = 'postSubtitle';

function PostSubtitle({ children }: PostSubtitleProps) {
  const anchor = children.toLowerCase().split(' ').join('-');
  return (
    <h2
      className={`${cssPrefix}`}
      id={anchor}
    >
      {children}
      <a
        className={`${cssPrefix}__link`}
        href={`#${anchor}`}
      >
        <svg
          className={`${cssPrefix}__linkIcon`}
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5413 22H9C7.4087 22 5.88258 21.3679 4.75736 20.2426C3.63214 19.1174 3 17.5913 3 16C3 14.4087 3.63214 12.8826 4.75736 11.7574C5.88258 10.6321 7.4087 10 9 10H12.4631M19.5369 10H23C24.5913 10 26.1174 10.6321 27.2426 11.7574C28.3679 12.8826 29 14.4087 29 16C29 17.5913 28.3679 19.1174 27.2426 20.2426C26.1174 21.3679 24.5913 22 23 22H19.4587M10.5669 16H21.5581'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </a>
    </h2>
  );
}

export default PostSubtitle;
