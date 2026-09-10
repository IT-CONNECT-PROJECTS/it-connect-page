'use client';
import React from 'react';
import Image from 'next/image';

import { useViewPort } from '@/_hooks';

import belgrade from '@/_assets/historySignSection/belgrade.svg';

import styles from './styles.module.sass';

export default function HistorySignSection() {
  const { isMobile } =  useViewPort();
  return (
    <section className={styles.signSection}>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>
            Born in Belgrade, built by friends
          </h2>
          <div className={styles.subtitle}>
            <div>Since 2022, IT Connect has been bringing tech minds together</div>
            <div>to share knowledge and grow</div>
          </div>
        </div>

        <Image
          src={belgrade}
          style={{ margin: '0 auto' }}
          alt=""
          width={518 / (isMobile ? 2 : 1)}
          height={95 / (isMobile ? 2 : 1)}
        />
      </div>
    </section>
  );
};
