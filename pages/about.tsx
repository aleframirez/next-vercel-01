import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>

        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>
        <h1 className={"title"}>
          Ir a <Link href="/contact">Contact</Link>
        </h1>

        <p>
          Get started by editing&nbsp;
          <code className={"code"}>pages/about.js</code>
        </p>
    </>
  );
}

AboutPage.getLayout = function getLayout( page ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}