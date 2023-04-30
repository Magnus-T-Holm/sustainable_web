import Aside from "../components/Aside";

const Accessibility = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/accessibility'} sectionNames={['Accessibility', 'Farver', 'Tekst', 'Billeder og video']} sectionIds={['accessibility', 'colors', 'text', 'media']} />
      <article>
        <section id="accessibility">
          <h2>Accessibility</h2>
        </section>
        <section id="colors">
          <h2>Farver</h2>
        </section>
        <section id="text">
          <h2>Tekst</h2>
        </section>
        <section id="media">
          <h2>Billeder og video</h2>
        </section>
      </article>
    </main >
  );
};

export default Accessibility;
