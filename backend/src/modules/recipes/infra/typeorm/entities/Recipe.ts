import Category from '@modules/categories/infra/typeorm/entities/Category';
import Ingredient from '@modules/ingredients/infra/typeorm/entities/Ingredient';
import Step from '@modules/steps/infra/typeorm/entities/Step';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('recipes')
class Recipe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column("text")
  title: string;

  @Column("text")
  description: string;

  @Column()
  cooking_time: number;

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

  @OneToMany(() => Ingredient, ingredient => ingredient.recipe)
  ingredients: Ingredient[];

  @OneToMany(() => Step, step => step.recipe)
  steps: Step[];
  
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
