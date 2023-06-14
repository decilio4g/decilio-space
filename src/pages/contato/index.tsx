import Button from "../../components/Button";
import Title from "../../components/Title";
import {
  FaInstagram,
  FaFacebookSquare,
  FaStreetView,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import styles from "./contato.module.scss";

export default function Contato() {
  return (
    <>
      <Title
        title="Contato"
        description="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
      />

      <article className={styles.map}>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1tuq69DmKGs3Xkfbjhwvi395Q3zvsWxtI"
          width="640"
          height="480"
        ></iframe>
      </article>

      <article className={styles.wrapper}>
        <div className={`${styles.container} ${styles.row}`}>
          <div className="col-md-3">
            <ul className={styles.contactInfo}>
              <li className="address">
                <FaStreetView color={"#3b5998"} />
                <span>Rua avelino de oliveira silva, 528</span>
              </li>
              <li className={styles.mail}>
                <FiMail color={"#db4a39 "} />
                <span>VanSouzaRotts@petcare.com</span>
              </li>
              <li className="telephone">
                <FaWhatsapp color={"#a4c639 "} />
                <span>19 9 8587-8586</span>
              </li>
              <li className={styles.button}>
                <Button>
                  Entrar em contato{" "}
                  <FaWhatsapp className={styles.icon} size={20} />
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.container} ${styles.row}`}>
          <div className={styles.border}>
            <h1>Siga-nos nas nossas redes-sociais!</h1>
            <ul className={styles.redes}>
              <li>
                <FaInstagram className={styles.instagram} size={55} />
              </li>

              <li>
                <FaFacebookSquare className={styles.facebook} size={55} />
              </li>

              <li>
                <SiTiktok className={styles.tiktok} size={55} />
              </li>
            </ul>

            <h4>Fique por dentro das novidades!</h4>
          </div>
        </div>
      </article>
    </>
  );
}
