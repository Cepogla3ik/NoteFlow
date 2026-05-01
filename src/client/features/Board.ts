export default class Board {
  private entries: Set<Array<string>>;
  name: string;
  
  constructor(name: string, entries: Array<Array<string>>) {
    this.name = name;
    this.entries = new Set(entries);
  }
  
  get size() { return this.entries.length }
  addEntry(entry: Array<string>): this {
    this.entries.add(entry);
    return this;
  }
  deleteEntry(entry: Array<string>): this {
    this.entries.delete(entry);
    return this;
  }
  isEntry(entry: Array<string>): boolean {
    return this.entries.has(entry);
  }
}