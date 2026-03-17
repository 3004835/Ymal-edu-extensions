// Stop the original AI website from loading
window.stop();

// Replace the entire webpage with the Ymal Edu block screen
document.documentElement.innerHTML = `
  <html>
    <head>
      <title>Ymal Edu - Access Blocked</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #2b2b2b;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: white;
          text-align: center;
        }
        .block-container {
          padding: 50px;
          background: #e74c3c;
          border: 4px solid #c0392b;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }
        h1 {
          font-size: 3.5em;
          margin-top: 0;
          margin-bottom: 15px;
          text-transform: uppercase;
        }
        p {
          font-size: 1.8em;
          margin: 0;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="block-container">
        <h1>Access Blocked!</h1>
        <p>"You're not allowed to use AI in any time."</p>
      </div>
    </body>
  </html>
`;
