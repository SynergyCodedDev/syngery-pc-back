import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column()
  categoryId: string;

  @Column({ type: 'text' })
  desc: string;

  @Column({ type: 'text', nullable: true })
  subDesc?: string;

  @Column({ type: 'simple-array' })
  tags: string[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 255 })
  imageUrl: string;

  @Column({ type: 'simple-array', nullable: true })
  properties: string[];

  @Column({ type: 'varchar', length: 100 })
  brand: string;

  @Column({ type: 'varchar', length: 100 })
  warranty: boolean;

  @Column({ type: 'date', nullable: true })
  releaseDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
