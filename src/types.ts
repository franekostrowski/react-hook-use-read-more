export type Config = {
  /**
   * @param {number} treshold - percent of text set as excerpt (firstPart)
   * @defaultValue 50
   * @example useReadMore("Hello world foo bar", { treshold: 25 })
   * // returns ["Hello", "world foo bar"]
   */
  treshold?: number;
  /**
   * @param {number} firstPartMaxLength - max length of excerpt (firstPart)
   * @defaultValue -1
   * @example useReadMore("Banana apple pear peach strawberry raspberry", { firstPartMaxLength: 2 })
   * // returns ["Banana apple", "pear peach strawberry raspberry"]
   */
  firstPartMaxLength?: number;
};
