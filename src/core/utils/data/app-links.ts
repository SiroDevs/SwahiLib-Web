export interface AppLink {
  id: number;
  os: string;
  title: string;
  type: string;
  ext: string;
  url: string;
}

export const links: AppLink[] = [
  {
    id: 1,
    os: 'Android',
    title: 'Android',
    type: 'mobile',
    ext: '.apk',
    url: 'https://play.google.com/store/apps/details?id=com.swahilib'
  },
  {
    id: 2,
    os: 'iOS',
    title: 'iOS',
    type: 'mobile',
    ext: '.ipa',
    url: 'https://apps.apple.com/us/app/id6446771678'
  },
];
