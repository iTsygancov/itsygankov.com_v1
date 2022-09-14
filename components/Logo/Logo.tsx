import Link from 'next/link';


const cssPrefix = 'logo';

const Logo = () => (
  <Link href='/'>
    <a className={cssPrefix}>{'< iTsygankov />'}</a>
  </Link>
);

export default Logo;