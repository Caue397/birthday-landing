# 🎂 Birthday Landing Page

Landing page de convite de aniversário construída com **Next.js 16**, **React 19** e **Tailwind CSS 4**. O projeto serve como convite digital para uma festa, exibindo contagem regressiva em tempo real, detalhes do evento e uma chamada para confirmação de presença.

## Demo

> Evento: **12 de fevereiro de 2027**

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | Framework React (App Router) |
| [React](https://react.dev/) | 19.2.3 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Tipagem estática |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Estilização utilitária |
| [Geist](https://vercel.com/font) | via `next/font` | Tipografia (Sans + Mono) |

**Package manager:** [Bun](https://bun.sh/)

---

## Estrutura do projeto

```
birthday-landing/
├── public/
│   ├── background/
│   │   └── cheerful-young-man-...jpg   # Imagem de fundo do Hero
│   ├── birthday.jpg                    # Imagem da Seção 1
│   └── birthday2.jpg                   # Imagem da Seção 2
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css                 # Tokens de design (cores, fontes)
    │   ├── layout.tsx                  # Root layout com metadados
    │   └── page.tsx                    # Página principal (composição)
    └── components/
        ├── footer/
        │   └── footer.tsx              # Rodapé da página
        └── parts/home/
            ├── countdown.tsx           # Contagem regressiva em tempo real
            ├── hero.tsx                # Seção principal (Hero)
            ├── section-one.tsx         # Seção "A história"
            └── section-two.tsx         # Seção "O evento"
```

---

## Componentes

### `Hero`
Seção de tela cheia com imagem de fundo e overlay escuro. Contém:
- Tag de convite ("Você está convidado")
- Título principal com data do evento
- Componente `Countdown` embutido
- Botão de CTA "Confirmar presença"

### `Countdown`
Componente **client-side** que calcula e exibe a contagem regressiva até `2027-02-12T00:00:00` atualizada a cada segundo. Exibe quatro unidades: **Semanas**, **Dias**, **Horas** e **Segundos**.

### `SectionOne` — A história
Seção em fundo branco com layout de duas colunas (imagem + texto). Traz o contexto emocional do convite.

### `SectionTwo` — O evento
Seção com layout invertido (texto + imagem) listando os detalhes da festa:
- **Data:** 12 de fevereiro de 2027
- **Local:** A definir
- **Horário:** A partir das 20h

### `Footer`
Rodapé minimalista com a mensagem de encerramento e a data do evento.

---

## Design System

As variáveis de tema estão definidas em `src/app/globals.css` via `@theme` do Tailwind CSS v4:

| Token | Valor | Uso |
|---|---|---|
| `--color-background` | `#000000` | Fundo escuro (Hero, Footer) |
| `--color-foreground` | `#ffffff` | Texto principal |
| `--color-accent` | `#00B4E5` | Cor de destaque (azul cyan) |
| `--max-width-container` | `1440px` | Largura máxima do container |
| `--font-sans` | Geist Sans | Fonte sem serifa |
| `--font-mono` | Geist Mono | Fonte monoespaçada |

---

## Como rodar localmente

**Pré-requisito:** [Bun](https://bun.sh/) instalado.

```bash
# Instalar dependências
bun install

# Rodar o servidor de desenvolvimento
bun dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

```bash
bun run build   # Build de produção
bun run start   # Iniciar servidor de produção
bun run lint    # Verificar o código com ESLint
```

---

## Deploy

O deploy mais simples é pela [Vercel](https://vercel.com/), criadora do Next.js. Basta conectar o repositório e o deploy é automático a cada push.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## Licença

Projeto pessoal desenvolvido como exercício prático durante o curso **EBAC — Profissão: Full Stack Java**.
