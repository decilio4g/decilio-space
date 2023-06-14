import Button from "../Button";
import Link from "next/link";
import styles from "./partners.module.scss";

export default function Partners({
  id = 0,
  name,
  age,
  profession,
  image,
  temp,
}) {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="" width="340" height="250" />
      </div>

      <div className={styles.infos}>
        <div className={styles.infosFirst}>
          <SmallForm label="Nome" value={name} />
        </div>
        <div className={styles.infosCenter}>
          <SmallForm label="Idade" value={age} />
        </div>
        <div>
          <SmallForm label="Profissão" value={profession} />
        </div>
        <div className={styles.infosCenter}>
          <SmallForm label="Tempo de atuação " value={temp} />
        </div>

        <Link href={`/parceiros/${id}`}>
          <div className={styles.containerButton}>
            <Button>Conheça mais sobre mim</Button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export function SmallForm({ label, value }) {
  return (
    <div>
      <strong>{label}:</strong>
      <span>{value}</span>
    </div>
  );
}
