# mm-vis-js
Редактор схем на основе vis.js

Пример: https://sushilshik.github.io/

Tests:

Install:
* docker
* docker-compose: pip install docker-compose

Run:
1) Open first terminal.
2) Run in project directory in first terminal: docker-compose up --build. It will start a docker container with chrome browser in it.
3) Open second terminal.
4) Run in project directory in second terminal: docker exec -it app-express npm run test:e2e. Command will exit after it process finish.
5) To shut down chrome container in first terminal - run in project directory in second terminal: docker-compose down.
