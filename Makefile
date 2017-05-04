.PHONY: up down test bash logs e2e

up:
	docker-compose up --build -d app

down:
	docker-compose down

test:
	docker-compose run --rm app yarn test

bash:
	docker-compose exec app bash

logs:
	docker-compose logs -f app

e2e:
	docker-compose run --rm e2e yarn test

default: up
