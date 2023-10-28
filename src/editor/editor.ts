import { fabric } from "fabric";
import { SvgEditor } from "../@types";

export class CommonEditor implements SvgEditor {
  private canvas: fabric.Canvas;
  constructor(id: string) {
    this.canvas = new fabric.Canvas(id);
  }
  getCanvas(): fabric.Canvas {
    return this.canvas;
  }
  draw(): void {
    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      height: 20,
      width: 20,
      fill: "red",
    });
    this.canvas.add(rect);
  }
}
