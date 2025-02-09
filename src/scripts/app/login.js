const loginBtn = document.getElementById('login');

// Handle click on the login button
loginBtn.addEventListener('click', () => {
  // Create a login modal
  const modal = document.createElement('div');
  modal.id = 'loginModal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Login</h2>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
      <br>
      <button id="submitLogin">Submit</button>
      <button id="closeModal">Close</button>
    </div>
  `;

  document.body.appendChild(modal);

  // Handle modal close
  document.getElementById('closeModal').addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Handle login submission
  document.getElementById('submitLogin').addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);

    // Close the modal after login
    document.body.removeChild(modal);

    // Navigate to the home.html page
    window.location.href = '/src/pages/home.html';
  });
});