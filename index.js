// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// function findIndecesASCII(word) {
//   let indeces = [];
//   for (let i = 0; i < word.length; i++) {
//     indeces.push(word.charCodeAt(i));
//   }
//   return indeces;
// }

// async function printLowercaseLetters(phrase, index) {
//   for (let i = 97; i <= 122; i++) {
//     if (index === 32) {
//       return " ";
//     }
//     const output = String.fromCharCode(i);
//     console.log(phrase + output);
//     if (i === index) {
//       return output;
//     }

//     await sleep(100);
//   }
// }

// async function printPhrase(indeces) {
//   let phrase = "";
//   for (let i = 0; i < indeces.length; i++) {
//     const index = indeces[i];
//     const nextLetter = await printLowercaseLetters(phrase, index);
//     phrase += nextLetter;
//   }
// }

// const word = "hello world";
// const indeces = findIndecesASCII(word);
// printPhrase(indeces);

class PrintPhrase {
  #phrase;
  #indeces;
  constructor() {}

  async print(phrase) {
    this.#phrase = phrase.toLowerCase();
    this.makeIndecesASCII();
    await this.printPhrase();
    // console.log(this.#phrase);
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

      await this.sleep(100);
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
}

const printPhrase = new PrintPhrase();
printPhrase.print("hello world");