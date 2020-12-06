# mm-vis-js

mm-vis-js &mdash; IDE, CAS and schemes editor.

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
* SymPy math integration (CAS like Mathcad). Dynamic LaTeX expressions and matplotlib plots.
* Run code in nodes on canvas to calculate data and edit schemes on canvas (like scripts in Excel)

###### Install

Instruction manual: https://sushilshik.github.io/mm-vis-js_docs.html?scale=0.085&x=85579&y=-2145 (ru)

###### Screenshots

sushilshik.github.io/index.html screenshot 2019.11.30

![sushilshik.github.io/index.html screenshot 2019.11.30](https://sushilshik.github.io/imgs/mm-vis-js_index_2019.11.30.png)

SymPy integration. With dynamic equations and plots in LaTeX and matplotlib.

![sushilshik.github.io/math.html screenshot 2019.12.19](https://sushilshik.github.io/imgs/mm-vis-js_matplotlib_1.png)

![sushilshik.github.io/math.html screenshot 2019.12.19](https://sushilshik.github.io/imgs/mm-vis-js_matplotlib_2.png)

###### List of pages on 2020.01.29:

* https://sushilshik.github.io/index.html
* https://sushilshik.github.io/mm-vis-js_code.html
* https://sushilshik.github.io/mm-vis-js_docs.html
* https://sushilshik.github.io/base.html
* https://sushilshik.github.io/culture.html
* https://sushilshik.github.io/ruby.html
* https://sushilshik.github.io/javascript.html
* https://sushilshik.github.io/python.html
* https://sushilshik.github.io/music1.html
* https://sushilshik.github.io/music2.html
* https://sushilshik.github.io/math.html
* https://sushilshik.github.io/code.html
* https://sushilshik.github.io/engineering.html
* https://sushilshik.github.io/news1.html
* https://sushilshik.github.io/news11.html
* https://sushilshik.github.io/news2.html
* https://sushilshik.github.io/news3.html
* https://sushilshik.github.io/news4.html
* https://sushilshik.github.io/news41.html
* https://sushilshik.github.io/news5.html
* https://sushilshik.github.io/news51.html
* https://sushilshik.github.io/news52.html
* https://sushilshik.github.io/news53.html
* https://sushilshik.github.io/news6.html
* https://sushilshik.github.io/news61.html
* https://sushilshik.github.io/news7.html
* https://sushilshik.github.io/youtube1.html
* https://sushilshik.github.io/youtube2.html
* https://sushilshik.github.io/youtube3.html
* https://sushilshik.github.io/nature.html
* https://sushilshik.github.io/timelines.html
* https://sushilshik.github.io/java.html
* https://sushilshik.github.io/java-api.html
* https://sushilshik.github.io/sa1.html
* https://sushilshik.github.io/lisp.html

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
