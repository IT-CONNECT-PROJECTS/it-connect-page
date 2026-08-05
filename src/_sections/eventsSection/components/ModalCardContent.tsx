import React from 'react';
import Image from 'next/image';
import { Col, Flex, List, Row, Statistic, Tag } from 'antd';

import { useViewPort } from '@/_hooks';

import { EventsTypes, Meetup, Network } from '../data';
import styles from './ModalCardContent.module.sass';

export default function ModalCardContent({ event }: {event: Meetup | Network | null}) {
  const { isMobile } = useViewPort();
  if (!event) return null;

  const isEvent = event._type === EventsTypes.MEETUP;

  return (
    <Flex className={styles.eventCard_content}>
      <h3 className={styles.content_title}>
        {event.title}
      </h3>
      <Flex
        style={{
          margin: '10px 0'
        }}
        align="center"
      >
        {event.tags.map((tag) => (
          <Tag key={tag} style={{
            height: 'fit-content'
          }}>{tag}</Tag>
        ))}
      </Flex>

      <div className={styles.date}>
        {event.date}
        <Tag
          color={'blue'}
          style={{
            width: 'fit-content'
          }}
        >
          {
            isEvent
              ? 'Event'
              : 'Networking'
          }
        </Tag>
      </div>
      <Image
        className={styles.content__image}
        src={event.image}
        width={768 / (isMobile ? 2.5 : 1)}
        height={512 / (isMobile ? 2.5 : 1)}
        alt=""
      />

      {isEvent && (
        <>
          <h3 className={styles.sectionHeader}>
            Highlights
          </h3>
          <Row gutter={16} style={{
            marginBottom: 8,
          }}>
            <Col span={12}>
              <Statistic
                title="Speakers"
                value={event.statistic.speakers}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Organizers"
                value={event.statistic.organizers}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Participants"
                value={event.statistic.participants}
              />
            </Col>

            <Col span={12}>
              <Statistic
                title="Hours of Insights, Activities, and Networking"
                value={event.statistic.duration}
              />
            </Col>
          </Row>

          {event.topicList && (
            <>
              <h3 className={styles.sectionHeader}>
                Topics:
              </h3>
              <List
                dataSource={[...event.topicList, 'Networking session']}
                renderItem={(item: string) => {
                  return (
                    <div>
                      - {item}
                    </div>
                  );
                }}
              />
            </>
          )}
        </>
      )}

      {event.description && (
        <>
          <h3 className={styles.sectionHeader}>
            Description:
          </h3>
          <List
            dataSource={event.description}
            renderItem={(item) => {
              return (
                <div>
                  -{item}
                </div>
              );
            }}
          />
        </>
      )}
      <a
        href={event.link}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: '20px',
          fontWeight: 'bold',
          fontSize: '24px',
        }}
      >
        Photo album
      </a>
    </Flex>
  );
}
