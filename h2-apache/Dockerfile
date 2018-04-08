FROM phusion/baseimage

RUN add-apt-repository -y ppa:ondrej/apache2
RUN apt-key update
RUN apt update
RUN apt -y install apache2

RUN mkdir /etc/service/apache
ADD conf/apache.sh /etc/service/apache/run
RUN chmod +x /etc/service/apache/run

RUN cd /etc/apache2/mods-enabled && ln -s ../mods-available/http2.load http2.load && ln -s ../mods-available/ssl.load ssl.load && ln -s ../mods-available/ssl.conf ssl.conf

RUN cd /etc/apache2/sites-enabled/ && ln -s ../sites-available/default-ssl.conf default-ssl.conf
COPY conf/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY conf/default-ssl.conf /etc/apache2/sites-available/default-ssl.conf
COPY conf/ssl.conf /etc/apache2/mods-available/ssl.conf

COPY certs/ssl-cert-snakeoil.pem /etc/ssl/certs/ssl-cert-snakeoil.pem
COPY certs/ssl-cert-snakeoil.key /etc/ssl/private/ssl-cert-snakeoil.key

COPY static/ /var/www/html