FROM gitpod/workspace-full:latest

# Install Jekyll
USER gitpod
RUN bash -lc "gem install jekyll bundler" && bash -lc "bundle install"

# Give back control
USER root
