// src/app/component/analytics.ts
const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

if (!GOOGLE_ANALYTICS_ID) {
  console.error('Google Analytics ID is missing');
  throw new Error('Missing Google Analytics environment variable');
}

console.log('Google Analytics ID:', GOOGLE_ANALYTICS_ID); // Log the ID to verify

export const pageView = (url: URL) => {
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url,
  });
};

export const event = (action: Gtag.EventNames, params: Gtag.EventParams) => {
  window.gtag('event', action, params);
};

export { GOOGLE_ANALYTICS_ID };
