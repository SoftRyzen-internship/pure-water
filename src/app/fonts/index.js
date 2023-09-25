import localFont from 'next/font/local';

export const axiforma = localFont({
  src: [
    {
      path: '../fonts/axiforma/Axiforma-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Book.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/axiforma/Axiforma-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-axiforma',
});

export const montreal = localFont({
  src: [
    {
      path: '../fonts/montreal/PPNeueMontreal-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-montreal',
});
