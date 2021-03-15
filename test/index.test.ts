import { parseSquegg } from '../src';

describe('SQUEGG SDK', () => {
  it('parse list of char codes into squegg data', () => {
    expect(parseSquegg([49, 57, 49, 48])).toEqual({
      strength: 0,
      isSqueezing: true,
      batteryCharge: 100,
    });

    expect(parseSquegg([49, 57, 49, 49, 57, 46, 54, 50, 55])).toEqual({
      strength: 19.6,
      isSqueezing: true,
      batteryCharge: 100,
    });

    expect(parseSquegg([49, 57, 48, 50, 52, 46, 49, 57, 51])).toEqual({
      strength: 24.2,
      isSqueezing: false,
      batteryCharge: 100,
    });

    expect(parseSquegg([49, 57, 48, 55, 46, 57, 53, 51])).toEqual({
      strength: 8,
      isSqueezing: false,
      batteryCharge: 100,
    });

    expect(parseSquegg([49, 57, 49, 46, 52, 53, 56])).toEqual({
      strength: 0.5,
      isSqueezing: true,
      batteryCharge: 100,
    });
  });
});
