// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { get } from '@loopback/rest';


export class MotiController {

  @get('/moti')
  hello(): string {
    return 'doesnt like Shuki! exaclty!';
  }

}
