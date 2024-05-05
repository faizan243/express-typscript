import todoListModel from "../../models/todo";
import { Request, Response } from "express";


type Item = {
    name: String,
    value: Number

}
class TodoController {
    static createNewItem = async (req: Request, res: Response) :Promise <void>=> {
        try {
            const [name, value] = req.body
            if(!name || !value){
               res.status(400).send({
                    message: "All fields are required",
                    status: "error"
                });
                return;
            }

            const payload: Item = {
                name: name,
                value: value
            }
            const newItem = new todoListModel(payload)
            newItem.save();
            res.status(201).send({
                message: "Item Created SuccessFully",
                data: [
                    {
                        item: newItem
                    }
                ],
                status: "success"
            })

        } catch (error) {
            console.log(error);
        }

    }
}

export default TodoController