import { useState } from "react";

export default function () {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

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

  const checkWinner = (newBoard) => {
    let winner = null;
    winningCombinations.forEach(([a, b, c]) => {
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        winner = newBoard[a];
      }
    });
    return winner;
  };
  

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "0";
    setBoard(newBoard);
    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else {
      setIsXTurn(!isXTurn);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setWinner(null);
  };

  return (
    <>
      <div className="text-white text-xl mb-4">start here</div>
      <div className="text-white text-lg mb-2">
        {winner
          ? `Player ${winner} wins!`
          : board.includes("") 
            ? `Turn: ${isXTurn ? "X" : "0"}`
            : "It's a draw!"}
      </div>
      <div className="grid grid-cols-3 gap-1 w-fit">
        {board.map((cell, index) => (
          <div
            key={index}
            className=" h-16 w-16 flex items-center justify-center text-2xl cursor-pointer"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {(winner || !board.includes("")) && (
        <button
          onClick={resetGame}
          className="mt-4 px-4 py-2 bg-white text-black rounded"
        >
          Restart
        </button>
      )}
      <div className="text-white text-xl mb-4">End here</div>
    </>
  );
}
