import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const ViewsCounter = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const res = (
          (await (
            await fetch("https://tarek-ali.onrender.com/api/v1/views")
          ).json()) as {
            views: number;
          }
        ).views;

        setViews(res);
        setIsError(false);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <span>جاري التحميل...</span>;
  return !isError ? (
    <div className="flex gap-2 font-semibold flex-wrap">
      <FaEye />
      عدد المشاهدات:
      <span>{views}</span>
    </div>
  ) : null;
};
export default ViewsCounter;
