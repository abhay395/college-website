const facultyData = document.getElementById("facultydata");
// Iterating through the faculty array and creating cards dynamically
fetch("/student/getAll?course=Msc.cs")
  .then((d) => d.json())
  .then((d) =>
    d.forEach((data) => {
        console.log(data)
      // Create a column div for each card
      let colDiv = document.createElement("div");
      colDiv.className = "col-md-4 mb-4";
      console.log(data);
      // Create card structure using template literals
      colDiv.innerHTML = `
       <div class="card student-card">
          <img
            src=${data.image}
            alt="Student Image"
            class="student-image"
          />
          <div class="student-info">
            <h5>${data.name}</h5>
            <p><strong>Rank : </strong> ${data.rank}</p>
            <p><strong>Course : </strong> ${data.course}</p>
            <p><strong>Year : </strong> ${data.year}</p>
            <p><strong>Department : </strong> Computer Science</p>
            <p><strong>Exam Year : </strong> ${data.examYear}</p>
            <p><strong>CGPA : </strong>${data.cgpa}</p>
            <span class="badge bg-primary">${data.rank}</span>
          </div>
          <div class="card-footer">
            <span>ABC University</span>
          </div>
        </div>`;

      // Append the card to the main container
      facultyData.appendChild(colDiv);
    })
  )
  .catch((e) => console.log(e));
