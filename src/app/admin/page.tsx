export default function AdminPage() {
    return (
      <main style={{ padding: "48px", fontFamily: "Arial, sans-serif" }}>
        <h1>OWE Media Admin</h1>
  
        <p>Painel administrativo da plataforma editorial da OWE.</p>
  
        <section style={{ marginTop: "32px" }}>
          <h2>Dashboard</h2>
  
          <ul>
            <li>Artigos: 0</li>
            <li>Categorias: 0</li>
            <li>Tags: 0</li>
            <li>Autores: 0</li>
          </ul>
        </section>
  
        <button style={{ marginTop: "24px", padding: "12px 20px" }}>
          Novo Artigo
        </button>
      </main>
    );
  }