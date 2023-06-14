import styles from "./title.module.scss";

export default function Title({
  title = "",
  description = "",
  marginTop = 70,
}) {
  return (
    <section style={{ marginTop }} className={styles.perfectCompanion}>
      <div className={styles.container}>
        <h3>
          <span>{title}</span>
        </h3>

        {description !== "" && <p>{description}</p>}
      </div>
    </section>
  );
}
