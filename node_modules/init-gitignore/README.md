<p align="center" id="top">
	<a href="https://www.npmjs.com/package/init-gitignore"><img src="https://cdn.abraham.gq/projects/init-gitignore/gitignore.png" ></a>
	<br>
	<br>
	<br>
	<a href="https://www.npmjs.com/package/init-gitignore"><b>init-gitignore</b></a>
	: Because making git ignore files should be easier.
</p>

<p align="center">
	<a href="https://travis-ci.org/abranhe/init-gitignore"><img src="https://img.shields.io/travis/abranhe/init-gitignore.svg?logo=travis" /></a>
	<a href="https://github.com/abranhe/init-gitignore/blob/master/LICENSE"><img src="https://img.shields.io/github/license/abranhe/init-gitignore.svg" /></a>
	<a href="https://github.com/abranhe"><img src="https://abranhe.com/badge.svg"></a>
	<a href="https://cash.me/$abranhe"><img src="https://cdn.abraham.gq/badges/cash-me.svg"></a>
	<a href="https://www.patreon.com/abranhe"><img src="https://cdn.abraham.gq/badges/patreon.svg" /></a>
</p>

# See

- [Overview](#overview)
- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Templates](#templates)
- [Related](#related)
- [Team](#team)
- [License](#license)

# Overview

Often, you’ll have a class of files that you don’t want Git to automatically add or even show you as being untracked. These are generally automatically generated files such as log files or files produced by your build system. In such cases, you can create a file listing patterns to match them named `.gitignore`.

Read more about `.gitignore` files on the [manual page](https://git-scm.com/docs/gitignore).

🙊 All `.gitignore` templates are from the Github Project: [gitignore](https://github.com/github/gitignore/).

# Install

```
$ npm install init-gitignore
```

# Usage

### Eg: macOS

```js
const initGitignore = require('init-gitignore');

initGitignore.macOS();
```

Result **.gitignore**

```
# General
.DS_Store
.AppleDouble
.LSOverride

# Icon must end with two \r
Icon
...
```

### Eg: Node

```js
const initGitignore = require('init-gitignore');

initGitignore.Node();
```

Result **.gitignore**

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
...
```

# API

`<gitignoreNameFromTemplate>()`

> Create a .gitignore file with git template


# Templates

> Project specific, such as language or framework specific templates.

- Actionscript
- Ada
- Agda
- Android
- AppEngine
- AppceleratorTitanium
- ArchLinuxPackages
- Autotools
- cpp
- c
- CFWheels
- CMake
- cuda
- CakePHP
- ChefCookbook
- Clojure
- CodeIgniter
- CommonLisp
- Composer
- Concrete5
- Coq
- CraftCMS
- d
- dm
- Dart
- Delphi
- Drupal
- EPiServer
- Eagle
- Elisp
- Elixir
- Elm
- Erlang
- ExpressionEngine
- ExtJs
- Fancy
- Finale
- ForceDotCom
- Fortran
- FuelPHP
- gwt
- Gcov
- GitBook
- Go
- Godot
- Gradle
- Grails
- Haskell
- IGORPro
- Idris
- Java
- Jboss
- Jekyll
- Joomla
- Julia
- KiCad
- Kohana
- Kotlin
- LabVIEW
- Laravel
- Leiningen
- LemonStand
- Lilypond
- Lithium
- Lua
- Magento
- Maven
- Mercury
- MetaProgrammingSystem
- Nanoc
- Nim
- Node
- OCaml
- ObjectiveC
- Opa
- OpenCart
- OracleForms
- Packer
- Perl
- Perl6
- Phalcon
- PlayFramework
- Plone
- Prestashop
- Processing
- PureScript
- Python
- Qooxdoo
- Qt
- r
- ros
- Rails
- RhodesRhomobile
- Ruby
- Rust
- SCons
- Sass
- Scala
- Scheme
- Scrivener
- Sdcc
- SeamGen
- SketchUp
- Smalltalk
- Stella
- SugarCRM
- Swift
- Symfony
- SymphonyCMS
- TeX
- Terraform
- Textpattern
- TurboGears2
- Typo3
- Umbraco
- Unity
- UnrealEngine
- vvvv
- VisualStudio
- Waf
- WordPress
- Xojo
- Yeoman
- Yii
- ZendFramework
- Zephir

> Global (operating system or editor specific) templates.

- Anjuta
- Ansible
- Archives
- Backup
- Bazaar
- BricxCC
- cvs
- Calabash
- Cloud9
- CodeKit
- DartEditor
- Dreamweaver
- Dropbox
- Eclipse
- EiffelStudio
- Emacs
- Ensime
- Espresso
- FlexBuilder
- gpg
- JDeveloper
- JEnv
- JetBrains
- KDevelop4
- Kate
- Lazarus
- LibreOffice
- Linux
- LyX
- Matlab
- Mercurial
- MicrosoftOffice
- ModelSim
- Momentics
- MonoDevelop
- NetBeans
- Ninja
- NotepadPP
- Otto
- Patch
- Redcar
- Redis
- sbt
- svn
- SlickEdit
- Stata
- SublimeText
- SynopsysVCS
- Tags
- TextMate
- TortoiseGit
- Vagrant
- Vim
- VirtualEnv
- VisualStudioCode
- WebMethods
- Windows
- Xcode
- XilinxISE
- macOS


# Related

-  [init-gitignore-cli](https://github.com/abranhe/init-gitignore-cli): CLI for this module.
-  [init-pkg-json](https://github.com/abranhe/init-pkg-json): 📦 Complex generator of Package.json.
-  [init-pkg-json-cli](https://github.com/abranhe/init-pkg-json-cli): CLI for package.json generator 📦 .

# Team

|[![Carlos Abraham Logo](https://avatars3.githubusercontent.com/u/21347264?s=50&v=4)](https://19cah.com)|
| :-: |
| [Carlos Abraham](https://github.com/abranhe) |

# License

[MIT](https://github.com/abranhe/init-gitignore/blob/master/LICENSE) License © [Carlos Abraham](https://github.com/abranhe/)
