import { AdminCard } from "@/components/admin/AdminCard";

export default function AdminPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Painel administrativo da plataforma editorial da OWE.</p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 16,
          marginTop: 32,
        }}
      >
        <AdminCard title="Artigos" value={0} description="Conteúdos criados" />
        <AdminCard title="Categorias" value={0} description="Organização editorial" />
        <AdminCard title="Tags" value={0} description="SEO e classificação" />
        <AdminCard title="Autores" value={0} description="Perfis editoriais" />
      </section>
    </div>
  );
}