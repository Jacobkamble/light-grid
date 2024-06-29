import React from "react";

interface CellProps {
  handleCellClick: () => void;
  isDisabled: boolean;
  label: string;
  isActive: boolean;
}

const Cell: React.FC<CellProps> = ({
  isDisabled = false,
  label = "",
  isActive = false,
  handleCellClick = () => {},
}) => {
  return (
    <>
      <button
        disabled={isDisabled}
        className={`cell-container ${isActive ? "active" : ""}`}
        onClick={handleCellClick}
      >
        <div> {label}</div>
      </button>
    </>
  );
};

export default Cell;
