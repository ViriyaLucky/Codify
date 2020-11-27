import { User } from './user.model';

export class Comment {
    id: string= "";
    message: string= "";
    owner: User = new User();
    publishDate: string= "";
}
