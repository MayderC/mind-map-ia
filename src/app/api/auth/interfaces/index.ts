import {ISummary} from "@/server-logic/models/Summary";

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

export interface UserResponseWithSummaries extends UserResponse {
    summaries: ISummary[];
}

export interface UserLoginResponse {
    token: string;
    user: UserResponse;
}


export interface UserLoginRequest extends Omit<UserRequest, 'name'> {
    id?: string;
}