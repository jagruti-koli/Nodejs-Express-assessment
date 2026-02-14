1️. React Functional Component

function MyComponent() {
  return <div>Hello</div>;
}
export default MyComponent;

2️. useState syntax
const [state, setState] = useState(initialValue);

3️. useEffect syntax
useEffect(() => {
  
});

4️. useEffect with dependency array
useEffect(() => {
  
}, [dependency]);

5️. useEffect that runs only once
useEffect(() => {
  
}, []);

6️.Install & setup React Router
npm install react-router-dom

import { BrowserRouter } from "react-router-dom";

7️. Basic routing setup
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>

8️. Navigation using Link
import { Link } from "react-router-dom";

<Link to="/about">About</Link>

9️. Get route parameter using useParams
import { useParams } from "react-router-dom";

const { id } = useParams();

10. Conditional rendering (ternary)
{isLoggedIn ? <Dashboard /> : <Login />}