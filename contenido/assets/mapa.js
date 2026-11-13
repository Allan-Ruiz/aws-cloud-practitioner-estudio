/* ============================================================
   Mapa de servicios AWS · lógica de navegación y fichas
   Sin dependencias. Estado en la URL (#/categoria/sub/servicio).
   ============================================================ */
(function () {
  const DATA = window.MAPA_SERVICIOS || {blocks: [], categories: {}, services: {}};
  const view = document.getElementById('mapView');
  const breadcrumb = document.getElementById('mapBreadcrumb');
  const back = document.getElementById('mapBack');
  const search = document.getElementById('mapSearch');
  const clearSearch = document.getElementById('mapSearchClear');
  const focusSearch = document.getElementById('mapSearchFocus');
  if (!view) return;

  let query = '';

  function esc(value) {
    return String(value == null ? '' : value).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  }

  function normalize(value) {
    return String(value == null ? '' : value)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }

  function serviceEntries(catId, subId) {
    return Object.entries(DATA.services).filter(([, s]) =>
      s.cat === catId && (!subId || s.sub === subId)
    );
  }

  function categoryOf(id) {
    return DATA.categories[id] || null;
  }

  function subOf(cat, id) {
    return (cat.subcategories || []).find(s => s.id === id) || null;
  }

  function currentRoute() {
    const raw = location.hash.replace(/^#\/?/, '');
    const parts = raw.split('/').filter(Boolean).map(p => {
      try { return decodeURIComponent(p); } catch (e) { return p; }
    });
    return {cat: parts[0] || null, sub: parts[1] || null, svc: parts[2] || null};
  }

  function navigate(path) {
    query = '';
    if (search) search.value = '';
    updateSearchClear();
    const target = '#/' + String(path || '').replace(/^\/+/, '');
    if (location.hash === target) render();
    else location.hash = target;
  }

  function updateSearchClear() {
    if (clearSearch) clearSearch.hidden = !query;
  }

  function goBack() {
    if (query) {
      query = '';
      if (search) search.value = '';
      updateSearchClear();
      render();
      return;
    }
    const r = currentRoute();
    if (r.svc) navigate(r.cat + '/' + r.sub);
    else if (r.sub) navigate(r.cat);
    else if (r.cat) navigate('');
    else navigate('');
  }

  function crumbButton(label, path) {
    return '<button type="button" data-nav="' + esc(path) + '">' + esc(label) + '</button>';
  }

  function renderBreadcrumb(parts) {
    if (!breadcrumb) return;
    const items = [];
    items.push(crumbButton('Mapa', ''));
    parts.forEach((p, i) => {
      if (i === parts.length - 1) items.push('<span>' + esc(p.label) + '</span>');
      else items.push(crumbButton(p.label, p.path));
    });
    breadcrumb.innerHTML = items.join('<span>/</span>');
  }

  function serviceCount(catId, subId) {
    return serviceEntries(catId, subId).length;
  }

  function scopeMeta(s) {
    if (s.type === 'plan') return {cls: ' plan', label: 'Plan de soporte'};
    if (s.type === 'combo') return {cls: ' plan', label: 'Combo de examen'};
    if (s.type === 'framework') return {cls: ' plan', label: 'Marco'};
    if (s.type === 'concept') return {cls: ' comp', label: 'Concepto'};
    return {cls: s.scope === 'CLF-C02' ? '' : ' comp', label: s.scope || 'Servicio'};
  }

  function categoryCountLabel(cat) {
    if (cat.status === 'ready') {
      if (cat.readyLabel) return cat.readyLabel;
      const n = serviceCount(cat.id);
      return n + (n === 1 ? ' ficha' : ' fichas');
    }
    if (cat.countLabel) return cat.countLabel;
    const n = cat.officialCount || 0;
    return n + (n === 1 ? ' servicio oficial' : ' servicios oficiales');
  }

  function renderHome() {
    const blocks = DATA.blocks.map((b, i) => {
      const cats = b.categories.map(id => {
        const cat = categoryOf(id);
        if (!cat) return '';
        const ready = cat.status === 'ready';
        return '<button type="button" class="cat-card ' + (ready ? 'ready' : 'soon') + '" data-nav="' + esc(cat.id) + '">' +
          '<div class="cat-top"><h3>' + esc(cat.title) + '</h3>' + (ready ? '' : '<span class="cat-badge soon">En preparación</span>') + '</div>' +
          '<p>' + esc(cat.desc) + '</p>' +
          '<span class="cat-count">' + esc(categoryCountLabel(cat)) + '</span>' +
        '</button>';
      }).join('');
      return '<section class="map-block">' +
        '<div class="map-block-head">' +
          '<div class="map-block-icon">' + String(i + 1).padStart(2, '0') + '</div>' +
          '<div><h2>' + esc(b.title) + '</h2><p>' + esc(b.desc) + '</p></div>' +
        '</div>' +
        '<div class="cat-grid">' + cats + '</div>' +
      '</section>';
    }).join('');

    renderBreadcrumb([]);
    back.hidden = true;
    view.innerHTML =
      '<div class="map-section-title">' +
        '<div><span class="eyebrow sky">Mapa interactivo</span><h2>Explora por categoría</h2>' +
        '<p>Las 21 categorías ya tienen fichas. Empieza por una categoría o por los Combos de examen, y usa el buscador si ya sabes qué servicio necesitas.</p></div>' +
      '</div>' +
      '<div class="map-blocks">' + blocks + '</div>';
  }

  function textMatches(text, terms) {
    const tokens = normalize(text).split(/[^a-z0-9]+/).filter(Boolean);
    return terms.every(term =>
      term.length <= 3
        ? tokens.includes(term)
        : tokens.some(token => token.startsWith(term))
    );
  }

  function renderSearch() {
    const terms = normalize(query.trim()).split(/[^a-z0-9]+/).filter(Boolean);
    const results = Object.entries(DATA.services).map(([, s]) => {
      const cat = categoryOf(s.cat);
      const sub = cat ? subOf(cat, s.sub) : null;
      const fullText = [
        s.name, s.tagline, s.keyword, s.what, s.when, s.scopeNote,
        cat && cat.title, sub && sub.title,
        (s.not || []).join(' '),
        (s.confuse || []).map(c => c.name + ' ' + c.why).join(' '),
        (s.connections || []).join(' ')
      ].join(' ');
      const score = textMatches(s.name, terms)
        ? 0
        : textMatches((s.tagline || '') + ' ' + (s.keyword || ''), terms)
          ? 1
          : textMatches(((cat && cat.title) || '') + ' ' + ((sub && sub.title) || ''), terms)
            ? 2
            : 3;
      return {s, cat, sub, score, match: textMatches(fullText, terms)};
    }).filter(r => r.match).sort((a, b) =>
      a.score - b.score || a.s.name.localeCompare(b.s.name, 'es')
    );

    renderBreadcrumb([{label: 'Búsqueda', path: ''}]);
    back.hidden = false;
    if (!results.length) {
      view.innerHTML =
        '<div class="map-section-title"><div><span class="eyebrow sky">Búsqueda</span><h2>Sin resultados para “' + esc(query.trim()) + '”</h2>' +
        '<p>Prueba con un nombre de servicio, una palabra clave o una categoría. También puedes recorrer las 21 categorías desde el mapa.</p></div></div>' +
        '<div class="search-empty">También puedes volver al mapa y explorar por categoría.</div>';
      return;
    }

    view.innerHTML =
      '<div class="map-section-title"><div><span class="eyebrow sky">Búsqueda</span><h2>' + results.length + ' resultado' + (results.length === 1 ? '' : 's') + '</h2>' +
      '<p>Resultados por nombre, palabra clave, “qué no hace”, confusiones y conexiones.</p></div></div>' +
      '<div class="search-results">' + results.map(({s, cat, sub}) => {
        const path = s.cat + '/' + s.sub + '/' + Object.keys(DATA.services).find(id => DATA.services[id] === s);
        return '<button type="button" class="search-result" data-nav="' + esc(path) + '">' +
          '<h3>' + esc(s.name) + '</h3>' +
          '<p>' + esc(s.tagline || s.keyword || '') + '</p>' +
          '<div class="path">' + esc(cat ? cat.title : '') + (sub ? ' · ' + esc(sub.title) : '') + '</div>' +
        '</button>';
      }).join('') + '</div>';
  }

  function renderCategory(cat) {
    if (cat.status !== 'ready') {
      renderBreadcrumb([{label: cat.title, path: cat.id}]);
      back.hidden = false;
      view.innerHTML =
        '<div class="map-category-head"><span class="eyebrow orange">Categoría</span><h1>' + esc(cat.title) + '</h1><p>' + esc(cat.desc) + '</p></div>' +
        '<div class="map-soon"><span class="tag">En preparación</span><h2>Esta categoría se construye en la siguiente fase</h2>' +
        '<p>' + esc(cat.soon || 'Estamos preparando las fichas de esta categoría.') + '</p>' +
        '<p class="small muted">Servicios oficiales previstos: ' + esc(cat.officialCount || 0) + '.</p>' +
        '<button type="button" class="btn btn-primary btn-sm" data-nav="">Volver al mapa</button></div>';
      return;
    }

    const subCards = (cat.subcategories || []).map(sub => {
      const n = serviceCount(cat.id, sub.id);
      return '<button type="button" class="sub-card" data-nav="' + esc(cat.id + '/' + sub.id) + '">' +
        '<h3>' + esc(sub.title) + '<span>' + n + ' ficha' + (n === 1 ? '' : 's') + '</span></h3>' +
        '<p>' + esc(sub.desc) + '</p>' +
        '<p class="when"><strong>Cuándo:</strong> ' + esc(sub.when) + '</p>' +
      '</button>';
    }).join('');

    let decision = '';
    if (cat.decision) {
      const d = cat.decision;
      decision = '<div class="map-decision">' +
        '<div class="decision-card sql"><h3>' + esc(d.sql.title) + '</h3><p class="lead">' + esc(d.sql.lead) + '</p><ul>' +
          d.sql.points.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' +
          '<div class="services">' + esc(d.sql.services) + '</div></div>' +
        '<div class="decision-card nosql"><h3>' + esc(d.nosql.title) + '</h3><p class="lead">' + esc(d.nosql.lead) + '</p><ul>' +
          d.nosql.points.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' +
          '<div class="services">' + esc(d.nosql.services) + '</div></div>' +
      '</div>' +
      (d.note ? '<div class="map-note"><b>Regla de examen:</b> ' + esc(d.note) + '</div>' : '');
    }

    renderBreadcrumb([{label: cat.title, path: cat.id}]);
    back.hidden = false;
    view.innerHTML =
      '<div class="map-category-head"><span class="eyebrow orange">Categoría · ' + esc(categoryCountLabel(cat)) + '</span>' +
      '<h1>' + esc(cat.title) + '</h1><p>' + esc(cat.intro || cat.desc) + '</p></div>' +
      decision +
      '<div class="map-section-title"><div><h2>Subcategorías</h2><p>Baja un nivel para ver los servicios y sus fichas.</p></div></div>' +
      '<div class="map-subgrid">' + subCards + '</div>';
  }

  function renderSubcategory(cat, sub) {
    const entries = serviceEntries(cat.id, sub.id);
    renderBreadcrumb([{label: cat.title, path: cat.id}, {label: sub.title, path: cat.id + '/' + sub.id}]);
    back.hidden = false;
    const cards = entries.map(([id, s]) => {
      const meta = scopeMeta(s);
      return '<button type="button" class="svc-card" data-nav="' + esc(cat.id + '/' + sub.id + '/' + id) + '">' +
        '<h3>' + esc(s.name) + '</h3>' +
        '<p>' + esc(s.tagline || '') + '</p>' +
        '<span class="svc-foot"><span class="scope' + meta.cls + '">' + esc(meta.label) + '</span><span class="small muted">Abrir ficha →</span></span>' +
      '</button>';
    }).join('');

    view.innerHTML =
      '<div class="map-category-head"><span class="eyebrow sky">' + esc(cat.title) + ' · ' + entries.length + ' ficha' + (entries.length === 1 ? '' : 's') + '</span>' +
      '<h1>' + esc(sub.title) + '</h1><p>' + esc(sub.desc) + ' <strong>Cuándo:</strong> ' + esc(sub.when) + '</p></div>' +
      '<div class="svc-grid">' + cards + '</div>';
  }

  function renderService(cat, sub, s, id) {
    const meta = scopeMeta(s);
    const scopeClass = meta.cls;
    const scopeLabel = meta.label;
    const slideLinks = (s.slides || []).map(sid => {
      const label = (DATA.slideTitles && DATA.slideTitles[sid]) || ('Diapositiva ' + sid);
      return '<a class="btn btn-outline btn-sm" href="estudio.html#' + esc(sid) + '" title="Abrir la diapositiva ' + esc(sid) + '">Estudiar · ' + esc(label) + '</a>';
    }).join('');
    const blockTitle = (DATA.blockTitles && DATA.blockTitles[s.block]) || ('Bloque ' + s.block);
    const flash = s.block
      ? '<a class="btn btn-primary btn-sm" href="flashcards.html?bloque=' + encodeURIComponent(s.block) + '" title="Abrir las flashcards del bloque ' + esc(s.block) + ': ' + esc(blockTitle) + '">Flashcards · ' + esc(blockTitle) + '</a>' +
        '<a class="btn btn-outline btn-sm" href="examen.html?bloque=' + encodeURIComponent(s.block) + '" title="Abrir el mini simulacro del bloque ' + esc(s.block) + ': ' + esc(blockTitle) + '">Mini simulacro · ' + esc(blockTitle) + '</a>'
      : '';

    const notList = (s.not || []).map(x => '<li>' + esc(x) + '</li>').join('');
    const confuseList = (s.confuse || []).map(c =>
      '<div class="confuse-item"><b>' + esc(c.name) + '</b><span>' + esc(c.why) + '</span></div>'
    ).join('');
    const connections = (s.connections || []).map(c =>
      '<button type="button" class="chip conn-chip" data-service="' + esc(id) + '" data-conn="' + esc(c) + '" aria-expanded="false">' + esc(c) + '</button>'
    ).join('');

    renderBreadcrumb([
      {label: cat.title, path: cat.id},
      {label: sub.title, path: cat.id + '/' + sub.id},
      {label: s.name, path: cat.id + '/' + sub.id + '/' + id}
    ]);
    back.hidden = false;

    view.innerHTML =
      '<article class="svc-detail">' +
        '<div class="svc-detail-head">' +
          '<div><span class="eyebrow orange">' + esc(cat.title) + ' · ' + esc(sub.title) + '</span>' +
          '<h1>' + esc(s.name) + '</h1><p>' + esc(s.tagline || '') + '</p>' +
          (s.scopeNote ? '<p class="small muted" style="margin-top:6px;max-width:760px">' + esc(s.scopeNote) + '</p>' : '') +
          '</div>' +
          '<span class="scope' + scopeClass + '">' + esc(scopeLabel) + '</span>' +
        '</div>' +
        '<div class="svc-detail-grid">' +
          '<div>' +
            '<div class="detail-box"><h3>Qué es</h3><p>' + esc(s.what) + '</p></div>' +
            '<div class="detail-box keyword-box" style="margin-top:12px"><h3>Palabra clave del examen</h3><p>' + esc(s.keyword) + '</p></div>' +
            '<div class="detail-box" style="margin-top:12px"><h3>Cuándo elegirlo</h3><p>' + esc(s.when) + '</p></div>' +
          '</div>' +
          '<div>' +
            '<div class="detail-box trap-box"><h3>Qué NO hace</h3><ul>' + notList + '</ul></div>' +
            '<div class="detail-box" style="margin-top:12px"><h3>No confundir con</h3><div class="confuse-list">' + confuseList + '</div></div>' +
            '<div class="detail-box" style="margin-top:12px"><h3>Conexiones</h3><div class="connection-chips">' + connections + '</div>' +
              '<div class="conn-detail" id="connDetail" hidden><b id="connDetailTitle"></b><p id="connDetailText"></p><button type="button" class="conn-close" id="connDetailClose">Cerrar</button></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="svc-links">' + slideLinks + flash + '<a class="btn btn-outline btn-sm" href="mapa.html#' + esc(cat.id) + '">Volver a ' + esc(cat.title) + '</a></div>' +
      '</article>';
  }

  function renderNotFound() {
    renderBreadcrumb([]);
    back.hidden = false;
    view.innerHTML = '<div class="map-soon"><h2>No encontramos esa ficha</h2><p>Puede que el enlace esté mal escrito o que la categoría aún no esté disponible.</p><button type="button" class="btn btn-primary btn-sm" data-nav="">Volver al mapa</button></div>';
  }

  function render(scrollToTop) {
    const route = currentRoute();
    if (query.trim()) {
      renderSearch();
      if (scrollToTop !== false) window.scrollTo({top: 0, behavior: 'auto'});
      return;
    }
    if (!route.cat) {
      renderHome();
    } else {
      const cat = categoryOf(route.cat);
      if (!cat) { renderNotFound(); }
      else if (route.svc) {
        const s = Object.entries(DATA.services).find(([id]) => id === route.svc);
        const sub = s ? subOf(cat, s[1].sub) : null;
        if (s && sub && s[1].cat === cat.id) renderService(cat, sub, s[1], s[0]);
        else renderNotFound();
      } else if (route.sub) {
        const sub = subOf(cat, route.sub);
        if (sub) renderSubcategory(cat, sub);
        else renderCategory(cat);
      } else {
        renderCategory(cat);
      }
    }
    if (scrollToTop !== false) window.scrollTo({top: 0, behavior: 'auto'});
  }

  function connectionTitle(service, label) {
    const serviceName = normalize(service.name);
    const connectionName = normalize(label);
    if (service.type === 'combo' || service.type === 'framework' || serviceName.includes(connectionName)) {
      return 'Conexión · ' + label;
    }
    return service.name + ' + ' + label;
  }

  function hideConnection() {
    const panel = document.getElementById('connDetail');
    if (panel) {
      panel.hidden = true;
      panel.dataset.conn = '';
    }
    document.querySelectorAll('.conn-chip').forEach(chip => chip.setAttribute('aria-expanded', 'false'));
  }

  view.addEventListener('click', e => {
    if (e.target.closest('#connDetailClose')) {
      hideConnection();
      return;
    }
    const chip = e.target.closest('.conn-chip');
    if (chip) {
      const service = DATA.services[chip.dataset.service];
      const label = chip.dataset.conn;
      const panel = document.getElementById('connDetail');
      const title = document.getElementById('connDetailTitle');
      const text = document.getElementById('connDetailText');
      if (!service || !panel || !title || !text) return;
      if (!panel.hidden && panel.dataset.conn === label) {
        hideConnection();
        return;
      }
      const detail = (service.connectionInfo && service.connectionInfo[label])
        || DATA.connectionNotes[label]
        || 'Se usa junto con ' + label + ' para completar la arquitectura. Abre su ficha si está disponible en este mapa.';
      title.textContent = connectionTitle(service, label);
      text.textContent = detail;
      panel.dataset.conn = label;
      panel.hidden = false;
      document.querySelectorAll('.conn-chip').forEach(c => c.setAttribute('aria-expanded', String(c === chip)));
      return;
    }
    const nav = e.target.closest('[data-nav]');
    if (!nav) return;
    navigate(nav.dataset.nav);
  });

  if (back) back.addEventListener('click', goBack);

  if (search) {
    search.addEventListener('input', () => {
      query = search.value || '';
      updateSearchClear();
      render(false);
    });
    search.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        query = '';
        search.value = '';
        updateSearchClear();
        render();
      }
    });
  }
  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      query = '';
      if (search) search.value = '';
      updateSearchClear();
      render();
      if (search) search.focus();
    });
  }
  if (focusSearch) {
    focusSearch.addEventListener('click', () => {
      if (search) search.focus();
      if (query.trim()) render();
    });
  }

  window.addEventListener('hashchange', () => {
    if (query) {
      query = '';
      if (search) search.value = '';
      updateSearchClear();
    }
    render();
  });
  render();
})();
