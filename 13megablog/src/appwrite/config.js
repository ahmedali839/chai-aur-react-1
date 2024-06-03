import { Client, ID, Databases, Storage, Query  } from "appwrite";
import conf from "../config/conf";

export class Service{
    client = new Client() 
    databases;
    storage;

    constructor() {
        this.client 
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId);  
    this.databases = new Databases(this.client) 
    this.storage = new Storage(this.client)
    } 

async createPost({slug, content, featuredImage, title, status, userId}) {
    try {
        return await this.databases.createDocument(
     conf.appwriteDataBaseId,
     conf.appwriteCollectionId,
     slug,
     {
        title, 
        status, 
        userId,
        content,
        featuredImage,
     }
        )
    } catch (error) {
        throw error
    }
}
 
async updatePost(slug, {title, content, status, featuredImage}){
 try {
    return await this.databases.updateDocument(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        slug,
        {
           content, 
           title, 
           status,
           featuredImage,
        }       
           )
 } catch (error) {
    throw error
 }
}
 
async deletePost(slug){
    try {
        return await this.databases.deleteDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug,
        )
       return true;
    } catch (error) {
        throw error
        return false;
    }
}
 
async getPost(slug) {
    try {
        return await this.databases.getDocument(
            conf.appwriteDataBaseId,
            conf.appwriteCollectionId,
            slug
        ) 
    } catch (error) {
        throw error 
       return false;
    }
}
 
async getPosts(queries) { 
try {
    return await this.databases.listDocuments(
        conf.appwriteDataBaseId,
        conf.appwriteCollectionId,
        queries =[Query.equal("status", "active")]
    )
} catch (error) {
    throw error; 
    return false;
}

}


// file upload systems services

async fileUpload(file){
try {
    return await this.storage.createFile(
        conf.appwriteDataBaseId,
        ID.unique(),
        file,
    )
} catch (error) {
    throw error;
    return false;
}
}

async deleteFile(fileID){
    try {
        return await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileID
        )
        return true;
    } catch (error) {
        throw error;
    }
} 

async getFilePreview(fileID){
    try {
        return await this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileID
        )
        return true;
    } catch (error) {
        throw error;
    }
}


} 

const service = new Service() 

export default service;
