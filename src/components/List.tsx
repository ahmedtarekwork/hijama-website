import { ReactNode } from "react";
import { nanoid } from "nanoid";

export type ListComponentProps = {
  contentList: ReactNode[];
};

const List = ({ contentList }: ListComponentProps) => {
  return (
    <ul className="space-y-2 list-component">
      {contentList.map((content) => (
        <li key={nanoid()}>{content}</li>
      ))}
    </ul>
  );
};
export default List;
