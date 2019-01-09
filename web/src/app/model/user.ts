export class User {
    id: number;
    idToken: number;
    name: string;
    email: string;
  
    constructor(id: number, idToken: number, name: string, email: string) {
      this.id = id;
      this.idToken = idToken;
      this.name = name;
      this.email = email;
    }
  }