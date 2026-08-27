# Skill: WoW Hub - Tribe Setup

## Descrição
Prepara seu fork do WoW Hub para rodar no Ownia. Configura Docker, CI/CD, variáveis de ambiente e documentação.

**Para Tribe Owners:** Use essa skill para adaptar o repositório para suas necessidades.

## Quando Usar
- Tribe fez fork do wow-tribes-hub
- Quer customizar para sua tribu (cores, nomes, etc)
- Preparar antes de pedir admin para criar app no Ownia
- Adicionar variáveis de ambiente da tribu

## O que Faz
✅ Cria Dockerfile otimizado para Ownia
✅ Configura GitHub Actions (tests + deploy)
✅ Setup variáveis de ambiente (.env.ownia)
✅ Gera documentação Ownia
✅ Valida estrutura do projeto
✅ Cria .ownia.yml com metadata

## Como Usar

### Opção 1: Via Claude Code (Recomendado)
```
/ownia-setup
```

### Opção 2: Manual
```bash
# Clone o repo adaptado
git clone https://github.com/nataliagomesdesp/wow-tribes-hub
cd wow-tribes-hub

# Abra no Claude Code e rode:
/ownia-setup

# Ou edite manualmente os arquivos criados
git add .
git commit -m "Setup Ownia: CI/CD + Docker + env vars"
git push
```

## Resultado
Depois da skill:
- ✅ GitHub Actions rodando testes
- ✅ Dockerfile pronto
- ✅ Env vars configuradas
- ✅ Documentação Ownia
- ✅ Ready para pedir admin criar app

## Owner de Tribu - Próximos Passos
1. Roda essa skill
2. Faz `git push`
3. Pede para admin da Despegar criar app no Ownia
4. App fica live em `https://ownia.despegar.io/wow-tribes-hub`

## Customizações por Tribu
Se sua tribu quer customizar:
- Edita `next.config.mjs` com branding da tribu
- Edita `tailwind.config.ts` com cores da tribu
- Edita `.env.ownia` com variáveis específicas
- Skill já vai detectar e usar no deploy

## Support
Dúvidas? Vê `docs/OWNIA_SETUP.md` ou abre issue no GitHub
