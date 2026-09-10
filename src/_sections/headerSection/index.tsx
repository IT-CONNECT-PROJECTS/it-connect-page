'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import { useViewPort } from '@/_hooks';

import text from '@/_assets/headerSection/text.svg';
import logo from '@/_assets/headerSection/backgroundLogo.svg';
import image from '@/_assets/headerSection/image.png';
import figure1 from '@/_assets/headerSection/figure1.png';
import figure2 from '@/_assets/headerSection/figure2.png';
import figure3 from '@/_assets/headerSection/figure3.png';

import styles from './styles.module.sass';

export default function HeaderSection() {
  const [visible, setVisible] = useState<boolean>(true);

  const { isMobile } = useViewPort();

  useEffect(() => {
    if (!visible) return;

    const figures = document.querySelectorAll<HTMLElement>(
      `.${styles.figure1}, .${styles.figure2}, .${styles.figure3}`
    );

    const maxTranslate = 10;
    const maxRotate = 5;
    const maxScale = 1.04;
    const multipliers = Array.from({ length: figures.length }, () => 0.8 + (Math.random() * 0.6));

    let animationFrameId: number | null = null;

    const applyTransform = (x: number, y: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const offsetX = ((x / width) - 0.5) * 2 * maxTranslate;
      const offsetY = ((y / height) - 0.5) * 2 * maxTranslate;
      const rotate = ((x / width) - 0.5) * 2 * maxRotate;

      figures.forEach((fig, i) => {
        const m = multipliers[i] || 1;
        fig.style.transform = `translate(${offsetX * m}px, ${offsetY * m}px) rotate(${rotate * m}deg) scale(${maxScale})`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!visible) return;

      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      const x = e.clientX;
      const y = e.clientY;

      animationFrameId = requestAnimationFrame(() => {
        figures.forEach((fig) => {
          fig.style.transition = 'none';
        });

        applyTransform(x, y);
      });
    };

    const handleMouseLeave = () => {
      figures.forEach((fig) => {
        fig.style.transition = 'transform 0.3s ease-out';
        fig.style.transform = 'translate(0px, 0px) rotate(0deg) scale(1)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  return (
    <header className={styles.headerSection}>
      <h1 className="visually-hidden">
        IT Connect — IT community and meetups in Belgrade
      </h1>

      <Image
        src={logo}
        width={478}
        height={485}
        alt=""
        className={styles.headerSection__logo}
      />

      <div className={styles.headerSection__contentWrapper}>
        <div className={styles.textBlock}>
          <Image
            src={text}
            alt="IT Connect"
            width={!isMobile ? 579 : 300}
            height={!isMobile ? 225 : 130}
            style={{ zIndex: 1 }}
            draggable={false}
          />
          <div className={styles.rectangle}/>

          <div className={styles.textBlock__description}>
            Bringing IT professionals together to share knowledge, build connections, and create opportunities
          </div>
        </div>
        <div className={styles.imageBlock}>
          <Image
            src={image}
            alt="IT Connect community meetup in Belgrade"
            width={538 / (isMobile ? 2 : 1)}
            height={538 / (isMobile ? 2 : 1)}
            draggable={false}
            style={{
              zIndex: 4,
              position: 'relative'
            }}
          />
          <Image
            src={figure1}
            className={styles.figure1}
            alt=""
            width={335 / (isMobile ? 2 : 1)}
            height={335 / (isMobile ? 2 : 1)}
            draggable={false}
          />
          <Image
            src={figure2}
            alt=""
            width={181 / (isMobile ? 2 : 1)}
            height={181 / (isMobile ? 2 : 1)}
            draggable={false}
            className={styles.figure2}
          />
          <Image
            className={styles.figure3}
            src={figure3}
            alt=""
            width={275 / (isMobile ? 2 : 1)}
            height={408 / (isMobile ? 2 : 1)}
            draggable={false}
          />
        </div>
      </div>
      <InView onChange={setVisible} />
    </header>
  );
}

