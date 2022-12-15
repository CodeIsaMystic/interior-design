<div align="center" style="width: 500px;margin: 0 auto;">

  <br />

  <!-- <h1>Axome</h1> -->
  <h2></h2>
  
  <br />

</div>
  <br />

---

## Table of contents

- [Table of contents](#table-of-contents)
- [Get it started](#get-it-started)
  - [Introduction](#introduction)
- [Developing](#developing)
  - [The repository](#the-repository)
    - [Installation](#installation)
    - [Development mode](#development-mode)
    - [Final Build mode](#final-build-mode)
  - [NPM Scripts](#npm-scripts)
  - [Config Files](#config-files)
- [Files Architecture](#files-architecture)
- [Dependencies](#dependencies)

<br>
<br>

---

## Get it started

### Introduction

> \_\_

## Developing

### The repository

Fork the repository using [this](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide, then clone it locally.

#### Installation

```shell
git clone https://#
cd #
npm install
```

#### Development mode

You can now run the frontend on your `localhost:3000` by hitting the command for browser sync uses.

```shell
npm run dev
```

#### Final Build mode

```shell
npm run build
```

<br/>
<br/>

### NPM Scripts

You can find here our scripts descripted in the package.json at the root of the project.

```json
  "scripts": {
    "dev": "npm run serve",
    "serve": "cross-env NODE_ENV=dev webpack server --config ./webpack/webpack.config.dev.js",
    "build": "webpack --config ./webpack/webpack.config.prod.js"
  } ...
```

### Config Files

Webpack Config is splitted into 3 files: **`webpack.config.dev.js, webpack.config.prod.js and webpack.config.common.js`**.
You can found them into the **`webpack folder`** located at the root of the project.

Both _webpack.config.dev.js and webpack.config.prod.js_ depend on _webpack.config.common.js_.

So if you want to modify or add a new plugin or task, you must put it on the right file. If you want to apply new tasks to both, write them on the common file.

---

<br>
<br>
<br>

---

## Files Architecture

```
app/
├── dist/...
├── node_modules/...
├── shared/...
│
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── img/
│   │       ├── test.png
│   │       └── test.jpg
│   │
│   ├── pages/
│   │   ├── about.html
│   │   └── index.html
│   │
│   ├── scripts/
│   │   ├── modules/
│   │   │   └── Parallax.js
│   │   ├── utils/
│   │   │   └── utils.js
│   │   │
│   │   └── app.js
│   │
│   ├── styles/
│       ├── base/
│       │   ├── _fonts.scss
│       │   ├── _main.scss
│       │   ├── _reset.scss
│       │   ├── _typography.scss
│       │   └── _variables.scss
│       │
│       ├── layout/
│       │   ├── _site-footer.scss
│       │   ├── _site-header.scss
│       │   └── _main.scss
│       │
│       ├── modules/...
│       ├── pages/...
│       ├── state/...
│       ├── utils/...
│       │
│       └── main.scss
│  
├── webpack
│   ├── webpack.config.common.js
│   ├── webpack.config.dev.js
│   └── webpack.config.prod.js
│  
├── .gitignore
├── NOTES.md
├── .npmrc
├── package-lock.json
├── package.json
├── postcss.config.js
└── README.md
```

---

## Dependencies
