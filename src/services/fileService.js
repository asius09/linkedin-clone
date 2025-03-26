import config from "../config/config";
import { Client, Storage, ID } from "appwrite";

export class FileService {
  client = new Client();
  storage;
  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      const uploadedFile = await this.storage.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      );
      return uploadedFile;
    } catch (error) {
      console.error("Error uploading file:", error.message);
      throw new Error("Failed to upload file. Please try again.");
    }
  }

  async deleteFile({ fileId }) {
    try {
      await this.storage.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Error deleting file:", error.message);
      throw new Error("Failed to delete file. Please try again.");
    }
  }

  async getFile({ fileId }) {
    try {
      const file = await this.storage.getFile(config.appwriteBucketId, fileId);
      return file;
    } catch (error) {
      console.error("Error getting file:", error.message);
      throw new Error("Failed to get file. Please try again.");
    }
  }

  async listFiles() {
    try {
      const files = await this.storage.listFiles(config.appwriteBucketId);
      return files;
    } catch (error) {
      console.error("Error listing files:", error.message);
      throw new Error("Failed to list files. Please try again.");
    }
  }

  async updateFile({ fileId, file }) {
    try {
      const updatedFile = await this.storage.updateFile(
        config.appwriteBucketId,
        fileId,
        file
      );
      return updatedFile;
    } catch (error) {
      console.error("Error updating file:", error.message);
      throw new Error("Failed to update file. Please try again.");
    }
  }

  getFilePreview({ fileId }) {
    return this.storage.getFilePreview(config.appwriteBucketId, fileId);
  }
}

const fileService = new FileService();
export default fileService;
