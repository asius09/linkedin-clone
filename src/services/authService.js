import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, fullName }) {
    try {
      const user = await this.account.create(
        ID.unique(),
        email,
        password,
        fullName
      );
      if (!user) throw new Error("Failed to create account, user: " + user);
      return this.signin(email, password);
    } catch {
      throw new Error("Failed to create account. Please try again.");
    }
  }

  async signin(email, password) {
    try {
      await this.account.createEmailPasswordSession(email, password);
      return true;
    } catch {
      throw new Error("Failed to sign in. Please try again.");
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch {
      throw new Error("Failed to get current user. Please try again.");
    }
  }

  async signout() {
    try {
      await this.account.deleteSessions();
      return true;
    } catch {
      throw new Error("Failed to sign out. Please try again.");
    }
  }
}

const authService = new AuthService();
export default authService;
