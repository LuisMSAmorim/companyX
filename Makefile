THIS_FILE := $(lastword $(MAKEFILE_LIST))

start:
	@docker-compose up

backend_bash:
	docker exec -it companyx_api /bin/bash

frontend_bash:
	docker exec -it companyx_frontend /bin/bash