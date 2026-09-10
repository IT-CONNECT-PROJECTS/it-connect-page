'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card } from 'antd';
import Image from 'next/image';
import { Settings } from '@ant-design/react-slick';

import { useViewPort } from '@/_hooks';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './event_carousel.module.sass';

const { Meta } = Card;

const eventCards = [
  {
    key: 'stages',
    title: '4 Dynamic Stages',
    description:
      'Four parallel stages featuring talks on development, AI, cloud technologies, and product thinking. Expect real-world case studies, live discussions, and hands-on insights from practicing experts.',
    photo: 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_400/v1748941981/it-connect/IMG_8717-full_sxhzap.jpg'
  },
  {
    key: 'speakers',
    title: '30+ Speakers',
    description:
      'Over 30 industry professionals: engineers, team leads, founders, and product managers. Topics range from system architecture to team processes and tech trends.',
    photo: 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_400/v1748941916/it-connect/IMG_8335-full_qagniy.jpg'
  },
  {
    key: 'expo',
    title: 'Tech Expo Zone',
    description:
      'A demo zone with booths from IT companies and services. See new products in action, talk to their developers, and ask questions on the spot.',
    photo: 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_400/v1748437749/it-connect/1164301f-4ada-4575-8ac0-b3b529139b34.png'
  },
  {
    key: 'job',
    title: 'Job Fair',
    description:
      'Meet recruiters and company representatives who are currently hiring. You can leave your contacts or even have a quick interview right at the event.',
    photo: 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_400/v1748438166/it-connect/1f095d6e-7073-4906-81cb-22a8024f641f.png'
  },
  {
    key: 'bbq',
    title: 'Stand-up & BBQ',
    description:
      'In the evening: informal part with stand-up and food in the open air. Right next to the main venue — no need to go anywhere else.',
    photo: 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_400/v1748438039/it-connect/26893bbe-c282-43b4-9769-598eefbf1590.png'
  }
];

const EventCarousel = () => {
  const [selected, setSelected] = useState(0);

  const sliderRef = React.useRef<Slider | null>(null);

  const settings: Settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 2,
    speed: 500,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    variableWidth: true,
    beforeChange: (_number: number, nextSlide) => {
      setSelected(nextSlide);
    }
  };

  const { isMobile } = useViewPort();

  const buttons = eventCards.map((card, index) => {
    const { key, title } = card;

    return (
      <div
        key={key}
        className={styles.button + ' ' + (index === selected ? styles.active : '')}
        color={index === selected ? 'blue' : 'green'}
        onClick={() => sliderRef.current?.slickGoTo(index)}
      >
        {title}
      </div>
    );
  });

  const getContent = () => {
    if (isMobile) {
      return (
        <div className={styles.cardWrapper}>
          {eventCards.map(card => (
            <div
              key={card.key}
              style={{
                width: 'fit-content'
              }}
            >
              <Card
                className={styles.card}
                variant="borderless"
                styles={{
                  body: {
                    background: 'transparent',
                  },
                }}
                cover={<Image src={card.photo} alt={card.title} width={400} height={250} style={{ objectFit: 'cover' }} />}
              >
                <Meta
                  title={
                    <div
                      style={{
                        color: 'white !important',
                        fontSize: isMobile ? '24px' : '30px'
                      }}
                    >
                      {card.title}
                    </div>}
                  description={
                    <div
                      style={{
                        color: 'white !important',
                        fontSize: '20px',
                        textAlign: isMobile ? 'left' : 'center'
                      }}
                    >
                      {card.description}
                    </div>
                  }
                />
              </Card>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div style={{
        display: 'block',
        width: '100vw',
        height: 'fit-content'
      }}>
        <Slider
          ref={sliderRef}
          {...settings}
        >
          {eventCards.map(card => (
            <div key={card.key}>
              <Card
                className={styles.card}
                variant="borderless"
                styles={{
                  body: {
                    background: 'transparent',
                  },
                }}
                cover={<Image src={card.photo} alt={card.title} width={400} height={250} style={{ objectFit: 'cover' }} />}
              >
                <Meta
                  title={
                    <div
                      style={{
                        color: 'white !important',
                        fontSize: '30px'
                      }}
                    >
                      {card.title}
                    </div>}
                  description={
                    <div
                      style={{
                        color: 'white !important',
                        fontSize: '20px'
                      }}
                    >
                      {card.description}
                    </div>
                  }
                />
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <div className={styles.carousel_wrapper}>
      {!isMobile && (
        <div className={styles.buttonsWrapper}>
          {buttons}
        </div>
      )}

      {getContent()}
    </div>
  );
};

export default EventCarousel;
