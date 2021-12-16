import Link from "next/link";
import type { FC } from "react";

import { Header, PostList } from "../components";

import useApis from "../hooks/use-apis";

const IndexPage: FC = () => {
  const { qiitaPosts, notePosts, isLoading } = useApis();

  return (
    <div className="container">
      <Header />
      <PostList posts={notePosts} someType={"note"} />
    </div>
  );
};

export default IndexPage;
