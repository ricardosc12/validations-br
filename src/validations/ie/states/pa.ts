import { validateCE } from './ce';

export function validatePA(ie: string): boolean {
  const ieStr = String(ie).replace(/\D/g, '');

  const allowedPrefixes = ['15', '75', '76', '77', '78', '79'];
  if (!allowedPrefixes.includes(ieStr.substr(0, 2))) return false;

  return validateCE(ieStr);
}
