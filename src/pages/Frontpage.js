import Aside from "../components/Aside";

const Frontpage = () => {
  let isDanish;

  if (localStorage.getItem("isDanish") === "true") {
    isDanish = true
  } else {
    isDanish = false
  }

  return (
    <main>
      <Aside />
    </main >
  );
};

export default Frontpage;
