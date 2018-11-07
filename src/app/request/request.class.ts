export class Request {
    id: number;
    description: string;
    justification: string;
    reasonForRejection: string;
    deliveryMode: string;
    submittedDate: string;
    status: string;
    total: number;
    active: boolean;
    userId: number;
    user: string;
    

    constructor() {
            this.id = 0;
            this.total = 0;
            this.deliveryMode = "Pickup";
            this.submittedDate = (new Date()).toLocaleDateString();
            this.status = "NEW";
            this.active = true;
    }
}