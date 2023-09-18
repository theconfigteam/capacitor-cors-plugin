import { WebPlugin } from '@capacitor/core';

import type { TCTMHttpsPlugin } from './definitions';

export class TCTMHttpsWeb extends WebPlugin implements TCTMHttpsPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
