import {Claim} from './claim';

export class User {
   _id: string;
    email:string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    token:string;
    role:string;
    posts:Array<Claim>;
}

  
