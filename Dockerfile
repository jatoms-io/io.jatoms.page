FROM gitpod/workspace-full:latest

# Install Jekyll dependencies
USER root 
RUN apt-get install ruby-full build-essential zlib1g-dev

# Set up Gem installation directory and install Jekyll
USER gitpod
RUN echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc \
&& echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc \
&& echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc \
&& source ~/.bashrc
&& gem install jekyll bundler

# Give back control
USER root
