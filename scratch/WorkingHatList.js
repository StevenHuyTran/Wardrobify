import React, { useState } from "react";

function HatsList(props) {
  const [items, setItems] = React.useState(props.hats);
  const deleteItem = (id) => async () => {
    const url = `http://localhost:8090/api/hats/${id}`;
    const fetchConfig = {
      method: "delete",
    };
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
      const deleted = await response.json();
    }
    setItems((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  console.log(props);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fabric</th>
            <th>Style</th>
            <th>Color</th>
            <th>Location</th>
            {/* <th>Picture</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.hats.map((hat) => {
            console.log(props.hats.map);
            return (
              <tr key={hat.id}>
                <td>{hat.fabric}</td>
                <td>{hat.style_name}</td>
                <td>{hat.color}</td>
                <td>{hat.location.closet_name}</td>
                <td>
                  <button onClick={deleteItem(hat.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HatsList;
