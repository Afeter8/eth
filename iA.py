<!DOCTYPE html><html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FGME Codex∞Universal</title>
  <style>
    :root {
      --bg: #0d0d0d;
      --text: #00ffd5;
      --font: monospace;
    }
    body {
      background-color: var(--bg);
      color: var(--text);
      font-family: var(--font);
      padding: 2rem;
      animation: cicloInmutable 120s infinite linear;
    }
    @keyframes cicloInmutable {
      0% { filter: brightness(1); }
      25% { filter: contrast(1.1); }
      50% { filter: brightness(0.9); }
      75% { filter: contrast(1.2); }
      100% { filter: brightness(1); }
    }
    h1, p {
      animation: rotacionTexto 60s infinite alternate ease-in-out;
    }
    @keyframes rotacionTexto {
      0% { transform: rotateX(0deg); }
      50% { transform: rotateX(360deg); }
      100% { transform: rotateX(0deg); }
    }
    pre {
      white-space: pre-wrap;
      word-break: break-word;
      border: 1px dashed var(--text);
      padding: 1rem;
      animation: latido 5s infinite ease-in-out;
    }
    @keyframes latido {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.01); }
    }
  </style>
</head>
<body>
  <h1>🧠 FGME Codex∞Universal</h1>
  <p>Sistema inmutable, autónomo, sin intervención humana, ejecutando en bucle eterno.</p>
  <pre id="log"></pre>  <script>
    const pythonInmutable = `
import time
import hashlib

sistema = {
    "estado": "activo",
    "nombre": "Codex∞Universal",
    "verificado": True,
    "registros": []
}

def registrar():
    now = time.strftime("%Y-%m-%dT%H:%M:%S", time.gmtime())
    evento = f"registro:{now}"
    firma = hashlib.sha512(evento.encode()).hexdigest()
    sistema["registros"].append({"evento": evento, "firma": firma})
    if len(sistema["registros"]) > 10:
        sistema["registros"].pop(0)

while True:
    registrar()
    time.sleep(6)
`;

    document.getElementById("log").textContent = pythonInmutable;
  </script></body>
</html>
