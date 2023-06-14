import Link from "next/link";
import Button from "../Button";
import { IoPawOutline } from "react-icons/io5";

import styles from "./card.module.scss";

type ListItemProps = {
  id?: string;
  url?: string;
  name?: string;
  Title?: string;
  type?: string;
  pedigree?: string;
  raça?: string;
  image: string;
  objectPosition?: string;
};

export default function Card({
  ListItem,
  Plantel = false,
  type = "",
  filhotes = false,
  more = true,
}) {
  return (
    <div className={styles.container}>
      <section className={styles.wrapperDogs}>
        {ListItem.map((item: ListItemProps, index: number) => {
          if (Plantel) {
            return (
              <div key={index} className="col-md-4">
                <img
                  width="350px"
                  height="240px"
                  style={{
                    objectFit: "cover",
                    objectPosition: item.objectPosition,
                  }}
                  src={String(item.image)}
                  alt={item.Title}
                />
                <div className={styles.titlePlantel}>
                  <h5>
                    <IoPawOutline color={"#b76719"} />
                    <span> {item.name}</span>
                    <IoPawOutline color={"#b76719"} />
                  </h5>

                  <ul>
                    <li>
                      <strong>Tipo: </strong>
                      {item.type}
                    </li>
                    <li>
                      <strong>Pedigree:</strong>
                      {item.pedigree}
                    </li>
                    <li>
                      <strong>Raça:</strong>
                      {item.raça}
                    </li>
                  </ul>

                  {more ? (
                    <Link href={`/infos/${type}?id=${item.id}`}>
                      <div className={styles.button}>
                        <Button>Saiba mais</Button>
                      </div>
                    </Link>
                  ) : (
                    // <Link href={`/infos/${type}?id=${item.id}`}>
                    <div className={styles.button}>
                      <Button>Entre em contato</Button>
                    </div>
                    // </Link>
                  )}
                </div>
              </div>
            );
          } else {
            return (
              <Link key={index} href={`/infos/${type}?id=${item.id}`}>
                <div className={styles.subCard}>
                  <img
                    style={{ objectFit: "cover" }}
                    src={String(item.image)}
                    alt={item.Title}
                    width="350px"
                    height="200xp"
                  />
                  <div className={styles.title}>
                    <h5>
                      <IoPawOutline size={20} color={"#b76719"} />
                      <span> {item.name}</span>
                      <IoPawOutline size={20} color={"#b76719"} />
                    </h5>
                  </div>
                </div>
              </Link>
            );
          }
        })}
      </section>
      {filhotes ? (
        <Link href={`/plantel/${type}/filhotes`}>
          <div className={styles.knowMore}>
            <Button>Veja os filhotes</Button>
          </div>
        </Link>
      ) : null}
    </div>
  );
}
