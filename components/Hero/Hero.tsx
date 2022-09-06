import { Container, Grid } from '@mantine/core';
import Image from 'next/image';

import hero from '../../public/assets/hero.svg';


const cssPrefix = 'hero';


const Hero = () => {
  return (
    // <Container size='xl'>
    //   <div className="hero">
    //     <Grid>
    //       <Grid.Col sm={6}>
    //         <div className={`${cssPrefix}__content`}>
    //           <h1 className={`${cssPrefix}__title`}>
    //         Привет, меня зовут Игорь
    //           </h1>
    //           <p className={`${cssPrefix}__subtitle`}>
    //         Здесь я делюсь своим опытом работы в качестве
    //         фронтенд разработчика и всем, что я узнаю о Javascript,
    //         React, Typescript, а также многом другом.
    //           </p>
    //         </div>
    //       </Grid.Col>
    //       <Grid.Col sm={6}>
    //         <div className={`${cssPrefix}__image`}>
    //           <Image
    //             src={hero}
    //             layout='intrinsic'
    //             alt='Hero image'
    //           />
    //         </div>
    //       </Grid.Col>
    //     </Grid>
    //   </div>
    // </Container>
    <Container size='xl'>
      <div className="hero">
        <div className={`${cssPrefix}__content`}>
          <h1 className={`${cssPrefix}__title`}>
            Привет, меня зовут Игорь
          </h1>
          <p className={`${cssPrefix}__subtitle`}>
            Добро пожаловать на мой сайт!
          </p>
          <p className={`${cssPrefix}__subtitle`}>
            Здесь я делюсь своим опытом работы в качестве
            фронтенд разработчика и всем, что я узнаю о Javascript,
            React, Typescript, а также многом другом.
          </p>
        </div>
        <div className={`${cssPrefix}__image`}>
          <Image
            src={hero}
            layout='intrinsic'
            alt='Hero image'
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;