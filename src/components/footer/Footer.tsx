// react
import { forwardRef } from "react";

// components
import ContactList from "../ContactList";
import ViewsCounter from "./ViewsCounter";

// hooks
import useServices from "../../hooks/useServices";

// utils
import { nanoid } from "nanoid";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const services = useServices().map(({ cardId, title }) => ({
    cardId,
    title,
  }));

  return (
    <footer
      ref={ref}
      id="app-footer"
      className="transition pt-10 pb-4 dark:bg-blue-950 bg-blue-600 text-white"
    >
      <div className="container">
        <div className="flex justify-between gap-5 max-sm:flex-col">
          <div>
            <h3 className="title-with-line">للتواصل معنا</h3>
            <ContactList />
          </div>

          <div>
            <h3 className="title-with-line">خدماتنا</h3>

            <ul>
              {services.map(({ title, cardId }) => (
                <li key={nanoid()}>
                  <a href={`#${cardId}`}>{title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="title-with-line">منتجاتنا</h3>

            <ul>
              <li>
                <a href="#products">الاعشاب العلاجية</a>
              </li>

              <li>
                <a href="#products">الكريمات العلاجية</a>
              </li>

              <li>
                <a href="#products">منتجات عسل النحل</a>
              </li>

              <li>
                <a href="#products">الزيوت</a>
              </li>
            </ul>
          </div>
        </div>

        <ViewsCounter />

        <div className="flex items-center justify-center mt-10" dir="ltr">
          made by{" "}
          <a
            rel="nofollow"
            className="underline"
            href="https://ahmed-profile.vercel.app"
            target="_blank"
          >
            Ahmed Tarek
          </a>
        </div>
      </div>
    </footer>
  );
});
export default Footer;
