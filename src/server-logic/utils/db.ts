// lib/dbConnect.tsx

import _mongoose, { connect } from "mongoose";

declare global {
    var mongoose: {
        promise: ReturnType<typeof connect> | null;
        conn: typeof _mongoose | null;
    };
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );
}

let cached = global.mongoose;   

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function conexion():Promise<typeof _mongoose>{
    if (cached.conn) {
        console.log("Using existing connection");
        return cached.conn;
    }
    

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = connect(MONGODB_URI!, opts).then((mongoose) => {
            console.log("New connection");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log("New connection");
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export {conexion} 
