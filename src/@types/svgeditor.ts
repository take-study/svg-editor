export type SvgEditor = {
  /**
   * Get he fabric Canvas withc the editor is using
   * @see fabric.Canvas
   */
  getCanvas(): fabric.Canvas;
  draw(): void;
};
