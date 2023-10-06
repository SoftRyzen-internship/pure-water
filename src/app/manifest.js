export default function manifest() {
  return {
    name: 'CLEAN WATER FOR EVERYONE',
    short_name: 'CLEAN WATER FOR EVERYONE',
    description:
      'CLEAN WATER FOR EVERYONE is a charitable organization founded to ensure access to clean and safe drinking water for everyone, regardless of their place of residence or social status. Make a donation today and help us provide clean water to the frontline cities of Ukraine.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/src/app/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/src/app/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/src/app/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/src/app/favicons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/src/app/favicons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/src/app/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
