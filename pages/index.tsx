import Link from "next/link";
import type { FC } from "react";

import Header from "../components/Header";
import useApis from "../hooks/use-apis";

const IndexPage: FC = () => {
  const { qiitaPosts, notePosts, isLoading } = useApis();

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default IndexPage;
