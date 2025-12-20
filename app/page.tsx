export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Hello World!
        </h1>

        <p className="text-gray-600">
          Next.js App Router + Tailwind CSS
        </p>

        <button className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition">
          Get Started
        </button>
      </div>
    </main>
  );
}
