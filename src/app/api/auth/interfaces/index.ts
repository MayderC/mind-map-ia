
export interface UserRequest {
    email: string;
    password: string;
    name: string;
}

export interface UserResponse {
    _id: string;
    username: string;
    email: string;
    createdAt: Date;
    role: string[];
}

export interface UserLoginResponse {
    token: string;
    user: UserResponse;
}