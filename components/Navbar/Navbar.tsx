import Link from 'next/link';
import { useRouter } from 'next/router';


type NavbarProps = {
  style?: object
}

const cssPrefix = 'navbar';

const Navbar = ({ style }: NavbarProps) => {
  const router = useRouter();
  return (
    <nav className={cssPrefix} style={{ ...style }}>
      <ul className={`${cssPrefix}__menu`}>
        <li className={router.pathname === '/posts' ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active` : `${cssPrefix}__menu-item` }>
          <Link href='/posts'>
            <a className={`${cssPrefix}__menu-link`}>Posts</a>
          </Link>
        </li>
        <li className={router.pathname === '/about' ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active` : `${cssPrefix}__menu-item` }>
          <Link href='/about'>
            <a className={`${cssPrefix}__menu-link`}>About me</a>
          </Link>
        </li>
        <li className={router.pathname === '/contact' ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active` : `${cssPrefix}__menu-item` }>
          <Link href='/contacts'>
            <a className={`${cssPrefix}__menu-link`}>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
