// icons
import { FaFacebookMessenger, FaWhatsapp, FaPhone } from "react-icons/fa6";

const ContactList = () => {
  return (
    <ul className="contact-list">
      <li>
        <a
          className="underline"
          rel="nofollow"
          href="https://m.me/tarekAli222"
          target="_blank"
        >
          <FaFacebookMessenger />
          Messenger
        </a>
      </li>

      <li>
        <a
          className="underline"
          rel="nofollow"
          href="https://wa.me/201094713802"
          target="_blank"
        >
          <FaWhatsapp />
          Whatsapp
        </a>
      </li>

      <li>
        <a
          className="underline"
          rel="nofollow"
          href="tel:+201094713802"
          target="_blank"
        >
          <FaPhone />
          <span dir="ltr">+20 1094713802</span>
        </a>
      </li>
    </ul>
  );
};
export default ContactList;
