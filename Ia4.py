import time
import hashlib
import json

class SistemaInmutable:
    def __init__(self):
        self.sistema = "FGME Codex Universal"
        self.version = "1.0"
        self.registros = []

    def generar_firma(self, texto):
        return hashlib.sha512(texto.encode()).hexdigest()

    def registrar_evento(self):
        timestamp = time.strftime("%Y-%m-%dT%H:%M:%S", time.gmtime())
        evento_texto = f"registro validado {timestamp}"
        firma = self.generar_firma(evento_texto)
        evento = {
            "timestamp": timestamp,
            "evento": evento_texto,
            "firma": firma
        }
        self.registros.append(evento)
        if len(self.registros) > 15:
            self.registros.pop(0)
        print(json.dumps({
            "sistema": self.sistema,
            "version": self.version,
            "registros": self.registros
        }, indent=2))

    def bucle_infinito(self, intervalo=5):
        while True:
            self.registrar_evento()
            time.sleep(intervalo)

if __name__ == "__main__":
    sistema = SistemaInmutable()
    sistema.bucle_infinito()
