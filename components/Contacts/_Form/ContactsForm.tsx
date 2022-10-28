import { Textarea, TextInput } from '@mantine/core';


const cssPrefix = 'contactsForm';

const ContactsForm = () => {
  return (
    <form className={cssPrefix}>
      <TextInput
        className={`${cssPrefix}__input`}
        label='Name'
      />
      <TextInput
        className={`${cssPrefix}__input`}
        label='Email'
        type='email'
      />
      <TextInput
        className={`${cssPrefix}__input`}
        label='Title'
      />
      <Textarea
        className={`${cssPrefix}__textarea`}
        label='Message'
        minRows={6}
      />
      <button className={`${cssPrefix}__button`}>Send email</button>
    </form>
  );
};

export default ContactsForm;