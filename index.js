class PrintPhrase {
  #phrase;
  #indeces;
  #printTimeout = 100;
  #punctuationsAndSymbols = [32, 64];
  #upperCaseLettersCharCode = [65, 90];
  #lowerCaseLettersCharCode = [97, 122];

  constructor() {}

  async print(phrase) {
    this.#phrase = phrase;
    this.makeIndecesASCII();
    await this.printPhrase();
  }

  async printPhrase() {
    let printedPhrase = "";
    for (let i = 0; i < this.#indeces.length; i++) {
      const index = this.#indeces[i];
      const nextLetter = await this.printLowercaseLetters(printedPhrase, index);
      printedPhrase += nextLetter;
    }
  }

  checkIfNumberFallsIntoRange(number, range) {
    return number >= range[0] && number <= range[1];
  }

  choseIndexSet(index) {
    const ranges = [
      this.#lowerCaseLettersCharCode,
      this.#upperCaseLettersCharCode,
      this.#punctuationsAndSymbols,
    ];

    return ranges.find((range) =>
      this.checkIfNumberFallsIntoRange(index, range)
    );
  }

  async printLowercaseLetters(phrase, index) {
    const range = this.choseIndexSet(index);

    for (let i = range[0]; i <= range[1]; i++) {
      const output = String.fromCharCode(i);
      console.log(phrase + output);
      if (i === index) {
        return output;
      }

      await this.sleep(this.#printTimeout);
    }
  }

  async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  makeIndecesASCII() {
    this.#indeces = [];
    for (let i = 0; i < this.#phrase.length; i++) {
      this.#indeces.push(this.#phrase.charCodeAt(i));
    }
  }

  setPrintTimeout(miliseconds) {
    this.#printTimeout = miliseconds;
  }
}

const printPhrase = new PrintPhrase();
printPhrase.setPrintTimeout(26);

async function process() {
  await printPhrase.print("Hello, Nick!");
}
process();
