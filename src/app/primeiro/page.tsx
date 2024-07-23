import Link from 'next/link';

export default function Primeiro() {

  function anoAtual(){
    return new Date().getFullYear();
  }

  function gerarLista(){
    return(
      <ul className="pl-6 list-disc">
        <li>Romulo</li>
        <li>Guilherme</li>
        <li>Rosa</li>
      </ul>
    )
  }

  return (
      <div>
        <h1>Primeiro</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/temp">Temp</Link>
          <div className="flex flex-col">
            <span>{1+1}</span>
            <span>{Math.random()}</span>
            <span>{anoAtual()}</span>
          </div>
          <div>
            {gerarLista()}
          </div>

        </nav>
      </div>
  );
}
