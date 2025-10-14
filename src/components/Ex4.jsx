// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex4 - Card Responsivo</h1>
      {<div className="flex-1  items-center w-90 flex flex-col bg-gray-400 width: 100%; @media (width >= 800px) {width: 100%}">
        <h3>Título</h3>
        <p className="">Matéria de front é massa</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg animation:pulse hover:bg-blue-800 transition-colors">
            Botão
          </button>
        </div>}
    </div>
  );
}