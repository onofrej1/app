import { Resource } from './resources.types';
import { object, string } from 'yup';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const rules = object({
    //employeeId: string().required(),
});

const post: Resource = {
    name: 'Post',
    name_plural: 'Posts',
    model: 'Post',
    resource: 'posts',
    relations: [],
    canAddItem: false,
    menuIcon: '',
    rules,
    filter: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'body', type: 'text', label: 'Body' },
        //{ name: 'category', type: 'text', label: 'Category' },
    ],
    form: [
        { name: 'title', type: 'text', label: 'Name' },
        { name: 'body', type: 'text', label: 'Body' },
        /*{
            name: 'cat_id',
            type: 'foreignKey',
            label: 'Category',
            resource: 'categories',
            valueField: 'id',
            textField: 'title',
        },*/
    ],
    list: [
        { name: 'title', header: 'Title' },
        { name: 'body', header: 'Body' },
        //{ name: 'cat_id', header: 'Category' },
    ],
};
export { post };
