import dotenv from 'dotenv'
dotenv.config()
export const URLS ={
    LOGIN_URL:'https://todoist.com/users/showlogin'
}
export const CREDENTIALS ={
    VALID_USER:{
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
    
}