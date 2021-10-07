type Card = {
  rank : string;
  type : string;
}

type Player = {
  id : string,
  name : string,
  state : "active" | "folded" | "out";
  cards : Card[],
  chips : number,
  chipsBet : number
}

type Sidepot = {
  quote : number;
  amount : number;
}

export type Gamestate = {
  buyin : number,
  callAmount : number,
  commonCards : Card[],
  dealer : number,
  game : number,
  hand : number,
  me : number,
  minimumRaiseAmount : number
  players : Player[],
  pot : number,
  sb : number,
  sidepots : Sidepot[],
  spinCount : number,
  tournamentId  : string;
};

const Player = {
  /**
   * Returns the current version of the deployed bot.
   * Useful to get debug information.
   * @name getVersion
   * @public
   */
  getVersion () : string {
    return "Default ts-player";
  },

  /**
   * Returns the amount for the next bet.
   * Return 0 to fold.
   * @name bet
   * @public
   */
  bet (gamestate : Gamestate) : number {
    console.log("Playing game", gamestate.tournamentId);

    /**
     * Fold every single hand
     */
    return 0;
  }
};

export { Player };