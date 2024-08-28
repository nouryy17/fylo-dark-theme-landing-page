import "./style/style.css"
import MAIN from "./component/main"
import PROPS from "./component/props"
import TESTIMONIALS from "./component/testimonials";
import FOUNDER from './component/foundersPart'
import EMAIL from "./component/validEmilePart"
import FOOTER from "./component/footer"
function App() {
  return (
    <div >
      <MAIN></MAIN>
      <PROPS></PROPS>
      <TESTIMONIALS></TESTIMONIALS>
      <FOUNDER></FOUNDER>
      <EMAIL></EMAIL>
      <FOOTER></FOOTER>
    </div>
  );
}

export default App;
