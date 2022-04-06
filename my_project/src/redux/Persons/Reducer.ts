import { IGetAllPersonsState, IGetPersonState } from './Type';
import { createReducer } from '@reduxjs/toolkit';
import { getAllPersonsAction, getPersonAction } from './ActionCreator';


export const initialState: IGetAllPersonsState = {
  persons: undefined,
}

export const newInitialState: IGetPersonState = {
  person: undefined,
}

export const getAllPersonsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllPersonsAction.fulfilled, (state, action) => {
    state.persons = action.payload;
  });

})

export const getPersonReducer = createReducer(newInitialState, (builder) => {
  builder.addCase(getPersonAction.fulfilled, (state, action) => {
    state.person = action.payload;
  })
})