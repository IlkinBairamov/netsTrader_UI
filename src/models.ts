export interface IAsyncData<T>{
    error?: string;
    data?: T;
    loading?: boolean;
}

export interface User{
    name:string,
    surName:string,
    userId?: string,
    docId?:string,
    company?:string,
    authPhone:string,
    id:string,
    fcmToken:string[],
    createdDate:Date
}
