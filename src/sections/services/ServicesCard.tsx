import { ReactNode } from "react";

type CardImg =
  | {
      type: "img" | "video";
      data: string;
    }
  | {
      type: "placeholder";
      data: ReactNode;
    };

export type ServicesCardComponentProps = {
  cardId: string;
  img: CardImg;
  title: string;
  description: ReactNode;
  type?: "row" | "col";
  callUsBtnHref?: {
    href: string;
    newTab?: boolean;
  };
};

const ServicesCard = ({
  cardId,
  img,
  title,
  description,
  callUsBtnHref = { href: "#contact-us" },
  type = "col",
}: ServicesCardComponentProps) => {
  let cardImg: JSX.Element;

  switch (img.type) {
    case "img": {
      cardImg = (
        <img
          className="w-full h-full object-contain"
          src={img.data}
          alt="service card image"
        />
      );
      break;
    }

    case "video": {
      cardImg = <video src={img.data} loop autoPlay muted />;
      break;
    }

    case "placeholder": {
      cardImg = <strong>{img.data}</strong>;
      break;
    }
  }

  return (
    <div
      id={cardId}
      className={`bg-blue-100 dark:bg-slate-700 p-4 rounded-lg h-full flex flex-${type}${
        type === "row" ? " max-md:flex-col" : ""
      } gap-5 ${type === "row" ? "" : "items-center"}`}
      style={{
        boxShadow: `4px 4px 9px -3px rgb(10 55 157 / 71%)`,
      }}
    >
      <div className="max-h-[400px] overflow-hidden w-full mx-auto flex-1 flex [&>*]:flex-1 items-center justify-center">
        {cardImg}
      </div>

      <div className="space-y-3 flex-1 flex flex-col self-stretch">
        <h3 className="font-bold dark:text-blue-400 text-blue-600 text-2xl max-sm:text-xl">
          {title}
        </h3>
        <div className="text-slate-700 dark:text-white text-xl max-sm:text-base sm:font-medium">
          {description}
        </div>

        <div className="flex-1 flex items-end pt-10">
          <a
            href={callUsBtnHref.href}
            {...(callUsBtnHref.newTab
              ? { target: "_blank", rel: "nofollow" }
              : {})}
            className="text-center select-none mx-auto w-fit bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            اتصل بنا الان
          </a>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard;
