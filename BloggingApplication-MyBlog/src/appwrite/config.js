import conf from "../conf/conf.js"
import {Client, Databases, Storage, Query, ID} from "appwrite"


export class Service {
    client = new Client()
    databases;
    bucket; // storage

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)//connect to appwrite
        this.bucket = new  Storage(this.client)// connect to appwrite storage
    }

    async getPost(slug){
        try {

            return await this.databases.
            getDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)

        } catch (error) {
            console.log("Appwrite service :: getPost() :: ", error);
            return false
        }
    }

    //for multiple post
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log("Appwrite service :: getPosts() :: ", error);
            return false
        }
    }

    //creating a post
    async createPost({title, slug, content, featureImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featureImage,status,userId
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost() :: ", error);
            return false;
        }
    }

    //update a post
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updateDocument() :: ", error);
            return false
        }
    }

    //delete a post
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteDocument() :: ", error);
            return false
        }
    }

    //storage service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile() :: ", error);
            return false
        }
    }

    //delete file
    async deleteFile(fileId){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile() :: ", error);
            return false
        }
    }

    //Previw file
    previewFile(fileId){
        return this.bucket.previewFile(
            conf.appwriteBucketId,
            fileId
        ).href
    }

}

const service = new Service();
export default service;