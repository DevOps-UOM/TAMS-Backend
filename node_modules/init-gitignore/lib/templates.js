var fs = require('fs-extra');
var path = require('path');

function copyFile(s, o) {
  fs.copySync(path.resolve(__dirname,s), o);
};


/**
 * Github, Inc
 * Gitignore templates source:
 * https://github.com/github/gitignore
 *
 *  As of August 3, 2018
 */

// ~~~~~~~~~~~~~~~~~~~~~~ A ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Actionscript = () => {
  copyFile('../gitignore/Actionscript.gitignore', '.gitignore');
};
module.exports.Ada = () => {
	copyFile('../gitignore/Ada.gitignore', '.gitignore');
};
module.exports.Agda = () => {
	copyFile('../gitignore/Agda.gitignore', '.gitignore');
};
module.exports.Android = () => {
	copyFile('../gitignore/Android.gitignore', '.gitignore');
};
module.exports.AppEngine = () => {
	copyFile('../gitignore/AppEngine.gitignore', '.gitignore');
};
module.exports.AppceleratorTitanium = () => {
	copyFile('../gitignore/AppceleratorTitanium.gitignore', '.gitignore');
};
module.exports.ArchLinuxPackages = () => {
	copyFile('../gitignore/ArchLinuxPackages.gitignore', '.gitignore');
};
module.exports.Autotools = () => {
	copyFile('../gitignore/Autotools.gitignore', '.gitignore');
};
// Global
module.exports.Anjuta = () => {
	copyFile('../gitignore/Global/Anjuta.gitignore', '.gitignore');
};
module.exports.Ansible = () => {
	copyFile('../gitignore/Global/Ansible.gitignore', '.gitignore');
};
module.exports.Archives = () => {
	copyFile('../gitignore/Global/Archives.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ B ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Global
module.exports.Backup = () => {
	copyFile('../gitignore/Global/Backup.gitignore', '.gitignore');
};
module.exports.Bazaar = () => {
	copyFile('../gitignore/Global/Bazaar.gitignore', '.gitignore');
};
module.exports.BricxCC = () => {
	copyFile('../gitignore/Global/BricxCC.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ C ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports.cpp = () => {
    copyFile('../gitignore/C++.gitignore','.gitignore');
};
module.exports.c = () => {
    copyFile('../gitignore/C.gitignore','.gitignore');
};
module.exports.CFWheels = () => {
    copyFile('../gitignore/CFWheels.gitignore','.gitignore');
};
module.exports.CMake = () => {
    copyFile('../gitignore/CMake.gitignore','.gitignore');
};
module.exports.cuda = () => {
    copyFile('../gitignore/CUDA.gitignore','.gitignore');
};
module.exports.CakePHP = () => {
    copyFile('../gitignore/CakePHP.gitignore','.gitignore');
};
module.exports.ChefCookbook = () => {
    copyFile('../gitignore/ChefCookbook.gitignore','.gitignore');
};
module.exports.Clojure = () => {
    copyFile('../gitignore/Clojure.gitignore','.gitignore');
};
module.exports.CodeIgniter = () => {
    copyFile('../gitignore/CodeIgniter.gitignore','.gitignore');
};
module.exports.CommonLisp = () => {
    copyFile('../gitignore/CommonLisp.gitignore','.gitignore');
};
module.exports.Composer = () => {
    copyFile('../gitignore/Composer.gitignore','.gitignore');
};
module.exports.Concrete5 = () => {
    copyFile('../gitignore/Concrete5.gitignore','.gitignore');
};
module.exports.Coq = () => {
    copyFile('../gitignore/Coq.gitignore','.gitignore');
};
module.exports.CraftCMS = () => {
    copyFile('../gitignore/CraftCMS.gitignore','.gitignore');
};

// Global
module.exports.cvs = () => {
	copyFile('../gitignore/Global/CVS.gitignore', '.gitignore');
};
module.exports.Calabash = () => {
	copyFile('../gitignore/Global/Calabash.gitignore', '.gitignore');
};
module.exports.Cloud9 = () => {
	copyFile('../gitignore/Global/Cloud9.gitignore', '.gitignore');
};
module.exports.CodeKit = () => {
	copyFile('../gitignore/Global/CodeKit.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ D ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.d = () => {
    copyFile('../gitignore/D.gitignore','.gitignore');
};
module.exports.dm = () => {
    copyFile('../gitignore/DM.gitignore','.gitignore');
};
module.exports.Dart = () => {
    copyFile('../gitignore/Dart.gitignore','.gitignore');
};
module.exports.Delphi = () => {
    copyFile('../gitignore/Delphi.gitignore','.gitignore');
};
module.exports.Drupal = () => {
    copyFile('../gitignore/Drupal.gitignore','.gitignore');
};
// Global
module.exports.DartEditor = () => {
	copyFile('../gitignore/Global/DartEditor.gitignore', '.gitignore');
};
module.exports.Dreamweaver = () => {
	copyFile('../gitignore/Global/Dreamweaver.gitignore', '.gitignore');
};
module.exports.Dropbox = () => {
	copyFile('../gitignore/Global/Dropbox.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ E ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.EPiServer = () => {
    copyFile('../gitignore/EPiServer.gitignore','.gitignore');
};
module.exports.Eagle = () => {
    copyFile('../gitignore/Eagle.gitignore','.gitignore');
};
module.exports.Elisp = () => {
    copyFile('../gitignore/Elisp.gitignore','.gitignore');
};
module.exports.Elixir = () => {
    copyFile('../gitignore/Elixir.gitignore','.gitignore');
};
module.exports.Elm = () => {
    copyFile('../gitignore/Elm.gitignore','.gitignore');
};
module.exports.Erlang = () => {
    copyFile('../gitignore/Erlang.gitignore','.gitignore');
};
module.exports.ExpressionEngine = () => {
    copyFile('../gitignore/ExpressionEngine.gitignore','.gitignore');
};
module.exports.ExtJs = () => {
    copyFile('../gitignore/ExtJs.gitignore','.gitignore');
};
// Global
module.exports.Eclipse = () => {
	copyFile('../gitignore/Global/Eclipse.gitignore', '.gitignore');
};
module.exports.EiffelStudio = () => {
	copyFile('../gitignore/Global/EiffelStudio.gitignore', '.gitignore');
};
module.exports.Emacs = () => {
	copyFile('../gitignore/Global/Emacs.gitignore', '.gitignore');
};
module.exports.Ensime = () => {
	copyFile('../gitignore/Global/Ensime.gitignore', '.gitignore');
};
module.exports.Espresso = () => {
	copyFile('../gitignore/Global/Espresso.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ F ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Fancy = () => {
    copyFile('../gitignore/Fancy.gitignore','.gitignore');
};
module.exports.Finale = () => {
    copyFile('../gitignore/Finale.gitignore','.gitignore');
};
module.exports.ForceDotCom = () => {
    copyFile('../gitignore/ForceDotCom.gitignore','.gitignore');
};
module.exports.Fortran = () => {
    copyFile('../gitignore/Fortran.gitignore','.gitignore');
};
module.exports.FuelPHP = () => {
    copyFile('../gitignore/FuelPHP.gitignore','.gitignore');
};
// Global
module.exports.FlexBuilder = () => {
	copyFile('../gitignore/Global/FlexBuilder.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ G ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.gwt = () => {
    copyFile('../gitignore/GWT.gitignore','.gitignore');
};
module.exports.Gcov = () => {
    copyFile('../gitignore/Gcov.gitignore','.gitignore');
};
module.exports.GitBook = () => {
    copyFile('../gitignore/GitBook.gitignore','.gitignore');
};
module.exports.Go = () => {
    copyFile('../gitignore/Go.gitignore','.gitignore');
};
module.exports.Godot = () => {
    copyFile('../gitignore/Godot.gitignore','.gitignore');
};
module.exports.Gradle = () => {
    copyFile('../gitignore/Gradle.gitignore','.gitignore');
};
module.exports.Grails = () => {
    copyFile('../gitignore/Grails.gitignore','.gitignore');
};
// Global
module.exports.gpg = () => {
	copyFile('../gitignore/Global/GPG.gitignore', '.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ H ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Haskell = () => {
    copyFile('../gitignore/Haskell.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ I ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.IGORPro = () => {
    copyFile('../gitignore/IGORPro.gitignore','.gitignore');
};
module.exports.Idris = () => {
    copyFile('../gitignore/Idris.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ J ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Java = () => {
    copyFile('../gitignore/Java.gitignore','.gitignore');
};
module.exports.Jboss = () => {
    copyFile('../gitignore/Jboss.gitignore','.gitignore');
};
module.exports.Jekyll = () => {
    copyFile('../gitignore/Jekyll.gitignore','.gitignore');
};
module.exports.Joomla = () => {
    copyFile('../gitignore/Joomla.gitignore','.gitignore');
};
module.exports.Julia = () => {
    copyFile('../gitignore/Julia.gitignore','.gitignore');
};
// Global
module.exports.JDeveloper = () => {
    copyFile('../gitignore/Global/JDeveloper.gitignore','.gitignore');
};
module.exports.JEnv = () => {
    copyFile('../gitignore/Global/JEnv.gitignore','.gitignore');
};
module.exports.JetBrains = () => {
    copyFile('../gitignore/Global/JetBrains.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ K ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.KiCad = () => {
    copyFile('../gitignore/KiCad.gitignore','.gitignore');
};
module.exports.Kohana = () => {
    copyFile('../gitignore/Kohana.gitignore','.gitignore');
};
module.exports.Kotlin = () => {
    copyFile('../gitignore/Kotlin.gitignore','.gitignore');
};
// Global
module.exports.KDevelop4 = () => {
    copyFile('../gitignore/Global/KDevelop4.gitignore','.gitignore');
};
module.exports.Kate = () => {
    copyFile('../gitignore/Global/Kate.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ L ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.LabVIEW = () => {
    copyFile('../gitignore/LabVIEW.gitignore','.gitignore');
};
module.exports.Laravel = () => {
    copyFile('../gitignore/Laravel.gitignore','.gitignore');
};
module.exports.Leiningen = () => {
    copyFile('../gitignore/Leiningen.gitignore','.gitignore');
};
module.exports.LemonStand = () => {
    copyFile('../gitignore/LemonStand.gitignore','.gitignore');
};
module.exports.Lilypond = () => {
    copyFile('../gitignore/Lilypond.gitignore','.gitignore');
};
module.exports.Lithium = () => {
    copyFile('../gitignore/Lithium.gitignore','.gitignore');
};
module.exports.Lua = () => {
    copyFile('../gitignore/Lua.gitignore','.gitignore');
};
// Global
module.exports.Lazarus = () => {
    copyFile('../gitignore/Global/Lazarus.gitignore','.gitignore');
};
module.exports.LibreOffice = () => {
    copyFile('../gitignore/Global/LibreOffice.gitignore','.gitignore');
};
module.exports.Linux = () => {
    copyFile('../gitignore/Global/Linux.gitignore','.gitignore');
};
module.exports.LyX = () => {
    copyFile('../gitignore/Global/LyX.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ M ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Magento = () => {
    copyFile('../gitignore/Magento.gitignore','.gitignore');
};
module.exports.Maven = () => {
    copyFile('../gitignore/Maven.gitignore','.gitignore');
};
module.exports.Mercury = () => {
    copyFile('../gitignore/Mercury.gitignore','.gitignore');
};
module.exports.MetaProgrammingSystem = () => {
    copyFile('../gitignore/MetaProgrammingSystem.gitignore','.gitignore');
};
// Global
module.exports.Matlab = () => {
    copyFile('../gitignore/Global/Matlab.gitignore','.gitignore');
};
module.exports.Mercurial = () => {
    copyFile('../gitignore/Global/Mercurial.gitignore','.gitignore');
};
module.exports.MicrosoftOffice = () => {
    copyFile('../gitignore/Global/MicrosoftOffice.gitignore','.gitignore');
};
module.exports.ModelSim= () => {
    copyFile('../gitignore/Global/ModelSim.gitignore','.gitignore');
};
module.exports.Momentics = () => {
    copyFile('../gitignore/Global/Momentics.gitignore','.gitignore');
};
module.exports.MonoDevelop = () => {
    copyFile('../gitignore/Global/MonoDevelop.gitignore','.gitignore');
};
module.exports.macOS = () => {
    copyFile('../gitignore/Global/macOS.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ N ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Nanoc = () => {
    copyFile('../gitignore/Nanoc.gitignore','.gitignore');
};
module.exports.Nim = () => {
    copyFile('../gitignore/Nim.gitignore','.gitignore');
};
module.exports.Node = () => {
    copyFile('../gitignore/Node.gitignore','.gitignore');
};
// Global
module.exports.NetBeans = () => {
    copyFile('../gitignore/Global/NetBeans.gitignore','.gitignore');
};
module.exports.Ninja = () => {
    copyFile('../gitignore/Global/Ninja.gitignore','.gitignore');
};
module.exports.NotepadPP = () => {
    copyFile('../gitignore/Global/NotepadPP.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ O ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.OCaml = () => {
    copyFile('../gitignore/OCaml.gitignore','.gitignore');
};
module.exports.ObjectiveC = () => {
    copyFile('../gitignore/Objective-C.gitignore','.gitignore');
};
module.exports.Opa = () => {
    copyFile('../gitignore/Opa.gitignore','.gitignore');
};
module.exports.OpenCart = () => {
    copyFile('../gitignore/OpenCart.gitignore','.gitignore');
};
module.exports.OracleForms = () => {
    copyFile('../gitignore/OracleForms.gitignore','.gitignore');
};
// Global
module.exports.Otto = () => {
    copyFile('../gitignore/Global/Otto.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ P ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Packer = () => {
    copyFile('../gitignore/Packer.gitignore','.gitignore');
};
module.exports.Perl = () => {
    copyFile('../gitignore/Perl.gitignore','.gitignore');
};
module.exports.Perl6 = () => {
    copyFile('../gitignore/Perl6.gitignore','.gitignore');
};
module.exports.Phalcon = () => {
    copyFile('../gitignore/Phalcon.gitignore','.gitignore');
};
module.exports.PlayFramework = () => {
    copyFile('../gitignore/PlayFramework.gitignore','.gitignore');
};
module.exports.Plone = () => {
    copyFile('../gitignore/Plone.gitignore','.gitignore');
};
module.exports.Prestashop = () => {
    copyFile('../gitignore/Prestashop.gitignore','.gitignore');
};
module.exports.Processing = () => {
    copyFile('../gitignore/Processing.gitignore','.gitignore');
};
module.exports.PureScript = () => {
    copyFile('../gitignore/PureScript.gitignore','.gitignore');
};
module.exports.Python = () => {
    copyFile('../gitignore/Python.gitignore','.gitignore');
};
// Global
module.exports.Patch = () => {
    copyFile('../gitignore/Global/Patch.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ Q ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Qooxdoo = () => {
    copyFile('../gitignore/Qooxdoo.gitignore','.gitignore');
};
module.exports.Qt = () => {
    copyFile('../gitignore/Qt.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ R ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.r = () => {
    copyFile('../gitignore/R.gitignore','.gitignore');
};
module.exports.ros = () => {
    copyFile('../gitignore/ROS.gitignore','.gitignore');
};
module.exports.Rails = () => {
    copyFile('../gitignore/Rails.gitignore','.gitignore');
};
module.exports.RhodesRhomobile = () => {
    copyFile('../gitignore/RhodesRhomobile.gitignore','.gitignore');
};
module.exports.Ruby = () => {
    copyFile('../gitignore/Ruby.gitignore','.gitignore');
};
module.exports.Rust = () => {
    copyFile('../gitignore/Rust.gitignore','.gitignore');
};
// Global
module.exports.Redcar = () => {
    copyFile('../gitignore/Global/Redcar.gitignore','.gitignore');
};
module.exports.Redis = () => {
    copyFile('../gitignore/Global/Redis.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ S ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.SCons = () => {
    copyFile('../gitignore/SCons.gitignore','.gitignore');
};
module.exports.Sass = () => {
    copyFile('../gitignore/Sass.gitignore','.gitignore');
};
module.exports.Scala = () => {
    copyFile('../gitignore/Scala.gitignore','.gitignore');
};
module.exports.Scheme = () => {
    copyFile('../gitignore/Scheme.gitignore','.gitignore');
};
module.exports.Scrivener = () => {
    copyFile('../gitignore/Scrivener.gitignore','.gitignore');
};
module.exports.Sdcc = () => {
    copyFile('../gitignore/Sdcc.gitignore','.gitignore');
};
module.exports.SeamGen = () => {
    copyFile('../gitignore/SeamGen.gitignore','.gitignore');
};
module.exports.SketchUp = () => {
    copyFile('../gitignore/SketchUp.gitignore','.gitignore');
};
module.exports.Smalltalk = () => {
    copyFile('../gitignore/Smalltalk.gitignore','.gitignore');
};
module.exports.Stella = () => {
    copyFile('../gitignore/Stella.gitignore','.gitignore');
};
module.exports.SugarCRM = () => {
    copyFile('../gitignore/SugarCRM.gitignore','.gitignore');
};
module.exports.Swift = () => {
    copyFile('../gitignore/Swift.gitignore','.gitignore');
};
module.exports.Symfony = () => {
    copyFile('../gitignore/Symfony.gitignore','.gitignore');
};
module.exports.SymphonyCMS = () => {
    copyFile('../gitignore/SymphonyCMS.gitignore','.gitignore');
};
// Global
module.exports.sbt = () => {
    copyFile('../gitignore/Global/sbt.gitignore','.gitignore');
};
module.exports.svn = () => {
    copyFile('../gitignore/Global/svn.gitignore','.gitignore');
};
module.exports.SlickEdit = () => {
    copyFile('../gitignore/Global/SlickEdit.gitignore','.gitignore');
};
module.exports.Stata = () => {
    copyFile('../gitignore/Global/Stata.gitignore','.gitignore');
};
module.exports.SublimeText = () => {
    copyFile('../gitignore/Global/SublimeText.gitignore','.gitignore');
};
module.exports.SynopsysVCS = () => {
    copyFile('../gitignore/Global/SynopsysVCS.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ T ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.TeX = () => {
    copyFile('../gitignore/TeX.gitignore','.gitignore');
};
module.exports.Terraform = () => {
    copyFile('../gitignore/Terraform.gitignore','.gitignore');
};
module.exports.Textpattern = () => {
    copyFile('../gitignore/Textpattern.gitignore','.gitignore');
};
module.exports.TurboGears2 = () => {
    copyFile('../gitignore/TurboGears2.gitignore','.gitignore');
};
module.exports.Typo3 = () => {
    copyFile('../gitignore/Typo3.gitignore','.gitignore');
};
// Global
module.exports.Tags = () => {
    copyFile('../gitignore/Global/Tags.gitignore','.gitignore');
};
module.exports.TextMate = () => {
    copyFile('../gitignore/Global/TextMate.gitignore','.gitignore');
};
module.exports.TortoiseGit = () => {
    copyFile('../gitignore/Global/TortoiseGit.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ U ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Umbraco = () => {
    copyFile('../gitignore/Umbraco.gitignore','.gitignore');
};
module.exports.Unity = () => {
    copyFile('../gitignore/Unity.gitignore','.gitignore');
};
module.exports.UnrealEngine = () => {
    copyFile('../gitignore/UnrealEngine.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ V ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.vvvv = () => {
    copyFile('../gitignore/VVVV.gitignore','.gitignore');
};
module.exports.VisualStudio = () => {
    copyFile('../gitignore/VisualStudio.gitignore','.gitignore');
};
// Global
module.exports.Vagrant = () => {
    copyFile('../gitignore/Global/Vagrant.gitignore','.gitignore');
};
module.exports.Vim = () => {
    copyFile('../gitignore/Global/Vim.gitignore','.gitignore');
};
module.exports.VirtualEnv = () => {
    copyFile('../gitignore/Global/VirtualEnv.gitignore','.gitignore');
};
module.exports.VisualStudioCode = () => {
    copyFile('../gitignore/Global/VisualStudioCode.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ W ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Waf = () => {
    copyFile('../gitignore/Waf.gitignore','.gitignore');
};
module.exports.WordPress = () => {
    copyFile('../gitignore/WordPress.gitignore','.gitignore');
};
// Global
module.exports.WebMethods = () => {
    copyFile('../gitignore/Global/WebMethods.gitignore','.gitignore');
};
module.exports.Windows = () => {
    copyFile('../gitignore/Global/Windows.gitignore','.gitignore');
};
// ~~~~~~~~~~~~~~~~~~~~~~ X ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Xojo = () => {
    copyFile('../gitignore/Xojo.gitignore','.gitignore');
};
// Global
module.exports.Xcode = () => {
    copyFile('../gitignore/Global/Xcode.gitignore','.gitignore');
};
module.exports.XilinxISE = () => {
    copyFile('../gitignore/Global/Windows.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ Y ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.Yeoman = () => {
    copyFile('../gitignore/Yeoman.gitignore','.gitignore');
};
module.exports.Yii = () => {
    copyFile('../gitignore/Yii.gitignore','.gitignore');
};

// ~~~~~~~~~~~~~~~~~~~~~~ Z ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
module.exports.ZendFramework = () => {
    copyFile('../gitignore/ZendFramework.gitignore','.gitignore');
};
module.exports.Zephir = () => {
    copyFile('../gitignore/Zephir.gitignore','.gitignore');
};
