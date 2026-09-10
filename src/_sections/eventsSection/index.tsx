'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  Flex,
  Tag,
  Modal,
} from 'antd';

import { events, EventsTypes } from './data';

import ModalCardContent from './components/ModalCardContent';

import styles from './styles.module.sass';

export default function EventsSection() {
  const [cardIndex, setCardIndex] = useState<number | null>(null);
  const [sortValue, setSortValue] = useState<EventsTypes | null>(null);

  const eventsComponents = [...events]
    .sort((a, b) => {
      if (!sortValue) return 1;

      return Number(b._type === sortValue) - Number(a._type === sortValue);
    })
    .map((event, index) => {
      const isActive = index === cardIndex;
      const handleCardClick = () => {
        setCardIndex(isActive ? null : index);
      };

      const isEvent = event._type === EventsTypes.MEETUP;
      const tags = event.tags.slice(0, 2).map(tag => {
        const key = `${event.title}-${tag}`;
        return (
          <div
            key={key}
            className={styles.tag}
          >
            {tag}
          </div>
        );
      });

      return (
        <Flex
          key={event.image}
          className={styles.eventCard}
          align="flex-start"
          vertical
          onClick={handleCardClick}

        >
          <Image
            style={{
              borderRadius: '16px'
            }}
            src={event.image}
            className={styles.image}
            width="302"
            height="200"
            alt={`${event.title} — IT Connect event in Belgrade`}
          />
          <div className={styles.eventCard__preview}>
            <div className={styles.date}>
              <div>{event.date}</div>
              <div className={styles.tagsWrapper}>
                {tags}
                {event.tags.length - 2 > 0 && (
                  <div className={styles.tag}>
                    +{event.tags.length - 2} more
                  </div>
                )}
              </div>
            </div>
            <div className={styles.title}>{event.title}</div>
            <div style={{ marginTop: 'auto' }}>
              <Tag
                color={isEvent ? 'blue' : 'green'}
                style={{
                  width: 'fit-content',
                  marginTop: 'auto',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setSortValue(
                    sortValue === event._type
                      ? null
                      : event._type
                  );
                }}
              >
                {isEvent ? 'Event' : 'Networking'}
              </Tag>
            </div>
          </div>
        </Flex>
      );
    });

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsWrapper}>
        {eventsComponents}
      </div>

      <Modal
        open={cardIndex !== null}
        onCancel={() => setCardIndex(null)}
        width={'fit-content'}
        footer={false}
        className={styles.modal}
        destroyOnHidden
      >
        {cardIndex !== null && (
          <ModalCardContent event={events[cardIndex]} />
        )}
      </Modal>
    </section>
  );
}
