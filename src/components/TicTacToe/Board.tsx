import type { CellValue } from './types';
interface BoardType {
  board: CellValue[];
  onCellClick: (cellIndex: number) => void;
}
export default function Board({ board, onCellClick }: BoardType) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 50px)',
        gap: 0,
      }}
    >
      {board.map((value, index) => (
        <div
          style={{
            width: '50px',
            height: '50px',
            border: '1px solid #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => onCellClick(index)}
        >
          {value}
        </div>
      ))}
    </div>
  );
}
