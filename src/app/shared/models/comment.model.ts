import { User } from './user.model';

export class Comment {
    id?: string;
    message?: string;
    owner?: User
    publishDate?: string;
}
