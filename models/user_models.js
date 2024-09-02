import mon from  mongoose;
const user_schema = new mon.schema({
    username : String,
    password : string
})

export const ser_collection = new mon ("user",user_schema);