System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "aurelia-loader-systemjs/*": "dist/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-loader": "github:aurelia/loader@0.3.1",
    "aurelia-metadata": "github:aurelia/metadata@0.2.4",
    "aurelia-path": "github:aurelia/path@0.4.0",
    "github:aurelia/loader@0.3.1": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.1.2",
      "core-js": "npm:core-js@0.4.4",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.5.2"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:core-js@0.4.4": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

