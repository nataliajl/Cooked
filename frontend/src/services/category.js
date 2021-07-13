import api from './api';

export const getCategories = async () => {
    const response = await api.get('/categories/');
    return response.data;
};

export const getCategory = async (id) => {
    const response = await api.get(`/categories/id/?category=${id}`);
    return response.data;
};
