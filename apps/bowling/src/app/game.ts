// game.ts
export class Game {
    /*
    private rolls: number[] = [];
    private currentRoll = 0;
    roll(pins: number) {
      this.rolls[this.currentRoll++] = pins;
    }
  
    get score() {
      let score = 0;
      let frameIndex = 0;
      for (let frame = 0; frame < 10; frame++) {
        if (this.isStrike(frameIndex)) {
          score += 10 + this.strikeBouns(frameIndex);
          frameIndex++;
          continue;
        }
        if (this.isSpare(frameIndex)) {
          score += 10 + this.spareBouns(frameIndex);
        } else {
          score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        }
        frameIndex += 2;
      }
      return score;
    }
  
    private isStrike(frameIndex: number) {
      return this.rolls[frameIndex] === 10;
    }
  
    private isSpare(frameIndex: number) {
      return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }
  
    private strikeBouns(frameIndex: number) {
      return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }
  
    private spareBouns(frameIndex: number) {
      return this.rolls[frameIndex + 2];
    }
    */
    private diff_books = 0;
    private total_books = 0;

    buy(diff: number,total:number) {
      this.diff_books = diff;
      this.total_books = total;
    }

    get price() {
      let price = 0;
      let same = 0;
      same = this.total_books - this.diff_books;
      price = this.caculatePrice(this.diff_books,same);
      return price;
    }

    private caculatePrice(differ:number,same: number) {
      let discount = 0;
      if(differ <= 3){
        discount = 1 - (differ-1)*0.05;
      }
      else{
        discount = 1 - differ*0.05;
      }
      return 100*(same + differ*discount);
    }
  }
  