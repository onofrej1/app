import { Resource } from './resources.types';

const tag: Resource = {
    name: 'Tag',
    name_plural: 'Tags',
    model: 'Tag',
    resource: 'tags',
    menuIcon: '',
    filter: [
    ],
    form: [
        { name: 'title', type: 'text', label: 'Title' },
    ],
    list: [
        { name: 'title', header: 'Title' },
    ],
};
export { tag };
