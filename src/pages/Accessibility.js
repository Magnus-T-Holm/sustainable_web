import Aside from "../components/Aside";

const Accessibility = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/accessibility'} sectionNames={['Accessibility', 'Farver og Tekst', 'Kode', 'Billeder og video']} sectionIds={['accessibility', 'colors_text', 'code', 'media']} />
      <article>
        <section id="accessibility">
          <h2>Accessibility</h2>
          <p>
            Accessibility eller brugervenlighed går ud på at designe og kode en hjemmeside på en måde, så at folk som har en eller flere handikap lettere kan bruge og navigerer hjemmesiden.
          </p>
          <p>På den her side vil du kunne finde nogle tips til hvordan du kan gøre din hjemmeside mere brugervenlig.</p>
        </section>
        <section id="colors_text">
          <h2>Farver og Tekst</h2>
          <p>Undgå at bruge en tekst og baggrunds farve, som har en dårlig kontrast. Hvis du er usikker på om kontrasten er okay, så er der online værktøjer du kan bruge, for eksempel den her fra Adobe: <a target="_blank" rel="noreferrer" href="https://color.adobe.com/da/create/color-contrast-analyzer">Link til værktøjet</a>.</p>
          <p>Overvej også om de farver der bliver brugt kan være sværer at se forskel på, hvis man har en form for farveblindhed.</p>
          <p>Brug helst en skrifttype som er let at læse. En font som er sans-serif er et godt valg, da de kan gøre det lettere for folk at læse, hvis de er ordblinde.</p>
          <p>Det er også en god ide ikke at gøre teksten for lille, da det også kan gøre det svært at læse. Det samme kan en for lille linje afstand (line-spacing) gøre.</p>
        </section>
        <section id="code">
          <h2>Kode</h2>
          <p>Når det kommer til kode, så er det vigtigt at man bruger semantisk HTML5 elementer. Det vil sige at man bruger elementer som for eksempel header, footer, article og section.</p>
          <p>Grunden til at man gør det, er at det gør det lettere for folk som bruger skærmlæsere eller navigerer ved hjælp af tastatur, at bruge hjemmesiden.</p>
        </section>
        <section id="media">
          <h2>Billeder og video</h2>
          <p>Søg for at bruge alt text på visuelle elementer, som billeder, til at beskrive det visuelle element, så at bruger af skærmlæsere også kan få informationen.</p>
          <p>Det er også en god ide at tilføje undertekster til elementer som indeholder lyd, så folk med hørenedsættelse også kan følge med.</p>
        </section>
      </article>
    </main >
  );
};

export default Accessibility;
