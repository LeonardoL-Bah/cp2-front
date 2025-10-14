// Ex1 — Botão estilizado com Tailwind

// Crie um botão centralizado com a cor azul, texto branco, padding, bordas arredondadas e efeito `hover` para escurecer a cor.

export default function Ex1() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex1 - Botão Estilizado</h1>
      {
        <div className="flex justify-center gap-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg animation:pulse hover:bg-blue-800 transition-colors">
            Botão
          </button>
        </div>
        }
    </div>
  );
}