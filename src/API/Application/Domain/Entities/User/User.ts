import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToMany,
  OneToMany,
  Unique,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';


import OAuth2Token from '../OAuth2Token';
import BaseEntity from '../BaseEntity';

/**
 * @swagger
 *
 * definitions:
 *   NewUser:
 *     type: object
 *     required:
 *       - username
 *       - password
 *     properties:
 *       username:
 *         type: string
 *       password:
 *         type: string
 *         format: password
 */


/**
 *  @swagger
 *
 *  definitions:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        email:
 *          type: string
 *        name:
 *          type: string
 *        password:
 *          type: string
 *          format: password
 *        roles:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id : integer
 */

/**
 *  @swagger
 *
 *  definitions:
 *    ResponseUser:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        email:
 *          type: string
 *        name:
 *          type: string
 */

import { isSyncEntities } from '../../../../Common/isSyncEntities';
@Entity({ synchronize: isSyncEntities(User)  })
@Unique(['email'])
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  phone: number;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ nullable: true })
  employedId: number;

  @Column({ name: 'reset_password_token', nullable: true })
  resetPasswordToken: string;


  @OneToMany(type => OAuth2Token, token => token.user)
  @JoinTable()
  tokens: Promise<OAuth2Token[]>;


  @Column({ default: () => false })
  hasWarehouse: boolean;  

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

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  getPhone(): number {
    return this.phone;
  }

  setPhone(phone: number): void {
    this.phone = phone;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  getSalt(): string {
    return this.salt;
  }

  setSalt(salt: string): void {
    this.salt = salt;
  }

  getResetPasswordToken(): string {
    return this.resetPasswordToken;
  }

  setResetPasswordToken(token: string): void {
    this.resetPasswordToken = token;
  }

  hasResetPasswordToken(): boolean {
    return this.resetPasswordToken !== null;
  }

  getEmployedId(): number {
    return this.employedId;
  }

  setEmployedId(employedId: number): void {
    this.employedId = employedId;
  }

  getHasWarehouse(): boolean {
    return this.hasWarehouse;
  }

  setHasWarehouse(hasWarehouse: boolean): void {
    this.hasWarehouse = hasWarehouse;
  }

}

