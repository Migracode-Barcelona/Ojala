import "./App.scss";
import HomeContainer from "./containers/Home/HomeContainer";

function App() {
  return (
    <div className="container">
      <HomeContainer />
    </div>
  );
}

export default App;

/* 
Testing structure for customize Bootstrap

<div className="App">
			<Button variant="primary btn-lg">button</Button>
			<h1 class="display-1">
				D1 Use your native language<br></br>to learn Spanish.
			</h1>
			<h1>h1 ¡Ojalá! is </h1>
			<h2>H2 IN 4 LANGUAGES</h2>
			<h3>h3 description of the paragraph</h3>
			<p>
				Learn Spanish with the app ¡Ojalá!<br></br>for Android phones using
				<br></br>Wolof, الدارجة, Français or English.
			</p>
			<header className="App-header">
				<p>Ready to develop 💪 This uses font-size: calc(10px + 2vmin);</p>
			</header>
      </div>
*/
