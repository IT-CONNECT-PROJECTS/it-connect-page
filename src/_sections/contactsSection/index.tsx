import React from 'react';
import Link from 'next/link';
import { Flex } from 'antd';
import Image from 'next/image';

import telegramIcon from '@/_assets/telegramIcon.svg';
import linkedinIcon from '@/_assets/linkedinIcon.svg';
import instagramIcon from '@/_assets/instagramIcon.svg';
import mailIcon from '@/_assets/mailIcon.svg';

import styles from './styles.module.sass';

export const contactsArray = [
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/company/it-connect-meetup/',
    icon: linkedinIcon
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/it.connect.belgrade/',
    icon: instagramIcon,
  },
  {
    title: 'Telegram',
    url: 'https://t.me/itconnectbelgrade',
    icon: telegramIcon
  },
  {
    title: 'Email',
    url: 'mailto:itconnectsocialnetworks@gmail.com',
    icon: mailIcon
  }
];

const descriptionText = 'Partner with us to connect with top tech talent through events, social media, and custom collaborations.';

export default function ContactSection() {
  const contactCards = contactsArray
    .map((contact) => (
      <Link
        href={contact.url}
        target="_blank"
        key={contact.title}
      >
        <Image
          src={contact.icon}
          alt={contact.title}
          width={37}
          height={37}
        />
      </Link>
    ));

  return (
    <section className={styles.contactsSection}>
      <Flex vertical style={{ flex: '1 1 auto' }}>
        <div className={styles.title}>📩 Let’s Collaborate!</div>
        <div className={styles.description}>
          {descriptionText}
        </div>
      </Flex>
      <Flex gap={40}>
        {contactCards}
      </Flex>

      {/*<button className={styles.button}>*/}
      {/*  Connect*/}
      {/*</button>*/}
    </section>
  );
}
