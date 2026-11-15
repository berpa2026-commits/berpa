import { useState } from 'react'

export default function App() {
  const [pedido, setPedido] = useState('')
  const [enviado, setEnviado] = useState(false)

  const enviar = (e) => {
    e.preventDefault()
    if (!pedido.trim()) return
    setEnviado(true)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">BERPA</div>
        <a className="btn-whatsapp" href="https://wa.me/51999999999" target="_blank" rel="noreferrer">WhatsApp</a>
      </header>

      <main>
        <section className="hero">
          <p className="badge">Ica • Perú</p>
          <h1>Todo para tu negocio,<br />en un solo lugar.</h1>
          <p className="subtitle">Pide rápido por WhatsApp. Calidad, buen precio y atención al instante.</p>
          <div className="hero-btns">
            <a className="btn-primary" href="https://wa.me/51999999999" target="_blank" rel="noreferrer">Pedir ahora</a>
            <a className="btn-secondary" href="#pedido">Hacer pedido</a>
          </div>
        </section>

        <section className="cards">
          <div className="card"><h3>🚀 Rápido</h3><p>Respuesta inmediata y entrega coordinada.</p></div>
          <div className="card"><h3>💰 Buen precio</h3><p>Precios justos para emprendedores.</p></div>
          <div className="card"><h3>⭐ Calidad</h3><p>Productos seleccionados para tu negocio.</p></div>
        </section>

        <section id="pedido" className="pedido">
          <h2>Haz tu pedido</h2>
          <p>Escríbenos qué necesitas y te cotizamos al instante.</p>
          {enviado ? (
            <div className="ok">✅ ¡Listo! Copia tu pedido y mándalo por WhatsApp 👇<br /><br /><b>{pedido}</b><br /><br /><a className="btn-primary" href={`https://wa.me/51999999999?text=${encodeURIComponent('Hola BERPA, quiero pedir: ' + pedido)}`} target="_blank" rel="noreferrer">Enviar por WhatsApp</a></div>
          ) : (
            <form onSubmit={enviar}>
              <textarea value={pedido} onChange={(e) => setPedido(e.target.value)} placeholder="Ej: Quiero 10 unidades de..." rows="4" />
              <button className="btn-primary" type="submit">Generar pedido</button>
            </form>
          )}
        </section>
      </main>

      <footer>© 2026 BERPA - Ica, Perú</footer>
    </div>
  )
}
