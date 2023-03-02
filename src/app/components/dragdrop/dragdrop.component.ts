import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dragdrop",
  templateUrl: "./dragdrop.component.html",
  styleUrls: ["./dragdrop.component.scss"],
})
export class DragdropComponent {
  @Input() public imageUrl = "assets/bgpoly.png";
  @Input() public title = "Insert Title";
}
