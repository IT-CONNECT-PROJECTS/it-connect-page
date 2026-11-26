import React from 'react';
import Link from 'next/link';

import { bebas, lobster } from '@/_styles/partyFonts';

import styles from './styles.module.sass';

export default function NewYearSection() {
  return (
    <section className={`${styles.section} ${lobster.variable} ${bebas.variable}`}>
      <p className={styles.kicker}>Community New Year Party · December 19</p>
      <h2 className={styles.title}>
        New Year <span className={styles.operator}>==</span> <span className={styles.nowrap}>Old Code</span>
      </h2>
      <p className={styles.text}>Rock-n-roll, dancing and contests in the style of the 50s and 60s.</p>
      <Link href="/new-year-party" className={styles.button}>Join the party</Link>
    </section>
  );
}
