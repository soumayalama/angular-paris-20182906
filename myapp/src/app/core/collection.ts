import { State } from '../shared/enums/state.enum';
import { Item } from '../shared/Interfaces/item';

export const COLLECTION: Item[] = [
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
    },
];
