elm 0.17 starter application using gulp to compile and serve application.

## Feutures

* uses [gulpjs.com]()
* compiles elm files into javascript.
* watches files for changes and compiles as files changes.
* serve files using 'gulp-webserver'
* livereload

## Getting Started

1. elm and gulp must be installed
2. clone elm-gulp-starter app into your development folder  

        git clone https://github.com/zdebeer99/elm-gulp-starter.git project-name

  where 'project-name' can be replaced by your application name.
3. enter 'npm install'
4. enter 'elm package install'
5. enter 'gulp run'
6. open the url [http://localhost:8000]() in your browser.

you should see 'hello world' and the browser will update as you code.

**Gulp Commands**

* serve [default] - Compile the appication watch for changes and serve the application.
* build - Only compile the appication
* clean - Clean the distr folder.

Example:

    gulp
or

    gulp serve


## Elm Resources

* http://elm-lang.org/
* http://www.elm-tutorial.org/
* http://elm-by-example.org/introduction.html
* https://github.com/isRuslan/awesome-elm
* https://github.com/moarwick/elm-webpack-starter
* https://github.com/maciejsmolinski/elm-playground/blob/master/todo/index.html

    Elm basic examples.
