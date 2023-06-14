import Head from "next/head";

import Title from "../../components/Title";
import Partners from "../../components/Partners";

import styles from "./parceiros.module.scss";

import { ListOfPartners } from "../../services/api.parceiros";

export default function Parceiros() {
  return (
    <>
      <Head>
        <title>Parceiros</title>
      </Head>

      <Title title="Parceiros" />

      <section className={styles.container}>
        {ListOfPartners?.map((item, index) => {
          return (
            <div key={index} className={styles.padding}>
              <Partners
                id={item.id}
                image={item.image}
                name={item.name}
                age={item.age}
                profession={item.profession}
                temp={item.tempActive}
              />
            </div>
          );
        })}
      </section>
    </>
  );
}
