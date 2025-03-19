import conf from "../config/config.js";
import { Databases, ID, Client, Storage, Query } from "appwrite";

export class ContentService {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client); // Initialize databases
    this.storage = new Storage(this.client); // Initialize storage if needed
  }

  async createContent({
    content,
    title,
    type,
    user,
    userFile,
    status,
    visibility,
  }) {
    try {
      const document = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          content,
          title,
          type,
          user,
          userFile,
          status,
          visibility,
        }
      );
      return document;
    } catch (error) {
      console.error("Error creating content:", error.message);
      throw new Error("Failed to create content. Please try again.");
    }
  }

  async updateContent({ contentId, content, image, status }) {
    try {
      const document = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        contentId,
        {
          content,
          userFile,
          status,
          visibility,
        }
      );
      return document;
    } catch (error) {
      throw new Error("Failed to update content. Please try again.");
    }
  }

  async deleteContent({ contentId }) {
    try {
      const document = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        contentId
      );
      return document;
    } catch (error) {
      console.error("Error deleting content:", error.message);
      throw new Error("Failed to delete content. Please try again.");
    }
  }

  async getContents(queries = [Query.equal("status", true)]) {
    try {
      const documents = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
      return documents;
    } catch (error) {
      console.error("Error getting contents:", error.message);
      throw new Error("Failed to get contents. Please try again.");
    }
  }

  async getContent({ contentId }) {
    try {
      const document = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        contentId
      );
      return document;
    } catch (error) {
      console.error("Error getting content:", error.message);
      throw new Error("Failed to get content. Please try again.");
    }
  }
}

const contentService = new ContentService();
export default contentService;
