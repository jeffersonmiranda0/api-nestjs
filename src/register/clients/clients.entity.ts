import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Clients {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('int')
  age: number;

  @Column({ type: 'varchar' })
  cpf: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn({ type: 'datetime', name: 'created_at', nullable: false })
  created_at: Date;

  @UpdateDateColumn({ type: 'datetime', name: 'updated_at', nullable: false })
  updated_at: Date;

  @Column({ type: 'smallint', default: 1 })
  active: number;
}
