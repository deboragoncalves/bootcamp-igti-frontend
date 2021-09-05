import { Injectable } from '@angular/core';
import { Exercise } from './new-exercise/exercise';

@Injectable()
export class DataService {

  private data: Array<Exercise>;

  getData(): any {
    return this.data;
  }

  setData(newData: any): void {
    this.data = newData;
  }
}
