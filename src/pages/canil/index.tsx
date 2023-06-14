import Head from "next/head";
import { FiClock } from "react-icons/fi";

import Title from "../../components/Title";
import Hours from "../../services/api.hours";

import Carousel from "../../components/Carousel/";
import styles from "./canil.module.scss";

const images = [
  {
    src: "/images/Canil/canil-fora.jpeg",
    alt: "Imagem de um cachorr assim",
    width: 650,
    height: "100%",
  },
  {
    src: "/images/Canil/canil-fora-2.jpeg",
    alt: "Imagem de um cachorr assim",
    width: 650,
    height: "100%",
  },
  {
    src: "/images/Canil/entrada-canil-2.jpeg",
    alt: "Imagem de um cachorr assim",
    width: 650,
    height: "100%",
  },
  {
    src: "/images/Canil/canil-dentro.jpeg",
    alt: "Imagem de um cachorr assim",
    width: 650,
    height: "100%",
  },
];

export default function Canil() {
  return (
    <>
      <Head>
        <title>O Canil</title>
      </Head>
      <article className={styles.title}>
        <Title
          title="Sobre nós"
          description="Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram, anteposuerit litterarum formas
              humanitatis per seacula quarta decima et quinta decima. Eodem modo
              typi, qui nunc nobis videntur parum clari, fiant sollemnes in
              futurum."
        />
      </article>

      <article className={styles.about}>
        <div className={styles.wrapper}>
          <div className={styles.firstContainer}>
            <div className={styles.column}>
              <h3>
                <span>Sobre nosso Canil</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum. Typi non habent claritatem insitam;
                est usus legentis in iis qui facit eorum claritatem.
              </p>
              <h3>
                <span>Nosso horário comercial</span>
              </h3>
              <div className={styles.hours}>
                {Hours.map((hour) => {
                  return (
                    <div key={hour.id}>
                      <p className="day">{hour.day}</p>

                      <span>
                        <FiClock size={16} />
                        <p className="time">
                          {hour.start} - {hour.finish}
                        </p>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.secondContainer}>
            <Carousel images={images} />
            {/* <img src="/images/dog-about-us.jpg" alt="" /> */}
          </div>
        </div>
      </article>
    </>
  );
}
