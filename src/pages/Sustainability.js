import Aside from "../components/Aside";

const Sustainability = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/sustainability'} sectionNames={['Bæredygtighed', 'Farver', 'Kode', 'Billeder og video', 'Server og hosting']} sectionIds={['sustainability', 'colors', 'code', 'media', 'server']} />
      <article>
        <section id="sustainability">
          <h2>Bæredygtighed</h2>
          <p>Det at lave en bæredygtig hjemmeside går ud på at prøve at reducerer mængden af Co2, som hjemmesiden udleder når den bliver brugt.</p>
        </section>
        <section id="colors">
          <h2>Farver</h2>
          <p>Farver bruger forskellige mængder energi, så der er nogle farver som ikke er nær så bæredygtig at bruge. Den farver der bruger mest er blå (~800mW), så det er en god ide ikke at bruge for meget blå, hvis man vil være mere miljøvenlig. Grøn bruger i modsætning mindst (~580mW).</p>
        </section>
        <section id="code">
          <h2>Kode</h2>
          <p></p>
        </section>
        <section id="media">
          <h2>Billeder og video</h2>
          <p>Undgå at have store billeder og videoer på siden. Istedet for at bruge et 4k billede, som kun fylder 400x400 på siden, så skalere det ned. Brug af de rigtige billede formater er også en god ide.</p>
          <p>Hvis der er billeder eller video på siden, så husk at tilføje <i>loading="lazy"</i> til dem, så de ikke loader lige så snart siden loader.</p>
        </section>
        <section id="server">
          <h2>Server og hosting</h2>
          <p>En sidste ting man også kan gøre, er at sørge for at det sted ens hjemmeside bliver hosted bruger grøn energi. Et eksempel på den slags hosting er <a target="_blank" rel="noreferrer" href="https://greenhosting.dk/">Green Hosting</a>.</p>
        </section>
      </article>
    </main >
  );
};

export default Sustainability;
