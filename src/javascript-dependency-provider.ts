import path = require("path");

const dependencyTree = require("dependency-tree");


export class JavaScriptDepencencyProvider {
    private visited = {};

    public getDependencies(modulePath: string, rootDir: string): Array<string> {
        let tree = dependencyTree({directory: rootDir, filename: modulePath, visited: this.visited});
        let key = Object.keys(tree)[0];
        let imports = Object.keys(tree[key]);
        let moduleDirectory = path.dirname(modulePath);

        return imports.map(dependencyPath => {
            return path.relative(moduleDirectory, dependencyPath);
        });
    }
}

module.exports = function() {
    return new JavaScriptDepencencyProvider();
};
