const ProgressDisplay = ({ progress }) => {
  return (
    <div
      className="w-full h-4 rounded-full overflow-hidden mt-2 outline outline-red-500"
      style={{ backgroundColor: "var(--color-progress-bg)" }}
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${progress}%`,
          backgroundColor: "var(--color-progress-fill)",
        }}
      />
      Progress
    </div>
  );
};
export default ProgressDisplay;
