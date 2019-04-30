FROM gitpod/workspace-full:latest

# Install Jekyll dependencies
USER root 
RUN apt-get install build-essential zlib1g-dev

# Set up Gem installation directory and install Jekyll
USER gitpod
RUN echo '# Install Ruby Gems to ~/gems' >> /home/gitpod/.bashrc \
&& echo 'export GEM_HOME="$HOME/gems"' >> /home/gitpod/.bashrc \
&& echo 'export PATH="$HOME/gems/bin:$PATH"' >> /home/gitpod/.bashrc
RUN gem install jekyll bundler

# Give back control
USER root
