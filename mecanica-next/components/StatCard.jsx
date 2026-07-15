export default function StatCard({ icone, label, valor, cor }) {
  return (
    <div className="stat-card" style={{ background: cor }}>
      <span className="icone">{icone}</span>
      <div>
        <div className="stat-label">{label}</div>
        <div className="stat-valor">{valor}</div>
      </div>
    </div>
  );
}
