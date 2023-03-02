import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpasComponent } from "./spas.component";

describe("SpasComponent", () => {
  it("Exists", () => {
    //assert
    expect(SpasComponent).toBeDefined();
  });

  it("Can be built", () => {
    //act
    const component = new SpasComponent();

    //assert
    expect(component instanceof SpasComponent).toBe(true);
  });
});
