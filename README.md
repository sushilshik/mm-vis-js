# mm-vis-js

mm-vis-js &mdash; IDE and schemes editor.

Code based on vis.js.

Example: https://sushilshik.github.io/

###### Features:
* No need to install.
* No need to register in online services to edit schemes
* Schemes data can be edited from it's text representation
* Code (e.q. from github projects) can be converted to mm-vis-js schemes for visual research
* Write programs in familiar programming languages and in visual graphs of nodes with code
* Build files with code (like project building in make and maven) from graphs of nodes with code
* Place books and articles pages as images on mm-vis-js canvas to write nodes with comments and annotations for pages content
* Work online and offline
* Run code in nodes on canvas to calculate data and edit schemes on canvas (like scripts in Excel)

###### Screenshots

sushilshik.github.io/index.html screenshot 2019.11.30

![sushilshik.github.io/index.html screenshot 2019.11.30](https://sushilshik.github.io/imgs/mm-vis-js_index_2019.11.30.png)

###### List of pages on 2019.11.30:

* https://sushilshik.github.io/index.html
* https://sushilshik.github.io/base.html
* https://sushilshik.github.io/culture.html
* https://sushilshik.github.io/ruby.html

### Tests:

Install:
* docker
* docker-compose. pip install docker-compose

Run:
1) Open first terminal.
2) Run: docker-compose up --build. It will start chrome docker container.
3) Open second terminal.
4) Run: docker exec -it app-express npm run test:e2e. Command will exit after process finish.
5) Run: docker-compose down. It will shut down chrome container in first terminal.
