'use client';
import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import Image from 'next/image';

import { useViewPort } from '@/_hooks';

import { data } from './data';
import EventTypeCard from './components/EventTypeCard';

import styles from './styles.module.sass';

export default function FormatSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { isMobile } = useViewPort();
  const formatsComponents = data.map((format, index) => {
    return (
      <Card
        variant="borderless"
        key={format.title}
        className={styles.formatCard}
        hoverable
        onClick={() => setActiveIndex(index)}
      >
        <Image
          src={format.photo}
          alt=""
          width={368 / (isMobile ? 1.5 : 1)}
          height={246 / (isMobile ? 1.5 : 1)}
          className={styles.image}
        />
        <div className={styles.cardTextBlock}>
          <h4 className={styles.cardTitle}>
            {format.title}
          </h4>
          <div className={styles.cardDescription}>
            {format.shortDescription}
          </div>
        </div>

      </Card>
    );
  });

  return (
    <section className={styles.formatsSection}>
      {isMobile && (
        <h2 className={styles.title}>FORMATS</h2>
      )}
      {isMobile ?
        (
          <div className={styles.cardWrapper}>
            {formatsComponents}
          </div>
        )
        : (
          formatsComponents
        )}

      <Modal
        open={activeIndex !== null}
        onCancel={() => setActiveIndex(null)}
        width={'fit-content'}
        footer={false}
        className={styles.modal}
        destroyOnHidden
      >
        <EventTypeCard eventType={data[activeIndex || 0]} />
      </Modal>
    </section>
  );
};
