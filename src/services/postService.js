import conf from "../config/config.js";
import { Databases, ID, Client, Storage, Query } from "appwrite";

export class PostService {
  client = new Client();
  databases;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteEndpoint)
      .setProject(conf.appwriteProjectId);
  }

  async createPost({ content, image, userId, username, userFile, status }) {
    try {
      const post = await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          content,
          image,
          userId,
          username,
          userFile,
          status,
        }
      );
      return post;
    } catch (error) {
      console.error("Error creating post:", error.message);
      throw new Error("Failed to create post. Please try again.");
    }
  }

  async updatePost({ postId, content, image, status }) {
    try {
      const post = await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        {
          content,
          image,
          status,
        }
      );
      return post;
    } catch (error) {
      console.error("Error updating post:", error.message);
      throw new Error("Failed to update post. Please try again.");
    }
  }

  async deletePost({ postId }) {
    try {
      const post = await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );
      return post;
    } catch (error) {
      console.error("Error deleting post:", error.message);
      throw new Error("Failed to delete post. Please try again.");
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const posts = await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries,
      );
      return posts;
    } catch (error) {
      console.error("Error getting posts:", error.message);
      throw new Error("Failed to get posts. Please try again.");
    }
  }

  async getPost({ postId }) {
    try {
      const post = await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );
      return post;
    } catch (error) {
      console.error("Error getting post:", error.message);
      throw new Error("Failed to get post. Please try again.");
    }
  }
}

const postService = new PostService();
export default postService;
