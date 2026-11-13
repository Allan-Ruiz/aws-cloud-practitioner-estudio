/* ============================================================
   Mapa de servicios AWS · catálogo por categorías
   Se carga después de mapa-servicios.js y completa las categorías
   que faltan. Mantiene el mismo formato de ficha que el piloto.
   ============================================================ */
(function () {
  const D = window.MAPA_SERVICIOS;
  if (!D) return;

  const C = (name, why) => ({name, why});
  const normalize = args => Array.isArray(args[1])
    ? [args[0], ...args[1], ...args.slice(2)]
    : args;
  const build = (args, type) => {
    const flat = normalize(args);
    let scope = 'CLF-C02';
    if (typeof flat[flat.length - 1] === 'string') scope = flat.pop();
    const block = flat.pop();
    const slides = flat.pop();
    const connections = flat.pop();
    const confuse = flat.pop();
    const [cat, sub, id, name, tagline, keyword, what, when] = flat;
    const not = flat.slice(8).flat();
    return {
      cat, sub, id, name, tagline, keyword, what, when, not, confuse, connections, slides, block,
      type, scope
    };
  };
  const add = (...args) => {
    const s = build(args, 'service');
    D.services[s.id] = s;
  };
  const concept = (...args) => {
    const s = build(args, 'concept');
    s.scope = 'CLF-C02';
    D.services[s.id] = s;
  };

  Object.assign(D.slideTitles, {
    s6:'Responsabilidad compartida',
    s7:'SRM por servicio',
    s8:'Trampas de SRM',
    s9:'IAM: bloques',
    s10:'Cómo evalúa IAM',
    s11:'Rol vs usuario, Identity Center y Cognito',
    s12:'Seguridad de identidad y Root',
    s13:'Mapa de seguridad',
    s14:'Servicios de detección',
    s15:'Shield, WAF y firewalls',
    s16:'Cifrado y secretos',
    s17:'Cumplimiento y auditoría',
    s18:'Mapa de servicios núcleo',
    s19:'EC2: qué es y familias',
    s20:'Modelos de compra de EC2',
    s21:'S3: almacenamiento de objetos',
    s22:'Clases de almacenamiento S3',
    s23:'S3: ciclo de vida y seguridad',
    s24:'Elegir almacenamiento',
    s27:'VPC: la red',
    s28:'Security groups vs NACL',
    s29:'Route 53',
    s30:'CloudFront, Global Accelerator, DX y VPN',
    s33:'Infraestructura global',
    s34:'Elegir región y alta disponibilidad',
    s35:'CloudWatch, CloudTrail y Config',
    s36:'CloudWatch en detalle',
    s37:'Gobernanza, operación e IaC',
    s38:'Trusted Advisor',
    s39:'Well-Architected: 6 pilares',
    s40:'AWS CAF',
    s41:'Las 7 R de migración',
    s42:'Servicios de migración',
    s43:'Principios de precios',
    s44:'Precios por tipo de servicio',
    s45:'Free Tier',
    s46:'Herramientas de costos y facturación',
    s47:'Costos ocultos y TCO',
    s50:'IA y machine learning',
    s51:'Analítica e integración',
    s52:'Trampas 1–10',
    s53:'Trampas 11–20',
    s54:'Estrategia y cierre',
    s62:'Cómo interactuamos con AWS',
    s63:'Auditoría y análisis de IAM',
    s64:'Multi-AZ, réplicas y caché',
    s65:'Conectividad entre VPC y balanceadores',
    s66:'Conectividad híbrida: VPN vs Direct Connect',
    s67:'PaaS, lotes y herramientas CI/CD',
    s68:'Servicios adicionales CLF-C02 (1/2)',
    s69:'Servicios adicionales CLF-C02 (2/2)'
  });

  Object.assign(D.blockTitles, {
    1:'Fundamentos de la nube y AWS',
    2:'Responsabilidad compartida (SRM)',
    3:'Identidad y acceso (IAM)',
    4:'Detección, red y cifrado',
    5:'Servicios núcleo y Amazon EC2',
    6:'Almacenamiento',
    7:'Bases de datos',
    8:'Redes y VPC',
    9:'DNS, entrega global y red híbrida',
    10:'Cómputo serverless, contenedores y CI/CD',
    11:'Regiones y alta disponibilidad',
    12:'Monitoreo, gobernanza, analítica, IA y adicionales',
    13:'Well-Architected, CAF y migración',
    14:'Costos, soporte y cierre'
  });

  Object.assign(D.connectionNotes, {
    'Amazon EC2 Auto Scaling':'Ajusta el número de instancias EC2 según métricas o programación.',
    'AWS Auto Scaling':'Ajusta la capacidad de EC2, ECS u otros recursos según la demanda.',
    'Elastic Beanstalk':'Plataforma PaaS que crea y escala la infraestructura por ti.',
    'AWS Batch':'Programa trabajos por lotes y aprovisiona la capacidad necesaria.',
    'AWS Outposts':'Lleva hardware de AWS a tu datacenter para cargas híbridas.',
    'Amazon ECS':'Orquesta contenedores; puede usar EC2 o Fargate como capacidad.',
    'Amazon EKS':'Kubernetes gestionado; usa EC2 o Fargate para ejecutar pods.',
    'Amazon ECR':'Registro privado de imágenes de contenedor que ECS/EKS descargan.',
    'AWS Fargate':'Ejecuta contenedores sin administrar servidores; se usa con ECS/EKS.',
    'AWS Lambda':'Ejecuta funciones ante eventos sin administrar servidores.',
    'Amazon S3 Glacier':'Almacenamiento de archivo de bajo costo y recuperación diferida.',
    'Amazon EBS':'Volumen de bloque persistente para una instancia EC2.',
    'Amazon EFS':'Sistema de archivos NFS elástico y compartido entre instancias.',
    'Amazon FSx':'Sistemas de archivos gestionados para Windows, Lustre, NetApp u OpenZFS.',
    'AWS Storage Gateway':'Conecta almacenamiento on-premises con S3, EBS o Glacier.',
    'AWS Snow Family':'Dispositivos físicos para mover datos o computar en el borde.',
    'AWS DataSync':'Mueve archivos entre on-premises y S3, EFS o FSx.',
    'AWS Backup':'Centraliza copias de seguridad y retención de varios servicios.',
    'AWS Elastic Disaster Recovery (DRS)':'Replica servidores hacia AWS para recuperación ante desastres.',
    'Amazon VPC':'Red aislada en una región; contiene subredes, rutas y gateways.',
    'Security Groups y NACL':'Security group: stateful, instancia/ENI, solo allow. NACL: stateless, subred, allow y deny.',
    'Elastic Load Balancing':'Reparte tráfico entre destinos y hace comprobaciones de estado.',
    'Amazon CloudFront':'CDN que cachea contenido en edge locations.',
    'Amazon Route 53':'DNS gestionado con políticas de enrutamiento y comprobaciones de estado.',
    'AWS Global Accelerator':'Red global anycast para mejorar latencia y failover de TCP/UDP.',
    'AWS Direct Connect':'Enlace privado dedicado entre tu red y AWS.',
    'AWS Site-to-Site VPN':'Túnel cifrado por internet entre tu red y AWS.',
    'AWS Client VPN':'VPN gestionada para que usuarios remotos accedan a la VPC.',
    'AWS Transit Gateway':'Hub para conectar muchas VPC y redes on-premises.',
    'AWS PrivateLink':'Acceso privado a un servicio sin exponerlo a internet.',
    'Amazon API Gateway':'Publica, protege y limita APIs HTTP/REST/WebSocket.'
  });

  Object.assign(D.connectionNotes, {
    'VPC':'Red aislada en una región; contiene subredes, rutas y gateways.',
    'EC2':'Instancias que ejecutan la aplicación que consume el servicio.',
    'S3':'S3 almacena objetos que otros servicios leen, escriben o consultan.',
    'Route 53':'DNS gestionado que resuelve el dominio y puede enrutar con políticas de latencia, failover o ponderación.',
    'RDS':'Base de datos relacional gestionada; se usa como origen, destino o motor de la aplicación.',
    'ELB':'Reparte el tráfico entre destinos y hace comprobaciones de estado.',
    'ALB':'Balanceador de capa 7 para HTTP/HTTPS con reglas y comprobaciones de estado.',
    'NLB':'Balanceador de capa 4 para TCP/UDP de alto rendimiento.',
    'ALB/NLB':'ALB para HTTP/HTTPS; NLB para TCP/UDP de alto rendimiento.',
    'Auto Scaling':'Ajusta la capacidad de EC2, ECS u otros recursos según la demanda.',
    'CloudFront':'CDN que cachea contenido en edge locations.',
    'Global Accelerator':'Red global anycast que acelera TCP/UDP y permite failover.',
    'Direct Connect':'Enlace privado dedicado entre tu red y AWS.',
    'EBS':'Volumen de bloque persistente para una instancia EC2.',
    'ECR':'Registro privado de imágenes de contenedor.',
    'Fargate':'Ejecuta contenedores sin administrar servidores.',
    'ECS':'Orquestador de contenedores de AWS.',
    'EKS':'Kubernetes gestionado en AWS.',
    'DynamoDB':'Base NoSQL clave-valor/documento, serverless y de baja latencia.',
    'SQS':'Cola de mensajes punto a punto para desacoplar productor y consumidor.',
    'KMS':'Cifra datos en reposo y controla el uso de claves.',
    'Glacier':'Clase de archivo de bajo costo dentro de S3.',
    'Athena':'Consulta datos en S3 con SQL sin cargarlos.',
    'CloudTrail':'Registra las llamadas a la API: quién hizo qué y cuándo.',
    'EFS':'Sistema de archivos NFS elástico y compartido.',
    'FSx':'Sistemas de archivos gestionados para Windows, Lustre, NetApp u OpenZFS.',
    'Transit Gateway':'Hub que conecta muchas VPC y redes on-premises.',
    'Health Dashboard':'Muestra el estado de los servicios de AWS y los eventos que te afectan.',
    'ACM':'Provee y renueva certificados TLS para HTTPS.',
    'WAF':'Filtra tráfico HTTP/HTTPS de capa 7 y bloquea patrones maliciosos.',
    'VPN':'Conecta redes o usuarios de forma cifrada a través de internet.',
    'Directory Service':'Directorio gestionado para autenticación y unión de equipos.',
    'Lambda':'Ejecuta funciones por evento sin administrar servidores.',
    'Cognito':'Autenticación y autorización para aplicaciones y usuarios finales.'
  });

  Object.assign(D.categories, {
    global: {
      id:'global', block:'fundamentos', title:'Infraestructura global', status:'ready', officialCount:6,
      desc:'Dónde vive AWS y cómo acercar los servicios al usuario.',
      intro:'El examen pregunta por la diferencia entre región, zona de disponibilidad, edge location y las extensiones locales. No son sinónimos: cada una resuelve latencia, disponibilidad o cercanía al datacenter.',
      subcategories:[
        {id:'ubicaciones', title:'Ubicaciones principales', desc:'Región, AZ y edge location.', when:'Elegir dónde desplegar y cómo repartir usuarios.', services:'Región, AZ y edge location'},
        {id:'extensiones', title:'Extensiones y borde', desc:'Local Zones y Wavelength. Outposts se detalla en Cómputo.', when:'Latencia local o cómputo en el borde 5G.', services:'Local Zones y Wavelength'}
      ]
    },
    computo: {
      id:'computo', block:'computo', title:'Cómputo', status:'ready', officialCount:5,
      desc:'Servidores, instancias, PaaS (plataforma como servicio), lotes y cómputo híbrido.',
      intro:'La decisión empieza por cuánto control necesitas: EC2 te da la máquina; Beanstalk abstrae la plataforma; Batch ejecuta trabajos; Outposts lleva AWS a tu datacenter. Lambda y contenedores están en sus propias categorías.',
      subcategories:[
        {id:'instancias', title:'Instancias', desc:'Servidores virtuales con control del sistema operativo.', when:'Aplicaciones tradicionales, control del SO o cargas que no encajan en serverless.', services:'EC2 y Lightsail'},
        {id:'plataforma', title:'Plataforma gestionada', desc:'Subes el código y AWS gestiona la infraestructura.', when:'Aplicaciones web tradicionales con menos operación.', services:'Elastic Beanstalk'},
        {id:'lotes', title:'Procesamiento por lotes', desc:'Trabajos programados o en cola.', when:'Render, simulación, análisis o ETL por lotes.', services:'AWS Batch'},
        {id:'hibrido', title:'Cómputo híbrido', desc:'Hardware de AWS en tu datacenter.', when:'Baja latencia local, residencia de datos o migración gradual.', services:'AWS Outposts'}
      ]
    },
    contenedores: {
      id:'contenedores', block:'computo', title:'Contenedores', status:'ready', officialCount:3,
      desc:'Empaquetar, registrar y orquestar contenedores.',
      intro:'Un contenedor necesita una imagen, un registro y un orquestador. ECS y EKS organizan los contenedores; ECR guarda las imágenes. Fargate, la opción sin servidores, está en Serverless.',
      subcategories:[
        {id:'orquestacion', title:'Orquestación', desc:'Dónde y cómo corren los contenedores.', when:'Microservicios, portabilidad o Kubernetes.', services:'ECS y EKS'},
        {id:'registro', title:'Registro de imágenes', desc:'Repositorio privado de imágenes.', when:'Guardar y escanear imágenes antes de desplegarlas.', services:'Amazon ECR'}
      ]
    },
    serverless: {
      id:'serverless', block:'computo', title:'Serverless', status:'ready', officialCount:2,
      desc:'Ejecutar código o contenedores sin administrar servidores.',
      intro:'Serverless no siempre significa Lambda. Lambda ejecuta funciones por evento; Fargate ejecuta contenedores sin que administres la instancia. Ambos escalan y se facturan por uso, pero tienen límites distintos.',
      subcategories:[
        {id:'funciones', title:'Funciones', desc:'Código por evento, sin servidores.', when:'APIs, eventos, automatización y procesos cortos.', services:'AWS Lambda'},
        {id:'contenedores', title:'Contenedores serverless', desc:'Contenedores sin administrar hosts.', when:'Microservicios en contenedores sin gestionar clústeres.', services:'AWS Fargate'}
      ]
    },
    almacenamiento: {
      id:'almacenamiento', block:'datos', title:'Almacenamiento', status:'ready', officialCount:8,
      desc:'Objetos, bloque, archivos, híbrido, copias de seguridad y recuperación.',
      intro:'Primero decide el modelo: objeto (S3), bloque (EBS) o archivo (EFS/FSx). Después elige la clase, la durabilidad, la latencia y si necesitas mover o proteger los datos.',
      subcategories:[
        {id:'objetos', title:'Objetos', desc:'Archivos accesibles por API, sin sistema de archivos.', when:'Web, copias de seguridad, data lakes, contenido estático y archivos.', services:'S3 y S3 Glacier'},
        {id:'bloque', title:'Bloque', desc:'Disco conectado a una instancia.', when:'Sistema operativo, bases autogestionadas o aplicaciones que necesitan un volumen.', services:'Amazon EBS'},
        {id:'archivos', title:'Archivos', desc:'Sistemas de archivos compartidos por red.', when:'Varias instancias necesitan el mismo sistema de archivos.', services:'EFS y FSx'},
        {id:'hibrido', title:'Híbrido y transferencia', desc:'Mover datos entre on-premises y AWS.', when:'Migraciones, archivos grandes o acceso local a la nube.', services:'Storage Gateway, Snow y DataSync'},
        {id:'proteccion', title:'Copias de seguridad y recuperación', desc:'Copias y recuperación ante desastres.', when:'Proteger datos y restaurar cargas críticas.', services:'AWS Backup y DRS'}
      ]
    },
    redes: {
      id:'redes', block:'redes', title:'Redes y entrega', status:'ready', officialCount:11,
      desc:'VPC, conectividad, DNS, CDN, balanceo y APIs.',
      intro:'La red se construye por capas: VPC y subredes, controles de tráfico, conexión con otras redes, entrega global y balanceo. En el examen, separa “quién puede entrar” de “cómo llega el usuario” y de “cómo reparto el tráfico”.',
      subcategories:[
        {id:'vpc', title:'VPC y subredes', desc:'La red aislada y sus controles.', when:'Aislar cargas, definir subredes públicas/privadas y filtrar tráfico.', services:'VPC, Security Groups y NACL'},
        {id:'conectividad', title:'Conectividad', desc:'Unir VPC, datacenter y usuarios remotos.', when:'Híbrido, muchas VPC o acceso privado a servicios.', services:'DX, VPN, Transit Gateway y PrivateLink'},
        {id:'entrega', title:'DNS y entrega global', desc:'Resolver nombres y acercar contenido.', when:'Dominios, latencia global, CDN y failover.', services:'Route 53, CloudFront y Global Accelerator'},
        {id:'balanceo', title:'Balanceo', desc:'Repartir tráfico entre destinos.', when:'Varias instancias o contenedores detrás de una aplicación.', services:'Elastic Load Balancing'},
        {id:'api', title:'APIs', desc:'Publicar y proteger APIs.', when:'Exponer una API a clientes o integrar servicios.', services:'API Gateway'}
      ]
    }
  });

  // ---------- Infraestructura global ----------
  concept('global',['ubicaciones','region','Región de AWS','Área geográfica con zonas de disponibilidad aisladas.','Región / latencia / cumplimiento / servicios disponibles.','Una región es un área geográfica con varias AZ. Eliges región por latencia, cumplimiento, servicios disponibles y costo; los datos no salen de ella salvo que lo configures.','Cuando el enunciado pide desplegar cerca de los usuarios, cumplir residencia de datos o elegir dónde crear recursos.','No es una sola zona de disponibilidad.','No es un datacenter único; una región contiene varias AZ.','No es un servicio que se configura: es una ubicación.'],[C('AZ','Una AZ es una ubicación dentro de la región, no la región completa.'),C('Edge location','Una edge location es un punto de presencia para CDN/DNS, no una región de cómputo.'),C('Local Zone','Una Local Zone acerca cómputo a una ciudad, pero no reemplaza la región.' )],['VPC','EC2','S3','Route 53'],['s33','s34'],11);
  concept('global',['ubicaciones','az','Zona de disponibilidad (AZ)','Uno o más datacenters aislados dentro de una región.','AZ / Multi-AZ / alta disponibilidad / fallo de datacenter.','Una AZ es un grupo de datacenters con energía, red y refrigeración independientes. Desplegar en varias AZ es la base de la alta disponibilidad dentro de una región.','Cuando necesitas sobrevivir a la caída de un datacenter o diseñar Multi-AZ.','No es una región completa.','No protege ante la caída de toda la región.','No es lo mismo que una edge location.'],[C('Región','La región contiene varias AZ; una AZ no contiene regiones.'),C('Edge location','La edge location acerca contenido, no aloja tu base de datos principal.'),C('Multi-AZ','Multi-AZ usa varias AZ para disponibilidad.' )],['VPC','RDS','ELB','Auto Scaling'],['s33','s34'],11);
  concept('global',['ubicaciones','edge-location','Edge location','Punto de presencia de AWS cerca de los usuarios.','Edge / CDN / baja latencia / CloudFront.','Una edge location es una ubicación de la red de AWS usada por CloudFront, Route 53 y Global Accelerator para acercar contenido y resolver tráfico.','Cuando el examen pregunta por cachear contenido o reducir latencia global sin replicar toda la aplicación.','No es una región para ejecutar EC2 o RDS.','No almacena tus datos de forma persistente por sí sola.','No es una AZ.'],[C('Región','La región aloja servicios; la edge location acerca entrega.'),C('CloudFront','CloudFront usa edge locations para cachear.'),C('Local Zone','La Local Zone ofrece cómputo local, no solo entrega.' )],['CloudFront','Route 53','Global Accelerator'],['s33','s34'],11);
  concept('global',['extensiones','local-zones','AWS Local Zones','Extensión de una región cerca de una ciudad.','Local Zone / latencia ultrabaja / cómputo local.','Una Local Zone lleva cómputo, almacenamiento y otros servicios cerca de una área metropolitana, conectada a la región padre.','Cuando necesitas latencia de un solo dígito para usuarios locales o cumplir requisitos de cercanía.','No es una región independiente.','No tiene todos los servicios de una región.','No es una edge location de CDN.'],[C('Región','La Local Zone extiende una región.'),C('Wavelength','Wavelength está orientado a redes 5G; Local Zone a proximidad urbana.'),C('Outposts','Outposts lleva hardware a tu datacenter; Local Zone es infraestructura de AWS en una ciudad.' )],['VPC','EC2','Direct Connect'],['s33'],11);
  concept('global',['extensiones','wavelength','AWS Wavelength','Cómputo en el borde de redes 5G.','5G / latencia ultrabaja / aplicaciones móviles.','Wavelength despliega servicios de AWS dentro de redes de telecomunicaciones 5G para reducir la latencia de aplicaciones móviles.','Cuando el caso pide latencia ultrabaja para dispositivos móviles o 5G.','No es una región normal.','No es para cargas generales de oficina.','No reemplaza CloudFront.'],[C('Local Zone','Local Zone acerca cómputo a una ciudad; Wavelength al borde 5G.'),C('Edge location','La edge location cachea contenido; Wavelength ejecuta cómputo.'),C('Outposts','Outposts está en tu datacenter; Wavelength en la red del operador.' )],['VPC','EC2','CloudFront'],['s33'],11);
  concept('global',['extensiones','outposts','AWS Outposts','Hardware de AWS instalado en tu datacenter.','Outposts / híbrido / baja latencia local / residencia.','Outposts lleva infraestructura y servicios de AWS a tu instalación para cargas que necesitan baja latencia local, procesamiento local o residencia de datos.','Cuando el enunciado pide AWS en el datacenter del cliente o cargas híbridas con baja latencia.','No es una región de AWS.','No es un servicio de backup.','No elimina la responsabilidad del cliente sobre la instalación.'],[C('Local Zone','Local Zone es infraestructura de AWS en una ciudad; Outposts está en tu edificio.'),C('Direct Connect','DX conecta tu red; Outposts ejecuta servicios localmente.'),C('Snow Family','Snow mueve datos; Outposts ejecuta cargas.' )],['VPC','EC2','EBS','Direct Connect'],['s33'],11);

  // ---------- Cómputo ----------
  add('computo',['instancias','ec2','Amazon EC2','Servidores virtuales con control del sistema operativo.','Instancia / SO / familia / modelo de compra.','EC2 ofrece instancias virtuales con control del sistema operativo, la red y el almacenamiento. Tú eliges familia, tamaño, AMI y modelo de compra; AWS administra el hardware y el hipervisor.','Aplicaciones tradicionales, servidores que necesitan control del SO, cargas auto-gestionadas o cuando no encaja serverless.','No es serverless: tú parcheas el SO y administras la instancia.','No es una base de datos gestionada.','No escala solo: necesitas Auto Scaling y ELB.','No es lo mismo que Lightsail.'],[C('Lightsail','Lightsail es simple y de precio fijo; EC2 es flexible y granular.'),C('Lambda','Lambda ejecuta funciones sin servidores; EC2 te da la máquina.'),C('Fargate','Fargate ejecuta contenedores; EC2 ejecuta instancias.'),C('Elastic Beanstalk','Beanstalk crea y escala EC2 por ti.' )],['VPC','EBS','ELB','Auto Scaling','CloudWatch','IAM'],['s18','s19','s20'],5);
  add('computo',['instancias','lightsail','Amazon Lightsail','Servidores simples con precio mensual fijo.','Principiantes / precio predecible / WordPress / servidor pequeño.','Lightsail empaqueta cómputo, almacenamiento, red y transferencia en planes mensuales simples, pensados para proyectos pequeños y usuarios que no quieren configurar una VPC compleja.','Cuando el caso pide una solución sencilla y barata para una web pequeña, un blog o un entorno de pruebas.','No es para arquitecturas empresariales complejas.','No ofrece la granularidad de EC2.','No es serverless.'],[C('EC2','EC2 es más flexible; Lightsail es más simple y predecible.'),C('Elastic Beanstalk','Beanstalk despliega aplicaciones y escala; Lightsail es un servidor empaquetado.'),C('Lambda','Lambda es por evento; Lightsail es un servidor mensual.' )],['VPC','Route 53','S3'],['s18'],5);
  add('computo',['plataforma','beanstalk','AWS Elastic Beanstalk','PaaS (plataforma como servicio) para desplegar aplicaciones sin gestionar la infraestructura.','Subir código / PaaS / escalado automático / sin administrar servidores.','Beanstalk recibe tu aplicación, crea la infraestructura (EC2, ELB, Auto Scaling) y gestiona el despliegue y el escalado. Tú mantienes el control de la aplicación.','Cuando quieres desplegar una app web tradicional con poco trabajo operativo, sin reescribirla como serverless.','No es un servicio serverless de funciones.','No elimina el control sobre la app ni la configuración.','No es lo mismo que CloudFormation.'],[C('EC2','EC2 te da la instancia; Beanstalk orquesta la infraestructura por ti.'),C('Lambda','Lambda es por evento; Beanstalk ejecuta una aplicación completa.'),C('CloudFormation','CloudFormation define infraestructura como código; Beanstalk despliega aplicaciones.' )],['EC2','ELB','Auto Scaling','CloudWatch'],['s18','s67'],5);
  add('computo',['lotes','batch','AWS Batch','Procesamiento por lotes con capacidad gestionada.','Lotes / render / simulación / trabajos en cola.','AWS Batch programa y ejecuta trabajos por lotes, aprovisionando la capacidad de cómputo necesaria y encolando las tareas.','Cuando el caso pide render, simulación, análisis o ETL por lotes y no quieres administrar la cola ni la capacidad.','No es para una API interactiva.','No es serverless de funciones.','No es un orquestador de microservicios.'],[C('Lambda','Lambda es por evento y tiene límite de 15 minutos; Batch es para trabajos por lotes.'),C('Step Functions','Step Functions orquesta pasos; Batch ejecuta trabajos de cómputo.'),C('EMR','EMR procesa big data con Hadoop/Spark; Batch es un ejecutor genérico.' )],['EC2','S3','CloudWatch'],['s18','s67'],5);
  add('computo',['hibrido','outposts','AWS Outposts','Hardware de AWS en tu datacenter.','Híbrido / datacenter propio / baja latencia local / residencia.','Outposts instala infraestructura de AWS en tu instalación para ejecutar servicios con baja latencia local o requisitos de residencia, conectada a la región.','Cuando el examen menciona AWS en el datacenter del cliente o cargas híbridas que no pueden salir a una región.','No es una región de AWS.','No es un servicio de backup ni de migración.','No elimina la responsabilidad sobre la instalación.'],[C('Local Zone','Local Zone es de AWS en una ciudad; Outposts está en tu edificio.'),C('Direct Connect','DX conecta tu red; Outposts ejecuta servicios localmente.'),C('Snow Family','Snow mueve datos; Outposts ejecuta cargas.' )],['VPC','EC2','EBS','Direct Connect'],['s33'],5);

  // ---------- Contenedores ----------
  add('contenedores',['orquestacion','ecs','Amazon ECS','Orquestador de contenedores de AWS.','Contenedores / clúster / Fargate / ECS.','ECS organiza contenedores en clústeres y decide dónde ejecutarlos. Puede usar instancias EC2 o Fargate como capacidad.','Cuando quieres orquestar contenedores con la integración nativa de AWS y no necesitas Kubernetes.','No es Kubernetes.','No administra las imágenes: para eso está ECR.','No es un servicio de funciones.'],[C('EKS','EKS es Kubernetes gestionado; ECS es el orquestador propio de AWS.'),C('Fargate','Fargate es la capacidad sin servidores; ECS es el orquestador.'),C('ECR','ECR guarda imágenes; ECS ejecuta contenedores.' )],['ECR','Fargate','EC2','ELB','CloudWatch'],['s31','s67'],10);
  add('contenedores',['orquestacion','eks','Amazon EKS','Kubernetes gestionado en AWS.','Kubernetes / K8s / portabilidad / clúster gestionado.','EKS ejecuta Kubernetes gestionado: AWS administra el plano de control y tú decides la capacidad (EC2 o Fargate) y las cargas.','Cuando el equipo ya usa Kubernetes, necesita portabilidad o herramientas del ecosistema K8s.','No es un orquestador propio de AWS.','No es un registro de imágenes.','No elimina la complejidad de Kubernetes.'],[C('ECS','ECS es más simple y nativo; EKS es Kubernetes.'),C('Fargate','Fargate ejecuta pods sin servidores; EKS es el plano de control.'),C('ECR','ECR almacena imágenes; EKS las ejecuta.' )],['ECR','Fargate','EC2','ELB','CloudWatch'],['s31','s67'],10);
  add('contenedores',['registro','ecr','Amazon ECR','Registro privado de imágenes de contenedor.','Imágenes / Docker / registro / escaneo.','ECR almacena, versiona y escanea imágenes de contenedor para que ECS, EKS o Fargate las descarguen.','Cuando necesitas un registro privado integrado con IAM y los servicios de contenedores.','No ejecuta contenedores.','No es un repositorio Git.','No es un orquestador.'],[C('ECS/EKS','Ellos ejecutan las imágenes; ECR las guarda.'),C('CodeArtifact','CodeArtifact guarda paquetes; ECR guarda imágenes.'),C('S3','S3 es almacenamiento de objetos; ECR es un registro de imágenes.' )],['ECS','EKS','Fargate','IAM'],['s31','s67'],10);

  // ---------- Serverless ----------
  add('serverless',['funciones','lambda','AWS Lambda','Ejecuta funciones por evento sin administrar servidores.','Serverless / evento / función / 15 minutos / pago por uso.','Lambda ejecuta código ante eventos (HTTP, S3, DynamoDB, SQS, etc.) y escala automáticamente. Se factura por invocación y duración, con un máximo de 15 minutos por ejecución.','APIs, automatizaciones, procesamiento de eventos, tareas cortas y cargas impredecibles.','No es para procesos que superan 15 minutos.','No mantienes estado entre invocaciones.','No administra servidores, pero tú sigues siendo responsable del código y los permisos.'],[C('Fargate','Fargate ejecuta contenedores; Lambda ejecuta funciones.'),C('EC2','EC2 te da la máquina; Lambda es por evento.'),C('Batch','Batch es para trabajos por lotes largos; Lambda para eventos cortos.' )],['API Gateway','DynamoDB','S3','SQS','CloudWatch'],['s31','s32'],10);
  add('serverless','contenedores','fargate','AWS Fargate','Contenedores sin administrar servidores.','Contenedores serverless / sin nodos / ECS / EKS.','Fargate ejecuta contenedores sin que administres las instancias: defines CPU y memoria y AWS se encarga del host. Se usa con ECS o EKS.','Cuando quieres contenedores sin gestionar clústeres de EC2 ni parchear servidores.','No es un orquestador: necesita ECS o EKS.','No es Lambda: ejecuta contenedores, no funciones.','No es más barato automáticamente que EC2 para cargas constantes.',[C('Lambda','Lambda ejecuta funciones; Fargate ejecuta contenedores.'),C('EC2','EC2 te da la instancia; Fargate abstrae el host.'),C('ECS/EKS','Son los orquestadores que usan Fargate.' )],['ECS','EKS','ECR','ELB'],['s31','s32'],10);

  // ---------- Almacenamiento ----------
  add('almacenamiento',['objetos','s3','Amazon S3','Almacenamiento de objetos con durabilidad de 11 nueves.','Objetos / bucket / 11 nueves / clases / sitio web estático.','S3 guarda objetos en buckets con nombres únicos globales, alta durabilidad y clases de almacenamiento para distintos patrones de acceso.','Web estática, backups, data lakes, contenido multimedia, logs y cualquier archivo accesible por API.','No es un sistema de archivos.','No es una base de datos relacional.','No es un disco de bloque para una EC2.','No es un CDN por sí solo.'],[C('EBS','EBS es bloque para una instancia; S3 es objeto.'),C('EFS','EFS es un sistema de archivos compartido; S3 es objeto.'),C('CloudFront','CloudFront cachea contenido; S3 lo almacena.'),C('Glacier','Glacier es una clase de archivo dentro de S3.' )],['IAM','KMS','CloudFront','Glacier','Athena','CloudTrail'],['s21','s22','s23'],6);
  add('almacenamiento',['objetos','glacier','Amazon S3 Glacier','Archivo de bajo costo y recuperación diferida.','Archivo / recuperación diferida / Deep Archive / copias anuales.','S3 Glacier ofrece clases de archivo de bajo costo para datos que se consultan rara vez; la recuperación puede tardar minutos u horas según la clase.','Backups a largo plazo, archivos históricos y datos que no necesitas en milisegundos.','No es para acceso interactivo frecuente.','No es un sistema de archivos.','No es una base de datos.'],[C('S3 Standard','S3 Standard es acceso inmediato; Glacier es archivo.'),C('EBS','EBS es bloque; Glacier es objeto archivado.'),C('AWS Backup','Backup puede almacenar copias en Glacier; Glacier no es un servicio de backup por sí solo.' )],['S3','AWS Backup','IAM','KMS'],['s22'],6);
  add('almacenamiento',['bloque','ebs','Amazon EBS','Volumen de bloque persistente para EC2.','Bloque / disco / IOPS / snapshot / una AZ.','EBS ofrece volúmenes de bloque persistentes que se conectan a una instancia EC2. El volumen vive en una AZ concreta y se puede respaldar con snapshots.','Sistema operativo de EC2, bases autogestionadas o aplicaciones que necesitan un disco.','No es un sistema de archivos compartido.','No es almacenamiento de objetos.','No está ligado a una instancia después de attach; puede reutilizarse.'],[C('S3','S3 es objeto; EBS es bloque.'),C('EFS','EFS es compartido; EBS se conecta a una instancia.'),C('Instance Store','Instance Store es efímero; EBS persiste.' )],['EC2','KMS','AWS Backup','CloudWatch'],['s24'],6);
  add('almacenamiento',['archivos','efs','Amazon EFS','Sistema de archivos NFS elástico y compartido.','NFS / compartido / Linux / escalado automático.','EFS es un sistema de archivos de red elástico para Linux, compartido entre varias instancias y con escalado automático.','Varias instancias necesitan el mismo sistema de archivos, o una aplicación Linux requiere NFS.','No es un disco de bloque.','No es un sistema de archivos Windows nativo.','No es almacenamiento de objetos.'],[C('EBS','EBS es bloque para una instancia; EFS es compartido.'),C('FSx','FSx cubre Windows, Lustre, NetApp y OpenZFS.'),C('S3','S3 es objeto; EFS es sistema de archivos.' )],['EC2','VPC','KMS','AWS Backup'],['s24'],6);
  add('almacenamiento',['archivos','fsx','Amazon FSx','Sistemas de archivos gestionados para cargas específicas.','Windows / Lustre / NetApp / OpenZFS / archivos.','FSx ofrece sistemas de archivos gestionados para Windows File Server, Lustre, NetApp ONTAP y OpenZFS, cada uno optimizado para un tipo de carga.','Aplicaciones Windows, HPC, análisis con Lustre o migraciones de NetApp/OpenZFS.','No es un sistema de archivos genérico como EFS.','No es un disco de bloque.','No es almacenamiento de objetos.'],[C('EFS','EFS es NFS Linux; FSx cubre otros protocolos y cargas.'),C('EBS','EBS es bloque; FSx es archivo.'),C('S3','S3 es objeto; FSx es sistema de archivos.' )],['EC2','VPC','KMS','AWS Backup'],['s24'],6);
  add('almacenamiento',['hibrido','storage-gateway','AWS Storage Gateway','Puente híbrido entre on-premises y almacenamiento AWS.','Híbrido / NFS / SMB / cinta / caché local.','Storage Gateway conecta aplicaciones on-premises con S3, EBS o Glacier mediante protocolos estándar y caché local.','Cuando el datacenter necesita seguir usando archivos o cintas pero quiere respaldar en AWS.','No es un servicio de cómputo.','No es un dispositivo físico de Snow.','No es un sistema de archivos de AWS puro.'],[C('DataSync','DataSync mueve archivos; Storage Gateway da acceso continuo.'),C('Snow Family','Snow mueve datos físicamente; Storage Gateway mantiene una conexión híbrida.'),C('S3','S3 es el destino; Storage Gateway es el puente.' )],['S3','EBS','Glacier','IAM'],['s24','s42'],6);
  add('almacenamiento',['hibrido','snow','AWS Snow Family','Dispositivos físicos para mover o procesar datos en el borde.','Snowball / Edge / migración offline / borde.','La familia Snow incluye dispositivos para mover grandes volúmenes de datos sin depender de la red o para ejecutar cómputo en ubicaciones sin conectividad.','Migraciones de petabytes, entornos remotos o procesamiento en el borde.','No es un servicio de almacenamiento permanente en la nube.','No es una conexión VPN.','No es lo mismo que Storage Gateway.'],[C('DataSync','DataSync usa la red; Snow usa un dispositivo físico.'),C('Storage Gateway','Storage Gateway es híbrido continuo; Snow es transferencia por lotes.'),C('S3','S3 es el destino; Snow es el transporte.' )],['S3','Glacier','IAM'],['s42'],6,'Complementario');
  add('almacenamiento',['hibrido','datasync','AWS DataSync','Transferencia de archivos entre on-premises y AWS.','Mover archivos / NFS / SMB / S3 / EFS / FSx.','DataSync automatiza la copia de archivos entre almacenamiento local y S3, EFS o FSx, con verificación e incremental.','Migraciones de archivos, replicación periódica o sincronización entre entornos.','No es un dispositivo físico.','No es un servicio de backup completo.','No es un sistema de archivos.'],[C('Storage Gateway','Storage Gateway da acceso híbrido continuo; DataSync mueve lotes.'),C('Snow Family','Snow es físico; DataSync usa red.'),C('AWS Backup','Backup protege; DataSync transfiere.' )],['S3','EFS','FSx','IAM'],['s42'],6,'Complementario');
  add('almacenamiento',['proteccion','backup','AWS Backup','Copias de seguridad centralizadas y políticas de retención.','Backup / retención / cumplimiento / restauración.','AWS Backup centraliza copias de seguridad de varios servicios (EBS, RDS, EFS, S3, etc.) con políticas y retención.','Cuando necesitas una política de backup común y restaurar recursos de forma consistente.','No es un servicio de migración.','No reemplaza los snapshots nativos si necesitas una función específica.','No es almacenamiento primario.'],[C('S3 Glacier','Glacier es una clase de archivo; Backup orquesta copias.'),C('EBS Snapshots','Los snapshots son de EBS; Backup los gestiona de forma central.'),C('DRS','DRS replica servidores para DR; Backup hace copias.' )],['EBS','RDS','EFS','S3','KMS'],['s24','s42'],6);
  add('almacenamiento',['proteccion','drs','AWS Elastic Disaster Recovery (DRS)','Replicación continua para recuperación ante desastres.','DR (recuperación ante desastres) / RPO (punto de recuperación) bajo / replicación continua.','DRS replica servidores y sus volúmenes hacia AWS de forma continua para recuperarlos rápidamente ante un desastre, con bajo RPO.','Cuando el enunciado pide un sitio de recuperación en AWS o recuperación en minutos.','No es una migración definitiva: para eso está MGN.','No es un backup puntual.','No reemplaza una estrategia de alta disponibilidad multi-AZ.'],[C('MGN','MGN migra servidores; DRS los mantiene replicados para DR.'),C('AWS Backup','Backup crea copias; DRS replica para recuperación rápida.'),C('Multi-AZ','Multi-AZ es HA dentro de una región; DRS es DR entre entornos.' )],['EC2','EBS','VPC','KMS'],['s42'],6);

  // ---------- Redes ----------
  add('redes',['vpc','vpc','Amazon VPC','Red aislada y configurable dentro de una región.','VPC / subredes / route table / IGW / NAT.','VPC es una red virtual aislada en una región. Contiene subredes en distintas AZ, tablas de rutas, gateways y controles de seguridad.','Cualquier arquitectura que necesite aislamiento, subredes públicas/privadas o conexión híbrida.','No es una región.','No es un firewall por sí sola.','No define por sí misma qué tráfico se permite: eso lo hacen SG/NACL.'],[C('Subred','La subred es un segmento dentro de una AZ.'),C('Security Group','El SG filtra tráfico a nivel de instancia/ENI.'),C('Route 53','Route 53 es DNS; VPC es red.' )],['EC2','ELB','RDS','Direct Connect','Transit Gateway'],['s27','s65'],8);
  concept('redes',['vpc','sg-nacl','Security Groups y NACL','Dos capas de firewall con comportamiento distinto.','Stateful / stateless / allow / deny / subred / instancia.','El security group es stateful, se aplica a instancias/ENI y solo permite. La NACL (Network ACL) es stateless, se aplica a subredes y permite denegar con reglas numeradas.','Cuando el examen pregunta quién puede denegar una IP, cómo funcionan las respuestas o dónde se aplica el filtro.','El security group no puede denegar por sí solo (solo allow).','La NACL no reemplaza un WAF.','No son el mismo tipo de firewall.'],[C('SG vs NACL','SG es stateful y de instancia; NACL es stateless y de subred.'),C('WAF','WAF filtra HTTP de capa 7; SG/NACL filtran red.'),C('Network Firewall','Network Firewall es una inspección gestionada más avanzada.' )],['VPC','EC2','ALB','RDS'],['s28','s65'],8);
  add('redes',['balanceo','elb','Elastic Load Balancing','Balanceador gestionado para repartir tráfico.','ALB / NLB / GWLB / comprobaciones de estado / capa 7.','Elastic Load Balancing distribuye tráfico entre destinos y hace comprobaciones de estado. ALB es capa 7 (HTTP/HTTPS), NLB es capa 4 (TCP/UDP) y GWLB es para appliances de seguridad.','Cuando hay varias instancias, contenedores o IPs y necesitas repartir tráfico y evitar destinos fallidos.','No crea ni escala instancias por sí solo.','No es un CDN.','No es un API Gateway.'],[C('ALB vs NLB','ALB entiende HTTP; NLB es TCP/UDP de alto rendimiento.'),C('API Gateway','API Gateway gestiona APIs; ELB reparte tráfico.'),C('Auto Scaling','Auto Scaling ajusta instancias; ELB reparte el tráfico.' )],['EC2','Auto Scaling','VPC','CloudWatch'],['s65'],8);
  add('redes',['entrega','route53','Amazon Route 53','DNS gestionado y enrutamiento de dominios.','DNS / zona alojada / failover / latencia / ponderado.','Route 53 traduce nombres a direcciones y ofrece políticas de enrutamiento simple, ponderado, latencia, failover, geolocalización y multivalor, con comprobaciones de estado.','Cuando necesitas un dominio, dirigir usuarios a distintas regiones o hacer failover DNS.','No es un CDN.','No es un balanceador de carga de aplicación.','No almacena contenido.'],[C('CloudFront','CloudFront entrega contenido; Route 53 resuelve el nombre.'),C('Global Accelerator','Global Accelerator acelera TCP/UDP; Route 53 enruta DNS.'),C('ELB','ELB balancea tráfico; Route 53 puede apuntar al balanceador.' )],['VPC','CloudFront','ELB','Health Dashboard'],['s29'],9);
  add('redes',['entrega','cloudfront','Amazon CloudFront','CDN (red de entrega de contenido) global con caché en edge locations.','CDN / edge / cache / HTTPS / contenido estático.','CloudFront distribuye contenido desde edge locations, cachea respuestas y se integra con S3, ALB, Lambda@Edge y ACM.','Contenido estático o dinámico que necesita baja latencia global, HTTPS y descarga del origen.','No es un balanceador de carga regional.','No es un DNS.','No reemplaza el almacenamiento de origen.'],[C('Global Accelerator','CloudFront cachea HTTP; Global Accelerator acelera TCP/UDP sin caché.'),C('S3','S3 es el origen; CloudFront lo cachea.'),C('Route 53','Route 53 resuelve el dominio; CloudFront entrega el contenido.' )],['S3','ALB','ACM','WAF','Route 53'],['s30'],9);
  add('redes',['entrega','global-accelerator','AWS Global Accelerator','Red global anycast para acelerar TCP/UDP y failover.','Anycast / latencia / TCP/UDP / failover / sin caché.','Global Accelerator dirige el tráfico de los usuarios a los endpoints de AWS más cercanos mediante anycast (enrutamiento a la ubicación más próxima), sin cachear contenido.','Aplicaciones TCP/UDP globales, gaming, VoIP o failover entre regiones.','No es un CDN: no cachea.','No es un DNS.','No reemplaza un balanceador regional.'],[C('CloudFront','CloudFront cachea HTTP; Global Accelerator acelera TCP/UDP.'),C('Route 53','Route 53 enruta DNS; Global Accelerator usa anycast.'),C('ELB','El balanceador reparte dentro de la región; Global Accelerator acerca al endpoint.' )],['ALB/NLB','Route 53','EC2'],['s30'],9);
  add('redes',['conectividad','direct-connect','AWS Direct Connect','Enlace privado dedicado entre tu red y AWS.','Dedicado / privado / híbrido / no internet / VLAN.','Direct Connect establece una conexión privada dedicada desde tu datacenter o proveedor hasta AWS, con mayor consistencia que internet.','Cuando necesitas ancho de banda estable, privacidad o conexión híbrida dedicada.','No es una VPN por internet.','No cifra el tráfico por sí solo: puedes combinarlo con VPN.','No es un servicio de backup.'],[C('Site-to-Site VPN','VPN usa internet y cifra; DX es dedicado y privado.'),C('Transit Gateway','TGW centraliza la conexión de redes; DX es el enlace físico.'),C('CloudFront','CloudFront entrega contenido; DX conecta tu red.' )],['VPC','Transit Gateway','VPN','Route 53'],['s30','s66'],9);
  add('redes',['conectividad','site-vpn','AWS Site-to-Site VPN','Túnel cifrado por internet entre tu red y AWS.','VPN / cifrado / internet / respaldo / híbrido.','Site-to-Site VPN crea un túnel IPsec cifrado entre tu red on-premises y una VPC, usando internet.','Cuando necesitas conectar rápido una red local con AWS o como respaldo de Direct Connect.','No es un enlace dedicado.','No garantiza el mismo rendimiento que DX.','No reemplaza una conexión privada para cargas críticas.'],[C('Direct Connect','DX es dedicado; VPN es cifrado sobre internet.'),C('Client VPN','Client VPN conecta usuarios; Site-to-Site conecta redes.'),C('Transit Gateway','TGW puede centralizar las VPN.' )],['VPC','Transit Gateway','Direct Connect'],['s30','s66'],9);
  add('redes',['conectividad','client-vpn','AWS Client VPN','VPN gestionada para usuarios remotos.','Usuarios remotos / VPN / acceso a VPC / cliente.','Client VPN permite que usuarios individuales se conecten de forma segura a la VPC mediante un cliente VPN.','Cuando empleados remotos necesitan acceder a recursos privados de la VPC.','No conecta redes completas: para eso está Site-to-Site VPN.','No es un escritorio virtual.','No reemplaza IAM.'],[C('Site-to-Site VPN','Site-to-Site conecta redes; Client VPN conecta usuarios.'),C('WorkSpaces','WorkSpaces da un escritorio; Client VPN da conectividad.'),C('Direct Connect','DX es un enlace dedicado; Client VPN es remota.' )],['VPC','Directory Service','IAM'],['s30','s66'],9);
  add('redes',['conectividad','transit-gateway','AWS Transit Gateway','Hub para conectar muchas VPC y redes.','Hub / muchas VPC / peering / híbrido / escalable.','Transit Gateway centraliza la conectividad entre VPC, VPN y Direct Connect, evitando una malla de peering punto a punto.','Cuando tienes muchas VPC o redes y quieres un único punto de enrutamiento.','No es un firewall.','No es un balanceador.','No es lo mismo que VPC Peering.'],[C('VPC Peering','Peering conecta dos VPC; TGW escala a muchas.'),C('Direct Connect','DX es el enlace; TGW enruta entre redes.'),C('PrivateLink','PrivateLink expone servicios; TGW conecta redes.' )],['VPC','Direct Connect','VPN'],['s65','s66'],8);
  add('redes',['conectividad','privatelink','AWS PrivateLink','Acceso privado a un servicio sin internet.','Privado / endpoint / servicio / sin internet / VPC.','PrivateLink permite consumir un servicio de AWS o de un partner mediante un endpoint privado dentro de la VPC, sin exponerlo a internet.','Cuando necesitas acceso privado a un servicio o SaaS desde la VPC.','No conecta dos VPC completas.','No es un túnel VPN.','No es un CDN.'],[C('VPC Peering','Peering conecta redes completas; PrivateLink expone un servicio.'),C('Transit Gateway','TGW enruta redes; PrivateLink expone servicios.'),C('Direct Connect','DX conecta tu red; PrivateLink conecta a un servicio.' )],['VPC','NLB','Route 53'],['s65','s66'],8);
  add('redes',['api','api-gateway','Amazon API Gateway','Publica, protege y escala APIs.','API / REST / HTTP / WebSocket / throttling / auth.','API Gateway crea y gestiona APIs REST, HTTP y WebSocket, con autenticación, límites de tasa, caché y integración con Lambda u otros backends.','Cuando necesitas exponer una API, controlar el acceso y escalar sin administrar servidores.','No ejecuta la lógica de negocio: la delega en Lambda u otro backend.','No es un balanceador de carga general.','No es un CDN.'],[C('ALB','ALB balancea HTTP; API Gateway gestiona APIs.'),C('Lambda','Lambda ejecuta la lógica; API Gateway la expone.'),C('CloudFront','CloudFront puede cachear delante de API Gateway.' )],['Lambda','DynamoDB','Cognito','IAM','CloudWatch'],['s31'],9);
})();
