import Link from "next/link";

export default function OtraVista() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
          Otra Vista
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Has navegado a otra vista de la aplicación
        </p>
        <Link
          href="/"
          className="flex h-12 items-center justify-center rounded-full bg-black px-8 text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Volver al home
        </Link>
      </main>
    </div>
  );
}
