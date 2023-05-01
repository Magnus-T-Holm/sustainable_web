import Aside from "../components/Aside";

const Accessibility = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/accessibility'} sectionNames={['Accessibility', 'Farver', 'Tekst', 'Billeder og video']} sectionIds={['accessibility', 'colors', 'text', 'media']} />
      <article>
        <section id="accessibility">
          <h2>Accessibility</h2>
          <p>
            Accessibility eller brugervenlighed går ud på at designe og kode en hjemmeside på en måde, så at folk som har en eller flere handikap lettere kan bruge og navigerer hjemmesiden.
          </p>
        </section>
        <section id="colors">
          <h2>Farver</h2>
          <p></p>
        </section>
        <section id="text">
          <h2>Tekst</h2>
          <p></p>
        </section>
        <section id="media">
          <h2>Billeder og video</h2>
          <p></p>
        </section>
      </article>
    </main >
  );
};

export default Accessibility;
