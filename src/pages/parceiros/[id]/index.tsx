import Head from "next/head";
import { useRouter } from "next/router";

import { IoPawOutline } from "react-icons/io5";
import { FaWhatsapp, FaBone } from "react-icons/fa";

import styles from "./id.module.scss";
import Button from "../../../components/Button";

import { ListOfPartners } from "../../../services/api.parceiros";
import { useEffect, useState } from "react";

type Partner = {
  id: number;
  name: string;
  age: number;
  profession: string;
  tempActive: string;
  image: string;
};

export default function Profissional() {
  const [partner, setPartner] = useState({
    id: 0,
    name: "",
    age: 0,
    profession: "",
    tempActive: "",
    image: "",
  });

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const filteredPartner = ListOfPartners.filter(
      (partner) => partner.id == Number(id)
    );

    setPartner(filteredPartner[0]);
  }, [id]);

  return (
    <section className={styles.container}>
      <Head>
        <title>Parceiro(a): {partner.name}</title>
      </Head>

      <div>
        <h2>{partner.name}</h2>
      </div>

      <div className={styles.border}>
        <article className={styles.WrapperImage}>
          <img
            src={partner.image}
            alt="Patrocinador"
            title="Patrocinador"
            width="300"
          />
        </article>
        <article className={styles.about}>
          <ul>
            <li>
              <IoPawOutline color={"#b76719"} size={21} />

              <span>Idade:</span>
              {partner.age}
            </li>
            <li>
              <IoPawOutline color={"#b76719"} size={21} />
              <span style={{ marginRight: 0 }} />
              {partner.tempActive}
            </li>
            <li>
              <IoPawOutline color={"#b76719"} size={21} />

              <span>Profissão:</span>
              {partner.profession}
            </li>
          </ul>
          <div className={styles.button}>
            <a
              target="_blank"
              href={`https://wa.me/+5519974069559?text=Olá ${partner.name}, gostaria de uma informação.`}
            >
              <Button>
                Entrar em contato
                <FaWhatsapp style={{ marginLeft: 8 }} size={24} />
              </Button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
