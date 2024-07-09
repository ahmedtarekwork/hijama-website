import type { ComponentProps } from "react";

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
        <img
          loading="lazy"
          height="100%"
          width="100%"
          alt="certificate image"
          {...imgAttr}
          style={{
            width: "100%",
            height: "100%",
            ...imgAttr?.style,
          }}
        />
      </div>
    </li>
  );
};
export default CertificateCard;
