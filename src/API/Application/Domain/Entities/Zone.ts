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
  ManyToOne,
} from 'typeorm';
import BaseEntity from './BaseEntity';
import Table from './Table';
import { isSyncEntities } from '../../../Common/isSyncEntities';
@Entity({ synchronize: isSyncEntities(Zone)  })
@Unique(['id'])
export default class Zone extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: false, default:false })
  isActive: boolean;

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

}

