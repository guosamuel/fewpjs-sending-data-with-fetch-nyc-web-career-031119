// Add your code here
function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch(`http://localhost:3000/users`, configObj)
    .then(function (response) {
      return response.json()
    })
    .then(function (parsedResponse) {
        let dataContainer = document.querySelector('.data-container');
        dataContainer.innerHTML = `<div>${parsedResponse.id}</div>`;
    })
    .catch(error => {
      let dataContainer = document.querySelector('.data-container')
      dataContainer.innerHTML = `<div>${error.message}</div>`;
    });
};

submitData("vera", "vera@prot.com")
