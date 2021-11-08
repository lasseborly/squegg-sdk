export type CharCodes = number[];

export interface SqueggData {
  strength: number;
  isSqueezing: boolean;
  batteryCharge: number;
}

export const SERVICE_UUID = '0000ffb0-0000-1000-8000-00805f9b34fb';
export const CHARACTERISTIC_UUID = '0000ffb2-0000-1000-8000-00805f9b34fb';
export const DEVICE_NAME = 'weixin-nini';

export const BLUETOOTH_DEVICE_OPTIONS = {
  filters: [{ name: DEVICE_NAME }, { services: [SERVICE_UUID] }],
};

export type Percentage = number;

export function _parsebatteryCharge(raw: string): Percentage {
  const AVOID_ZERO = 1;
  const PERCENTAGE_MULTIPLIER = 10;
  return PERCENTAGE_MULTIPLIER * (Number(raw) + AVOID_ZERO);
}

export function _parseSqueezing(raw: string): boolean {
  return Boolean(Number(raw));
}

export function _parseStrength(values: string[]): number {
  const raw = values.join('');
  return Number(parseFloat(raw).toFixed(1));
}

export function _fromCharCode(charCodes: CharCodes): string[] {
  return charCodes.map((code) => String.fromCharCode(code));
}

export function dataViewToArray(dataView: DataView): number[] {
  return Array.from(new Int8Array(dataView.buffer));
}

export function parseSquegg(charCodes: CharCodes): SqueggData {
  const values: string[] = _fromCharCode(charCodes);
  // The first values is not a known representation.
  values.shift();

  const rawBatteryCharge: string = values.shift() as string;
  const rawSqueezing: string = values.shift() as string;

  return {
    strength: _parseStrength(values),
    isSqueezing: _parseSqueezing(rawSqueezing),
    batteryCharge: _parsebatteryCharge(rawBatteryCharge),
  };
}

export default parseSquegg;
