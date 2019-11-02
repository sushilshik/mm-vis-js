# mm-vis-js
Редактор схем на основе vis.js

Пример: https://sushilshik.github.io/

Tests:

Install:
* docker
* docker-compose. pip install docker-compose

Run:
1) Open first terminal.
2) Run: docker-compose up --build. It will start chrome docker container.
3) Open second terminal.
4) Run: docker exec -it app-express npm run test:e2e. Command will exit after process finish.
5) Run: docker-compose down. It will shut down chrome container in first terminal.
