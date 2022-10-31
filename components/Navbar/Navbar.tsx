import Link from 'next/link';
import { useRouter } from 'next/router';


type NavbarProps = {
  style?: object,
  handleClick?: () => void
}

const cssPrefix = 'navbar';

const Navbar = ({ style, handleClick }: NavbarProps) => {
  const router = useRouter();
  return (
    <nav className={cssPrefix} style={{ ...style }}>
      <ul className={`${cssPrefix}__menu`}>
        <li
          className={
            router.pathname === '/posts'
              ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active` 
              : `${cssPrefix}__menu-item`
          }
        >
          <Link href='/posts'> 
            <a className={`${cssPrefix}__menu-link`} onClick={handleClick}>Posts</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/about'
              ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active` 
              : `${cssPrefix}__menu-item`
          }
        >
          <Link href='/about'>
            <a className={`${cssPrefix}__menu-link`} onClick={handleClick}>About me</a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/contacts'
              ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active` 
              : `${cssPrefix}__menu-item`
          }
        >
          <Link href='/contacts'>
            <a className={`${cssPrefix}__menu-link`} onClick={handleClick}>Contacts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
