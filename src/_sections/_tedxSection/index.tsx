import React from 'react';

import styles from './styles.module.sass';

const TEDX_SITE_URL = 'https://www.tedxsavskivenac.com/';

const TEDX_RECAP = {
  lead: 'TEDx Savski Venac 2026 has happened — and we are proud to have been part of it.',
  paragraphs: [
    'For one day, Startit Center turned into a room full of curious minds. Nine speakers, selected from 150 applications from 11 countries, took the stage with ideas around the theme Small Shifts, Big Impact. The conversations they sparked carried on through every break and long after the final talk.',
    'Thank you to every speaker, guest, volunteer and partner who made this day possible. Small shifts really do add up — and this one was felt by everyone in the room.',
  ],
};

type TeamMember = {
  name: string;
  role: string;
  photosUrl?: string;
  instagram?: string;
  linkedin?: string;
};

const TEDX_MEDIA_TEAM: TeamMember[] = [
  {
    name: 'Aleksandr Solo',
    role: 'Photographer',
    photosUrl: 'https://disk.yandex.ru/d/uWzPmzCER-3JcQ',
    instagram: 'https://www.instagram.com/asolophoto',
    linkedin: 'https://www.linkedin.com/in/a-solo',
  },
  {
    name: 'Marina Vasileva',
    role: 'Photographer',
    photosUrl: 'https://marina-vasileva.com/disk/10-10-2026-tedx-savskivenac-dphzg7',
    instagram: 'https://www.instagram.com/marinavasileva.jpg',
    linkedin: 'https://www.linkedin.com/in/marina-vasileva-7b811425b',
  },
  {
    name: 'Sergej Selivanovskij',
    role: 'Videographer',
    instagram: 'https://www.instagram.com/prophotobgd',
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

        <div className={styles.recap}>
          <p className={styles.recapLead}>{TEDX_RECAP.lead}</p>
          {TEDX_RECAP.paragraphs.map((text) => (
            <p key={text} className={styles.recapText}>
              {text}
            </p>
          ))}
        </div>

        <div className={styles.photosLabel}>Event photos & video team</div>
        <div className={styles.team}>
          {TEDX_MEDIA_TEAM.map(({ name, role, photosUrl, instagram, linkedin }) => (
            <div key={name} className={styles.member}>
              <span className={styles.memberRole}>{role}</span>
              <span className={styles.memberName}>{name}</span>
              <div className={styles.memberLinks}>
                {photosUrl && (
                  <a
                    href={photosUrl}
                    className={styles.photosBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View photos
                  </a>
                )}
                {instagram && (
                  <a
                    href={instagram}
                    className={styles.socialBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    className={styles.socialBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
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
