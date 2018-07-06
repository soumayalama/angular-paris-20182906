import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from '../../shared/enums/state.enum';
import { Item2 } from '../../shared/interfaces/item2';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService {

  constructor() { }
    createDb() {
        const ITEMS: Item2[] = [
        {
            id: 'a1',
            name: 'william',
            reference: '1245',
            state: State.ALIVRER,
            dateLivraison: 'Mon Nov 07 2016 09:44:12 GMT+0530'
        },
        {
            id: 'b1',
            name: 'giraldine',
            reference: '4589',
            state: State.ENCOURS,
            dateLivraison: 'Mon Nov 07 2016 09:44:12 GMT+0530'
        },
        {
            id: 'c1',
            name: 'souma',
            reference: '5623',
            state: State.LIVREE,
            dateLivraison: 'Mon Nov 07 2016 09:44:12 GMT+0530'
        }
    ];
    return {ITEMS};
  }

}
