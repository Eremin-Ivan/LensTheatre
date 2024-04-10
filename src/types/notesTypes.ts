import {DateData} from 'react-native-calendars/src/types';

export declare type TLensovetaNotes = {
  id: string;
  nameShow: string;
  time: string;
  role: string;
  disctiption: [] | string | {};
  data: DateData;
};

export type TFilm = {
  id: number;
  nameShow: string;
  time: string;
  role: string;
  location: string;
  disctiption: [] | string | {};
};

export type TOther = {
  id: number;
  discription: [] | string | {};
};
