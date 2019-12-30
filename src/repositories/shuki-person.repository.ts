import {DefaultCrudRepository} from '@loopback/repository';
import {ShukiPerson, ShukiPersonRelations} from '../models';
import {ShukiPersonDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShukiPersonRepository extends DefaultCrudRepository<
  ShukiPerson,
  typeof ShukiPerson.prototype.id,
  ShukiPersonRelations
> {
  constructor(
    @inject('datasources.ShukiPersonDb') dataSource: ShukiPersonDbDataSource,
  ) {
    super(ShukiPerson, dataSource);
  }
}
