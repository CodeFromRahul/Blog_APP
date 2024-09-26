import { Client, Account, ID } from "appwrite";
import {Config} from '../config/config.js'


export class authService{
    client = new Client();
    account;


    constructor(){
        this.client
        .setEndpoint(Config.appWriteUrl)
        .setProject(Config.appWriteProjectId)

        this.account= new Account(this.client)
    }

    async createAccount({name,password,email}){
        try {
            const userAccount =  await this.account.create(ID.unique(),name,email,password);

           if (userAccount) {
            // call another method 
            this.login({email,password})

           }
           else{
            return userAccount
           }
        } catch (error) {
            console.log("Error in Creating Account",error.message);
            throw error
        }

       
    }

   
 async login({email,password}){

    try {

     return   await this.account.createEmailPasswordSession(email,password)
        
    } catch (error) {
        throw error
        
    }
 }

 async getCurrentUser(){
         try {
            await   this.account.get();
         } catch (error) {
            throw error
         }

         return null
 }

 async logout(){
    try {
        await this.account.deleteSessions('current');
    } catch (error) {
        throw error
        
    }
 }
  
}

const authService=new authService();

export default authService;