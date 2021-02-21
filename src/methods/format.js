import * as _type from '@/check/type';
/**
 * @param {Number} number
 * @param {String} type floor | ceil | round
 * @param {Number} places
 */
export default function decimal(number, type = 'round', places = 2) {
  const types = ['floor', 'ceil', 'round'];
  if (!_type.isNumber(number)) return number;
  if (types.excludes(type)) return number;
  const n = places ? 10 ** places : 1;
  return Math[type](number * n) / n;
}
