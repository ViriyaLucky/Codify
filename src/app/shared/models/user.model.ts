import { Location } from './location.model';

export class User {
    id: string="";
    title: string="";
    firstName: string="";
    lastName: string="";
    gender: string="";
    email: string="";
    dateOfBirth: string="";
    registerDate: string="";
    phone: string="";
    picture: string="";
    location: Location = new Location();

    deserialize(input: any) {
        Object.assign(this, input);
        this.location = new Location().deserialize(input.location);
        return this;
      }
}
