/* ============================================================
   Utilidades compartidas · Centro de Estudio CLF-C02
   Sin dependencias. Todo se guarda en localStorage del navegador.
   ============================================================ */
const CLF = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  },
  del(key) {
    try { localStorage.removeItem(key); } catch (e) {}
  },

  /* Cuenta atrás de la fecha de examen */
  initCountdown() {
    const input = document.querySelector('[data-countdown-input]');
    const out = document.querySelector('[data-countdown-output]');
    if (!input || !out) return;

    const saved = this.get('clf-exam-date', '');
    if (saved) input.value = saved;

    const render = () => {
      if (!input.value) {
        out.textContent = 'Elige tu fecha de examen';
        return;
      }
      const target = new Date(input.value + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const days = Math.round((target - today) / 86400000);
      if (days > 0) out.textContent = 'Faltan ' + days + ' días';
      else if (days === 0) out.textContent = 'Es hoy';
      else out.textContent = 'Fecha pasada por ' + Math.abs(days) + ' días';
    };

    input.addEventListener('change', () => {
      this.set('clf-exam-date', input.value);
      render();
    });
    render();
  },

  /* Checklist de la ruta de 14 bloques */
  initChecklist() {
    const boxes = Array.from(document.querySelectorAll('[data-check]'));
    if (!boxes.length) return;
    const ring = document.querySelector('[data-ring]');
    const label = document.querySelector('[data-ring-label]');
    let saved = this.get('clf-progress', {});
    if (typeof saved !== 'object' || Array.isArray(saved) || !saved) saved = {};

    const update = () => {
      const done = boxes.filter(b => b.checked).length;
      const pct = Math.round((done / boxes.length) * 100);
      if (ring) ring.style.setProperty('--p', pct);
      if (label) label.innerHTML = '<b>' + done + '/' + boxes.length + '</b><small>' + pct + '%</small>';
    };

    const owned = new Set(boxes.map(box => box.dataset.check));

    boxes.forEach(box => {
      box.checked = !!saved[box.dataset.check];
      const wrap = box.closest('.check');
      if (wrap) wrap.classList.toggle('checked', box.checked);
      box.addEventListener('change', () => {
        saved[box.dataset.check] = box.checked;
        this.set('clf-progress', saved);
        if (wrap) wrap.classList.toggle('checked', box.checked);
        update();
      });
    });

    const reset = document.querySelector('[data-reset-progress]');
    if (reset) {
      reset.addEventListener('click', () => {
        if (!confirm('¿Reiniciar el progreso de la ruta de estudio?')) return;
        boxes.forEach(box => {
          box.checked = false;
          const wrap = box.closest('.check');
          if (wrap) wrap.classList.remove('checked');
        });
        owned.forEach(key => { delete saved[key]; });
        this.set('clf-progress', saved);
        update();
      });
    }
    update();
  },

  /* Marca el enlace activo de la barra superior */
  initNav() {
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.navlinks a').forEach(a => {
      const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
      if (href && href === here) a.classList.add('active');
    });
  },

  /* Barajado Fisher-Yates */
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /* Formatea segundos como mm:ss o hh:mm:ss */
  clock(total) {
    total = Math.max(0, Math.round(total));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    const pad = n => String(n).padStart(2, '0');
    return h > 0 ? h + ':' + pad(m) + ':' + pad(s) : pad(m) + ':' + pad(s);
  }
};

/* ============================================================
   Ruta de 14 bloques de contenido puro · fuente única
   Las diapositivas s1–s5 forman la Guía y formato del examen (intro).
   ============================================================ */
CLF.BLOCKS = [
  {n:1, title:'Fundamentos de la nube y AWS', short:'Qué es la nube, 6 ventajas, modelos, economía, conceptos clave y acceso a AWS.',
   start:'s55', end:'s62', count:8, flash:['Fundamentos'], flashLabel:'Fundamentos',
   repaso:'fundamentos', repasoLabel:'fundamentos', slidesLabel:'Nube, ventajas, modelos, economía y acceso'},
  {n:2, title:'Responsabilidad compartida (SRM)', short:'Frontera AWS vs cliente y cómo cambia en EC2, RDS, S3, Lambda e IAM.',
   start:'s6', end:'s8', count:3, flash:['SRM'], flashLabel:'SRM',
   repaso:'srm', repasoLabel:'SRM', slidesLabel:'Frontera, casos por servicio y trampas'},
  {n:3, title:'Identidad y acceso (IAM)', short:'Usuarios, grupos, roles, políticas, Identity Center, Cognito y auditoría IAM.',
   start:'s9', end:'s63', count:5, flash:['IAM'], flashLabel:'IAM',
   repaso:'iam', repasoLabel:'IAM', slidesLabel:'Piezas, evaluación, decisiones y auditoría'},
  {n:4, title:'Detección, red y cifrado', short:'GuardDuty, Inspector, Macie, Shield, WAF, KMS, CloudHSM, ACM y Artifact.',
   start:'s13', end:'s17', count:5, flash:['Seguridad'], flashLabel:'Seguridad',
   repaso:'seguridad', repasoLabel:'seguridad', slidesLabel:'Detección, protección de red, cifrado y cumplimiento'},
  {n:5, title:'Servicios núcleo y Amazon EC2', short:'Mapa de servicios, anatomía de EC2, familias de instancias y modelos de compra.',
   start:'s18', end:'s20', count:3, flash:['EC2'], flashLabel:'EC2 y compra',
   repaso:'computo', repasoLabel:'cómputo y EC2', slidesLabel:'Mapa núcleo, familias EC2 y modelos de compra'},
  {n:6, title:'Almacenamiento', short:'S3, clases de almacenamiento, ciclo de vida, EBS, EFS, FSx y migración de datos.',
   start:'s21', end:'s24', count:4, flash:['Almacenamiento'], flashLabel:'Almacenamiento',
   repaso:'almacenamiento', repasoLabel:'almacenamiento', slidesLabel:'S3, clases, protección, EBS, EFS y FSx'},
  {n:7, title:'Bases de datos', short:'RDS, Aurora, Multi-AZ vs Read Replica, ElastiCache, DynamoDB, DAX y Redshift.',
   start:'s25', end:'s26', count:3, flash:['Bases de datos'], flashLabel:'Bases de datos',
   repaso:'bases', repasoLabel:'bases de datos', slidesLabel:'RDS, Aurora, disponibilidad, caché y NoSQL', milestone:true},
  {n:8, title:'Redes y VPC', short:'VPC, subredes públicas y privadas, IGW, NAT, balanceadores ELB, SG y NACL.',
   start:'s27', end:'s28', count:3, flash:['Redes y VPC'], flashLabel:'Redes y VPC',
   repaso:'redes', repasoLabel:'redes y VPC', slidesLabel:'VPC, conectividad, balanceadores y firewalls'},
  {n:9, title:'DNS, entrega global y red híbrida', short:'Route 53, políticas de enrutamiento, CloudFront, Global Accelerator, VPN y Direct Connect.',
   start:'s29', end:'s66', count:3, flash:['DNS y Global'], flashLabel:'DNS y entrega global',
   repaso:'redes', repasoLabel:'DNS y entrega', slidesLabel:'Route 53, CloudFront, Global Accelerator, VPN y DX'},
  {n:10, title:'Cómputo serverless, contenedores y CI/CD', short:'Lambda, ECS, EKS, Fargate, Beanstalk, Batch, Lightsail, herramientas CI/CD y decisión.',
   start:'s31', end:'s32', count:3, flash:['Serverless y Contenedores'], flashLabel:'Serverless y contenedores',
   repaso:'computo', repasoLabel:'serverless y contenedores', slidesLabel:'Lambda, contenedores, PaaS, CI/CD y decisión'},
  {n:11, title:'Regiones y alta disponibilidad', short:'Regiones, AZ, ubicaciones de borde, Outposts, Local Zones y diseño HA vs DR.',
   start:'s33', end:'s34', count:2, flash:['Infraestructura Global'], flashLabel:'Infraestructura global',
   repaso:'global', repasoLabel:'infraestructura global', slidesLabel:'Regiones, AZ, borde y resiliencia HA/DR'},
  {n:12, title:'Monitoreo, gobernanza, analítica, IA y adicionales', short:'CloudWatch, CloudTrail, Config, Organizations, IaC, Analítica, IA/ML y servicios adicionales CLF-C02.',
   start:'s35', end:'s69', count:8, flash:['Monitoreo y Gobernanza','IA y Analítica'], flashLabel:'Monitoreo, IA y adicionales',
   repaso:'monitoreo', repasoLabel:'monitoreo, IA y adicionales', slidesLabel:'Observabilidad, gobernanza, IaC, IA, analítica y servicios adicionales'},
  {n:13, title:'Well-Architected, CAF y migración', short:'Los 6 pilares de Well-Architected, fases y perspectivas del CAF, las 7 R y herramientas.',
   start:'s39', end:'s42', count:4, flash:['Marcos y Migración'], flashLabel:'Marcos y migración',
   repaso:'caf', repasoLabel:'CAF y migración', slidesLabel:'Well-Architected, CAF, 7 R y herramientas'},
  {n:14, title:'Costos, soporte y cierre', short:'Principios de precios, Free Tier, herramientas de costo, TCO, planes de soporte y trampas.',
   start:'s43', end:'s54', count:10, flash:['Costos','Soporte','Trampas'], flashLabel:'Costos y soporte',
   repaso:'costos', repasoLabel:'costos y soporte', slidesLabel:'Precios, Free Tier, herramientas, soporte y cierre'}
];

CLF.blockFor = function (n) {
  return this.BLOCKS.find(b => b.n === n) || null;
};

/* Dominio principal del banco para cada bloque en el mini simulacro */
CLF.MINI_DOMAIN = {
  1:'Conceptos', 2:'Seguridad', 3:'Seguridad', 4:'Seguridad',
  5:'Tecnología', 6:'Tecnología', 7:'Tecnología', 8:'Tecnología',
  9:'Tecnología', 10:'Tecnología', 11:'Conceptos', 12:'Tecnología',
  13:'Conceptos', 14:'Costos'
};
CLF.miniDomain = function (block) {
  return this.MINI_DOMAIN[block.n] || 'Conceptos';
};
CLF.miniHref = function (block) {
  return 'examen.html?bloque=' + block.n;
};
CLF.flashHref = function (block) {
  return 'flashcards.html?bloque=' + block.n + '&temas=' + encodeURIComponent(block.flash.join(','));
};
CLF.repasoHref = function (block) {
  return 'repaso.html#' + block.repaso;
};
CLF.blockForSlide = function (slides, index) {
  for (const b of this.BLOCKS) {
    const start = slides.findIndex(s => s.id === b.start);
    const end = slides.findIndex(s => s.id === b.end);
    if (start !== -1 && end !== -1 && index >= start && index <= end) return b;
  }
  return null;
};

document.addEventListener('DOMContentLoaded', () => {
  CLF.initNav();
  CLF.initCountdown();
  CLF.initChecklist();
});
