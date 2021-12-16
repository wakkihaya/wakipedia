import Link from "next/link";
import type { FC } from "react";

import Header from "../components/Header";
import useApis from "../hooks/use-apis";

const IndexPage: FC = () => {
  const { qiitaPosts, isLoading } = useApis();
  console.log(qiitaPosts);

  return (
    <div className="container">
      <Header />
    </div>
  );
};

export default IndexPage;
