import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private data: any;

  getData(): any {
    return this.data;
  }

  setData(newData: any): void {
    this.data = newData;
  }
}
