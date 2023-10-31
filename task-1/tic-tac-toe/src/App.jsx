import { Component } from 'react';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    };
  }

  checkWinner() {
    const { board } = this.state;
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({ winner: board[a] });
        return;
      }
    }
  }

  handleClick(index) {
    const { board, currentPlayer, winner } = this.state;
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    this.setState(
      {
        board: newBoard,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
      },
      () => {
        this.checkWinner();
      }
    );
  }

  handleHelp() {
    const { board, currentPlayer, winner } = this.state;
    if (winner) {
      return;
    }

    const emptyCells = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    if (emptyCells.length === 0) {
      return;
    }

    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    this.handleClick(randomIndex);
  }

  handleRestart() {
    this.setState({
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null,
    });
  }

  render() {
    const { board, currentPlayer, winner } = this.state;

    return (
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1 className='text-center text-2xl font-bold'>Tic-Tac-Toe</h1>
          <div className="grid grid-cols-3 gap-2 my-6">
            {board.map((cell, index) => (
              <div key={index} className="h-[100px] w-[100px] text-4xl flex justify-center items-center bg-gray-300 hover:bg-gray-200" onClick={() => this.handleClick(index)}>
                {cell}
              </div>
            ))}
          </div>
          <p>Current Player: {currentPlayer}</p>
          {winner && <p className='bg-red-400 px-2 py-2'>Winner: {winner}</p>}
          <div className='flex gap-x-2 mt-2'>
            <button className='px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400' onClick={() => this.handleRestart()}>New Game</button>
            <button className='px-4 py-2 rounded-md bg-yellow-500 hover:bg-yellow-400' onClick={() => this.handleHelp()}>Help</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
