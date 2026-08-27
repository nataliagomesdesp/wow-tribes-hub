# WoW Hub - Ownia Setup Guide

## Overview

Este guia explica como o WoW Hub está configurado para rodar no Ownia.

## Arquivos Gerados

### 1. **Dockerfile**
- Next.js 14 otimizado para produção
- Multi-stage build (builder + runtime)
- Node 20 Alpine (leve e seguro)
- Healthcheck configurado
- Non-root user para segurança

### 2. **.ownia.yml**
Configuração da aplicação:
- App name: `wow-tribes-hub`
- Framework: Next.js 14
- Port: 3000
- CPU: 256m | Memory: 512MB
- Auto-scaling: 1-3 instâncias
- Health check: `/api/health`

### 3. **GitHub Actions**
Dois workflows automáticos:

#### `test.yml` (Testa em cada push)
- ESLint
- TypeScript check
- Unit tests (Vitest)
- Coverage upload

#### `deploy.yml` (Valida antes de deploy)
- Valida `.ownia.yml`
- Valida `Dockerfile`
- Notifica Ownia via webhook

### 4. **API Healthcheck**
- Endpoint: `/api/health`
- Response: `{ status: 'ok', ... }`
- Ownia usa para monitoramento

## Como Funciona

### Fluxo de Deploy

```
1. Developer faz push para main
   ↓
2. GitHub Actions roda testes
   ↓
3. Se passar, GitHub Actions valida Dockerfile
   ↓
4. Ownia detecta push e clona repo
   ↓
5. Ownia faz build usando Dockerfile
   ↓
6. Ownia faz deploy no AWS ECS
   ↓
7. App fica live em ownia.despegar.io/wow-tribes-hub
   ↓
8. Ownia monitora healthcheck a cada 30s
```

## Environment Variables

### Automáticas (Ownia)
```env
NODE_ENV=production
PORT=3000
```

### Configuráveis (.ownia.yml)
```env
NEXT_PUBLIC_APP_NAME=WoW Hub
NEXT_PUBLIC_GITHUB_OWNER=despegar
NEXT_PUBLIC_GITHUB_REPO=wow-playbook
```

### Customização por Tribu
Se sua tribu quer variáveis customizadas:

1. Edita `.ownia.yml` na seção `environment:`
2. Commit & push
3. Ownia redeployará com novas variáveis

## Troubleshooting

### Healthcheck falha
```
❌ Erro: "Healthcheck timeout"
✅ Solução: Espera 30+ segundos na primeira execução
```

### Docker build falha
```
❌ Erro: "npm install failed"
✅ Solução: Check package.json dependencies, ou
          run npm install localmente primeiro
```

### App não responde
```
❌ Erro: "502 Bad Gateway"
✅ Solução: Espera deploy terminar (5-10 min)
          ou check Ownia dashboard para logs
```

### Ownia não encontra Dockerfile
```
❌ Erro: "Dockerfile not found"
✅ Solução: Garanta que Dockerfile está no root
          do repo e é acessível
```

## Performance & Scaling

### Limites Atuais
- **Min instances**: 1
- **Max instances**: 3
- **CPU per instance**: 256m
- **Memory per instance**: 512MB
- **Target CPU**: 70% (para scale up)

### Aumentar Recursos
Se precisa mais recursos, edita `.ownia.yml`:

```yaml
resources:
  cpu: 512      # Aumentar CPU
  memory: 1024  # Aumentar memory

autoscaling:
  maxInstances: 5  # Mais instâncias
  targetCPU: 60    # Mais agressivo
```

Depois: commit → push → Ownia redeploya

## Monitoring

### Ownia Dashboard
- https://ownia.despegar.io/apps/wow-tribes-hub
- Vê: Status, Logs, Métricas, Health

### Health Endpoint
```bash
curl https://ownia.despegar.io/wow-tribes-hub/api/health
# Response:
# {
#   "status": "ok",
#   "timestamp": "2024-08-26T...",
#   "app": "wow-hub",
#   "environment": "production"
# }
```

### Logs
```bash
# Via Ownia dashboard:
# https://ownia.despegar.io/apps/wow-tribes-hub/logs
```

## CI/CD Pipeline

### Pré-Deploy Checks
- ✅ ESLint (code quality)
- ✅ TypeScript (type safety)
- ✅ Tests (vitest)
- ✅ Dockerfile validation
- ✅ .ownia.yml validation

### Deploy Steps
1. Clone repo
2. Dockerfile detection
3. App scan
4. Build image
5. Push to registry
6. Register task definition
7. Deploy to ECS
8. Health check

## Customização por Tribu

### Exemplo: Search Tribe
Se Search Tribe quer seu próprio fork:

```bash
# 1. Fork wow-tribes-hub no GitHub
git clone https://github.com/search-tribe/wow-tribes-hub
cd wow-tribes-hub

# 2. Customiza para sua tribu
vi tailwind.config.ts        # Cores da tribu
vi next.config.mjs           # Customizations
vi .ownia.yml                # App name, etc

# 3. Push customizado
git add .
git commit -m "Search Tribe customization"
git push

# 4. Ownia deploy automaticamente
# App fica em: ownia.despegar.io/search-tribe-wow-hub
```

## Support

### Dúvidas?
1. Check esse arquivo (OWNIA_SETUP.md)
2. Check `.ownia.yml` comentários
3. Check Dockerfile comments
4. Abre issue no GitHub repo

### Problemas?
1. Check Ownia logs: https://ownia.despegar.io/apps/wow-tribes-hub/logs
2. Check GitHub Actions: https://github.com/nataliagomesdesp/wow-tribes-hub/actions
3. Ping team Ownia: #ownia no Slack

## References

- Ownia Docs: https://ownia.despegar.io/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Docker Best Practices: https://docs.docker.com/develop/dev-best-practices/
