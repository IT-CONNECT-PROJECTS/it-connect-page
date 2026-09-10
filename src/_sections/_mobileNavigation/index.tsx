'use client';
import React, { useState } from 'react';
import { Avatar, Drawer, Flex } from 'antd';
import { BarsOutlined } from '@ant-design/icons';

import { navigationLinks, NavigationLinkType } from '@/_consts';
import { useViewPort } from '@/_hooks';

import styles from './styles.module.sass';

export default function MobileNavigation () {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useViewPort();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: NavigationLinkType,
  ) => {
    const homePageComponent = document.getElementById('homePage');
    const anchor = document.getElementById(link.id);

    if (!anchor || !homePageComponent) return;

    event.preventDefault();

    const top = anchor.offsetTop;
    setDrawerOpen(false);

    setTimeout(() => {
      homePageComponent.scrollTo({ top: top - 80, behavior: 'smooth' });
    }, 300);
  };

  if (!isMobile) return null;

  return (
    <div>
      <Avatar
        className={styles.avatar}
        onClick={() => setDrawerOpen(true)}
      >
        <BarsOutlined />
      </Avatar>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width="100%"
        title="Navigation"
      >
        <Flex
          vertical
          gap={20}
        >
          {navigationLinks.map((link) => (
            <a
              key={link.title}
              href={`#${link.id}`}
              className={styles.navigationLink}
              onClick={(event) => handleLinkClick(event, link)}
            >
              {link.title}
            </a>
          ))}
        </Flex>
      </Drawer>
    </div>

  );
}
