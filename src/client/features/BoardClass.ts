export default class BoardClass {
  private entries: Array<Array<string>>;
  name: string;
   
  constructor(name: string, entries: Array<Array<string>>) {
    this.name = name;
    this.entries = entries;
  }
  
  get entriesList(): Array<Array<string>> {
    return this.entries;
  }
  size(index: number | undefined = undefined): number {
    if (index !== undefined) {
      return this.entries[index].length;
    }

    return this.entries.length;
  }
  addEntry(entry: Array<string>): this {
    this.entries.push(entry);
    return this;
  }
  deleteEntry(entry: Array<string>): this {
    this.entries = this.entries.filter((e) => e !== entry);
    return this;
  }
  isEntry(entry: Array<string>): boolean {
    return this.entries.includes(entry);
  }
}