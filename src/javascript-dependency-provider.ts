import path = require("path");
import fs = require("fs");
const dependencyTree = require("dependency-tree");


export class JavaScriptDepencencyProvider {
    private visited = {};
    private readonly config;

    constructor() {
        this.config = JavaScriptDepencencyProvider.loadConfig();
        console.warn(this.config);
    }

    private static loadConfig(): any {
        const configPath = process.cwd() + "/.module-structure.js";
        const config = fs.existsSync(configPath) ? require(configPath) : require("./defaultConfig");
        return config["module-structure-lang-js"];
    }

    public getDependencies(modulePath: string, rootDir: string): Array<string> {
        const tree = dependencyTree({directory: rootDir, filename: modulePath, visited: this.visited, webpackConfig: this.config.webpackConfig});
        const key = Object.keys(tree)[0];
        const imports = Object.keys(tree[key]);
        const moduleDirectory = path.dirname(modulePath);
        return imports.map(dependencyPath => {
            return path.relative(moduleDirectory, dependencyPath);
        });
    }
}

module.exports = function() {
    return new JavaScriptDepencencyProvider();
};
