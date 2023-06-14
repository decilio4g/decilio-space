import { useEffect, useState, useCallback } from "react";
import Head from "next/head";

import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { FaWhatsapp } from "react-icons/fa";

import Card from "../../../components/Card";
import Title from "../../../components/Title";
import Button from "../../../components/Button";

import Api from "../../../services/api";

import { smallFathersPugs } from "../../../services/api.infos";

import styles from "./infos.module.scss";

export default function Infos({ result, item, type }) {
  const [activeImage, setActiveImage] = useState(smallFathersPugs.image[0]);
  const [listImages, setListImages] = useState([]);

  const ListFilhotes = [];

  useEffect(() => {
    setListImages(smallFathersPugs.image);
  }, [result]);

  const handleNextImage = useCallback((id) => {
    const selectedImage = smallFathersPugs.image.filter((image) => {
      return image.id == id;
    });

    setActiveImage(selectedImage[0]);
  }, []);

  // function getType(type) {
  //   if (type == "medio") {
  //     return "Médio";
  //   } else if (type == "grande") {
  //     return "Grande";
  //   } else if (type == "pequeno") {
  //     return "Pequeno";
  //   }
  // }

  return (
    <>
      <Head>
        <title>Informações médio porte</title>
      </Head>

      <div className={styles.wapper}>
        <div className={styles.content}>
          <div>
            <div>
              <img
                id={styles.imgprincipal}
                src={activeImage?.url}
                alt=""
                width="455"
                height="299"
              />
            </div>

            <div className={styles.wrapperImg}>
              {listImages?.map((image) => {
                return (
                  <img
                    style={
                      image.id == activeImage?.id
                        ? { opacity: "0.5" }
                        : { opacity: "1" }
                    }
                    id={image.id}
                    onClick={() => handleNextImage(image.id)}
                    src={image.url}
                    alt=""
                    width="130"
                    height="89"
                  />
                );
              })}
            </div>
          </div>

          <div className={styles.text}>
            <h2>{smallFathersPugs.name} - {smallFathersPugs.raça}</h2>
            {/* <p>{result.description}</p> */}

            <ul className={styles.list}>
              <li>
                <span className={styles.border}>1</span>{" "}
                <span className={styles.green1}> Idade</span>
                <span>4 anos</span>
              </li>
              <li>
                <span className={styles.border}>2</span>{" "}
                <span className={styles.green1}> Tamanho</span>
                <span>pequeno</span>
              </li>

              <li>
                <span className={styles.border}>4</span>{" "}
                <span className={styles.green1}> Gênero</span>
                <span>Fêmea</span>
              </li>
              <li>
                <span className={styles.border}>5</span>{" "}
                <span className={styles.green1}> Vermifugado</span>
                <span>Sim</span>
              </li>
              <li>
                <span className={styles.border}>6</span>
                <span className={styles.green1}>Convive com gatos</span>{" "}
                <span> Sim</span>
              </li>
              <li>
                <span className={styles.border}>7</span>
                <span className={styles.green1}>
                  Convive dentro de casa
                </span>{" "}
                <span>Sim</span>
              </li>
              <li>
                <span className={styles.border}>8</span>
                <span className={styles.green1}>Amigo de criança</span>{" "}
                <span>Sim</span>
              </li>
            </ul>

            <div className={styles.buttonWrapper}>
              <a
                target="_blank"
                // href={`https://wa.me/+5519974069559?text=Olá, gostaria saber mais sobre o cachorrinho ${result.name} da raça ${result.raca}`}
              >
                <Button>
                  Entrar em contato
                  <FaWhatsapp style={{ marginLeft: 8 }} size={24} />
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* 
        {ListFilhotes.length ? (
          <Title marginTop={30} title={`Porte ${getType(type)}`} />
        ) : null} */}
        <Card ListItem={ListFilhotes} type={type} />
      </div>
    </>
  );
}
