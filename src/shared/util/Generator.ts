import randomInt from "./randomInt";

export interface GeneratorOptions {
  includesNumbers?: boolean;
  includesWords?: boolean;
  includesSpecials?: boolean;
  upperCase?: boolean;
  specialsList?: string[];
}

export default class Generator {
  private token: string;
  private group: string;
  private length: number;
  
  includesNumbers: boolean;
  includesWords: boolean;
  upperCase: boolean;
  includesSpecials: boolean;

  private words = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);
  private numbers = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
  private specials = new Set(['!', '@', '#', '$', '%', '^', '&', '*']);
  
  constructor(group: string, length: number, { includesNumbers = true, includesWords = true, upperCase = false, includesSpecials = false, specialsList }: GeneratorOptions = {}) {
    this.group = group;
    this.length = length;
    this.includesNumbers = includesNumbers;
    this.includesWords = includesWords;
    this.upperCase = upperCase;
    this.includesSpecials = includesSpecials;
    if (specialsList) { this.specials = new Set(specialsList) }
    this.token = this.generate();
  }
  
  get token() { return this.token }

  generate(): string {
    let result = "";
    while (result.length < this.length) {
      result += this.includesWords ? this.getRandomWord() : "";
      if (result.length >= this.length) break;
      result += this.includesNumbers ? this.getRandomNumber() : "";
      if (result.length >= this.length) break;
      result += this.includesSpecials ? this.getRandomSpecial() : "";
    }
    return this.shuffle(result);
  }
  regenerate() { this.token = this.generate() }
  private getRandomWord(): string {
    const wordsArray = Array.from(this.words);
    const randomIndex = randomInt(0, wordsArray.length - 1);
    const word = wordsArray[randomIndex];
    return this.upperCase ? word.toUpperCase() : word;
  }
  private getRandomNumber(): string {
    const numbersArray = Array.from(this.numbers);
    const randomIndex = randomInt(0, numbersArray.length - 1);
    return numbersArray[randomIndex];
  }
  private getRandomSpecial(): string {
    const specialsArray = Array.from(this.specials);
    const randomIndex = randomInt(0, specialsArray.length - 1);
    return specialsArray[randomIndex];
  }
  private shuffle(str: string): string {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const j = randomInt(0, i);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }
}
