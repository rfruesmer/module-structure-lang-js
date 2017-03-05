import {suite, test} from "mocha-typescript";
import {expect, assert} from "chai";

const path = require("path");

const JavaScriptDependencyProvider = require("../../src/javascript-dependency-provider");


@suite class JavascriptDependencyProviderTest {

    private rootPath = "";
    private javaScriptFile = "";
    private actualDependencies = [];
    private expectedDependencies;


    @test "provides dependencies from es6 imports"() {
        this.givenRootPath();
        this.givenJavaScriptFile();
        this.whenGettingDependencies();
        this.thenDependenciesShouldMatchExpectedDependencies();
    }

    private givenRootPath() {
        this.rootPath = path.join(__dirname, "..", "resources");
    }

    private givenJavaScriptFile() {
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
    }

    private whenGettingDependencies() {
        const regEx = new RegExp("\\\\", "g");

        let javaScriptDependencyProvider = new JavaScriptDependencyProvider();
        this.actualDependencies = javaScriptDependencyProvider.getDependencies(this.javaScriptFile, this.rootPath);
        this.actualDependencies = this.actualDependencies.map(dependency => dependency.replace(regEx, "/"));
    }

    private thenDependenciesShouldMatchExpectedDependencies() {
        assert.deepEqual(this.actualDependencies, this.expectedDependencies);
    }
}
