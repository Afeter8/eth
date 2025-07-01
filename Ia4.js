<!DOCTYPE html><html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FGME Inmutable JS</title>
  <style>
    body {
      background-color: #000;
      color: #00ffd5;
      font-family: monospace;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    pre {
      border: 1px dashed #00ffd5;
      padding: 1rem;
      width: 80%;
      max-width: 800px;
      background-color: rgba(0, 255, 213, 0.05);
    }
  </style>
</head>
<body>
  <h1>🔒 Sistema JS Inmutable</h1>
  <p>Ejecutando código en bucle eterno sin intervención externa.</p>
  <pre id="output"></pre>  <script>
    const sistemaInmutable = {
      estado: 'activo',
      registros: [],

      generarRegistro() {
        const tiempo = new Date().toISOString();
        const firma = btoa('FGME-' + tiempo).slice(0, 32);
        return {
          timestamp: tiempo,
          mensaje: 'ejecución verificada',
          firma: firma
        };
      },

      ejecutar() {
        const nuevo = this.generarRegistro();
        this.registros.push(nuevo);
        if (this.registros.length > 20) this.registros.shift();
        document.getElementById('output').textContent = JSON.stringify(this.registros, null, 2);
      },

      iniciarBucle() {
        this.ejecutar();
        setInterval(() => this.ejecutar(), 5000);
      }
    };

    sistemaInmutable.iniciarBucle();
  </script></body>
</html>
