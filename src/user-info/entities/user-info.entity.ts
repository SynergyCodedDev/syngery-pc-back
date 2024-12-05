import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('user_infos') 
  export class UserInfo {
    @PrimaryColumn()
    id: string;
  
    @Column({ type: 'varchar', length: 255 }) 
    address: string;
  
    @Column({ type: 'varchar', length: 100 }) 
    location: string;
  
    @Column({ type: 'varchar', length: 20 }) 
    zipCode: string;
  
    @Column({ type: 'varchar', length: 20 }) 
    phone: string;
  
    @CreateDateColumn() 
    createdAt: Date;
  
    @UpdateDateColumn() 
    updatedAt: Date;
  }
  