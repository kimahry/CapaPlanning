FROM elixir:1.6.0

USER root

# Install last Erlang and Elixir version
RUN mix local.hex --force && mix local.rebar --force \
&& apt-get update && apt-get install -y inotify-tools locales

# Elixir requires UTF-8
RUN locale-gen en_US.UTF-8  
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8
ENV TZ Europe/Paris


WORKDIR /workspace

CMD ["/bin/bash"]