import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";


export type TaskState={
  entities:Task[];
}

const initialState:TaskState = {
  entities:[]
}

type DraftTask = Pick<Task,'title'>;

const createTask = (draftTask:DraftTask):Task=>{
  return {id:nanoid(),...draftTask }
}

const taskSlice = createSlice({
  name:'tasks',
  initialState,
  reducers:{
    addTask:(state,action:PayloadAction<DraftTask>)=>{
      const newTask = createTask(action.payload)
      state.entities.push(newTask);
    },
    removeTask:(state,action:PayloadAction<Task>)=>{
      const index = state.entities.findIndex(task=> task.id === action.payload.id);
      if(index !== -1){
        state.entities.splice(index,1);
      }
    }
  }
})

export const taskReducer = taskSlice.reducer;
export const { addTask,removeTask } = taskSlice.actions;

export default taskSlice;
