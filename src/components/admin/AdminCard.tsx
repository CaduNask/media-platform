type AdminCardProps = {
    title: string;
    value: string | number;
    description?: string;
  };
  
  export function AdminCard({
    title,
    value,
    description,
  }: AdminCardProps) {
    return (
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: 20,
          background: "#fff",
        }}
      >
        <p style={{ fontSize: 14, color: "#6b7280", margin: 0 }}>
          {title}
        </p>
  
        <h2 style={{ margin: "8px 0", fontSize: 32 }}>
          {value}
        </h2>
  
        {description && (
          <small style={{ color: "#9ca3af" }}>
            {description}
          </small>
        )}
      </div>
    );
  }