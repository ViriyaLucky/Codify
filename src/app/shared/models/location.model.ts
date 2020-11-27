export class Location {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    timezone?: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
}
