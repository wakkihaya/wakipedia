import Link from "next/link";
import type { FC } from "react";

const IndexPage: FC = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
);

export default IndexPage;
