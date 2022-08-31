THIS_FILE := $(lastword $(MAKEFILE_LIST))

start:
	@$(MAKE) -f $(THIS_FILE) stop
	@$(MAKE) -f $(THIS_FILE) bundle
	@$(MAKE) -f $(THIS_FILE) up
	@$(MAKE) -f $(THIS_FILE) start_app

start_with_debug:
	@$(MAKE) -f $(THIS_FILE) stop
	@$(MAKE) -f $(THIS_FILE) up
	@$(MAKE) -f $(THIS_FILE) start_app_debug

backend_bash:
	docker exec -it companyx_api /bin/bash

frontend_bash:
	docker exec -it companyx_frontend /bin/bash

stop:
	@docker-compose stop

build:
	@docker-compose build

up:
	@docker-compose up -d --remove-orphans

bundle:
	@docker-compose run backend bundle

start_app:
	@docker-compose exec backend bundle exec rails s -p 5000 -b 0.0.0.0

start_app_debug:
	@docker-compose exec backend bundle exec rdebug-ide --host 0.0.0.0 --port 1234 -- bin/rails s -p 5000 -b 0.0.0.0