const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    // Página de inicio
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Node js taller</title>
        </head>
        <body>
          <h1>Hola xd</h1>
          <ul>
            <li><a href="/users">Users</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/shopping">Shopping</a></li>
            <li><a href="/employees">Employees</a></li>
            <li><a href="/customers">Customers</a></li>
            <li><a href="/sales">Sales</a></li>
  
          </ul>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/users') {
    // Página de usuarios
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Users</title>
        </head>
        <body>
          <h1>Users Page</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Yisus</td>
                <td>jrey22@gmail.com</td>
                <td>3027382660</td>
              </tr>
            </tbody>
          </table>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/categories') {
    // Página de categorías
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Categories</title>
        </head>
        <body>
          <h1>Categories Page</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jugtetes</td>
              </tr>
            </tbody>
          </table>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/products') {
    // Página de productos
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Products</title>
        </head>
        <body>
          <h1>Products Page</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Carro a control remoto</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/employees') {
    // Página de empleados
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Employees</title>
        </head>
        <body>
          <h1>Employees Page</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Elom musk</td>
                <td>elonmusk@gmaul.com</td>
                <td>CEO</td>
              </tr>
            </tbody>
          </table>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/customers') {
    // Página de clientes
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Customers</title>
        </head>
        <body>
          <h1>Customers Page</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>pepe</td>
                <td>pepe@example.com</td>
                <td>12345678</td>
              </tr>
            </tbody>
          </table>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/sales') {
    // Página de ventas
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Sales</title>
        </head>
        <body>
          <h1>Sales Page</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Carri a control remoto</td>
                <td>3/td>
                <td>$150</td>
              </tr>
            </tbody>
          </table>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  if (url === '/shopping') {
    // Página de compras
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <html>
        <head>
          <title>Shopping</title>
        </head>
        <body>
          <h1>Shopping Page</h1>
          <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
          </ul>
          <a href="/">Back</a>
        </body>
      </html>
    `);
    return res.end();
  }

  // Página de error para rutas no encontradas
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.write(`
    <html>
      <head>
        <title>Page Not Found</title>
      </head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>The requested URL ${url} was not found on this server.</p>
        <a href="/">Back to Home</a>
      </body>
    </html>
  `);
  return res.end();
});

server.listen(7000, () => {
  console.log('Server listening on port 7000');
});
