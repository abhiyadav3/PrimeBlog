import { Client, Databases, Storage, Query, ID } from "appwrite";
import env from "../envConfig";

class BlogServices {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(env.appwriteURL).setProject(env.appwriteID);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  createPost = async ({
    title,
    slug,
    content,
    featuredImage,
    status,
    userId,
  }) => {
    try {
      return await this.databases.createDocument(
        env.appwriteDB,
        env.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service :: createPost :: error", error);
    }
  };

  deletePost = async (slug) => {
    try {
      await this.databases.deleteDocument(
        env.appwriteDB,
        env.appwriteCollection,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: deletePost :: error", error);
      return false;
    }
  };

  updatePost = async (slug, { title, content, featuredImage, status }) => {
    try {
      return await this.databases.updateDocument(
        env.appwriteDB,
        env.appwriteCollection,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite service :: updatePost :: error", error);
    }
  };

  getPost = async (slug) => {
    try {
      return await this.databases.getDocument(
        env.appwriteDB,
        env.appwriteCollection,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return null;
    }
  };

  getPosts = async (queries = [Query.equal("status", "active")]) => {
    try {
      return await this.databases.listDocuments(
        env.appwriteDB,
        env.appwriteCollection,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: getAllPosts :: error");
      return null;
    }
  };

  getMyPosts = async () => {
    try {
      return await this.databases.listDocuments(
        env.appwriteDB,
        env.appwriteCollection,
      );
    } catch (error) {
      console.log("Appwrite service :: getMyPosts :: error");
      return null;
    }
  };

  uploadFile = async (file) => {
    try {
      return await this.storage.createFile(
        env.appwriteBucket,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  };

  deleteFile = async (fileId) => {
    try {
      await this.storage.deleteFile(env.appwriteBucket, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  };

  getFilePreview = (fileId) => {
    return this.storage.getFilePreview(env.appwriteBucket, fileId);
  };
}

const blogServices = new BlogServices();
export default blogServices;
