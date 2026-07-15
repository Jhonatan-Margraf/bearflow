"use client";

// Prévia da Ordem de Serviço no estilo do relatório de impressão (relatorios/ordem_html.py).
export default function OSPreview({ ordem, onFechar }) {
  const MIN_ROWS = 9;
  const linhas = [...(ordem.linhas || [])];
  const validas = linhas.filter((l) => l.qtd || l.desc || l.unit || l.tot);
  while (validas.length < MIN_ROWS) validas.push({ qtd: "", desc: "", unit: "", tot: "" });

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal grande" onClick={(e) => e.stopPropagation()}>
        <div className="modal-cab no-print">📄 Ordem de Serviço</div>

        <div style={{ padding: 20 }}>
          <div className="os-print">
            <div className="cabecalho">
              <div className="logo">
                <div className="icone">🔧</div>
                <div className="nome">MECÂNICA SP</div>
              </div>
              <div className="contato">
                <div className="servicos">
                  Motor, suspensão, freio, injeção eletrônica, mecânica em geral
                </div>
                <div>📞 (45) 99915-4797</div>
                <div>✉ mecanicasp7@gmail.com</div>
                <div>📍 Rua Tereza Barbieri - 320, Alto Panorama - Toledo/PR</div>
              </div>
            </div>

            <div className="titulo-os">Ordem de Serviço</div>

            <div className="campos">
              <div className="linha">
                <span className="lbl">Veículo:</span>
                <span className="val">{ordem.veiculo}</span>
                <span className="lbl">Ano:</span>
                <span className="val">{ordem.ano}</span>
              </div>
              <div className="linha">
                <span className="lbl">Placa:</span>
                <span className="val">{ordem.placa}</span>
                <span className="lbl">Data:</span>
                <span className="val">{ordem.data}</span>
              </div>
              <div className="linha">
                <span className="lbl">Cliente:</span>
                <span className="val">{ordem.cliente}</span>
                <span className="lbl">Fone:</span>
                <span className="val">{ordem.fone}</span>
              </div>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Quant.</th>
                  <th>Descrição</th>
                  <th>P. Unitário</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {validas.map((l, i) => (
                  <tr key={i}>
                    <td>{l.qtd}</td>
                    <td className="desc">{l.desc}</td>
                    <td>{l.unit}</td>
                    <td>{l.tot}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="rodape-total">
              <span>TOTAL</span>
              <span>R$ {Number(ordem.total).toFixed(2)}</span>
            </div>

            <div className="aviso">
              <strong>ORÇAMENTO SUJEITO À ALTERAÇÃO DE VALORES</strong>
              <br />
              Pode haver acréscimo de peças ou mão de obra, se necessário ou em caso de
              defeito oculto no veículo.
            </div>
          </div>
        </div>

        <div className="modal-acoes no-print">
          <button className="btn btn-cinza" onClick={onFechar}>
            Fechar
          </button>
          <button className="btn btn-verde" onClick={() => window.print()}>
            🖨️ Imprimir
          </button>
        </div>
      </div>
    </div>
  );
}
