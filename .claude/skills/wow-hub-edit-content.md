# Skill: WoW Hub - Edit Content

## Descrição
Edita conteúdo do WoW Hub de forma fácil: escolhe a seção, faz alterações, commit automático e deploy.

## Quando Usar
- Atualizar conteúdo de uma seção
- Adicionar nova informação
- Corrigir textos/typos
- Qualquer alteração no hub

## Como Usar

### Via Claude Code (Recomendado)
```
/wow-hub-edit-content
```

### O que Acontece
1. **Menu de Seções** - Escolhe qual quer editar
2. **Abre Arquivo** - Vê o conteúdo atual
3. **Edita** - Você diz o que quer mudar
4. **Commit** - Skill faz commit automático
5. **Push** - Empurra pro GitHub
6. **Deploy** - Chama `/ownia-deploy` se Ownia estiver pronto

## Seções Disponíveis

### WoW General (9 seções)
- Historia
- Onboarding (5 tabs)
- Learning Paths
- Tribes & Squads
- OKRs y FCAs
- Ceremonies
- Jira & Procesos
- FAQs
- WoW Connects

### Producto
- Hub de Producto (4 tabs)

### Tribos
- Tribe Details (dinâmico por tribu)
- Org Chart

### Admin
- Analytics
- Auditoria

## Tipos de Edição

### 1. Atualizar Conteúdo Existente
```
Skill pergunta: Qual seção?
User: Onboarding
Skill pergunta: Qual aba?
User: Glosario
Skill pergunta: O que mudar?
User: Adicionar novo termo "Squad Lead"
Skill: Edita e faz commit
```

### 2. Adicionar Novo
```
Skill pergunta: Adicionar ou atualizar?
User: Adicionar
Skill pergunta: Qual seção?
User: FAQs
Skill pergunta: Qual tópico?
User: OKRs
Skill: Cria nova FAQ
```

### 3. Corrigir Typos
```
Skill pergunta: Qual seção?
User: Ceremonies
Skill pergunta: Qual erro?
User: "Semanal" → "Quinzenal"
Skill: Procura e corrige
```

## Fluxo Completo

```
1. User: /wow-hub-edit-content
   ↓
2. Skill: "Qual seção quer editar?"
   User escolhe
   ↓
3. Skill: Abre arquivo da seção
   Mostra conteúdo atual
   ↓
4. Skill: "O que quer mudar?"
   User descreve alteração
   ↓
5. Skill: Edita o arquivo
   Propõe mudanças
   ↓
6. User: Confirma ou pede ajustes
   ↓
7. Skill: Faz commit + push
   ↓
8. Skill: Pergunta "Deploy agora?"
   ↓
9. Se sim: Chama /ownia-deploy
   Se não: Arquivo fica no GitHub, deploy manual depois
```

## Exemplo de Uso

```
User: /wow-hub-edit-content

Skill: 📋 Qual seção quer editar?
  1. Historia
  2. Onboarding
  3. Learning Paths
  ...
  
User: 5

Skill: 📝 OKRs y FCAs selecionado
  Conteúdo atual:
  - [mostra arquivo]
  
  O que quer mudar?
  
User: Adicionar novo OKR para Q4 2025

Skill: ✏️ Propondo alteração:
  [mostra as mudanças]
  
  Confirma? (sim/não)
  
User: sim

Skill: ✅ Commit feito!
  ✅ Push feito!
  
  Deploy agora para Ownia? (sim/não/depois)
  
User: agora

Skill: 🚀 Chamando /ownia-deploy...
  [deploy acontece]
  
  ✅ Alterações ao vivo em: ownia.despegar.io/wow-tribes-hub
```

## Tipos de Arquivo que Pode Editar

- `.tsx` files (seções do Hub)
- `.ts` files (lib/github.ts)
- `.md` files (documentação)
- `.json` files (config, env)

## Workflow para Diferentes Roles

### Content Owner
```
/wow-hub-edit-content
→ Edita conteúdo
→ Commit automático
→ Deploy automático
```

### Tribe Lead
```
/wow-hub-edit-content
→ Escolhe seção de sua tribu
→ Edita OKRs/Squads
→ Deploy para sua tribu
```

### Product Manager
```
/wow-hub-edit-content
→ Escolhe "Hub de Producto"
→ Atualiza roadmap/metrics
→ Deploy automático
```

## Commits Automáticos

A skill cria commits bem estruturados:

```bash
git commit -m "update(onboarding): Add new term 'Squad Lead'

- Added definition in Glosario tab
- Updated context examples
- Linked to related concepts"
```

## Segurança

- ✅ Pergunta antes de commitar
- ✅ Mostra as mudanças antes de fazer commit
- ✅ User pode cancelar a qualquer momento
- ✅ Commits vão pro GitHub (auditoria automática)

## Troubleshooting

### "Arquivo não encontrado"
- Skill lista arquivos disponíveis
- User escolhe da lista

### "Conflito no merge"
- Se houver conflito, skill avisa
- User pode resolver manualmente

### "Deploy falhou"
- Skill mostra erro do Ownia
- User pode tentar depois ou pedir ajuda

## Next Steps

Depois de editar:
1. Alterações estão no GitHub
2. Se deployou: já está vivo em ownia.despegar.io
3. Se não deployou: faz `/ownia-deploy` depois

## Support

Dúvidas?
1. Check esse arquivo
2. Open issue no GitHub
3. Ping no Slack #wow-hub

## Related Skills

- `/wow-hub-setup` - Setup tribu
- `/ownia-deploy` - Deploy manual
