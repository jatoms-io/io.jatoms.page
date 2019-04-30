FROM gitpod/workspace-full:latest

USER root
RUN apt-get install build-essential zlib1g-dev \
&& gem install jekyll bundler
