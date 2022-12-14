import type { MaterialItem } from "./material-item";

export enum GameState {
  NotStarted,
  Playing,
  Finished,
}

export class Game {

    public points = 0;
    n_rounds_left = 3;
    items: MaterialItem[];

    public  set quizItems(items : MaterialItem[]) {
        this.items = items;
    }

    state : GameState = GameState.NotStarted;

    public get isNotStarted():boolean {
        return this.state == GameState.NotStarted;
    }

    public get isPlaying():boolean {
        return this.state == GameState.Playing;
    }

    public get isFinished():boolean {
        return this.state == GameState.Finished;
    }

    public getnextPair() : [MaterialItem, MaterialItem, GameState] {
        this.state = GameState.Playing;
        this.nextRound()
        return [this.items.pop(), this.items.pop(), this.state]
    }

    nextRound() {
        if (this.n_rounds_left == 0) {
            this.state = GameState.Finished;
        }
        this.n_rounds_left--;
    }

    public submitAnswer(bigger : MaterialItem, smaller : MaterialItem)  {
        console.log(bigger.lifeCycle10y, smaller.lifeCycle10y);
        if (bigger.lifeCycle10y > smaller.lifeCycle10y) {
            this.points++
        }

    }

    

}
