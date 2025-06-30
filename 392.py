import os
import time
import hashlib
import subprocess

# --- CONFIGURACIÓN GLOBAL ---
INTERVALO_SEGUNDOS = 60  # Tiempo entre ciclos
BLOQUEAR_INTERFACES = True
VERIFICAR_INTEGRIDAD = True
BLOQUEAR_SEÑALES = True

# --- FUNCIONES DE BLOQUEO Y SEGURIDAD ---

def bloquear_wifi():
    os.system("nmcli radio wifi off")  # Linux
    os.system("netsh interface set interface Wi-Fi disable")  # Windows

def bloquear_bluetooth():
    os.system("rfkill block bluetooth")  # Linux
    os.system("net stop bthserv")  # Windows

def bloquear_sensores():
    os.system("modprobe -r uvcvideo")  # Apaga cámaras
    os.system("modprobe -r snd_usb_audio")  # Apaga micrófonos
    os.system("rfkill block all")  # Apaga todo tipo de RF

def bloquear_puertos():
    puertos = ["usb-storage", "usbhid", "firewire-core", "bluetooth"]
    for p in puertos:
        os.system(f"modprobe -r {p}")

def bloquear_infrarrojo():
    os.system("modprobe -r lirc_dev")

def apagar_interfaces_windows():
    interfaces = ["Wi-Fi", "Bluetooth", "Ethernet"]
    for iface in interfaces:
        os.system(f'netsh interface set interface name="{iface}" admin=disable')

def verificacion_integridad():
    archivos_clave = ["/etc/passwd", "/etc/shadow", "/boot/grub/grub.cfg"]
    for archivo in archivos_clave:
        try:
            with open(archivo, "rb") as f:
                contenido = f.read()
                hash_archivo = hashlib.sha256(contenido).hexdigest()
                print(f"Hash {archivo}: {hash_archivo}")
        except:
            print(f"[ERROR] No se pudo verificar: {archivo}")

def log_evento(evento):
    with open("log_defensa_inmutable.txt", "a") as f:
        f.write(f"[{time.ctime()}] {evento}\n")

# --- BUCLE ETERNO DE PROTECCIÓN ---
while True:
    log_evento("Iniciando ciclo de defensa...")

    if BLOQUEAR_INTERFACES:
        bloquear_wifi()
        bloquear_bluetooth()
        bloquear_puertos()
        bloquear_infrarrojo()
        bloquear_sensores()
        apagar_interfaces_windows()
        log_evento("Interfaces bloqueadas")

    if VERIFICAR_INTEGRIDAD:
        verificacion_integridad()
        log_evento("Verificación de integridad completada")

    if BLOQUEAR_SEÑALES:
        log_evento("Modo RF silencioso activo. Sensores deshabilitados.")

    log_evento("Ciclo finalizado. Esperando siguiente ejecución...\n")
    time.sleep(INTERVALO_SEGUNDOS)
