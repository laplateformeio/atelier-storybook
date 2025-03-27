FROM node:22 as builder
ENV COREPACK_INTEGRITY_KEYS=0
ENV PNPM_HOME="/pnpm"

WORKDIR /app
COPY . .
ENV PATH="$PNPM_HOME:$PATH"


RUN corepack enable

RUN pnpm install

RUN pnpm run build-storybook




FROM nginx:alpine

COPY --from=builder /app/dist/ /usr/share/nginx/webapp
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
