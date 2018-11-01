export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor() {
        this.id = 0;
        this.password = 'password';
        this.isReviewer = false;
        this.isAdmin = false;
    }
}