import Link from "next/link";

export default function Home() {

  return (

    <main className="min-h-screen h-screen w-full">
      <h1>Home</h1>
      <Link href="/app" >App</Link>
    </main>

  )
}
