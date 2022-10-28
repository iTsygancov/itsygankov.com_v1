import { Container, Grid } from '@mantine/core';
import Image from 'next/image';

import message from '../../public/assets/icon-message.svg';
import telegram from '../../public/assets/icon-telegram.svg';
import ContactsForm from './_Form/ContactsForm';


const cssPrefix = 'contacts';

const Contacts = () => {
  return (
    <Container size='xl'>
      <div className={cssPrefix}>
        <h1 className={`${cssPrefix}__title`}>Contacts</h1>
        <Grid gutter={64}>
          <Grid.Col lg={4} md={5}>
            <div className={`${cssPrefix}__description`}>
              <h2 className={`${cssPrefix}__description-title`}>How can I help?</h2>
              <p className={`${cssPrefix}__description-text`}>Fill out the form or contact me:</p>
            </div>
            <div className={`${cssPrefix}__links`}>
              <a
                className={`${cssPrefix}__link`}
                href='mailto:i.tsygancov@yandex.ru'
              >
                <Image
                  className={`${cssPrefix}__link-icon`}
                  src={message}
                  layout='intrinsic'
                  alt='Message icon'
                />
                  i.tsygancov@yandex.ru
              </a>
              <a
                className={`${cssPrefix}__link`}
                href='https://telegram.me/I_Tsygankov'
              >
                <Image
                  className={`${cssPrefix}__link-icon`}
                  src={telegram}
                  layout='intrinsic'
                  alt='Telegram icon'
                />
                  @I_Tsygankov
              </a>
            </div>
          </Grid.Col>
          <Grid.Col lg={8} md={7}>
            <ContactsForm />
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  );
};

export default Contacts;