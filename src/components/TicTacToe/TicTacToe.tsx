import { useState } from 'react';
import type { PlayerType, BoardState } from './types';
import Board from './Board';

interface WinningInfo {
  winner: PlayerType;
}

const WINNING_COMBINATION: ReadonlyArray<[number, number, number]> = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const INITIAL_STATE = Array(9).fill(null);

export default function TicTacToe() {
  const [board, setBoard] = useState<BoardState>(INITIAL_STATE);
  const [isXTurn, setIsXTurn] = useState<boolean>(true);

  const checkWinner = (board: BoardState): WinningInfo | null => {
    for (const [a, b, c] of WINNING_COMBINATION) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return { winner: board[a] as PlayerType };
      }
    }
    return null;
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  const handleCellClick = (cellIndex: number) => {
    if (board[cellIndex] || winner) return;
    const newBoard = [...board];
    newBoard[cellIndex] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn((prev) => !prev);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div>
      <h1>
        {winner
          ? `Winner: ${winner}`
          : isDraw
            ? "It's a draw"
            : `Next player is: ${isXTurn ? 'X' : 'O'}`}
      </h1>
      <Board board={board} onCellClick={handleCellClick} />
      <button type="button" onClick={resetGame}>
        Reset game
      </button>
    </div>
  );
}
