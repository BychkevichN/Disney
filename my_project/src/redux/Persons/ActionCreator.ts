import { createAsyncThunk } from '@reduxjs/toolkit';
import getAllPersons from '../../component/api/getAllPersons';
import getPerson from '../../component/api/getPerson';
import IGetAllPersonsActionType from './ActionType';

export const getAllPersonsAction = createAsyncThunk(IGetAllPersonsActionType.GetAll, () => {
  return getAllPersons();
});

export const getPersonAction = createAsyncThunk(IGetAllPersonsActionType.GetPerson, (id: number) =>{
  return getPerson(id);
});