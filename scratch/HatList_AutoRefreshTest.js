const deleteHat = async () => {
  fetch(`http://localhost:8090/api/hats/${currentHat.id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  window.location.reload();
};
