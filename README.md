# Squegg SDK




## This is an UNOFFICIAL package and is in no way endorsed or affiliated with the official [SQUEGG Smart Hand Grip Trainer](https://mysquegg.com/) product.

That said it is a great product and can be aquired from [mysquegg.com](https://mysquegg.com/product/squegg-digital-grip-strengthener/) and [Amazon](https://www.amazon.com/SQUEGG-The-Smart-Squeeze-Ball/dp/B07GRS5BXS).

![squegg](https://user-images.githubusercontent.com/2671660/111483768-64421180-8735-11eb-87b7-7a50eba4ed3f.gif)

## [Demo](https://codesandbox.io/s/squeggreact-nf3c5)

## Usage

```sh
$ npm install @lasseborly/squegg-sdk
```

```javascript
import { parseSquegg } from "@lasseborly/squegg-sdk";

/* 
 * Character codes should come from the device itself and it's your job to
 * convert them into an array of numbers. dataViewToArray is a utility function
 * that is useable if you use it on a web platform.
 */

const exampleCharCodes = [49, 57, 49, 49, 57, 46, 54, 50, 55];

parseSquegg(exampleCharCodes);
// { strength: 19.6, isSqueezing: true, batteryCharge: 100 }

```
