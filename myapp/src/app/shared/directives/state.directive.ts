import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';
import { format } from 'url';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
    @Input() appState: State;
    @HostBinding('class') nomClass: string; // Atributte to bind

    constructor() { }
    ngOnChanges() {
        console.log(this.appState);
        this.nomClass = this.formatClass(this.appState);
        console.log(this.nomClass);
    }

private removeAccents (etat: State): string {
return etat.normalize ('NFD').replace(/[\u0300-\u036f]/g, '');

}
private formatClass (etat: State): string {
    return `state-${this.removeAccents(etat).toLowerCase().replace(/ /g, '')}`;

}
}
