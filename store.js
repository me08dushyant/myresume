import {
  observable,
  decorate,
  computed,
  autorun,
} from 'https://unpkg.com/mobx?module';

class Store {
  constructor(){

    this.src = 'paris-potion';
    this.starter = 0;
//  this.src = ''
  }
}

decorate(Store, {
source: observable
})

export const store = new Store()
