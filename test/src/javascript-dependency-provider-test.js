"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_typescript_1 = require("mocha-typescript");
var chai_1 = require("chai");
var path = require("path");
var JavaScriptDependencyProvider = require("../../src/javascript-dependency-provider");
var JavascriptDependencyProviderTest = (function () {
    function JavascriptDependencyProviderTest() {
        this.rootPath = "";
        this.javaScriptFile = "";
        this.actualDependencies = [];
    }
    JavascriptDependencyProviderTest.prototype["provides dependencies from es6 imports"] = function () {
        this.givenRootPath();
        this.givenJavaScriptFile();
        this.whenGettingDependencies();
        this.thenDependenciesShouldMatchExpectedDependencies();
    };
    JavascriptDependencyProviderTest.prototype.givenRootPath = function () {
        this.rootPath = path.join(__dirname, "..", "resources");
    };
    JavascriptDependencyProviderTest.prototype.givenJavaScriptFile = function () {
        this.javaScriptFile = path.join(this.rootPath, "sample.js");
        this.expectedDependencies = [
            "package-a/module-a.js",
            "package-a/module-b.js",
            "package-a/module-c.js",
            "package-b/module-d.js",
            "package-b/module-e.js",
            "package-b/module-f.js",
            "package-b/package-b2/module-g.js",
            "package-b/package-b2/module-h.js",
            "package-b/package-b2/module-i.js",
            "package-b/package-b2/module-j.js"
        ];
    };
    JavascriptDependencyProviderTest.prototype.whenGettingDependencies = function () {
        var regEx = new RegExp("\\\\", "g");
        var javaScriptDependencyProvider = new JavaScriptDependencyProvider();
        this.actualDependencies = javaScriptDependencyProvider.getDependencies(this.javaScriptFile, this.rootPath);
        this.actualDependencies = this.actualDependencies.map(function (dependency) { return dependency.replace(regEx, "/"); });
    };
    JavascriptDependencyProviderTest.prototype.thenDependenciesShouldMatchExpectedDependencies = function () {
        chai_1.assert.deepEqual(this.actualDependencies, this.expectedDependencies);
    };
    return JavascriptDependencyProviderTest;
}());
__decorate([
    mocha_typescript_1.test
], JavascriptDependencyProviderTest.prototype, "provides dependencies from es6 imports", null);
JavascriptDependencyProviderTest = __decorate([
    mocha_typescript_1.suite
], JavascriptDependencyProviderTest);
//# sourceMappingURL=javascript-dependency-provider-test.js.map