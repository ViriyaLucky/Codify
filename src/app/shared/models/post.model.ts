import { Tag } from './tag.model';
import { User } from './user.model';

export class Post {
    text?: string;
    image?: string;
    likes?: number;
    tags?: Tag[];
    publishDate?: string;
    owner?: User

    deserialize(input: any) {
        Object.assign(this, input);
        this.owner = new User().deserialize(input.owner);
        let tagHolder;
        this.tags = [];
        input.tags.forEach( (element: string) => {
            tagHolder = new Tag(element);
            this.tags?.push(tagHolder);
        });  
        return this;
      }
}
