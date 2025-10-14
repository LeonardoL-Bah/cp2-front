// Ex6 — Layout com Grid

// Crie um layout com cabeçalho, conteúdo principal e rodapé usando `grid`:


// - O Layout deve ter 20rem de altura total.
// - Cabeçalho ocupa 100% largura, 80px altura.
// - Conteúdo central ocupa o restante da tela.
// - Rodapé fixo embaixo (80px).

export default function Ex6() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex6 - Layout com Grid</h1>
      {<div className="grid grid-cols-1 max-h-[20rem]">
        <div className="grid bg-amber-400 max-w-[full] max-h-[80px] justify-center">Cabeçalho</div>
        <div className="grid bg-red-600 max-w-[full] max-h-[screen] justify-center">Conteúdo Central</div>
        <div className="grid bg-green-600 max-w-[full] max-h-[80px] justify-center">Conteúdo Central</div>
        </div>}
    </div>
  );
}
