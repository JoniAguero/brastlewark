export class Gnome {

    id: number;
    name: string;
    thumbnail: string;
    age: number;
    weight: number;
    height: number;
    hair_color: string;
    professions: String [];
    friends: String[];

    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.thumbnail = obj.thumbnail;
        this.age = obj.age;
        this.weight = obj.weight;
        this.height = obj.height;
        this.hair_color = obj.hair_color;
        this.professions = obj.professions;
        this.friends = obj.friends;
    }
}
