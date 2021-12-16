import { useState, useEffect } from "react";

import { getMyQiitaPosts, getMyNotePosts } from "../api/api";
import { QiitaType, NoteType } from "../types/sns";

const useApis = () => {
  const [qiitaPosts, setQiitaPosts] = useState<QiitaType[]>([]);
  const [notePosts, setNotePosts] = useState<NoteType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const processFetchApis = async () => {
      setIsLoading(true);
      //Qiita
      const qiitaResult = await getMyQiitaPosts();
      if (!qiitaResult) return;
      const filteredQiitaPosts: QiitaType[] = qiitaResult.map((item: any) => {
        return {
          title: item.title,
          url: item.url,
          likesCount: item.likes_count,
          updatedAt: item.updated_at,
        } as QiitaType;
      });
      setQiitaPosts(filteredQiitaPosts);

      //Note
      const noteResult = await getMyNotePosts();
      if (!noteResult) return;
      const filteredNotePosts: NoteType[] = noteResult.map((item: any) => {
        return {
          title: item.name,
          ogImage: item.eyecatch,
          likesCount: item.likeCount,
          url: item.noteRrl,
          updatedAt: item.publishAt,
        } as NoteType;
      });
      setNotePosts(filteredNotePosts);
      setIsLoading(false);
    };
    processFetchApis();
  }, []);
  return { qiitaPosts, notePosts, isLoading };
};

export default useApis;
