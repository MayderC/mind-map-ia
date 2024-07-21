import {UserRequest, UserResponse, UserResponseWithSummaries} from "@/app/api/auth/interfaces";
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