// Ex2 — Flexbox básico

// Crie um container com `flex` que alinhe três quadrados coloridos (50x50px) lado a lado e centralizados horizontalmente.

export default function Ex2() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex2 - Flexbox Básico</h1>
      {<div className="flex justify-center align-middle gap-6">
        <div className="w-12 h-12 bg-red-600"></div>
        <div className="w-12 h-12 bg-blue-600"></div>
        <div className="w-12 h-12 bg-green-600"></div>
        </div>}
    </div>
  );
}
