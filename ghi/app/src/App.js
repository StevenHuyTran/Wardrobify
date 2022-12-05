import { BrowserRouter, Routes, Route } from "react-router-dom";
import HatsList from "./HatsList";
import MainPage from "./MainPage";
import Nav from "./Nav";
import HatsForm from "./HatsForm";

function App(props) {
  if (props.hats === undefined) {
    return null;
  }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="hats" element={<HatsList hats={props.hats} />} />
          <Route path="hats/new" element={<HatsForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// return (
//   <BrowserRouter>
//     <Nav />
//     <div className="container">
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="hats">
//           <Route path="" element={<HatsList hats={props.hats} />} />
//           <Route path="new" element={<HatsForm />} />
//         </Route>
//       </Routes>
//     </div>
//   </BrowserRouter>
// );
// }

// export default App;
