import axios from 'axios';

export interface IGetAllPersons {
  films: Array<string>;
  shortFilms: Array<string>;
  tvShows: Array<string>;
  videoGames: Array<string>;
  parkAttractions: Array<string>;
  allies: Array<string>;
  enemies: Array<string>;
  _id: number;
  name: string;
  imageUrl: string;
  url: string;
}
const getAllPersons =async (): Promise<IGetAllPersons[]> => {
  const response = await axios.get('https://api.disneyapi.dev/characters');

  return response.data.data;
};

export default getAllPersons;
