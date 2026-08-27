# Skill: WoW Hub - Database Setup

## Descrição
Ativa o banco de dados Aurora PostgreSQL no Ownia e configura o GitHub Webhook para sincronização automática do audit log.

**Para quem:** Admin/Product Team (uma única vez, no início)

**Quando:** Depois que Ownia criar o app

## Como Usar

### Via Claude Code (Recomendado)
```
/wow-hub-db-setup
```

## O que Acontece (4 Passos)

### Passo 1️⃣: Criar Tabelas no Aurora
```bash
npm run db:push
```
- Cria tabela `AuditLog` no PostgreSQL
- Cria índices para queries rápidas
- Leva ~30 segundos

**Resultado:** ✅ Banco pronto

---

### Passo 2️⃣: Importar Histórico (Opcional)
```bash
npm run db:seed
```
- Puxa TODOS os commits do GitHub
- Salva na DB (50+ commits)
- Leva ~2-5 minutos

**Resultado:** ✅ Histórico completo no banco

---

### Passo 3️⃣: Configurar GitHub Webhook
A skill vai pedir confirmação:
```
Configurar webhook automático do GitHub? (S/N)
```

#### Se VOCÊ ESCOLHER: **SIM**
Skill vai:
1. Gerar secret aleatório
2. Mostrar passo a passo no GitHub:
   ```
   Settings → Webhooks → Add webhook
   
   Payload URL: 
   https://ownia.despegar.io/wow-tribes-hub/api/webhooks/github
   
   Content type: 
   application/json
   
   Secret: 
   [seu-secret-aqui]
   
   Events: 
   Just the push event ✓
   
   Active: 
   ✓ Checked
   ```
3. Salvar secret no Ownia como env var

**Resultado:** ✅ Webhook automático ativado

#### Se VOCÊ ESCOLHER: **NÃO**
- Configura depois manualmente
- Skill vai te deixar com instruções

---

### Passo 4️⃣: Validar Setup
```bash
curl https://ownia.despegar.io/wow-tribes-hub/api/audit-log
```
- Testa se API está respondendo
- Verifica se dados estão acessíveis

**Resultado:** ✅ Database ativo!

---

## Fluxo Completo

```
1. /wow-hub-db-setup
   ↓
2. npm run db:push
   ✅ Tabelas criadas
   ↓
3. npm run db:seed (importar histórico)
   ✅ 50+ commits no DB
   ↓
4. Configurar webhook
   ✅ Synced com GitHub
   ↓
5. Validar
   ✅ Tudo funcionando!

RESULTADO FINAL:
- Banco de dados Aurora PostgreSQL ativo
- Histórico completo de commits
- Webhook automático sincroniza GitHub → DB
- Audit log persiste na DB
- Fallback para GitHub API se DB cair
```

---

## O Que Muda Para Todo Mundo

### ✅ Tribe Owners
Antes:
```
/wow-hub-setup (customizar)
→ git push
→ Tudo normal
```

Depois (com DB):
```
/wow-hub-setup (customizar)
→ git push
→ Webhook automático registra na DB
→ Audit log atualizado (sem fazer nada!)
```

### ✅ Content Editors
Antes:
```
/wow-hub-edit-content
→ Edita
→ Commit automático
→ Git push
```

Depois (com DB):
```
/wow-hub-edit-content
→ Edita
→ Commit automático + registra na DB
→ Git push
→ Webhook atualiza DB
```

### ✅ Admin/Product
```
/wow-hub-db-setup (UMA VEZ NO INÍCIO)
→ Depois: tudo automático!
```

---

## Checklist Pós-Setup

Depois que rodar a skill, confirma:

- [ ] Tabelas criadas (`npm run db:push` ✅)
- [ ] Histórico importado (`npm run db:seed` ✅)
- [ ] Webhook configurado no GitHub
- [ ] API responde: `GET /api/audit-log`
- [ ] Audit log mostra commits na seção Auditoria
- [ ] Próximos commits aparecem automaticamente

---

## Se der Problema

### "Database não conecta"
- Espera Ownia terminar de criar a infraestrutura (5-10 min)
- Depois tenta de novo

### "Webhook não funciona"
- Verifica se secret está correto no Ownia (.env)
- Verifica se URL está acessível
- Testa webhook no GitHub (Settings → Webhooks → [seu webhook])

### "Seed não importa commits"
- Verifica GITHUB_TOKEN (dev ambiente)
- Se em Ownia, pode ser rate limit do GitHub
- Tenta de novo em 5 minutos

### "Audit log mostra vazio"
- Se DB foi criado agora: webhook só pega commits DEPOIS
- Rode `npm run db:seed` para histórico

---

## Depois Disso

### Ninguém Mais Precisa Fazer Nada!

- ✅ Commits: registram automaticamente
- ✅ Edições: salvam na DB
- ✅ Exportar: `/api/audit-log/export?format=csv`
- ✅ Consultar: Seção Auditoria (WoW General, Tribos, Producto)

---

## Tecnicamente...

- **DB:** Aurora PostgreSQL (Ownia managed)
- **Tabela:** AuditLog (author, email, date, message, section, repo, commitHash, commitUrl)
- **Webhook:** GitHub → Ownia → Aurora (real-time)
- **Fallback:** AuditLog.tsx consulta DB, se falhar usa GitHub API
- **Export:** CSV ou JSON via `/api/audit-log/export`

---

## UMA VEZ E NUNCA MAIS

```
Day 1:  /wow-hub-db-setup (você faz)
Day 2:  Tribe A faz commits → automático
Day 3:  Tribe B faz commits → automático
Day 4:  Content editor usa /wow-hub-edit-content → automático
Day 5:  Product team faz commits → automático
...
Forever: Tudo automático! 🎉
```

---

**Ready to activate database?** Run `/wow-hub-db-setup`! 🚀
