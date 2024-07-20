import {UserRequest, UserResponse} from "@/app/api/auth/interfaces";
import {conexion} from "@/utils/db";
import {User} from '@/models'
import {hashSync, compareSync} from "bcrypt"
export const login = async (req: UserRequest) => {

    const user = await User.findOne ({email: req.email})
    if (!user)throw new Error('Auth failed')
    if (!compareSync(req.password, user.password))throw new Error('Auth failed')
    
    const {password, ...rest} = user.toJSON()
    return rest
}

export  const findUser = async (req: UserRequest):Promise<UserResponse | null> => {
    try {
        await conexion()
        const user = await User.findOne({email: req.email})
        if (!user) return null
        const {password: _, ...rest} = user.toJSON()
        return rest
    }catch (error){
        console.log(error)
        throw new Error('Bad Request')
    }
}

export const findUserById = async (id: string):Promise<UserResponse | null> => {
    try {
        await conexion()
        const user = await User.findById(id)
        if (!user) return null
        const {password: _, ...rest} = user.toJSON()
        return rest
    }catch (error){
        console.log(error)
        throw new Error('Bad Request')
    }
}

export const register = async (req: UserRequest)=> {
    try{
        await conexion()
        const hash = hashSync(req.password, 10)
        const user = new User({
            password: hash,
            email: req.email,
            name: req.name
        })
        
        await user.save()
        const { password: _, ...rest } = user.toJSON()
        return rest

    }catch (error){
        console.log(error)
        throw new Error('Bad Request')
    }
}