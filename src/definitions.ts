export interface TCTMHttpsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
