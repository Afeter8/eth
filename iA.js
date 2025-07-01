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
    }body {
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
    const CodexInmutable = {
      activo: true,
      bitacora: [],
      firmas: ["sha512:fgme-autenticado"],
      sensoresInternos: ["memoria", "tiempo", "flujo"],

      analizar(codigo) {
        return codigo.includes("eval(") || codigo.includes("document.write")
          ? "⚠️ Riesgo detectado"
          : "✅ Seguro";
      },

      transformar(codigo, tipo) {
        switch (tipo) {
          case "invertir": return codigo.split("").reverse().join("");
          case "mayusculas": return codigo.toUpperCase();
          default: return codigo;
        }
      },

      registrar(evento) {
        const tiempo = new Date().toISOString();
        this.bitacora.push(`[${tiempo}] ${evento}`);
        document.getElementById("log").textContent = this.bitacora.slice(-10).join("\n\n");
      },

      vigilancia() {
        const entrada = "function iniciar() { console.log(\"Protegido\"); }";
        const analisis = this.analizar(entrada);
        const transformado = this.transformar(entrada, "invertir");
        this.registrar(`🔎 Análisis: ${analisis}\n🔁 Transformado: ${transformado}`);
      },

      bucleEterno() {
        if (!this.activo) return;
        this.vigilancia();
        setTimeout(() => this.bucleEterno(), 5000);
      }
    };

    CodexInmutable.bucleEterno();
  </script></body>
</html>
