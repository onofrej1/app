import { Resource } from './resources.types';

const category: Resource = {
    name: 'Category',
    name_plural: 'Categories',
    model: 'Category',
    resource: 'categories',
    relations: ['posts'],
    menuIcon: '',
    filter: [
    ],
    form: [
        { name: 'name', type: 'text', label: 'Name' },
    ],
    list: [
        { name: 'name', header: 'Name' },
    ],
};
export { category };
