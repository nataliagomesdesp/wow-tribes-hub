# WoW Hub Skills

Automações para facilitar o uso e customização do WoW Hub Platform.

---

## 🎯 Skills Disponíveis

### 1. **Database Setup** (`/wow-hub-db-setup`) - ⭐ ADMIN

**Para quem:** Admin/Product Team (uma única vez, no início)

**O que faz:**
- Cria tabelas Aurora PostgreSQL
- Importa histórico do GitHub
- Configura GitHub Webhook automático
- Valida setup

**Como usar:**
```
/wow-hub-db-setup
```

**Quando usar:**
- Depois que Ownia cria o app
- Uma única vez no início
- Depois tudo é automático!

**Resultado:** Database ativo, webhook sincronizando, audit log persistindo

---

### 2. **Tribe Setup** (`/wow-hub-setup`)

**Para quem:** Owners de tribu que querem customizar o hub para sua tribu

**O que faz:**
- Configura Dockerfile para produção
- Setup GitHub Actions CI/CD
- Cria .ownia.yml com metadata
- Gera documentação
- Valida estrutura

**Como usar:**
```
/wow-hub-setup
```

**Fluxo:**
```
1. Fork wow-tribes-hub
2. Run /wow-hub-setup
3. Customize tailwind.config.ts (cores)
4. Customize .ownia.yml (env vars)
5. git add . && git commit && git push
6. Pede admin para criar app no Ownia
7. Deploy automático!
```

**Resultado:** Seu fork pronto para Ownia

---

### 3. **Edit Content** (`/wow-hub-edit-content`)

**Para quem:** Qualquer pessoa que precisa atualizar conteúdo do hub

**O que faz:**
- Lista seções disponíveis
- Abre arquivo para editar
- Ajuda na edição (com IA)
- Commit automático
- Push automático
- Deploy no Ownia (opcional)

**Como usar:**
```
/wow-hub-edit-content
```

**Exemplo:**
```
Skill: Qual seção quer editar?
User: Onboarding

Skill: Qual aba?
User: FAQs

Skill: O que quer mudar?
User: Adicionar nova pergunta sobre OKRs

Skill: [edita arquivo]
      [faz commit]
      [faz push]
      Deploy agora?

User: Sim
Skill: ✅ Alterações ao vivo!
```

**Resultado:** Conteúdo atualizado e deployed

---

## 📋 Fluxo de Uso

### Cenário 0: Admin Ativa Database (UMA VEZ)

```
1. Ownia cria o app wow-tribes-hub
2. /wow-hub-db-setup
   ├─ npm run db:push (cria tabelas)
   ├─ npm run db:seed (importa histórico)
   ├─ Configura GitHub Webhook
   └─ Valida setup
3. ✅ Database ativo, audit log funcionando!
```

---

### Cenário 1: Tribe Owner Customiza Hub

```
1. Clone wow-tribes-hub
2. /wow-hub-setup
   ↓
3. Edita tailwind.config.ts (cores da tribu)
4. Edita .env.ownia (variáveis)
5. git push
6. Ownia admin cria app
7. ✅ App live (e se admin já rodou /wow-hub-db-setup, audit log já funciona!)
```

### Cenário 2: Update Conteúdo WoW General

```
1. /wow-hub-edit-content
   ↓
2. Escolhe "Onboarding"
3. Edita conteúdo
4. Commit automático
5. Ownia deploy automático
6. ✅ Alterações live
```

### Cenário 3: Tribe Atualiza Seus OKRs

```
1. /wow-hub-edit-content
   ↓
2. Escolhe "Tribe Details" → [sua tribu]
3. Atualiza OKRs
4. Commit
5. Ownia deploy
6. ✅ OKRs atualizados para todos
```

---

## 🔄 Workflow Recomendado

### Para Content Owners (WoW General)
- Use `/wow-hub-edit-content` para qualquer mudança
- Automation: commit + push + deploy automático
- Perfeito para atualizações rápidas

### Para Tribe Leads
- **Setup uma vez:** `/wow-hub-setup` no começo
- **Editar depois:** `/wow-hub-edit-content` para atualizações
- Seus OKRs/Squad info fica sincronizado

### Para Product Team
- **Setup:** `/wow-hub-setup` (fork próprio)
- **Editar:** `/wow-hub-edit-content` para Producto
- Deploy automático pro Hub

---

## 📝 Commits Automáticos

As skills criam commits bem estruturados:

**Exemplo 1 - WoW General:**
```bash
git commit -m "update(onboarding): Add new concept 'Squad Lead'

- Added definition in Glosario tab
- Added examples in Canvas tab
- Updated related links"
```

**Exemplo 2 - Tribe:**
```bash
git commit -m "update(search-tribe): Q4 2025 OKRs

- Updated OKR targets for Q4
- Added new initiatives
- Updated metrics baseline"
```

**Exemplo 3 - Producto:**
```bash
git commit -m "update(producto): New roadmap items for Q4

- Added AI recommendations initiative
- Updated feature prioritization
- New partnership opportunities"
```

---

## 🔐 Segurança & Validação

### Cada skill verifica:
- ✅ Arquivo existe?
- ✅ Syntaxe TypeScript/JSX válida?
- ✅ Tailwind classes válidas?
- ✅ Links internos corretos?

### Antes de fazer commit:
- ✅ Mostra mudanças para confirmar
- ✅ User pode cancelar
- ✅ Commit vai pro GitHub (auditoria)

---

## 🚀 Deploy Automático

### O que Acontece:

```
git push
  ↓
GitHub Actions roda testes
  ↓
Se passar: Ownia detecta novo commit
  ↓
Ownia rebuild Docker image
  ↓
Ownia deploy para AWS ECS
  ↓
✅ App atualizado (5-10 min)
```

### Para Parar Antes do Deploy:
```
1. Edita conteúdo com /wow-hub-edit-content
2. Skill: "Deploy agora?"
3. User: "Depois"
4. Arquivo fica em staging no GitHub
5. Deploy manual depois com /ownia-deploy
```

---

## 🆘 Troubleshooting

### "Não consigo editar a seção que quero"
→ Skills lista seções disponíveis, escolha da lista

### "Fiz edição mas não foi deployada"
→ Você escolheu "Depois" em deploy
→ Depois usa `/ownia-deploy` ou edita novamente

### "Achei um erro, posso corrigir?"
→ `/wow-hub-edit-content` → escolhe seção → descreve erro
→ Skill corrige automático

### "Preciso editar código, não conteúdo"
→ Edita direto no arquivo `.tsx`
→ Commit normal `git commit -m "..."`
→ Push `git push`

---

## 📚 Related

- **GitHub:** https://github.com/nataliagomesdesp/wow-tribes-hub
- **Ownia Docs:** docs/OWNIA_SETUP.md
- **Hub Sections:** 13 seções de conteúdo
- **Audit Log:** /wow-hub/wow/auditoria

---

## ✨ Tips

1. **Atualizações frequentes?** Use `/wow-hub-edit-content`
2. **Customizando tribu?** Use `/wow-hub-setup` uma vez
3. **Precisa de help?** Describe o que quer, skill ajuda com sugestões
4. **Deploy fora do horário?** Escolha "Depois" e deploy depois

---

**Pronto para editar? Use `/wow-hub-edit-content` ou `/wow-hub-setup`!** 🚀
