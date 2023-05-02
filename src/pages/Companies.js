import Aside from "../components/Aside";

const Frontpage = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/companies'} sectionNames={['Adnami', 'Inochi2D']} sectionIds={['adnami', 'inochi']} />
      <article>
        <section id="adnami">
          <h2>Adnami</h2>
          <p></p>
          <h3>Accessibility</h3>
          <p>Har ikke rigtigt noget fokus på accessibility, når det kommer til deres digitale producter, da det er begranset hvad de kan gøre.</p>
          <h3>Sustainability</h3>
          <p>Ligsom med accessibility, så er det begranset hvad Adnami kan gøre, ihvert når det kommer til den visuele del. De prøver dog at sørge for at de scripts de bruger er så lette som muligt, så de påvirker siderne så lidt som muligt.</p>
        </section>
        <section id="inochi">
          <h2>Inochi2D</h2>
          <p></p>
          <h3>Accessibility</h3>
          <p></p>
          <h3>Sustainability</h3>
          <p></p>
        </section>
      </article>
    </main >
  );
};

export default Frontpage;
