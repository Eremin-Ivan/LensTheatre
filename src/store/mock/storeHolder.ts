import {makeAutoObservable} from 'mobx';
import {Notes} from './notes';
import {CrossAppStore} from '../crossAppStore/crossAppStore';

export class StoresHolder {
  public notes: Notes;
  public crossAppStore: CrossAppStore;

  constructor() {
    this.notes = makeAutoObservable(new Notes(this));
    this.crossAppStore = makeAutoObservable(new CrossAppStore(this));
  }
}
export const stores = new StoresHolder();
