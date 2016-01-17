export default class Config {
  constructor() {
    var dirs = {
      src: 'src',
      dest: 'dist'
    };

    this.browsersync = {
      proxy: {
        target: "http://boilerplate.local.io",
        middeware: function (req, res, next) {
          console.log(req.url);
          next();
        }
      },
      files: [
        './index.html'
      ]
    }

    this.paths = {
      scss : {
        watch: `${dirs.src}/scss/**/*`,
        src: `${dirs.src}/scss/init.scss`,
        dest: `${dirs.dest}/`
      },
      img : {
        watch: `${dirs.src}/img/**/*`,
        src: `${dirs.src}/img/**/*.{jpg,png,ico}`,
        dest: `${dirs.dest}/`
      },
      fnt : {
        watch: `${dirs.src}/fnt/**/*`,
        src: `${dirs.src}/fnt/**/*`,
        dest: `${dirs.dest}/`
      },
      bower : {
        watch: `${dirs.src}/bower/**/*`,
        src: [
          `${dirs.src}/bower/jquery/dist/jquery.js`,
          `${dirs.src}/bower/radio/radio.js`,
          `${dirs.src}/bower/bxSlider/dist/jquery.bxslider.js`,
          `${dirs.src}/bower/underscore/underscore.js`,
          `${dirs.src}/bower/html5shiv/dist/html5shiv.js`,
        ],
        dest: `${dirs.dest}/`
      },
      es6 : {
        watch: `${dirs.src}/es6/**/*`,
        src: `${dirs.src}/es6/init.js`,
        dest: `${dirs.dest}/`
      }
    };
  }
}
