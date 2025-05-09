import React from "react";

const ShapeColorSelector = ({ shape, setShape, color, setColor }) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Selector de forma */}
      <div>
        <label className="text-sm font-semibold">Forma:</label>
        <select
          value={shape}
          onChange={(e) => setShape(e.target.value)}
          className="w-full p-1 rounded border border-gray-300"
        >
          <option value="square">Cuadrado</option>
          <option value="dots">Puntos</option>
          <option value="rounded">Redondeado</option>
        </select>
      </div>

      {/* Selector de color */}
      <div>
        <label className="text-sm font-semibold">Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10 p-1 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default ShapeColorSelector;
