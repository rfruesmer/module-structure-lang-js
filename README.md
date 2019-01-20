# module-structure-lang-js

<a href="https://www.npmjs.com/package/module-structure-lang-js"><img alt="npm Version" src="https://img.shields.io/npm/v/module-structure-lang-js.svg"></a>
<a href="https://travis-ci.org/rfruesmer/module-structure-lang-js"><img alt="Build Status" src="https://travis-ci.org/rfruesmer/module-structure-lang-js.svg?branch=master"></a>
<a href="https://codecov.io/gh/rfruesmer/module-structure-lang-js"><img alt="Coverage Status" src="https://codecov.io/gh/rfruesmer/module-structure-lang-js/master.svg"></a>


JavaScript language provider for <a href="https://www.npmjs.com/package/module-structure">module-structure</a>. 

See <a href="https://www.npmjs.com/package/module-structure">module-structure</a> for full documentation.

## Installation

This  extension is optional and not bundled with module-structure, therefore requires separate installation. Local and global installation is supported.

After installation of this extension, it is automatically detected by module-structure and used for analyzing JavaScript dependencies.

Example:

<pre><code>$ npm i -g module-structure
$ npm i -g module-structure-lang-js
</code></pre>

## Config
To set custom settings, create a **.module-structure.js** in your root folder, like .eslintrc.js or babel.config.js.
Add the config parameter under the key "module-structure-lang-js"

Example: 
<pre><code>
module.exports = {
 'module-structure-lang-js': {
   webpackConfig: "path/to/your/project/webpack/config.js
 }
};
</code></pre>

Config parameter:
<table align="center">
    <tr>
        <td>webpackConfig</td>
        <td align="right">
            Use the webpack config to resolve webpack aliases.
        </td>
    </tr>
</table>

## Credits

<table align="center">
    <tr>
        <td>dependency-tree</td>
        <td align="right">
            <a href="https://www.npmjs.com/package/dependency-tree/">homepage</a>
            &nbsp;-&nbsp;  
            <a href="http://spdx.org/licenses/MIT">show license</a>
        </td>
    </tr>
</table>

## License

MIT
