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

@Entity('steps')
class Step {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column("text",{array: true})
  steps: string[];

  @ManyToOne(() => Recipe)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Step;
