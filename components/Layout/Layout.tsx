import { ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


type LayoutProps = {
    children: ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='content'>{children}</main>
      <Footer />
    </>
  );
};


export default Layout;