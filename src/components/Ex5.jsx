// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      {<aside className="w-56 bg-blue-800 text-white h-screen p-5 flex-col">
        <nav className="flex flex-col gap-3">
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
        </nav>
        </aside>}
    </div>
  );
}