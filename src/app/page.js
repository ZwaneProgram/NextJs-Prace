import Link from "next/link";

export default function Home() {
  return (
    <div> 
      <center>
      <h1>Welcome</h1>
      <br/>
      <Link href="about">About</Link>|
      <Link href="home">index</Link>|
      <Link href="service">service</Link>
      </center>
    </div>
  );
}

//className="flex items-center justify-center min-h-screen"
//className="text-center"