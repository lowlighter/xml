# 🍱 Libraries

[![JSR Scope](https://jsr.io/badges/@libs)](https://jsr.io/@libs)

This is a collection of carefully crafted _TypeScript_ libraries. These try to be minimal, unbloated and convenient.

Most of them are written with [deno](https://deno.com) in mind, but most packages in this repository honors [web standards](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards) which means they can be used with other runtimes such
as [Node.js](https://nodejs.org), [bun](https://bun.sh) and even browsers.

> [!TIP]\
> Click on a:
>
> - _JSR badge_ to access the package's page on [jsr.io](https://jsr.io)
> - _Playground badge_ to access the package's interactive playground
> - _Coverage badge_ to access the package's coverage repor.

<table><!-- Generated by deno_readme.ts, do not edit manually --><tr><td colspan="3"></td></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/bundle"><code>📦 @libs/bundle</code></a></h2>Code bundlers, formatters, minifiers and others tools.</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/bundle"><img src="https://jsr.io/badges/@libs/bundle"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"></th>
    <td rowspan="3"><ul data-for="bundle">
  <li>Lint, minify, license CSS code and check features compatibility against MDN data for each browser</li>
  <li>Bundle, minify, anonymize local file paths and license TypeScript code</li>
  <li>Compile Rust projects to Web assembly, hot-patch source in base64 and minify output</li>
  <li><a href="#-cli-utilities">CLI utilities</a></li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-bundle.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/bundle"><img src="https://libs-coverage.lecoq.io/bundle/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/crypto"><code>🧮 @libs/crypto</code></a></h2>Features based upon Web Crypto APIs</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/crypto"><img src="https://jsr.io/badges/@libs/crypto"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="crypto">
  <li>Encrypt and decrypt data using a seed-salt derived private key</li>
  <li>Generate time-based OTP secret key and verify tokens validity</li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-crypto.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/crypto"><img src="https://libs-coverage.lecoq.io/crypto/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/diff"><code>➕ @libs/diff</code></a></h2>Diff (patience algorithm)</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/diff"><img src="https://jsr.io/badges/@libs/diff"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="diff">
  <li>Compute unified patch between two string</li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-diff.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/diff"><img src="https://libs-coverage.lecoq.io/diff/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/logger"><code>📰 @libs/logger</code></a></h2>Simple logger</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/logger"><img src="https://jsr.io/badges/@libs/logger"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="logger">
  <li>
    Simple logger library with configurable log level
    <ul>
      <li>Support date, time and delta stamps</li>
      <li>Support caller info (file, name, line) using internal V8's <code>Error.prepareStackTrace</code> API</li>
    </ul>
  </li>
  <li>Automatically reads <code>LOG_LEVEL</code> environment variable (if available)</li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-logger.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/logger"><img src="https://libs-coverage.lecoq.io/logger/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/qrcode"><code>🔳 @libs/qrcode</code></a></h2>Pure TypeScript QRcode generator with no dependencies.</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/qrcode"><img src="https://jsr.io/badges/@libs/qrcode"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="qrcode">
  <li>Generate QR codes without external dependencies</li>
  <li>Support console, array and SVG output (with customizable colors)</li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-qrcode.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/qrcode"><img src="https://libs-coverage.lecoq.io/qrcode/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/reactive"><code>🎯 @libs/reactive</code></a></h2>Reactive utilities for observable objects.</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/reactive"><img src="https://jsr.io/badges/@libs/reactive"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="reactive">
  <li>Create observable contexts to track get, set, delete and call operations</li>
  <li>Support inherited contexts</li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-reactive.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/reactive"><img src="https://libs-coverage.lecoq.io/reactive/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/testing"><code>🧪 @libs/testing</code></a></h2>Testing utilities for cross-platform testing on Deno, Node.js and Bun.</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/testing"><img src="https://jsr.io/badges/@libs/testing"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"></th>
    <td rowspan="3"><ul data-for="testing">
  <li>
    Cross-runtime testing framework
    <ul>
      <li>Support <a href="https://deno.com">deno</a> natively</li>
      <li>Support <a href="https://nodejs.org">Node.js</a> through <code>npx tsx --test</code></li>
      <li>Support <a href="https://bun.sh">bun</a> through <code>bun test</code></li>
      <li><i>Note: although tests are run on multiple runtimes, this library <b>must</b> be run on deno</i></li>
    </ul>
  </li>
  <li>Automatically skip test cases when runtime is not available on current platform</li>
</ul></td>
  </tr>
  <tr><th></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/testing"><img src="https://libs-coverage.lecoq.io/testing/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/typing"><code>🧰 @libs/typing</code></a></h2>Utility types.</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/typing"><img src="https://jsr.io/badges/@libs/typing"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="typing">
  <li>Utility types such as <code>Promisable</code>, <code>Nullable</code>, <code>MapKey</code>, <code>MapValue</code>, <code>SetValue</code>, etc.</li>
</ul></td>
  </tr>
  <tr><th></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/typing"><img src="https://libs-coverage.lecoq.io/typing/badge.svg"></a></th></tr><tr><th colspan="3"><h2><a href="https://jsr.io/@libs/xml"><code>📃 @libs/xml</code></a></h2>XML parser/stringifier with no dependencies.</th></tr>
  <tr><th colspan="2">Metadata and compatibility</th><th>Features</th></tr>
  <tr><td colspan="3"></td></tr>
  <tr>
    <th><a href="https://jsr.io/@libs/xml"><img src="https://jsr.io/badges/@libs/xml"></a></th>
    <th rowspan="3"><img height="18px" src="https://jsr.io/logos/deno.svg"><img height="18px" src="https://jsr.io/logos/node.svg"><img height="18px" src="https://jsr.io/logos/bun.svg"><img height="18px" src="https://jsr.io/logos/cloudflare-workers.svg"><img height="18px" src="https://jsr.io/logos/browsers.svg"></th>
    <td rowspan="3"><ul data-for="xml">
  <li>
    Parse XML to JavaScript object
    <ul>
      <li>Support cleaning options to remove attributes, comments, XML doctype and processing instructions from output</li>
      <li>Support flatten options to flatten node content when only attributes, text or nothing is present</li>
      <li>Support reviving options to trim text, replace XML entities, revive booleans and numbers</li>
      <li>Also support custom reviving function</li>
    </ul>
  </li>
  <li>
    Stringify JavaScript object to XML
    <ul>
      <li>Support formatting options to configure indentation and text break lines</li>
      <li>Support replacing options to replace XML entities</li>
      <li>Also support custom replacing function</li>
    </ul>
  </li>
</ul></td>
  </tr>
  <tr><th><a href="https://libs-xml.deno.dev"><img src="https://img.shields.io/badge/Playground--black?style=flat&logo=deno&labelColor=black"></a></th></tr>
  <tr><th><a href="https://libs-coverage.lecoq.io/xml"><img src="https://libs-coverage.lecoq.io/xml/badge.svg"></a></th></tr></table>

## 🧑‍💻 Cli utilities

A set of useful CLI scripts are also provided. Please note that these can only be run on deno runtime.

### TypeScript code coverage enhancer

Enhance coverage reports generated with `deno coverage` by adding syntax highlighting and better styling thanks to [matcha.css](https://github.com/lowlighter/matcha).

```sh
deno run jsr:@libs/bundle/ts/cli/coverage --help
```

### CSS formatter

Format CSS code similarly to `prettier` or `deno fmt`. Can be used with `--check` to validate that CSS code is correctly formatted.

```sh
deno run jsr:@libs/bundle/css/cli/fmt --help
```

### CSS features compatibility checker

Print compatibility report for CSS features against MDN data for selected browsers.

```sh
deno run jsr:@libs/bundle/css/cli/check --help
```

### Web assembly builder

Compile a rust project to Web assembly and minify output.

```sh
deno run jsr:@libs/bundle/wasm/cli/build --help
```

## 📜 License

This work is licensed under the [MIT License](./LICENSE).

If you include a significant part of it in your own project, _**you should keep the license notice**_ with it, including the mention of the additional original authors if any.

> [!IMPORTANT]\
> Love these bytes ? Consider [`💝 sponsoring me`](https://github.com/sponsors/lowlighter), even one-time contributions are greatly appreciated !
