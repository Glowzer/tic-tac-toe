class TicTacToe {
    constructor() {
      this.matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ];
      this.current_symbol= 'x';
      this.count= 0;
    }

    checkWin(){
      let w_symbol = null;

      for(var i = 0; i < 3; i++){
        if (this.matrix[i][0] != null && this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][0] == this.matrix[i][2]){
          w_symbol = this.matrix[i][0];
          break;
        }
      }

      for(var i = 0; i < 3; i++){
        if (this.matrix[0][i] != null && this.matrix[0][i] == this.matrix[1][i] && this.matrix[0][i] == this.matrix[2][i]){
          w_symbol = this.matrix[0][i];
          break;
        }
      }

      if (this.matrix[0][0] != null && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2]){
        w_symbol = this.matrix[0][0];
      }
      if (this.matrix[2][0] != null && this.matrix[2][0] == this.matrix[1][1] && this.matrix[2][0] == this.matrix[0][2]){
        w_symbol = this.matrix[2][0];
      }

      return w_symbol;
    }

    getCurrentPlayerSymbol() {
      return this.current_symbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if(this.matrix[rowIndex][columnIndex] == null){
        this.matrix[rowIndex][columnIndex] = this.current_symbol;
        this.current_symbol = this.current_symbol == 'x' ? 'o' : 'x';
        this.count++;
      }
    }

    isFinished() {
      return this.isDraw() || this.getWinner() != null;
    }

    getWinner() {
      return this.checkWin();
    }

    noMoreTurns() {
      return this.count == 9;
    }

    isDraw() {
      return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
