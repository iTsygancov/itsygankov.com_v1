import { Textarea, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';

import { en, ru } from './ContactsForm.locale';


const cssPrefix = 'contactsForm';

const ContactsForm = () => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;
  return (
    <form className={cssPrefix}>
      <TextInput
        className={`${cssPrefix}__input`}
        label={currentLocale.name}
      />
      <TextInput
        className={`${cssPrefix}__input`}
        label='Email'
        type={currentLocale.email}
      />
      <TextInput
        className={`${cssPrefix}__input`}
        label={currentLocale.title}
      />
      <Textarea
        className={`${cssPrefix}__textarea`}
        label={currentLocale.message}
        minRows={6}
      />
      <button className={`${cssPrefix}__button`}>
        {currentLocale.button}
      </button>
    </form>
  );
};

export default ContactsForm;