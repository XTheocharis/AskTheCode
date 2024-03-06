rototype.isPrototypeOf(t) ? this._bodyText = t.toString() : yl && vl && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = jl(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : yl && (ArrayBuffer.prototype.isPrototypeOf(t) || bl(t)) ? this._bodyArrayBuffer = jl(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = '';
            this.headers.get('content-type') || ('string' == typeof t ? this.headers.set('content-type', 'text/plain;charset=UTF-8') : this._bodyBlob && this._bodyBlob.type ? this.headers.set('content-type', this._bodyBlob.type) : pl && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
            
        }, vl && (this.blob = function () {
            var t = Al(this);
            if (t) {
                return t;
            }
            if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
            }
            if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            }
            if (this._bodyFormData) {
                throw new Error('could not read FormData body as blob');
            }
            return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function () {
            return this._bodyArrayBuffer ? Al(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Rl);
        }), this.text = function () {
            var t = Al(this);
            if (t) {
                return t;
            }
            if (this._bodyBlob) {
                return function (t) {
                    var e = new FileReader(), r = Ol(e);
                    return e.readAsText(t), r;
                }(this._bodyBlob);
            }
            if (this._bodyArrayBuffer) {
                return Promise.resolve(function (t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) {
                        
                    }
                    return r.join('');
                }(this._bodyArrayBuffer));
            }
            if (this._bodyFormData) {
                throw new Error('could not read FormData body as text');
            }
            return Promise.resolve(this._bodyText);
        }, gl && (this.formData = function () {
            return this.text().then(kl);
        }), this.json = function () {
            return this.text().then(JSON.parse);
        }, this;
    }
    xl.prototype.append = function (t, e) {
        t = wl(t);
        e = Sl(e);
        
        var r = this.map[t];
        this.map[t] = r ? r + ', ' + e : e;
    };
    xl.prototype.delete = function (t) {
        delete this.map[wl(t)];
    };
    xl.prototype.get = function (t) {
        return t = wl(t), this.has(t) ? this.map[t] : null;
    };
    xl.prototype.has = function (t) {
        return this.map.hasOwnProperty(wl(t));
    };
    xl.prototype.set = function (t, e) {
        this.map[wl(t)] = Sl(e);
    };
    xl.prototype.forEach = function (t, e) {
        for (var r in this.map)
            this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this);
    };
    xl.prototype.keys = function () {
        var t = [];
        return this.forEach(function (e, r) {
            t.push(r);
        }), El(t);
    };
    xl.prototype.values = function () {
        var t = [];
        return this.forEach(function (e) {
            t.push(e);
        }), El(t);
    };
    xl.prototype.entries = function () {
        var t = [];
        return this.forEach(function (e, r) {
            t.push([
                r,
                e
            ]);
        }), El(t);
    };
    dl && (xl.prototype[Symbol.iterator] = xl.prototype.entries);
    
    var Il = [
        'DELETE',
        'GET',
        'HEAD',
        'OPTIONS',
        'POST',
        'PUT'
    ];
    function Tl(t, e) {
        var r, n, o = (e = e || {}).body;
        if (t instanceof Tl) {
            if (t.bodyUsed) {
                throw new TypeError('Already read');
            }
            this.url = t.url;
            this.credentials = t.credentials;
            e.headers || (this.headers = new xl(t.headers));
            this.method = t.method;
            this.mode = t.mode;
            this.signal = t.signal;
            o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = true);
            
        } else {
            this.url = String(t);
        }
        if (this.credentials = e.credentials || this.credentials || 'same-origin', !e.headers && this.headers || (this.headers = new xl(e.headers)), this.method = (n = (r = e.method || this.method || 'GET').toUpperCase(), Il.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ('GET' === this.method || 'HEAD' === this.method) && o) {
            throw new TypeError('Body not allowed for GET or HEAD requests');
        }
        this._initBody(o);
    }
    function kl(t) {
        var e = new FormData();
        return t.trim().split('&').forEach(function (t) {
            if (t) {
                var r = t.split('='), n = r.shift().replace(/\+/g, ' '), o = r.join('=').replace(/\+/g, ' ');
                e.append(decodeURIComponent(n), decodeURIComponent(o));
            }
        }), e;
    }
    function Ll(t, e) {
        e || (e = {});
        this.type = 'default';
        this.status = void 0 === e.status ? 200 : e.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = 'statusText' in e ? e.statusText : 'OK';
        this.headers = new xl(e.headers);
        this.url = e.url || '';
        this._initBody(t);
        
    }
    Tl.prototype.clone = function () {
        return new Tl(this, { body: this._bodyInit });
    };
    Pl.call(Tl.prototype);
    Pl.call(Ll.prototype);
    Ll.prototype.clone = function () {
        return new Ll(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new xl(this.headers),
            url: this.url
        });
    };
    Ll.error = function () {
        var t = new Ll(null, {
            status: 0,
            statusText: ''
        });
        return t.type = 'error', t;
    };
    
    var Ul = [
        301,
        302,
        303,
        307,
        308
    ];
    Ll.redirect = function (t, e) {
        if (-1 === Ul.indexOf(e)) {
            throw new RangeError('Invalid status code');
        }
        return new Ll(null, {
            status: e,
            headers: { location: t }
        });
    };
    var Ml = self.DOMException;
    try {
        new Ml();
    } catch (t) {
        (Ml = function (t, e) {
            this.message = t;
            this.name = e;
            
            var r = Error(t);
            this.stack = r.stack;
        }).prototype = Object.create(Error.prototype);
        Ml.prototype.constructor = Ml;
        
    }
    function _l(t, e) {
        return new Promise(function (r, n) {
            var o = new Tl(t, e);
            if (o.signal && o.signal.aborted) {
                return n(new Ml('Aborted', 'AbortError'));
            }
            var i = new XMLHttpRequest();
            function a() {
                i.abort();
            }
            i.onload = function () {
                var t, e, n = {
                        status: i.status,
                        statusText: i.statusText,
                        headers: (t = i.getAllResponseHeaders() || '', e = new xl(), t.replace(/\r?\n[\t ]+/g, ' ').split(/\r?\n/).forEach(function (t) {
                            var r = t.split(':'), n = r.shift().trim();
                            if (n) {
                                var o = r.join(':').trim();
                                e.append(n, o);
                            }
                        }), e)
                    };
                n.url = 'responseURL' in i ? i.responseURL : n.headers.get('X-Request-URL');
                r(new Ll('response' in i ? i.response : i.responseText, n));
                
            };
            i.onerror = function () {
                n(new TypeError('Network request failed'));
            };
            i.ontimeout = function () {
                n(new TypeError('Network request failed'));
            };
            i.onabort = function () {
                n(new Ml('Aborted', 'AbortError'));
            };
            i.open(o.method, o.url, true);
            'include' === o.credentials ? i.withCredentials = true : 'omit' === o.credentials && (i.withCredentials = false);
            'responseType' in i && vl && (i.responseType = 'blob');
            o.headers.forEach(function (t, e) {
                i.setRequestHeader(e, t);
            });
            o.signal && (o.signal.addEventListener('abort', a), i.onreadystatechange = function () {
                4 === i.readyState && o.signal.removeEventListener('abort', a);
            });
            i.send(void 0 === o._bodyInit ? null : o._bodyInit);
            
        });
    }
    _l.polyfill = true;
    self.fetch || (self.fetch = _l, self.Headers = xl, self.Request = Tl, self.Response = Ll);
    
    var Nl = Object.getOwnPropertySymbols, Cl = Object.prototype.hasOwnProperty, Fl = Object.prototype.propertyIsEnumerable;
    function Bl(t) {
        if (null == t) {
            throw new TypeError('Object.assign cannot be called with null or undefined');
        }
        return Object(t);
    }
    var Dl = (function () {
        try {
            if (!Object.assign) {
                return false;
            }
            var t = new String('abc');
            if (t[5] = 'de', '5' === Object.getOwnPropertyNames(t)[0]) {
                return false;
            }
            for (var e = {}, r = 0; r < 10; r++) {
                e['_' + String.fromCharCode(r)] = r;
            }
            if ('0123456789' !== Object.getOwnPropertyNames(e).map(function (t) {
                    return e[t];
                }).join('')) {
                return false;
            }
            var n = { t: t };
            return 'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                
            }), 'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('');
        } catch (t) {
            return false;
        }
    }()) ? Object.assign : function (t, e) {
        for (var r, n, o = Bl(t), i = 1; i < arguments.length; i++) {
            for (var a in r = Object(arguments[i]))
                Cl.call(r, a) && (o[a] = r[a]);
            if (Nl) {
                n = Nl(r);
                for (var u = 0; u < n.length; u++) {
                    Fl.call(r, n[u]) && (o[n[u]] = r[n[u]]);
                }
            }
        }
        return o;
    };
    Object.assign = Dl;
}());