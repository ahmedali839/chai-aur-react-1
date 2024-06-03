  

// this file can also be use when you appwrite as backend use in future and anywhere copy paste you

import conf from "../config/conf";
import {Account, Client, ID} from "appwrite"

export class AuthService {
  client = new Client() 
   account;

   constructor() {
    this.client 
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId);  
    this.account = new Account(this.client) 
      
   }
 
// this is the same even if you want to change your backend environment as i.e to your custom backend service 
   async createAccount({email, password, name}) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name)  
       if (userAccount) {
        // if the user create Account then we handle the situation and navigate to login page etc  
     return this.account.Login({email,password})
       }
       else {
        return userAccount;
       }
    } catch (error) {
        throw error
    }
   }
 
   async Login({email, password}) {
     try {
       return  await this.account.createEmailPasswordSession(
            email, password
        )
     } catch (error) {
        throw error
     }
   } 

   async getCurrentUser() {
    try {
       return await this.account.get();
    } catch (error) {
        throw error
    } 
    return null;
   }

   async Logout() {
    try {
        return await this.account.deleteSessions()
    } catch (error) {
        throw error
    }
   } 

} 

const authService = new AuthService() 

export default authService