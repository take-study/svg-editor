import { SvgEditor } from "../@types";
import { CommonEditor } from "./editor";

export function createSvgEditor(id: string): SvgEditor {
  return new CommonEditor(id);
}
