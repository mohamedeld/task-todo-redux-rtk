import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../api/data.json";
import { nanoid } from "nanoid";

type userState = {
  entities:User[]
}

const initialState:userState = {
  entities: []
}
type userDraft = RequireOnly<User,'realName'| 'alterEgo'>;
const createUser = (draftUser:userDraft)=>{
  return {
    id:nanoid(),
    tasks:[],
    ...draftUser
  }
}
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    addUser:(state,action:PayloadAction<User>)=>{
      const newUser = createUser(action.payload);
      state.entities.unshift(newUser);
    },
    removeUser:(state,action:PayloadAction<User['id']>)=>{
      const index = state.entities.findIndex(entity=> entity.id === action.payload);
      if(index !== -1){
        state.entities.splice(index,1);
      }
    }
  }
})
export default userSlice;
export const userReducer = userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;
