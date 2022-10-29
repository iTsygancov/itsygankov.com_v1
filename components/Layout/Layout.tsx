import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


type LayoutProps = {
    children: ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Header />
      <AnimatePresence initial={false} exitBeforeEnter>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='content'
          key={router.route}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};


export default Layout;