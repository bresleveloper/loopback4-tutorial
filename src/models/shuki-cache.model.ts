import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ShukiCache extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'number',
    required: true,
  })
  Amount: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ShukiCache>) {
    super(data);
  }
}

export interface ShukiCacheRelations {
  // describe navigational properties here
}

export type ShukiCacheWithRelations = ShukiCache & ShukiCacheRelations;
