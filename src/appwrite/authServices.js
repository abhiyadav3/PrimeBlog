import { Client, Account, ID } from "appwrite";
import env from "../envConfig";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(env.appwriteURL).setProject(env.appwriteID);
    this.account = new Account(this.client);
  }
  register = async ({ email, password, name }) => {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (user) {
        return this.login({ email, password });
      } else {
        return user;
      }
    } catch (error) {
      console.log("Error creating account");

    }
  };

  login = async ({ email, password }) => {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error logging in");
      console.log(error);
    }
  };

  logout = async () => {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Error logging out");
      console.log(error);
    }
  };

  getAccount = async () => {
    try {
      const user = await this.account.getSession("current");
      return user;
    } catch (error) {}
  };
}

const user = new AuthService();
export default user;
