FROM phusion/baseimage
RUN apt update
RUN apt -y install wget
RUN cd /tmp/ && wget http://nginx.org/keys/nginx_signing.key && apt-key add nginx_signing.key
RUN sh -c "echo 'deb http://nginx.org/packages/mainline/ubuntu/ '$(lsb_release -cs)' nginx' > /etc/apt/sources.list.d/nginx.list"
RUN apt update && apt -y install nginx

RUN mkdir /etc/service/nginx
ADD conf/nginx.sh /etc/service/nginx/run
RUN chmod +x /etc/service/nginx/run

COPY conf/nginx-default.conf /etc/nginx/conf.d/default.conf

COPY certs/ssl-cert-snakeoil.pem /etc/ssl/certs/ssl-cert-snakeoil.pem
COPY certs/ssl-cert-snakeoil.key /etc/ssl/private/ssl-cert-snakeoil.key

COPY static/ /var/www/html