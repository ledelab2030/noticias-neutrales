// app/g3d/page.tsx
"use client";

export default function G3DClient() {
  return (
    <main>
      {/* HEADER */}
      <header>
        <div className="container nav">
          <a className="logo" aria-label="G3D Home" href="#top">
            <span className="logo-mark" />
            <span>
              G3D<span style={{ opacity: 0.8 }}>.co</span>
            </span>
          </a>
          <nav className="links">
            <a href="#servicios">Servicios</a>
            <a href="#galeria">Galería</a>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Renderización • Modelado 3D • Arquitectura</span>
            <h1 className="title">
              Imaginación y detalle en{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,var(--brand),var(--brand-2))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                tres dimensiones
              </span>
            </h1>
            <p className="subtitle">
              Visualizo tus ideas para que se conviertan en espacios reales. Renders interiores y exteriores,
              modelado desde planos, y recorridos virtuales para presentar proyectos con claridad y emoción.
            </p>
            <div className="cta">
              <a className="btn brand" href="#contacto">Solicitar cotización</a>
              <a className="btn ghost" href="#servicios">Ver servicios</a>
            </div>
          </div>
          <div className="glass card">
            <img
              src="/g3d/fachada-principal.jpg"
              alt="Render exterior: fachada principal de vivienda"
              width={1280}
              height={720}
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <div className="container">
          <h2>Servicios</h2>
          <p className="muted" style={{ marginBottom: 18 }}>Soluciones para visualizar antes de construir.</p>
          <div className="grid cols-3">
            <div className="card service"><h3>Visualización arquitectónica</h3><p>Renders interiores y exteriores con iluminación y materiales realistas.</p></div>
            <div className="card service"><h3>Modelado 3D desde planos</h3><p>Transformación de planos 2D o bocetos en modelos 3D precisos.</p></div>
            <div className="card service"><h3>Animaciones / Recorridos</h3><p>Clips con movimiento de cámara para mostrar el espacio con narrativa.</p></div>
            <div className="card service"><h3>Postproducción</h3><p>Corrección de color, vegetación y efectos para mayor realismo.</p></div>
            <div className="card service"><h3>Asesoría 1:1</h3><p>Acompañamiento para arquitectos y decoradores que deseen mejorar sus renders.</p></div>
            <div className="card service"><h3>Paquetes por proyecto</h3><p>Básico (1–2 vistas), estándar (3–5 vistas) y premium (6+ vistas y clip).</p></div>
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>Galería</h2>
          <div className="gallery">
            <div className="tile span-6">
              <img src="/g3d/sala.png" alt="Render interior: sala" width={1200} height={800} loading="lazy" decoding="async" />
              <span className="caption">Interiores — Sala</span>
            </div>
            <div className="tile span-6">
              <img src="/g3d/fachada-principal.jpg" alt="Render exterior: fachada principal" width={1280} height={720} loading="lazy" decoding="async" />
              <span className="caption">Exteriores — Fachada</span>
            </div>
            <div className="tile span-4">
              <img src="/g3d/cocina.jpg" alt="Render interior: cocina" width={1200} height={800} loading="lazy" decoding="async" />
              <span className="caption">Cocina</span>
            </div>
            <div className="tile span-4">
              <img src="/g3d/dormitorio-principal.jpg" alt="Render interior: dormitorio principal" width={1200} height={800} loading="lazy" decoding="async" />
              <span className="caption">Dormitorio</span>
            </div>
            <div className="tile span-4">
              <img src="/g3d/paisajismo.png" alt="Render exterior: paisajismo" width={1200} height={800} loading="lazy" decoding="async" />
              <span className="caption">Paisajismo</span>
            </div>
            <div className="tile span-8">
              <video src="/g3d/video-ecopanel-3c.mp4" controls muted loop preload="metadata" />
              <span className="caption">Recorrido — EcoPanel 3C</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="section">
        <div className="container about">
          <div className="portrait">
            <img src="/g3d/foto-guillermo.png" alt="Retrato de Guillermo De la Hoz" width={640} height={640} loading="lazy" decoding="async" />
          </div>
          <div>
            <h2>Sobre mí</h2>
            <p className="muted">
              Soy <strong>Guillermo De la Hoz</strong>, arquitecto (prom. 1977).
              Tras décadas entre docencia y obra, redescubrí en la visualización 3D una forma de unir experiencia y creatividad digital.
              Desde Barranquilla, me enfoco en ayudar a profesionales y empresas a <em>visualizar antes de construir</em>.
            </p>
            <div className="kpis">
              <div className="kpi">SketchUp • Lumion • V-Ray</div>
              <div className="kpi">Renders fotorrealistas</div>
              <div className="kpi">Acompañamiento cercano</div>
            </div>
            <p className="muted" style={{ marginTop: 10 }}>
              Colaboración con <strong>LedeLab Group OÜ</strong> para integrar visualización 3D en proyectos educativos, de arquitectura y sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section" style={{ paddingTop: 0 }}>
        <div className="container grid cols-2">
          <div className="card">
            <h2>¿Hablamos de tu proyecto?</h2>
            <p className="muted">Cuéntame el tipo de espacio, número de vistas y plazo ideal. Te propongo el paquete que mejor se ajuste.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a className="btn brand" href="mailto:contacto@g3d.co">Escríbeme por correo</a>
              <a className="btn ghost" href="https://wa.me/573028496859" target="_blank" rel="noopener">WhatsApp</a>
            </div>
          </div>
          <div className="card">
            <h3>Ubicación</h3>
            <p className="muted">Barranquilla, Colombia — atención a todo el Caribe y proyectos remotos.</p>
            <div className="glass" style={{ height: 180, borderRadius: 14, display: "grid", placeItems: "center", color: "#cfcfcf", border: "1px dashed #2a2a2a" }}>
              Mapa / referencia (opcional)
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, justifyContent: "space-between" }}>
          <div>© {new Date().getFullYear()} G3D.co — Guillermo De la Hoz</div>
          <div className="muted">Sitio de prueba bajo ledeLab.co • Diseño & desarrollo: LedeLab + G3D</div>
        </div>
      </footer>

      {/* ESTILOS GLOBALES PARA ESTA PÁGINA */}
      <style jsx global>{`
        :root{--bg:#0b0b0b;--bg-soft:#111;--text:#f5f5f5;--muted:#bdbdbd;--brand:#00d1b2;--brand-2:#58a6ff;--card:#151515;--stroke:#222;}
        *{box-sizing:border-box}
        html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;}
        a{color:inherit;text-decoration:none}
        img,video{max-width:100%;display:block}
        .container{max-width:1100px;margin:0 auto;padding:0 20px}
        .btn{display:inline-block;padding:12px 18px;border-radius:12px;border:1px solid var(--stroke);background:linear-gradient(180deg,#1a1a1a,#111);color:#fff;font-weight:600;transition:transform .15s ease,box-shadow .15s ease,border-color .2s ease}
        .btn:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(0,0,0,.35);border-color:#333}
        .btn.brand{background:linear-gradient(180deg,var(--brand),#0fb)}
        .btn.ghost{background:transparent}
        header{position:sticky;top:0;z-index:50;background:rgba(11,11,11,.7);backdrop-filter:blur(8px);border-bottom:1px solid var(--stroke)}
        .nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
        .logo{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.5px}
        .logo-mark{width:28px;height:28px;border-radius:8px;background:conic-gradient(from 200deg at 50% 50%, var(--brand), var(--brand-2));box-shadow:0 0 0 2px #0d0d0d}
        .nav a{color:var(--muted)}
        .links{display:flex;gap:18px}
        .hero{padding:64px 0 32px;border-bottom:1px solid var(--stroke);background:radial-gradient(1200px 400px at 50% -10%, rgba(0,209,178,.12), transparent 60%)}
        .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;align-items:center}
        .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 10px;border-radius:999px;border:1px solid #1f1f1f;background:#121212;color:var(--muted);font-size:12px}
        .title{font-size:clamp(32px,6vw,56px);line-height:1.05;margin:12px 0}
        .subtitle{color:var(--muted);font-size:clamp(16px,2.2vw,18px)}
        .cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
        .glass{border:1px solid var(--stroke);background:linear-gradient(180deg,#131313,#0e0e0e);border-radius:20px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.02)}
        .card{padding:22px;border-radius:18px;background:var(--card);border:1px solid var(--stroke)}
        .section{padding:64px 0}
        .section h2{font-size:28px;margin:0 0 6px}
        .muted{color:var(--muted)}
        .grid{display:grid;gap:18px}
        .grid.cols-3{grid-template-columns:repeat(3,1fr)}
        .grid.cols-2{grid-template-columns:repeat(2,1fr)}
        .gallery{display:grid;grid-template-columns:repeat(12,1fr);gap:10px}
        .tile{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--stroke);min-height:160px;background:#0e0e0e}
        .tile:before{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.06),transparent 30%)}
        .tile .caption{position:absolute;left:10px;bottom:10px;font-size:12px;color:#cfcfcf;background:rgba(0,0,0,.35);padding:6px 8px;border-radius:10px;border:1px solid rgba(255,255,255,.08);z-index:5}
        .tile.span-6{grid-column:span 6}.tile.span-4{grid-column:span 4}.tile.span-8{grid-column:span 8}
        .about{display:grid;grid-template-columns:1fr 1.2fr;gap:24px;align-items:center}
        .portrait img{border-radius:16px;max-width:100%;border:1px solid var(--stroke)}
        .kpis{display:flex;gap:10px;flex-wrap:wrap}
        .kpi{padding:14px 16px;border-radius:14px;background:#101010;border:1px solid var(--stroke)}
        footer{border-top:1px solid var(--stroke);padding:28px 0;color:#b9b9b9}
        @media (max-width:980px){.hero-grid{grid-template-columns:1fr}.grid.cols-3{grid-template-columns:1fr 1fr}.grid.cols-2{grid-template-columns:1fr}.about{grid-template-columns:1fr}}
        /* Encaje medios */
        .tile img,.tile video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:14px}
      `}</style>
    </main>
  );
}
