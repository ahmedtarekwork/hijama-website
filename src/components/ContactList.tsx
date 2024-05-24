// icons
import { FaFacebook, FaWhatsapp, FaPhone } from "react-icons/fa6";

const ContactList = () => {
  return (
    <ul className="contact-list">
      <li>
        <a href="https://m.me/tarekAli222" target="_blank">
          <FaFacebook />
          Facebook
        </a>
      </li>

      <li>
        <a href="https://wa.me/201094713802" target="_blank">
          <FaWhatsapp />
          Whatsapp
        </a>
      </li>

      <li>
        <a href="tel:+201094713802" target="_blank">
          <FaPhone />
          <span dir="ltr">+20 1094713802</span>
        </a>
      </li>
    </ul>
  );
};
export default ContactList;
