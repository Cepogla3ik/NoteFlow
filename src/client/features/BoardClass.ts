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
  addEntry(entry: Array<string> | undefined): this {
    if (entry) {
      this.entries.push(entry);
    } else if (this.entries.at(-1).length > 0) {
      const emptyEntry = [];
      for (let i = 1; i <= this.entries.at(-1).length; i++) { emptyEntry.push("") }
      this.entries.push(emptyEntry);
    } else {
      this.entries.push([""]);
    }
    
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