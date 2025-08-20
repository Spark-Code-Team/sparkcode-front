# ---------- deps ----------
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci

# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# حتما next.config.mjs شامل output: 'standalone' باشد
RUN npm run build

# ---------- runner ----------
FROM node:20-alpine AS runner
ENV NODE_ENV=production
ENV PORT=3001
ENV HOSTNAME=0.0.0.0
WORKDIR /app

# فقط خروجی‌های لازم برای ران‌تایم را می‌آوریم
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3001
CMD ["node", "server.js"]
# test ci/cd v3