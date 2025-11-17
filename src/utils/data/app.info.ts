export interface AppInfo {
  appName: string;
  appIcon: string;
  appVersion: string;
  tagline: string;
  callout: string;
  description: string;
  github: string;
  privacyStatement: string;
}

export const info: AppInfo = {
  appName: 'SwahiLib',
  appIcon: '/icons/app_icon.png',
  appVersion: '1.0.797',
  callout: 'Pata SwahiLib',
  tagline: 'Kamusi yako mkononi!',
  description: 'SwahiLib hukupa ufikiaji wa Kamusi ya Kiswahili kwamba huna haja ya kuwa na wasiwasi kuhusu kuwa mtandaoni pindi tu unapokuwa umeweka programu kwenye kifaa chako.',
  github: 'https://github.com/sirodevs',
  privacyStatement: 'Tunaelewa umuhimu wa faragha na tumejitolea kulinda taarifa za kibinafsi za watumiaji wetu. Sera hii ya faragha inabainisha jinsi tunavyokusanya, kutumia na kulinda maelezo unayotoa tunapotumia programu zetu.'
};
