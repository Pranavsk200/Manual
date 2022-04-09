import { BrowserRouter as Router, Route, Link, Switch, Routes}
		from "react-router-dom";

// Import the pages

import Page1 from "./components/page1"
import Page2 from "./components/page2"
import Page3 from "./components/page3"

// Import css
import "./index.css"

function App() {
return (
	<div className="App">
	<Router>
		<Routes>
		<Route exact path="/" element={<h1>Home Page</h1>} />
		<Route exact path="page1" element={<Page1 />} />
			<Route exact path="page2" element={<Page2 />} />
		<Route exact path="page3" element={<Page3 />} />
		</Routes>
		<div className="list">
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="page1">Page 1</Link></li>
			<li><Link to="page2">Page 2</Link></li>
			<li><Link to="page3">Page 3</Link></li>
		</ul>
		</div>
	</Router>
	</div>
);
}
export default App;
