import { useState, useEffect } from 'react';

type ImageCategory = 'hero' | 'clinical' | 'map';

const IMAGES = {
  hero: [
    'photo-1617135899971-2f782c5d4fb1', // Ekstrem makro av blå iris - veldig skarp og detaljert (Wow-effekt)
    'photo-1586771107445-d3ca888129ff', // Høyteknologisk medisinsk utstyr, ren hvit/blå estetikk
    'photo-1534125883267-b5204467dc02', // Kunstnerisk nærbilde av øye med varm belysning
    'photo-1579154204601-01588f351e67', // Phoropter (synstestmaskin) i fokus - symboliserer presisjon
    'photo-1494883759339-0b0177749f96', // Abstrakt blå teknologi/medisinsk bakgrunn
  ],
  clinical: [
    'photo-1579684453423-f84349ca60df', // Profesjonell øyelege som bruker spaltelampe
    'photo-1582719508461-905c673771fd', // Moderne, lyst legekontor/klinikk
    'photo-1584515933487-779824d29309', // Detaljert bilde av undersøkelse (profesjonelt)
    'photo-1623861214878-3860538a8df0', // Digital retina scan / netthinne visualisering (Tech)
    'photo-1581594693702-fbdc51b2763b', // Høyteknologisk medisinsk skjerm/analyse
  ],
  map: [
    'photo-1486406146926-c627a92ad1ab', // Moderne glassarkitektur (impliserer moderne lokaler)
    'photo-1569336415962-a4bd9f69cd83', // Abstrakt kart/topografi
    'photo-1497366216548-37526070297c', // Rent, moderne kontorbygg/inngangsparti
  ]
};

export const useImageRotator = (category: ImageCategory) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = IMAGES[category];
    const storageKey = `img_rotator_${category}`;
    
    let index = 0;
    
    try {
      const stored = localStorage.getItem(storageKey);
      const now = new Date().getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      if (stored) {
        const { index: storedIndex, timestamp } = JSON.parse(stored);
        // Rotate if more than 24 hours have passed
        if (now - timestamp > oneDay) {
          index = (storedIndex + 1) % images.length;
          localStorage.setItem(storageKey, JSON.stringify({ index, timestamp: now }));
        } else {
          index = storedIndex;
        }
      } else {
        // Initial load - random start
        index = Math.floor(Math.random() * images.length);
        localStorage.setItem(storageKey, JSON.stringify({ index, timestamp: now }));
      }
    } catch (e) {
      // Fallback if localStorage fails
      index = Math.floor(Math.random() * images.length);
    }

    // Ensure index is valid
    if (index >= images.length) index = 0;

    // Use larger width (w=1600) for hero images to ensure crisp quality on retina screens
    const width = category === 'hero' ? 1600 : 1200;
    const finalUrl = `https://images.unsplash.com/${images[index]}?auto=format&fit=crop&q=85&w=${width}`;
    
    // Preload image
    const img = new Image();
    img.src = finalUrl;
    img.onload = () => {
      setImageSrc(finalUrl);
      setLoading(false);
    };
  }, [category]);

  return { imageSrc, loading };
};