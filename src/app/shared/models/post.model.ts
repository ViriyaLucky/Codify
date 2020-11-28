import { Tag } from './tag.model';
import { User } from './user.model';

export class Post {
    id:string = '';
    text: string='';
    image: string='';
    likes: number=0;
    tags: Tag[]=[];
    link:string='';
    publishDate: string='';
    owner: User=new User();

    deserialize(input: any) {
        Object.assign(this, input);
        this.owner = new User().deserialize(input.owner);
        let tagHolder;
        this.tags = [];
        input.tags.forEach( (element: string) => {
            tagHolder = new Tag(element);
            this.tags.push(tagHolder);
        });  
        return this;
      }
}
