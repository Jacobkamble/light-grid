import React, { useState } from "react";
import Cell from "./Cell";

interface GridProps {
  config: number[][];
}

const Grid: React.FC<GridProps> = ({ config }) => {
  const [selectedCells, setSelectedCells] = useState<number[]>([]);
  const [isDeactivating, setIsDeactivating] = useState<boolean>(false);

  const deactivateSelectedItems = () => {
    setIsDeactivating(true);

    const timer = setInterval(() => {
      setSelectedCells((previousItems: number[]) => {
        const updatedItems = [...previousItems];
        updatedItems.pop();

        if (updatedItems.length === 0) {
          setIsDeactivating(false);
          clearInterval(timer);
        }

        return updatedItems;
      });
    }, 500);
  };

  const handleCellClick = (cellIndex: number) => {
    const isSelected = selectedCells.includes(cellIndex);

    if (isSelected) {
      const updatedSelection = selectedCells.filter(
        (item) => item !== cellIndex
      );
      setSelectedCells(updatedSelection);
    } else {
      const updatedSelection = [...selectedCells, cellIndex];
      setSelectedCells(updatedSelection);

      const totalSelectableCells = config
        .flat()
        .filter((item) => item === 1).length;
      const totalSelectedCells = updatedSelection.length;

      if (totalSelectedCells === totalSelectableCells) {
        deactivateSelectedItems();
      }
    }
  };

  return (
    <>
      <div className="grid-container">
        {config.flat(1).map((cell: number, index: number) => {
          return cell === 1 ? (
            <Cell
              key={index}
              isActive={selectedCells.includes(index)}
              isDisabled={isDeactivating}
              label={`Cell ${index + 1}`}
              handleCellClick={() => handleCellClick(index)}
            />
          ) : (
            <span key={index}></span>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
