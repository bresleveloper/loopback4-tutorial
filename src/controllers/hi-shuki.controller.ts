// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { get } from '@loopback/rest';

export class HiShukiController {
  @get('/shuki')
  hello(): string {
    return 'Hello Shuki!';
  }
}
