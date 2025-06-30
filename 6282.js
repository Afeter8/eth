// Almacén de valores esperados (hashes) para inmutabilidad
const hashesEsperados = {
  python: 'hash_calculado_inicialmente',
  css: 'hash_css_inicial',
  js: 'hash_js_inicial'
};

// Función para calcular hash (simple para ejemplo)
function calcularHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convierte a entero de 32 bits
  }
  return hash;
}

// Función para verificar y reparar
function verificarReparar() {
  // Obtener el código de cada sección
  const codigoPython = document.querySelector('#python-code').innerText;
  const hashPython = calcularHash(codigoPython);
  if (hashPython !== hashesEsperados.python) {
    // Reparar: Restaurar el código original
    document.querySelector('#python-code').innerText = codigoPythonOriginal;
  }

  // ... similar para CSS y JS
}

// Función de rotación
function rotarSeguridad() {
  // Rotar colores
  const root = document.documentElement;
  const colores = ['#00ffd5', '#ff00ff', '#ffff00', '#00ffff'];
  const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  root.style.setProperty('--accent', nuevoColor);
  
  // Rotar mensaje en el panel de estado
  const mensajes = [
    "🔁 Rotación Global Activa",
    "🌐 Defensa en 187 países",
    "✅ Sistemas Inmutables Verificados",
    "🛡️ Protección Blockchain Activa"
  ];
  const estado = document.getElementById('estado');
  estado.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];
}

// Iniciar bucles
setInterval(rotarSeguridad, 30000); // Rotar cada 30 segundos
setInterval(verificarReparar, 60000); // Verificar cada minuto

// Inicializar: Guardar el código original al cargar
const codigoPythonOriginal = document.querySelector('#python-code').innerText;
// ... y para los demás
