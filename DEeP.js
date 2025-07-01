// CSS original (en base64 para ofuscar)
const cssOriginalBase64 = "Ym9keSB7CiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMGQwZDsKICBjb2xvcjogIzAwZmZkNTsKfQ==";

// Convertir de base64 a string
const cssOriginal = atob(cssOriginalBase64);

// Hash esperado (SHA-256 en hexadecimal) del CSS original
const hashExpected = "a1b2c3d4..."; // Aquí va el hash real

async function verifyAndRestoreCSS() {
  const styleElement = document.getElementById('secure-css');
  const currentCSS = styleElement.textContent;
  
  // Calcular hash del CSS actual
  const currentHash = await calculateSHA256(currentCSS);
  
  if (currentHash !== hashExpected) {
    // Restaurar el CSS original
    styleElement.textContent = cssOriginal;
    console.warn("CSS alterado. Restaurando versión original.");
    
    // Verificar de nuevo después de restaurar (opcional)
    const restoredCSS = styleElement.textContent;
    const restoredHash = await calculateSHA256(restoredCSS);
    if (restoredHash !== hashExpected) {
      console.error("Error crítico: No se pudo restaurar el CSS.");
    }
  }
}

async function calculateSHA256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Ejecutar al cargar
document.addEventListener('DOMContentLoaded', verifyAndRestoreCSS);

// También periódicamente
setInterval(verifyAndRestoreCSS, 5000);
