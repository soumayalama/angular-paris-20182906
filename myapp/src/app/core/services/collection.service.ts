import { Injectable } from '@angular/core';
import { Item } from 'src/app/shared/Interfaces/item';
import { COLLECTION } from '../collection';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  // observable froid contenant tableau d'items
    private _collection: Observable<Item[]>;
   // observable chaud
    private itemsCollection: AngularFirestoreCollection<Item>;

    constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('collection');
    this._collection = this.itemsCollection.valueChanges();
        // this.collection = COLLECTION;
    }
    public get collection(): Observable<Item[]> {
        return this._collection;
    }
    public set collection(col: Observable<Item[]>) {
        this._collection = col;

    }
    /**
   * add item in collection
   */
  add(item: Item): void {
    item.id = this.afs.createId();
    this.itemsCollection.doc(item.id).set(item)
      .catch(error => console.log(error));
  }

  /**
   * update item in collection
   */
  update(item: Item): void {
    this.itemsCollection.doc(item.id).update(item)
      .catch(error => console.log(error));
  }

  /**
   * delete item in collection
   */
  delete(item: Item): void {
    this.itemsCollection.doc(item.id).delete()
      .catch(error => console.log(error));
  }

    // add(arg: Item): void {
        // this._collection.push(arg);
    }

