import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinTable,
  ManyToOne,
  OneToMany,
  Unique,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';
import OAuth2Token from './OAuth2Token';
import BaseEntity from './BaseEntity';
import Zone from './Zone';
import { isSyncEntities } from '../../../Common/isSyncEntities';
@Entity({ synchronize: isSyncEntities(Table)  })
@Unique(['id'])
export default class Table extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  size: number;

  @ManyToOne(type => Zone, zone => zone.id)
  zone: Zone

  @Column()
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

  toJSON() {
    const user = Object.assign(this);
    return {
      id: this.id,
      name: this.name,
      size: this.size,
      zone: this.zone,
      isActive: this.isActive
    };
  }
}

