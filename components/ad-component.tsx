"use client"
import React, { useEffect } from 'react';

interface AdComponentProps {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
  adResponsive?: boolean
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdComponent: React.FC<AdComponentProps> = ({ adSlot, adFormat = 'auto', adLayout = '', adResponsive = false }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("Error loading ads:", e);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: 'block', width: '100%' }}
      data-ad-client="ca-pub-9634380513791071"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={adResponsive ? "true" : "false"}
      data-ad-layout={adLayout}></ins>
  );
};

export default AdComponent;