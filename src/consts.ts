import { IAsyncData } from "./models";
export const APP_ROUTES = {
    HOME: {
        PATH: "/"
    },
    DEMANDS: {
        PATH: "/my-demand",
        CREATE_PATH:"/new-demand"
    },
    ADS: {
        PATH:"/my-ads",
        CREATE_PATH:"/new-ads"
    },
    KEYWORDS: {
        PATH:"/keywords"
    },
    FAVOURITES: {
        PATH:"/favourites"
    },
    NOTIFICATIONS:{
        PATH:"/notifications"
    },
    REGISTER:{
        PATH:"/register"
    }
   
}

export const INITIAL_ASYNC_DATA: IAsyncData<any> = {
    data: null,
    error: undefined,
    loading: undefined
}

export const BASE_URL = 'https://localhost:44355/api';
