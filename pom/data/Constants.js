import dotenv from 'dotenv'
dotenv.config()
export const URLS ={
    LOGIN_URL:'https://todoist.com/users/showlogin'
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
    TODAY_TASK:'test',
    TOMORROW_TASK:'tomorrow add new task',
    TOMORROW_TASK_VALIDATION:'add new task',
    SIZE:'10'
}
export const NEWPROJECT ={
    NAME:'new project test',
    COLOR:'Green'
}
export const WAITS ={
    ONE:1000
}