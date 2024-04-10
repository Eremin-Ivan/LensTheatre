import Day from 'react-native-calendars/src/calendar/day';
import {TLensovetaNotes} from '../../types/notesTypes';

export const mockData: TLensovetaNotes[] = [
  {
    data: Day,
    id: Day,
    nameShow: 'Ревизор',
    role: 'Шпекин',
    time: '19:00',
    disctiption: 'повторить текст',
  },
  {
    data: Day,

    id: Day,
    nameShow: 'В этом милом старом доме',
    role: 'Фредерик',
    time: '19:00',
    disctiption: ['поиграть на фа-но', 'проверить текст', 'распеться'],
  },
  {
    data: Day,

    id: Day,
    nameShow: 'Валентин и Валентина',
    role: 'Карандашов',
    time: '19:30',
    disctiption: 'поиграть на гитаре',
  },
  {
    data: Day,

    id: Day,
    nameShow: 'Воскресение',
    role: 'Надзиратель',
    time: '19:00',
    disctiption: '',
  },
];
