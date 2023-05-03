import Aside from "../components/Aside";
import semantisk_kode from "../assets/semantisk_kode.webp";
import kontrast from "../assets/kontrast.webp";
import lazy_loading from "../assets/lazy_loading.webp";

const Sustainability = () => {
  return (
    <main>
      <Aside currentPage={'/sustainable-web/sustainability-og-accessibility'} sectionNames={['Bæredygtighed', 'Farver', 'Kode', 'Billeder og video', 'Server og hosting', 'Accessibility', 'Farver og Tekst', 'Kode', 'Billeder og video']} sectionIds={['sustainability', 'colors', 'sustainability_code', 'sustainability_media', 'server', 'accessibility', 'colors_text', 'accessibility_code', 'accessibility_media']} />
      <article>
        <section id="sustainability">
          <h2>Bæredygtighed</h2>
          <p>Det at lave en bæredygtig hjemmeside går ud på at prøve at reducerer mængden af Co2, som hjemmesiden udleder når den bliver brugt.</p>
        </section>
        <section id="colors">
          <h3>Farver</h3>
          <p>Farver bruger forskellige mængder energi, så der er nogle farver som ikke er nær så bæredygtig at bruge. Den farver der bruger mest er blå (~800mW), så det er en god ide ikke at bruge for meget blå, hvis man vil være mere miljøvenlig. Grøn bruger i modsætning mindst (~580mW).</p>
        </section>
        <section id="sustainability_code">
          <h3>Kode</h3>
          <p>Begrans mængden af kode på hjemmesiden, specielt JavaScript, da de kan fylde en del. Hvis man er nød til at bruge en størrer mængde JavaScript, så kan de være en god ide at komprimerer koden. Dette kan bland andet gøres med programmer som <a target="_blank" rel="noreferrer" href="https://codekitapp.com/">Codekit</a> (Et Mac program) og <a target="_blank" rel="noreferrer" href="https://prepros.io/">Prepros</a> (Et Windows program).</p>
        </section>
        <section id="sustainability_media">
          <h3>Billeder og video</h3>
          <p>Undgå at have store billeder og videoer på siden. Istedet for at bruge et 4k billede, som kun fylder 400x400 på siden, så skalere det ned. Brug af de rigtige billede formater er også en god ide.</p>
          <ul>
            <li>JPG er gode til fotografier, men ikke så gode til billerder med tekst på.</li>
            <li>PNG er gode til til billerder med tekst på, men er ikke særlig gode til fotografier, da de er størrer filer.</li>
            <li>GIF kan bruges til simple animationer, men er ikke så gode hvis det er over 8-bit farvebilleder.</li>
            <li>SVG er gode til logoer, ikoner og simple illustrationer, men ikke til fotografier eller detaljerede tegninger.</li>
            <li>WebP kan bruges, hvis man vil have billeder der ikke fylder så meget, men formatet er ikke understøttet af ældre browsere.</li>
          </ul>
          <p>Hvis der er billeder eller video på siden, så husk at tilføje <i>loading="lazy"</i> til dem, så de ikke loader lige så snart siden loader.</p>
          <img loading="lazy" src={lazy_loading} alt="En billeder der viser et eksempel på hvordan det ser ud i koden, når man bruger loading='lazy'." />
          <p>Videoer skal hælst også have <i>preload="none"</i>, så de ikke begynder at load før man prøver at afspille dem. Lad også vær med at have autoplay på videoer</p>
        </section>
        <section id="server">
          <h3>Server og hosting</h3>
          <p>En sidste ting man også kan gøre, er at sørge for at det sted ens hjemmeside bliver hosted bruger grøn energi. Et eksempel på den slags hosting er <a target="_blank" rel="noreferrer" href="https://greenhosting.dk/">Green Hosting</a>.</p>
        </section>

        <section id="accessibility">
          <h2>Accessibility</h2>
          <p>
            Accessibility eller brugervenlighed går ud på at designe og kode en hjemmeside på en måde, så at folk som har en eller flere handikap lettere kan bruge og navigerer hjemmesiden.
          </p>
          <p>På den her side vil du kunne finde nogle tips til hvordan du kan gøre din hjemmeside mere brugervenlig.</p>
        </section>
        <section id="colors_text">
          <h3>Farver og Tekst</h3>
          <p>Undgå at bruge en tekst og baggrunds farve, som har en dårlig kontrast. Hvis du er usikker på om kontrasten er okay, så er der online værktøjer du kan bruge, for eksempel den her fra Adobe: <a target="_blank" rel="noreferrer" href="https://color.adobe.com/da/create/color-contrast-analyzer">Link til værktøjet</a>.</p>
          <img loading="lazy" src={kontrast} alt="En billeder der viser Adobe's værktøj i brug. Der bliver testet om baggrunds farven (#D9C589) og tekst farven i main (#000000) har god kontrast, hvilket det har" />
          <p>Overvej også om de farver der bliver brugt kan være sværer at se forskel på, hvis man har en form for farveblindhed.</p>
          <p>Brug helst en skrifttype som er let at læse. En font som er sans-serif er et godt valg, da de kan gøre det lettere for folk at læse, hvis de er ordblinde.</p>
          <p>Det er også en god ide ikke at gøre teksten for lille, da det også kan gøre det svært at læse. Det samme kan en for lille linje afstand (line-height) gøre.</p>
        </section>
        <section id="accessibility_code">
          <h3>Kode</h3>
          <p>Når det kommer til kode, så er det vigtigt at man bruger semantisk HTML5 elementer. Det vil sige at man bruger elementer som for eksempel header, footer, article og section.</p>
          <p>Grunden til at man gør det, er at det gør det lettere for folk som bruger skærmlæsere eller navigerer ved hjælp af tastatur, at bruge hjemmesiden.</p>
          <img loading="lazy" src={semantisk_kode} alt="Et billede det viser noget af koden på den her side. Koden er skrevet på en semantisk måde og bruger HTML5 elementer, som article og section." />
        </section>
        <section id="accessibility_media">
          <h3>Billeder og video</h3>
          <p>Søg for at bruge alt text på visuelle elementer, som billeder, til at beskrive det visuelle element, så at bruger af skærmlæsere også kan få informationen.</p>
          <p>Det er også en god ide at tilføje undertekster til elementer som indeholder lyd, så folk med hørenedsættelse også kan følge med.</p>
        </section>
      </article>
    </main >
  );
};

export default Sustainability;
