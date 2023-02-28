import { Link } from "react-router-dom";
import "./index.css";

function MainPage() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">WARDROBIFY!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Need to keep track of your shoes and hats? We have the solution for
          you!
        </p>
      </div>
      <img
        src="https://guardianselfstorage.com/wp-content/uploads/2021/01/Wooden-Hanger-Image-980x653.jpg"
        alt="image description"
        width="500"
        className="rounded-img"
        // style="border-radius: 10px"
        // style="border-radius: 10px;"
      />

      {/* <div className="row justify-content-evenly">
        <div className="col-6 col-sm-4 shadow p-3 mb-5 bg-dark rounded">
        <Link to="/shoes">
            <img src="/shoes.jpg" className="img-fluid" alt="shoesImage"/>
          </Link>
     </div>
   </div> */}
    </div>
  );
}

export default MainPage;
