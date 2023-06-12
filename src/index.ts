import { FormatInput, LANGUAGE, Separator } from './static';

/**
 * @param value input number
 * @param lang language
 * @returns the index of decimal separator in input number
 */
const getDecimalSeparatorIndex = (value: number, lang: 'DE' | 'EN'): number => {
  // if input value is integer without decimal separator, return -1
  let index = -1;

  index = value
    .toLocaleString(LANGUAGE[lang].locale, {
      // use maximumFractionDigits to make sure the decimal digits won't be cut
      maximumFractionDigits: 20,
    })
    .indexOf(LANGUAGE[lang].decimal);

  return index;
};

/**
 * convert number and returns a string with configured respresnetation
 * @param value input number
 * @param decimal_place
 * @param decimal_separator
 * @param thousands_separator
 * @param round
 */

const format = (
  value: FormatInput,
  decimal_place: number = 2,
  decimal_separator: Separator = ',',
  thousands_separator: Separator = '.',
  round: boolean = true
): string => {
  let result: string = '';
  let num: number = value ? +value : 0;

  const isGerman = decimal_separator === ',' && thousands_separator === '.';
  const lang = isGerman ? 'DE' : 'EN';

  const useCut = !round || num < 0; // should be cut / trunc when param round is false or input number is negative
  const decimalSeparatorIndex = getDecimalSeparatorIndex(num, lang);

  if (decimalSeparatorIndex > 0 && useCut) {
    // if input value is a decimal number and should be cut
    result = num
      .toLocaleString(LANGUAGE[lang].locale, {
        // use maximumFractionDigits to make sure the decimal digits won't be cut
        maximumFractionDigits: 20,
      })
      .substring(0, decimalSeparatorIndex + 1 + decimal_place);
  } else {
    result = num.toLocaleString(LANGUAGE[lang].locale, {
      minimumFractionDigits: decimal_place,
      maximumFractionDigits: decimal_place,
    });
  }

  return result;
};

export default format;

format(undefined);
format(2.555);
format(10000.5555, 3);
format(100000.28374, 2, ',', '.');
format(100000.55555, 1, '.', ',');
format(1.555, 10, ',', '.');
format(-1.55555, 4);
format('-1.55555', 4);
format(1.55555, 3, ',', '.', false);
format('1.5555', 2);

format(-2);
