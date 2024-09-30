
import {Config} from '../config/config.js'
import { Client, Databases,Storage, ID,Query } from "appwrite";


export class Service{
    client = new Client();
    database;
    bucket;
    
        constructor(){
            this.client
            .setEndpoint(Config.appWriteUrl)
            .setProject(Config.appWriteProjectId)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)

        }

async createPost({title,slug ,featuredId,content,userId,status})
{
    try {
        return await this.databases.createDocument(
            Config.appWriteDatebaseId,
            Config.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featuredId,
                userId,
                status

            }
        )
        
    } catch (error) {
        console.log("Appwrite error in creating post ",error)
        
    }


}

async updatepost(slug ,{title,featuredId,content,userId,status}){
    try {

     return   await this.database.updateDocument(
            Config.appWriteDatebaseId,
            Config.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featuredId,
                status
            }
        )

    } catch (error) {
        console.log("Error in Updating post in appwrite",error);
        
    }

}

async deletepost(slug){
    try {
        return await this.databases.deleteDocument(
            Config.appWriteDatebaseId,
            Config.appWriteCollectionId,
            slug,
        )
        
        return true;
    } catch (error) {
        console.log("Error in Deleting post")
        return false
    }
}

async getpost(slug){
    try {
            return await this.databases.getDocument(
                Config.appWriteDatebaseId,
                Config.appWriteCollectionId,
                slug,

            )

    } catch (error) {
        console.log("Error in getPost",error);
        return false
        
    }
}

async getPosts(queries=[Query.equal("status","active")]){

    try {
        return await this.databases.listDocuments(
            Config.appWriteDatebaseId,
            Config.appWriteCollectionId,
            queries,
          

            
        )

        
    } catch (error) {
        console.log("Error in listing document",error)
    }
}


async uploadFile(file){
    try {
        return await this.bucket.createFile(
            Config.appWriteBucketId,
            ID.unique(),
            file


        )
        
    } catch (error) {
        console.log("Error in uploading Photo",error);
        
    }
}

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            Config.appWriteBucketId,
            fileId
        )
        return true
        
    } catch (error) {
        console.log("Error in file Upload ",error)
        return false
        
    }
}

 filePreview(fileId){
    try {
      return   this.bucket.getFilePreview(
        Config.appWriteBucketId,
        fileId

        )
        
    } catch (error) {
        console.log("Error in previewing file",error)
    }
}
}

const service = new Service();

export default service;


