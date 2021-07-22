import dotenv from 'dotenv'
dotenv.config()
export const URLS ={
    LOGIN_URL:'https://todoist.com/users/showlogin',
    HOME_URL:'https://todoist.com/app/today'
}
export const CREDENTIALS ={
    VALID_USER:{
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        EMAIL: 'test@test.com',
        PASSWORD: 'test12345'
    }  
}
export const MESSAGES ={
    ERROR:{
        LOGIN:{
            BLANK_PASSWORD:'Blank password.',
            WRONG_CREDENTIALS:'Wrong email or password.'
        }
    }
}