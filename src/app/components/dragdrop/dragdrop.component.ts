import { Component, Input, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Board } from "src/app/models/board.model";
import { Column } from "src/app/models/column.model";

@Component({
  selector: "app-dragdrop",
  templateUrl: "./dragdrop.component.html",
  styleUrls: ["./dragdrop.component.scss"],
})
export class DragdropComponent implements OnInit {
  @Input() public imageUrl = "assets/bgpoly.png";
  @Input() public title = "Drag & Drop";

  constructor() {}
  board: Board = new Board("Test Board", [
    new Column("Drag", [
      "Some random idea",
      "This is another random idea",
      "build an awesome application",
    ]),
    new Column("Drop", [
      "Lorem ipsum",
      "Find a girlfriend",
      "goals & aspirations",
    ]),
    new Column("Stuff", [
      "Get to work",
      "Pick up groceries",
      "Go home",
      "Automate the world",
    ]),
    // new Column("Done", [
    //   "Get up",
    //   "Brush teeth",
    //   "Take a shower",
    //   "Check e-mail",
    //   "Walk dog",
    // ]),
  ]);

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
