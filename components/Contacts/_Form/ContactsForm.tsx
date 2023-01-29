import { Loader, Textarea, TextInput } from '@mantine/core';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useState } from 'react';

import ContactsModal from '../_Modal/ContactsModal';
import { en, ru } from './ContactsForm.locale';


const cssPrefix = 'contactsForm';

const ContactsForm = () => {
  const [query, setQuery] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [opened, setOpened] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  const handleParam = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    setShowLoader(true);
    fetch('https://getform.io/f/b668d43d-a067-4f60-b25c-ed3b4ffba908', {
      method: 'POST',
      body: formData,
    }).then(() => {
      setQuery({
        name: '',
        email: '',
        title: '',
        message: '',
      });
      setOpened(true);
      setShowLoader(false);
    });
  };

  return (
    <>
      <form className={cssPrefix} onSubmit={formSubmit}>
        <TextInput
          className={`${cssPrefix}__input`}
          label={currentLocale.name}
          onChange={handleParam}
          value={query.name}
          name="name"
          disabled={showLoader}
        />
        <TextInput
          className={`${cssPrefix}__input`}
          label="Email"
          type={currentLocale.email}
          onChange={handleParam}
          value={query.email}
          name="email"
          disabled={showLoader}
        />
        <TextInput
          className={`${cssPrefix}__input`}
          label={currentLocale.title}
          onChange={handleParam}
          value={query.title}
          name="title"
          disabled={showLoader}
        />
        <Textarea
          className={`${cssPrefix}__textarea`}
          label={currentLocale.message}
          minRows={6}
          onChange={handleParam}
          value={query.message}
          name="message"
          disabled={showLoader}
        />
        <button className={`${cssPrefix}__button`}>
          {showLoader ? (
            <Loader
              color="#FFFFFF"
              size="sm"
              variant="dots"
            />
          ) : (
            currentLocale.button
          )}
        </button>
      </form>

      <ContactsModal
        opened={opened}
        cssPrefix={cssPrefix}
        handleClose={() => setOpened(false)}
      />
    </>
  );
};

export default ContactsForm;
