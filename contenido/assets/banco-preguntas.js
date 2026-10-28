/* ============================================================
   Banco de preguntas · Centro de Estudio CLF-C02
   195 preguntas originales en español, agrupadas por dominio y bloque (b: 1..14).
   No son preguntas oficiales ni dumps. Cada intento completo muestrea
   16 Conceptos, 20 Seguridad, 22 Tecnología y 7 Costos (65 en total).
   Las preguntas de respuesta múltiple usan 5 opciones (Selecciona DOS o TRES).
   ============================================================ */
window.BANCO_PREGUNTAS = [
  {
    "id": "C01",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Una tienda en línea ve un aumento de tráfico durante las promociones y quiere agregar o quitar servidores automáticamente según la demanda. ¿Qué concepto describe esta capacidad?",
    "o": [
      "Elasticidad",
      "Durabilidad",
      "Tolerancia a fallos",
      "Economías de escala"
    ],
    "c": [
      0
    ],
    "e": "La elasticidad ajusta la capacidad automáticamente según la demanda y permite volver a reducirla. La durabilidad se refiere a conservar datos; la tolerancia a fallos, a seguir operando ante fallos."
  },
  {
    "id": "C02",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "¿Qué beneficio de la nube permite a un equipo crear un entorno de pruebas en minutos y eliminarlo al terminar?",
    "o": [
      "Agilidad",
      "Latencia",
      "Durabilidad",
      "Cumplimiento"
    ],
    "c": [
      0
    ],
    "e": "La agilidad es la velocidad para aprovisionar recursos y experimentar sin comprar hardware. No es lo mismo que elasticidad, que se centra en ajustar capacidad automáticamente."
  },
  {
    "id": "C03",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "El CFO de una empresa compara comprar servidores para un pico de demanda de dos semanas al año frente a pagar por capacidad solo durante ese pico. ¿Qué cambio financiero describe la opción de AWS?",
    "o": [
      "Convertir gasto de capital en gasto operativo variable",
      "Aumentar la inversión fija en datacenters",
      "Eliminar por completo los costos de software",
      "Comprar capacidad reservada para diez años"
    ],
    "c": [
      0
    ],
    "e": "Pasar de CapEx a OpEx variables evita comprar hardware para un pico que se usa pocas semanas. La nube no elimina los costos de software ni obliga a compromisos de diez años; las reservas son opcionales y de 1 o 3 años."
  },
  {
    "id": "C04",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Un proveedor ofrece precios por hora más bajos que los de un datacenter propio porque compra hardware, energía y red para millones de clientes. ¿Qué concepto explica esa ventaja?",
    "o": [
      "Economías de escala",
      "Elasticidad",
      "Tolerancia a fallos",
      "Residencia de datos"
    ],
    "c": [
      0
    ],
    "e": "Las economías de escala reparten un costo fijo enorme entre muchos clientes y reducen el precio unitario. La elasticidad ajusta capacidad; la tolerancia a fallos evita interrupciones; la residencia de datos es una restricción legal."
  },
  {
    "id": "C05",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo aprovisiona capacidad fija y a veces se queda corto en los picos de demanda. ¿Qué principio de diseño resuelve mejor el problema?",
    "o": [
      "Escalar automáticamente según la demanda en lugar de adivinar la capacidad",
      "Adquirir instancias reservadas a tres años para el pico máximo anual",
      "Desplegar todos los servidores dentro de una única subred privada",
      "Migrar las cargas de trabajo hacia un modelo de nube privada local"
    ],
    "c": [
      0
    ],
    "e": "El principio de “dejar de adivinar la capacidad” consiste en usar escalado automático y servicios elásticos para ajustar los recursos a la demanda real."
  },
  {
    "id": "C06",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "¿Qué práctica implementa el principio de diseñar para fallos?",
    "o": [
      "Distribuir la carga de trabajo entre múltiples Zonas de Disponibilidad con conmutación automática",
      "Concentrar todas las instancias en una sola Zona de Disponibilidad para reducir la latencia entre nodos",
      "Escalar verticalmente hacia el tamaño de instancia más grande de la familia",
      "Reemplazar los grupos de seguridad por listas de control de acceso a la red (NACL)"
    ],
    "c": [
      0
    ],
    "e": "Diseñar para fallos significa asumir que los componentes pueden fallar y construir redundancia, por ejemplo con Multi-AZ, backups y reintentos."
  },
  {
    "id": "C07",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Una aplicación procesa pedidos y la facturación debe recibirlos sin que ambos componentes fallen juntos. ¿Qué patrón ayuda a desacoplarlos?",
    "o": [
      "Usar una cola como Amazon SQS entre los componentes",
      "Ejecutar ambos en la misma instancia",
      "Compartir una base de datos monolítica",
      "Aumentar el tamaño de la instancia"
    ],
    "c": [
      0
    ],
    "e": "Una cola desacopla productor y consumidor: si la facturación falla, los mensajes esperan en SQS. Así se evita que un fallo se propague al resto del sistema."
  },
  {
    "id": "C08",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa necesita gestionar el cambio cultural y desarrollar habilidades antes de migrar. ¿Qué perspectiva del AWS CAF aborda esto?",
    "o": [
      "Personas",
      "Plataforma",
      "Gobernanza",
      "Operaciones"
    ],
    "c": [
      0
    ],
    "e": "La perspectiva de Personas cubre cultura, roles, habilidades y gestión del cambio. Plataforma se enfoca en arquitectura y servicios; Gobernanza, en control y riesgo."
  },
  {
    "id": "C09",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa ya identificó oportunidades de migración y ahora debe crear el plan, asignar prioridades y alinear a las áreas involucradas. ¿Qué fase del AWS CAF corresponde?",
    "o": [
      "Align",
      "Envision",
      "Launch",
      "Operate"
    ],
    "c": [
      0
    ],
    "e": "Align construye el plan y alinea a la organización después de Envision. Launch ejecuta las iniciativas; Operate no es una fase del CAF, sino una perspectiva."
  },
  {
    "id": "C10",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo quiere definir cómo monitorear su carga, responder a incidentes operativos y mejorar los procesos de despliegue. ¿Qué pilar de Well-Architected debe revisar?",
    "o": [
      "Excelencia operativa",
      "Seguridad",
      "Confiabilidad",
      "Sostenibilidad"
    ],
    "c": [
      0
    ],
    "e": "Excelencia operativa cubre monitoreo, incidentes y mejora de procesos. Seguridad protege identidades y datos; Confiabilidad recupera la carga ante fallos; Sostenibilidad reduce el impacto ambiental."
  },
  {
    "id": "C11",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa debe reportar cómo reduce el consumo energético de sus cargas en AWS y elige instancias más eficientes. ¿Qué pilar de Well-Architected aborda ese objetivo?",
    "o": [
      "Sostenibilidad",
      "Optimización de costos",
      "Eficiencia del rendimiento",
      "Seguridad"
    ],
    "c": [
      0
    ],
    "e": "Sostenibilidad busca reducir el impacto ambiental, no solo el gasto. Optimización de costos reduce dinero; Eficiencia del rendimiento mejora el uso de recursos; Seguridad protege el sistema."
  },
  {
    "id": "C12",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa mueve una base de datos MySQL on-premise a Amazon RDS con cambios mínimos en la aplicación. ¿Qué estrategia de migración es?",
    "o": [
      "Replatform",
      "Rehost",
      "Refactor",
      "Retire"
    ],
    "c": [
      0
    ],
    "e": "Replatform implica un cambio moderado para aprovechar un servicio gestionado sin reescribir la aplicación. Rehost sería mover el servidor tal cual a EC2."
  },
  {
    "id": "C13",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa reemplaza su sistema de CRM on-premise por una solución SaaS. ¿Qué estrategia de las 7 R aplica?",
    "o": [
      "Repurchase",
      "Rehost",
      "Relocate",
      "Retain"
    ],
    "c": [
      0
    ],
    "e": "Repurchase es reemplazar la aplicación por un producto SaaS. Rehost es moverla tal cual; Relocate es mover la infraestructura sin cambiar la arquitectura."
  },
  {
    "id": "C14",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "¿Qué servicio ayuda a construir el business case y estimar el costo de migrar?",
    "o": [
      "Migration Evaluator",
      "Application Migration Service",
      "Migration Hub",
      "Database Migration Service"
    ],
    "c": [
      0
    ],
    "e": "Migration Evaluator recopila datos y estima costos para justificar la migración. Application Migration Service ejecuta el rehost; Migration Hub hace seguimiento."
  },
  {
    "id": "C15",
    "b": 11,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa quiere desplegar dos servidores con energía y red independientes dentro de la misma región para sobrevivir a la caída de un datacenter. ¿Qué debe usar?",
    "o": [
      "Dos zonas de disponibilidad",
      "Dos ubicaciones de borde",
      "Dos regiones",
      "Dos buckets de S3"
    ],
    "c": [
      0
    ],
    "e": "Las zonas de disponibilidad (AZ) son datacenters aislados dentro de una región, con energía y red independientes. Las ubicaciones de borde cachean contenido; dos regiones añaden latencia y costo; los buckets no aportan cómputo."
  },
  {
    "id": "C16",
    "b": 11,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa debe mantener los datos de sus clientes dentro de un país. ¿Qué factor debe priorizar al elegir la región?",
    "o": [
      "Requisitos legales y residencia de datos",
      "La cantidad de edge locations",
      "El número de buckets S3",
      "El tipo de instancia EC2"
    ],
    "c": [
      0
    ],
    "e": "La residencia de datos y el cumplimiento legal son requisitos previos. Después se consideran latencia, servicios disponibles y costo."
  },
  {
    "id": "C17",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Una startup quiere abrir su aplicación a clientes de Europa, Asia y América en el mismo mes, sin construir datacenters en cada continente. ¿Qué característica de la nube le permite hacerlo?",
    "o": [
      "Alcance global",
      "Elasticidad",
      "Tolerancia a fallos",
      "Economías de escala"
    ],
    "c": [
      0
    ],
    "e": "El alcance global permite desplegar en regiones de todo el mundo en minutos. La elasticidad ajusta capacidad; la tolerancia a fallos evita interrupciones; las economías de escala reducen el precio unitario."
  },
  {
    "id": "C18",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Una base de datos en EC2 satura la CPU y el equipo decide cambiar la instancia por otra con más núcleos y memoria, sin añadir servidores. ¿Qué tipo de escalado aplica?",
    "o": [
      "Escalado vertical",
      "Escalado horizontal",
      "Escalado elástico",
      "Escalado geográfico"
    ],
    "c": [
      0
    ],
    "e": "El escalado vertical aumenta los recursos de una sola instancia. El horizontal añade instancias; el elástico ajusta la capacidad automáticamente; el geográfico distribuye entre regiones."
  },
  {
    "id": "C19",
    "b": 9,
    "d": "Conceptos",
    "m": false,
    "q": "Los usuarios de Asia reportan latencia alta porque la aplicación solo corre en Europa. ¿Qué solución mejora la latencia sin reescribir la aplicación ni duplicar la base de datos?",
    "o": [
      "Distribuir el contenido estático con Amazon CloudFront",
      "Comprar instancias reservadas en Europa",
      "Aumentar el tamaño de la instancia europea",
      "Mover la base de datos a un bucket de S3"
    ],
    "c": [
      0
    ],
    "e": "CloudFront cachea contenido en ubicaciones de borde cercanas al usuario y reduce la latencia. Las reservas y el tamaño de la instancia no acercan los datos; S3 no sustituye una base de datos relacional."
  },
  {
    "id": "C20",
    "b": 14,
    "d": "Conceptos",
    "m": false,
    "q": "Un director financiero quiere comparar el costo de mantener el datacenter propio durante tres años con el de migrar a AWS, incluyendo hardware, energía, espacio y personal. ¿Qué análisis debe solicitar?",
    "o": [
      "Un análisis de costo total de propiedad (TCO)",
      "Un cálculo de elasticidad",
      "Una revisión de Well-Architected",
      "Un informe de AWS Artifact"
    ],
    "c": [
      0
    ],
    "e": "El TCO compara todos los costos de ambas opciones, no solo la tarifa de AWS. La elasticidad es una característica; Well-Architected revisa diseño; Artifact contiene informes de cumplimiento."
  },
  {
    "id": "C21",
    "b": 5,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa paga por instancias EC2 con el doble de CPU y memoria de lo que usan sus aplicaciones. ¿Qué acción reduce la factura sin cambiar la arquitectura?",
    "o": [
      "Ajustar el tamaño de las instancias a la demanda real",
      "Comprar Reserved Instances para las instancias actuales",
      "Mover las instancias a una sola zona de disponibilidad",
      "Eliminar las alarmas de CloudWatch"
    ],
    "c": [
      0
    ],
    "e": "El right-sizing reduce el recurso al tamaño necesario; las reservas solo descuentan sobre el tamaño que ya tienes. Cambiar de zona no reduce el costo y eliminar alarmas no cambia el consumo."
  },
  {
    "id": "C22",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa quiere que su equipo de infraestructura deje de mantener servidores, refrigeración y espacio físico y se concentre en la aplicación. ¿Qué ventaja de la nube describe esta situación?",
    "o": [
      "Dejar de gastar dinero en mantener y operar centros de datos físicos",
      "Aprovechar las economías de escala mediante descuentos por compromiso a tres años",
      "Sustituir todas las licencias de software por aplicaciones de código abierto",
      "Reducir la latencia de red mediante el uso de ubicaciones de borde (Edge Locations)"
    ],
    "c": [
      0
    ],
    "e": "La nube traslada la operación física a AWS y libera al equipo para el producto. No aumenta la latencia por definición, no convierte el gasto en CapEx y no elimina la seguridad."
  },
  {
    "id": "C23",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Antes de migrar, una empresa quiere identificar oportunidades de negocio, casos de uso y prioridades. ¿Qué fase del AWS Cloud Adoption Framework (CAF) corresponde?",
    "o": [
      "Envision",
      "Align",
      "Launch",
      "Operate"
    ],
    "c": [
      0
    ],
    "e": "Envision identifica oportunidades y prioridades. Align crea el plan y alinea a la organización; Launch ejecuta; Operate no es una fase del CAF."
  },
  {
    "id": "C24",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa ya tiene el plan de migración alineado y comienza a ejecutar proyectos piloto y a mover cargas de trabajo. ¿Qué fase del CAF corresponde?",
    "o": [
      "Launch",
      "Envision",
      "Align",
      "Operate"
    ],
    "c": [
      0
    ],
    "e": "Launch ejecuta las iniciativas planificadas. Envision y Align son fases previas; Operate es una perspectiva de operación, no una fase."
  },
  {
    "id": "C25",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa necesita alinear la migración con el caso de negocio, los ingresos y los objetivos estratégicos. ¿Qué perspectiva del CAF aborda ese trabajo?",
    "o": [
      "Negocio",
      "Personas",
      "Gobernanza",
      "Plataforma"
    ],
    "c": [
      0
    ],
    "e": "La perspectiva de Negocio conecta la nube con resultados comerciales y el caso de negocio. Personas cubre cultura y habilidades; Gobernanza, riesgos y controles; Plataforma, la arquitectura."
  },
  {
    "id": "C26",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Durante la migración, una empresa debe definir controles, gestión de riesgos y cumplimiento normativo. ¿Qué perspectiva del CAF cubre esa necesidad?",
    "o": [
      "Gobernanza",
      "Plataforma",
      "Operaciones",
      "Negocio"
    ],
    "c": [
      0
    ],
    "e": "Gobernanza define controles, riesgos y cumplimiento. Plataforma diseña la arquitectura; Operaciones ejecuta y soporta; Negocio alinea objetivos comerciales."
  },
  {
    "id": "C27",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa quiere definir cómo operar, monitorear y soportar las cargas de trabajo después de migrarlas. ¿Qué perspectiva del CAF debe revisar?",
    "o": [
      "Operaciones",
      "Personas",
      "Gobernanza",
      "Negocio"
    ],
    "c": [
      0
    ],
    "e": "Operaciones cubre la ejecución y el soporte de las cargas. Personas se ocupa de cultura y habilidades; Gobernanza, de controles; Negocio, de objetivos comerciales."
  },
  {
    "id": "C28",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo necesita diseñar la arquitectura de destino, las cuentas y los servicios que sostendrán las aplicaciones migradas. ¿Qué perspectiva del CAF corresponde?",
    "o": [
      "Plataforma",
      "Personas",
      "Operaciones",
      "Negocio"
    ],
    "c": [
      0
    ],
    "e": "Plataforma define la arquitectura y el entorno técnico de destino. Personas cubre roles y cultura; Operaciones ejecuta; Negocio alinea el caso de negocio."
  },
  {
    "id": "C29",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo diseña controles de identidad, cifrado y protección de datos para una carga crítica. ¿Qué pilar de Well-Architected debe revisar?",
    "o": [
      "Seguridad",
      "Confiabilidad",
      "Excelencia operativa",
      "Sostenibilidad"
    ],
    "c": [
      0
    ],
    "e": "Seguridad cubre identidad, permisos, cifrado y protección de datos. Confiabilidad recupera ante fallos; Excelencia operativa mejora procesos; Sostenibilidad reduce el impacto ambiental."
  },
  {
    "id": "C30",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa quiere que su aplicación se recupere automáticamente de la caída de una zona y siga atendiendo la demanda. ¿Qué pilar de Well-Architected aborda ese objetivo?",
    "o": [
      "Confiabilidad",
      "Seguridad",
      "Optimización de costos",
      "Sostenibilidad"
    ],
    "c": [
      0
    ],
    "e": "Confiabilidad diseña recuperación ante fallos y disponibilidad. Seguridad protege; Optimización de costos reduce gasto; Sostenibilidad reduce impacto ambiental."
  },
  {
    "id": "C31",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo quiere elegir el tipo de instancia y la arquitectura adecuados para mantener el rendimiento a medida que cambia la demanda. ¿Qué pilar de Well-Architected revisa?",
    "o": [
      "Eficiencia del rendimiento",
      "Excelencia operativa",
      "Seguridad",
      "Confiabilidad"
    ],
    "c": [
      0
    ],
    "e": "Eficiencia del rendimiento usa los recursos adecuados y se adapta a la demanda. Excelencia operativa se centra en procesos; Seguridad, en protección; Confiabilidad, en recuperación."
  },
  {
    "id": "C32",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa quiere identificar recursos infrautilizados y elegir la opción de compra más económica para cada carga. ¿Qué pilar de Well-Architected aborda ese trabajo?",
    "o": [
      "Optimización de costos",
      "Sostenibilidad",
      "Eficiencia del rendimiento",
      "Confiabilidad"
    ],
    "c": [
      0
    ],
    "e": "Optimización de costos evita gastos innecesarios y elige el modelo de compra adecuado. Sostenibilidad busca impacto ambiental; Eficiencia del rendimiento, rendimiento; Confiabilidad, disponibilidad."
  },
  {
    "id": "C33",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo quiere revisar una carga de trabajo contra los seis pilares y obtener una lista de riesgos y mejoras. ¿Qué herramienta debe usar?",
    "o": [
      "AWS Well-Architected Tool",
      "AWS Trusted Advisor",
      "AWS Cloud Adoption Framework",
      "AWS Config"
    ],
    "c": [
      0
    ],
    "e": "Well-Architected Tool guía la revisión por pilares y registra riesgos. Trusted Advisor recomienda buenas prácticas; CAF es un marco de adopción; Config evalúa configuración."
  },
  {
    "id": "C34",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Un administrador necesita ejecutar comandos de AWS CLI rápidamente desde el navegador web sin instalar herramientas ni configurar credenciales en su equipo local. ¿Qué servicio debe usar?",
    "o": [
      "AWS CloudShell",
      "AWS SDK",
      "AWS Systems Manager Run Command",
      "AWS Config"
    ],
    "c": [
      0
    ],
    "e": "AWS CloudShell ofrece una terminal en el navegador preautenticada con tus permisos de la consola y con AWS CLI preinstalada. AWS SDK es para programar en lenguajes como Python o Java."
  },
  {
    "id": "C35",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa debe mover 200 servidores a AWS en tres meses, sin cambiar código ni arquitectura, para cumplir una fecha regulatoria. ¿Qué estrategia de migración es?",
    "o": [
      "Rehost",
      "Replatform",
      "Refactor",
      "Repurchase"
    ],
    "c": [
      0
    ],
    "e": "Rehost mueve los servidores tal cual a EC2. Replatform cambia algunos componentes; Refactor reescribe; Repurchase reemplaza por SaaS."
  },
  {
    "id": "C36",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa reescribe su aplicación monolítica como microservicios serverless para reducir el esfuerzo operativo. ¿Qué estrategia de las 7 R aplica?",
    "o": [
      "Refactor",
      "Rehost",
      "Relocate",
      "Retain"
    ],
    "c": [
      0
    ],
    "e": "Refactor o re-architect cambia la arquitectura para aprovechar servicios nativos. Rehost mueve tal cual; Relocate traslada plataformas; Retain conserva la aplicación."
  },
  {
    "id": "C37",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa traslada sus máquinas virtuales de VMware a AWS sin cambiar la arquitectura ni el sistema operativo. ¿Qué estrategia de migración aplica?",
    "o": [
      "Relocate",
      "Refactor",
      "Repurchase",
      "Retire"
    ],
    "c": [
      0
    ],
    "e": "Relocate mueve la plataforma virtual sin rediseñar la aplicación. Refactor reescribe; Repurchase reemplaza por SaaS; Retire apaga lo que ya no se usa."
  },
  {
    "id": "C38",
    "b": 13,
    "d": "Conceptos",
    "m": false,
    "q": "Durante el inventario, una empresa descubre una aplicación heredada que nadie usa desde hace dos años y decide apagarla. ¿Qué estrategia aplica?",
    "o": [
      "Retire",
      "Retain",
      "Rehost",
      "Replatform"
    ],
    "c": [
      0
    ],
    "e": "Retire elimina aplicaciones que ya no aportan valor. Retain conserva una aplicación por cumplimiento; Rehost la mueve; Replatform la moderniza."
  },
  {
    "id": "C39",
    "b": 13,
    "d": "Conceptos",
    "m": true,
    "q": "Selecciona TRES estrategias de migración de las 7 R.",
    "o": [
      "Rehost",
      "Replatform",
      "Refactor",
      "Reconnect",
      "Rebalance"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Rehost, Replatform y Refactor son estrategias de las 7 R. Reconnect y Rebalance no forman parte del marco."
  },
  {
    "id": "C40",
    "b": 13,
    "d": "Conceptos",
    "m": true,
    "q": "Selecciona TRES perspectivas del AWS CAF.",
    "o": [
      "Negocio",
      "Personas",
      "Gobernanza",
      "Confiabilidad",
      "Sostenibilidad"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Negocio, Personas y Gobernanza son perspectivas del CAF. Confiabilidad y Sostenibilidad son pilares de Well-Architected."
  },
  {
    "id": "C41",
    "b": 11,
    "d": "Conceptos",
    "m": true,
    "q": "Selecciona DOS afirmaciones correctas sobre la infraestructura global de AWS.",
    "o": [
      "Una Región de AWS consta de múltiples Zonas de Disponibilidad aisladas y físicamente separadas",
      "Cada Zona de Disponibilidad incluye uno o más centros de datos con energía y conectividad redundantes",
      "Una Zona de Disponibilidad abarca varias Regiones geográficas para garantizar continuidad",
      "Los datos almacenados en una Región se replican automáticamente en todas las demás Regiones por defecto",
      "Las ubicaciones de borde (Edge Locations) sirven para ejecutar bases de datos relacionales Amazon RDS"
    ],
    "c": [
      0,
      1
    ],
    "e": "Una Región contiene múltiples Zonas de Disponibilidad (AZ) aisladas, y cada AZ se compone de uno o más datacenters discretos. Las AZ no abarcan regiones ni AWS replica tus datos entre regiones sin que lo configures."
  },
  {
    "id": "C42",
    "b": 11,
    "d": "Conceptos",
    "m": true,
    "q": "Selecciona TRES factores que se deben evaluar al elegir una región de AWS.",
    "o": [
      "Requisitos legales y residencia de datos",
      "Latencia para los usuarios",
      "Servicios disponibles y costo",
      "Cantidad de usuarios de IAM",
      "Número de buckets de S3"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Cumplimiento, latencia, servicios y costo son criterios de región. Los usuarios de IAM y los buckets no determinan la ubicación."
  },
  {
    "id": "C43",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa mantiene su datacenter para datos regulados y usa AWS para el sitio web y el análisis. ¿Qué modelo de despliegue describe esta arquitectura?",
    "o": [
      "Nube híbrida",
      "Nube pública",
      "Nube privada",
      "Nube comunitaria"
    ],
    "c": [
      0
    ],
    "e": "La nube híbrida conecta infraestructura local con servicios de nube. La pública usa solo AWS; la privada solo infraestructura dedicada; la comunitaria comparte infraestructura entre organizaciones."
  },
  {
    "id": "C44",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "Un equipo usa un correo electrónico corporativo totalmente gestionado por el proveedor y no administra servidores, sistema operativo ni la aplicación. ¿Qué modelo de servicio es?",
    "o": [
      "Software como servicio (SaaS)",
      "Infraestructura como servicio (IaaS)",
      "Plataforma como servicio (PaaS)",
      "Local (on-premises)"
    ],
    "c": [
      0
    ],
    "e": "SaaS entrega la aplicación completa. IaaS entrega cómputo y red; PaaS entrega una plataforma para desplegar código; on-premises implica administrar todo."
  },
  {
    "id": "C45",
    "b": 2,
    "d": "Conceptos",
    "m": true,
    "q": "Selecciona DOS responsabilidades que corresponden SIEMPRE a AWS según el Modelo de Responsabilidad Compartida, sin importar el servicio utilizado.",
    "o": [
      "Proteger la seguridad física y el control de acceso biométrico de los centros de datos",
      "Mantener y asegurar el hardware físico, la red global y la capa de virtualización (hipervisor)",
      "Configurar las políticas de mínimo privilegio para los usuarios y roles de IAM",
      "Clasificar la sensibilidad de los datos almacenados en los buckets de Amazon S3",
      "Aplicar los parches del sistema operativo invitado en las instancias Amazon EC2"
    ],
    "c": [
      0,
      1
    ],
    "e": "AWS es siempre responsable de la seguridad \"de\" la nube: instalaciones físicas, hardware, red global e hipervisor. IAM, los datos del cliente y el SO invitado de EC2 corresponden al cliente."
  },
  {
    "id": "C46",
    "b": 11,
    "d": "Conceptos",
    "m": false,
    "q": "Una empresa quiere que las imágenes de su catálogo se sirvan desde la ubicación más cercana al usuario. ¿Qué componente de la infraestructura global de AWS se usa para eso?",
    "o": [
      "Ubicaciones de borde",
      "Zonas de disponibilidad",
      "Regiones",
      "Local Zones"
    ],
    "c": [
      0
    ],
    "e": "Las ubicaciones de borde cachean contenido cerca del usuario. Las zonas de disponibilidad son datacenters dentro de una región; las regiones agrupan zonas; Local Zones acercan cómputo, no solo caché."
  },
  {
    "id": "C47",
    "b": 1,
    "d": "Conceptos",
    "m": false,
    "q": "¿Cuál es un ejemplo de gasto operativo (OpEx) en AWS?",
    "o": [
      "El pago mensual por las horas de uso de EC2",
      "La compra de servidores para el datacenter",
      "La construcción de una sala de servidores",
      "La compra de una licencia perpetua de hardware"
    ],
    "c": [
      0
    ],
    "e": "OpEx es el gasto recurrente por uso, como EC2 por hora. Comprar servidores, construir salas o adquirir hardware son gastos de capital (CapEx)."
  },
  {
    "id": "C48",
    "b": 1,
    "d": "Conceptos",
    "m": true,
    "q": "Una empresa prepara el caso de negocio para migrar su infraestructura local a AWS. Selecciona DOS ventajas económicas y operativas válidas de la nube de AWS.",
    "o": [
      "Cambiar el gasto de capital anticipado (CapEx) por un gasto variable (OpEx) según el consumo real",
      "Aprovisionar recursos en minutos para aumentar la velocidad y la agilidad de experimentación",
      "Transferir a AWS el 100% de la responsabilidad sobre la seguridad de los datos y los permisos de usuario",
      "Garantizar un costo mensual fijo e idéntico sin importar cuántos recursos se enciendan",
      "Eliminar la necesidad de diseñar arquitecturas en múltiples Zonas de Disponibilidad"
    ],
    "c": [
      0,
      1
    ],
    "e": "Cambiar CapEx por gasto variable y ganar agilidad al aprovisionar en minutos son dos de las 6 ventajas de la nube. La seguridad sigue siendo compartida y el pago varía según el consumo."
  },
  {
    "id": "S01",
    "b": 2,
    "d": "Seguridad",
    "m": true,
    "q": "Selecciona TRES responsabilidades del cliente al ejecutar una aplicación en Amazon EC2.",
    "o": [
      "Parchear el sistema operativo invitado",
      "Configurar los security groups",
      "Gestionar los datos y las aplicaciones",
      "Mantener la seguridad física del datacenter",
      "Reemplazar el hardware del servidor"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "En EC2 el cliente gestiona el sistema operativo invitado, los security groups, las aplicaciones y los datos. La seguridad física y el hardware son responsabilidad de AWS."
  },
  {
    "id": "S02",
    "b": 2,
    "d": "Seguridad",
    "m": false,
    "q": "Un auditor pregunta quién controla el acceso físico, la vigilancia y el suministro eléctrico de las instalaciones donde corre una instancia EC2. ¿Quién es responsable?",
    "o": [
      "AWS",
      "El cliente",
      "El proveedor de internet del cliente",
      "El usuario root de la cuenta"
    ],
    "c": [
      0
    ],
    "e": "La seguridad física de las instalaciones es responsabilidad de AWS dentro del modelo de responsabilidad compartida. El cliente no accede a esos edificios; su proveedor de internet y el usuario root no gestionan el datacenter de AWS."
  },
  {
    "id": "S03",
    "b": 2,
    "d": "Seguridad",
    "m": false,
    "q": "En Amazon RDS, ¿qué tarea sigue siendo responsabilidad del cliente?",
    "o": [
      "Aplicar parches al motor de base de datos",
      "Gestionar usuarios y permisos de la base de datos",
      "Mantener el hardware del servidor",
      "Actualizar el hipervisor"
    ],
    "c": [
      1
    ],
    "e": "RDS es un servicio gestionado: AWS parchea el motor y el sistema operativo subyacente. El cliente sigue gestionando datos, usuarios, permisos y grupos de seguridad."
  },
  {
    "id": "S04",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa incorpora diez analistas que deben recibir los mismos permisos de solo lectura en S3. ¿Qué práctica de IAM reduce el trabajo de administración?",
    "o": [
      "Crear un grupo de IAM con la política y añadir a los analistas",
      "Crear diez usuarios con políticas escritas una por una",
      "Compartir la cuenta root entre los analistas",
      "Adjuntar la política a cada bucket de S3"
    ],
    "c": [
      0
    ],
    "e": "Un grupo de IAM agrupa usuarios y recibe políticas compartidas, así se administra un solo conjunto de permisos. Las políticas por usuario duplican trabajo; la cuenta root no se comparte; las políticas de bucket no sustituyen la gestión de identidades."
  },
  {
    "id": "S05",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una aplicación en EC2 necesita leer objetos de S3 sin almacenar credenciales. ¿Qué debe usar?",
    "o": [
      "Un rol de IAM asociado a la instancia",
      "Un usuario de IAM con access key en el código",
      "La cuenta root",
      "Una política de bucket pública"
    ],
    "c": [
      0
    ],
    "e": "Un rol entrega credenciales temporales y evita claves de largo plazo en el código. Una política pública expondría los datos y no es una buena práctica."
  },
  {
    "id": "S06",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita conservar la cuenta root para tareas de facturación excepcionales, pero quiere reducir el riesgo de que sea comprometida. ¿Qué configuración es la más adecuada?",
    "o": [
      "Habilitar MFA en la cuenta root, eliminar sus claves de acceso (Access Keys) y usar roles o usuarios de IAM para las tareas diarias",
      "Asociar una política administrada de ReadOnlyAccess directamente al usuario root de la cuenta",
      "Aplicar un límite de permisos (Permissions Boundary) sobre el usuario root para restringir el acceso a facturación",
      "Almacenar las claves de acceso del usuario root en un bucket de Amazon S3 con cifrado predeterminado"
    ],
    "c": [
      0
    ],
    "e": "La cuenta root debe tener MFA, usarse solo para tareas que la requieren y no tener access keys. Usarla a diario, repartir claves o compartir la contraseña amplía el impacto de un compromiso."
  },
  {
    "id": "S07",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Un desarrollador solo necesita leer un bucket específico durante una migración de dos semanas. ¿Qué principio de IAM aplica?",
    "o": [
      "Mínimo privilegio",
      "Federación de identidades",
      "Acceso público",
      "Rotación de claves"
    ],
    "c": [
      0
    ],
    "e": "El mínimo privilegio concede solo las acciones y recursos necesarios durante el tiempo necesario. La federación y la rotación son mecanismos de acceso; el acceso público expone los datos."
  },
  {
    "id": "S08",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Un usuario tiene un Allow para s3:GetObject y un Deny explícito para el mismo recurso. ¿Qué ocurre?",
    "o": [
      "Se deniega el acceso",
      "Se permite por el Allow",
      "Depende de la región",
      "Se permite solo por HTTPS"
    ],
    "c": [
      0
    ],
    "e": "En IAM, un Deny explícito siempre prevalece sobre cualquier Allow. La única forma de permitir la acción es eliminar o modificar el Deny."
  },
  {
    "id": "S09",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa con 40 cuentas de AWS quiere que sus empleados inicien sesión una vez y accedan a las cuentas según su rol, sin crear un usuario IAM por cuenta. ¿Qué servicio debe usar?",
    "o": [
      "AWS IAM Identity Center",
      "Amazon Cognito",
      "AWS Secrets Manager",
      "Amazon GuardDuty"
    ],
    "c": [
      0
    ],
    "e": "IAM Identity Center centraliza el acceso de empleados y se integra con identidades corporativas. Cognito es para clientes de aplicaciones; Secrets Manager guarda secretos; GuardDuty detecta amenazas."
  },
  {
    "id": "S10",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una aplicación móvil necesita permitir que sus clientes se registren, inicien sesión y reciban tokens, sin que la empresa administre contraseñas en su base de datos. ¿Qué servicio encaja?",
    "o": [
      "Amazon Cognito",
      "AWS IAM Identity Center",
      "AWS Directory Service",
      "AWS Organizations"
    ],
    "c": [
      0
    ],
    "e": "Cognito gestiona identidades de clientes, registro, inicio de sesión y tokens. Identity Center es para empleados; Directory Service integra directorios; Organizations administra cuentas."
  },
  {
    "id": "S11",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "¿Qué servicio detecta actividad maliciosa en la cuenta, como minado de criptomonedas o acceso anómalo?",
    "o": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "Amazon Macie",
      "AWS Config"
    ],
    "c": [
      0
    ],
    "e": "GuardDuty analiza CloudTrail, VPC Flow Logs y DNS para detectar comportamiento sospechoso. No bloquea automáticamente; para bloquear se usan otros controles."
  },
  {
    "id": "S12",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una auditoría exige saber si hay números de tarjetas y documentos de identidad en buckets de S3. ¿Qué servicio permite descubrirlos y clasificarlos?",
    "o": [
      "Amazon Macie",
      "Amazon GuardDuty",
      "AWS Shield",
      "AWS KMS"
    ],
    "c": [
      0
    ],
    "e": "Macie descubre y clasifica datos sensibles en S3 mediante patrones y machine learning. GuardDuty detecta amenazas; Shield mitiga DDoS; KMS gestiona claves."
  },
  {
    "id": "S13",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "¿Qué servicio evalúa vulnerabilidades en instancias EC2 y en imágenes de contenedor?",
    "o": [
      "Amazon Inspector",
      "Amazon Detective",
      "AWS Security Hub",
      "AWS WAF"
    ],
    "c": [
      0
    ],
    "e": "Inspector escanea vulnerabilidades y exposición en EC2, Lambda y ECR. Detective investiga hallazgos; Security Hub los agrega."
  },
  {
    "id": "S14",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa recibe hallazgos de GuardDuty, Inspector y Config en varias cuentas y necesita una vista única con estándares de seguridad. ¿Qué servicio debe usar?",
    "o": [
      "AWS Security Hub",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "AWS Shield"
    ],
    "c": [
      0
    ],
    "e": "Security Hub agrega hallazgos y evalúa estándares como CIS o AWS Foundational Security Best Practices. CloudTrail registra API; Trusted Advisor recomienda; Shield protege contra DDoS."
  },
  {
    "id": "S15",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Un sitio recibe un ataque DDoS volumétrico que satura el ancho de banda y no es solo tráfico HTTP malicioso. ¿Qué servicio ofrece la mitigación principal?",
    "o": [
      "AWS Shield",
      "AWS WAF",
      "Amazon GuardDuty",
      "Amazon Macie"
    ],
    "c": [
      0
    ],
    "e": "Shield protege contra DDoS volumétricos y de red. WAF filtra HTTP de capa 7; GuardDuty detecta actividad sospechosa; Macie clasifica datos en S3."
  },
  {
    "id": "S16",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "¿Qué servicio filtra solicitudes HTTP maliciosas, como intentos de SQL injection?",
    "o": [
      "AWS WAF",
      "AWS Shield",
      "Una NACL",
      "AWS Security Hub"
    ],
    "c": [
      0
    ],
    "e": "WAF aplica reglas a tráfico HTTP/HTTPS y permite bloquear patrones como SQL injection o XSS. Shield es para DDoS y las NACL filtran a nivel de subred."
  },
  {
    "id": "S17",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa regulada necesita un módulo de seguridad de hardware dedicado, de un solo inquilino, para generar y custodiar sus propias claves. ¿Qué servicio debe elegir?",
    "o": [
      "AWS CloudHSM",
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS Certificate Manager"
    ],
    "c": [
      0
    ],
    "e": "CloudHSM ofrece un HSM dedicado y de un solo inquilino. KMS es un servicio gestionado multitenant; Secrets Manager guarda secretos; Certificate Manager gestiona certificados TLS."
  },
  {
    "id": "S18",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "¿Qué servicio almacena y rota automáticamente credenciales de bases de datos?",
    "o": [
      "AWS Secrets Manager",
      "AWS KMS",
      "AWS Certificate Manager",
      "AWS CloudHSM"
    ],
    "c": [
      0
    ],
    "e": "Secrets Manager guarda secretos y puede rotarlos automáticamente. KMS gestiona claves criptográficas; ACM gestiona certificados TLS."
  },
  {
    "id": "S19",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Después de un incidente, un equipo necesita saber qué identidad eliminó un grupo de seguridad y desde qué dirección IP. ¿Qué servicio contiene ese registro?",
    "o": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    "c": [
      0
    ],
    "e": "CloudTrail registra llamadas a la API con identidad, hora y origen. CloudWatch muestra métricas; Config guarda el estado de configuración; Trusted Advisor emite recomendaciones."
  },
  {
    "id": "S20",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "El equipo legal necesita descargar los informes SOC 2 e ISO 27001 de AWS para responder a un cliente. ¿Dónde los obtiene?",
    "o": [
      "AWS Artifact",
      "AWS Config",
      "AWS CloudTrail",
      "AWS Health Dashboard"
    ],
    "c": [
      0
    ],
    "e": "Artifact es el portal de informes y acuerdos de cumplimiento de AWS. Config y CloudTrail son servicios del cliente; Health Dashboard informa el estado de los servicios."
  },
  {
    "id": "S21",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Una cuenta tiene una política de IAM que permite s3:PutObject, pero una política de control de servicios (SCP) de AWS Organizations deniega esa acción. ¿Qué ocurre?",
    "o": [
      "La acción se deniega porque la SCP limita el permiso máximo",
      "La acción se permite porque la política de IAM es más específica",
      "La acción se permite solo desde la consola",
      "La SCP se ignora si el usuario tiene MFA"
    ],
    "c": [
      0
    ],
    "e": "Las SCP establecen el límite máximo de permisos de una cuenta; un deny explícito bloquea la acción aunque IAM la permita. No depende de la consola ni de MFA."
  },
  {
    "id": "S22",
    "b": 3,
    "d": "Seguridad",
    "m": true,
    "q": "Selecciona TRES elementos que pueden recibir políticas de permisos de IAM.",
    "o": [
      "Usuarios",
      "Grupos",
      "Roles",
      "Buckets de S3",
      "Instancias EC2"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Usuarios, grupos y roles son identidades de IAM y pueden recibir políticas. Los buckets usan políticas de recurso y las instancias asumen un rol; no reciben políticas de IAM directamente."
  },
  {
    "id": "S23",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere identificar buckets de S3 y roles que son accesibles desde fuera de su organización. ¿Qué servicio debe usar?",
    "o": [
      "IAM Access Analyzer",
      "Amazon GuardDuty",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    "c": [
      0
    ],
    "e": "Access Analyzer analiza políticas de recursos y encuentra accesos externos. GuardDuty detecta amenazas; Config evalúa configuración; Trusted Advisor recomienda buenas prácticas."
  },
  {
    "id": "S24",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Un auditor pide una lista de usuarios de IAM sin MFA y con claves de acceso antiguas. ¿Qué herramienta genera ese informe?",
    "o": [
      "El informe de credenciales de IAM",
      "AWS CloudTrail",
      "IAM Access Analyzer",
      "AWS Config"
    ],
    "c": [
      0
    ],
    "e": "El informe de credenciales muestra el estado de contraseñas, MFA y claves de cada usuario. CloudTrail registra actividad; Access Analyzer busca accesos externos; Config evalúa recursos."
  },
  {
    "id": "S25",
    "b": 3,
    "d": "Seguridad",
    "m": true,
    "q": "Selecciona DOS prácticas recomendadas por AWS para proteger el usuario raíz (Root User) de una cuenta.",
    "o": [
      "Habilitar la autenticación multifactor (MFA) en la cuenta del usuario raíz",
      "No utilizar el usuario raíz para las tareas cotidianas y eliminar sus claves de acceso (Access Keys)",
      "Compartir las credenciales del usuario raíz únicamente entre los administradores sénior del equipo",
      "Asignar el usuario raíz a un grupo de IAM con permisos restringidos de solo lectura",
      "Rotar las claves de acceso (Access Keys) del usuario raíz cada 90 días para usarlas en la AWS CLI"
    ],
    "c": [
      0,
      1
    ],
    "e": "El usuario raíz debe protegerse con MFA, no tener Access Keys activas y reservarse solo para tareas excepcionales de cuenta; además, el usuario root no pertenece a grupos de IAM."
  },
  {
    "id": "S26",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Además de la contraseña, un usuario debe introducir un código temporal de una aplicación autenticadora para iniciar sesión. ¿Qué control se aplica?",
    "o": [
      "Autenticación multifactor (MFA)",
      "Federación de identidades",
      "Mínimo privilegio",
      "Rotación de claves"
    ],
    "c": [
      0
    ],
    "e": "MFA combina dos o más factores, como contraseña y código temporal. La federación delega la identidad; el mínimo privilegio limita permisos; la rotación cambia claves."
  },
  {
    "id": "S27",
    "b": 11,
    "d": "Seguridad",
    "m": false,
    "q": "Una organización quiere impedir que cualquiera de sus cuentas cree recursos fuera de eu-west-1. ¿Qué mecanismo debe usar?",
    "o": [
      "Una política de control de servicios (SCP)",
      "Un security group",
      "Una política de bucket",
      "Una lista de control de acceso a la red (NACL)"
    ],
    "c": [
      0
    ],
    "e": "Las SCP pueden denegar acciones por región en todas las cuentas de una organización. Los security groups y las NACL filtran tráfico; las políticas de bucket protegen S3."
  },
  {
    "id": "S28",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita crear decenas de cuentas con una base de seguridad, registros centralizados y guardrails. ¿Qué servicio debe usar?",
    "o": [
      "AWS Control Tower",
      "AWS Organizations",
      "AWS IAM Identity Center",
      "AWS Config"
    ],
    "c": [
      0
    ],
    "e": "Control Tower automatiza un landing zone con cuentas, guardrails y registros. Organizations agrupa cuentas; Identity Center gestiona acceso; Config evalúa configuración."
  },
  {
    "id": "S29",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "El equipo de seguridad recibió una alerta de Amazon GuardDuty sobre llamadas API sospechosas y necesita analizar visualmente las relaciones entre direcciones IP, usuarios y recursos para hallar la causa raíz. ¿Qué servicio debe usar?",
    "o": [
      "Amazon Detective",
      "Amazon Inspector",
      "AWS Artifact",
      "Amazon Macie"
    ],
    "c": [
      0
    ],
    "e": "Amazon Detective correlaciona registros de CloudTrail, VPC Flow Logs y hallazgos de GuardDuty en grafos interactivos para investigar la causa raíz de un incidente."
  },
  {
    "id": "S30",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "¿Qué permite que los empleados inicien sesión en AWS con las cuentas de Active Directory de la empresa, sin crear un usuario de IAM para cada uno?",
    "o": [
      "La federación de identidades",
      "El uso de access keys compartidas",
      "La autenticación multifactor",
      "Una política de bucket pública"
    ],
    "c": [
      0
    ],
    "e": "La federación confía en un proveedor de identidades externo y emite credenciales temporales. Las access keys compartidas son una mala práctica; MFA añade un factor; una política pública expone datos."
  },
  {
    "id": "S31",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita permitir que una cuenta asociada acceda directamente a un bucket específico de Amazon S3 adjuntando los permisos al propio bucket en lugar de a un usuario. ¿Qué elemento debe configurar?",
    "o": [
      "Una política basada en recursos (Bucket Policy)",
      "Un grupo de usuarios de IAM",
      "Un informe de credenciales de IAM",
      "Una regla de AWS Config"
    ],
    "c": [
      0
    ],
    "e": "Las políticas basadas en recursos (como las Bucket Policies de S3) se adjuntan directamente al recurso y especifican qué principales (incluidas otras cuentas) tienen acceso."
  },
  {
    "id": "S32",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una aplicación necesita cifrar datos en S3 con una clave administrada por la empresa y registrar cada uso de la clave para auditoría. ¿Qué servicio debe usar?",
    "o": [
      "AWS Key Management Service (KMS)",
      "AWS CloudHSM",
      "AWS Secrets Manager",
      "AWS Certificate Manager"
    ],
    "c": [
      0
    ],
    "e": "KMS administra claves, se integra con S3 y registra el uso en CloudTrail. CloudHSM es un HSM dedicado; Secrets Manager guarda secretos; Certificate Manager gestiona certificados TLS."
  },
  {
    "id": "S33",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa migra servidores Windows a Amazon EC2 y necesita unirlos a un dominio de Active Directory totalmente gestionado en AWS. ¿Qué servicio debe elegir?",
    "o": [
      "AWS Directory Service (AWS Managed Microsoft AD)",
      "Amazon Cognito",
      "AWS Secrets Manager",
      "AWS Certificate Manager"
    ],
    "c": [
      0
    ],
    "e": "AWS Directory Service ofrece Microsoft Active Directory gestionado en la nube para unir instancias EC2 Windows a un dominio y autenticar usuarios con credenciales de AD."
  },
  {
    "id": "S34",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Un equipo busca almacenar cadenas de configuración y parámetros de aplicación de forma jerárquica y cifrada sin costo adicional en el nivel estándar. ¿Qué funcionalidad debe elegir?",
    "o": [
      "AWS Systems Manager Parameter Store",
      "AWS Certificate Manager",
      "AWS Artifact",
      "AWS Shield Standard"
    ],
    "c": [
      0
    ],
    "e": "Parameter Store (de AWS Systems Manager) almacena parámetros de configuración y textos cifrados de forma jerárquica y gratuita en su nivel estándar."
  },
  {
    "id": "S35",
    "b": 2,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa migra su backend a funciones de AWS Lambda. Según el Modelo de Responsabilidad Compartida, ¿qué tarea sigue siendo responsabilidad exclusiva del cliente?",
    "o": [
      "Configurar los permisos del rol de IAM y proteger la lógica del código de la función",
      "Aplicar parches al sistema operativo donde se ejecuta Lambda",
      "Mantener el hipervisor y los servidores físicos del centro de datos",
      "Gestionar el escalado de la infraestructura subyacente del entorno de ejecución"
    ],
    "c": [
      0
    ],
    "e": "En servicios serverless como AWS Lambda, AWS gestiona los servidores, el sistema operativo y el entorno de ejecución, pero el cliente es responsable de su código, sus datos y los permisos del rol de IAM."
  },
  {
    "id": "S36",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Un sitio web necesita un certificado TLS para CloudFront que se renueve automáticamente. ¿Qué servicio debe usar?",
    "o": [
      "AWS Certificate Manager (ACM)",
      "AWS KMS",
      "AWS Secrets Manager",
      "AWS Identity and Access Management (IAM)"
    ],
    "c": [
      0
    ],
    "e": "ACM aprovisiona y renueva certificados TLS para servicios integrados como CloudFront. KMS gestiona claves; Secrets Manager guarda secretos; IAM gestiona identidades."
  },
  {
    "id": "S37",
    "b": 2,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa almacena documentos financieros en Amazon S3. Según el Modelo de Responsabilidad Compartida, ¿de qué es responsable AWS?",
    "o": [
      "Mantener la durabilidad física del almacenamiento y reemplazar los discos averiados en los centros de datos",
      "Configurar las Bucket Policies para evitar que los documentos sean públicos",
      "Clasificar qué documentos contienen datos personales de clientes",
      "Decidir qué usuarios de IAM de la empresa pueden descargar los archivos"
    ],
    "c": [
      0
    ],
    "e": "En Amazon S3, AWS protege la infraestructura física, la red y la durabilidad del servicio; el cliente clasifica sus datos y configura los permisos de acceso y el cifrado."
  },
  {
    "id": "S38",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere detectar si un bucket de S3 se volvió público y conservar el historial de cambios de configuración del recurso. ¿Qué servicio debe usar?",
    "o": [
      "AWS Config",
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "Amazon Macie"
    ],
    "c": [
      0
    ],
    "e": "Config evalúa la configuración de los recursos y guarda su historial. CloudTrail registra la llamada que hizo el cambio, pero no evalúa el estado; GuardDuty y Macie tienen otros fines."
  },
  {
    "id": "S39",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Una regla de AWS Config detecta que un security group permite SSH desde cualquier IP. ¿Qué función permite corregirlo automáticamente?",
    "o": [
      "Las acciones de remediación de AWS Config",
      "Las alarmas de CloudWatch",
      "Los informes de AWS Artifact",
      "Las reglas de AWS WAF"
    ],
    "c": [
      0
    ],
    "e": "Config puede ejecutar una acción de remediación, como una función Lambda o Systems Manager, cuando un recurso no cumple. CloudWatch alerta; Artifact informa; WAF filtra HTTP."
  },
  {
    "id": "S40",
    "b": 4,
    "d": "Seguridad",
    "m": true,
    "q": "Selecciona DOS servicios de AWS cuyo propósito principal es detectar amenazas o vulnerabilidades de seguridad en tu entorno.",
    "o": [
      "Amazon GuardDuty",
      "Amazon Inspector",
      "AWS Budgets",
      "AWS Artifact",
      "AWS Pricing Calculator"
    ],
    "c": [
      0,
      1
    ],
    "e": "Amazon GuardDuty detecta amenazas analizando logs con machine learning y Amazon Inspector escanea cargas de trabajo (EC2, ECR, Lambda) en busca de vulnerabilidades de software."
  },
  {
    "id": "S41",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Un equipo de seguridad quiere que los administradores se conecten a instancias Amazon EC2 para tareas de mantenimiento sin abrir el puerto 22 (SSH), sin gestionar claves SSH y auditando los comandos ejecutados. ¿Qué herramienta debe usar?",
    "o": [
      "AWS Systems Manager Session Manager",
      "Amazon Inspector",
      "AWS Trusted Advisor",
      "AWS Artifact"
    ],
    "c": [
      0
    ],
    "e": "Session Manager (parte de AWS Systems Manager) permite iniciar sesiones seguras en instancias EC2 desde el navegador o la CLI sin abrir puertos de entrada ni usar hosts bastión."
  },
  {
    "id": "S42",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita protección DDoS con acceso al equipo de respuesta de AWS y protección frente a costos de escalado durante un ataque. ¿Qué opción debe contratar?",
    "o": [
      "AWS Shield Advanced",
      "AWS Shield Standard",
      "AWS WAF",
      "AWS Firewall Manager"
    ],
    "c": [
      0
    ],
    "e": "Shield Advanced añade respuesta del equipo DDoS y protección de costos. Shield Standard es automático y gratuito; WAF filtra HTTP; Firewall Manager centraliza políticas."
  },
  {
    "id": "S43",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una aplicación recibe miles de solicitudes por minuto desde un grupo pequeño de direcciones IP. ¿Qué regla de AWS WAF ayuda a bloquear ese patrón?",
    "o": [
      "Una regla basada en tasa",
      "Una regla de geolocalización",
      "Una lista de control de acceso a la red",
      "Una política de bucket"
    ],
    "c": [
      0
    ],
    "e": "Una regla basada en tasa bloquea clientes que superan un umbral de solicitudes. La geolocalización filtra por país; las NACL filtran IP y puertos sin inspección HTTP; las políticas de bucket protegen S3."
  },
  {
    "id": "S44",
    "b": 4,
    "d": "Seguridad",
    "m": true,
    "q": "Selecciona TRES tipos de políticas que AWS Firewall Manager puede aplicar de forma centralizada.",
    "o": [
      "Reglas de AWS WAF",
      "Protección de AWS Shield Advanced",
      "Políticas de security groups",
      "Presupuestos de AWS",
      "Claves de AWS KMS"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Firewall Manager centraliza WAF, Shield Advanced y security groups en varias cuentas. Los presupuestos son de AWS Budgets y las claves son de KMS."
  },
  {
    "id": "S45",
    "b": 8,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita inspeccionar y filtrar tráfico de una VPC, incluido tráfico que no es HTTP, con reglas de red con estado. ¿Qué servicio debe usar?",
    "o": [
      "AWS Network Firewall",
      "AWS WAF",
      "AWS Shield",
      "Una lista de control de acceso a la red (NACL)"
    ],
    "c": [
      0
    ],
    "e": "Network Firewall inspecciona tráfico de VPC con reglas con estado. WAF solo HTTP/HTTPS; Shield mitiga DDoS; las NACL filtran sin inspección profunda."
  },
  {
    "id": "S46",
    "b": 8,
    "d": "Seguridad",
    "m": false,
    "q": "Una NACL permite la solicitud entrante al puerto 443, pero no permite los puertos efímeros de respuesta. ¿Qué ocurre con la conexión?",
    "o": [
      "La respuesta se bloquea porque la NACL es stateless",
      "La conexión funciona porque el security group es stateful",
      "La conexión funciona porque la NACL solo aplica a la entrada",
      "La respuesta se permite automáticamente por el Internet Gateway"
    ],
    "c": [
      0
    ],
    "e": "La NACL evalúa cada dirección por separado y es stateless; hay que permitir los puertos efímeros de vuelta. El security group es stateful, pero no anula la NACL."
  },
  {
    "id": "S47",
    "b": 8,
    "d": "Seguridad",
    "m": true,
    "q": "Tras un incidente de seguridad, un analista necesita revisar tanto las llamadas realizadas a la API de AWS como el tráfico IP aceptado y rechazado en las interfaces de red. Selecciona DOS fuentes de registro que debe consultar.",
    "o": [
      "AWS CloudTrail",
      "VPC Flow Logs",
      "Amazon S3 Inventory",
      "AWS Cost and Usage Report (CUR)",
      "IAM Credential Report"
    ],
    "c": [
      0,
      1
    ],
    "e": "AWS CloudTrail registra todas las llamadas a la API (quién hizo qué y cuándo) y VPC Flow Logs captura los metadatos del tráfico IP aceptado o rechazado en las interfaces de red de la VPC."
  },
  {
    "id": "S48",
    "b": 8,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere consumir un servicio de otra VPC sin exponerlo a internet ni conectar ambas redes con peering. ¿Qué solución debe usar?",
    "o": [
      "AWS PrivateLink",
      "VPC peering",
      "AWS Transit Gateway",
      "Un Internet Gateway"
    ],
    "c": [
      0
    ],
    "e": "PrivateLink expone un servicio mediante una interfaz de red privada. Peering y Transit Gateway conectan redes completas; un Internet Gateway expone la VPC a internet."
  },
  {
    "id": "S49",
    "b": 9,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita conectar su datacenter a AWS por internet con cifrado y un despliegue rápido, con presupuesto limitado. ¿Qué opción debe elegir?",
    "o": [
      "AWS Site-to-Site VPN",
      "AWS Direct Connect",
      "Amazon CloudFront",
      "Un NAT Gateway"
    ],
    "c": [
      0
    ],
    "e": "Site-to-Site VPN cifra el túnel por internet y se despliega rápido. Direct Connect es privado y dedicado, pero tarda más y no cifra por defecto; CloudFront entrega contenido; NAT da salida a internet."
  },
  {
    "id": "S50",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere que sus equipos de desarrollo desplieguen únicamente arquitecturas preaprobadas por seguridad sin concederles permisos directos para configurar cualquier servicio por su cuenta. ¿Qué servicio debe utilizar?",
    "o": [
      "AWS Service Catalog",
      "AWS Artifact",
      "Amazon Detective",
      "AWS Cost Explorer"
    ],
    "c": [
      0
    ],
    "e": "AWS Service Catalog permite crear y administrar catálogos de productos de TI (plantillas de CloudFormation preaprobadas) para que los usuarios los aprovisionen respetando las políticas de gobernanza."
  },
  {
    "id": "S51",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Un administrador revisa AWS Trusted Advisor para detectar grupos de seguridad con puertos abiertos, falta de MFA en la cuenta root y cuotas cercanas al límite. ¿Cuáles son las seis categorías que evalúa AWS Trusted Advisor?",
    "o": [
      "Optimización de costos, Rendimiento, Seguridad, Tolerancia a fallos, Límites de servicio y Excelencia operativa",
      "Negocio, Personas, Gobernanza, Plataforma, Seguridad y Operaciones",
      "Cómputo, Almacenamiento, Bases de datos, Redes, Seguridad e Inteligencia Artificial",
      "Rehost, Replatform, Refactor, Repurchase, Retain y Retire"
    ],
    "c": [
      0
    ],
    "e": "AWS Trusted Advisor inspecciona tu cuenta en seis categorías: Optimización de costos, Rendimiento, Seguridad, Tolerancia a fallos, Límites de servicio (Service Quotas) y Excelencia operativa."
  },
  {
    "id": "S52",
    "b": 2,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa del sector financiero migra una aplicación a AWS y necesita cumplir con el estándar PCI-DSS. ¿Cómo se aplica el cumplimiento normativo según el Modelo de Responsabilidad Compartida?",
    "o": [
      "Es una responsabilidad compartida: AWS certifica su infraestructura física y los servicios subyacentes, y el cliente debe diseñar y configurar su carga de trabajo cumpliendo la norma",
      "La aplicación hereda automáticamente el 100% del cumplimiento PCI-DSS por el simple hecho de desplegarse en AWS",
      "El cliente debe auditar personalmente los centros de datos físicos de AWS cada trimestre",
      "AWS redacta y certifica las políticas internas de seguridad de los empleados del cliente"
    ],
    "c": [
      0
    ],
    "e": "El cumplimiento es compartido: AWS certifica la infraestructura subyacente (cuyos reportes descargas en AWS Artifact), pero el cliente es responsable de que su propia arquitectura y configuración cumplan la norma."
  },
  {
    "id": "S53",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere automatizar la recopilación de evidencia para una auditoría interna y mapearla a un marco de control. ¿Qué servicio debe usar?",
    "o": [
      "AWS Audit Manager",
      "AWS Artifact",
      "AWS Config",
      "AWS CloudTrail"
    ],
    "c": [
      0
    ],
    "e": "Audit Manager recopila evidencia y la asocia a marcos de control. Artifact entrega informes de AWS; Config evalúa configuración; CloudTrail registra llamadas a la API."
  },
  {
    "id": "S54",
    "b": 2,
    "d": "Seguridad",
    "m": false,
    "q": "Por política de seguridad, una institución bancaria exige garantizar que los discos duros averiados en los centros de datos sean destruidos de forma segura antes de desecharse. En AWS, ¿quién realiza esta tarea?",
    "o": [
      "AWS, como parte de la seguridad física de la nube siguiendo estándares rigurosos de destrucción de medios",
      "El cliente, solicitando el envío físico de los discos utilizados por sus instancias EC2",
      "El equipo de soporte del cliente mediante AWS Systems Manager",
      "Un socio externo contratado en AWS Marketplace"
    ],
    "c": [
      0
    ],
    "e": "La desmagnetización y destrucción física de discos de almacenamiento al final de su vida útil forma parte de la seguridad física de la nube y es 100% responsabilidad de AWS."
  },
  {
    "id": "S55",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere cifrar el tráfico entre los navegadores de sus usuarios y su sitio web alojado en AWS. ¿Qué mecanismo debe usar?",
    "o": [
      "TLS con un certificado de AWS Certificate Manager",
      "Cifrado en reposo con AWS KMS",
      "Cifrado del lado del servidor de S3",
      "Un módulo AWS CloudHSM"
    ],
    "c": [
      0
    ],
    "e": "TLS protege los datos en tránsito entre el cliente y el sitio. KMS y SSE cifran en reposo; CloudHSM custodia claves, no sustituye TLS."
  },
  {
    "id": "S56",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere reducir el riesgo de que un bucket de S3 quede expuesto públicamente por error. ¿Qué medida debe aplicar primero?",
    "o": [
      "Activar Block Public Access en la cuenta y en el bucket",
      "Activar el versionado del bucket",
      "Activar la transferencia acelerada",
      "Crear una copia del bucket en otra región"
    ],
    "c": [
      0
    ],
    "e": "Block Public Access impide el acceso público aunque una política o ACL lo permita. El versionado protege contra borrados, la transferencia acelerada mejora la carga y la copia en otra región ayuda a la recuperación, pero ninguna bloquea la exposición pública."
  },
  {
    "id": "S57",
    "b": 4,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa quiere que un usuario externo descargue un objeto privado de S3 durante 15 minutos, sin darle credenciales de AWS. ¿Qué debe generar?",
    "o": [
      "Una URL prefirmada",
      "Un usuario de IAM temporal",
      "Una política de bucket pública",
      "Una ACL pública"
    ],
    "c": [
      0
    ],
    "e": "Una URL prefirmada concede acceso temporal a un objeto privado. Un usuario de IAM entrega credenciales; una política o ACL pública expone el objeto de forma permanente."
  },
  {
    "id": "S58",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Un equipo quiere revisar qué permisos de un rol se usan realmente y retirar los que no se necesitan. ¿Qué herramienta de IAM le ayuda?",
    "o": [
      "IAM Access Advisor",
      "AWS Shield",
      "AWS Artifact",
      "Amazon Inspector"
    ],
    "c": [
      0
    ],
    "e": "Access Advisor muestra los servicios a los que accedió un rol y ayuda a reducir permisos. Shield mitiga DDoS; Artifact informa cumplimiento; Inspector busca vulnerabilidades."
  },
  {
    "id": "S59",
    "b": 3,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa permite que sus desarrolladores creen roles, pero debe impedir que otorguen más permisos de los que la organización autoriza. ¿Qué mecanismo debe usar?",
    "o": [
      "Un límite de permisos (permissions boundary)",
      "Una política de bucket",
      "Una lista de control de acceso a la red",
      "Un grupo de Auto Scaling"
    ],
    "c": [
      0
    ],
    "e": "El límite de permisos establece el máximo que puede tener una identidad, aunque su política permita más. Las políticas de bucket protegen S3; las NACL filtran red; Auto Scaling no gestiona identidades."
  },
  {
    "id": "S60",
    "b": 12,
    "d": "Seguridad",
    "m": false,
    "q": "Una empresa necesita automatizar la aplicación programada de parches de seguridad del sistema operativo en una flota de 150 instancias Amazon EC2 y obtener reportes de cumplimiento. ¿Qué herramienta debe usar?",
    "o": [
      "AWS Systems Manager Patch Manager",
      "AWS Certificate Manager",
      "Amazon Cognito",
      "AWS Secrets Manager"
    ],
    "c": [
      0
    ],
    "e": "Patch Manager, una capacidad de AWS Systems Manager, automatiza el proceso de aplicar parches de seguridad tanto a sistemas operativos Windows como Linux en instancias EC2 y servidores híbridos."
  },
  {
    "id": "T01",
    "b": 5,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa ejecutará un servidor web con demanda constante durante 3 años y quiere el mayor ahorro con compromiso. ¿Qué modelo de compra es el más adecuado?",
    "o": [
      "Reserved Instances",
      "Spot",
      "On-Demand",
      "Dedicated Hosts"
    ],
    "c": [
      0
    ],
    "e": "Reserved Instances ofrece descuento por compromiso de 1 o 3 años para cargas predecibles. Savings Plans es otra opción válida, pero no aparece en las alternativas."
  },
  {
    "id": "T02",
    "b": 5,
    "d": "Tecnología",
    "m": false,
    "q": "Una carga de procesamiento por lotes tolera interrupciones y busca el menor costo posible. ¿Qué modelo de compra debe usar?",
    "o": [
      "Spot",
      "On-Demand",
      "Reserved Instances",
      "Dedicated Hosts"
    ],
    "c": [
      0
    ],
    "e": "Spot puede interrumpirse, por eso es mucho más barato y adecuado para lotes tolerantes a fallos. Para cargas críticas o constantes no sería la primera opción."
  },
  {
    "id": "T03",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa guarda millones de objetos críticos y quiere una durabilidad de 99,999999999% sin administrar réplicas entre instalaciones. ¿Qué servicio cumple ese requisito?",
    "o": [
      "Amazon S3",
      "Amazon EBS",
      "Amazon EFS",
      "Instance Store"
    ],
    "c": [
      0
    ],
    "e": "S3 replica los objetos dentro de una región y ofrece 11 nueves de durabilidad. EBS es un volumen de bloque en una AZ; EFS es un sistema de archivos; Instance Store es efímero."
  },
  {
    "id": "T04",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa debe retener registros durante 7 años, casi nunca los consulta y tolera 12 horas de recuperación. ¿Qué clase de S3 es la más económica?",
    "o": [
      "S3 Glacier Deep Archive",
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Instant Retrieval"
    ],
    "c": [
      0
    ],
    "e": "Deep Archive es la clase de menor costo para retención a largo plazo con recuperación lenta. Standard-IA sigue siendo para acceso infrecuente pero con recuperación en milisegundos."
  },
  {
    "id": "T05",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Varias instancias EC2 Linux necesitan acceder al mismo sistema de archivos de forma simultánea. ¿Qué servicio deben usar?",
    "o": [
      "Amazon EFS",
      "Amazon EBS",
      "Amazon S3 Glacier",
      "Instance Store"
    ],
    "c": [
      0
    ],
    "e": "EFS es un sistema de archivos NFS elástico y compartido entre varias instancias. EBS es un volumen de bloque para una instancia y una AZ."
  },
  {
    "id": "T06",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "¿Cuál es el propósito principal de una configuración Multi-AZ en Amazon RDS?",
    "o": [
      "Alta disponibilidad y failover ante la caída de una AZ",
      "Escalar consultas de lectura",
      "Reducir el costo de almacenamiento",
      "Migrar datos a DynamoDB"
    ],
    "c": [
      0
    ],
    "e": "Multi-AZ mantiene una réplica síncrona en otra AZ y hace failover automático. No sirve para escalar lecturas; para eso están las réplicas de lectura."
  },
  {
    "id": "T07",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una base de datos relacional tiene muchas consultas de solo lectura y el equipo quiere descargar el servidor principal. ¿Qué debe usar?",
    "o": [
      "Una réplica de lectura",
      "Multi-AZ",
      "Un snapshot manual",
      "Una instancia Spot"
    ],
    "c": [
      0
    ],
    "e": "Las réplicas de lectura reciben replicación asíncrona y permiten distribuir consultas. Multi-AZ es para disponibilidad, no para rendimiento de lectura."
  },
  {
    "id": "T08",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación necesita una base NoSQL clave-valor, sin servidores que administrar, que escale a millones de solicitudes y mantenga latencia de milisegundos. ¿Qué servicio encaja?",
    "o": [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon Neptune"
    ],
    "c": [
      0
    ],
    "e": "DynamoDB es NoSQL clave-valor y documental, serverless y escalable. RDS es relacional; Redshift es un data warehouse; Neptune es una base de grafos."
  },
  {
    "id": "T09",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Un área de BI necesita ejecutar consultas SQL complejas sobre petabytes de datos históricos y alimentar tableros cada mañana. ¿Qué servicio es el más adecuado?",
    "o": [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
      "Amazon Aurora"
    ],
    "c": [
      0
    ],
    "e": "Redshift es un data warehouse columnar para analítica a gran escala. DynamoDB es NoSQL transaccional; ElastiCache es caché en memoria; Aurora es relacional transaccional."
  },
  {
    "id": "T10",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "Una instancia en una subred debe recibir tráfico desde internet. ¿Qué elemento de la VPC hace que esa subred sea pública?",
    "o": [
      "Una ruta al Internet Gateway en la tabla de rutas",
      "Un security group con la regla 0.0.0.0/0",
      "Un CIDR /16",
      "Una dirección IP privada"
    ],
    "c": [
      0
    ],
    "e": "La subred es pública por su tabla de rutas, que envía el tráfico a un Internet Gateway. Un security group permisivo no crea la ruta; el CIDR y la IP privada no determinan el acceso a internet."
  },
  {
    "id": "T11",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "¿Cuál es una diferencia correcta entre un security group y una NACL?",
    "o": [
      "El security group es stateful; la NACL es stateless",
      "El security group permite deny; la NACL solo allow",
      "La NACL protege una instancia; el security group protege una subred",
      "El security group se aplica a toda la VPC"
    ],
    "c": [
      0
    ],
    "e": "El security group es stateful y se aplica a instancias/ENI; la NACL es stateless y se aplica a subredes. La NACL permite allow y deny; el security group solo allow."
  },
  {
    "id": "T12",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "Instancias en una subred privada necesitan descargar actualizaciones de internet sin ser accesibles desde fuera. ¿Qué componente necesitan?",
    "o": [
      "Un NAT Gateway",
      "Un Internet Gateway conectado directamente",
      "VPC peering",
      "AWS Direct Connect"
    ],
    "c": [
      0
    ],
    "e": "El NAT Gateway permite salida a internet desde una subred privada sin permitir conexiones entrantes. Un Internet Gateway directo haría pública la subred."
  },
  {
    "id": "T13",
    "b": 9,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere enviar a cada usuario a la región de AWS con menor latencia. ¿Qué política de Route 53 debe usar?",
    "o": [
      "Enrutamiento por latencia",
      "Enrutamiento ponderado",
      "Enrutamiento por geolocalización",
      "Failover"
    ],
    "c": [
      0
    ],
    "e": "Latency routing elige la región con menor latencia para el usuario. Geolocation elige según la ubicación del usuario, aunque otra región sea más rápida."
  },
  {
    "id": "T14",
    "b": 9,
    "d": "Tecnología",
    "m": false,
    "q": "Una plataforma de cursos vende videos a usuarios de Europa, Asia y América y quiere cachear el contenido cerca de cada usuario. ¿Qué servicio debe usar?",
    "o": [
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS Direct Connect",
      "Amazon Route 53"
    ],
    "c": [
      0
    ],
    "e": "CloudFront es una red de entrega de contenido que cachea en ubicaciones de borde. Global Accelerator acelera el tráfico sin cachear; Direct Connect es un enlace privado; Route 53 resuelve DNS."
  },
  {
    "id": "T15",
    "b": 9,
    "d": "Tecnología",
    "m": false,
    "q": "¿Qué servicio proporciona una conexión privada dedicada entre un datacenter y AWS?",
    "o": [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "Amazon CloudFront",
      "NAT Gateway"
    ],
    "c": [
      0
    ],
    "e": "Direct Connect es un enlace privado dedicado y con latencia más consistente. Site-to-Site VPN usa internet y cifra el túnel, pero no es dedicado."
  },
  {
    "id": "T16",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo quiere ejecutar una función de 5 minutos cuando se sube una imagen a S3, sin administrar servidores ni pagar por tiempo inactivo. ¿Qué servicio encaja?",
    "o": [
      "AWS Lambda",
      "Amazon EC2",
      "Amazon ECS",
      "AWS Elastic Beanstalk"
    ],
    "c": [
      0
    ],
    "e": "Lambda ejecuta código por eventos, sin servidores y con un máximo de 15 minutos. EC2 y ECS requieren capacidad; Beanstalk aprovisiona infraestructura para una aplicación completa."
  },
  {
    "id": "T17",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "¿Qué servicio permite ejecutar contenedores sin aprovisionar ni administrar instancias?",
    "o": [
      "AWS Fargate",
      "Amazon EC2",
      "Amazon EKS con nodos autogestionados",
      "AWS Batch"
    ],
    "c": [
      0
    ],
    "e": "Fargate ejecuta contenedores sin que el cliente gestione servidores. EKS puede usar Fargate, pero EKS por sí solo no elimina la gestión de nodos."
  },
  {
    "id": "T18",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere usar Kubernetes gestionado por AWS. ¿Qué servicio debe elegir?",
    "o": [
      "Amazon EKS",
      "Amazon ECS",
      "AWS Fargate",
      "AWS Elastic Beanstalk"
    ],
    "c": [
      0
    ],
    "e": "EKS es Kubernetes gestionado. ECS es el orquestador propio de AWS; Fargate es el motor de ejecución de contenedores."
  },
  {
    "id": "T19",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo quiere subir el código de una aplicación web y que AWS aprovisione el balanceador, las instancias y el escalado, sin escribir plantillas de infraestructura. ¿Qué servicio encaja?",
    "o": [
      "AWS Elastic Beanstalk",
      "AWS CloudFormation",
      "Amazon ECS",
      "Amazon Lightsail"
    ],
    "c": [
      0
    ],
    "e": "Beanstalk es una plataforma como servicio: recibe el código y aprovisiona la infraestructura. CloudFormation requiere plantillas; ECS orquesta contenedores; Lightsail ofrece servidores simples."
  },
  {
    "id": "T20",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "¿Qué servicio permite definir infraestructura como código mediante plantillas?",
    "o": [
      "AWS CloudFormation",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Systems Manager"
    ],
    "c": [
      0
    ],
    "e": "CloudFormation aprovisiona recursos a partir de plantillas declarativas. CloudTrail audita; Config evalúa configuración; Systems Manager opera instancias."
  },
  {
    "id": "T21",
    "b": 12,
    "d": "Tecnología",
    "m": true,
    "q": "Selecciona TRES funciones de Amazon CloudWatch.",
    "o": [
      "Recopilar métricas",
      "Crear alarmas",
      "Enviar notificaciones cuando se supera un umbral",
      "Registrar llamadas a la API para auditoría",
      "Evaluar reglas de configuración de recursos"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "CloudWatch recopila métricas, crea alarmas y puede notificar por Amazon SNS. CloudTrail registra llamadas a la API y AWS Config evalúa reglas de configuración."
  },
  {
    "id": "T22",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo necesita saber cómo cambió la configuración de un security group y evaluar si cumple una regla. ¿Qué servicio debe usar?",
    "o": [
      "AWS Config",
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Trusted Advisor"
    ],
    "c": [
      0
    ],
    "e": "Config mantiene el historial de configuración y evalúa reglas de cumplimiento. CloudTrail diría quién hizo el cambio; CloudWatch mostraría métricas."
  },
  {
    "id": "T23",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación web recibe diez veces más tráfico al mediodía y casi nada de noche. El equipo quiere mantener el rendimiento sin pagar capacidad ociosa. ¿Qué servicio debe usar?",
    "o": [
      "AWS Auto Scaling",
      "Elastic Load Balancing",
      "Amazon CloudFront",
      "Amazon Route 53"
    ],
    "c": [
      0
    ],
    "e": "Auto Scaling ajusta el número de instancias según la demanda. El balanceador distribuye tráfico; CloudFront cachea contenido; Route 53 resuelve DNS."
  },
  {
    "id": "T24",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita dirigir solicitudes HTTP a distintos servicios según la ruta de la URL y usar certificados TLS. ¿Qué balanceador debe elegir?",
    "o": [
      "Application Load Balancer",
      "Network Load Balancer",
      "Gateway Load Balancer",
      "Classic Load Balancer"
    ],
    "c": [
      0
    ],
    "e": "Application Load Balancer opera en capa 7 y enruta por ruta, host o encabezados. Network Load Balancer es capa 4; Gateway Load Balancer se usa para appliances; Classic está orientado a arquitecturas antiguas."
  },
  {
    "id": "T25",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación TCP necesita un balanceador de capa 4 con latencia muy baja y direcciones IP estáticas. ¿Qué opción debe elegir?",
    "o": [
      "Network Load Balancer",
      "Application Load Balancer",
      "Gateway Load Balancer",
      "Amazon CloudFront"
    ],
    "c": [
      0
    ],
    "e": "Network Load Balancer trabaja en capa 4, ofrece alto rendimiento y direcciones IP estáticas. Application Load Balancer es capa 7; Gateway Load Balancer distribuye a appliances; CloudFront es una CDN."
  },
  {
    "id": "T26",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere construir una aplicación de inteligencia artificial generativa utilizando modelos fundacionales (Foundation Models) de distintos proveedores mediante una API gestionada y sin administrar servidores. ¿Qué servicio de AWS debe elegir?",
    "o": [
      "Amazon Bedrock",
      "Amazon Rekognition",
      "Amazon Polly",
      "AWS Glue"
    ],
    "c": [
      0
    ],
    "e": "Amazon Bedrock es el servicio totalmente gestionado que ofrece acceso mediante una única API a modelos fundacionales (FMs) líderes para crear aplicaciones de IA generativa con privacidad y seguridad."
  },
  {
    "id": "T27",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo de ingeniería busca un asistente impulsado por IA generativa que responda preguntas sobre arquitectura de AWS, genere código en el IDE y ayude a diagnosticar errores en la consola. ¿Qué servicio debe utilizar?",
    "o": [
      "Amazon Q",
      "Amazon Textract",
      "Amazon Transcribe",
      "Amazon Comprehend"
    ],
    "c": [
      0
    ],
    "e": "Amazon Q es el asistente basado en IA generativa de AWS diseñado para ayudar a desarrolladores y empresas a escribir código, resolver problemas en AWS y consultar datos empresariales."
  },
  {
    "id": "T28",
    "b": 5,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita cumplir una licencia de software vinculada a servidores físicos y quiere visibilidad de los sockets y núcleos. ¿Qué opción debe elegir?",
    "o": [
      "Dedicated Hosts",
      "Dedicated Instances",
      "Reserved Instances",
      "Spot"
    ],
    "c": [
      0
    ],
    "e": "Dedicated Hosts reserva un servidor físico y permite controlar la afinidad y el licenciamiento por socket. Dedicated Instances aísla el hardware, pero no da ese control; las reservas y Spot son modelos de precio."
  },
  {
    "id": "T29",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "Un emprendedor con poca experiencia en la nube necesita lanzar rápidamente un blog en WordPress con servidor virtual, almacenamiento y DNS a un precio mensual fijo y predecible. ¿Qué servicio de AWS es el más adecuado?",
    "o": [
      "Amazon Lightsail",
      "AWS Batch",
      "Amazon EKS",
      "AWS Direct Connect"
    ],
    "c": [
      0
    ],
    "e": "Amazon Lightsail ofrece servidores privados virtuales (VPS), contenedores, bases de datos y almacenamiento con plantillas preconfiguradas y una tarifa mensual fija y simple."
  },
  {
    "id": "T30",
    "b": 6,
    "d": "Tecnología",
    "m": true,
    "q": "Selecciona DOS funcionalidades de Amazon S3 diseñadas para evitar la pérdida por borrado accidental o la exposición pública involuntaria de objetos.",
    "o": [
      "S3 Versioning y S3 Object Lock",
      "S3 Block Public Access",
      "S3 Transfer Acceleration",
      "S3 Intelligent-Tiering",
      "Amazon S3 Select"
    ],
    "c": [
      0,
      1
    ],
    "e": "S3 Versioning junto con Object Lock protegen contra borrados y sobrescrituras, y S3 Block Public Access impide que los buckets u objetos queden expuestos públicamente por error."
  },
  {
    "id": "T31",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere mover objetos a Glacier después de 90 días y eliminarlos a los siete años. ¿Qué función de S3 debe configurar?",
    "o": [
      "Una política de ciclo de vida",
      "La replicación entre regiones",
      "El versionado",
      "Object Lock"
    ],
    "c": [
      0
    ],
    "e": "Las políticas de ciclo de vida cambian la clase de almacenamiento o eliminan objetos según la edad. La replicación copia a otra región; el versionado conserva versiones; Object Lock impide borrar."
  },
  {
    "id": "T32",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita una copia de sus objetos en otra región para recuperación ante desastres. ¿Qué función de S3 debe usar?",
    "o": [
      "Replicación entre regiones",
      "Transfer Acceleration",
      "Una política de ciclo de vida",
      "El versionado"
    ],
    "c": [
      0
    ],
    "e": "La replicación entre regiones (CRR) copia objetos de forma asíncrona a otra región. Transfer Acceleration acelera cargas; el ciclo de vida mueve o borra; el versionado conserva versiones en el mismo bucket."
  },
  {
    "id": "T33",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Usuarios en otro continente suben archivos grandes a S3 y la latencia es alta. ¿Qué función mejora la velocidad de carga?",
    "o": [
      "S3 Transfer Acceleration",
      "Amazon CloudFront",
      "AWS Global Accelerator",
      "AWS Direct Connect"
    ],
    "c": [
      0
    ],
    "e": "Transfer Acceleration usa ubicaciones de borde para acelerar la carga a S3. CloudFront está pensado para descargas; Global Accelerator acelera tráfico de aplicaciones; Direct Connect es un enlace privado."
  },
  {
    "id": "T34",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita respaldar un volumen EBS y restaurarlo en otra zona de disponibilidad. ¿Qué debe hacer?",
    "o": [
      "Crear un snapshot y restaurar el volumen en la zona destino",
      "Copiar el volumen directamente entre zonas",
      "Mover el volumen a otro bucket de S3",
      "Convertir el volumen en un sistema de archivos EFS"
    ],
    "c": [
      0
    ],
    "e": "Los snapshots de EBS son regionales y permiten crear un volumen en otra zona. Un volumen EBS está atado a una zona; S3 no sustituye un volumen de bloque; EFS es otro tipo de almacenamiento."
  },
  {
    "id": "T35",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita un sistema de archivos compartido por SMB para servidores Windows y autenticación con Active Directory. ¿Qué servicio debe usar?",
    "o": [
      "Amazon FSx for Windows File Server",
      "Amazon EFS",
      "Amazon EBS",
      "Amazon S3"
    ],
    "c": [
      0
    ],
    "e": "FSx for Windows File Server ofrece SMB y se integra con Active Directory. EFS es NFS para Linux; EBS es un volumen de bloque; S3 es almacenamiento de objetos."
  },
  {
    "id": "T36",
    "b": 8,
    "d": "Tecnología",
    "m": true,
    "q": "Selecciona TRES tipos de Elastic Load Balancing disponibles en AWS.",
    "o": [
      "Application Load Balancer",
      "Network Load Balancer",
      "Gateway Load Balancer",
      "Database Load Balancer",
      "Storage Load Balancer"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "AWS ofrece Application, Network y Gateway Load Balancer. Database y Storage Load Balancer no existen como tipos de Elastic Load Balancing."
  },
  {
    "id": "T37",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa almacena miniaturas de imágenes que se consultan rara vez, pero deben recuperarse en milisegundos cuando se solicitan. Las miniaturas pueden recrearse fácilmente si se pierden. ¿Qué clase de almacenamiento de Amazon S3 es la más económica para este caso?",
    "o": [
      "S3 One Zone-IA",
      "S3 Standard",
      "S3 Glacier Deep Archive",
      "S3 Standard-IA"
    ],
    "c": [
      0
    ],
    "e": "S3 One Zone-IA es ideal para datos de acceso poco frecuente que requieren recuperación en milisegundos y que pueden recrearse si se destruye la única Zona de Disponibilidad donde se alojan, ahorrando un 20% frente a S3 Standard-IA."
  },
  {
    "id": "T38",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita una base relacional compatible con MySQL, con almacenamiento que escala automáticamente y réplicas de baja latencia. ¿Qué servicio encaja mejor?",
    "o": [
      "Amazon Aurora",
      "Amazon RDS para MySQL",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "c": [
      0
    ],
    "e": "Aurora es compatible con MySQL y PostgreSQL, escala el almacenamiento y ofrece réplicas de baja latencia. RDS para MySQL no escala el almacenamiento de la misma forma; DynamoDB es NoSQL; Redshift es analítico."
  },
  {
    "id": "T39",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación necesita lecturas y escrituras de baja latencia en varias regiones con una tabla NoSQL. ¿Qué función de DynamoDB debe usar?",
    "o": [
      "Tablas globales",
      "DynamoDB Accelerator (DAX)",
      "Réplicas de lectura de RDS",
      "ElastiCache"
    ],
    "c": [
      0
    ],
    "e": "Las tablas globales replican DynamoDB en varias regiones con escrituras locales. DAX es una caché en una región; las réplicas de RDS son relacionales; ElastiCache es caché en memoria."
  },
  {
    "id": "T40",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación lee repetidamente los mismos elementos de DynamoDB y necesita latencia de microsegundos. ¿Qué servicio debe usar?",
    "o": [
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon ElastiCache",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "c": [
      0
    ],
    "e": "DAX es una caché en memoria integrada con DynamoDB. ElastiCache cachea otros orígenes; Redshift es analítico; Aurora es relacional."
  },
  {
    "id": "T41",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo de desarrollo quiere automatizar su flujo de entrega continua (CI/CD) para que cada cambio enviado al repositorio compile el código, ejecute pruebas y se despliegue automáticamente. ¿Qué servicio de AWS orquesta todas estas etapas?",
    "o": [
      "AWS CodePipeline",
      "AWS X-Ray",
      "Amazon ECR",
      "AWS CloudTrail"
    ],
    "c": [
      0
    ],
    "e": "AWS CodePipeline es el servicio de entrega continua que automatiza y orquesta las fases de compilación (CodeBuild), pruebas y despliegue (CodeDeploy) cada vez que hay un cambio en el código."
  },
  {
    "id": "T42",
    "b": 12,
    "d": "Tecnología",
    "m": true,
    "q": "Un arquitecto quiere desacoplar los microservicios de una aplicación para que no dependan de conexiones directas síncronas. Selecciona DOS servicios de integración de AWS adecuados para este propósito.",
    "o": [
      "Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Elastic Block Store (Amazon EBS)",
      "AWS Config",
      "AWS Direct Connect"
    ],
    "c": [
      0,
      1
    ],
    "e": "Amazon SQS (colas de mensajes pull) y Amazon SNS (notificaciones pub/sub push) son los dos servicios fundamentales para desacoplar productores y consumidores."
  },
  {
    "id": "T43",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un pedido debe procesarse por un único trabajador y no perderse si el trabajador falla. ¿Qué servicio debe usar entre el productor y el trabajador?",
    "o": [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon EventBridge",
      "Amazon Kinesis Data Streams"
    ],
    "c": [
      0
    ],
    "e": "SQS es una cola que retiene mensajes hasta que un consumidor los procesa. SNS es pub/sub sin cola persistente por consumidor; EventBridge enruta eventos; Kinesis está pensado para streaming."
  },
  {
    "id": "T44",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere reaccionar a cambios de estado de recursos de AWS y enrutar eventos a distintos destinos con reglas. ¿Qué servicio debe usar?",
    "o": [
      "Amazon EventBridge",
      "Amazon SQS",
      "Amazon SNS",
      "AWS Step Functions"
    ],
    "c": [
      0
    ],
    "e": "EventBridge captura eventos de servicios de AWS y los enruta con reglas. SQS y SNS distribuyen mensajes; Step Functions coordina flujos."
  },
  {
    "id": "T45",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un flujo de trabajo tiene varios pasos con reintentos, decisiones y esperas, y el equipo quiere visualizarlo y gestionarlo sin escribir toda la orquestación. ¿Qué servicio debe usar?",
    "o": [
      "AWS Step Functions",
      "Amazon SQS",
      "AWS Lambda",
      "Amazon EventBridge"
    ],
    "c": [
      0
    ],
    "e": "Step Functions coordina pasos, reintentos, decisiones y esperas con una máquina de estados visual. SQS encola mensajes; Lambda ejecuta una función; EventBridge enruta eventos."
  },
  {
    "id": "T46",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita ingerir millones de eventos por segundo y procesarlos en tiempo real con varios consumidores. ¿Qué servicio debe usar?",
    "o": [
      "Amazon Kinesis Data Streams",
      "Amazon SQS",
      "Amazon S3",
      "AWS Glue"
    ],
    "c": [
      0
    ],
    "e": "Kinesis Data Streams ingiere datos en tiempo real y permite varios consumidores. SQS es una cola de trabajo; S3 almacena objetos; Glue prepara datos para analítica."
  },
  {
    "id": "T47",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo quiere consultar con SQL archivos almacenados en S3 sin cargar un data warehouse ni administrar servidores. ¿Qué servicio debe usar?",
    "o": [
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon RDS",
      "Amazon EMR"
    ],
    "c": [
      0
    ],
    "e": "Athena consulta datos en S3 con SQL y es serverless. Redshift requiere un warehouse; RDS es transaccional; EMR administra clústeres de big data."
  },
  {
    "id": "T48",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita descubrir, catalogar y transformar datos para construir un data lake. ¿Qué servicio debe usar?",
    "o": [
      "AWS Glue",
      "Amazon Athena",
      "Amazon EMR",
      "AWS Lake Formation"
    ],
    "c": [
      0
    ],
    "e": "Glue descubre, cataloga y transforma datos con trabajos ETL. Athena consulta; EMR procesa con clústeres; Lake Formation administra permisos del data lake."
  },
  {
    "id": "T49",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un área de negocio necesita paneles interactivos y visualizaciones a partir de datos almacenados en AWS. ¿Qué servicio debe usar?",
    "o": [
      "Amazon QuickSight",
      "Amazon Athena",
      "Amazon Redshift",
      "AWS Glue"
    ],
    "c": [
      0
    ],
    "e": "QuickSight crea paneles y visualizaciones con integración a fuentes de datos de AWS. Athena consulta; Redshift almacena y consulta; Glue transforma."
  },
  {
    "id": "T50",
    "b": 7,
    "d": "Tecnología",
    "m": true,
    "q": "Selecciona DOS servicios de bases de datos NoSQL totalmente gestionados por AWS.",
    "o": [
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon RDS for PostgreSQL"
    ],
    "c": [
      0,
      1
    ],
    "e": "Amazon DynamoDB (clave-valor/documentos) y Amazon DocumentDB (compatible con MongoDB) son bases de datos NoSQL. Aurora, RDS y Redshift son motores SQL relacionales/analíticos."
  },
  {
    "id": "T51",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita modelar relaciones complejas entre usuarios, productos y compras como un grafo. ¿Qué servicio debe usar?",
    "o": [
      "Amazon Neptune",
      "Amazon DynamoDB",
      "Amazon DocumentDB",
      "Amazon RDS"
    ],
    "c": [
      0
    ],
    "e": "Neptune es una base de datos de grafos para relaciones complejas. DynamoDB es clave-valor; DocumentDB es documental; RDS es relacional."
  },
  {
    "id": "T52",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación experimenta latencia por consultas repetidas a una base relacional y quiere cachear resultados en memoria. ¿Qué servicio debe usar?",
    "o": [
      "Amazon ElastiCache",
      "Amazon DynamoDB Accelerator (DAX)",
      "Amazon Redshift",
      "Amazon EFS"
    ],
    "c": [
      0
    ],
    "e": "ElastiCache ofrece caché en memoria para bases relacionales y otros orígenes. DAX es específico de DynamoDB; Redshift es analítico; EFS es un sistema de archivos."
  },
  {
    "id": "T53",
    "b": 8,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita una base de datos sin acceso directo desde internet, pero con salida para descargar parches. ¿Qué diseño de VPC debe usar?",
    "o": [
      "Una subred privada con un NAT Gateway",
      "Una subred pública con un Internet Gateway",
      "Una subred pública sin tabla de rutas",
      "Una VPC sin subredes"
    ],
    "c": [
      0
    ],
    "e": "La subred privada no recibe tráfico entrante y el NAT Gateway le da salida a internet. Una subred pública con Internet Gateway queda expuesta; sin rutas no hay salida; una VPC necesita subredes."
  },
  {
    "id": "T54",
    "b": 9,
    "d": "Tecnología",
    "m": true,
    "q": "Selecciona TRES políticas de enrutamiento de Amazon Route 53.",
    "o": [
      "Por latencia",
      "Por geolocalización",
      "Ponderada",
      "Secuencial",
      "Aleatoria"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Route 53 ofrece enrutamiento por latencia, geolocalización y ponderado, entre otras. Secuencial y aleatoria no son políticas de Route 53."
  },
  {
    "id": "T55",
    "b": 9,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa tiene un sitio principal y uno de respaldo y quiere cambiar automáticamente si el principal deja de responder. ¿Qué política de Route 53 debe usar?",
    "o": [
      "Failover",
      "Por latencia",
      "Ponderada",
      "Por geolocalización"
    ],
    "c": [
      0
    ],
    "e": "Failover usa comprobaciones de estado para enviar tráfico al respaldo. Latencia elige la región más rápida; ponderada reparte por peso; geolocalización elige por ubicación."
  },
  {
    "id": "T56",
    "b": 10,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación basada en microservicios con AWS Lambda y Amazon API Gateway presenta lentitud intermitente y el equipo necesita rastrear las solicitudes de extremo a extremo para identificar el cuello de botella. ¿Qué servicio debe usar?",
    "o": [
      "AWS X-Ray",
      "AWS Config",
      "Amazon Inspector",
      "AWS Artifact"
    ],
    "c": [
      0
    ],
    "e": "AWS X-Ray analiza y depura aplicaciones distribuidas y de microservicios, generando un mapa de servicios y trazas detalladas de latencia petición por petición."
  },
  {
    "id": "T57",
    "b": 9,
    "d": "Tecnología",
    "m": false,
    "q": "Una aplicación TCP que no es HTTP necesita mejorar la latencia global y conmutar rápido ante fallos, sin cachear contenido. ¿Qué servicio debe usar?",
    "o": [
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "Amazon Route 53",
      "Network Load Balancer"
    ],
    "c": [
      0
    ],
    "e": "Global Accelerator usa la red global de AWS para acelerar tráfico TCP y UDP y conmutar ante fallos. CloudFront cachea HTTP; Route 53 resuelve DNS; un NLB opera en una región."
  },
  {
    "id": "T58",
    "b": 10,
    "d": "Tecnología",
    "m": true,
    "q": "Una empresa publica sus microservicios mediante Amazon API Gateway. Selecciona DOS capacidades que ofrece este servicio de forma nativa.",
    "o": [
      "Autenticación, autorización y control de acceso a las APIs",
      "Limitación de tasa (throttling) y gestión de versiones/etapas de la API",
      "Almacenamiento de bloques persistente para instancias Amazon EC2",
      "Inspección física de servidores en el centro de datos local",
      "Entrenamiento distribuido de modelos fundacionales desde cero"
    ],
    "c": [
      0,
      1
    ],
    "e": "Amazon API Gateway gestiona la autenticación, los límites de tasa (throttling), el caché de respuestas y las versiones de APIs REST, HTTP y WebSocket."
  },
  {
    "id": "T59",
    "b": 11,
    "d": "Tecnología",
    "m": false,
    "q": "Una planta industrial necesita procesar datos de maquinaria localmente dentro de su propio centro de datos utilizando las mismas APIs, consola y hardware de AWS debido a requisitos de latencia de un milisegundo. ¿Qué servicio cumple este requisito?",
    "o": [
      "AWS Outposts",
      "Amazon CloudFront",
      "AWS Transit Gateway",
      "Amazon Route 53"
    ],
    "c": [
      0
    ],
    "e": "AWS Outposts lleva racks físicos de infraestructura, servicios y APIs nativas de AWS directamente a las instalaciones del cliente para experiencias híbridas y de latencia local."
  },
  {
    "id": "T60",
    "b": 6,
    "d": "Tecnología",
    "m": true,
    "q": "Selecciona TRES servicios que ayudan a migrar datos o bases de datos a AWS.",
    "o": [
      "AWS Database Migration Service (DMS)",
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "DMS migra bases de datos, DataSync mueve archivos y Snowball Edge transfiere grandes volúmenes sin red. CloudTrail audita e Inspector busca vulnerabilidades."
  },
  {
    "id": "T61",
    "b": 7,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere migrar una base de datos a Amazon RDS con mínima interrupción y replicación continua durante la transición. ¿Qué servicio debe usar?",
    "o": [
      "AWS Database Migration Service (DMS)",
      "AWS DataSync",
      "AWS Snowball Edge",
      "AWS Backup"
    ],
    "c": [
      0
    ],
    "e": "DMS migra bases de datos y permite replicación continua. DataSync mueve archivos; Snowball transfiere volúmenes; Backup gestiona copias de seguridad."
  },
  {
    "id": "T62",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita mover 50 TB desde un NAS local a S3 de forma programada, verificada y sin instalar hardware especializado. ¿Qué servicio debe usar?",
    "o": [
      "AWS DataSync",
      "AWS Storage Gateway",
      "AWS Snowball Edge",
      "AWS Database Migration Service (DMS)"
    ],
    "c": [
      0
    ],
    "e": "DataSync mueve archivos entre almacenamiento local y AWS con verificación e informes. Storage Gateway mantiene una caché local; Snowball es hardware físico; DMS migra bases de datos."
  },
  {
    "id": "T63",
    "b": 6,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa quiere que sus aplicaciones locales sigan accediendo a archivos mediante un recurso compartido, con una copia en S3 y caché local. ¿Qué servicio debe usar?",
    "o": [
      "AWS Storage Gateway",
      "AWS DataSync",
      "Amazon EFS",
      "AWS Snowball Edge"
    ],
    "c": [
      0
    ],
    "e": "Storage Gateway conecta aplicaciones locales con almacenamiento en AWS y mantiene caché local. DataSync es una transferencia puntual o programada; EFS es para recursos en la nube; Snowball es hardware de transferencia."
  },
  {
    "id": "T64",
    "b": 12,
    "d": "Tecnología",
    "m": true,
    "q": "Un equipo construye un data lake en S3. Selecciona TRES servicios que encajan en esa arquitectura.",
    "o": [
      "AWS Glue",
      "Amazon Athena",
      "AWS Lake Formation",
      "Amazon GuardDuty",
      "AWS WAF"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Glue cataloga y transforma, Athena consulta y Lake Formation administra permisos del data lake. GuardDuty y WAF son servicios de seguridad."
  },
  {
    "id": "T65",
    "b": 12,
    "d": "Tecnología",
    "m": false,
    "q": "Un equipo quiere entrenar y desplegar modelos de machine learning sin administrar servidores. ¿Qué servicio debe usar?",
    "o": [
      "Amazon SageMaker",
      "Amazon Bedrock",
      "Amazon Comprehend",
      "Amazon Forecast"
    ],
    "c": [
      0
    ],
    "e": "SageMaker cubre el ciclo de vida de machine learning: preparación, entrenamiento y despliegue. Bedrock ofrece modelos fundacionales por API; Comprehend analiza texto; Forecast predice series temporales."
  },
  {
    "id": "T66",
    "b": 11,
    "d": "Tecnología",
    "m": false,
    "q": "Una empresa necesita cómputo y almacenamiento de baja latencia en una ciudad concreta, sin crear una región nueva. ¿Qué opción de infraestructura debe usar?",
    "o": [
      "AWS Local Zones",
      "Ubicaciones de borde",
      "AWS Wavelength",
      "AWS Outposts"
    ],
    "c": [
      0
    ],
    "e": "Local Zones extienden una región a una ciudad cercana para cargas sensibles a la latencia. Las ubicaciones de borde solo cachean contenido; Wavelength es para redes 5G; Outposts lleva hardware a las instalaciones del cliente."
  },
  {
    "id": "P01",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Un equipo necesita entender qué servicio creció más en la factura de los últimos seis meses y ver una proyección del próximo mes. ¿Qué herramienta debe usar?",
    "o": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Artifact"
    ],
    "c": [
      0
    ],
    "e": "Cost Explorer analiza gasto histórico, lo filtra por servicio y pronostica. Budgets alerta sobre umbrales; Pricing Calculator estima antes de desplegar; Artifact contiene informes de cumplimiento."
  },
  {
    "id": "P02",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una empresa quiere recibir un correo cuando el gasto del mes supere USD 500 y detener recursos de desarrollo si llega a USD 800. ¿Qué herramienta permite definir esos umbrales y acciones?",
    "o": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Cost and Usage Report",
      "AWS Trusted Advisor"
    ],
    "c": [
      0
    ],
    "e": "Budgets define umbrales, envía alertas y puede ejecutar acciones. Cost Explorer y CUR analizan el gasto; Trusted Advisor recomienda, pero no configura presupuestos."
  },
  {
    "id": "P03",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Antes de aprobar el presupuesto de una nueva arquitectura, un equipo necesita estimar el costo mensual de EC2, S3 y transferencia con las tarifas de una región concreta. ¿Qué herramienta debe usar?",
    "o": [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report"
    ],
    "c": [
      0
    ],
    "e": "Pricing Calculator estima el costo futuro con los precios de cada servicio y región. Cost Explorer y CUR analizan gasto ya generado; Budgets controla umbrales."
  },
  {
    "id": "P04",
    "b": 5,
    "d": "Costos",
    "m": false,
    "q": "Una empresa se compromete a un gasto por hora durante tres años y quiere que el descuento se aplique a distintas familias de EC2 y a Lambda. ¿Qué opción cumple ese requisito?",
    "o": [
      "Savings Plans de cómputo",
      "Reserved Instances estándar",
      "Spot",
      "Dedicated Hosts"
    ],
    "c": [
      0
    ],
    "e": "Los Savings Plans de cómputo comprometen un gasto por hora y son flexibles entre servicios de cómputo elegibles. Las RI estándar se atan a una familia; Spot puede interrumpirse; Dedicated Hosts reserva hardware físico."
  },
  {
    "id": "P05",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una plataforma de streaming sirve 200 TB de video al mes a usuarios de todo el mundo. ¿Qué componente del costo debe revisar con más atención?",
    "o": [
      "Transferencia de datos de salida a internet",
      "Transferencia de datos de entrada",
      "Creación de usuarios de IAM",
      "Almacenamiento de objetos"
    ],
    "c": [
      0
    ],
    "e": "La salida a internet (egress) suele dominar el costo en cargas con mucho tráfico. La entrada normalmente no se cobra; los usuarios de IAM no tienen costo; el almacenamiento suele ser menor que la transferencia."
  },
  {
    "id": "P06",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Un grupo tiene 15 cuentas de AWS y quiere una sola factura, además de combinar el uso para alcanzar descuentos por volumen. ¿Qué función de AWS Organizations debe activar?",
    "o": [
      "Facturación consolidada",
      "Políticas de control de servicios",
      "Control Tower",
      "IAM Identity Center"
    ],
    "c": [
      0
    ],
    "e": "La facturación consolidada agrupa el uso y emite una factura; el uso combinado puede habilitar descuentos por volumen. Las SCP limitan permisos; Control Tower crea un landing zone; Identity Center gestiona accesos."
  },
  {
    "id": "P07",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una empresa necesita respuesta de 15 minutos para incidentes críticos y un Technical Account Manager, con el menor costo que cumpla esos requisitos. ¿Qué plan de soporte debe contratar?",
    "o": [
      "Enterprise Support",
      "Business Support+",
      "Basic",
      "Unified Operations"
    ],
    "c": [
      0
    ],
    "e": "Enterprise Support ofrece 15 minutos para críticos y TAM. Unified Operations también incluye TAM y 5 minutos, pero está pensado para grandes organizaciones y tiene un costo mucho mayor. Business+ responde en 30 minutos y no incluye TAM."
  },
  {
    "id": "P08",
    "b": 5,
    "d": "Costos",
    "m": true,
    "q": "Selecciona DOS afirmaciones correctas sobre los Savings Plans de AWS.",
    "o": [
      "Ofrecen descuentos de hasta un 72% a cambio de un compromiso de gasto en dólares por hora durante 1 o 3 años",
      "Compute Savings Plans aplica el descuento automáticamente entre EC2, AWS Fargate y AWS Lambda",
      "Exigen un compromiso obligatorio de permanencia mínima de 5 años",
      "Eliminan todos los cargos por transferencia de datos de salida hacia internet",
      "Solo pueden aplicarse a volúmenes de almacenamiento de Amazon EBS y buckets de Amazon S3"
    ],
    "c": [
      0,
      1
    ],
    "e": "Los Savings Plans comprometen un monto en USD/hora por 1 o 3 años; Compute Savings Plans ofrece la máxima flexibilidad abarcando EC2, Fargate y Lambda."
  },
  {
    "id": "P09",
    "b": 5,
    "d": "Costos",
    "m": false,
    "q": "Una empresa quiere un descuento por compromiso de un año, pero necesita cambiar la familia de instancias si su carga cambia. ¿Qué opción debe elegir?",
    "o": [
      "Reserved Instances convertibles",
      "Reserved Instances estándar",
      "Spot",
      "On-Demand"
    ],
    "c": [
      0
    ],
    "e": "Las RI convertibles permiten cambiar la familia, el sistema operativo o el alcance con ciertas condiciones. Las estándar no se pueden modificar; Spot puede interrumpirse; On-Demand no tiene descuento por compromiso."
  },
  {
    "id": "P10",
    "b": 13,
    "d": "Costos",
    "m": false,
    "q": "Una organización quiere medir, rastrear y estimar las emisiones históricas de carbono asociadas a su uso de los servicios de AWS para su reporte anual de sostenibilidad. ¿Qué herramienta gratuita debe consultar?",
    "o": [
      "AWS Customer Carbon Footprint Tool",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS Compute Optimizer"
    ],
    "c": [
      0
    ],
    "e": "AWS Customer Carbon Footprint Tool (disponible en la consola de facturación) permite visualizar y hacer seguimiento de las emisiones de carbono generadas por tus cargas de trabajo en AWS."
  },
  {
    "id": "P11",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una empresa con plan Enterprise Support necesita asistencia rápida de un especialista en cuentas para resolver dudas sobre su facturación consolidada y la asignación de costos. ¿A qué equipo incluido en su plan debe acudir?",
    "o": [
      "AWS Concierge Support Team",
      "AWS Security Response Team (SRT)",
      "AWS Abuse Team",
      "AWSome Day Team"
    ],
    "c": [
      0
    ],
    "e": "El equipo AWS Concierge está incluido en los planes de nivel Enterprise y se especializa en consultas ejecutivas de facturación, pagos y administración de cuentas."
  },
  {
    "id": "P12",
    "b": 12,
    "d": "Costos",
    "m": false,
    "q": "Una empresa sospecha que sus instancias EC2 están sobredimensionadas y quiere recomendaciones basadas en métricas de uso. ¿Qué servicio debe usar?",
    "o": [
      "AWS Compute Optimizer",
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    "c": [
      0
    ],
    "e": "Compute Optimizer analiza métricas y recomienda tamaños de instancia. Trusted Advisor también recomienda, pero no hace el análisis detallado de right-sizing; Cost Explorer y Budgets muestran y controlan gasto."
  },
  {
    "id": "P13",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una empresa necesita separar el costo de cada proyecto y equipo en la factura mensual. ¿Qué debe configurar?",
    "o": [
      "Etiquetas de asignación de costos",
      "Un presupuesto de AWS Budgets",
      "Un informe de AWS Artifact",
      "Una política de control de servicios"
    ],
    "c": [
      0
    ],
    "e": "Las etiquetas de asignación de costos permiten agrupar y filtrar el gasto por proyecto o equipo. Budgets controla umbrales; Artifact contiene informes de cumplimiento; las SCP limitan permisos."
  },
  {
    "id": "P14",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "¿Cómo se calcula normalmente el cargo de los planes Business Support+ y Enterprise Support?",
    "o": [
      "Como un porcentaje del gasto mensual de AWS",
      "Como una tarifa fija por cuenta",
      "Como un costo por usuario de IAM",
      "Como un porcentaje del número de instancias"
    ],
    "c": [
      0
    ],
    "e": "Los planes de soporte de negocio y empresa se calculan sobre el gasto mensual de AWS, con niveles por volumen. No dependen del número de usuarios ni de instancias, y no son una tarifa fija."
  },
  {
    "id": "P15",
    "b": 14,
    "d": "Costos",
    "m": true,
    "q": "Selecciona DOS beneficios incluidos en el plan AWS Enterprise Support.",
    "o": [
      "Un Technical Account Manager (TAM) designado para guía proactiva y revisiones arquitectónicas",
      "Tiempo de respuesta inferior a 15 minutos (24/7) ante caídas de sistemas críticos de negocio",
      "Exención total de los cargos por almacenamiento en Amazon S3 y Amazon RDS",
      "Administración y programación completa del código de las aplicaciones del cliente por parte de AWS",
      "Soporte técnico limitado exclusivamente a correo electrónico en horario laboral"
    ],
    "c": [
      0,
      1
    ],
    "e": "AWS Enterprise Support incluye un TAM designado, acceso al equipo de facturación Concierge y respuesta en menos de 15 minutos 24/7 para sistemas críticos."
  },
  {
    "id": "P16",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una startup necesita soporte técnico 24/7 y respuesta de 30 minutos cuando producción está caída, pero no puede pagar Enterprise. ¿Qué plan debe contratar?",
    "o": [
      "Business Support+",
      "Basic",
      "Enterprise Support",
      "Unified Operations"
    ],
    "c": [
      0
    ],
    "e": "Business Support+ ofrece soporte 24/7 y respuesta de 30 minutos para producción caída. Basic no incluye soporte técnico; Enterprise y Unified Operations superan el presupuesto y ofrecen tiempos menores."
  },
  {
    "id": "P17",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "¿Qué ofrece AWS Free Tier?",
    "o": [
      "Explorar y probar servicios elegibles de AWS sin costo dentro de límites específicos de tiempo o consumo mensual",
      "Ejecutar cualquier tamaño de instancia Amazon EC2 de forma gratuita durante los primeros 12 meses sin límite de horas",
      "Obtener acceso incluido al plan AWS Business Support y a un Technical Account Manager durante el primer año",
      "Eximir del cobro toda la transferencia de datos de salida hacia internet durante el periodo de prueba"
    ],
    "c": [
      0
    ],
    "e": "Free Tier incluye límites gratuitos por tiempo limitado o uso mensual para ciertos servicios. No cubre todos los servicios sin límite, no da créditos ilimitados y no incluye Enterprise Support."
  },
  {
    "id": "P18",
    "b": 14,
    "d": "Costos",
    "m": true,
    "q": "Selecciona TRES herramientas que permiten analizar o controlar el gasto en AWS.",
    "o": [
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Cost and Usage Report",
      "IAM Access Analyzer",
      "AWS Artifact"
    ],
    "c": [
      0,
      1,
      2
    ],
    "e": "Cost Explorer analiza, Budgets controla umbrales y el Cost and Usage Report entrega el detalle. Access Analyzer revisa permisos y Artifact distribuye informes de cumplimiento."
  },
  {
    "id": "P19",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una empresa necesita el detalle más granular de costos y uso, con desglose por recurso, para cargarlo en un data warehouse. ¿Qué herramienta debe usar?",
    "o": [
      "AWS Cost and Usage Report",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    "c": [
      0
    ],
    "e": "El Cost and Usage Report entrega datos detallados por servicio, recurso y etiqueta. Cost Explorer resume y visualiza; Budgets alerta; Pricing Calculator estima antes de desplegar."
  },
  {
    "id": "P20",
    "b": 14,
    "d": "Costos",
    "m": false,
    "q": "Una empresa quiere comprar software de terceros y que el cargo aparezca en su factura de AWS. ¿Qué opción debe usar?",
    "o": [
      "AWS Marketplace",
      "AWS Artifact",
      "AWS Service Catalog",
      "AWS Pricing Calculator"
    ],
    "c": [
      0
    ],
    "e": "AWS Marketplace permite adquirir software de terceros con facturación integrada. Artifact contiene informes; Service Catalog ofrece catálogos internos; Pricing Calculator estima costos."
  },
  {
    "id": "P21",
    "b": 5,
    "d": "Costos",
    "m": false,
    "q": "Una empresa detiene sus instancias EC2 por la noche para ahorrar. ¿Qué costo sigue existiendo mientras están detenidas?",
    "o": [
      "El almacenamiento de los volúmenes EBS adjuntos",
      "El costo de cómputo por hora de EC2",
      "El costo de las licencias de AWS Support",
      "El costo de las direcciones IP privadas"
    ],
    "c": [
      0
    ],
    "e": "Al detener una instancia se deja de pagar el cómputo, pero los volúmenes EBS siguen cobrándose. El soporte se calcula sobre el gasto, no por instancia; las IP privadas no se cobran."
  }
];
