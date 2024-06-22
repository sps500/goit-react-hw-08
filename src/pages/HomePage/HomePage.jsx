import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div className={css.Home}>
      <PageTitle>
        <h2 className={css.welcome_text}>Welcome to Home page</h2>
      </PageTitle>
    </div>
  );
}
