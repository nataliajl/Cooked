import Recipe from '@modules/recipes/infra/typeorm/entities/Recipe';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('ingredients')
class Ingredient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  amount: number;

  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Ingredient;
