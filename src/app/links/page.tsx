import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/_assets/logo';
import { contactsArray } from '@/_sections/contactsSection';

import { MEDIA_KIT_URL } from '@/_consts';

import styles from './styles.module.sass';

export const metadata: Metadata = {
  title: 'Links',
  description: 'All IT Connect Belgrade links in one place: socials, contacts and more.',
  alternates: {
    canonical: '/links',
  },
};

const descriptionText = 'IT community in Belgrade: meetups, networking and conferences. 7000+ members and up to 60 events a year.';

const socialLinks = contactsArray.filter((contact) => contact.title !== 'Email');
const emailContact = contactsArray.find((contact) => contact.title === 'Email');

const otherLinks = [
  {
    title: 'Website',
    url: '/',
    emoji: '🌐',
  },
  ...(emailContact ? [{
    title: 'Email us',
    url: emailContact.url,
    emoji: '📩',
  }] : []),
  {
    title: 'Media Kit',
    url: MEDIA_KIT_URL,
    emoji: '📁',
  },
  {
    title: 'Rules and Values',
    url: 'https://it-conect.notion.site/Rules-and-Values-of-the-IT-Connect-Community-3cd92f4ea08247b7881535ee7e8b8372',
    emoji: '🤝',
  },
  {
    title: 'Buy us a coffee',
    url: 'https://buymeacoffee.com/itconnect',
    emoji: '☕',
  },
  {
    title: 'Shop',
    url: 'https://buymeacoffee.com/itconnect/extras',
    emoji: '🛍️',
  },
];

const isExternal = (url: string) => !url.startsWith('/');

export default function LinksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <header className={styles.header}>
          <Logo
            width={220}
            height={38}
            color="#ffffff"
          />
          <p className={styles.description}>{descriptionText}</p>
        </header>

        <div className={styles.links}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Follow us</h2>
            {socialLinks.map((social) => (
              <Link
                key={social.title}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`${styles.linkButton} ${styles.linkButton_accent}`}
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  className={styles.linkIcon}
                />
                <span className={styles.linkTitle}>{social.title}</span>
              </Link>
            ))}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>More</h2>
            {otherLinks.map((link) => (
              <Link
                key={link.title}
                href={link.url}
                {...(isExternal(link.url) && { target: '_blank', rel: 'noreferrer' })}
                className={styles.linkButton}
              >
                <span className={styles.linkIcon} aria-hidden>{link.emoji}</span>
                <span className={styles.linkTitle}>{link.title}</span>
              </Link>
            ))}
          </section>

          <footer className={styles.footer}>
            {new Date().getFullYear()}, IT Connect
          </footer>
        </div>
      </div>
    </main>
  );
}
