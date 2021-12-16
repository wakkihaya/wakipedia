import { useState, useEffect } from "react";

import { getMyQiitaPosts } from "../api/api";
import { QiitaType } from "../types/sns";

const useApis = () => {
  const [qiitaPosts, setQiitaPosts] = useState<QiitaType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const processFetchApis = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    processFetchApis();
  }, []);
  return { qiitaPosts, isLoading };
};

export default useApis;
