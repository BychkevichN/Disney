import axios from 'axios';
import { IGetAllPersons } from './getAllPersons';


const getPerson = async (id: number): Promise<IGetAllPersons> => {
  const response = await axios.get(`https://api.disneyapi.dev/characters/${id}`);

  return response.data;
};

export default getPerson;
