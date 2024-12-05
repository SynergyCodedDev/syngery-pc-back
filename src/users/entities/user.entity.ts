import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('users') 
  export class User {
    @PrimaryGeneratedColumn('uuid') 
    id: string;
  
    @Column({ type: 'varchar', length: 100 }) 
    name: string;
  
    @Column({ type: 'varchar', length: 100 }) 
    surname: string;
  
    @Column({ type: 'varchar', length: 255, unique: true }) 
    email: string;
  
    @Column({ type: 'varchar', length: 50 }) 
    role: string;
  
    @Column({ type: 'varchar', length: 255, nullable: true }) 
    avatar?: string;
  
    @Column({ type: 'uuid' })
    userInfoId: string;
  
    @CreateDateColumn() 
    createdAt: Date;
  
    @UpdateDateColumn() 
    updatedAt: Date;
  }
  