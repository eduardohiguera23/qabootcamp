import dotenv from 'dotenv'
dotenv.config()
export const URLS ={
    LOGIN_URL:'https://todoist.com/users/showlogin',
    //HOME_URL:'https://todoist.com/app/today'
}
export const CREDENTIALS ={
    VALID_USER:{
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        EMAIL: 'test@test.com',
        PASSWORD: 'test12345'
    },
    INVALID_EMAIL:{
        EMAIL: 'TEST'
    }  
}
export const MESSAGES ={
    ERROR:{
        LOGIN:{
            BLANK_PASSWORD:'Blank password.',
            WRONG_CREDENTIALS:'Wrong email or password.',
            INVALID_EMAIL:'Invalid email address.'
        }
    }
}
export const TASK ={
    TODAY_TASK:'this one is for 1',
    TOMORROW_TASK:'this one is for tomorrow'
}