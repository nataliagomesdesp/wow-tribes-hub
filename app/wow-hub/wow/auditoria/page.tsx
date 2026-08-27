import AuditLog from '@/components/AuditLog'

export default function AuditoriaPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-wow-muted mb-2">WOW GENERAL</p>
        <h1 className="text-4xl font-bold text-wow-purple">📋 Controle de Alterações</h1>
        <p className="text-wow-muted mt-3 max-w-2xl">
          Histórico de todas as alterações feitas na plataforma WoW Hub. Os dados são sincronizados automaticamente do GitHub.
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-6">
        <h3 className="font-semibold text-wow-purple mb-3">📌 Como Funciona?</h3>
        <div className="space-y-2 text-sm text-wow-muted">
          <p>
            ✅ Toda vez que alguém faz um <strong>commit no GitHub</strong> da WoW General, a alteração aparece aqui automaticamente
          </p>
          <p>
            ✅ A tabela mostra: <strong>Quem alterou</strong>, <strong>Quando</strong>, e <strong>O que foi alterado</strong>
          </p>
          <p>
            ✅ Ordenado por data mais recente primeiro (decrescente)
          </p>
          <p>
            ✅ Clique no nome da alteração para ver o commit completo no GitHub
          </p>
        </div>
      </div>

      {/* Audit Log Table */}
      <AuditLog
        limit={50}
        title="Histórico de Alterações - WoW General"
      />

      {/* Statistics */}
      <div className="grid md:grid-cols-3 gap-6 border-t border-wow-line pt-8">
        <div className="bg-gradient-to-br from-wow-purple-100 to-wow-lilac-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Commits Registrados</p>
          <p className="text-3xl font-bold text-wow-purple">50+</p>
          <p className="text-xs text-wow-muted mt-2">últimas 50 alterações</p>
        </div>

        <div className="bg-gradient-to-br from-wow-lilac-100 to-wow-gold-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Frequência</p>
          <p className="text-3xl font-bold text-wow-purple">Contínua</p>
          <p className="text-xs text-wow-muted mt-2">sync automático GitHub</p>
        </div>

        <div className="bg-gradient-to-br from-wow-gold-100 to-wow-purple-100 rounded-lg p-6">
          <p className="text-sm text-wow-muted mb-1">Repositório</p>
          <a
            href="https://github.com/nataliagomesdesp/wow-tribes-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wow-purple font-bold hover:underline flex items-center gap-2"
          >
            GitHub
            <span>↗</span>
          </a>
          <p className="text-xs text-wow-muted mt-2">wow-tribes-hub</p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-wow-surface-soft border border-wow-line rounded-lg p-6 text-sm text-wow-muted">
        <p className="mb-2">
          <strong className="text-wow-purple">💡 Nota:</strong> Este log mostra apenas as alterações da plataforma WoW Hub.
        </p>
        <p>
          Para ver alterações das Tribos, acesse a seção de cada tribu. Para alterações de Produto, acesse Hub de Producto.
        </p>
      </div>
    </div>
  )
}
