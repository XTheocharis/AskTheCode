           delete i.finishedCurrentRound;
                            var O = z(this, tn)['measure'.concat('download' === a ? 'Down' : 'Up', 'loadLoadedLatency')];
                            (n = new It([s({ dir: 'download' === a ? 'down' : 'up' }, o)], {
                                downloadApiUrl: c,
                                uploadApiUrl: u,
                                estimatedServerTime: f,
                                logApiUrl: z(this, tn).logMeasurementApiUrl,
                                measurementId: z(this, nn),
                                measureParallelLatency: O,
                                parallelLatencyThrottleMs: z(this, tn).loadedLatencyThrottle
                            })).fetchOptions = { credentials: z(this, tn).includeCredentials ? 'include' : void 0 };
                            n.finishRequestDuration = z(this, tn).bandwidthFinishRequestDuration;
                            n.onNewMeasurementStarted = function (t) {
                                var n = t.count, r = t.bytes, o = i.results = Object.assign({}, i.results);
                                !o.hasOwnProperty(r) && (o[r] = {
                                    timings: [],
                                    numMeasurements: 0,
                                    sideLatency: O ? [] : void 0
                                });
                                if (o[r].numMeasurements - o[r].timings.length !== n) {
                                    o[r].numMeasurements += n;
                                    e.onResultsChange({ type: a });
                                }
                                
                            };
                            n.onMeasurementResult = function (t) {
                                var n = t.bytes, r = m(t, $e);
                                i.results[n].timings.push(r);
                                i.results = Object.assign({}, i.results);
                                e.onResultsChange({ type: a });
                                
                            };
                            n.onParallelLatencyResult = function (t) {
                                i.results[o.bytes].sideLatency.push(t);
                                i.results = Object.assign({}, i.results);
                                e.onResultsChange({ type: a });
                                
                            };
                            n.onFinished = function (t) {
                                var n = !z(e, tn).measurements.slice(z(e, rn) + 1).map(function (t) {
                                        return t.type;
                                    }).includes(a), r = Math.min.apply(Math, k(Object.values('download' === a ? t.down : t.up).slice(-1)[0].timings.map(function (t) {
                                        return t.duration;
                                    })));
                                if (n || !o.bypassMinDuration && r > z(e, tn).bandwidthFinishRequestDuration) {
                                    i.finished = true;
                                    e.onResultsChange({ type: a });
                                    
                                    var l = 0.5 * Object.keys(i.results).map(function (t) {
                                        return +t;
                                    }).sort(function (t, e) {
                                        return e - t;
                                    })[0];
                                    'download' === a && S(e, on, l);
                                    'upload' === a && S(e, ln, l);
                                    
                                } else {
                                    i.finishedCurrentRound = true;
                                }
                                z(e, sn) && A(e, mn, En).call(e);
                            };
                            n.onConnectionError = function (t) {
                                i.error = t;
                                e.onResultsChange({ type: a });
                                z(e, Qe).call(e, 'Connection error while measuring '.concat(a, ': ').concat(t));
                                A(e, mn, En).call(e);
                                
                            };
                            n.play();
                            
                        }
                    }
                    S(this, an, n);
                    i.started = true;
                    this.onResultsChange({ type: a });
                    
                } else {
                    z(this, an).play();
                }
            }
            var kn = new WeakMap(), jn = new WeakMap(), _n = function (t) {
                    h(n, t);
                    var e = y(n);
                    function n(t) {
                        var r, a;
                        c(this, n);
                        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) {
                            i[l - 1] = arguments[l];
                        }
                        return C(b(a = e.call.apply(e, [
                            this,
                            t
                        ].concat(i))), kn, {
                            writable: true,
                            value: void 0
                        }), C(b(a), jn, {
                            writable: true,
                            value: function (t) {
                                z(b(a), kn) && Ue(t, { apiUrl: z(b(a), kn) });
                            }
                        }), M((r = b(a), d(n.prototype)), 'onFinish', z(b(a), jn), r, true), S(b(a), kn, Object.assign({}, N, t, V).logAimApiUrl), a;
                    }
                    return f(n, [{
                            key: 'onFinish',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onFinish', function (n) {
                                    t(n);
                                    z(e, jn).call(e, n);
                                    
                                }, this, true);
                            }
                        }]), n;
                }(bn);
        },
        68977: function (t, e, n) {
            'use strict';
            function r(t, e) {
                return null == t || null == e ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
            }
            function a(t, e) {
                return null == t || null == e ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
            }
            function o(t) {
                let e, n, o;
                function l(t, r, a = 0, o = t.length) {
                    if (a < o) {
                        if (0 !== e(r, r)) {
                            return o;
                        }
                        do {
                            const e = a + o >>> 1;
                            n(t[e], r) < 0 ? a = e + 1 : o = e;
                        } while (a < o);
                    }
                    return a;
                }
                return 2 !== t.length ? (e = r, n = (e, n) => r(t(e), n), o = (e, n) => t(e) - n) : (e = t === r || t === a ? t : i, n = t, o = t), {
                    left: l,
                    center: function (t, e, n = 0, r = t.length) {
                        const a = l(t, e, n, r - 1);
                        return a > n && o(t[a - 1], e) > -o(t[a], e) ? a - 1 : a;
                    },
                    right: function (t, r, a = 0, o = t.length) {
                        if (a < o) {
                            if (0 !== e(r, r)) {
                                return o;
                            }
                            do {
                                const e = a + o >>> 1;
                                n(t[e], r) <= 0 ? a = e + 1 : o = e;
                            } while (a < o);
                        }
                        return a;
                    }
                };
            }
            function i() {
                return 0;
            }
            n.d(e, {
                ZP: function () {
                    return c;
                }
            });
            const l = o(r), s = l.right;
            l.left;
            o(function (t) {
                return null === t ? NaN : +t;
            }).center;
            
            var c = s;
        },
        94182: function (t, e, n) {
            'use strict';
            function r(t, e) {
                switch (arguments.length) {
                case 0:
                    break;
                case 1:
                    this.range(t);
                    break;
                default:
                    this.range(e).domain(t);
                }
                return this;
            }
            n.d(e, {
                o: function () {
                    return r;
                }
            });
        },
        97234: function (t, e, n) {
            'use strict';
            function r(t) {
                return r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                } : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }, r(t);
            }
            n.d(e, {
                Z: function () {
                    return i;
                }
            });
            
            function i(t, e) {
                if (e = e || {}, (t = t || '') instanceof i) {
                    return t;
                }
                if (!(this instanceof i)) {
                    return new i(t, e);
                }
                var n = function (t) {
                    var n = 1, i = null, l = null, s = null, c = false, u = false;
                    'string' == typeof t && (t = function (t) {
                        t = t.replace(/^\s+/, '').replace(/\s+$/, '').toLowerCase();
                        var e, n = false;
                        if (M[t]) {
                            t = M[t];
                            n = true;
                            
                        } else {
                            if ('transparent' == t) {
                                return {
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 0,
                                    format: 'name'
                                };
                            }
                        }
                        if (e = T.rgb.exec(t)) {
                            return {
                                r: e[1],
                                g: e[2],
                                b: e[3]
                            };
                        }
                        if (e = T.rgba.exec(t)) {
                            return {
                                r: e[1],
                                g: e[2],
                                b: e[3],
                                a: e[4]
                            };
                        }
                        if (e = T.hsl.exec(t)) {
                            return {
                                h: e[1],
                                s: e[2],
                                l: e[3]
                            };
                        }
                        if (e = T.hsla.exec(t)) {
                            return {
                                h: e[1],
                                s: e[2],
                                l: e[3],
                                a: e[4]
                            };
                        }
                        if (e = T.hsv.exec(t)) {
                            return {
                                h: e[1],
                                s: e[2],
                                v: e[3]
                            };
                        }
                        if (e = T.hsva.exec(t)) {
                            return {
                                h: e[1],
                                s: e[2],
                                v: e[3],
                                a: e[4]
                            };
                        }
                        if (e = T.hex8.exec(t)) {
                            return {
                                r: P(e[1]),
                                g: P(e[2]),
                                b: P(e[3]),
                                a: A(e[4]),
                                format: n ? 'name' : 'hex8'
                            };
                        }
                        if (e = T.hex6.exec(t)) {
                            return {
                                r: P(e[1]),
                                g: P(e[2]),
                                b: P(e[3]),
                                format: n ? 'name' : 'hex'
                            };
                        }
                        if (e = T.hex4.exec(t)) {
                            return {
                                r: P(e[1] + '' + e[1]),
                                g: P(e[2] + '' + e[2]),
                                b: P(e[3] + '' + e[3]),
                                a: A(e[4] + '' + e[4]),
                                format: n ? 'name' : 'hex8'
                            };
                        }
                        if (e = T.hex3.exec(t)) {
                            return {
                                r: P(e[1] + '' + e[1]),
                                g: P(e[2] + '' + e[2]),
                                b: P(e[3] + '' + e[3]),
                                format: n ? 'name' : 'hex'
                            };
                        }
                        return false;
                    }(t));
                    if ('object' == r(t)) {
                        C(t.r) && C(t.g) && C(t.b) ? (f = t.r, p = t.g, h = t.b, e = {
                            r: 255 * j(f, 255),
                            g: 255 * j(p, 255),
                            b: 255 * j(h, 255)
                        }, c = true, u = '%' === String(t.r).substr(-1) ? 'prgb' : 'rgb') : C(t.h) && C(t.s) && C(t.v) ? (i = S(t.s), l = S(t.v), e = function (t, e, n) {
                            t = 6 * j(t, 360);
                            e = j(e, 100);
                            n = j(n, 100);
                            
                            var r = Math.floor(t), a = t - r, o = n * (1 - e), i = n * (1 - a * e), l = n * (1 - (1 - a) * e), s = r % 6;
                            return {
                                r: 255 * [
                                    n,
                                    i,
                                    o,
                                    o,
                                    l,
                                    n
                                ][s],
                                g: 255 * [
                                    l,
                                    n,
                                    n,
                                    i,
                                    o,
                                    o
                                ][s],
                                b: 255 * [
                                    o,
                                    o,
                                    l,
                                    n,
                                    n,
                                    i
                                ][s]
                            };
                        }(t.h, i, l), c = true, u = 'hsv') : C(t.h) && C(t.s) && C(t.l) && (i = S(t.s), s = S(t.l), e = function (t, e, n) {
                            var r, a, o;
                            function i(t, e, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 0.16666666666666666 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 0.6666666666666666 ? t + (e - t) * (0.6666666666666666 - n) * 6 : t;
                            }
                            if (t = j(t, 360), e = j(e, 100), n = j(n, 100), 0 === e) {
                                r = a = o = n;
                            } else {
                                var l = n < 0.5 ? n * (1 + e) : n + e - n * e, s = 2 * n - l;
                                r = i(s, l, t + 0.3333333333333333);
                                a = i(s, l, t);
                                o = i(s, l, t - 0.3333333333333333);
                                
                            }
                            return {
                                r: 255 * r,
                                g: 255 * a,
                                b: 255 * o
                            };
                        }(t.h, i, s), c = true, u = 'hsl');
                        t.hasOwnProperty('a') && (n = t.a);
                    }
                    var f, p, h;
                    return n = k(n), {
                        ok: c,
                        format: t.format || u,
                        r: Math.min(255, Math.max(0, 0)),
                        g: Math.min(255, Math.max(0, 0)),
                        b: Math.min(255, Math.max(0, 0)),
                        a: n
                    };
                }(t);
                this._originalInput = t;
                this._r = n.r;
                this._g = n.g;
                this._b = n.b;
                this._a = n.a;
                this._roundA = Math.round(100 * this._a) / 100;
                this._format = e.format || n.format;
                this._gradientType = e.gradientType;
                this._r < 1 && (this._r = Math.round(this._r));
                this._g < 1 && (this._g = Math.round(this._g));
                this._b < 1 && (this._b = Math.round(this._b));
                this._ok = n.ok;
                
            }
            function l(t, e, n) {
                t = j(t, 255);
                e = j(e, 255);
                n = j(n, 255);
                
                var r, a, o = Math.max(t, e, n), i = Math.min(t, e, n), l = (o + i) / 2;
                if (o == i) {
                    r = a = 0;
                } else {
                    var s = o - i;
                    switch (a = l > 0.5 ? s / (2 - o - i) : s / (o + i), o) {
                    case t:
                        r = (e - n) / s + (e < n ? 6 : 0);
                        break;
                    case e:
                        r = (n - t) / s + 2;
                        break;
                    case n:
                        r = (t - e) / s + 4;
                    }
                    r /= 6;
                }
                return {
                    h: r,
                    s: a,
                    l: l
                };
            }
            function s(t, e, n) {
                t = j(t, 255);
                e = j(e, 255);
                n = j(n, 255);
                
                var r, a, o = Math.max(t, e, n), i = Math.min(t, e, n), l = o, s = o - i;
                if (a = 0 === o ? 0 : s / o, o == i) {
                    r = 0;
                } else {
                    switch (o) {
                    case t:
                        r = (e - n) / s + (e < n ? 6 : 0);
                        break;
                    case e:
                        r = (n - t) / s + 2;
                        break;
                    case n:
                        r = (t - e) / s + 4;
                    }
                    r /= 6;
                }
                return {
                    h: r,
                    s: a,
                    v: l
                };
            }
            function c(t, e, n, r) {
                var a = [
                    z(Math.round(t).toString(16)),
                    z(Math.round(e).toString(16)),
                    z(Math.round(n).toString(16))
                ];
                return r && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join('');
            }
            function u(t, e, n, r) {
                return [
                    z(L(r)),
                    z(Math.round(t).toString(16)),
                    z(Math.round(e).toString(16)),
                    z(Math.round(n).toString(16))
                ].join('');
            }
            function f(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = i(t).toHsl();
                return n.s -= e / 100, n.s = _(n.s), i(n);
            }
            function p(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = i(t).toHsl();
                return n.s += e / 100, n.s = _(n.s), i(n);
            }
            function h(t) {
                return i(t).desaturate(100);
            }
            function d(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = i(t).toHsl();
                return n.l += e / 100, n.l = _(n.l), i(n);
            }
            function v(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = i(t).toRgb();
                return n.r = Math.max(0, Math.min(255, n.r - Math.round(-e / 100 * 255))), n.g = Math.max(0, Math.min(255, n.g - Math.round(-e / 100 * 255))), n.b = Math.max(0, Math.min(255, n.b - Math.round(-e / 100 * 255))), i(n);
            }
            function m(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = i(t).toHsl();
                return n.l -= e / 100, n.l = _(n.l), i(n);
            }
            function b(t, e) {
                var n = i(t).toHsl(), r = (n.h + e) % 360;
                return n.h = r < 0 ? 360 + r : r, i(n);
            }
            function g(t) {
                var e = i(t).toHsl();
                return e.h = (e.h + 180) % 360, i(e);
            }
            function y(t, e) {
                if (isNaN(e) || e <= 0) {
                    throw new Error('Argument to polyad must be a positive number');
                }
                for (var n = i(t).toHsl(), r = [i(t)], a = 360 / e, o = 1; o < e; o++) {
                    r.push(i({
                        h: (n.h + o * a) % 360,
                        s: n.s,
                        l: n.l
                    }));
                }
                return r;
            }
            function w(t) {
                var e = i(t).toHsl(), n = e.h;
                return [
                    i(t),
                    i({
                        h: (n + 72) % 360,
                        s: e.s,
                        l: e.l
                    }),
                    i({
                        h: (n + 216) % 360,
                        s: e.s,
                        l: e.l
                    })
                ];
            }
            function O(t, e, n) {
                e = e || 6;
                n = n || 30;
                
                var r = i(t).toHsl(), a = 360 / n, o = [i(t)];
                for (r.h = (r.h - (a * e >> 1) + 720) % 360; --e;) {
                    r.h = (r.h + a) % 360;
                    o.push(i(r));
                    
                }
                return o;
            }
            function x(t, e) {
                e = e || 6;
                for (var n = i(t).toHsv(), r = n.h, a = n.s, o = n.v, l = [], s = 1 / e; e--;) {
                    l.push(i({
                        h: r,
                        s: a,
                        v: o
                    }));
                    o = (o + s) % 1;
                    
                }
                return l;
            }
            i.prototype = {
                isDark: function () {
                    return this.getBrightness() < 128;
                },
                isLight: function () {
                    return !this.isDark();
                },
                isValid: function () {
                    return this._ok;
                },
                getOriginalInput: function () {
                    return this._originalInput;
                },
                getFormat: function () {
                    return this._format;
                },
                getAlpha: function () {
                    return this._a;
                },
                getBrightness: function () {
                    var t = this.toRgb();
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1000;
                },
                getLuminance: function () {
                    var t, e, n, r = this.toRgb();
                    return t = r.r / 255, e = r.g / 255, n = r.b / 255, 0.2126 * (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) + 0.7152 * (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)) + 0.0722 * (n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4));
                },
                setAlpha: function (t) {
                    return this._a = k(t), this._roundA = Math.round(100 * this._a) / 100, this;
                },
                toHsv: function () {
                    var t = s(this._r, this._g, this._b);
                    return {
                        h: 360 * t.h,
                        s: t.s,
                        v: t.v,
                        a: this._a
                    };
                },
                toHsvString: function () {
                    var t = s(this._r, this._g, this._b), e = Math.round(360 * t.h), n = Math.round(100 * t.s), r = Math.round(100 * t.v);
                    return 1 == this._a ? 'hsv(' + e + ', ' + n + '%, ' + r + '%)' : 'hsva(' + e + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
                },
                toHsl: function () {
                    var t = l(this._r, this._g, this._b);
                    return {
                        h: 360 * t.h,
                        s: t.s,
                        l: t.l,
                        a: this._a
                    };
                },
                toHslString: function () {
                    var t = l(this._r, this._g, this._b), e = Math.round(360 * t.h), n = Math.round(100 * t.s), r = Math.round(100 * t.l);
                    return 1 == this._a ? 'hsl(' + e + ', ' + n + '%, ' + r + '%)' : 'hsla(' + e + ', ' + n + '%, ' + r + '%, ' + this._roundA + ')';
                },
                toHex: function (t) {
                    return c(this._r, this._g, this._b, t);
                },
                toHexString: function (t) {
                    return '#' + this.toHex(t);
                },
                toHex8: function (t) {
                    return function (t, e, n, r, a) {
                        var o = [
                            z(Math.round(t).toString(16)),
                            z(Math.round(e).toString(16)),
                            z(Math.round(n).toString(16)),
                            z(L(r))
                        ];
                        if (a && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) && o[3].charAt(0) == o[3].charAt(1)) {
                            return o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0);
                        }
                        return o.join('');
                    }(this._r, this._g, this._b, this._a, t);
                },
                toHex8String: function (t) {
                    return '#' + this.toHex8(t);
                },
                toRgb: function () {
                    return {
                        r: Math.round(this._r),
                        g: Math.round(this._g),
                        b: Math.round(this._b),
                        a: this._a
                    };
                },
                toRgbString: function () {
                    return 1 == this._a ? 'rgb(' + Math.round(this._r) + ', ' + Math.round(this._g) + ', ' + Math.round(this._b) + ')' : 'rgba(' + Math.round(this._r) + ', ' + Math.round(this._g) + ', ' + Math.round(this._b) + ', ' + this._roundA + ')';
                },
                toPercentageRgb: function () {
                    return {
                        r: Math.round(100 * j(this._r, 255)) + '%',
                        g: Math.round(100 * j(this._g, 255)) + '%',
                        b: Math.round(100 * j(this._b, 255)) + '%',
                        a: this._a
                    };
                },
                toPercentageRgbString: function () {
                    return 1 == this._a ? 'rgb(' + Math.round(100 * j(this._r, 255)) + '%, ' + Math.round(100 * j(this._g, 255)) + '%, ' + Math.round(100 * j(this._b, 255)) + '%)' : 'rgba(' + Math.round(100 * j(this._r, 255)) + '%, ' + Math.round(100 * j(this._g, 255)) + '%, ' + Math.round(100 * j(this._b, 255)) + '%, ' + this._roundA + ')';
                },
                toName: function () {
                    return 0 === this._a ? 'transparent' : !(this._a < 1) && (E[c(this._r, this._g, this._b, true)] || false);
                },
                toFilter: function (t) {
                    var e = '#' + u(this._r, this._g, this._b, this._a), n = e, r = this._gradientType ? 'GradientType = 1, ' : '';
                    if (t) {
                        var a = i(t);
                        n = '#' + u(a._r, a._g, a._b, a._a);
                    }
                    return 'progid:DXImageTransform.Microsoft.gradient(' + r + 'startColorstr=' + e + ',endColorstr=' + n + ')';
                },
                toString: function (t) {
                    var e = !!t;
                    t = t || this._format;
                    var n = false, r = this._a < 1 && this._a >= 0;
                    return e || !r || 'hex' !== t && 'hex6' !== t && 'hex3' !== t && 'hex4' !== t && 'hex8' !== t && 'name' !== t ? ('rgb' === t && (n = this.toRgbString()), 'prgb' === t && (n = this.toPercentageRgbString()), 'hex' !== t && 'hex6' !== t || (n = this.toHexString()), 'hex3' === t && (n = this.toHexString(true)), 'hex4' === t && (n = this.toHex8String(true)), 'hex8' === t && (n = this.toHex8String()), 'name' === t && (n = this.toName()), 'hsl' === t && (n = this.toHslString()), 'hsv' === t && (n = this.toHsvString()), n || this.toHexString()) : 'name' === t && 0 === this._a ? this.toName() : this.toRgbString();
                },
                clone: function () {
                    return i(this.toString());
                },
                _applyModification: function (t, e) {
                    var n = t.apply(null, [this].concat([].slice.call(e)));
                    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this;
                },
                lighten: function () {
                    return this._applyModification(d, arguments);
                },
                brighten: function () {
                    return this._applyModification(v, arguments);
                },
                darken: function () {
                    return this._applyModification(m, arguments);
                },
                desaturate: function () {
                    return this._applyModification(f, arguments);
                },
                saturate: function () {
                    return this._applyModification(p, arguments);
                },
                greyscale: function () {
                    return this._applyModification(h, arguments);
                },
                spin: function () {
                    return this._applyModification(b, arguments);
                },
                _applyCombination: function (t, e) {
                    return t.apply(null, [this].concat([].slice.call(e)));
                },
                analogous: function () {
                    return this._applyCombination(O, arguments);
                },
                complement: function () {
                    return this._applyCombination(g, arguments);
                },
                monochromatic: function () {
                    return this._applyCombination(x, arguments);
                },
                splitcomplement: function () {
                    return this._applyCombination(w, arguments);
                },
                triad: function () {
                    return this._applyCombination(y, [3]);
                },
                tetrad: function () {
                    return this._applyCombination(y, [4]);
                }
            };
            i.fromRatio = function (t, e) {
                if ('object' == r(t)) {
                    var n = {};
                    for (var a in t)
                        t.hasOwnProperty(a) && (n[a] = 'a' === a ? t[a] : S(t[a]));
                    t = n;
                }
                return i(t, e);
            };
            i.equals = function (t, e) {
                return !(!t || !e) && i(t).toRgbString() == i(e).toRgbString();
            };
            i.random = function () {
                return i.fromRatio({
                    r: Math.random(),
                    g: Math.random(),
                    b: Math.random()
                });
            };
            i.mix = function (t, e, n) {
                n = 0 === n ? 0 : n || 50;
                var r = i(t).toRgb(), a = i(e).toRgb(), o = n / 100;
                return i({
                    r: (a.r - r.r) * o + r.r,
                    g: (a.g - r.g) * o + r.g,
                    b: (a.b - r.b) * o + r.b,
                    a: (a.a - r.a) * o + r.a
                });
            };
            i.readability = function (t, e) {
                var n = i(t), r = i(e);
                return (Math.max(n.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(n.getLuminance(), r.getLuminance()) + 0.05);
            };
            i.isReadable = function (t, e, n) {
                var r, a, o = i.readability(t, e);
                switch (a = false, (r = function (t) {
                        var e, n;
                        e = ((t = t || {
                            level: 'AA',
                            size: 'small'
                        }).level || 'AA').toUpperCase();
                        n = (t.size || 'small').toLowerCase();
                        'AA' !== e && 'AAA' !== e && (e = 'AA');
                        
                        'small' !== n && 'large' !== n && (n = 'small');
                        return {
                            level: e,
                            size: n
                        };
                    }(n)).level + r.size) {
                case 'AAsmall':
                case 'AAAlarge':
                    a = o >= 4.5;
                    break;
                case 'AAlarge':
                    a = o >= 3;
                    break;
                case 'AAAsmall':
                    a = o >= 7;
                }
                return a;
            };
            i.mostReadable = function (t, e, n) {
                var r, a, o, l, s = null, c = 0;
                a = (n = n || {}).includeFallbackColors;
                o = n.level;
                l = n.size;
                
                for (var u = 0; u < e.length; u++) {
                    if ((r = i.readability(t, e[u])) > c) {
                        c = r;
                        s = i(e[u]);
                    }
                }
                return i.isReadable(t, s, {
                    level: o,
                    size: l
                }) || !a ? s : (n.includeFallbackColors = false, i.mostReadable(t, [
                    '#fff',
                    '#000'
                ], n));
            };
            
            var M = i.names = {
                    aliceblue: 'f0f8ff',
                    antiquewhite: 'faebd7',
                    aqua: '0ff',
                    aquamarine: '7fffd4',
                    azure: 'f0ffff',
                    beige: 'f5f5dc',
                    bisque: 'ffe4c4',
                    black: '000',
                    blanchedalmond: 'ffebcd',
                    blue: '00f',
                    blueviolet: '8a2be2',
                    brown: 'a52a2a',
                    burlywood: 'deb887',
                    burntsienna: 'ea7e5d',
                    cadetblue: '5f9ea0',
                    chartreuse: '7fff00',
                    chocolate: 'd2691e',
                    coral: 'ff7f50',
                    cornflowerblue: '6495ed',
                    cornsilk: 'fff8dc',
                    crimson: 'dc143c',
                    cyan: '0ff',
                    darkblue: '00008b',
                    darkcyan: '008b8b',
                    darkgoldenrod: 'b8860b',
                    darkgray: 'a9a9a9',
                    darkgreen: '006400',
                    darkgrey: 'a9a9a9',
                    darkkhaki: 'bdb76b',
                    darkmagenta: '8b008b',
                    darkolivegreen: '556b2f',
                    darkorange: 'ff8c00',
                    darkorchid: '9932cc',
                    darkred: '8b0000',
                    darksalmon: 'e9967a',
                    darkseagreen: '8fbc8f',
                    darkslateblue: '483d8b',
                    darkslategray: '2f4f4f',
                    darkslategrey: '2f4f4f',
                    darkturquoise: '00ced1',
                    darkviolet: '9400d3',
                    deeppink: 'ff1493',
                    deepskyblue: '00bfff',
                    dimgray: '696969',
                    dimgrey: '696969',
                    dodgerblue: '1e90ff',
                    firebrick: 'b22222',
                    floralwhite: 'fffaf0',
                    forestgreen: '228b22',
                    fuchsia: 'f0f',
                    gainsboro: 'dcdcdc',
                    ghostwhite: 'f8f8ff',
                    gold: 'ffd700',
                    goldenrod: 'daa520',
                    gray: '808080',
                    green: '008000',
                    greenyellow: 'adff2f',
                    grey: '808080',
                    honeydew: 'f0fff0',
                    hotpink: 'ff69b4',
                    indianred: 'cd5c5c',
                    indigo: '4b0082',
                    ivory: 'fffff0',
                    khaki: 'f0e68c',
                    lavender: 'e6e6fa',
                    lavenderblush: 'fff0f5',
                    lawngreen: '7cfc00',
                    lemonchiffon: 'fffacd',
                    lightblue: 'add8e6',
                    lightcoral: 'f08080',
                    lightcyan: 'e0ffff',
                    lightgoldenrodyellow: 'fafad2',
                    lightgray: 'd3d3d3',
                    lightgreen: '90ee90',
                    lightgrey: 'd3d3d3',
                    lightpink: 'ffb6c1',
                    lightsalmon: 'ffa07a',
                    lightseagreen: '20b2aa',
                    lightskyblue: '87cefa',
                    lightslategray: '789',
                    lightslategrey: '789',
                    lightsteelblue: 'b0c4de',
                    lightyellow: 'ffffe0',
                    lime: '0f0',
                    limegreen: '32cd32',
                    linen: 'faf0e6',
                    magenta: 'f0f',
                    maroon: '800000',
                    mediumaquamarine: '66cdaa',
                    mediumblue: '0000cd',
                    mediumorchid: 'ba55d3',
                    mediumpurple: '9370db',
                    mediumseagreen: '3cb371',
                    mediumslateblue: '7b68ee',
                    mediumspringgreen: '00fa9a',
                    mediumturquoise: '48d1cc',
                    mediumvioletred: 'c71585',
                    midnightblue: '191970',
                    mintcream: 'f5fffa',
                    mistyrose: 'ffe4e1',
                    moccasin: 'ffe4b5',
                    navajowhite: 'ffdead',
                    navy: '000080',
                    oldlace: 'fdf5e6',
                    olive: '808000',
                    olivedrab: '6b8e23',
                    orange: 'ffa500',
                    orangered: 'ff4500',
                    orchid: 'da70d6',
                    palegoldenrod: 'eee8aa',
                    palegreen: '98fb98',
                    paleturquoise: 'afeeee',
                    palevioletred: 'db7093',
                    papayawhip: 'ffefd5',
                    peachpuff: 'ffdab9',
                    peru: 'cd853f',
                    pink: 'ffc0cb',
                    plum: 'dda0dd',
                    powderblue: 'b0e0e6',
                    purple: '800080',
                    rebeccapurple: '663399',
                    red: 'f00',
                    rosybrown: 'bc8f8f',
                    royalblue: '4169e1',
                    saddlebrown: '8b4513',
                    salmon: 'fa8072',
                    sandybrown: 'f4a460',
                    seagreen: '2e8b57',
                    seashell: 'fff5ee',
                    sienna: 'a0522d',
                    silver: 'c0c0c0',
                    skyblue: '87ceeb',
                    slateblue: '6a5acd',
                    slategray: '708090',
                    slategrey: '708090',
                    snow: 'fffafa',
                    springgreen: '00ff7f',
                    steelblue: '4682b4',
                    tan: 'd2b48c',
                    teal: '008080',
                    thistle: 'd8bfd8',
                    tomato: 'ff6347',
                    turquoise: '40e0d0',
                    violet: 'ee82ee',
                    wheat: 'f5deb3',
                    white: 'fff',
                    whitesmoke: 'f5f5f5',
                    yellow: 'ff0',
                    yellowgreen: '9acd32'
                }, E = i.hexNames = function (t) {
                    var e = {};
                    for (var n in t)
                        t.hasOwnProperty(n) && (e[t[n]] = n);
                    return e;
                }(M);
            function k(t) {
                return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
            }
            function j(t, e) {
                (function (t) {
                    return 'string' == typeof t && -1 != t.indexOf('.') && 1 === parseFloat(t);
                }(t) && (t = '100%'));
                var n = function (t) {
                    return 'string' === typeof t && -1 != t.indexOf('%');
                }(t);
                return t = Math.min(e, Math.max(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), Math.abs(t - e) < 0.000001 ? 1 : t % e / parseFloat(e);
            }
            function _(t) {
                return Math.min(1, Math.max(0, t));
            }
            function P(t) {
                return parseInt(t, 16);
            }
            function z(t) {
                return 1 == t.length ? '0' + t : '' + t;
            }
            function S(t) {
                return t <= 1 && (t = 100 * t + '%'), t;
            }
            function L(t) {
                return Math.round(255 * parseFloat(t)).toString(16);
            }
            function A(t) {
                return P(t) / 255;
            }
            var T = (function () {
                
                return {
                    CSS_UNIT: new RegExp('(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)'),
                    rgb: new RegExp('rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?'),
                    rgba: new RegExp('rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?'),
                    hsl: new RegExp('hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?'),
                    hsla: new RegExp('hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?'),
                    hsv: new RegExp('hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?'),
                    hsva: new RegExp('hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?'),
                    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                };
            }());
            function C(t) {
                return !!T.CSS_UNIT.exec(t);
            }
        }
    }
]);