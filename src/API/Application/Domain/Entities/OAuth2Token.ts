import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  // BaseEntity,
  ManyToOne,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  JoinTable,
} from 'typeorm';
import BaseEntity from './BaseEntity';
import User from './User/User';
import Log from './Log/Log';

import { isSyncEntities } from '../../../Common/isSyncEntities';
@Entity({ synchronize: isSyncEntities(OAuth2Token) })
export default class OAuth2Token extends BaseEntity {

  // constructor(token?) {
  //   super();
  //
  //   if (token) {
  //     this.user = Promise.resolve(token.user);
  //     // this.client = Promise.resolve(token.client);
  //     this.accessTokenExpiresAt = token.accessTokenExpiresAt;
  //     this.refreshTokenExpiresAt = token.refreshTokenExpiresAt;
  //     this.accessToken = token.accessToken;
  //     this.refreshToken = token.refreshToken;
  //   }
  // }

  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  accessToken: string;

  @Column()
  accessTokenExpiresAt: Date;

  @Column()
  refreshToken: string;

  @Column()
  refreshTokenExpiresAt: Date;

  @ManyToOne(type => User, user => user.tokens)
  @JoinTable()
  user: User;


  @OneToMany(type => Log, log => log.user)
  logs: Log[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  setUpdatedAt(date?: Date) {
    let setDate = date;
    if (typeof date === 'undefined') {
      setDate = new Date();
    }
    this.updatedAt = setDate;
  }

}
