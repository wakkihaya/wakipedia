import { useState, useEffect } from "react";

import { getMyQiitaPosts, getMyNotePosts, getMyMediumPosts } from "../api/api";
import { PostType } from "../types/sns";

const useApis = () => {
  const [qiitaPosts, setQiitaPosts] = useState<PostType[]>([]);
  const [notePosts, setNotePosts] = useState<PostType[]>([]);
  const [mediumPosts, setMediumPosts] = useState<PostType[]>([]);
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
          ogImage:
            "https://cdn.qiita.com/assets/qiita-ogp-3b6fcfdd74755a85107071ffc3155898.png",
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
          url: item.noteUrl,
          updatedAt: item.publishAt,
        } as PostType;
      });
      setNotePosts(filteredNotePosts);

      //Medium
      const mediumResult = await getMyMediumPosts();
      if (!mediumResult) return;
      const filteredMediumPosts: PostType[] = mediumResult.map((item: any) => {
        return {
          title: item.title,
          ogImage:
            "https://lever-client-logos.s3.us-west-2.amazonaws.com/762fd4bd-7d50-4ac3-80d3-bad44702bf87-1604363697348.png",
          url: item.link,
          updatedAt: item.created,
        } as PostType;
      });
      setMediumPosts(filteredMediumPosts);

      setIsLoading(false);
    };
    processFetchApis();
  }, []);
  return { qiitaPosts, notePosts, mediumPosts, isLoading };
};

export default useApis;
