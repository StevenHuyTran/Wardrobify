import React from "react";
import { Link } from "react-router-dom";

function HatsList(props) {
  const deleteHat = async (href) => {
    const deleteUrl = `http://localhost:8090/api/hats/${href}`;
    const fetchConfig = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(deleteUrl, fetchConfig);
    if (response.ok) {
      window.location.reload(false);
      console.log("Deleted", response);
    }
  };

  return (
    <>
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fabric</th>
            <th>Style</th>
            <th>Color</th>
            <th>Location</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.hats.map((hat) => {
            return (
              <tr key={hat.id}>
                <td>{hat.fabric}</td>
                <td>{hat.style}</td>
                <td>{hat.location}</td>
                <td>{hat.color}</td>
                {
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteHat(hat.href)}
                    >
                      Delete
                    </button>
                  </td>
                }
                {/* <td> <button onClick={() => deleteHat(hat.id)} type="button" className='btn btn-danger'>Delete</button></td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-end">
        <Link to="/hats/new" className="btn btn btn-warning btn-lg px-4 gap-3">
          Add New Hat
        </Link>
      </div>
    </div>
    </>
  );
}

export default HatsList;
