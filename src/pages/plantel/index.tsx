import Title from "../../components/Title";
import styles from "./plantel.module.scss";

import Link from "next/link";

export default function Plantel() {
  return (
    <>
      <section className={styles.title}>
        <Title
          title="Padreadores e Matrizes"
          description="Claritas est etiam processus dynamicus, qui sequitur mutationem
        consuetudium lectorum. Mirum est notare quam littera gothica, quam
        nunc putamus parum claram, anteposuerit litterarum formas
        humanitatis per seacula quarta decima et quinta decima. Eodem modo
        typi, qui nunc nobis videntur parum clari, fiant sollemnes in
        futurum."
        />
      </section>

      <div
        className={styles.prices}
        style={{ backgroundPosition: "0px 15.12px" }}
      >
        <div className={styles.wrapper}>
          <div className={styles.row}>
            <div className={styles.costs}>
              <div style={{ top: "8.08px", display: "block" }}>
                <h4>Porte pequeno</h4>
                <p>Tamanho até: 40cm</p>
                <p>Peso médio: 10kg</p>
                <p>Para mais informações, clique abaixo!</p>
                <Link href="/plantel/pequeno">
                  <button type="submit" className="btn btn-default btn-green">
                    Ver mais
                  </button>
                </Link>
              </div>
            </div>
            <div id={styles.center} className={styles.costs}>
              <div style={{ top: "8.08px", display: "block" }}>
                <h4>Porte médio</h4>
                <p>Tamanho até: 60cm</p>
                <p>Peso entre: 15kg & 25kg</p>
                <p>Para mais informações, clique abaixo!</p>
                <Link href="/plantel/medio">
                  <button type="submit" className="btn btn-default btn-green">
                    Ver mais
                  </button>
                </Link>
              </div>
            </div>
            <div className={styles.costs}>
              <div style={{ top: "8.08px", display: "block" }}>
                <h4>Porte grande</h4>
                <p>Tamanho até: 70cm</p>
                <p>Peso entre: 25kg & 45kg</p>
                <p>Para mais informações, clique abaixo!</p>
                <Link href="plantel/grande">
                  <button type="submit" className="btn btn-default btn-green">
                    Ver mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
