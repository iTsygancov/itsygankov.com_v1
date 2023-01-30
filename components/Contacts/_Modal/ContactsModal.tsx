import { Modal } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

import success from '../../../public/assets/icon-success.svg';
import { en, ru } from './ContactsModal.locale';


type ContactsModalProps = {
  opened: boolean;
  cssPrefix: string;
  handleClose: () => void;
};

const ContactsModal = ({
  opened,
  cssPrefix,
  handleClose,
}: ContactsModalProps) => {
  const router = useRouter();
  const currentLocale = router.locale === 'en' ? en : ru;

  return (
    <Modal
      opened={opened}
      className={`${cssPrefix}__modal`}
      onClose={() => handleClose()}
      size='xl'
    >
      <div className={`${cssPrefix}__modal-title`}>
        <Image
          className={`${cssPrefix}__modal-icon`}
          src={success}
          width={64}
          height={64}
          layout='fixed'
          alt='Success icon'
        />
        <h2 className={`${cssPrefix}__modal-title`}>{currentLocale.title}</h2>
      </div>
      <p className={`${cssPrefix}__modal-text`}>{currentLocale.text}</p>
      <button
        className={`${cssPrefix}__modal-button`}
        onClick={() => handleClose()}
      >
        {currentLocale.button}
      </button>
    </Modal>
  );
};

export default ContactsModal;
