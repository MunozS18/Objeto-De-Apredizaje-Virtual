/** Tipos de datos que representan el contenido del OVA. */
export type TopicCard = { title: string; content: string; icon?: string }
export type Topic = { id: string; title: string; summary: string; badges?: string[]; cards: TopicCard[] }

/**
 * `topics`: base de contenido para todas las secciones.
 * Cada objeto describe una sección y sus tarjetas.
 */
export const topics: Topic[] = [
  {
    id: 'clasificacion',
    title: 'Clasificación del PC',
    summary: 'Según tamaño, potencia y propósito: desde embebidos hasta supercomputadoras.',
    badges: ['Escritorio', 'Portátil', 'Servidor', 'Workstation', 'Embebidos'],
    cards: [
      { title: 'Escritorio/Portátil', content: 'Uso general, productividad, estudio y entretenimiento.', icon: '💻' },
      { title: 'Workstation', content: 'Alto rendimiento para diseño, IA, cómputo científico.', icon: '🧮' },
      { title: 'Servidor', content: 'Servicios en red, alta disponibilidad y escalabilidad.', icon: '🖥️' },
      { title: 'Supercomputadora', content: 'Cómputo masivo paralelo, simulaciones complejas.', icon: '🚀' }
    ]
  },
  {
    id: 'hardware-software',
    title: 'Hardware y Software',
    summary: 'Partes físicas y lógicas que habilitan el procesamiento de información.',
    badges: ['CPU', 'RAM', 'Almacenamiento', 'SO', 'Lenguajes'],
    cards: [
      { title: 'Hardware (partes)', content: 'CPU, GPU, RAM, SSD/HDD, placa base, PSU, periféricos.', icon: '🧩' },
      { title: 'SO', content: 'Windows, Linux, macOS: gestionan recursos, procesos, E/S, seguridad.', icon: '🧭' },
      { title: 'Lenguajes', content: 'Bajo nivel (C/ASM) a alto nivel (Python/JS); paradigmas y runtimes.', icon: '📝' },
      { title: 'Virtualización', content: 'VMs y contenedores para aislar y escalar servicios.', icon: '📦' }
    ]
  },
  {
    id: 'numeracion',
    title: 'Sistemas de numeración',
    summary: 'Base 10 y base 2 como fundamentos del cómputo digital.',
    badges: ['Decimal', 'Binario'],
    cards: [
      { title: 'Decimal (base 10)', content: 'Dígitos 0-9; valor posicional 10^n; uso humano.', icon: '🔟' },
      { title: 'Binario (base 2)', content: 'Dígitos 0/1; bits; operaciones lógicas; electrónica digital.', icon: '0️⃣' },
      { title: 'Conversión', content: 'Ej: 13₁₀ = 1101₂; dividir por 2 y tomar restos.', icon: '♻️' },
      { title: 'Aritmética', content: 'Suma binaria: acarreo; comp. a dos para negativos.', icon: '➕' }
    ]
  },
  {
    id: 'expertos',
    title: 'Sistemas Expertos',
    summary: 'IA simbólica: base de conocimientos + motor de inferencias.',
    badges: ['IF-THEN', 'Reglas', 'Inferencia'],
    cards: [
      { title: 'Conocimiento', content: 'Hechos y reglas de un dominio específico.', icon: '📚' },
      { title: 'Inferencia', content: 'Encadenamiento hacia adelante/atrás para deducción.', icon: '🧠' },
      { title: 'Explicabilidad', content: 'Trazas de razonamiento, auditoría, confianza.', icon: '🔍' },
      { title: 'Aplicaciones', content: 'Diagnóstico, soporte, recomendación, legal/finanzas.', icon: '🏥' }
    ]
  },
  {
    id: 'biotec',
    title: 'Biotecnología (Minería de datos)',
    summary: 'Extracción de patrones en datos biológicos para descubrimientos.',
    badges: ['OMICS', 'ML', 'ETL'],
    cards: [
      { title: 'Datasets', content: 'Secuenciación, expresión génica, proteómica.', icon: '🧬' },
      { title: 'Preprocesado', content: 'Limpieza, normalización, reducción dimensional (PCA).', icon: '🧹' },
      { title: 'Modelado', content: 'Clasificación, clustering, redes neuronales.', icon: '📈' },
      { title: 'Ética', content: 'Privacidad de datos sensibles y sesgos.', icon: '⚖️' }
    ]
  },
  {
    id: 'control',
    title: 'Control de Procesos',
    summary: 'Monitoreo y regulación automática para mantener variables objetivo.',
    badges: ['PID', 'SCADA', 'PLC'],
    cards: [
      { title: 'Sensado y Actuación', content: 'Sensores miden; actuadores corrigen.', icon: '📡' },
      { title: 'PID', content: 'Control proporcional–integral–derivativo estabiliza sistemas.', icon: '⚙️' },
      { title: 'SCADA/PLC', content: 'Supervisión y control en planta; alta confiabilidad.', icon: '🏭' },
      { title: 'Seguridad', content: 'Estados de falla seguros, redundancia.', icon: '🛡️' }
    ]
  },
  {
    id: 'robotica',
    title: 'Robótica',
    summary: 'Integración de mecánica, electrónica, control y software.',
    badges: ['Cinemática', 'ROS', 'SLAM'],
    cards: [
      { title: 'Percepción', content: 'Cámaras, LIDAR; fusión sensorial.', icon: '👁️' },
      { title: 'Planificación', content: 'Trayectorias y evasión de obstáculos.', icon: '🗺️' },
      { title: 'Control', content: 'Modelos dinámicos, servocontrol.', icon: '🎛️' },
      { title: 'ROS', content: 'Middleware de robótica modular y distribuido.', icon: '🤖' }
    ]
  },
  {
    id: 'comunicaciones',
    title: 'Comunicaciones y Redes',
    summary: 'Interconexión eficiente y segura de sistemas.',
    badges: ['OSI/TCP-IP', 'WiFi', 'Seguridad'],
    cards: [
      { title: 'Capas', content: 'Modelo OSI y pila TCP/IP.', icon: '🪜' },
      { title: 'Medios', content: 'UTP, fibra, radio; topologías.', icon: '📡' },
      { title: 'Protocolos', content: 'HTTP, DNS, TLS, BGP.', icon: '🔗' },
      { title: 'Seguridad', content: 'Cifrado, VPN, segmentación.', icon: '🔐' }
    ]
  },
  {
    id: 'ingenieria',
    title: 'Ingeniería de Software',
    summary: 'Métodos y herramientas para construir software de calidad.',
    badges: ['Agile', 'Testing', 'DevOps'],
    cards: [
      { title: 'Ciclo de vida', content: 'Requisitos → Diseño → Implementación → Pruebas → Deploy.', icon: '🔄' },
      { title: 'Pruebas', content: 'Unitarias, integración, e2e; cobertura y CI.', icon: '🧪' },
      { title: 'Calidad', content: 'Revisión de código, linters, métricas.', icon: '📏' },
      { title: 'DevOps', content: 'Automatización, infraestructura como código, monitoreo.', icon: '🛠️' }
    ]
  }
]


