import Link from 'next/link';

export default function Home() {
  return (
      <div className="border-2 border-[#04ee18]">
        <h1>Home</h1>
        <nav className="flex justify-start gap-4 items-center">
          <Link href="/temp">Temp</Link>
          <Link href="/primeiro">Primeiro</Link>
          <Link href="/flexbox">Flexbox</Link>
        </nav>
      </div>
  );
}
