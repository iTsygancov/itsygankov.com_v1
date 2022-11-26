import { Container, Grid } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import message from '../../public/assets/icon-message.svg';
import telegram from '../../public/assets/icon-telegram.svg';
import ContactsForm from './_Form/ContactsForm';
import { en, ru } from './Contacts.locale';


const cssPrefix = 'contacts';

const Contacts = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  return (
    <Container size="xl">
      <div className={cssPrefix}>
        <h1 className={`${cssPrefix}__title`}>{currentLocale.title}</h1>
        <Grid gutter="xl">
          <Grid.Col lg={4} md={5}>
            <div className={`${cssPrefix}__description`}>
              <h2 className={`${cssPrefix}__description-title`}>
                {currentLocale.descriptionTitle}
              </h2>
              <p className={`${cssPrefix}__description-text`}>
                {currentLocale.descriptionText}
              </p>
            </div>
            <div className={`${cssPrefix}__links`}>
              <div className={`${cssPrefix}__item`}>
                <div className={`${cssPrefix}__item-icon`}>
                  <Image
                    src={message}
                    layout='intrinsic'
                    width={32}
                    height={32}
                    alt="Message icon"
                  />
                </div>
                <div className={`${cssPrefix}__item-content`}>
                  <span className={`${cssPrefix}__item-label`}>Email</span>
                  <a
                    className={`${cssPrefix}__item-link`}
                    href="mailto:i.tsygancov@yandex.ru"
                    target="blank"
                  >
                    i.tsygancov@yandex.ru
                  </a>
                </div>
              </div>
              <div className={`${cssPrefix}__item`}>
                <div className={`${cssPrefix}__item-icon`}>
                  <Image
                    src={telegram}
                    width={32}
                    height={32}
                    layout="intrinsic"
                    alt="Telegram icon"
                  />
                </div>
                <div className={`${cssPrefix}__item-content`}>
                  <span className={`${cssPrefix}__item-label`}>Telegram</span>
                  <a
                    className={`${cssPrefix}__item-link`}
                    href="https://t.me/I_Tsygankov"
                    target="blank"
                  >
                  @I_Tsygankov
                  </a>
                </div>
              </div>
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
