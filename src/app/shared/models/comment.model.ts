import { User } from './user.model';

export class Comment {
    id: string= "";
    message: string= "";
    owner: User = new User();
    publishDate: string= "";

    deserialize(input: any) {
        Object.assign(this, input);
        this.owner = new User().deserialize(input.owner);

        return this;
      }
}
