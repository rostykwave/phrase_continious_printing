class PrintPhrase {
  #phrase;
  #indeces;
  #printTimeout = 100;
  constructor() {}

  async print(phrase) {
    this.#phrase = phrase.toLowerCase();
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

  async printLowercaseLetters(phrase, index) {
    for (let i = 97; i <= 122; i++) {
      if (index === 32) {
        return " ";
      }
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
printPhrase.print("hello world");
