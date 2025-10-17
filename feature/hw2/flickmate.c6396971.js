// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"2aZ6o":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "17677af8c6396971";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8JWvp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _movieListView = require("./views/movie-list-view");
var _movieListViewDefault = parcelHelpers.interopDefault(_movieListView);
var _movieModel = require("./models/movie-model");
var _movieModelDefault = parcelHelpers.interopDefault(_movieModel);
/**
 * Класс главной страницы приложения.
 * Отвечает за инициализацию и рендер списка фильмов.
 */ class IndexPage {
    /** @type {MovieListView} Список фильмов */ movieListView;
    constructor(){
        // Получаем все фильмы из модели
        const movies = (0, _movieModelDefault.default).getAll();
        // Создаём View для списка фильмов
        this.movieListView = new (0, _movieListViewDefault.default)("#movie-list-container", movies);
    }
    /** Рендерит главную страницу */ render() {
        this.movieListView.render();
    }
}
/**
 * Инициализация приложения после полной загрузки DOM
 * - чтобы все селекторы уже существовали
 * - window.indexPage даёт доступ к корневому объекту в консоли браузера (для отладки)
 */ document.addEventListener("DOMContentLoaded", ()=>{
    window.indexPage = new IndexPage();
    window.indexPage.render();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./models/movie-model":"kLR6K","./views/movie-list-view":"dGia5"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kLR6K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moviesJs = require("../../data/movies.js");
var _moviesJsDefault = parcelHelpers.interopDefault(_moviesJs);
class MovieModel {
    /**
     * Возвращает все фильмы
     * @returns {Array<Object>} Массив объектов фильмов
     */ static getAll() {
        return 0, _moviesJsDefault.default;
    }
    /**
     * Возвращает фильм по его идентификатору
     * @param {number} id - Идентификатор фильма
     * @returns {Object|undefined} Объект фильма или undefined, если не найден
     */ static getById(id) {
        return (0, _moviesJsDefault.default).find((movie)=>movie.id === id);
    }
}
exports.default = MovieModel;

},{"../../data/movies.js":"4knV3","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4knV3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    {
        "id": 1,
        "title": "\u0410\u0432\u0430\u0442\u0430\u0440",
        "subtitle": "Avatar, 2009",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4adf61aa-3cb7-4381-9245-523971e5b4c8/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2009"
            }
        ]
    },
    {
        "id": 2,
        "title": "\u0418\u043D\u0442\u0435\u0440\u0441\u0442\u0435\u043B\u043B\u0430\u0440",
        "subtitle": "Interstellar, 2014",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2014"
            },
            {
                name: "\u0416\u0430\u043D\u0440",
                value: "\u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430, \u0434\u0440\u0430\u043C\u0430, \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F"
            },
            {
                name: "\u0421\u043B\u043E\u0433\u0430\u043D",
                value: "\xab\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u0442\u0432\u0430 \u0441\u0442\u0430\u043D\u0435\u0442 \u0432\u0435\u043B\u0438\u0447\u0430\u0439\u0448\u0438\u043C\xbb"
            },
            {
                name: "\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440",
                value: "\u041A\u0440\u0438\u0441\u0442\u043E\u0444\u0435\u0440 \u041D\u043E\u043B\u0430\u043D"
            },
            {
                name: "\u041F\u0440\u043E\u0434\u044E\u0441\u0435\u0440",
                value: "\u041A\u0440\u0438\u0441\u0442\u043E\u0444\u0435\u0440 \u041D\u043E\u043B\u0430\u043D, \u041B\u0438\u043D\u0434\u0430 \u041E\u0431\u0441\u0442, \u042D\u043C\u043C\u0430 \u0422\u043E\u043C\u0430\u0441"
            },
            {
                name: "\u0411\u044E\u0434\u0436\u0435\u0442",
                value: "$165 000 000"
            },
            {
                name: "\u0412\u0440\u0435\u043C\u044F",
                value: "2 \u0447 49 \u043C\u0438\u043D"
            }
        ]
    },
    {
        "id": 3,
        "title": "\u041D\u0430\u0447\u0430\u043B\u043E",
        "subtitle": "Inception, 2010",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2010"
            }
        ]
    },
    {
        "id": 4,
        "title": "\u041C\u0441\u0442\u0438\u0442\u0435\u043B\u0438: \u0412\u043E\u0439\u043D\u0430 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u0438",
        "subtitle": "Avengers: Infinity War, 2018",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/af92d310-4ae5-4daa-b42c-5bcc380c2e6e/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2018"
            }
        ]
    },
    {
        "id": 5,
        "title": "\u041C\u0430\u0442\u0440\u0438\u0446\u0430",
        "subtitle": "The Matrix, 1999",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/cf1970bc-3f08-4e0e-a095-2fb57c3aa7c6/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "1999"
            }
        ]
    },
    {
        "id": 6,
        "title": "\u041C\u0441\u0442\u0438\u0442\u0435\u043B\u0438: \u0424\u0438\u043D\u0430\u043B",
        "subtitle": "Avengers: Endgame, 2019",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ae22f153-9715-41bb-adb4-f648b3e16092/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ae22f153-9715-41bb-adb4-f648b3e16092/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2019"
            }
        ]
    },
    {
        "id": 7,
        "title": "\u0414\u044E\u043D\u0430",
        "subtitle": "Dune: Part One, 2021",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/9eb762d6-4cdd-464f-9937-aebf30067acc/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2021"
            }
        ]
    },
    {
        "id": 8,
        "title": "\u041F\u044F\u0442\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442",
        "subtitle": "The Fifth Element, 1997",
        "details": "\u0424\u0440\u0430\u043D\u0446\u0438\u044F \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "1997"
            }
        ]
    },
    {
        "id": 9,
        "title": "\u0421\u0442\u0440\u0430\u0436\u0438 \u0413\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0438",
        "subtitle": "Guardians of the Galaxy, 2014",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2e6ab20b-7cf1-49e7-b465-bd5a71c13fa3/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2e6ab20b-7cf1-49e7-b465-bd5a71c13fa3/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2014"
            }
        ]
    },
    {
        "id": 10,
        "title": "\u041A\u0440\u0430\u043A\u0435\u043D",
        "subtitle": "2025",
        "details": "\u0420\u043E\u0441\u0441\u0438\u044F \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/b722ab4d-497b-4a62-b243-95ca989401ff/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/10809116/b722ab4d-497b-4a62-b243-95ca989401ff/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2025"
            }
        ]
    },
    {
        "id": 11,
        "title": "\u0422\u0435\u043C\u043D\u044B\u0439 \u0440\u044B\u0446\u0430\u0440\u044C",
        "subtitle": "The Dark Knight, 2008",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0fa5bf50-d5ad-446f-a599-b26d070c8b99/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2008"
            }
        ]
    },
    {
        "id": 12,
        "title": "\u0414\u043E\u043A\u0442\u043E\u0440 \u0421\u0442\u0440\u044D\u043D\u0434\u0436",
        "subtitle": "Doctor Strange, 2016",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/bb966b79-5b10-485d-88d7-fb6aeb79b185/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/bb966b79-5b10-485d-88d7-fb6aeb79b185/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2016"
            }
        ]
    },
    {
        "id": 13,
        "title": "\u041C\u0441\u0442\u0438\u0442\u0435\u043B\u0438",
        "subtitle": "The Avengers, 2012",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1898899/972b7f43-9677-40ce-a9bc-02a88ad3919d/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2012"
            }
        ]
    },
    {
        "id": 14,
        "title": "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u0442\u043E\u0440 2: \u0421\u0443\u0434\u043D\u044B\u0439 \u0434\u0435\u043D\u044C",
        "subtitle": "Terminator 2: Judgment Day, 1991",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/2dd14742-f241-42ca-9db4-331e3a483c50/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/2dd14742-f241-42ca-9db4-331e3a483c50/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "1991"
            }
        ]
    },
    {
        "id": 15,
        "title": "\u0416\u0435\u043B\u0435\u0437\u043D\u044B\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A",
        "subtitle": "Iron Man, 2008",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/c8e2f069-15f1-4803-95c0-aba858fec360/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/c8e2f069-15f1-4803-95c0-aba858fec360/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2008"
            }
        ]
    },
    {
        "id": 16,
        "title": "\u041D\u0430\u0437\u0430\u0434 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435",
        "subtitle": "Back to the Future, 1985",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "1985"
            }
        ]
    },
    {
        "id": 17,
        "title": "\u041C\u0430\u0440\u0441\u0438\u0430\u043D\u0438\u043D",
        "subtitle": "The Martian, 2015",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/6f631486-e947-487d-94d6-41c2b5a8f5a0/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2015"
            }
        ]
    },
    {
        "id": 18,
        "title": "\u041A\u0438\u0431\u0435\u0440\u0434\u0435\u0440\u0435\u0432\u043D\u044F",
        "subtitle": "2023",
        "details": "\u0420\u043E\u0441\u0441\u0438\u044F \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/70c75cf3-f456-4474-a900-9a38c1bb2987/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/70c75cf3-f456-4474-a900-9a38c1bb2987/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2023"
            }
        ]
    },
    {
        "id": 19,
        "title": "\u0413\u043B\u0430\u0432\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0439",
        "subtitle": "Free Guy, 2021",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/db4fbef1-466a-4dec-9b7a-d4f13eb45738/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/db4fbef1-466a-4dec-9b7a-d4f13eb45738/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2021"
            }
        ]
    },
    {
        "id": 20,
        "title": "\u041F\u0435\u0440\u0432\u043E\u043C\u0443 \u0438\u0433\u0440\u043E\u043A\u0443 \u043F\u0440\u0438\u0433\u043E\u0442\u043E\u0432\u0438\u0442\u044C\u0441\u044F",
        "subtitle": "Ready Player One, 2018",
        "details": "\u0421\u0428\u0410 \u2022 \u0444\u0430\u043D\u0442\u0430\u0441\u0442\u0438\u043A\u0430",
        "img": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ae82f4b-fd6a-46b5-b5ba-897106eb1eae/136x204",
        "imgBig": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ae82f4b-fd6a-46b5-b5ba-897106eb1eae/600x900",
        "link": "#",
        "metadata": [
            {
                name: "\u0413\u043E\u0434 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                value: "2018"
            }
        ]
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dGia5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _baseView = require("./base-view");
var _baseViewDefault = parcelHelpers.interopDefault(_baseView);
var _movieModalView = require("./movie-modal-view");
var _movieModel = require("../models/movie-model");
var _movieModelDefault = parcelHelpers.interopDefault(_movieModel);
class MovieListView extends (0, _baseViewDefault.default) {
    /** @type {MovieModalView} Экземпляр модального окна */ #movieModal;
    /**
     * @param {string} selector - CSS-селектор контейнера списка фильмов
     * @param {Array<Object>} initialData - Массив объектов фильмов
     */ constructor(selector, initialData = []){
        super(selector, initialData);
        this.#movieModal = (0, _movieModalView.createMovieModal)();
    }
    /**
     * Генерирует HTML для одной карточки фильма
     * @param {Object} movie - Объект фильма
     * @returns {string} HTML-код карточки
     */ #createItem({ id, link, title, subtitle, img, details }) {
        return `
            <article class="movie-item">
                <a href="${link}" data-modal-open data-id="${id}">
                    <div class="movie-item-poster">
                        <img src="${img}" alt="${title}" loading="lazy" />
                    </div>
                    <div class="movie-item-desc">
                        <h2 class="truncate">${title}</h2>
                        <h3 class="truncate">${subtitle}</h3>
                        <p class="truncate">${details}</p>
                    </div>
                </a>
            </article>                    
        `;
    }
    /**
     * Генерирует HTML для всего списка фильмов
     * @returns {string} HTML-код списка фильмов
     */ #createList() {
        return `
            <section class="movie-list">
                ${this._data.map(this.#createItem.bind(this)).join("")}
            </section>
        `;
    }
    /** Метод рендера HTML (обязательный для BaseView) */ _createInnerHTML() {
        return this.#createList();
    }
    /**
     * Обработчик клика на карточке фильма.
     * Делегирование: ищет ближайший элемент с data-modal-open
     * и открывает соответствующую модалку.
     * @param {MouseEvent} event
     */ #handleModal = (event)=>{
        event.preventDefault();
        // Используем event.target.closest('[data-modal-open]')
        // чтобы найти ближайший элемент с атрибутом data-modal-open
        // даже если кликнули по вложенному тегу внутри карточки
        const movieItem = event.target.closest("[data-modal-open]");
        if (movieItem) {
            const movieId = +movieItem.dataset.id;
            const movie = (0, _movieModelDefault.default).getById(movieId);
            this.#movieModal.open(movie);
        }
    };
    /** Убирает обработчики событий перед перерендером */ _detachEvents() {
        this._$el.removeEventListener("click", this.#handleModal);
    }
    /** Добавляет обработчики событий после рендера */ _attachEvents() {
        this._$el.addEventListener("click", this.#handleModal);
    }
}
exports.default = MovieListView;

},{"./base-view":"b07nk","../models/movie-model":"kLR6K","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./movie-modal-view":"gXOIY"}],"b07nk":[function(require,module,exports,__globalThis) {
/**
 * Базовый класс для всех View-компонентов.
 * Содержит общие методы рендера и управления событиями.
 * 
 * Примечание: методы _createInnerHTML, _attachEvents и _detachEvents
 * должны быть реализованы в наследниках, иначе будет ошибка.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class BaseView {
    /** @type {HTMLElement} Элемент контейнера, куда рендерится контент */ _$el;
    /** @type {any} Данные для отображения в компоненте */ _data;
    /**
     * @param {string} selector - CSS-селектор контейнера в DOM
     * @param {any} initialData - Начальные данные для компонента
     */ constructor(selector, initialData = {}){
        this._$el = document.querySelector(selector);
        this._data = initialData;
    }
    /**
     * Метод должен вернуть HTML-контент компонента.
     * Должен быть реализован в наследнике.
     * @returns {string} HTML-код компонента
     */ _createInnerHTML() {
        throw new Error("Method _createInnerHTML() must be implemented");
    }
    /**
     * Метод для удаления событий перед перерендером.
     * Должен быть реализован в наследнике.
     */ _detachEvents() {
        throw new Error("Method _detachEvents() must be implemented");
    }
    /**
     * Метод для установки событий после рендера.
     * Должен быть реализован в наследнике.
     */ _attachEvents() {
        throw new Error("Method _attachEvents() must be implemented");
    }
    /**
     * Основной метод рендера компонента.
     * Сначала удаляет старые события, затем создаёт HTML,
     * затем вешает новые события.
     */ render() {
        this._detachEvents();
        const innerHTML = this._createInnerHTML();
        this._$el.innerHTML = innerHTML;
        this._attachEvents();
    }
}
exports.default = BaseView;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gXOIY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMovieModal", ()=>createMovieModal);
var _baseView = require("./base-view");
var _baseViewDefault = parcelHelpers.interopDefault(_baseView);
class MovieModalView extends (0, _baseViewDefault.default) {
    /**
     * @param {string} selector - CSS-селектор контейнера модалки
     * @param {Object} initialData - Начальные данные для модалки
     */ constructor(selector, initialData = {}){
        super(selector, initialData);
    }
    /**
     * Открывает модалку с переданными данными фильма
     * @param {Object} movie - Объект фильма
     */ open(movie) {
        this._data = movie;
        this.render();
        this._$el.showModal(); // встроенный метод HTML-элемента <dialog>
    }
    /** Закрывает модалку */ close() {
        this._$el.close();
    }
    /** 
     * Генерирует HTML для списка метаданных фильма
     * @returns {string} HTML-строка с метаданными
     */ #createMetadataList() {
        if (!this._data.metadata || !this._data.metadata.length) return "\u041D\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438";
        return `
            <ul>
                ${this._data.metadata.map(({ name, value })=>`
                    <li>
                        <span>${name}:</span><span>${value}</span>
                    </li>
                `).join("")}
            </ul>
        `;
    }
    /** Генерирует полный HTML модалки */ #createModal() {
        return `
            <div class="movie-modal-wrapper">
                <header class="movie-modal-header">
                    <h3>\u{412}\u{44B}\u{431}\u{43E}\u{440} \u{444}\u{438}\u{43B}\u{44C}\u{43C}\u{430}</h3>
                    <button class="movie-modal-close-btn" data-modal-close>\xd7</button>
                </header>
                <section class="movie-modal-body">
                    <div class="movie-modal-poster">
                        <img src="${this._data.imgBig}" alt="${this._data.title}" loading="lazy" />
                    </div>
                    <div class="movie-modal-content">
                        <div>
                            <h2 id="movie-modal-title">${this._data.title}</h2>
                            ${this.#createMetadataList()}
                        </div>
                        <menu>
                            <button class="movie-modal-settings-btn secondary-btn">\u{41D}\u{430}\u{441}\u{442}\u{440}\u{43E}\u{439}\u{43A}\u{438} \u{441}\u{435}\u{430}\u{43D}\u{441}\u{430}</button>
                            <a class="movie-modal-watch-btn primary-btn" href="${this._data.link}">\u{421}\u{43C}\u{43E}\u{442}\u{440}\u{435}\u{442}\u{44C} \u{432}\u{43C}\u{435}\u{441}\u{442}\u{435} \u{2192}</a>
                        </menu>
                    </div>
                </section>
            </div>
        `;
    }
    /** Метод для рендера HTML (обязательный для BaseView) */ _createInnerHTML() {
        return this.#createModal();
    }
    /** TODO: Показ уведомления о настройках (заглушка) */ #showSettings() {
        alert("Settings are not implemented");
    }
    /** TODO: Переход на страницу просмотра фильма (заглушка) */ #navigateToWatchPage(movieId) {
        alert("Watch page is not implemented");
    }
    /**
     * Обработчик кликов по кнопкам модалки
     * @param {MouseEvent} event
     */ #handleButtons = (event)=>{
        const closeBtn = event.target.closest("[data-modal-close]");
        if (closeBtn) return this.close();
        const settingsBtn = event.target.closest(".movie-modal-settings-btn");
        if (settingsBtn) {
            event.preventDefault();
            this.#showSettings();
        }
        const watchBtn = event.target.closest(".movie-modal-watch-btn");
        if (watchBtn) {
            event.preventDefault();
            this.#navigateToWatchPage(this._data.id);
        }
    };
    /** Убирает события перед перерендером (BaseView) */ _detachEvents() {
        this._$el.removeEventListener("click", this.#handleButtons);
    }
    /** Добавляет события после рендера (BaseView) */ _attachEvents() {
        // Делегирование событий кликов на контейнер модалки
        // Позволяет обрабатывать все кнопки внутри одной функции
        this._$el.addEventListener("click", this.#handleButtons);
    }
}
exports.default = MovieModalView;
const createMovieModal = ()=>new MovieModalView("#movie-modal");

},{"./base-view":"b07nk","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["2aZ6o","8JWvp"], "8JWvp", "parcelRequireae0c", {})

//# sourceMappingURL=flickmate.c6396971.js.map
