import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

import { onSnapshot, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../config/firebaseConfing";

const ViewsCounter = () => {
  const docRef = doc(db, "counter", "7aVapcivO9vqbefQYvMx");

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [views, setViews] = useState(0);

  useEffect(() => {
    updateDoc(docRef, { count: increment(1) });
    onSnapshot(docRef, (data) => {
      const count = data.data();

      if (count) setViews(count.count);
      else setIsError(true);

      if (isLoading) setIsLoading(false);
    });
  }, []);

  return !isError ? (
    <div className="flex gap-2 font-semibold flex-wrap">
      <FaEye />
      عدد المشاهدات:
      <span>{isLoading ? "جاري التحميل..." : views}</span>
    </div>
  ) : null;
};
export default ViewsCounter;
