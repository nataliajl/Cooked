import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import GetCategoryTitlesService from '@modules/categories/services/GetCategoryTitlesService';

interface IRequest {
  title: string;
}

export default class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title }: IRequest = request.body;

    //Obtendo a função criadora de categorias - Utilizando o container que servirá para a injeção de dependencias
    const createCategory = container.resolve(CreateCategoryService);

    //Executando a função que cria categorias
    const category = await createCategory.execute(title);

    return response.json(category);
  }

  public async getTitles(request: Request, response: Response): Promise<Response> {

    //Obtendo a função criadora de categorias - Utilizando o container que servirá para a injeção de dependencias
    const getCategoryTitles = container.resolve(GetCategoryTitlesService);

    //Executando a função que cria categorias
    const categoryTitles = await getCategoryTitles.execute();
    
    return response.json(categoryTitles);
  }

}
