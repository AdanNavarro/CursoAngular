import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public DeleteCharacter: EventEmitter<number> = new EventEmitter();

  @Input()

  public characterList: Character[] = [{
    name: "",
    power: 0
  }];

  onDeleteCharacter(index: number):void {
    console.log({index});
    this.DeleteCharacter.emit(index);
  }

}
