import { User } from "../model/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
    // dummy data
  ): Promise<User | undefined> {
    if (userName === "user" && password === "1234") {
      return {
        userName: userName,
        email: "some@email.com",
      };
    } else {
      return undefined;
    }
  }
}
