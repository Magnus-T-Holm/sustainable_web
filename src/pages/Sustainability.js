import Aside from "../components/Aside";

const Sustainability = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/sustainability'} sectionNames={['Bæredygtighed', 'Farver', 'Kode', 'Billeder og video']} sectionIds={['sustainability', 'colors', 'code', 'media']} />
      <article>
        <section id="sustainability">
          <h2>Bæredygtighed</h2>
        </section>
        <section id="colors">
          <h2>Farver</h2>
        </section>
        <section id="code">
          <h2>Kode</h2>
        </section>
        <section id="media">
          <h2>Billeder og video</h2>
        </section>
      </article>    </main >
  );
};

export default Sustainability;
