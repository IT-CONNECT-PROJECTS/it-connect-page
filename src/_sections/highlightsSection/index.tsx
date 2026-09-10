'use client';
import React, { KeyboardEvent, useMemo, useState } from 'react';
import { Button, Carousel, Modal } from 'antd';

import { highlights2025, HighlightCard } from './data';
import Logo from '@/_assets/logo';

import styles from './styles.module.sass';

const highlightLabel = 'Highlights of 2025!';

const renderCardContent = (card: HighlightCard, compact?: boolean) => {
  if (card.bigNumber) {
    return (
      <div className={styles.numberBlock}>
        <div className={styles.bigNumber}>{card.bigNumber}</div>
        <div className={styles.numberFooter}>{card.footer}</div>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {(compact ? card.items?.slice(0, 3) : card.items)?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default function HighlightsSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const sliderItems = highlights2025.map((card) => (
    <div key={card.title}>
      <div className={styles.slideCard}>
        <div className={styles.slideTitle}>{card.title}</div>
        {card.subtitle && <div className={styles.slideSubtitle}>{card.subtitle}</div>}
        {renderCardContent(card)}
      </div>
    </div>
  ));

  return (
    <section className={styles.highlightsSection}>
      <div className={styles.inner}>
        <Snow />
        <div className={styles.headerRow}>
          <div
            className={styles.title}
            role="button"
            tabIndex={0}
            onClick={handleOpen}
            onKeyDown={handleKeyDown}
          >
            {highlightLabel}
          </div>
          <Button
            type="primary"
            size="large"
            className={styles.ctaButton}
            onClick={handleOpen}
          >
            Go to Highlights!
          </Button>
        </div>
      </div>

      <Modal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={false}
        className={styles.modal}
        width={960}
        centered
        destroyOnHidden
      >
        <Snow isModal />
        <div className={styles.modalInner}>
          <Carousel dots className={styles.carousel} draggable adaptiveHeight>
            {sliderItems}
          </Carousel>
          <div className={styles.modalFooter}>
            <div className={styles.logoSnowWrapper}>
              <Logo width={180} height={32} color="#f6ffff" />
              <div className={styles.logoSnow} aria-hidden />
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
}

const Snow = ({ isModal = false }: { isModal?: boolean }) => {
  const snowflakes = useMemo(() => {
    const count = isModal ? 140 : 200;
    return Array.from({ length: count }).map((_, index) => {
      const size = Math.random() < 0.12 ? 4 : Math.random() < 0.5 ? 3 : 2;
      const spread = 90;
      const duration = 8 + Math.random() * (isModal ? 8 : 12);
      const delay = -Math.random() * duration;
      const topOffset = -50 - Math.random() * 200;
      return (
        <div
          key={index}
          className={styles.snowflake}
          style={{
            left: `${Math.random() * spread + (100 - spread) / 2}%`,
            width: `${size}px`,
            height: `${size}px`,
            top: `${topOffset}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      );
    });
  }, [isModal]);

  return <div className={isModal ? styles.modalSnow : styles.snow} aria-hidden>{snowflakes}</div>;
};

