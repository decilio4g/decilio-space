import style from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={style.containerFooter}>
      <div className={style.footer}>
        <div className={style.copyRigth}>
          <div>
            <p>© Copyright 2021. Todos os direitos Reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
