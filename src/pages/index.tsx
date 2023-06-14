import Head from "next/head";
import Title from "../components/Title";
import Carousel from "../components/CarouselIndex";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { ListFilhotes, ManualDoFilhote } from "../constants/index";

import Link from "next/link";

import { comments } from "../services/api.comentarios";

import styles from "./home.module.scss";
import Button from "../components/Button";

const images = [
  {
    src: "images/dog-8.png",
    alt: "Imagem de dois cachorros",
    width: "100%",
    height: "90vh",
  },
  {
    src: "/images/dog-5.png",
    alt: "Imagem de um cachorr assim",
    width: "100%",
    height: "90vh",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Canil</title>
      </Head>
      <main className={styles.contentContainer}>
        <Carousel images={images} />
        <section>
          <div className={styles.containerManualFilhote}>
            {ManualDoFilhote.map((item, index) => {
              return (
                <div key={index} className={styles.manualItem}>
                  <span className={styles.roundal} id="kennel" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href="/manual">
                    <div>
                      <Button>Veja mais</Button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>

        <Title title="Van Souza Rott's" />

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.containerDescription}>
              <div className={styles.description}>
                <p>
                  Se você procura a melhor raça do mundo para guarda e o melhor
                  companheiro para a vida, aqui no Canil Von Snell você
                  encontra:
                </p>
              </div>

              <ul>
                <li>Cães com excelente estrutura e temperamento.</li>
                <li>O melhor do padrão alemão.</li>
                <li>
                  Total disponibilidade de atendimento e tempo de resposta
                  Registro.
                </li>
                <li>na CBKC Cão microchipado.</li>
              </ul>
            </div>
            <div>
              <img src="/images/rottweiller.jfif" alt="" />
            </div>
          </div>
        </section>

        <section className={styles.propaganda}>
          <div className={styles.containerPropaganda}>
            <div className={styles.containerImage}>
              <img src="/images/fci.gif" width="150" alt="" />
              <img src="/images/img-logo_topo_CBKC.png" width="150" alt="" />
              <img src="/images/sobraci-selo.png" width="190" alt="" />
            </div>
            <div className={styles.containerUsing}>
              <h4>Usamos e recomendamos </h4>
              <div className={styles.containerRecomended}>
                <img src="/images/propan-2.png" width="190" alt="" />
                <img src="/images/premier-2.jpg" width="190" alt="" />
              </div>

              <p>
                A ração Royal Canin é desenvolvida para oferecer alimentos
                excepcionais de qualidade Premium e Super Premium para cães e
                gatos. A Royal Canin é referência mundial em nutrição animal e
                possui produtos específicos para cada necessidade do seu
                bichinho. Desenvolvida a partir de estudos científicos, a ração
                Royal Canin proporciona uma vida mais longa e saudável para seu
                animal, além de ter um sabor incrível e oferecer vantagens ao
                tutor, como a ração Royal Canin Indoor que reduz o volume e odor
                das fezes. Utilize os filtros de busca da Petlove e encontre a
                ração Royal Canin ideal para seu cão ou gato.
              </p>
            </div>
          </div>
        </section>

        <AliceCarousel autoPlay autoPlayInterval={3000}>
          {comments.map((item) => {
            return (
              <div className={item.name && styles.testimonials}>
                <section data-stellar-background-ratio="0.6">
                  <div
                    id={styles.homeTestimonial}
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="item active">
                        <p>{item.description}</p>
                        <div className={styles.autor}>
                          <span> {item.name}</span>

                          <span> {item.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </AliceCarousel>
        {/* 

        
        <Title
          title="Encontre seu companheiro perfeito"
          description="Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram, anteposuerit litterarum formas
              humanitatis per seacula quarta decima et quinta decima. Eodem modo
              typi, qui nunc nobis videntur parum clari, fiant sollemnes in
              futurum."
        /> */}

        {/* <Card ListItem={ListFilhotes} /> */}
      </main>
    </>
  );
}
