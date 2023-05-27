export type FormatInput = string | number | undefined;
export type Separator = '.' | ',';

export const LANGUAGE = {
  DE: {
    locale: 'de-DE',
    decimal: ',',
    thousand: '.',
  },
  EN: {
    locale: undefined,
    decimal: '.',
    thousand: ',',
  },
};
