import './styles/app.scss';
import {Toolbar} from "./components/toolbar";
import {SettingsBar} from "./components/settings-bar";
import {Canvas} from "./components/canvas";

const App = () => (
 <div className="App">
  <Toolbar/>
  <SettingsBar/>
  <Canvas/>
 </div>
);

export default App;
