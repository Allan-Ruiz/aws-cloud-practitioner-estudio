/* ============================================================
   Mapa de servicios AWS · datos base CLF-C02
   Bases de datos, Planes de soporte y Combos.
   El catálogo del resto de categorías se carga desde mapa-catalogo*.js.
   ============================================================ */
window.MAPA_SERVICIOS = {
  meta: {
    officialCount: 111,
    complementaryCount: 30,
    officialCategories: 19,
    updated: '2026-11-12'
  },

  slideTitles: {
    s13:'Mapa de seguridad',
    s14:'Servicios de detección',
    s17:'Cumplimiento y auditoría',
    s19:'EC2: qué es y familias',
    s20:'Modelos de compra de EC2',
    s21:'S3: almacenamiento de objetos',
    s22:'Clases de almacenamiento S3',
    s25:'RDS y Aurora',
    s26:'Bases NoSQL y analíticas',
    s27:'VPC: la red',
    s30:'CloudFront, Global Accelerator, DX y VPN',
    s31:'Serverless y contenedores',
    s32:'Árbol de decisión de cómputo',
    s39:'Well-Architected: 6 pilares',
    s40:'AWS CAF',
    s41:'Las 7 R de migración',
    s42:'Servicios de migración',
    s44:'Precios por tipo de servicio',
    s46:'Herramientas de costos',
    s47:'Costos ocultos y TCO',
    s48:'Planes de soporte',
    s49:'Elegir plan de soporte',
    s51:'Analítica e integración',
    s64:'Multi-AZ, réplicas y caché',
    s65:'Conectividad entre VPC y balanceadores',
    s66:'Conectividad híbrida: VPN vs Direct Connect'
  },

  blockTitles: {
    7:'Bases de datos',
    13:'Well-Architected, CAF y migración',
    14:'Costos, soporte y cierre'
  },

  connectionNotes: {
    'VPC y Security Groups':'El servicio vive dentro de tu VPC. Los security groups deciden qué tráfico entra y sale; las subredes determinan si es público o privado.',
    'AWS KMS':'Cifra los datos en reposo y controla quién puede usar la clave. Puedes usar una clave gestionada por AWS o una propia.',
    'Secrets Manager':'Guarda y rota credenciales de aplicación (usuario, contraseña, token) sin dejarlas en el código.',
    'CloudWatch':'Recibe métricas, logs y alarmas para operar el servicio y detectar problemas.',
    'Amazon CloudWatch':'Recibe métricas, logs y alarmas para operar el servicio y detectar problemas.',
    'IAM':'Define qué usuarios, roles o servicios pueden crear, leer, escribir o administrar el recurso.',
    'AWS IAM':'Define qué usuarios, roles o servicios pueden crear, leer, escribir o administrar el recurso.',
    'Amazon ElastiCache':'Caché en memoria delante de la base de datos para lecturas repetidas y microsegundos.',
    'AWS DMS':'DMS mueve datos y cambios entre bases; se usa para migrar o replicar hacia RDS, Aurora, Redshift o DynamoDB.',
    'AWS Database Migration Service (DMS)':'DMS mueve datos y cambios entre bases; se usa para migrar o replicar hacia RDS, Aurora, Redshift o DynamoDB.',
    'AWS Backup':'Centraliza copias de seguridad, políticas de retención y restauración.',
    'AWS Lambda':'Ejecuta código ante eventos y puede leer o escribir este servicio sin administrar servidores.',
    'API Gateway':'Publica una API que invoca la lógica de la aplicación y pasa las peticiones al servicio.',
    'DynamoDB Streams':'Captura los cambios de la tabla para disparar procesos, auditoría o replicación.',
    'Global Tables':'Replica la tabla en varias regiones para baja latencia y recuperación ante desastres.',
    'DAX':'Caché en memoria delante de DynamoDB para lecturas en microsegundos.',
    'EventBridge':'Enruta eventos entre servicios y dispara automatizaciones.',
    'Amazon S3':'S3 almacena objetos que otros servicios leen, escriben o consultan.',
    'AWS Glue':'Catálogo y ETL para preparar y mover datos antes de analizarlos.',
    'Amazon QuickSight':'Visualiza y comparte paneles y análisis sobre los datos.',
    'Amazon Kinesis':'Ingesta datos en streaming para procesarlos en tiempo real.',
    'Lake Formation':'Gobierna y asegura el data lake sobre S3.',
    'Trusted Advisor':'Revisa buenas prácticas de costo, seguridad, rendimiento y límites de servicio.',
    'Trusted Advisor (checks básicos)':'Basic incluye solo comprobaciones básicas; los checks completos requieren un plan de pago.',
    'AWS Trusted Advisor':'Revisa buenas prácticas de costo, seguridad, rendimiento y límites de servicio.',
    'AWS Health Dashboard':'Muestra el estado de los servicios de AWS y los eventos que te afectan.',
    'Support Center':'Canal para abrir, seguir y cerrar casos de soporte con AWS.',
    'AWS Organizations':'Gestiona varias cuentas, políticas y facturación consolidada.',
    'Technical Account Manager (TAM)':'Profesional designado que acompaña la operación, las revisiones y la planificación.',
    'Domain Specialist Engineer (DSE)':'Especialista de dominio incluido en Unified Operations para revisar cargas concretas.',
    'AWS Security Incident Response':'Ayuda a preparar, detectar y responder ante incidentes de seguridad.',
    'AWS Well-Architected':'Marco de revisión de arquitecturas en seis pilares; se usa con la Well-Architected Tool.',
    'Amazon RDS / Aurora':'Base relacional gestionada; se usa como origen, destino o motor de la aplicación.',
    'Amazon RDS':'Base relacional gestionada; se usa como origen, destino o motor de la aplicación.',
    'Amazon Redshift':'Data warehouse analítico; se usa para reporting, agregaciones y OLAP.',
    'Amazon DynamoDB':'Base NoSQL clave-valor/documento; se usa para datos operacionales a escala.',
    'AWS SCT':'Convierte el esquema y el código entre motores durante una migración heterogénea.',
    'AWS Schema Conversion Tool (SCT)':'Convierte el esquema y el código entre motores durante una migración heterogénea.',
    'VPC endpoints':'Acceso privado al servicio desde tu VPC sin salir a internet.',
    'Amazon EC2':'Instancias que ejecutan la aplicación que consume el servicio.',
    'Amazon EFS':'Sistema de archivos compartido para cargas que necesitan NFS.',
    'SageMaker':'Plataforma de machine learning que puede leer datos y entrenar modelos con ellos.',
    'Global Database':'Réplica el clúster en otra región para baja latencia o recuperación ante desastres.',
    'Amazon CloudFront':'CDN que cachea contenido en edge locations para reducir latencia y descargar el origen.',
    'Amazon Route 53':'DNS gestionado que resuelve el dominio y puede enrutar con políticas de latencia, failover o ponderación.',
    'AWS Certificate Manager':'Provee y renueva certificados TLS para HTTPS en CloudFront, ELB y APIs.',
    'Elastic Load Balancing':'Reparte el tráfico entre destinos y hace comprobaciones de estado; ALB es capa 7, NLB es capa 4.',
    'AWS Auto Scaling':'Ajusta la capacidad de EC2, ECS u otros recursos según la demanda o una programación.',
    'Amazon API Gateway':'Recibe peticiones HTTP/REST, aplica autenticación y límites, y las envía al backend.',
    'Amazon SQS':'Cola de mensajes punto a punto; desacopla productor y consumidor y permite reintentos.',
    'Amazon SNS':'Publicación pub/sub: un mensaje se entrega a muchos suscriptores.',
    'Amazon EventBridge':'Bus de eventos que filtra y enruta eventos de AWS o de aplicaciones.',
    'AWS Step Functions':'Orquesta pasos con estado y maneja reintentos y errores entre servicios.',
    'AWS CloudTrail':'Registra las llamadas a la API de AWS: quién hizo qué, cuándo y desde dónde.',
    'AWS Config':'Guarda el historial de configuración y evalúa reglas de cumplimiento.',
    'Amazon GuardDuty':'Detecta actividad sospechosa usando señales de CloudTrail, VPC Flow Logs y DNS.',
    'AWS Security Hub':'Agrega y prioriza hallazgos de seguridad de varios servicios.',
    'Amazon VPC':'Red aislada en una región; contiene subredes, rutas, gateways y controles de tráfico.',
    'AWS Direct Connect':'Enlace privado dedicado entre tu red y AWS; no usa internet público.',
    'AWS Site-to-Site VPN':'Túnel cifrado por internet entre tu red y AWS; útil como respaldo de DX.',
    'AWS Transit Gateway':'Hub que conecta muchas VPC y redes on-premises sin malla de peering.',
    'AWS Well-Architected Tool':'Herramienta de la consola para revisar una carga contra los seis pilares y obtener riesgos.',
    'AWS CAF':'Marco de adopción organizacional con fases y perspectivas; no es un servicio técnico.',
    'AWS Cost Explorer':'Analiza tendencias de gasto y permite filtrar por servicio, cuenta o etiqueta.',
    'AWS Budgets':'Define presupuestos y alertas cuando el gasto o el uso se acercan a un umbral.',
    'AWS Pricing Calculator':'Estima el costo mensual de una arquitectura antes de crearla.',
    'AWS Cost and Usage Report':'Genera el dataset más granular de costos y uso para auditoría y análisis.',
    'Amazon Athena':'Consulta datos en S3 con SQL sin cargarlos en una base de datos.',
    'AWS Application Migration Service (MGN)':'Replica servidores completos hacia AWS para una migración tipo Rehost.',
    'AWS Migration Hub':'Centraliza el seguimiento del progreso de una migración.'
  },

  blocks: [
    {id:'combos', title:'Combos de examen', desc:'Servicios que se eligen juntos en preguntas de 2 o 3 respuestas, más resúmenes de marcos.', categories:['combos']},
    {id:'fundamentos', title:'Fundamentos y global', desc:'Regiones, zonas de disponibilidad, edge locations y modelos de despliegue.', categories:['global']},
    {id:'computo', title:'Cómputo y contenedores', desc:'Servidores, serverless, contenedores y plataformas gestionadas.', categories:['computo','contenedores','serverless']},
    {id:'datos', title:'Almacenamiento y bases de datos', desc:'Objetos, bloque, archivos, SQL, NoSQL, caché y analítica.', categories:['almacenamiento','bases-datos']},
    {id:'redes', title:'Redes y entrega', desc:'VPC, conectividad híbrida, DNS, CDN, balanceo y APIs.', categories:['redes']},
    {id:'seguridad', title:'Seguridad e identidad', desc:'Identidad, cifrado, detección, protección y cumplimiento.', categories:['seguridad']},
    {id:'gestion', title:'Gestión y costos', desc:'Observabilidad, gobernanza, facturación, soporte y TCO.', categories:['gestion','costos','soporte']},
    {id:'analitica', title:'Analítica, IA e integración', desc:'Consultas, streaming, machine learning, mensajería y contact center.', categories:['analitica','ia','integracion','business']},
    {id:'migracion', title:'Migración, desarrollo y más', desc:'Migración, CI/CD, escritorios virtuales, frontend e IoT.', categories:['migracion','desarrollo','euc','frontend','iot']}
  ],

  categories: {
    global: {
      id:'global', block:'fundamentos', title:'Infraestructura global', status:'soon', officialCount:6, countLabel:'6 conceptos',
      desc:'Regiones, AZ, edge locations, Local Zones, Wavelength y Outposts.',
      soon:'Aquí explicaremos cómo elegir región, cuándo usar Multi-AZ y qué diferencia hay entre edge location, Local Zone y Outpost.'
    },
    computo: {
      id:'computo', block:'computo', title:'Cómputo', status:'soon', officialCount:5,
      desc:'EC2, Lightsail, Elastic Beanstalk, Batch y Outposts.',
      soon:'La categoría incluirá familias de EC2, modelos de compra, Auto Scaling y el árbol de decisión entre EC2, Lambda y contenedores.'
    },
    contenedores: {
      id:'contenedores', block:'computo', title:'Contenedores', status:'soon', officialCount:3,
      desc:'ECS, EKS y ECR.',
      soon:'Veremos la diferencia entre ECS, EKS y Fargate, y cuándo un contenedor necesita un clúster o no.'
    },
    serverless: {
      id:'serverless', block:'computo', title:'Serverless', status:'soon', officialCount:2,
      desc:'Lambda y Fargate.',
      soon:'Incluirá límites de Lambda, eventos, cold starts y la diferencia entre serverless de funciones y de contenedores.'
    },
    almacenamiento: {
      id:'almacenamiento', block:'datos', title:'Almacenamiento', status:'soon', officialCount:8,
      desc:'S3, EBS, EFS, FSx, Backup, Storage Gateway y Glacier.',
      soon:'Se explicarán objetos, bloque y archivos, las clases de S3, el ciclo de vida y cuándo usar cada tipo de almacenamiento.'
    },
    'bases-datos': {
      id:'bases-datos', block:'datos', title:'Bases de datos', status:'ready', officialCount:6, readyLabel:'12 fichas',
      desc:'Primero el modelo de datos; después el servicio, la disponibilidad y el costo.',
      intro:'En CLF-C02 no se trata de memorizar motores, sino de reconocer la palabra clave del enunciado: relacional, NoSQL, caché, warehouse o migración. Empieza por la decisión SQL frente a NoSQL y después baja al servicio concreto.',
      decision:{
        title:'La primera decisión: ¿SQL o NoSQL?',
        sql:{
          title:'SQL / relacional',
          lead:'Datos estructurados, transacciones y joins.',
          points:[
            'Esquema definido y relaciones entre tablas.',
            'Transacciones ACID y consultas con JOIN.',
            'Migras una aplicación existente con MySQL, PostgreSQL, Oracle o SQL Server.',
            'Buscas backups, parches del motor y alta disponibilidad gestionados.'
          ],
          services:'RDS · Aurora'
        },
        nosql:{
          title:'NoSQL',
          lead:'Esquema flexible, escala masiva y acceso por clave.',
          points:[
            'El esquema cambia o no necesitas joins.',
            'Necesitas latencia de milisegundos a gran escala.',
            'El acceso principal es por clave, documento, grafo o columna ancha.',
            'Buscas serverless o escalado horizontal sin administrar servidores.'
          ],
          services:'DynamoDB · DocumentDB · Neptune · Keyspaces'
        },
        note:''
      },
      subcategories:[
        {id:'sql', title:'SQL / relacional', desc:'Motor gestionado, esquema fijo, transacciones y joins.', when:'Aplicaciones tradicionales, ERP, CRM, comercio con transacciones y migraciones de motores existentes.', services:'RDS y Aurora'},
        {id:'nosql', title:'NoSQL', desc:'Clave-valor, documentos, grafos o columnas anchas.', when:'Escala masiva, esquema flexible, acceso por clave, documentos JSON o relaciones complejas.', services:'DynamoDB, DocumentDB, Neptune y Keyspaces'},
        {id:'cache', title:'Caché en memoria', desc:'Microsegundos delante de la base principal.', when:'Lecturas repetidas, sesiones, tablas de clasificación o reducir la carga de la base de datos.', services:'ElastiCache, MemoryDB y DAX'},
        {id:'analitica', title:'Analítica / warehouse', desc:'Consultas analíticas sobre grandes volúmenes.', when:'BI, reporting, agregaciones históricas y OLAP; no para transacciones del día a día.', services:'Redshift'},
        {id:'migracion', title:'Migración', desc:'Mover datos y convertir esquemas.', when:'Migrar una base existente a AWS, sobre todo si cambias de motor.', services:'DMS y SCT'}
      ]
    },
    redes: {
      id:'redes', block:'redes', title:'Redes y entrega', status:'soon', officialCount:11,
      desc:'VPC, subredes, Route 53, CloudFront, Direct Connect, VPN y balanceadores.',
      soon:'Incluirá la diferencia entre security group y NACL, subred pública/privada, ALB/NLB, DNS y conexiones híbridas.'
    },
    seguridad: {
      id:'seguridad', block:'seguridad', title:'Seguridad e identidad', status:'soon', officialCount:18,
      desc:'IAM, KMS, GuardDuty, WAF, Shield, Artifact y cumplimiento.',
      soon:'Se organizará en identidad, cifrado, detección, protección y cumplimiento, con las confusiones típicas de cada servicio.'
    },
    gestion: {
      id:'gestion', block:'gestion', title:'Gestión y gobernanza', status:'soon', officialCount:16,
      desc:'CloudWatch, CloudTrail, Config, Organizations, Systems Manager y Trusted Advisor.',
      soon:'La categoría explicará observabilidad, auditoría, configuración, gobernanza multi-cuenta y automatización.'
    },
    costos: {
      id:'costos', block:'gestion', title:'Costos y facturación', status:'soon', officialCount:4,
      desc:'Cost Explorer, Budgets, Pricing Calculator, TCO y Cost and Usage Reports.',
      soon:'Incluirá los generadores de costo, Free Tier, herramientas de estimación y optimización.'
    },
    soporte: {
      id:'soporte', block:'gestion', title:'Planes de soporte', status:'ready', officialCount:1, readyLabel:'4 planes',
      desc:'Basic, Business Support+, Enterprise Support y Unified Operations.',
      intro:'El examen pregunta por la diferencia entre planes: respuesta ante casos críticos, Technical Account Manager (TAM), Trusted Advisor y a quién está dirigido cada uno. No memorices el precio exacto; memoriza la escalera 30 / 15 / 5 minutos y la presencia de TAM.',
      decision:{
        title:'La escalera de soporte',
        sql:{
          title:'Basic / Business Support+',
          lead:'Entrada y producción estándar.',
          points:['Basic: gratis, documentación y foros, sin soporte técnico.','Business Support+: 24/7, críticos en 30 min, Trusted Advisor completo, sin TAM.','Ideal para producción que necesita soporte técnico sin llegar a Enterprise.'],
          services:'Basic · Business Support+'
        },
        nosql:{
          title:'Enterprise / Unified',
          lead:'Misión crítica y grandes organizaciones.',
          points:['Enterprise: críticos en 15 min, TAM designado y revisión proactiva.','Unified: críticos en 5 min, TAM + especialistas y equipo designado.','Si el enunciado pide TAM, descarta Basic y Business+.'],
          services:'Enterprise Support · Unified Operations'
        },
        note:'Si el enunciado menciona TAM, la respuesta no puede ser Basic ni Business+. Si menciona 5 minutos o un equipo designado de especialistas, piensa en Unified Operations.'
      },
      subcategories:[
        {id:'planes', title:'Planes disponibles', desc:'La escalera completa de soporte de AWS.', when:'Elegir plan según criticidad, presupuesto, TAM y tiempo de respuesta.', services:'Basic, Business Support+, Enterprise Support y Unified Operations'}
      ]
    },
    combos: {
      id:'combos', block:'combos', title:'Combos y marcos', status:'ready', officialCount:0,
      desc:'Conjuntos de servicios que el examen pide elegir juntos, más resúmenes de Well-Architected, CAF y 7 R.',
      intro:'Un combo no es un servicio nuevo: es una arquitectura mínima que el examen presenta en preguntas de “Selecciona DOS” o “Selecciona TRES”. Aquí ves por qué esos servicios van juntos, cuál es el distractor típico y qué no debes añadir.',
      subcategories:[
        {id:'arquitectura', title:'Arquitectura y servicios', desc:'Web estática, aplicación escalable, API serverless y autenticación.', when:'Preguntas de “qué combinación de servicios cumple el requisito”.', services:'S3 + CloudFront + Route 53 · EC2 + ELB + Auto Scaling · API Gateway + Lambda + DynamoDB · Cognito + API Gateway + Lambda'},
        {id:'datos', title:'Datos y analítica', desc:'Alta disponibilidad, rendimiento, data lake y migración.', when:'Combinar disponibilidad, rendimiento, almacenamiento, consulta y migración.', services:'RDS Multi-AZ + Read Replica + ElastiCache · S3 + Glue + Athena + QuickSight · DynamoDB + DAX + Global Tables · DMS + SCT + RDS/Aurora'},
        {id:'desarrollo', title:'Desarrollo y contenedores', desc:'CI/CD y ejecución de contenedores.', when:'Preguntas de entrega continua o ejecución de contenedores.', services:'CodeCommit + CodeBuild + CodePipeline + CodeDeploy · ECR + ECS/EKS + Fargate'},
        {id:'seguridad', title:'Seguridad y auditoría', desc:'Identidad, auditoría, detección y protección en el borde.', when:'Preguntas de “quién hizo qué”, cumplimiento, detección de amenazas o protección DDoS.', services:'IAM + CloudTrail + Config + GuardDuty · CloudFront + WAF + Shield · GuardDuty + Security Hub + Detective'},
        {id:'redes', title:'Conectividad híbrida', desc:'Conectar el datacenter con AWS y varias VPC.', when:'Enlaces dedicados, VPN y enrutamiento entre redes.', services:'VPC + Direct Connect + VPN + Transit Gateway'},
        {id:'integracion', title:'Mensajería y eventos', desc:'Desacoplar, notificar, reaccionar y orquestar.', when:'Colas, pub/sub, eventos, flujos con estado y automatización por archivo.', services:'SQS + SNS + EventBridge + Step Functions · S3 + EventBridge + Lambda'},
        {id:'operacion', title:'Operación y recuperación', desc:'Alertas, migración de servidores y copias de seguridad.', when:'Monitorear, recuperar o proteger cargas.', services:'CloudWatch + SNS + Lambda · MGN + DRS + Migration Hub · Backup + S3 Glacier + DRS'},
        {id:'costos', title:'Análisis de costos', desc:'Detalle, almacenamiento y consulta del gasto.', when:'Auditar costos con el dataset detallado.', services:'CUR + S3 + Athena + QuickSight'},
        {id:'ia', title:'Machine learning', desc:'Entrenar y desplegar modelos con datos y contenedores.', when:'Un flujo de ML de extremo a extremo.', services:'SageMaker AI + S3 + ECR'},
        {id:'iot', title:'IoT', desc:'Conectar dispositivos y procesar datos en el borde.', when:'Telemetría de dispositivos o cómputo local.', services:'IoT Core + Greengrass + Kinesis'},
        {id:'marcos', title:'Marcos y resúmenes', desc:'Well-Architected, CAF y las 7 R.', when:'Preguntas de arquitectura, adopción organizacional y migración.', services:'Well-Architected · AWS CAF · 7 R'}
      ]
    },
    analitica: {
      id:'analitica', block:'analitica', title:'Analítica', status:'soon', officialCount:7,
      desc:'Athena, Glue, EMR, Kinesis, OpenSearch, QuickSight y Redshift.',
      soon:'Se explicará la diferencia entre consultar, mover, procesar, transmitir y visualizar datos.'
    },
    ia: {
      id:'ia', block:'analitica', title:'IA y machine learning', status:'soon', officialCount:9,
      desc:'SageMaker, Bedrock, Rekognition, Textract, Comprehend, Lex, Polly y Q.',
      soon:'La categoría se organizará por tarea: visión, documentos, texto, voz, chatbots, búsqueda y plataforma de ML.'
    },
    integracion: {
      id:'integracion', block:'analitica', title:'Integración de aplicaciones', status:'soon', officialCount:4,
      desc:'SQS, SNS, EventBridge y Step Functions.',
      soon:'Incluirá la diferencia entre cola, pub/sub, bus de eventos y orquestación.'
    },
    business: {
      id:'business', block:'analitica', title:'Aplicaciones de negocio', status:'soon', officialCount:2,
      desc:'Amazon Connect y Amazon SES.',
      soon:'Se explicará contacto omnicanal y correo transaccional o masivo.'
    },
    migracion: {
      id:'migracion', block:'migracion', title:'Migración y transferencia', status:'soon', officialCount:6,
      desc:'MGN, DMS, SCT, Migration Hub, Discovery y Migration Evaluator.',
      soon:'Se asociará cada herramienta con la fase: descubrir, evaluar, mover servidores, mover bases o transferir archivos.'
    },
    desarrollo: {
      id:'desarrollo', block:'migracion', title:'Herramientas de desarrollo', status:'soon', officialCount:4,
      desc:'CLI, CodeBuild, CodePipeline y X-Ray.',
      soon:'Incluirá CI/CD, trazabilidad y automatización del despliegue.'
    },
    euc: {
      id:'euc', block:'migracion', title:'Usuario final', status:'soon', officialCount:3,
      desc:'WorkSpaces, AppStream 2.0 y WorkSpaces Secure Browser.',
      soon:'Se explicará escritorio virtual completo frente a streaming de una sola aplicación.'
    },
    frontend: {
      id:'frontend', block:'migracion', title:'Frontend y móvil', status:'soon', officialCount:1,
      desc:'AWS Amplify.',
      soon:'Se explicará el despliegue de aplicaciones web y móviles y su relación con AppSync, Cognito y S3.'
    },
    iot: {
      id:'iot', block:'migracion', title:'IoT', status:'soon', officialCount:1,
      desc:'AWS IoT Core y el borde con Greengrass.',
      soon:'Se explicará la conexión de dispositivos y el procesamiento local en el borde.'
    }
  },

  services: {
    rds: {
      cat:'bases-datos', sub:'sql', type:'service', name:'Amazon RDS', scope:'CLF-C02',
      tagline:'Base de datos relacional gestionada.',
      keyword:'Base de datos SQL gestionada / AWS parchea el motor.',
      what:'Servicio gestionado para motores relacionales: MySQL, PostgreSQL, MariaDB, Oracle y SQL Server. AWS administra el hardware, el sistema operativo, los parches del motor y las copias de seguridad; tú administras datos, usuarios, esquema y red.',
      when:'Tienes una aplicación con SQL, transacciones, joins y un motor concreto, y quieres delegar la operación sin reescribir la aplicación. También cuando necesitas Multi-AZ o réplicas de lectura.',
      not:[
        'No te da acceso al sistema operativo ni al host.',
        'No es NoSQL ni un data warehouse.',
        'No escala escrituras horizontalmente como DynamoDB; para lectura usa réplicas.',
        'No es lo mismo que Aurora: Aurora es un motor propio compatible.'
      ],
      confuse:[
        {name:'Amazon Aurora', why:'Aurora es un motor de AWS compatible con MySQL/PostgreSQL; RDS ofrece motores estándar.'},
        {name:'Amazon DynamoDB', why:'DynamoDB es NoSQL clave-valor/documento; RDS es relacional.'},
        {name:'Amazon Redshift', why:'Redshift es un warehouse analítico (OLAP), no una base transaccional.'},
        {name:'EC2 con base de datos', why:'En EC2 tú parcheas el SO y administras la base; en RDS lo hace AWS.'}
      ],
      connections:['VPC y Security Groups','AWS KMS','Secrets Manager','CloudWatch','AWS DMS','AWS Backup'],
      connectionInfo:{
        'VPC y Security Groups':'RDS se crea en subredes de tu VPC. El security group debe permitir el puerto del motor desde la aplicación; la base no queda expuesta a internet por defecto.',
        'AWS KMS':'Cifra el almacenamiento de la instancia y los snapshots. Puedes elegir una clave gestionada por AWS o una clave propia de KMS.',
        'Secrets Manager':'Guarda y rota el usuario y la contraseña que usa la aplicación para conectarse a la base.',
        'CloudWatch':'Publica métricas de CPU, conexiones e IOPS y permite configurar alarmas; también puede recibir logs de auditoría.',
        'AWS DMS':'Carga los datos iniciales y replica cambios desde otra base hacia RDS durante una migración.',
        'AWS Backup':'Crea copias programadas y políticas de retención centralizadas; complementa los backups automáticos de RDS.'
      },
      slides:['s25','s64'], block:7
    },
    aurora: {
      cat:'bases-datos', sub:'sql', type:'service', name:'Amazon Aurora', scope:'CLF-C02',
      tagline:'Motor relacional de AWS compatible con MySQL y PostgreSQL.',
      keyword:'Relacional de alto rendimiento / 6 copias en 3 AZ / 15 réplicas.',
      what:'Motor relacional gestionado por AWS, compatible con MySQL y PostgreSQL. Distribuye el almacenamiento en 6 copias y 3 zonas de disponibilidad, permite hasta 15 réplicas de lectura y ofrece Aurora Serverless v2 para capacidad variable.',
      when:'Necesitas un relacional con alta disponibilidad, rendimiento y réplicas de lectura, o vienes de MySQL/PostgreSQL y quieres menos operación. También para cargas variables con Serverless v2.',
      not:[
        'No es un MySQL o PostgreSQL idéntico: es compatible, no idéntico.',
        'No es NoSQL ni un data warehouse.',
        'No elimina tu responsabilidad sobre datos, usuarios, permisos y red.',
        'No es la única opción relacional: RDS sigue existiendo para motores estándar.'
      ],
      confuse:[
        {name:'Amazon RDS', why:'RDS aloja motores estándar; Aurora es un motor propio compatible.'},
        {name:'Amazon DynamoDB', why:'DynamoDB es NoSQL; Aurora es relacional.'},
        {name:'Amazon Redshift', why:'Redshift es analítico; Aurora es transaccional.'}
      ],
      connections:['RDS','VPC y Security Groups','AWS KMS','CloudWatch','Secrets Manager','AWS DMS','Global Database'],
      connectionInfo:{
        'RDS':'Aurora es una opción relacional dentro del ecosistema RDS; comparte herramientas de gestión, backups y monitoreo.',
        'VPC y Security Groups':'Aurora se despliega en subredes privadas de tu VPC; el security group controla el acceso al puerto del motor.',
        'AWS KMS':'Cifra el almacenamiento y los snapshots del clúster con claves de KMS.',
        'CloudWatch':'Publica métricas de rendimiento, conexiones y réplicas para alarmas y paneles.',
        'Secrets Manager':'Guarda y rota las credenciales que usa la aplicación para conectarse al clúster.',
        'AWS DMS':'Mueve datos y cambios desde otra base hacia Aurora durante una migración.',
        'Global Database':'Replica el clúster en otra región para recuperación ante desastres o lectura cercana al usuario.'
      },
      slides:['s25','s64'], block:7
    },
    dynamodb: {
      cat:'bases-datos', sub:'nosql', type:'service', name:'Amazon DynamoDB', scope:'CLF-C02',
      tagline:'Base NoSQL serverless de clave-valor y documentos.',
      keyword:'NoSQL serverless / milisegundos de un solo dígito / escala masiva.',
      what:'Base de datos NoSQL totalmente gestionada y serverless, con modelo clave-valor y documentos, latencia de milisegundos de un solo dígito, escalado automático, Global Tables y Streams.',
      when:'Cargas con esquema flexible y acceso por clave: carritos, sesiones, gaming, IoT, aplicaciones móviles o cualquier caso que necesite escala masiva sin administrar servidores. No necesitas joins.',
      not:[
        'No es una base relacional: no hace joins SQL ni transacciones complejas como RDS.',
        'No es un data warehouse.',
        'No es un sistema de archivos.',
        'No es un caché: es la base primaria; DAX o ElastiCache son caché.'
      ],
      confuse:[
        {name:'Amazon RDS / Aurora', why:'Son relacionales; DynamoDB es NoSQL.'},
        {name:'Amazon DocumentDB', why:'DocumentDB es compatible con MongoDB; DynamoDB usa su propia API.'},
        {name:'Amazon Neptune', why:'Neptune es de grafos; DynamoDB es clave-valor/documento.'},
        {name:'Amazon Redshift', why:'Redshift es warehouse analítico; DynamoDB es operacional.'},
        {name:'DAX / ElastiCache', why:'Son caché; DynamoDB es la base de datos.'}
      ],
      connections:['AWS Lambda','API Gateway','IAM','AWS KMS','DynamoDB Streams','Global Tables','DAX','EventBridge'],
      slides:['s26'], block:7
    },
    documentdb: {
      cat:'bases-datos', sub:'nosql', type:'service', name:'Amazon DocumentDB', scope:'CLF-C02',
      tagline:'Base de datos de documentos compatible con MongoDB.',
      keyword:'MongoDB compatible / documentos JSON.',
      what:'Base de datos de documentos gestionada y compatible con MongoDB. Permite migrar aplicaciones que ya usan el modelo de documentos y la API de MongoDB.',
      when:'Tienes una aplicación MongoDB o necesitas un modelo de documentos JSON con un servicio gestionado.',
      not:[
        'No es DynamoDB: usa la API de MongoDB, no la API propietaria de DynamoDB.',
        'No es relacional.',
        'No es una base de grafos.',
        'No es un data warehouse.'
      ],
      confuse:[
        {name:'Amazon DynamoDB', why:'DynamoDB es clave-valor/documento con API propia; DocumentDB es compatible con MongoDB.'},
        {name:'Amazon Neptune', why:'Neptune es de grafos; DocumentDB es de documentos.'},
        {name:'Amazon RDS', why:'RDS es relacional; DocumentDB es documental.'}
      ],
      connections:['VPC y Security Groups','AWS KMS','CloudWatch','AWS DMS','Secrets Manager'],
      slides:['s26'], block:7
    },
    neptune: {
      cat:'bases-datos', sub:'nosql', type:'service', name:'Amazon Neptune', scope:'CLF-C02',
      tagline:'Base de datos de grafos gestionada.',
      keyword:'Grafos / relaciones complejas / recomendaciones / fraude / redes sociales.',
      what:'Base de datos de grafos gestionada para property graph y RDF. Consulta con Gremlin o SPARQL y está pensada para relaciones muy conectadas.',
      when:'Redes sociales, detección de fraude, motores de recomendación, grafos de conocimiento o cualquier caso donde las relaciones importan más que las filas.',
      not:[
        'No es relacional.',
        'No es una base de documentos.',
        'No es un key-value simple.',
        'No es un data warehouse.'
      ],
      confuse:[
        {name:'Amazon DynamoDB', why:'DynamoDB es clave-valor/documento; Neptune es de grafos.'},
        {name:'Amazon DocumentDB', why:'DocumentDB es documental; Neptune es de grafos.'},
        {name:'Amazon RDS', why:'RDS es relacional; Neptune modela relaciones como grafo.'}
      ],
      connections:['VPC y Security Groups','IAM','AWS KMS','CloudWatch','AWS Glue','SageMaker'],
      slides:['s26'], block:7
    },
    keyspaces: {
      cat:'bases-datos', sub:'nosql', type:'service', name:'Amazon Keyspaces', scope:'Complementario',
      scopeNote:'Aparece en guías anteriores y material complementario; no está en la lista oficial actual de CLF-C02.',
      tagline:'NoSQL wide-column compatible con Apache Cassandra.',
      keyword:'Cassandra / columnas anchas / migrar Cassandra.',
      what:'Base de datos NoSQL wide-column serverless y compatible con Apache Cassandra. Permite usar el modelo de columnas anchas y migrar cargas Cassandra sin administrar clústeres.',
      when:'Tienes una carga Cassandra, necesitas escrituras altas y un modelo de columnas anchas, o quieres compatibilidad con el ecosistema Cassandra.',
      not:[
        'No usa la API de DynamoDB.',
        'No es relacional.',
        'No es MongoDB.',
        'No es una base de grafos.'
      ],
      confuse:[
        {name:'Amazon DynamoDB', why:'DynamoDB tiene API propia; Keyspaces es compatible con Cassandra.'},
        {name:'Amazon DocumentDB', why:'DocumentDB es documental; Keyspaces es wide-column.'},
        {name:'Amazon Neptune', why:'Neptune es de grafos; Keyspaces es columnar.'}
      ],
      connections:['IAM','CloudWatch','AWS Backup','VPC endpoints'],
      slides:['s26'], block:7
    },
    elasticache: {
      cat:'bases-datos', sub:'cache', type:'service', name:'Amazon ElastiCache', scope:'CLF-C02',
      tagline:'Caché en memoria gestionada con Redis o Memcached.',
      keyword:'Caché en memoria / microsegundos / reducir latencia de la base de datos.',
      what:'Servicio de caché en memoria gestionado con Redis o Memcached. Guarda datos de acceso frecuente para responder en microsegundos y reducir la carga de la base de datos.',
      when:'Lecturas repetidas, sesiones, tablas de clasificación, páginas de inicio o cualquier caso donde quieras evitar consultar la base principal en cada petición.',
      not:[
        'No es una base primaria duradera para todos los casos.',
        'No es un data warehouse.',
        'No sustituye a RDS.',
        'No es DAX: DAX es específico de DynamoDB.'
      ],
      confuse:[
        {name:'Amazon MemoryDB', why:'MemoryDB es una base en memoria duradera; ElastiCache es caché.'},
        {name:'DynamoDB Accelerator (DAX)', why:'DAX solo acelera DynamoDB; ElastiCache sirve a otras bases y aplicaciones.'},
        {name:'Amazon DynamoDB', why:'DynamoDB es la base primaria; ElastiCache es caché.'}
      ],
      connections:['Amazon RDS','Amazon EC2','AWS Lambda','VPC y Security Groups','CloudWatch','Secrets Manager'],
      slides:['s64'], block:7
    },
    memorydb: {
      cat:'bases-datos', sub:'cache', type:'service', name:'Amazon MemoryDB', scope:'Complementario',
      scopeNote:'Aparece en guías anteriores y material complementario; no está en la lista oficial actual de CLF-C02.',
      tagline:'Base de datos en memoria compatible con Redis, con durabilidad.',
      keyword:'Redis duradero / base en memoria / microsegundos.',
      what:'Base de datos en memoria compatible con Redis que añade durabilidad y consistencia. No es solo una caché: puede actuar como base primaria para cargas que necesitan latencia muy baja.',
      when:'Necesitas el rendimiento de Redis como base principal duradera, por ejemplo microservicios, sesiones críticas o tablas de clasificación que no pueden perder datos.',
      not:[
        'No es ElastiCache: ElastiCache es caché; MemoryDB está pensado como base duradera.',
        'No es una base relacional.',
        'No es DynamoDB.',
        'No es un data warehouse.'
      ],
      confuse:[
        {name:'Amazon ElastiCache', why:'ElastiCache es caché; MemoryDB añade durabilidad como base primaria.'},
        {name:'DynamoDB Accelerator (DAX)', why:'DAX solo cachea DynamoDB; MemoryDB es una base Redis.'},
        {name:'Amazon DynamoDB', why:'DynamoDB es NoSQL clave-valor; MemoryDB es Redis en memoria.'}
      ],
      connections:['VPC y Security Groups','AWS KMS','CloudWatch','IAM'],
      slides:['s64'], block:7
    },
    dax: {
      cat:'bases-datos', sub:'cache', type:'service', name:'DynamoDB Accelerator (DAX)', scope:'Complementario',
      scopeNote:'Servicio complementario de DynamoDB; no aparece como entrada independiente en la lista oficial actual.',
      tagline:'Caché en memoria específico para DynamoDB.',
      keyword:'Caché para DynamoDB / lecturas en microsegundos.',
      what:'Caché en memoria gestionado para DynamoDB. Reduce las lecturas de milisegundos a microsegundos y escribe a través de DynamoDB, sin cambiar la API de la aplicación.',
      when:'Tienes una carga DynamoDB con muchas lecturas repetidas y necesitas microsegundos, o quieres reducir la presión de lectura sobre la tabla.',
      not:[
        'No es una base de datos independiente.',
        'No funciona con RDS ni con otros motores.',
        'No reemplaza a DynamoDB.',
        'No es ElastiCache.'
      ],
      confuse:[
        {name:'Amazon ElastiCache', why:'ElastiCache es un caché general; DAX solo acelera DynamoDB.'},
        {name:'Amazon DynamoDB', why:'DynamoDB es la base; DAX es su caché.'}
      ],
      connections:['Amazon DynamoDB','VPC y Security Groups','IAM','CloudWatch'],
      slides:['s64'], block:7
    },
    redshift: {
      cat:'bases-datos', sub:'analitica', type:'service', name:'Amazon Redshift', scope:'CLF-C02',
      tagline:'Data warehouse columnar para analítica SQL.',
      keyword:'Data warehouse / OLAP (procesamiento analítico) / SQL sobre grandes volúmenes.',
      what:'Data warehouse columnar gestionado para consultas analíticas a gran escala. Ofrece Redshift Serverless y Redshift Spectrum para consultar datos en S3.',
      when:'BI, reporting, agregaciones históricas y análisis sobre grandes volúmenes de datos donde importa el rendimiento de lectura analítica, no las transacciones del día a día.',
      not:[
        'No es OLTP: no reemplaza a RDS o Aurora.',
        'No es una base documental.',
        'No está pensado para transacciones pequeñas de alta concurrencia.',
        'No es un lago de datos por sí solo; con Spectrum consulta S3.'
      ],
      confuse:[
        {name:'Amazon RDS / Aurora', why:'Son bases transaccionales; Redshift es analítico.'},
        {name:'Amazon Athena', why:'Athena consulta S3 sin cargar datos; Redshift es un warehouse con almacenamiento propio.'},
        {name:'Amazon EMR', why:'EMR procesa big data con Hadoop/Spark; Redshift es un warehouse SQL.'},
        {name:'Amazon QuickSight', why:'QuickSight visualiza; Redshift almacena y consulta.'}
      ],
      connections:['Amazon S3','AWS Glue','Amazon QuickSight','Amazon Kinesis','AWS DMS','Lake Formation'],
      slides:['s26'], block:7
    },
    dms: {
      cat:'bases-datos', sub:'migracion', type:'service', name:'AWS Database Migration Service (DMS)', scope:'CLF-C02',
      tagline:'Migración de bases de datos con replicación continua.',
      keyword:'Migrar base de datos / mínima interrupción / replicación continua.',
      what:'Servicio de migración de bases de datos que mueve datos entre motores homogéneos o heterogéneos, con replicación continua y captura de cambios (CDC).',
      when:'Mueves una base existente a RDS, Aurora, DynamoDB o Redshift y necesitas minimizar el tiempo de inactividad. También para replicación continua.',
      not:[
        'No es una base de datos.',
        'No convierte el esquema por sí solo: para eso está SCT.',
        'No migra servidores completos: para eso está MGN.',
        'No es un servicio de backup.'
      ],
      confuse:[
        {name:'AWS Schema Conversion Tool (SCT)', why:'SCT convierte el esquema; DMS mueve los datos.'},
        {name:'AWS Backup', why:'Backup protege y restaura; DMS migra.'},
        {name:'AWS Application Migration Service (MGN)', why:'MGN migra servidores completos; DMS migra bases de datos.'},
        {name:'AWS DataSync', why:'DataSync mueve archivos; DMS mueve bases.'}
      ],
      connections:['Amazon RDS / Aurora','Amazon Redshift','Amazon DynamoDB','AWS SCT','VPC y Security Groups','CloudWatch'],
      slides:['s42'], block:13
    },
    sct: {
      cat:'bases-datos', sub:'migracion', type:'service', name:'AWS Schema Conversion Tool (SCT)', scope:'CLF-C02',
      tagline:'Conversión de esquemas entre motores de base de datos.',
      keyword:'Convertir esquema / migración heterogénea / Oracle a Aurora.',
      what:'Herramienta que evalúa la compatibilidad y convierte el esquema y el código de una base de datos de un motor a otro. Se usa en migraciones heterogéneas.',
      when:'Vas de Oracle a Aurora PostgreSQL, de SQL Server a MySQL o de otro motor a uno distinto. Primero SCT convierte el esquema; después DMS mueve los datos.',
      not:[
        'No mueve los datos: para eso está DMS.',
        'No es una base de datos.',
        'No migra servidores completos.',
        'No es necesaria en una migración homogénea del mismo motor.'
      ],
      confuse:[
        {name:'AWS DMS', why:'DMS mueve datos; SCT convierte esquemas.'},
        {name:'AWS Migration Hub', why:'Migration Hub hace seguimiento; SCT convierte.'},
        {name:'AWS Application Migration Service (MGN)', why:'MGN migra servidores; SCT trabaja con esquemas de bases.'}
      ],
      connections:['AWS DMS','Amazon RDS / Aurora','Amazon Redshift'],
      slides:['s42'], block:13
    },

    'soporte-basic': {
      cat:'soporte', sub:'planes', type:'plan', name:'AWS Basic Support', scope:'CLF-C02',
      tagline:'Plan básico gratuito incluido con toda cuenta.',
      keyword:'Gratis / documentación y foros / sin soporte técnico.',
      what:'Plan incluido sin costo. Da acceso a documentación, foros, Health Dashboard, atención de cuenta y facturación, y comprobaciones básicas de Trusted Advisor.',
      when:'Cuentas de aprendizaje, pruebas y cargas que no necesitan soporte técnico de AWS ni tiempos de respuesta comprometidos.',
      not:[
        'No incluye soporte técnico de AWS.',
        'No incluye TAM.',
        'No ofrece tiempos de respuesta para producción.',
        'No es Business Support+ ni Enterprise.'
      ],
      confuse:[
        {name:'Business Support+', why:'Business+ sí incluye soporte técnico 24/7 y críticos en 30 min; Basic no.'},
        {name:'Developer Support (clásico)', why:'Era un plan de pago con soporte laboral; dejó de venderse el 1 de enero de 2027.'}
      ],
      connections:['Trusted Advisor (checks básicos)','AWS Health Dashboard','Support Center'],
      slides:['s48','s49'], block:14
    },
    'soporte-business': {
      cat:'soporte', sub:'planes', type:'plan', name:'AWS Business Support+', scope:'CLF-C02',
      tagline:'Soporte 24/7 para producción, sin TAM.',
      keyword:'Producción 24/7 / 30 minutos / Trusted Advisor completo / sin TAM.',
      what:'Plan de soporte para producción. Incluye acceso 24/7 a ingenieros, respuesta en menos de 30 minutos para casos críticos, Trusted Advisor completo y soporte de software de terceros. No incluye TAM. Desde USD 29/mes por cuenta.',
      when:'Tienes cargas en producción, necesitas soporte técnico real y Trusted Advisor completo, pero no justificas el costo de Enterprise.',
      not:[
        'No incluye Technical Account Manager (TAM).',
        'No ofrece respuesta de 15 minutos para críticos.',
        'No es Basic: Basic no tiene soporte técnico.',
        'No es Unified Operations.'
      ],
      confuse:[
        {name:'Enterprise Support', why:'Enterprise añade TAM y baja a 15 minutos.'},
        {name:'Unified Operations', why:'Unified añade 5 minutos y un equipo designado de especialistas.'},
        {name:'Business Support clásico', why:'El plan clásico de USD 100+ se sustituye por Business Support+.'}
      ],
      connections:['AWS Trusted Advisor','AWS Health Dashboard','Support Center','AWS Organizations'],
      slides:['s48','s49'], block:14
    },
    'soporte-enterprise': {
      cat:'soporte', sub:'planes', type:'plan', name:'AWS Enterprise Support', scope:'CLF-C02',
      tagline:'Soporte para misión crítica con TAM designado.',
      keyword:'TAM / 15 minutos / misión crítica / revisión proactiva.',
      what:'Plan para cargas críticas. Incluye respuesta en menos de 15 minutos para casos críticos, Technical Account Manager (TAM) designado, revisiones proactivas y AWS Security Incident Response. Desde USD 5.000/mes.',
      when:'La carga es crítica para el negocio, necesitas un TAM y quieres orientación proactiva, no solo abrir tickets.',
      not:[
        'No es el nivel máximo: Unified Operations ofrece 5 minutos y un equipo más amplio.',
        'No es Business Support+: Business+ no incluye TAM.',
        'No es Basic.',
        'No incluye todo el equipo de Unified Operations.'
      ],
      confuse:[
        {name:'Business Support+', why:'Business+ no tiene TAM y responde en 30 minutos.'},
        {name:'Unified Operations', why:'Unified tiene 5 minutos, TAM y especialistas de dominio.'},
        {name:'AWS Support (genérico)', why:'AWS Support es la familia; Enterprise es un plan concreto.'}
      ],
      connections:['Technical Account Manager (TAM)','Trusted Advisor','AWS Security Incident Response','Support Center','AWS Well-Architected'],
      slides:['s48','s49'], block:14
    },
    'soporte-unified': {
      cat:'soporte', sub:'planes', type:'plan', name:'AWS Unified Operations', scope:'CLF-C02',
      tagline:'El nivel más alto de soporte para grandes organizaciones.',
      keyword:'5 minutos / TAM + especialistas / grandes organizaciones / misión crítica.',
      what:'Plan de soporte más alto. Incluye respuesta en menos de 5 minutos para casos críticos, TAM designado, Domain Specialist Engineer (DSE), equipo de especialistas y operaciones integradas para entornos multi-cuenta. Desde USD 50.000/mes.',
      when:'Grandes organizaciones con cargas de misión crítica, varias cuentas y necesidad de un equipo designado que entienda su entorno.',
      not:[
        'No es para empresas emergentes o presupuestos pequeños: parte de USD 50.000/mes.',
        'No es Business Support+.',
        'No es Enterprise Support: Unified añade 5 minutos y un equipo más amplio.',
        'No es solo un plan de tickets; incluye operaciones integradas.'
      ],
      confuse:[
        {name:'Enterprise Support', why:'Enterprise responde en 15 minutos con TAM; Unified baja a 5 y añade DSE.'},
        {name:'Business Support+', why:'Business+ responde en 30 minutos y no tiene TAM.'},
        {name:'AWS Managed Services (AMS)', why:'AMS opera la infraestructura; Unified es un plan de soporte.'}
      ],
      connections:['Technical Account Manager (TAM)','Domain Specialist Engineer (DSE)','Support Center','AWS Organizations','Trusted Advisor'],
      slides:['s48','s49'], block:14
    },

    'combo-web': {
      cat:'combos', sub:'arquitectura', type:'combo', name:'Web estática: S3 + CloudFront + Route 53', scope:'CLF-C02',
      tagline:'Contenido estático global, barato y con baja latencia.',
      keyword:'Sitio estático / contenido global / HTTPS / dominio.',
      what:'S3 guarda los objetos, CloudFront los cachea en edge locations y Route 53 resuelve el dominio. Juntos publican una web estática sin servidores y con baja latencia.',
      when:'Landing, documentación, assets, SPA estática o cualquier contenido que no necesite backend dinámico. Si hay formularios, login o datos cambiantes, añade API Gateway/Lambda/Cognito.',
      not:[
        'No sirve para una aplicación con sesiones o base de datos dinámica.',
        'S3 por sí solo no te da HTTPS con dominio ni caché global.',
        'CloudFront no reemplaza Route 53: uno cachea y el otro resuelve DNS.'
      ],
      confuse:[
        {name:'S3 solo', why:'S3 sirve el objeto, pero no cachea globalmente ni gestiona el dominio.'},
        {name:'CloudFront + ALB', why:'El ALB es para backends dinámicos; una web estática no necesita balanceador.'},
        {name:'Route 53 como CDN', why:'Route 53 resuelve nombres; no almacena ni cachea contenido.'}
      ],
      connections:['Amazon S3','Amazon CloudFront','Amazon Route 53','AWS Certificate Manager'],
      connectionInfo:{
        'Amazon S3':'S3 guarda los archivos originales del sitio (HTML, CSS, JS, imágenes); CloudFront los toma como origen.',
        'Amazon CloudFront':'CloudFront cachea los objetos de S3 en edge locations y los entrega al usuario con menor latencia.',
        'Amazon Route 53':'Route 53 apunta el dominio al distribution de CloudFront.',
        'AWS Certificate Manager':'ACM emite y renueva el certificado TLS que usa CloudFront para servir HTTPS.'
      },
      slides:['s21','s22','s30']
    },
    'combo-ec2': {
      cat:'combos', sub:'arquitectura', type:'combo', name:'Aplicación escalable: EC2 + ELB + Auto Scaling', scope:'CLF-C02',
      tagline:'Instancias detrás de un balanceador que crecen y decrecen solas.',
      keyword:'Aplicación web escalable / tráfico variable / comprobaciones de estado / Multi-AZ.',
      what:'EC2 ejecuta la aplicación, Elastic Load Balancing reparte las peticiones y Auto Scaling ajusta el número de instancias según la demanda. CloudWatch aporta las métricas que disparan el escalado.',
      when:'Una aplicación tradicional que corre en instancias, tiene tráfico variable y necesita comprobaciones de estado, alta disponibilidad entre AZ y capacidad elástica.',
      not:[
        'No es serverless: sigues administrando las instancias y su sistema operativo.',
        'El balanceador no crea instancias por sí solo; Auto Scaling no reemplaza al balanceador.',
        'No sustituye una base de datos gestionada ni una capa de caché.'
      ],
      confuse:[
        {name:'ELB + Lambda', why:'Un balanceador puede delante de Lambda, pero el combo clásico de instancias es EC2 + ELB + Auto Scaling.'},
        {name:'Lightsail', why:'Lightsail es simple y de precio fijo; no está pensado para este escalado elástico.'}
      ],
      connections:['Amazon EC2','Elastic Load Balancing','AWS Auto Scaling','Amazon CloudWatch','Amazon VPC'],
      connectionInfo:{
        'Amazon EC2':'EC2 ejecuta la aplicación; el balanceador le envía tráfico y Auto Scaling añade o quita instancias.',
        'Elastic Load Balancing':'El balanceador reparte las peticiones y hace comprobaciones de estado; si una instancia falla, deja de enviarle tráfico.',
        'AWS Auto Scaling':'Auto Scaling ajusta el número de instancias según métricas de CloudWatch o una programación.',
        'Amazon CloudWatch':'CloudWatch aporta las métricas que disparan el escalado y las alarmas de salud.',
        'Amazon VPC':'La VPC y sus subredes definen dónde viven las instancias y el balanceador.'
      },
      slides:['s19','s20','s65']
    },
    'combo-serverless': {
      cat:'combos', sub:'arquitectura', type:'combo', name:'API serverless: API Gateway + Lambda + DynamoDB', scope:'CLF-C02',
      tagline:'API sin servidores, escalado automático y pago por uso.',
      keyword:'API serverless / sin administrar servidores / escala automática / pago por uso.',
      what:'API Gateway recibe y protege las peticiones HTTP, Lambda ejecuta la lógica y DynamoDB guarda los datos. Cognito se añade si necesitas autenticación de usuarios.',
      when:'APIs, backends móviles, webhooks o microservicios con demanda impredecible y poca operación. Es el combo clásico cuando el enunciado dice “sin administrar servidores”.',
      not:[
        'Lambda tiene un máximo de 15 minutos por ejecución; no es para procesos largos.',
        'DynamoDB no es relacional: no esperes joins SQL.',
        'API Gateway no ejecuta la lógica de negocio; solo enruta y protege.'
      ],
      confuse:[
        {name:'EC2 + ELB + Auto Scaling', why:'Es la opción con servidores; el combo serverless no administra instancias.'},
        {name:'Fargate + ALB', why:'Fargate ejecuta contenedores; Lambda ejecuta funciones.'},
        {name:'API Gateway + EC2', why:'También es válido, pero no es serverless de funciones.'}
      ],
      connections:['Amazon API Gateway','AWS Lambda','Amazon DynamoDB','AWS IAM','Amazon CloudWatch'],
      connectionInfo:{
        'Amazon API Gateway':'API Gateway recibe la petición HTTP, valida el método y la envía a Lambda; también puede aplicar autenticación y límites.',
        'AWS Lambda':'Lambda ejecuta la lógica de la API y devuelve la respuesta; no administras servidores.',
        'Amazon DynamoDB':'DynamoDB guarda y recupera los datos de la aplicación mediante la API de Lambda.',
        'AWS IAM':'IAM da a Lambda el rol con permisos para leer y escribir en DynamoDB.',
        'Amazon CloudWatch':'CloudWatch recoge logs y métricas de API Gateway y Lambda para diagnosticar errores y latencia.'
      },
      slides:['s31','s32','s26']
    },
    'combo-rds-ha': {
      cat:'combos', sub:'datos', type:'combo', name:'Base HA: RDS Multi-AZ + Read Replica + ElastiCache', scope:'CLF-C02',
      tagline:'Disponibilidad, lecturas escalables y caché en la misma arquitectura.',
      keyword:'Alta disponibilidad + rendimiento de lectura / failover / caché.',
      what:'Multi-AZ mantiene una réplica síncrona para failover, la réplica de lectura descarga consultas y ElastiCache evita repetir lecturas costosas. Cada pieza resuelve un problema distinto.',
      when:'Una base relacional con requisitos de disponibilidad y muchas lecturas, o cuando el enunciado separa “sobrevivir a la caída” de “escalar lecturas”.',
      not:[
        'Multi-AZ no sirve para escalar lecturas: la réplica en espera no recibe tráfico.',
        'Una read replica no hace failover automático por sí sola.',
        'ElastiCache no es la base primaria ni sustituye a RDS.'
      ],
      confuse:[
        {name:'Multi-AZ vs Read Replica', why:'Multi-AZ es disponibilidad; read replica es rendimiento de lectura.'},
        {name:'ElastiCache vs MemoryDB', why:'ElastiCache es caché; MemoryDB es una base en memoria duradera.'},
        {name:'Aurora vs RDS', why:'Aurora tiene su propia arquitectura de almacenamiento y réplicas; el patrón Multi-AZ + réplica + caché sigue siendo válido.'}
      ],
      connections:['Amazon RDS','Amazon ElastiCache','Amazon CloudWatch','Amazon Route 53'],
      slides:['s25','s64']
    },
    'combo-lake': {
      cat:'combos', sub:'datos', type:'combo', name:'Data lake: S3 + Glue + Athena + QuickSight', scope:'CLF-C02',
      tagline:'Guardar, catalogar, consultar y visualizar datos sin moverlos.',
      keyword:'Data lake / consultas SQL sobre S3 / catálogo / BI.',
      what:'S3 almacena los datos, Glue los cataloga y transforma, Athena consulta con SQL directamente sobre S3 y QuickSight visualiza los resultados. Lake Formation añade gobierno y permisos.',
      when:'Analítica sobre datos en S3, exploración ad hoc, paneles o un data lake que debe crecer sin cargar todo en un warehouse.',
      not:[
        'S3 no es una base de datos transaccional.',
        'Athena no carga los datos: consulta lo que ya está en S3.',
        'Glue no visualiza y QuickSight no almacena el data lake.'
      ],
      confuse:[
        {name:'Redshift', why:'Redshift es un warehouse con almacenamiento propio; Athena consulta S3 sin cargar.'},
        {name:'EMR', why:'EMR procesa big data con Hadoop/Spark; Glue es ETL serverless y catálogo.'},
        {name:'OpenSearch', why:'OpenSearch es búsqueda y logs; QuickSight es BI.'}
      ],
      connections:['Amazon S3','AWS Glue','Amazon Athena','Amazon QuickSight','Lake Formation'],
      slides:['s51']
    },
    'combo-security': {
      cat:'combos', sub:'seguridad', type:'combo', name:'Auditoría y protección: IAM + CloudTrail + Config + GuardDuty', scope:'CLF-C02',
      tagline:'Quién puede hacer qué, quién lo hizo, cómo cambió y qué parece sospechoso.',
      keyword:'Auditoría / quién hizo qué / historial de configuración / detección de amenazas.',
      what:'IAM controla permisos, CloudTrail registra llamadas a la API, Config guarda el historial de configuración y GuardDuty detecta actividad maliciosa. Security Hub puede agregar los hallazgos.',
      when:'Preguntas de auditoría, cumplimiento, investigación de accesos o detección de amenazas. Cada servicio responde una pregunta distinta.',
      not:[
        'CloudTrail no bloquea una acción; solo registra.',
        'Config no es un registro de llamadas API; evalúa configuración.',
        'GuardDuty detecta; no corrige ni bloquea automáticamente.',
        'IAM no cifra datos.'
      ],
      confuse:[
        {name:'CloudTrail vs CloudWatch', why:'CloudTrail audita API; CloudWatch muestra métricas y logs operativos.'},
        {name:'GuardDuty vs Inspector vs Macie', why:'GuardDuty detecta amenazas; Inspector busca vulnerabilidades; Macie clasifica datos sensibles en S3.'},
        {name:'Security Hub vs Trusted Advisor', why:'Security Hub agrega hallazgos de seguridad; Trusted Advisor recomienda buenas prácticas.'}
      ],
      connections:['AWS IAM','AWS CloudTrail','AWS Config','Amazon GuardDuty','AWS Security Hub'],
      slides:['s13','s14','s17']
    },
    'combo-network': {
      cat:'combos', sub:'redes', type:'combo', name:'Red híbrida: VPC + Direct Connect + VPN + Transit Gateway', scope:'CLF-C02',
      tagline:'Conectar el datacenter y varias VPC con una red privada.',
      keyword:'Híbrido / on-premises / enlace dedicado / VPN / hub de VPC.',
      what:'La VPC aísla tu red en AWS, Direct Connect ofrece un enlace privado dedicado, Site-to-Site VPN crea un túnel cifrado por internet y Transit Gateway centraliza la conexión entre muchas VPC y redes.',
      when:'Migración híbrida, datacenter propio, varias VPC o necesidad de un enlace privado con respaldo VPN.',
      not:[
        'Una VPN no es un enlace dedicado; comparte internet.',
        'Direct Connect no cifra el tráfico por sí solo: puedes combinarlo con VPN.',
        'Transit Gateway no es un firewall ni un balanceador.'
      ],
      confuse:[
        {name:'Direct Connect vs VPN', why:'DX es dedicado y privado; VPN es cifrado sobre internet.'},
        {name:'Transit Gateway vs VPC Peering', why:'Peering conecta dos VPC; Transit Gateway es un hub para muchas.'},
        {name:'PrivateLink vs Peering', why:'PrivateLink expone un servicio privado; peering conecta redes completas.'}
      ],
      connections:['Amazon VPC','AWS Direct Connect','AWS Site-to-Site VPN','AWS Transit Gateway','Amazon Route 53'],
      slides:['s27','s30','s66']
    },
    'combo-integration': {
      cat:'combos', sub:'integracion', type:'combo', name:'Mensajería: SQS + SNS + EventBridge + Step Functions', scope:'CLF-C02',
      tagline:'Desacoplar componentes, notificar, reaccionar y orquestar.',
      keyword:'Cola / pub-sub / eventos / orquestación / desacoplar.',
      what:'SQS guarda mensajes para un consumidor, SNS envía a muchos suscriptores, EventBridge enruta eventos y Step Functions coordina pasos con estado. Se eligen según el patrón de comunicación.',
      when:'Microservicios, procesamiento asíncrono, fan-out de notificaciones, reacción a eventos o flujos con varios pasos.',
      not:[
        'SQS no es pub/sub: un mensaje lo procesa un consumidor.',
        'SNS no retiene mensajes para que los leas después.',
        'EventBridge no es una cola de trabajo.',
        'Step Functions no reemplaza una cola de mensajes.'
      ],
      confuse:[
        {name:'SQS vs SNS', why:'SQS es cola punto a punto; SNS es publicación a muchos suscriptores.'},
        {name:'EventBridge vs SNS', why:'EventBridge filtra y enruta eventos; SNS es notificación pub/sub.'},
        {name:'Step Functions vs Lambda', why:'Step Functions orquesta; Lambda ejecuta la lógica.'}
      ],
      connections:['Amazon SQS','Amazon SNS','Amazon EventBridge','AWS Step Functions','AWS Lambda'],
      slides:['s51']
    },
    'combo-wa': {
      cat:'combos', sub:'marcos', type:'framework', name:'Well-Architected: 6 pilares', scope:'CLF-C02',
      tagline:'El marco para revisar si una arquitectura está bien construida.',
      keyword:'Revisar arquitectura / 6 pilares / Well-Architected Tool / riesgos.',
      what:'Marco de AWS con seis pilares: excelencia operativa, seguridad, confiabilidad, eficiencia del rendimiento, optimización de costos y sostenibilidad. La Well-Architected Tool permite responder preguntas y obtener riesgos y un plan de mejora.',
      when:'Preguntas de “mejor diseño”, revisión de una arquitectura existente o identificación de riesgos por pilar. Es un marco, no un servicio que se aprovisiona.',
      not:[
        'No es un servicio que se crea en la consola; es un marco y una herramienta de revisión.',
        'No es AWS CAF: CAF guía la adopción de toda la organización.',
        'No garantiza cumplimiento ni reemplaza Trusted Advisor.'
      ],
      confuse:[
        {name:'AWS CAF', why:'CAF es adopción organizacional; Well-Architected revisa arquitecturas técnicas.'},
        {name:'Trusted Advisor', why:'Trusted Advisor genera recomendaciones automáticas; Well-Architected Tool evalúa respuestas y riesgos.'},
        {name:'7 R', why:'Las 7 R son estrategias de migración, no pilares de arquitectura.'}
      ],
      connections:['AWS Well-Architected Tool','Trusted Advisor','AWS CAF','Amazon CloudWatch'],
      slides:['s39']
    },
    'combo-caf': {
      cat:'combos', sub:'marcos', type:'framework', name:'AWS CAF: 3 fases + 6 perspectivas', scope:'CLF-C02',
      tagline:'El marco para guiar la adopción de la nube en toda la organización.',
      keyword:'Adopción organizacional / Envision, Align, Launch / 6 perspectivas.',
      what:'AWS Cloud Adoption Framework organiza la transformación en tres fases —Envision, Align y Launch— y seis perspectivas: negocio, personas, gobernanza, plataforma, seguridad y operaciones. No es solo técnico: incluye cultura, procesos y finanzas.',
      when:'Preguntas sobre adopción, transformación digital, alineación del negocio o quién debe participar en un programa de nube.',
      not:[
        'No es Well-Architected: CAF es organizacional; Well-Architected es técnico.',
        'No es un servicio de AWS que se aprovisiona.',
        'No es una lista de servicios; es un marco de capacidades.'
      ],
      confuse:[
        {name:'Well-Architected', why:'Well-Architected revisa arquitecturas; CAF guía la adopción de la organización.'},
        {name:'7 R', why:'Las 7 R son estrategias de migración de aplicaciones.'},
        {name:'AWS Migration Hub', why:'Migration Hub hace seguimiento de migraciones; CAF es el marco de adopción.'}
      ],
      connections:['AWS Well-Architected','AWS Migration Hub','AWS Organizations'],
      slides:['s40']
    },
    'combo-7r': {
      cat:'combos', sub:'marcos', type:'framework', name:'7 R de migración', scope:'CLF-C02',
      tagline:'Las siete estrategias para mover una aplicación a AWS.',
      keyword:'Rehost / Replatform / Refactor / Repurchase / Retire / Retain / Relocate.',
      what:'Siete estrategias: Rehost (mover tal cual), Replatform (cambiar algo sin reescribir), Refactor (rediseñar), Repurchase (pasar a SaaS, software como servicio), Retire (eliminar), Retain (mantener) y Relocate (mover a otra plataforma).',
      when:'Preguntas de estrategia de migración: qué hacer con una aplicación concreta, cuál implica menos cambios o cuál elimina una aplicación que ya no se usa.',
      not:[
        'No son siete servicios de AWS: son estrategias.',
        'No todas las aplicaciones se migran igual.',
        'No es lo mismo que las fases del CAF.'
      ],
      confuse:[
        {name:'CAF', why:'CAF guía la adopción; las 7 R clasifican cómo mover cada aplicación.'},
        {name:'MGN vs DMS', why:'MGN migra servidores; DMS migra bases de datos.'},
        {name:'Rehost vs Replatform', why:'Rehost no cambia la aplicación; Replatform cambia algo para aprovechar la nube.'}
      ],
      connections:['AWS Application Migration Service (MGN)','AWS Database Migration Service (DMS)','AWS Schema Conversion Tool (SCT)','AWS Migration Hub','AWS CAF'],
      slides:['s41']
    },
    'combo-cicd': {
      cat:'combos', sub:'desarrollo', type:'combo', name:'CI/CD: CodeCommit + CodeBuild + CodePipeline + CodeDeploy', scope:'CLF-C02',
      tagline:'Del repositorio a producción con etapas automatizadas.',
      keyword:'CI/CD (integración y entrega continuas) / repositorio / compilación / pruebas / despliegue automatizado.',
      what:'CodeCommit guarda el código; CodeBuild compila y ejecuta pruebas; CodePipeline orquesta las etapas; CodeDeploy despliega en EC2, Lambda o ECS. CodeArtifact encaja si además necesitas un repositorio de dependencias.',
      when:'Cuando el examen pide una cadena de integración y entrega continuas o distinguir qué herramienta guarda el código, cuál compila, cuál despliega y cuál orquesta.',
      not:[
        'CodeCommit no compila ni despliega.',
        'CodeBuild no orquesta el pipeline completo.',
        'CodeDeploy no guarda el código ni compila.'
      ],
      confuse:[
        {name:'CodePipeline vs CodeBuild', why:'Pipeline coordina etapas; CodeBuild ejecuta la compilación y las pruebas.'},
        {name:'CodeCommit vs CodeArtifact', why:'CodeCommit guarda código fuente; CodeArtifact guarda paquetes y dependencias.'},
        {name:'CodeStar vs CodePipeline', why:'CodeStar era una plantilla de proyecto; CodePipeline es el pipeline que orquesta las etapas.'}
      ],
      connections:['AWS CodeCommit','AWS CodeBuild','AWS CodePipeline','AWS CodeDeploy','AWS CodeArtifact'],
      connectionInfo:{
        'AWS CodeCommit':'CodeCommit aloja el repositorio Git que dispara el pipeline cuando hay un cambio.',
        'AWS CodeBuild':'CodeBuild toma el código, compila, ejecuta pruebas y genera el artefacto que se despliega.',
        'AWS CodePipeline':'CodePipeline encadena origen, compilación, aprobación y despliegue en etapas ordenadas.',
        'AWS CodeDeploy':'CodeDeploy ejecuta el despliegue del artefacto en EC2, Lambda o ECS con estrategias como despliegue gradual (rolling) o blue/green.',
        'AWS CodeArtifact':'CodeArtifact almacena y comparte las dependencias que CodeBuild necesita para compilar.'
      },
      slides:['s67']
    },
    'combo-containers': {
      cat:'combos', sub:'desarrollo', type:'combo', name:'Contenedores: ECR + ECS/EKS + Fargate', scope:'CLF-C02',
      tagline:'Imagen, registro, orquestador y cómputo sin administrar servidores.',
      keyword:'Contenedor / imagen / registro / orquestación / Fargate.',
      what:'ECR guarda y escanea las imágenes; ECS o EKS programan y ejecutan los contenedores; Fargate aporta el cómputo sin que administres instancias. ECS es el orquestador propio de AWS y EKS es Kubernetes gestionado.',
      when:'Cuando el examen pide ejecutar contenedores, elegir entre ECS y EKS o evitar administrar servidores.',
      not:[
        'ECR no ejecuta contenedores.',
        'ECS no es Kubernetes.',
        'Fargate no es un orquestador: necesita ECS o EKS.'
      ],
      confuse:[
        {name:'ECS vs EKS', why:'ECS es el orquestador propio de AWS; EKS es Kubernetes gestionado.'},
        {name:'Fargate vs EC2', why:'Fargate abstrae el host; EC2 te deja administrar las instancias.'},
        {name:'Fargate vs Lambda', why:'Fargate ejecuta contenedores; Lambda ejecuta funciones por evento.'}
      ],
      connections:['Amazon ECR','Amazon ECS','Amazon EKS','AWS Fargate','Elastic Load Balancing'],
      connectionInfo:{
        'Amazon ECR':'ECR almacena las imágenes que ECS o EKS descargan para ejecutar los contenedores.',
        'Amazon ECS':'ECS programa los contenedores y mantiene el número de tareas deseado.',
        'Amazon EKS':'EKS ofrece un plano de control Kubernetes gestionado para ejecutar los contenedores.',
        'AWS Fargate':'Fargate aporta el cómputo de los contenedores sin que administres las instancias.',
        'Elastic Load Balancing':'El balanceador reparte el tráfico entre las tareas o pods que expone el orquestador.'
      },
      slides:['s31','s32']
    },
    'combo-monitoring': {
      cat:'combos', sub:'operacion', type:'combo', name:'Monitoreo y alertas: CloudWatch + SNS + Lambda', scope:'CLF-C02',
      tagline:'Detectar un umbral, notificar y reaccionar sin intervención.',
      keyword:'Métrica / alarma / notificación / respuesta automática.',
      what:'CloudWatch recoge métricas y logs y dispara alarmas; SNS entrega la notificación a correo, SMS u otros destinos; Lambda ejecuta una acción automática, como reiniciar o escalar, cuando se cruza el umbral.',
      when:'Preguntas de monitoreo proactivo, avisos al equipo o remediación automática ante un evento.',
      not:[
        'CloudWatch no es un sistema de tickets ni de gestión de incidentes.',
        'SNS no almacena métricas ni evalúa umbrales.',
        'Lambda no monitorea por sí sola: necesita un evento que la invoque.'
      ],
      confuse:[
        {name:'CloudWatch vs CloudTrail', why:'CloudWatch mide rendimiento y logs; CloudTrail registra llamadas API.'},
        {name:'SNS vs SQS', why:'SNS notifica a muchos suscriptores; SQS guarda mensajes para que un consumidor los lea.'},
        {name:'EventBridge vs alarma de CloudWatch', why:'EventBridge enruta eventos; una alarma de CloudWatch evalúa una métrica y cambia de estado.'}
      ],
      connections:['Amazon CloudWatch','Amazon SNS','AWS Lambda','Amazon EventBridge','AWS CloudTrail'],
      connectionInfo:{
        'Amazon CloudWatch':'CloudWatch reúne las métricas y logs y evalúa la alarma que dispara la respuesta.',
        'Amazon SNS':'SNS envía el aviso al equipo o a otro destino cuando la alarma cambia de estado.',
        'AWS Lambda':'Lambda ejecuta la remediación automática, como reiniciar una instancia o ajustar capacidad.',
        'Amazon EventBridge':'EventBridge puede enrutar el evento de alarma hacia otros servicios o automatizaciones.',
        'AWS CloudTrail':'CloudTrail permite auditar qué llamada API provocó el cambio que activó la alarma.'
      },
      slides:['s35','s36']
    },
    'combo-server-migration': {
      cat:'combos', sub:'operacion', type:'combo', name:'Migración y DR de servidores: MGN + DRS + Migration Hub', scope:'CLF-C02',
      tagline:'Replicar servidores, probar la recuperación y seguir el avance.',
      keyword:'Migración de servidores / replicación / DR (recuperación ante desastres) / seguimiento.',
      what:'MGN replica servidores on-premises hacia AWS para migrarlos sin reescribir la aplicación; DRS mantiene réplicas continuas para recuperación ante desastres; Migration Hub centraliza el seguimiento de las migraciones.',
      when:'Migrar servidores físicos o virtuales, preparar recuperación ante desastres o necesitar una conmutación por error rápida.',
      not:[
        'MGN no migra bases de datos por sí solo ni convierte esquemas.',
        'DRS no es un backup puntual: replica de forma continua.',
        'Migration Hub no ejecuta la migración; solo muestra el progreso.'
      ],
      confuse:[
        {name:'MGN vs DMS', why:'MGN migra servidores completos; DMS migra datos de bases de datos.'},
        {name:'DRS vs AWS Backup', why:'DRS mantiene una réplica lista para conmutar; Backup crea copias para restaurar.'},
        {name:'Migration Hub vs Application Discovery Service', why:'Discovery inventaría servidores y dependencias; Migration Hub sigue la migración.'}
      ],
      connections:['AWS Application Migration Service (MGN)','AWS Elastic Disaster Recovery (DRS)','AWS Migration Hub','AWS Database Migration Service (DMS)','AWS Application Discovery Service'],
      connectionInfo:{
        'AWS Application Migration Service (MGN)':'MGN replica el servidor de origen y lo lanza en AWS con los mismos discos y configuración.',
        'AWS Elastic Disaster Recovery (DRS)':'DRS mantiene una réplica continua del servidor y permite conmutar a AWS ante un desastre.',
        'AWS Migration Hub':'Migration Hub reúne el estado de las migraciones de MGN y DMS en un solo lugar.',
        'AWS Database Migration Service (DMS)':'DMS se encarga de las bases de datos cuando la migración incluye datos relacionales.',
        'AWS Application Discovery Service':'Discovery recopila inventario y dependencias antes de decidir qué servidores migrar.'
      },
      slides:['s42']
    },
    'combo-backup': {
      cat:'combos', sub:'operacion', type:'combo', name:'Copias de seguridad y recuperación: AWS Backup + S3 Glacier + DRS', scope:'CLF-C02',
      tagline:'Política central, archivo barato y recuperación ante desastres.',
      keyword:'Backup / retención / archivo / DR / restauración.',
      what:'AWS Backup centraliza políticas, trabajos y retención de copias de varios servicios; S3 Glacier guarda copias de largo plazo a bajo costo; DRS replica servidores completos para recuperarlos ante un desastre.',
      when:'Preguntas de retención, cumplimiento, restauración o diferencia entre una copia de seguridad y una estrategia de DR.',
      not:[
        'Glacier está pensado para archivo; no es un destino de acceso frecuente inmediato.',
        'AWS Backup no reemplaza una estrategia de DR para toda la carga.',
        'DRS no archiva datos históricos: mantiene réplicas listas para recuperar.'
      ],
      confuse:[
        {name:'AWS Backup vs DRS', why:'Backup crea y retiene copias; DRS mantiene una réplica continua lista para conmutar.'},
        {name:'Glacier vs S3 Standard', why:'Glacier Deep Archive es archivo de bajo costo y recuperación diferida; S3 Standard es acceso inmediato.'},
        {name:'DRS vs Multi-AZ', why:'Multi-AZ protege dentro de una región; DRS recupera en otra región o cuenta.'}
      ],
      connections:['AWS Backup','Amazon S3 Glacier','AWS Elastic Disaster Recovery (DRS)','Amazon S3','AWS Key Management Service (KMS)'],
      connectionInfo:{
        'AWS Backup':'AWS Backup define la política, la frecuencia y la retención de las copias de los recursos.',
        'Amazon S3 Glacier':'Glacier almacena las copias de largo plazo con un costo menor y recuperación diferida.',
        'AWS Elastic Disaster Recovery (DRS)':'DRS mantiene réplicas de servidores completos para una recuperación rápida ante desastres.',
        'Amazon S3':'S3 puede recibir copias y servir como origen o destino de los datos respaldados.',
        'AWS Key Management Service (KMS)':'KMS cifra las copias y controla quién puede restaurarlas.'
      },
      slides:['s22','s42']
    },
    'combo-cost-analysis': {
      cat:'combos', sub:'costos', type:'combo', name:'Análisis de costos: CUR + S3 + Athena + QuickSight', scope:'CLF-C02',
      tagline:'Del detalle de la factura a un panel consultable.',
      keyword:'CUR / detalle de costos / SQL sobre S3 / panel de gasto.',
      what:'CUR (Cost and Usage Report) entrega el detalle granular de costos y uso; S3 lo almacena; Athena consulta ese conjunto de datos con SQL sin cargarlo; QuickSight convierte el resultado en paneles para el equipo.',
      when:'Cuando necesitas auditar el gasto a nivel de recurso, crear reportes propios o analizar costos con SQL.',
      not:[
        'CUR no visualiza ni consulta por sí solo.',
        'Athena no almacena el conjunto de datos: consulta sobre S3.',
        'QuickSight no reemplaza la fuente de datos ni calcula la factura.'
      ],
      confuse:[
        {name:'CUR vs Cost Explorer', why:'Cost Explorer ofrece análisis visual rápido; CUR entrega el detalle granular para consultas propias.'},
        {name:'Athena vs Redshift', why:'Athena consulta sobre S3 sin cargar datos; Redshift es un data warehouse para cargas analíticas.'},
        {name:'QuickSight vs Cost Explorer', why:'QuickSight crea paneles propios; Cost Explorer ya trae análisis de gasto predefinido.'}
      ],
      connections:['AWS Cost and Usage Report','Amazon S3','Amazon Athena','Amazon QuickSight','AWS Cost Explorer'],
      connectionInfo:{
        'AWS Cost and Usage Report':'CUR genera el archivo detallado con cada línea de costo y uso de la cuenta.',
        'Amazon S3':'S3 recibe y almacena los archivos de CUR que luego se consultan.',
        'Amazon Athena':'Athena consulta los archivos de CUR en S3 con SQL sin moverlos a otro almacén.',
        'Amazon QuickSight':'QuickSight visualiza los resultados de Athena en paneles para negocio y finanzas.',
        'AWS Cost Explorer':'Cost Explorer sirve para una primera exploración visual antes de bajar al detalle de CUR.'
      },
      slides:['s46','s47']
    },
    'combo-iot': {
      cat:'combos', sub:'iot', type:'combo', name:'IoT: IoT Core + Greengrass + Kinesis', scope:'CLF-C02',
      tagline:'Conectar dispositivos, procesar en el borde y analizar el flujo.',
      keyword:'IoT / telemetría / borde / streaming / MQTT.',
      what:'IoT Core conecta y administra dispositivos con MQTT y reglas; Greengrass ejecuta cómputo local en el dispositivo o gateway; Kinesis ingesta y procesa la telemetría en tiempo real.',
      when:'Preguntas de dispositivos conectados, procesamiento local o datos de sensores que llegan en streaming.',
      not:[
        'Greengrass no sustituye a IoT Core: extiende el procesamiento al borde.',
        'Kinesis no administra dispositivos ni el registro de cosas.',
        'IoT Core no es un data warehouse.'
      ],
      confuse:[
        {name:'IoT Core vs Greengrass', why:'IoT Core es el broker y la puerta en la nube; Greengrass ejecuta lógica local en el borde.'},
        {name:'Kinesis vs SQS', why:'Kinesis procesa flujos de datos en tiempo real; SQS desacopla con colas de mensajes.'},
        {name:'IoT Core vs MQTT genérico', why:'IoT Core añade registro, reglas, sombras y seguridad gestionada.'}
      ],
      connections:['AWS IoT Core','AWS IoT Greengrass','Amazon Kinesis','AWS Lambda','Amazon S3'],
      connectionInfo:{
        'AWS IoT Core':'IoT Core recibe la telemetría de los dispositivos, aplica reglas y los mantiene registrados.',
        'AWS IoT Greengrass':'Greengrass ejecuta filtros y lógica en el dispositivo para reducir latencia y ancho de banda.',
        'Amazon Kinesis':'Kinesis recibe el flujo de telemetría y lo procesa en tiempo real antes de almacenarlo.',
        'AWS Lambda':'Lambda procesa los eventos o registros del flujo y ejecuta acciones sobre ellos.',
        'Amazon S3':'S3 conserva la telemetría histórica para análisis posterior.'
      },
      slides:['s68','s51']
    },
    'combo-ml': {
      cat:'combos', sub:'ia', type:'combo', name:'Machine learning: SageMaker AI + S3 + ECR', scope:'CLF-C02',
      tagline:'Datos, entorno de entrenamiento y despliegue del modelo.',
      keyword:'Machine learning / entrenamiento / modelo / S3 / contenedor.',
      what:'S3 guarda los datos de entrenamiento y los artefactos del modelo; SageMaker AI ofrece el entorno para preparar, entrenar y desplegar; ECR almacena las imágenes de contenedor que usa el entrenamiento o la inferencia.',
      when:'Preguntas de un flujo completo de machine learning o de dónde viven los datos, el cómputo y los artefactos.',
      not:[
        'S3 no entrena modelos.',
        'SageMaker AI no es una base de datos ni un servicio de BI.',
        'ECR no ejecuta el entrenamiento: guarda imágenes.'
      ],
      confuse:[
        {name:'SageMaker AI vs Bedrock', why:'SageMaker AI entrena y despliega modelos propios; Bedrock ofrece modelos fundacionales mediante API.'},
        {name:'S3 vs EBS', why:'S3 es almacenamiento de objetos para conjuntos de datos y artefactos; EBS es bloque para el sistema operativo de una instancia.'},
        {name:'ECR vs S3', why:'ECR guarda imágenes de contenedor; S3 guarda objetos y conjuntos de datos.'}
      ],
      connections:['Amazon SageMaker AI','Amazon S3','Amazon ECR','AWS IAM','Amazon CloudWatch'],
      connectionInfo:{
        'Amazon SageMaker AI':'SageMaker AI prepara los datos, entrena el modelo y lo despliega para servir inferencias.',
        'Amazon S3':'S3 entrega los conjuntos de datos de entrenamiento y guarda los artefactos que produce el modelo.',
        'Amazon ECR':'ECR almacena las imágenes de contenedor con el entorno o el modelo que SageMaker AI ejecuta.',
        'AWS IAM':'IAM define qué rol puede leer los datos, entrenar y desplegar el modelo.',
        'Amazon CloudWatch':'CloudWatch monitorea el entrenamiento y los puntos de enlace de inferencia.'
      },
      slides:['s50']
    },
    'combo-serverless-auth': {
      cat:'combos', sub:'arquitectura', type:'combo', name:'Autenticación serverless: Cognito + API Gateway + Lambda', scope:'CLF-C02',
      tagline:'Login de usuarios y API protegida sin administrar servidores.',
      keyword:'Cognito / user pool / token / API protegida / serverless.',
      what:'Cognito registra e inicia sesión de usuarios y emite tokens; API Gateway valida el token y expone la API; Lambda ejecuta la lógica de negocio. IAM controla los permisos de la función.',
      when:'Aplicaciones web o móviles con registro y login que necesitan una API serverless que valide la identidad.',
      not:[
        'Cognito no concede permisos sobre recursos de AWS por sí solo.',
        'API Gateway no ejecuta la lógica de negocio.',
        'Lambda no administra usuarios ni contraseñas.'
      ],
      confuse:[
        {name:'Cognito vs IAM', why:'Cognito autentica clientes de la aplicación; IAM controla el acceso a recursos de AWS.'},
        {name:'API Gateway vs ALB', why:'API Gateway publica APIs y aplica autorización, cuotas y claves; ALB balancea tráfico HTTP.'},
        {name:'User pool vs identity pool', why:'El user pool autentica usuarios; el identity pool entrega credenciales temporales de AWS.'}
      ],
      connections:['Amazon Cognito','Amazon API Gateway','AWS Lambda','AWS IAM','Amazon DynamoDB'],
      connectionInfo:{
        'Amazon Cognito':'Cognito autentica al usuario y emite el token que la API valida en cada petición.',
        'Amazon API Gateway':'API Gateway expone la API, valida el token de Cognito y aplica cuotas y autorización.',
        'AWS Lambda':'Lambda ejecuta la lógica de negocio después de que API Gateway valida la petición.',
        'AWS IAM':'IAM define el rol que Lambda asume para acceder a los recursos.',
        'Amazon DynamoDB':'DynamoDB guarda los datos de la aplicación que Lambda lee o escribe.'
      },
      slides:['s11','s31']
    },
    'combo-event-driven': {
      cat:'combos', sub:'integracion', type:'combo', name:'Eventos: S3 + EventBridge + Lambda', scope:'CLF-C02',
      tagline:'Reaccionar a un cambio en el bucket sin polling.',
      keyword:'Evento / S3 / regla / Lambda / event-driven.',
      what:'S3 emite eventos cuando se crea o elimina un objeto; EventBridge los recibe y los enruta con reglas y filtros; Lambda ejecuta el procesamiento, por ejemplo generar miniaturas o validar archivos.',
      when:'Preguntas de automatización por evento, procesar archivos al subirlos o desacoplar productor y consumidor.',
      not:[
        'EventBridge no almacena los objetos: solo enruta eventos.',
        'Lambda no se ejecuta sola: necesita un disparador.',
        'S3 no ejecuta código.'
      ],
      confuse:[
        {name:'EventBridge vs SNS', why:'EventBridge filtra y enruta eventos por reglas; SNS distribuye mensajes a suscriptores.'},
        {name:'Lambda vs Step Functions', why:'Lambda ejecuta una función; Step Functions coordina varios pasos y estados.'},
        {name:'S3 vs EFS', why:'S3 es almacenamiento de objetos; EFS es un sistema de archivos compartido.'}
      ],
      connections:['Amazon S3','Amazon EventBridge','AWS Lambda','Amazon SQS','AWS Step Functions'],
      connectionInfo:{
        'Amazon S3':'S3 emite el evento cuando se sube, copia o elimina un objeto.',
        'Amazon EventBridge':'EventBridge recibe el evento de S3 y lo filtra con reglas antes de entregarlo.',
        'AWS Lambda':'Lambda procesa el objeto o ejecuta la acción que disparó el evento.',
        'Amazon SQS':'SQS puede recibir el evento para procesarlo después y desacoplar la carga.',
        'AWS Step Functions':'Step Functions coordina varios pasos si el procesamiento necesita un flujo con estado.'
      },
      slides:['s51']
    },
    'combo-dynamodb-performance': {
      cat:'combos', sub:'datos', type:'combo', name:'DynamoDB: tabla + DAX + Global Tables', scope:'CLF-C02',
      tagline:'Milisegundos, lecturas repetidas y réplica multirregión.',
      keyword:'DynamoDB / DAX / Global Tables / baja latencia / multirregión.',
      what:'DynamoDB guarda la tabla; DAX añade una caché en memoria para lecturas repetidas en microsegundos; Global Tables replica la tabla en varias regiones para baja latencia y recuperación.',
      when:'Preguntas de rendimiento de lectura, cargas globales o recuperación multirregión sobre DynamoDB.',
      not:[
        'DAX no reemplaza la tabla ni es la fuente de verdad.',
        'Global Tables no es un backup: replica activamente.',
        'DynamoDB no es un data warehouse.'
      ],
      confuse:[
        {name:'DAX vs ElastiCache', why:'DAX está integrado con DynamoDB; ElastiCache es una caché genérica para otras bases o aplicaciones.'},
        {name:'Global Tables vs backup', why:'Global Tables replica para baja latencia y DR; un backup conserva una copia restaurable.'},
        {name:'DynamoDB vs Aurora', why:'DynamoDB es NoSQL clave-valor/documento; Aurora es relacional compatible con MySQL y PostgreSQL.'}
      ],
      connections:['Amazon DynamoDB','DynamoDB Accelerator (DAX)','Global Tables','Amazon CloudWatch','AWS IAM'],
      connectionInfo:{
        'Amazon DynamoDB':'DynamoDB es la tabla principal que almacena los elementos y aplica las reglas de capacidad.',
        'DynamoDB Accelerator (DAX)':'DAX cachea las lecturas repetidas delante de la tabla para responder en microsegundos.',
        'Global Tables':'Global Tables replica la tabla en otra región para acercar la lectura y recuperar ante un desastre.',
        'Amazon CloudWatch':'CloudWatch muestra latencia, capacidad consumida y limitación de peticiones (throttling) de la tabla.',
        'AWS IAM':'IAM controla qué aplicaciones pueden leer o escribir en la tabla.'
      },
      slides:['s26','s64']
    },
    'combo-db-migration': {
      cat:'combos', sub:'datos', type:'combo', name:'Migración de bases de datos: DMS + SCT + RDS/Aurora', scope:'CLF-C02',
      tagline:'Convertir el esquema, mover los datos y aterrizar en un motor gestionado.',
      keyword:'Migración de base de datos / conversión de esquema / replicación / RDS / Aurora.',
      what:'SCT convierte el esquema y el código del motor origen al destino; DMS migra los datos y replica cambios con mínima interrupción; RDS o Aurora reciben la base ya gestionada.',
      when:'Migrar Oracle, SQL Server o MySQL a AWS, sobre todo si cambias de motor.',
      not:[
        'DMS no convierte el esquema por ti: para eso está SCT.',
        'SCT no mueve los datos.',
        'RDS no migra una base existente por el simple hecho de crearla.'
      ],
      confuse:[
        {name:'DMS vs SCT', why:'SCT convierte esquema y código; DMS mueve los datos y replica cambios.'},
        {name:'RDS vs Aurora', why:'RDS administra varios motores; Aurora es el motor relacional de AWS compatible con MySQL y PostgreSQL.'},
        {name:'DMS vs DataSync', why:'DMS migra bases de datos; DataSync mueve archivos entre almacenamientos.'}
      ],
      connections:['AWS Database Migration Service (DMS)','AWS Schema Conversion Tool (SCT)','Amazon RDS','Amazon Aurora','AWS Migration Hub'],
      connectionInfo:{
        'AWS Database Migration Service (DMS)':'DMS copia los datos y mantiene la replicación mientras se hace el corte.',
        'AWS Schema Conversion Tool (SCT)':'SCT transforma el esquema y el código del motor origen al motor de destino.',
        'Amazon RDS':'RDS recibe la base migrada y se encarga de parches, copias y alta disponibilidad.',
        'Amazon Aurora':'Aurora es una alternativa relacional gestionada de mayor rendimiento para la base migrada.',
        'AWS Migration Hub':'Migration Hub centraliza el seguimiento del proyecto de migración de bases de datos.'
      },
      slides:['s25','s42']
    },
    'combo-edge-security': {
      cat:'combos', sub:'seguridad', type:'combo', name:'Seguridad en el borde: CloudFront + WAF + Shield', scope:'CLF-C02',
      tagline:'Entregar contenido, filtrar peticiones y mitigar DDoS.',
      keyword:'Edge / CDN / WAF / DDoS / HTTPS.',
      what:'CloudFront distribuye el contenido y termina TLS en el borde; WAF filtra peticiones HTTP con reglas; Shield protege contra DDoS, con Advanced para respuesta y visibilidad mejoradas.',
      when:'Aplicación pública que necesita HTTPS, filtrado de capa 7 y mitigación de ataques DDoS.',
      not:[
        'WAF no mitiga todo tipo de DDoS por sí solo.',
        'Shield no inspecciona el contenido HTTP como WAF.',
        'CloudFront no reemplaza un firewall de red.'
      ],
      confuse:[
        {name:'WAF vs Shield', why:'WAF filtra peticiones HTTP por reglas; Shield mitiga DDoS.'},
        {name:'CloudFront vs Global Accelerator', why:'CloudFront cachea contenido; Global Accelerator acelera TCP/UDP sin cachear.'},
        {name:'WAF vs Security Groups', why:'WAF filtra capa 7; los security groups filtran red y puertos.'}
      ],
      connections:['Amazon CloudFront','AWS WAF','AWS Shield','AWS Certificate Manager (ACM)','Amazon Route 53'],
      connectionInfo:{
        'Amazon CloudFront':'CloudFront entrega el contenido desde el borde y aplica las reglas de WAF antes de llegar al origen.',
        'AWS WAF':'WAF inspecciona las peticiones HTTP y bloquea las que coinciden con reglas maliciosas.',
        'AWS Shield':'Shield absorbe y mitiga el tráfico DDoS que intenta saturar la aplicación.',
        'AWS Certificate Manager (ACM)':'ACM emite el certificado TLS que CloudFront usa para servir HTTPS.',
        'Amazon Route 53':'Route 53 resuelve el dominio hacia la distribución de CloudFront.'
      },
      slides:['s15','s30']
    },
    'combo-detection': {
      cat:'combos', sub:'seguridad', type:'combo', name:'Detección e investigación: GuardDuty + Security Hub + Detective', scope:'CLF-C02',
      tagline:'Detectar la amenaza, priorizar hallazgos e investigar el origen.',
      keyword:'Detección / hallazgos / investigación / postura / amenaza.',
      what:'GuardDuty detecta actividad sospechosa con señales de red, DNS y logs; Security Hub agrega y prioriza hallazgos con estándares; Detective ayuda a investigar la causa con grafos de comportamiento.',
      when:'Preguntas de detección de amenazas, priorización de hallazgos o análisis forense.',
      not:[
        'GuardDuty no corrige ni bloquea por sí solo.',
        'Security Hub no reemplaza a GuardDuty: agrega y prioriza sus hallazgos.',
        'Detective no previene ataques: investiga lo ocurrido.'
      ],
      confuse:[
        {name:'GuardDuty vs Inspector', why:'GuardDuty detecta amenazas y actividad sospechosa; Inspector busca vulnerabilidades en cargas.'},
        {name:'Security Hub vs Config', why:'Security Hub agrega hallazgos de seguridad; Config evalúa el cumplimiento de la configuración.'},
        {name:'Detective vs CloudTrail', why:'Detective investiga relaciones y comportamiento; CloudTrail registra las llamadas API.'}
      ],
      connections:['Amazon GuardDuty','AWS Security Hub','Amazon Detective','AWS CloudTrail','Amazon Inspector'],
      connectionInfo:{
        'Amazon GuardDuty':'GuardDuty analiza señales de red, DNS y logs y genera hallazgos de amenazas.',
        'AWS Security Hub':'Security Hub reúne los hallazgos de GuardDuty y otros servicios y los prioriza con estándares.',
        'Amazon Detective':'Detective usa los hallazgos y logs para reconstruir qué pasó y quién estuvo involucrado.',
        'AWS CloudTrail':'CloudTrail aporta el registro de llamadas API que Detective y GuardDuty correlacionan.',
        'Amazon Inspector':'Inspector añade vulnerabilidades de las cargas para completar la postura de seguridad.'
      },
      slides:['s14','s17']
    },
  }
};
