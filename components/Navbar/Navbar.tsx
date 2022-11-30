import Link from 'next/link';
import { useRouter } from 'next/router';

import { en, ru } from './Navbar.locale';


type NavbarProps = {
  style?: object;
  handleClick?: () => void;
};

const cssPrefix = 'navbar';

const Navbar = ({ style, handleClick }: NavbarProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  const links = [
    { text: currentLocale.blog, link: '/blog' },
    { text: currentLocale.aboutMe, link: '/about' },
    { text: currentLocale.contacts, link: '/contacts' },
  ];

  return (
    <nav className={cssPrefix} style={{ ...style }}>
      <ul className={`${cssPrefix}__menu`}>
        {links.map((el) => {
          const { text, link } = el;
          return (
            <li
              className={
                router.pathname === link
                  ? `${cssPrefix}__menu-item ${cssPrefix}__menu-item--active`
                  : `${cssPrefix}__menu-item`
              }
              key={link}
            >
              <Link href={link}>
                <a className={`${cssPrefix}__menu-link`} onClick={handleClick}>
                  {text}
                </a>
              </Link>
            </li>
          );
        },
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
