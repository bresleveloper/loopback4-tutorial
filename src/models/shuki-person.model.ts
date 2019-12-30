import { Entity, model, property } from '@loopback/repository';

@model({
  settings: {
    strict: false,
    mysql: {
      table: 'shuky person'
    }
  }
})
export class ShukiPerson extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  age: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ShukiPerson>) {
    super(data);
  }
}

export interface ShukiPersonRelations {
  // describe navigational properties here
}

export type ShukiPersonWithRelations = ShukiPerson & ShukiPersonRelations;
