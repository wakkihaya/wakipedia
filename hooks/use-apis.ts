import { useState, useEffect } from "react";

import { getMyQiitaPosts, getMyNotePosts } from "../api/api";
import { PostType } from "../types/sns";

const useApis = () => {
  const [qiitaPosts, setQiitaPosts] = useState<PostType[]>([]);
  const [notePosts, setNotePosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const processFetchApis = async () => {
      setIsLoading(true);
      //Qiita
      const qiitaResult = await getMyQiitaPosts();
      if (!qiitaResult) return;
      const filteredQiitaPosts: PostType[] = qiitaResult.map((item: any) => {
        return {
          title: item.title,
          url: item.url,
          likesCount: item.likes_count,
          updatedAt: item.updated_at,
        } as PostType;
      });
      setQiitaPosts(filteredQiitaPosts);

      //Note
      const noteResult = await getMyNotePosts();
      if (!noteResult) return;
      const filteredNotePosts: PostType[] = noteResult.map((item: any) => {
        return {
          title: item.name,
          ogImage: item.eyecatch,
          likesCount: item.likeCount,
          url: item.noteRrl,
          updatedAt: item.publishAt,
        } as PostType;
      });
      setNotePosts(filteredNotePosts);
      setIsLoading(false);
    };
    processFetchApis();
  }, []);
  return { qiitaPosts, notePosts, isLoading };
};

export default useApis;
