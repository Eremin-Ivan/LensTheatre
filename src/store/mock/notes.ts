import Day from 'react-native-calendars/src/calendar/day';
import {TLensovetaNotes} from '../../types/notesTypes';
import {mockData} from './mock';
import {StoresHolder} from './storeHolder';

export class Notes {
  rootStore: StoresHolder;

  constructor(root: StoresHolder) {
    this.rootStore = root;
    this.lensNotes = mockData;
  }
  lensNotes: TLensovetaNotes[];
  currentLensNotes!: TLensovetaNotes;

  isConnected = true;

  newLensovetaNotes: TLensovetaNotes = {
    id: '',
    nameShow: '',
    time: '',
    role: '',
    disctiption: '',
    data: Day,
  };

  setCurrentLensNotes = (data: TLensovetaNotes) => {
    this.currentLensNotes = data;
  };

  updateLensNotes = () => {
    let i;

    this.lensNotes.forEach((l, index) => {
      if (l.role === this.currentLensNotes.role) {
        i = index;
        return;
      }
    });
    if (i !== undefined) {
      this.lensNotes[i] = this.currentLensNotes;
    }
  };
  setLensovetaNameShow = (data: string) => {
    this.currentLensNotes.nameShow = data;
  };
}
