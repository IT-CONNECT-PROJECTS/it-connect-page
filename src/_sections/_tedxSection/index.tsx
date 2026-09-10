import React from 'react';
import Link from 'next/link';

import styles from './styles.module.sass';

const TEDX_SITE_URL = 'https://www.tedxsavskivenac.com/';
const TEDX_TICKETS_URL = 'https://itconnect.tic.rs/ru/t79ylzzw';
const TEDX_EVENT_ID = 't79ylzzw';

export default function TedxSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>TedX Savski Venac</h2>
        <div className={styles.subtitle}>
          October 10, 2026 · Startit Center, Belgrade
        </div>
        <div className={styles.actions}>
          <a
            href={TEDX_SITE_URL}
            className={styles.visitBtn}
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
          <Link
            href={TEDX_TICKETS_URL}
            className={styles.buyBtn}
            data-oblak-widget
            data-event-id={TEDX_EVENT_ID}
          >
            Buy Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}
