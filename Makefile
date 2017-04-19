.PHONY: up down test bash logs

up:
	docker-compose up --build -d app

down:
	docker-compose down

test:
	docker-compose run --rm app npm t

bash:
	docker-compose exec app bash

logs:
	docker-compose logs -f app

default: up
