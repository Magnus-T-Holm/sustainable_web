import Aside from "../components/Aside";

const Frontpage = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/companies'} sectionNames={['Adnami', 'Inochi2D']} sectionIds={['adnami', 'inochi']} />
      <article>
        <section id="adnami">
          <h2>Adnami</h2>
          <p></p>
        </section>
        <section id="inochi">
          <h2>Inochi2D</h2>
          <p></p>
        </section>
      </article>
    </main >
  );
};

export default Frontpage;
