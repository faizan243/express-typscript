import mongoose, { Document, Schema, Model } from "mongoose";

interface TodoList {
  name: string; 
  value: number; 
}

const todoListSchema = new Schema<TodoList>({
  name: { type: String, required: true },
  value: { type: Number, required: true },
});

const todoListModel: Model<TodoList> = mongoose.model('todolist', todoListSchema);

export default todoListModel;
