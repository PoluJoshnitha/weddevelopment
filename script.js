document.addEventListener("DOMContentLoaded", () => {
    const getUsersButton = document.getElementById("get-users-btn");
    const cardGrid = document.getElementById("card-grid");
    const loader = document.getElementById("loader");
  
    getUsersButton.addEventListener("click", async () => {
      loader.style.display = "block";
      getUsersButton.disabled = true;
      
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const data = await response.json();
  
        cardGrid.innerHTML = "";
        data.data.forEach(user => {
          const card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${user.avatar}" alt="User ${user.id}">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>${user.email}</p>
          `;
          cardGrid.appendChild(card);
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
  
      loader.style.display = "none";
      getUsersButton.disabled = false;
    });
  });
  