
import NotFoundEntityException from '../Application/Exceptions/NotFoundEntityException';

export function getLocationReference(reference: string) {
  if (reference) {
    if (reference.match(REFERENCE_LOCATION_NEW_REGEX_VALID)) {
      return reference;
    } else {
      let match = reference.match(REFERENCE_LOCATION_OLD_REGEX_VALID);
      if (match) {
        return 'P' + pad(match[1], 3) + 'A' + pad("" + convertContainerRowLetterToNumber(match[2]), 2) + 'C' + pad(match[3], 3);
      } else {
        return null;
      }
    }
  } else {
    return null;
  }
}


function convertContainerRowLetterToNumber(letter: string): number {
  return letter.toUpperCase().charCodeAt(0) - 64;
}

function pad(num: string, size: number): string {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
}

export const REFERENCE_LOCATION_REGEX_VALID = /^(([A-Z]{1,4})([\d]{3})A([\d]{2})C([\d]{3}))|(P(\d+)([A-Z])(\d+))$/;
export const REFERENCE_LOCATION_OLD_REGEX_VALID = /^P(\d+)([A-Z])(\d+)$/;
export const REFERENCE_LOCATION_NEW_REGEX_VALID = /^([A-Z]{1,4})([\d]{3})A([\d]{2})C([\d]{3})$/;
export const REFERENCE_PACKING_REGEX_VALID = /^([A-Z])(\d{4})$/;
export const REFERENCE_PRODUCT_REGEX_VALID = /^([0]{2})([\d]{6})([\d]{2})([\d]{3})([\d]{5})$/;
export const REFERENCE_MODEL_REGEX_VALID = /^([0-9]{1,6})$/;
export const REFERENCE_PRODUCT_MODEL_REGEX_VALID = /^(([0]{2})([\d]{6})([\d]{2})([\d]{3})([\d]{5}))|([0-9]{1,6})$/;
export const PREFIX_LOCATION_REGEX_VALID = /^[a-zA-Z]*$/;