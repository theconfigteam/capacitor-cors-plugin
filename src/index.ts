import { registerPlugin } from '@capacitor/core';

import type { TCTMHttpsPlugin } from './definitions';

const TCTMHttps = registerPlugin<TCTMHttpsPlugin>('TCTMHttps', {
  web: () => import('./web').then(m => new m.TCTMHttpsWeb()),
});

export * from './definitions';
export { TCTMHttps };
