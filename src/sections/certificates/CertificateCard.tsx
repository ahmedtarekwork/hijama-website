import { ComponentProps } from "react";

type Props = {
  imgHolderAttr?: ComponentProps<"div">;
  imgAttr?: ComponentProps<"img">;
} & ComponentProps<"li">;

const CertificateCard = ({ imgHolderAttr, imgAttr, ...attr }: Props) => {
  let imgHolderClassName = `certificate-img-holder`;
  if (imgHolderAttr?.className)
    imgHolderClassName += ` ${imgHolderAttr?.className}`;

  return (
    <li {...attr}>
      <div {...imgHolderAttr} className={imgHolderClassName}>
        <img alt="certificate image" {...imgAttr} />
      </div>
    </li>
  );
};
export default CertificateCard;
