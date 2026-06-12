import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "260px",
          padding: "32px 24px",
          borderRight: "1px solid #e5e7eb",
          background: "#f9fafb",
        }}
      >
        <strong>OWE Media</strong>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginTop: "32px",
          }}
        >
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/articles">Artigos</Link>
          <Link href="/admin/categories">Categorias</Link>
          <Link href="/admin/tags">Tags</Link>
          <Link href="/admin/authors">Autores</Link>
          <Link href="/admin/media">Mídia</Link>
          <Link href="/admin/settings">Configurações</Link>
        </nav>
      </aside>

      <div style={{ flex: 1 }}>
        <header
          style={{
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <span>Painel Editorial</span>
          <span>Admin</span>
        </header>

        <main style={{ padding: "32px" }}>{children}</main>
      </div>
    </div>
  );
}