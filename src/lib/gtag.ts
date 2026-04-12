export const GA_ID = import.meta.env.VITE_GA_ID;

export const pageview = (url: string) => {
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};

export const trackEvent = (action: string, category: string, label: string) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};