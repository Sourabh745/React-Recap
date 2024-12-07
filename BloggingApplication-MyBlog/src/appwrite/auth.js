import conf from "../conf/conf.js"
import {Client, Account, ID} from "appwrite"

// client and account are repeat everytime so we write it here
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)

            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.getCurrentUser()
        } catch (error) {
            console.log("appwrite service :: getCurrentUser() :: ", error);
        }
    }
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite service :: logout() :: ", error);
        }
    }
}

const authService = new AuthService()

export default authService;