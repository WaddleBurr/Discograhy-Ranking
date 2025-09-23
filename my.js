  <script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent page reload

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const artistname = document.getElementById("artistname").value;
      const albumname = document.getElementById("albumname").value;


      // Create new row and cells
      const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
      const newRow = table.insertRow();
      const nameCell = newRow.insertCell(0);
      const emailCell = newRow.insertCell(1);
      const artistCell = newRow.insertCell(0);
      const albumCell = newRow.insertCell(0);


      // Fill cells with form data
      nameCell.textContent = name;
      emailCell.textContent = email;
      artistCell.textContent = artistname;
      albumCell.textContent = albumname;


      // Optionally clear form
      document.getElementById("myForm").reset();
    });
  </script>
