"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white">
      <h1 className="text-3xl font-bold">Ocorreu um erro!</h1>
      <p className="mt-4">{error.message}</p>
      <button
        className="mt-6 px-4 py-2 bg-white text-red-900 rounded"
        onClick={() => reset()}
      >
        Tentar novamente
      </button>
    </main>
  );
}
