export interface User_SIGN_UP_FAILURE{
    success: boolean,
    error: string
}

export interface User_SIGN_UP_REQUEST{
    email : string,
    password : string
}

export interface User_SIGN_UP_SUCCESS{
    success: boolean,
    data: {
            _id: string,
            email: string,
            password: string,
            __v: 0
    }

}

export interface User_SIGN_IN_REQUEST{
    email : string,
    password : string
}

export interface User_SIGN_IN_SUCCESS{
    success: boolean,
    token: string
}

export interface User_SIGN_IN_FAILURE{
    success: boolean,
    error: string
}