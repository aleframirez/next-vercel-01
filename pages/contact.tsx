import { Inter } from "@next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <h1 className={'title'}>
        Ir a <Link href="/about">About</Link>
      </h1>

      <p>
        Get started by editing&nbsp;
        <code className={'code'}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
