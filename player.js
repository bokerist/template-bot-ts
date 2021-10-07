"use strict";

exports = module.exports = {
  /**
   * Returns the current version of the deployed bot.
   * Useful to get debug information.
   * @name getVersion
   * @public
   * @return {String}
   */
  getVersion () {
    return "Default js-player";
  },

  /**
   * Returns the amount for the next bet.
   * Return 0 to fold.
   * @name bet
   * @public
   * @param {Object} gamestate ~ Represents the state of the game.
   * @return {Number}
   */
  bet (gamestate) {
    console.log("Playing game", gamestate.tournamentId);

    /**
     * Fold every single hand
     */
    return 0;
  }
};
