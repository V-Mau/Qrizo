import { useState } from "react";
import QrPreview from "../QrPreview/QrPreview";
import ShapeColorSelector from "../ShapeColorSelector/ShapeColorSelector";
import Select from "../Select/Select";

const EditorContainer = () => {
  const [shape, setShape] = useState("square");
  const [color, setColor] = useState("#0000");

  return (
    <div className="w-full h-full  flex items-center justify-end p-1 ">
      <div className=" border-4 border-purple-50 rounded-2xl bg-gray-200 w-56 h-full p-2 ">
        <div className="  flex flex-col items-center justify-center bg-red-200 rounded-2xl w-full h-48     ">
          <QrPreview shape={shape} color={color} />
        </div>

        <Select
          label="Forma"
          value={shape}
          onChange={setShape}
          options={[
            { label: "Cuadrado", value: "square" },
            { label: "Círculo", value: "circle" },
          ]}
        />

        <Select
          label="Color"
          value={color}
          onChange={setColor}
          options={[
            { label: "Negro", value: "#1d1d1d" },
            { label: "Rojo", value: "#d86e6e" },
            { label: "Azul", value: "#556adf" },
            { label: "Verde", value: "#47a747" },
            { label: "Violeta", value: "#9c55df" },
          ]}
        />

        <div>
          <ShapeColorSelector
            shape={shape}
            setShape={setShape}
            color={color}
            setColor={setColor}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorContainer;
