import React from 'react';

import styles from './styles.module.sass';

const TEDX_SITE_URL = 'https://www.tedxsavskivenac.com/';

const TEDX_PHOTO_ALBUMS = [
  {
    photographer: 'Marina Vasileva',
    url: 'https://marina-vasileva.com/disk/10-10-2026-tedx-savskivenac-dphzg7',
  },
];

export default function TedxSection() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>TedX Savski Venac</h2>
        <div className={styles.subtitle}>
          October 10, 2026 · Startit Center, Belgrade
        </div>
        <div className={styles.photosLabel}>Event photos are here</div>
        <div className={styles.albums}>
          {TEDX_PHOTO_ALBUMS.map(({ photographer, url }) => (
            <a
              key={url}
              href={url}
              className={styles.albumBtn}
              target="_blank"
              rel="noreferrer"
            >
              <span className={styles.albumCaption}>Photos by</span>
              <span className={styles.albumAuthor}>{photographer}</span>
            </a>
          ))}
        </div>
        <a
          href={TEDX_SITE_URL}
          className={styles.visitBtn}
          target="_blank"
          rel="noreferrer"
        >
          Visit TEDx site
        </a>
      </div>
    </section>
  );
}
