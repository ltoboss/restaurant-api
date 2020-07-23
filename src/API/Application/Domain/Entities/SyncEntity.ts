import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

import BaseEntity from './BaseEntity';

import { isSyncEntities } from '../../../Common/isSyncEntities';
@Entity({synchronize:  isSyncEntities(SyncEntity)})
export default class SyncEntity extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  appName: string;

  
  @Column()
  name: string;

  @Column()
  hash: string;

  @Column()
  isUpdated: boolean;

  getId() : number{
    return this.id;
  }

  setId(id: number){
    this.id = id;
  }
  
  getAppName(): string {
    return this.appName;
  }

  setAppName(appName: string): void {
    this.appName = appName;
  }
  
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getHash(): string {
    return this.hash;
  }

  setHash(hash: string): void {
    this.hash = hash;
  }

  getIsUpdated(): boolean {
    return this.isUpdated;
  }

  setisUpdated(isUpdated: boolean): void {
    this.isUpdated = isUpdated;
  }

}