import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";


const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href="/contact">Contact</Link>
      </h1>

      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}


// Para pasar un proyecto de JS a TS visitar el siguiente enlace:
// https://nextjs.org/learn/excel/typescript/create-tsconfig