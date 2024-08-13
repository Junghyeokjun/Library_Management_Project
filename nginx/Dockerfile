# Nginx 이미지 기반
FROM nginx:latest

# SSL 인증서와 키를 복사
COPY ./certs/fullchain.pem /etc/letsencrypt/live/librarymanagement.duckdns.org/fullchain.pem
COPY ./certs/privkey.pem /etc/letsencrypt/live/librarymanagement.duckdns.org/privkey.pem

# Nginx 설정 파일 복사
COPY ./nginx.conf /etc/nginx/nginx.conf

# Nginx 포트 노출
EXPOSE 80
EXPOSE 443
