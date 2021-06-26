import Category from '@modules/categories/infra/typeorm/entities/Category';
import Step from '@modules/steps/infra/typeorm/entities/Step';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  cookingTime: number;

  @Column()
  servingSize: number;

  @Column()
  vegetarian: boolean;

  @Column()
  vegan: boolean;

  @Column()
  lactosefree: boolean;

  @Column()
  glutenfree: boolean;

  @Column()
  private: boolean;

  @Column({ name: 'category_id' })
  categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipe;
