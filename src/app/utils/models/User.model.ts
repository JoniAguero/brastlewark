export class User {

    public uid: string;
    public name: string;
    public email: string;

    constructor(obj) {
        this.uid = obj.uid;
        this.name = obj.name;
        this.email = obj.email;
    }
}
