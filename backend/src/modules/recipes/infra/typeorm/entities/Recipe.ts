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

  @OneToMany(() => Ingredient, ingredients => ingredients.recipe)
  ingredients: Ingredient[];

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Recipe;
