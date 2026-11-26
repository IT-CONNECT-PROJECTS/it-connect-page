import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import Logo from '@/_assets/logo';
import { bebas, lobster } from '@/_styles/partyFonts';

import styles from './styles.module.sass';

const title = 'New Year Party: New Year == Old Code';
const description = 'IT Connect Belgrade community New Year party in 50s–60s style: rock-n-roll, dancing, contests, food and drinks. December 19, central Belgrade.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/new-year-party',
  },
  openGraph: {
    url: '/new-year-party',
    title,
    description,
    images: '/opengraph-image',
  },
};

const chatLinks = [
  {
    title: 'Join on Telegram',
    url: 'https://t.me/+hTkj7CmZNsBlOTA6',
  },
  {
    title: 'Join on WhatsApp',
    url: 'https://chat.whatsapp.com/L0naeSEN3kl6vGLhgryJKA',
  },
];

const details = [
  { label: 'Date', value: 'December 19', note: 'Saturday, 2026' },
  { label: 'Time', value: '16:00 – 00:00', note: 'Eight hours of fun' },
  { label: 'Location', value: 'Central Belgrade', note: 'Exact address is shared with participants' },
];

const menu = [
  'Catering',
  'Alcoholic and non-alcoholic drinks',
  'Snacks and treats',
];

const program = [
  { emoji: '🎸', text: 'Music and dancing' },
  { emoji: '🏆', text: 'Themed contests and team games' },
  { emoji: '🎁', text: 'Gifts and prizes' },
  { emoji: '📸', text: 'Photo zone' },
  { emoji: '🎄', text: 'New Year surprises' },
];

function ChatButtons() {
  return (
    <div className={styles.buttons}>
      {chatLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default function NewYearPartyPage() {
  return (
    <main className={`${styles.page} ${lobster.variable} ${bebas.variable}`}>
      <header className={styles.hero}>
        <Link href="/" className={styles.logo} aria-label="IT Connect home page">
          <Logo width={180} height={31} color="#fff4dc" />
        </Link>

        <p className={styles.kicker}>Community New Year Party</p>
        <h1 className={styles.title}>
          New Year <span className={styles.operator}>==</span> Old Code
        </h1>
        <p className={styles.slogan}>Legacy Code, Legendary Party!</p>
        <p className={styles.badge}>December 19 · Belgrade</p>
        <ChatButtons />
      </header>

      <div className={styles.checkers} aria-hidden />

      <section className={styles.section}>
        <h2 className={styles.heading}>Rollback to the 50s &amp; 60s</h2>
        <p className={styles.text}>
          This time we roll back a few decades and welcome the New Year in the bright atmosphere of the 50s and 60s,
          inspired by the era of the stilyagi, the Soviet hipsters. Rock-n-roll, fiery dancing, crazy contests
          and as much fun as possible!
        </p>

        <ul className={styles.details}>
          {details.map((item) => (
            <li key={item.label} className={styles.card}>
              <span className={styles.cardLabel}>{item.label}</span>
              <strong className={styles.cardValue}>{item.value}</strong>
              <span>{item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} ${styles.section_teal}`}>
        <h2 className={styles.heading}>What awaits you</h2>
        <ul className={styles.program}>
          {program.map((item) => (
            <li key={item.text} className={styles.record}>
              <span className={styles.recordLabel} aria-hidden>{item.emoji}</span>
              {item.text}
            </li>
          ))}
        </ul>
        <p className={styles.text}>The detailed program will be published in the participants chat.</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Food &amp; drinks</h2>
        <ul className={styles.menu}>
          {menu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <div className={styles.ticket}>
          <p className={styles.cardLabel}>Admit one</p>
          <p className={styles.price}>3000 RSD</p>
          <p className={styles.text}>
            We all chip in. Your contribution is your registration for the party.
            Join one of the event chats for further details.
          </p>
          <ChatButtons />
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Let&apos;s leave bugs and deadlines in 2026 and throw a festive rollback to the 50s and 60s!</p>
        <p className={styles.slogan}>Come along, it will be fun!</p>
        <Link href="/" className={styles.homeLink}>IT Connect Belgrade</Link>
      </footer>
    </main>
  );
}
