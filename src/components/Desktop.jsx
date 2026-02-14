export default function Desktop({ children }) {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #e8f4fc 0%, #fef6e8 50%, #fff5f5 100%)",
      }}
    >
      {/* decorative SVGs go here */}
      {children}
    </div>
  );
}
