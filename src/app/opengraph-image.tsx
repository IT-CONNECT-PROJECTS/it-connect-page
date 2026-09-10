import React from 'react';
import { ImageResponse } from 'next/og';

export const alt = 'IT Connect Belgrade — IT community and meetups';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#3F195B',
          backgroundImage: 'linear-gradient(135deg, #3F195B 0%, #7030A0 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <svg width="132" height="129" viewBox="0 0 41 40" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.424 14.97C24.2456 14.97 25.1272 15.8084 25.1272 16.6866V38.8492C25.1272 39.4847 24.61 40 23.9719 40C20.8239 40 17.4276 39.7543 14.387 38.9421C10.8003 37.984 7.95677 36.0697 5.73077 33.8523C3.50476 31.6349 1.82342 28.962 0.961806 26.008C0.0834936 22.9966 -3.1275e-07 19.2567 0 16.1208C6.33887e-08 15.4853 0.517234 14.97 1.15527 14.97L23.424 14.97Z"
            fill="#00D6E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.8107 25.0299C15.8088 25.0299 15.0273 24.1717 15.0273 23.2535L15.0273 1.1508C15.0273 0.515232 15.5446 -8.33449e-08 16.1826 0C19.3307 4.11217e-07 22.7269 0.245681 25.7675 1.05789C29.3543 2.01597 32.1978 3.93032 34.4238 6.14771C36.6498 8.36509 38.3311 11.0379 39.1927 13.992C40.0711 17.0033 40.1546 20.7433 40.1546 23.8791C40.1546 24.5147 39.6373 25.0299 38.9993 25.0299H16.8107Z"
            fill="#9311F5"
          />
          <path
            d="M15.0273 14.97H23.3229C24.3189 14.97 25.1263 15.7743 25.1263 16.7664V25.0299H16.8307C15.8347 25.0299 15.0273 24.2256 15.0273 23.2335V14.97Z"
            fill="#00A9C4"
          />
        </svg>

        <div
          style={{
            display: 'flex',
            marginTop: '48px',
            fontSize: '92px',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-2px',
          }}
        >
          IT CONNECT
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '16px',
            fontSize: '44px',
            color: '#00D6E6',
          }}
        >
          IT community and meetups in Belgrade
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: '40px',
            fontSize: '32px',
            color: '#E4D7F0',
          }}
        >
          7,000+ members · up to 60 events a year
        </div>
      </div>
    ),
    size,
  );
}
