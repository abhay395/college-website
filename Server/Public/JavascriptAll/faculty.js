

const facultyData = document.getElementById("facultydata");
// Iterating through the faculty array and creating cards dynamically
fetch("/teacher")
  .then((d) => d.json())
  .then((d) =>
    d.forEach((data) => {
      // Create a column div for each card
      let colDiv = document.createElement("div");
      colDiv.className = "col-md-4 mb-4";

      // Create card structure using template literals
      colDiv.innerHTML = `
    <div class="card h-100 shadow border-0 rounded">
      <img src="${data.image}" class="card-img-top img-fluid" alt="Faculty Image" style="height: 300px; object-fit: contain;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title text-center mb-3">${data.name}</h5>
        <p class="card-text"><strong>Qualification:</strong> ${data.qualification}</p>
        <p class="card-text"><strong>Contact:</strong> ${data.contact}</p>
        <p class="card-text"><strong>Subject:</strong> ${data.subject}</p>
        <a href="#" class="btn btn-primary mt-auto align-self-start">More Info</a>
      </div>
    </div>`;

      // Append the card to the main container
      facultyData.appendChild(colDiv);
    })
  )
  .catch((e) => console.log(e));
