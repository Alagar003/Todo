import mon from mongoose;
const todo_schema = new mon.Scema({
    title:String,
    Description:string,
    done:Boolean,
    username : String
})

export const todo_collection = new mon("todo",todo_schema)