import todoListModel from "../../models/todo";
import { Request, Response } from "express";


type Item = {
    name: String,
    value: Number

}
class TodoController {
    static createNewItem = async (req: Request, res: Response) :Promise <void>=> {
        try {
            const { name, value } = req.body
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
                data: {
                    item: newItem
                },
                status: "success"
            })

        } catch (error) {
            console.log(error);
        }

    }

    static getAllItems = async (req: Request, res: Response) :Promise <void>=> {
        try {
            const items = await todoListModel.find();
            if(!items){
                res.status(404).send({
                    message: "No Items Found",
                    status: "error"
                });
                return;
            }
            res.status(200).send({
                message: "All Items",
                data: {
                    items
                },
                status: "success"
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default TodoController