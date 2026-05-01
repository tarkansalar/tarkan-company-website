export default function LoadingScreen() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="font-space font-bold text-xl lg:text-2xl text-white mb-6">
          Analyzing your numbers
        </div>
        <div className="flex items-center justify-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-neon animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-neon animate-bounce"
            style={{ animationDelay: "0.15s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-neon animate-bounce"
            style={{ animationDelay: "0.3s" }}
          />
        </div>
      </div>
    </main>
  );
}
