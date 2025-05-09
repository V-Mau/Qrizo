const QrPreview = ({ shape, color }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* Acá iría el componente del QR */}
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          borderRadius: shape === "circle" ? "50%" : "0",
        }}
      />
    </div>
  );
};
export default QrPreview;
