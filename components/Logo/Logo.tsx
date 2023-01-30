import Link from 'next/link';


type LogoProps = {
  handleClick?: () => void;
  opened?: boolean;
};

const cssPrefix = 'logo';

const Logo = ({ handleClick, opened }: LogoProps) => (
  <Link href='/'>
    {opened ? (
      <a
        className={cssPrefix}
        onClick={handleClick}
      >
        {'< iTsygankov />'}
      </a>
    ) : (
      <a className={cssPrefix}>{'< iTsygankov />'}</a>
    )}
  </Link>
);

export default Logo;
