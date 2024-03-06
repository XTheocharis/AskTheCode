             count: 4
                        },
                        {
                            type: 'download',
                            bytes: 100000000,
                            count: 3
                        },
                        {
                            type: 'upload',
                            bytes: 50000000,
                            count: 3
                        },
                        {
                            type: 'download',
                            bytes: 250000000,
                            count: 2
                        }
                    ],
                    measureDownloadLoadedLatency: true,
                    measureUploadLoadedLatency: true,
                    loadedLatencyThrottle: 400,
                    bandwidthFinishRequestDuration: 1000,
                    estimatedServerTime: 10,
                    latencyPercentile: 0.5,
                    bandwidthPercentile: 0.9,
                    bandwidthMinRequestDuration: 10,
                    loadedRequestMinDuration: 250,
                    loadedLatencyMaxPoints: 20
                }, V = {
                    aimMeasurementScoring: {
                        packetLoss: i([
                            0.01,
                            0.05,
                            0.25,
                            0.5
                        ], [
                            10,
                            5,
                            0,
                            -10,
                            -20
                        ]),
                        latency: i([
                            10,
                            20,
                            50,
                            100,
                            500
                        ], [
                            20,
                            10,
                            5,
                            0,
                            -10,
                            -20
                        ]),
                        loadedLatencyIncrease: i([
                            10,
                            20,
                            50,
                            100,
                            500
                        ], [
                            20,
                            10,
                            5,
                            0,
                            -10,
                            -20
                        ]),
                        jitter: i([
                            10,
                            20,
                            100,
                            500
                        ], [
                            10,
                            5,
                            0,
                            -10,
                            -20
                        ]),
                        download: i([
                            1000000,
                            10000000,
                            50000000,
                            100000000
                        ], [
                            0,
                            5,
                            10,
                            20,
                            30
                        ]),
                        upload: i([
                            1000000,
                            10000000,
                            50000000,
                            100000000
                        ], [
                            0,
                            5,
                            10,
                            20,
                            30
                        ])
                    },
                    aimExperiencesDefs: {
                        streaming: {
                            input: [
                                'latency',
                                'packetLoss',
                                'download',
                                'loadedLatencyIncrease'
                            ],
                            pointThresholds: [
                                15,
                                20,
                                40,
                                60
                            ]
                        },
                        gaming: {
                            input: [
                                'latency',
                                'packetLoss',
                                'loadedLatencyIncrease'
                            ],
                            pointThresholds: [
                                5,
                                15,
                                25,
                                30
                            ]
                        },
                        rtc: {
                            input: [
                                'latency',
                                'jitter',
                                'packetLoss',
                                'loadedLatencyIncrease'
                            ],
                            pointThresholds: [
                                5,
                                15,
                                25,
                                40
                            ]
                        }
                    }
                }, D = function (t) {
                    var e = t.headers.get('server-timing');
                    if (e) {
                        var n = e.match(/dur=([0-9.]+)/);
                        if (n) {
                            return +n[1];
                        }
                    }
                }, B = function (t) {
                    return t.responseStart - t.requestStart;
                }, I = function (t) {
                    return t.responseEnd - t.responseStart;
                }, W = function (t) {
                    return t.ping + t.payloadDownloadTime;
                }, F = function (t) {
                    return t.ttfb;
                }, U = function (t, e) {
                    var n = t.duration, r = t.transferSize, a = n / 1000;
                    return a ? 8 * (r || 1.005 * +e) / a : void 0;
                }, Z = function (t, e) {
                    var n = t.duration / 1000;
                    return n ? 8 * e * 1.005 / n : void 0;
                }, q = r(function (t) {
                    return '0'.repeat(t);
                }), $ = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), J = new WeakMap(), G = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), tt = new WeakMap(), et = new WeakMap(), nt = new WeakMap(), rt = new WeakMap(), at = new WeakMap(), ot = new WeakMap(), it = new WeakMap(), lt = new WeakMap(), st = new WeakMap(), ct = new WeakMap(), ut = new WeakMap(), ft = new WeakMap(), pt = new WeakMap(), ht = new WeakMap(), dt = new WeakMap(), vt = new WeakSet(), mt = new WeakSet(), bt = new WeakSet(), gt = new WeakSet(), yt = (function () {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.downloadApiUrl, a = n.uploadApiUrl, o = n.throttleMs, i = void 0 === o ? 0 : o, l = n.estimatedServerTime, s = void 0 === l ? 0 : l;
                        if (c(this, t), H(this, gt), H(this, bt), H(this, mt), H(this, vt), C(this, $, {
                                writable: true,
                                value: {}
                            }), C(this, Y, {
                                writable: true,
                                value: {}
                            }), p(this, 'finishRequestDuration', 1000), p(this, 'getServerTime', D), C(this, X, {
                                writable: true,
                                value: function (t) {
                                    return t;
                                }
                            }), C(this, J, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, G, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, K, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, Q, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, tt, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, et, {
                                writable: true,
                                value: void 0
                            }), C(this, nt, {
                                writable: true,
                                value: void 0
                            }), C(this, rt, {
                                writable: true,
                                value: void 0
                            }), C(this, at, {
                                writable: true,
                                value: false
                            }), C(this, ot, {
                                writable: true,
                                value: {
                                    down: false,
                                    up: false
                                }
                            }), C(this, it, {
                                writable: true,
                                value: {
                                    down: {},
                                    up: {}
                                }
                            }), C(this, lt, {
                                writable: true,
                                value: 0
                            }), C(this, st, {
                                writable: true,
                                value: 0
                            }), C(this, ct, {
                                writable: true,
                                value: 0
                            }), C(this, ut, {
                                writable: true,
                                value: -1e+400
                            }), C(this, ft, {
                                writable: true,
                                value: 0
                            }), C(this, pt, {
                                writable: true,
                                value: 0
                            }), C(this, ht, {
                                writable: true,
                                value: void 0
                            }), C(this, dt, {
                                writable: true,
                                value: void 0
                            }), !e) {
                            throw new Error('Missing measurements argument');
                        }
                        if (!r) {
                            throw new Error('Missing downloadApiUrl argument');
                        }
                        if (!a) {
                            throw new Error('Missing uploadApiUrl argument');
                        }
                        S(this, et, e);
                        S(this, nt, r);
                        S(this, rt, a);
                        S(this, ft, i);
                        S(this, pt, Math.max(0, s));
                        
                    }
                    return f(t, [
                        {
                            key: 'results',
                            get: function () {
                                return z(this, it);
                            }
                        },
                        {
                            key: 'qsParams',
                            get: function () {
                                return z(this, $);
                            },
                            set: function (t) {
                                S(this, $, t);
                            }
                        },
                        {
                            key: 'fetchOptions',
                            get: function () {
                                return z(this, Y);
                            },
                            set: function (t) {
                                S(this, Y, t);
                            }
                        },
                        {
                            key: 'responseHook',
                            set: function (t) {
                                S(this, X, t);
                            }
                        },
                        {
                            key: 'onRunningChange',
                            set: function (t) {
                                S(this, J, t);
                            }
                        },
                        {
                            key: 'onNewMeasurementStarted',
                            set: function (t) {
                                S(this, G, t);
                            }
                        },
                        {
                            key: 'onMeasurementResult',
                            set: function (t) {
                                S(this, K, t);
                            }
                        },
                        {
                            key: 'onFinished',
                            set: function (t) {
                                S(this, Q, t);
                            }
                        },
                        {
                            key: 'onConnectionError',
                            set: function (t) {
                                S(this, tt, t);
                            }
                        },
                        {
                            key: 'pause',
                            value: function () {
                                clearTimeout(z(this, dt));
                                A(this, gt, Mt).call(this);
                                A(this, vt, wt).call(this, false);
                                
                            }
                        },
                        {
                            key: 'play',
                            value: function () {
                                z(this, at) || (A(this, vt, wt).call(this, true), A(this, bt, xt).call(this));
                            }
                        }
                    ]), t;
                }());
            function wt(t) {
                var e = this;
                if (t !== z(this, at)) {
                    S(this, at, t);
                    setTimeout(function () {
                        return z(e, J).call(e, z(e, at));
                    });
                }
            }
            function Ot(t, e) {
                var n = this, r = z(this, et)[t], a = r.bytes, o = r.dir, i = z(this, it), l = i[o].hasOwnProperty(a) ? i[o][a] : {
                        timings: [],
                        numMeasurements: z(this, et).filter(function (t) {
                            var e = t.bytes, n = t.dir;
                            return a === e && o === n;
                        }).map(function (t) {
                            return t.count;
                        }).reduce(function (t, e) {
                            return t + e;
                        }, 0)
                    };
                e && l.timings.push(e);
                l.timings = l.timings.slice(-l.numMeasurements);
                i[o][a] = l;
                e ? setTimeout(function () {
                    z(n, K).call(n, s({
                        type: o,
                        bytes: a
                    }, e), i);
                }) : z(this, G).call(this, z(this, et)[t], i);
                
            }
            function xt() {
                var t = this, e = z(this, et), n = e[z(this, lt)];
                if (z(this, st) >= n.count) {
                    var r = z(this, ot);
                    if (z(this, ut) > this.finishRequestDuration && !n.bypassMinDuration) {
                        var a = n.dir;
                        z(this, ot)[a] = true;
                        Object.values(z(this, ot)).every(function (t) {
                            return t;
                        }) && z(this, Q).call(this, z(this, it));
                        
                    }
                    S(this, st, 0);
                    S(this, ut, -1e+400);
                    performance.clearResourceTimings();
                    
                    do {
                        S(this, lt, z(this, lt) + 1);
                    } while (z(this, lt) < e.length && r[e[z(this, lt)].dir]);
                    if (z(this, lt) >= e.length) {
                        return S(this, ot, {
                            down: true,
                            up: true
                        }), A(this, vt, wt).call(this, false), void z(this, Q).call(this, z(this, it));
                    }
                    n = e[z(this, lt)];
                }
                var o = z(this, lt);
                0 === z(this, st) && A(this, mt, Ot).call(this, o);
                var i = n, l = i.bytes, s = 'down' === i.dir, c = z(this, s ? nt : rt), u = Object.assign({}, z(this, $));
                s && (u.bytes = ''.concat(l));
                var f, p = ''.concat(c.startsWith('http') || c.startsWith('//') ? '' : window.location.origin).concat(c, '?').concat(Object.entries(u).map(function (t) {
                        var e = E(t, 2), n = e[0], r = e[1];
                        return ''.concat(n, '=').concat(r);
                    }).join('&')), h = Object.assign({}, s ? {} : {
                        method: 'POST',
                        body: q(l)
                    }, z(this, Y)), d = S(this, ht, fetch(p, h).then(function (t) {
                        if (t.ok) {
                            return t;
                        }
                        throw Error(t.statusText);
                    }).then(function (e) {
                        return t.getServerTime && (f = t.getServerTime(e)), e;
                    }).then(function (e) {
                        return e.text().then(function (n) {
                            return z(t, X) && z(t, X).call(t, {
                                url: p,
                                headers: e.headers,
                                body: n
                            }), n;
                        });
                    }).then(function (e, n) {
                        if (d._cancel) {
                            n('cancelled');
                        } else {
                            var r = performance.getEntriesByName(p).slice(-1)[0], a = {
                                    transferSize: r.transferSize,
                                    ttfb: B(r),
                                    payloadDownloadTime: I(r),
                                    serverTime: f || -1,
                                    measTime: new Date()
                                };
                            if (a.ping = Math.max(0.01, a.ttfb - (f || z(t, pt))), a.duration = (s ? W : F)(a), a.bps = (s ? U : Z)(a, l), s && l) {
                                var i = +l;
                                a.transferSize && (a.transferSize < i || a.transferSize / i > 1.05) && console.warn('Requested '.concat(i, 'B but received ').concat(a.transferSize, 'B (').concat(Math.round(a.transferSize / i * 10000) / 100, '%).'));
                            }
                            A(t, mt, Ot).call(t, o, a);
                            var c = a.duration;
                            S(t, ut, z(t, ut) < 0 ? c : Math.min(z(t, ut), c));
                            S(t, st, z(t, st) + 1);
                            S(t, ct, 0);
                            z(t, ft) ? S(t, dt, setTimeout(function () {
                                return A(t, bt, xt).call(t);
                            }, z(t, ft))) : A(t, bt, xt).call(t);
                            
                        }
                    }).catch(function (e) {
                        var n, r;
                        d._cancel || (console.warn('Error fetching '.concat(p, ': ').concat(e)), S(t, ct, (n = z(t, ct), r = n++, n)), r < 20 ? A(t, bt, xt).call(t) : (S(t, ct, 0), A(t, vt, wt).call(t, false), z(t, tt).call(t, 'Connection failed to '.concat(p, '. Gave up after ').concat(20, ' retries.'))));
                    }));
            }
            function Mt() {
                var t = z(this, ht);
                t && (t._cancel = true);
            }
            var Et = yt, kt = [
                    'measureParallelLatency',
                    'parallelLatencyThrottleMs',
                    'downloadApiUrl',
                    'uploadApiUrl',
                    'estimatedServerTime'
                ], jt = new WeakMap(), _t = new WeakSet(), Pt = function (t) {
                    h(n, t);
                    var e = y(n);
                    function n(t) {
                        var r, a, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = i.measureParallelLatency, u = void 0 !== l && l, f = i.parallelLatencyThrottleMs, p = void 0 === f ? 100 : f, h = i.downloadApiUrl, v = i.uploadApiUrl, g = i.estimatedServerTime, y = void 0 === g ? 0 : g, w = m(i, kt);
                        return c(this, n), H(b(o = e.call(this, t, s({
                            downloadApiUrl: h,
                            uploadApiUrl: v,
                            estimatedServerTime: y
                        }, w))), _t), C(b(o), jt, {
                            writable: true,
                            value: void 0
                        }), u && (S(b(o), jt, new Et([{
                                dir: 'down',
                                bytes: 0,
                                count: 1e+400,
                                bypassMinDuration: true
                            }], {
                            downloadApiUrl: h,
                            uploadApiUrl: v,
                            estimatedServerTime: y,
                            throttleMs: p
                        })), z(b(o), jt).qsParams = { during: ''.concat(t[0].dir, 'load') }, M((r = b(o), d(n.prototype)), 'onRunningChange', A(b(o), _t, zt), r, true), M((a = b(o), d(n.prototype)), 'onConnectionError', function () {
                            return z(b(o), jt).pause();
                        }, a, true)), o;
                    }
                    return f(n, [
                        {
                            key: 'latencyResults',
                            get: function () {
                                return z(this, jt) && z(this, jt).results.down[0].timings;
                            }
                        },
                        {
                            key: 'onParallelLatencyResult',
                            set: function (t) {
                                z(this, jt) && (z(this, jt).onMeasurementResult = function (e) {
                                    return t(e);
                                });
                            }
                        },
                        {
                            key: 'fetchOptions',
                            get: function () {
                                return O(d(n.prototype), 'fetchOptions', this);
                            },
                            set: function (t) {
                                M(d(n.prototype), 'fetchOptions', t, this, true);
                                z(this, jt) && (z(this, jt).fetchOptions = t);
                                
                            }
                        },
                        {
                            key: 'onRunningChange',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onRunningChange', function (n) {
                                    A(e, _t, zt).call(e, n);
                                    t(n);
                                    
                                }, this, true);
                            }
                        },
                        {
                            key: 'onConnectionError',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onConnectionError', function () {
                                    z(e, jt) && z(e, jt).pause();
                                    t.apply(void 0, arguments);
                                    
                                }, this, true);
                            }
                        }
                    ]), n;
                }(Et);
            function zt(t) {
                var e = this;
                z(this, jt) && (t ? setTimeout(function () {
                    return z(e, jt).play();
                }, 20) : z(this, jt).pause());
            }
            var St = Pt, Lt = [
                    'measurementId',
                    'logApiUrl'
                ], At = new WeakMap(), Tt = new WeakMap(), Ct = new WeakMap(), Ht = new WeakMap(), Rt = new WeakSet(), Nt = new WeakSet(), Vt = function (t) {
                    h(n, t);
                    var e = y(n);
                    function n(t) {
                        var r, a, o, i, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = l.measurementId, u = l.logApiUrl, f = m(l, Lt);
                        return c(this, n), H(b(i = e.call(this, t, f)), Nt), H(b(i), Rt), C(b(i), At, {
                            writable: true,
                            value: void 0
                        }), C(b(i), Tt, {
                            writable: true,
                            value: void 0
                        }), C(b(i), Ct, {
                            writable: true,
                            value: void 0
                        }), C(b(i), Ht, {
                            writable: true,
                            value: void 0
                        }), S(b(i), At, s), S(b(i), Ht, u), M((r = b(i), d(n.prototype)), 'qsParams', u ? { measId: z(b(i), At) } : {}, r, true), M((a = b(i), d(n.prototype)), 'responseHook', function (t) {
                            return A(b(i), Rt, Dt).call(b(i), t);
                        }, a, true), M((o = b(i), d(n.prototype)), 'onMeasurementResult', function (t) {
                            return A(b(i), Nt, Bt).call(b(i), t);
                        }, o, true), i;
                    }
                    return f(n, [
                        {
                            key: 'qsParams',
                            set: function (t) {
                                M(d(n.prototype), 'qsParams', z(this, Ht) ? s({ measId: z(this, At) }, t) : t, this, true);
                            }
                        },
                        {
                            key: 'responseHook',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'responseHook', function (n) {
                                    t(n);
                                    A(e, Rt, Dt).call(e, n);
                                    
                                }, this, true);
                            }
                        },
                        {
                            key: 'onMeasurementResult',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onMeasurementResult', function (n) {
                                    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) {
                                        a[o - 1] = arguments[o];
                                    }
                                    t.apply(void 0, [n].concat(a));
                                    A(e, Nt, Bt).call(e, n);
                                    
                                }, this, true);
                            }
                        }
                    ]), n;
                }(St);
            function Dt(t) {
                z(this, Ht) && (S(this, Ct, +t.headers.get('cf-meta-request-time')), S(this, Tt, t.body.slice(-300).split('___').pop()));
            }
            function Bt(t) {
                if (z(this, Ht)) {
                    var e = {
                        type: t.type,
                        bytes: t.bytes,
                        ping: Math.round(t.ping),
                        ttfb: Math.round(t.ttfb),
                        payloadDownloadTime: Math.round(t.payloadDownloadTime),
                        duration: Math.round(t.duration),
                        transferSize: Math.round(t.transferSize),
                        serverTime: Math.round(t.serverTime),
                        token: z(this, Tt),
                        requestTime: z(this, Ct),
                        measId: z(this, At)
                    };
                    S(this, Tt, null);
                    S(this, Ct, null);
                    fetch(z(this, Ht), s({
                        method: 'POST',
                        body: JSON.stringify(e)
                    }, this.fetchOptions));
                    
                }
            }
            var It = Vt, Wt = new WeakMap(), Ft = new WeakMap(), Ut = new WeakMap(), Zt = new WeakSet(), qt = new WeakSet(), $t = new WeakSet(), Yt = (function () {
                    function t(e) {
                        if (c(this, t), H(this, $t), H(this, qt), H(this, Zt), C(this, Wt, {
                                writable: true,
                                value: false
                            }), C(this, Ft, {
                                writable: true,
                                value: void 0
                            }), C(this, Ut, {
                                writable: true,
                                value: void 0
                            }), !e) {
                            throw new Error('Missing operation to perform');
                        }
                        S(this, Ut, e);
                        this.play();
                        
                    }
                    return f(t, [
                        {
                            key: 'pause',
                            value: function () {
                                A(this, $t, Gt).call(this);
                                A(this, Zt, Xt).call(this, false);
                                
                            }
                        },
                        {
                            key: 'stop',
                            value: function () {
                                this.pause();
                            }
                        },
                        {
                            key: 'play',
                            value: function () {
                                z(this, Wt) || (A(this, Zt, Xt).call(this, true), A(this, qt, Jt).call(this));
                            }
                        }
                    ]), t;
                }());
            function Xt(t) {
                t !== z(this, Wt) && S(this, Wt, t);
            }
            function Jt() {
                var t = this, e = S(this, Ft, z(this, Ut).call(this).then(function () {
                        !e._cancel && A(t, qt, Jt).call(t);
                    }));
            }
            function Gt() {
                var t = z(this, Ft);
                t && (t._cancel = true);
            }
            var Kt = new WeakMap(), Qt = (function () {
                    function t() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.download, a = n.upload;
                        if (c(this, t), p(this, 'qsParams', {}), p(this, 'fetchOptions', {}), C(this, Kt, {
                                writable: true,
                                value: []
                            }), !r && !a) {
                            throw new Error('Missing at least one of download/upload config');
                        }
                        [
                            [
                                r,
                                'download'
                            ],
                            [
                                a,
                                'upload'
                            ]
                        ].filter(function (t) {
                            return E(t, 1)[0];
                        }).forEach(function (t) {
                            var e = E(t, 2), n = e[0], r = e[1], a = n.apiUrl, o = n.chunkSize;
                            if (!a) {
                                throw new Error('Missing '.concat(r, ' apiUrl argument'));
                            }
                            if (!o) {
                                throw new Error('Missing '.concat(r, ' chunkSize argument'));
                            }
                        });
                        var o = function (t) {
                            var n = t.apiUrl, r = t.qsParams, a = void 0 === r ? {} : r, o = t.fetchOptions, i = void 0 === o ? {} : o;
                            return new Yt(function () {
                                var t = Object.assign({}, a, e.qsParams), r = ''.concat(n.startsWith('http') || n.startsWith('//') ? '' : window.location.origin).concat(n, '?').concat(Object.entries(t).map(function (t) {
                                        var e = E(t, 2), n = e[0], r = e[1];
                                        return ''.concat(n, '=').concat(r);
                                    }).join('&')), o = Object.assign({}, i, e.fetchOptions);
                                return fetch(r, o).then(function (t) {
                                    if (t.ok) {
                                        return t;
                                    }
                                    throw Error(t.statusText);
                                }).then(function (t) {
                                    return t.text();
                                });
                            });
                        };
                        r && z(this, Kt).push(o({
                            apiUrl: r.apiUrl,
                            qsParams: { bytes: ''.concat(r.chunkSize) }
                        }));
                        a && z(this, Kt).push(o({
                            apiUrl: a.apiUrl,
                            fetchOptions: {
                                method: 'POST',
                                body: '0'.repeat(a.chunkSize)
                            }
                        }));
                        
                    }
                    return f(t, [
                        {
                            key: 'pause',
                            value: function () {
                                z(this, Kt).forEach(function (t) {
                                    return t.pause();
                                });
                            }
                        },
                        {
                            key: 'stop',
                            value: function () {
                                this.pause();
                            }
                        },
                        {
                            key: 'play',
                            value: function () {
                                z(this, Kt).forEach(function (t) {
                                    return t.play();
                                });
                            }
                        }
                    ]), t;
                }()), te = Qt, ee = [
                    'iceServers',
                    'acceptIceCandidate',
                    'dataChannelCfg'
                ], ne = new WeakMap(), re = new WeakMap(), ae = new WeakMap(), oe = new WeakMap(), ie = new WeakMap(), le = (function () {
                    function t() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.iceServers, a = void 0 === r ? [] : r, o = n.acceptIceCandidate, i = void 0 === o ? function (t) {
                                var e = t.protocol || '';
                                if (!e && t.candidate) {
                                    var n = t.candidate.split(' ');
                                    n.length >= 3 && (e = n[2]);
                                }
                                return 'udp' === e.toLowerCase();
                            } : o, l = n.dataChannelCfg, u = void 0 === l ? {
                                ordered: false,
                                maxRetransmits: 0
                            } : l, f = m(n, ee);
                        c(this, t);
                        p(this, 'onOpen', function () {
                        });
                        p(this, 'onClose', function () {
                        });
                        p(this, 'onMessageReceived', function () {
                        });
                        C(this, ne, {
                            writable: true,
                            value: false
                        });
                        C(this, re, {
                            writable: true,
                            value: void 0
                        });
                        C(this, ae, {
                            writable: true,
                            value: void 0
                        });
                        C(this, oe, {
                            writable: true,
                            value: void 0
                        });
                        C(this, ie, {
                            writable: true,
                            value: void 0
                        });
                        
                        var h = new RTCPeerConnection(s({ iceServers: a }, f)), d = new RTCPeerConnection(s({ iceServers: a }, f)), v = h.createDataChannel('channel', u);
                        v.onopen = function () {
                            S(e, ne, true);
                            e.onOpen();
                            
                        };
                        v.onclose = function () {
                            return e.close();
                        };
                        d.ondatachannel = function (t) {
                            var n = t.channel;
                            n.onclose = function () {
                                return e.close();
                            };
                            n.onmessage = function (t) {
                                return e.onMessageReceived(t.data);
                            };
                            S(e, ie, n);
                            
                        };
                        h.onicecandidate = function (t) {
                            t.candidate && i(t.candidate) && d.addIceCandidate(t.candidate);
                        };
                        d.onicecandidate = function (t) {
                            t.candidate && i(t.candidate) && h.addIceCandidate(t.candidate);
                        };
                        h.createOffer().then(function (t) {
                            return h.setLocalDescription(t);
                        }).then(function () {
                            return d.setRemoteDescription(h.localDescription);
                        }).then(function () {
                            return d.createAnswer();
                        }).then(function (t) {
                            return d.setLocalDescription(t);
                        }).then(function () {
                            return h.setRemoteDescription(d.localDescription);
                        });
                        S(this, re, h);
                        S(this, ae, d);
                        S(this, oe, v);
                        S(this, ne, false);
                        
                    }
                    return f(t, [
                        {
                            key: 'send',
                            value: function (t) {
                                return z(this, oe).send(t);
                            }
                        },
                        {
                            key: 'close',
                            value: function () {
                                return z(this, re) && z(this, re).close(), z(this, ae) && z(this, ae).close(), z(this, oe) && z(this, oe).close(), z(this, ie) && z(this, ie).close(), z(this, ne) && this.onClose(), S(this, ne, false), this;
                            }
                        }
                    ]), t;
                }()), se = new WeakMap(), ce = new WeakMap(), ue = new WeakMap(), fe = new WeakMap(), pe = new WeakMap(), he = new WeakMap(), de = (function () {
                    function t() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.turnServerUri, a = n.turnServerCredsApi, o = n.turnServerCredsApiParser, i = void 0 === o ? function (t) {
                                return {
                                    turnServerUser: t.username,
                                    turnServerPass: t.credential
                                };
                            } : o, l = n.turnServerCredsApiIncludeCredentials, s = void 0 !== l && l, u = n.turnServerUser, f = n.turnServerPass, h = n.numMsgs, d = void 0 === h ? 100 : h, v = n.batchSize, m = void 0 === v ? 10 : v, b = n.batchWaitTime, g = void 0 === b ? 10 : b, y = n.responsesWaitTime, w = void 0 === y ? 5000 : y, O = n.connectionTimeout, x = void 0 === O ? 5000 : O;
                        if (c(this, t), C(this, se, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, ce, {
                                writable: true,
                                value: function () {
                                }
                            }), C(this, ue, {
                                writable: true,
                                value: function () {
                                }
                            }), p(this, 'onMsgSent', function () {
                            }), p(this, 'onAllMsgsSent', function () {
                            }), p(this, 'onMsgReceived', function () {
                            }), C(this, fe, {
                                writable: true,
                                value: {}
                            }), C(this, pe, {
                                writable: true,
                                value: void 0
                            }), C(this, he, {
                                writable: true,
                                value: void 0
                            }), !r) {
                            throw new Error('Missing turnServerUri argument');
                        }
                        if ((!u || !f) && !a) {
                            throw new Error('Missing either turnServerCredsApi or turnServerUser+turnServerPass arguments');
                        }
                        S(this, he, d);
                        (u && f ? Promise.resolve({
                            turnServerUser: u,
                            turnServerPass: f
                        }) : fetch(a, { credentials: s ? 'include' : void 0 }).then(function (t) {
                            return t.json();
                        }).then(function (t) {
                            if (t.error) {
                                throw t.error;
                            }
                            return t;
                        }).then(i)).catch(function (t) {
                            return z(e, se).call(e, t);
                        }).then(function (t) {
                            var n = t.turnServerUser, a = t.turnServerPass, o = S(e, pe, new le({
                                    iceServers: [{
                                            urls: 'turn:'.concat(r, '?transport=udp'),
                                            username: n,
                                            credential: a
                                        }],
                                    iceTransportPolicy: 'relay'
                                })), i = false;
                            setTimeout(function () {
                                i || (o.close(), z(e, ce).call(e, 'ICE connection timeout!'));
                            }, x);
                            var l = z(e, fe);
                            o.onOpen = function () {
                                i = true;
                                var t = e;
                                !function e(n) {
                                    if (n <= d) {
                                        for (var r = n; r <= Math.min(d, n + m - 1);) {
                                            l[r] = false;
                                            o.send(r);
                                            t.onMsgSent(r);
                                            r++;
                                            
                                        }
                                        setTimeout(function () {
                                            return e(r);
                                        }, g);
                                    } else {
                                        t.onAllMsgsSent(Object.keys(l).length);
                                        var a = function () {
                                                o.close();
                                                z(t, ue).call(t, t.results);
                                                
                                            }, i = setTimeout(a, w), s = Object.values(z(t, fe)).filter(function (t) {
                                                return !t;
                                            }).length;
                                        o.onMessageReceived = function (e) {
                                            clearTimeout(i);
                                            l[e] = true;
                                            t.onMsgReceived(e);
                                            --s <= 0 && Object.values(z(t, fe)).every(function (t) {
                                                return t;
                                            }) ? a() : i = setTimeout(a, w);
                                            
                                        };
                                    }
                                }(1);
                            };
                            o.onMessageReceived = function (t) {
                                l[t] = true;
                                e.onMsgReceived(t);
                                
                            };
                            
                        }).catch(function (t) {
                            return z(e, ce).call(e, t.toString());
                        });
                        
                    }
                    return f(t, [
                        {
                            key: 'onCredentialsFailure',
                            set: function (t) {
                                S(this, se, t);
                            }
                        },
                        {
                            key: 'onConnectionError',
                            set: function (t) {
                                S(this, ce, t);
                            }
                        },
                        {
                            key: 'onFinished',
                            set: function (t) {
                                S(this, ue, t);
                            }
                        },
                        {
                            key: 'results',
                            get: function () {
                                var t = z(this, he), e = Object.keys(z(this, fe)).length, n = Object.entries(z(this, fe)).filter(function (t) {
                                        return !E(t, 2)[1];
                                    }).map(function (t) {
                                        return +E(t, 1)[0];
                                    });
                                return {
                                    totalMessages: t,
                                    numMessagesSent: e,
                                    packetLoss: n.length / e,
                                    lostMessages: n
                                };
                            }
                        }
                    ]), t;
                }()), ve = [
                    'downloadChunkSize',
                    'uploadChunkSize',
                    'downloadApiUrl',
                    'uploadApiUrl'
                ], me = new WeakMap(), be = function (t) {
                    h(n, t);
                    var e = y(n);
                    function n() {
                        var t, r, a, o, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l = i.downloadChunkSize, s = i.uploadChunkSize, u = i.downloadApiUrl, f = i.uploadApiUrl, p = m(i, ve);
                        return c(this, n), C(b(o = e.call(this, p)), me, {
                            writable: true,
                            value: void 0
                        }), (l || s) && (S(b(o), me, new te({
                            download: l ? {
                                apiUrl: u,
                                chunkSize: l
                            } : null,
                            upload: s ? {
                                apiUrl: f,
                                chunkSize: s
                            } : null
                        })), M((t = b(o), d(n.prototype)), 'onCredentialsFailure', M((a = b(o), d(n.prototype)), 'onConnectionError', M((r = b(o), d(n.prototype)), 'onFinished', function () {
                            return z(b(o), me).stop();
                        }, r, true), a, true), t, true)), o;
                    }
                    return f(n, [
                        {
                            key: 'qsParams',
                            set: function (t) {
                                z(this, me) && (z(this, me).qsParams = t);
                            }
                        },
                        {
                            key: 'fetchOptions',
                            set: function (t) {
                                z(this, me) && (z(this, me).fetchOptions = t);
                            }
                        },
                        {
                            key: 'onCredentialsFailure',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onCredentialsFailure', function () {
                                    t.apply(void 0, arguments);
                                    z(e, me) && z(e, me).stop();
                                    
                                }, this, true);
                            }
                        },
                        {
                            key: 'onConnectionError',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onConnectionError', function () {
                                    t.apply(void 0, arguments);
                                    z(e, me) && z(e, me).stop();
                                    
                                }, this, true);
                            }
                        },
                        {
                            key: 'onFinished',
                            set: function (t) {
                                var e = this;
                                M(d(n.prototype), 'onFinished', function () {
                                    t.apply(void 0, arguments);
                                    z(e, me) && z(e, me).stop();
                                    
                                }, this, true);
                            }
                        }
                    ]), n;
                }(de), ge = be, ye = ['reachable'], we = f(function t(e) {
                    var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a = r.timeout, o = void 0 === a ? -1 : a, i = r.fetchOptions, l = void 0 === i ? {} : i;
                    c(this, t);
                    p(this, 'onFinished', function () {
                    });
                    
                    var u = false, f = function (t) {
                            var r = t.reachable, a = m(t, ye);
                            u || (u = true, n.onFinished(s({
                                targetUrl: e,
                                reachable: r
                            }, a)));
                        };
                    fetch(e, l).then(function (t) {
                        f({
                            reachable: true,
                            response: t
                        });
                    }).catch(function (t) {
                        f({
                            reachable: false,
                            error: t
                        });
                    });
                    o > 0 && setTimeout(function () {
                        return f({
                            reachable: false,
                            error: 'Request timeout'
                        });
                    }, o);
                    
                }), Oe = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
                    if (!t.length) {
                        return 0;
                    }
                    var n = t.slice().sort(function (t, e) {
                            return t - e;
                        }), r = (t.length - 1) * e, a = r % 1;
                    if (0 === a) {
                        return n[Math.round(r)];
                    }
                    var o = [
                        Math.floor,
                        Math.ceil
                    ].map(function (t) {
                        return n[t(r)];
                    });
                    return o[0] + (o[1] - o[0]) * a;
                }, xe = new WeakMap(), Me = new WeakMap(), Ee = (function () {
                    function t(e) {
                        var n = this;
                        c(this, t);
                        p(this, 'getLatencyPoints', function (t) {
                            return t.timings.map(function (t) {
                                return t.ping;
                            });
                        });
                        p(this, 'getLatency', function (t) {
                            return Oe(n.getLatencyPoints(t), z(n, xe).latencyPercentile);
                        });
                        p(this, 'getBandwidthPoints', function (t) {
                            return Object.entries(t).map(function (t) {
                                var e = E(t, 2), n = e[0];
                                return e[1].timings.map(function (t) {
                                    var e = t.bps, r = t.duration, a = t.ping, o = t.measTime, i = t.serverTime, l = t.transferSize;
                                    return {
                                        bytes: +n,
                                        bps: e,
                                        duration: r,
                                        ping: a,
                                        measTime: o,
                                        serverTime: i,
                                        transferSize: l
                                    };
                                });
                            }).flat();
                        });
                        p(this, 'getBandwidth', function (t) {
                            return Oe(n.getBandwidthPoints(t).filter(function (t) {
                                return t.duration >= z(n, xe).bandwidthMinRequestDuration;
                            }).map(function (t) {
                                return t.bps;
                            }).filter(function (t) {
                                return t;
                            }), z(n, xe).bandwidthPercentile);
                        });
                        p(this, 'getLoadedLatency', function (t) {
                            return n.getLatency({ timings: z(n, Me).call(n, t) });
                        });
                        p(this, 'getLoadedJitter', function (t) {
                            return n.getJitter({ timings: z(n, Me).call(n, t) });
                        });
                        p(this, 'getLoadedLatencyPoints', function (t) {
                            return n.getLatencyPoints({ timings: z(n, Me).call(n, t) });
                        });
                        p(this, 'getPacketLoss', function (t) {
                            return t.packetLoss;
                        });
                        p(this, 'getPacketLossDetails', function (t) {
                            return t;
                        });
                        p(this, 'getReachability', function (t) {
                            return !!t.reachable;
                        });
                        p(this, 'getReachabilityDetails', function (t) {
                            return {
                                host: t.host,
                                reachable: t.reachable
                            };
                        });
                        C(this, xe, {
                            writable: true,
                            value: void 0
                        });
                        C(this, Me, {
                            writable: true,
                            value: function (t) {
                                return Object.values(t).filter(function (t) {
                                    return t.timings.length && Math.min.apply(Math, k(t.timings.map(function (t) {
                                        return t.duration;
                                    }))) >= z(n, xe).loadedRequestMinDuration;
                                }).map(function (t) {
                                    return t.sideLatency || [];
                                }).flat().slice(-z(n, xe).loadedLatencyMaxPoints);
                            }
                        });
                        S(this, xe, e);
                        
                    }
                    return f(t, [{
                            key: 'getJitter',
                            value: function (t) {
                                var e = this.getLatencyPoints(t);
                                return e.length < 2 ? null : e.reduce(function (t, e) {
                                    var n = t.sumDeltas, r = void 0 === n ? 0 : n, a = t.prevLatency;
                                    return {
                                        sumDeltas: r + (void 0 !== a ? Math.abs(a - e) : 0),
                                        prevLatency: e
                                    };
                                }, {}).sumDeltas / (e.length - 1);
                            }
                        }]), t;
                }()), ke = [
                    'bad',
                    'poor',
                    'average',
                    'good',
                    'great'
                ], je = {
                    loadedLatencyIncrease: function (t) {
                        return t.latency && (t.downLoadedLatency || t.upLoadedLatency) ? Math.max(t.downLoadedLatency, t.upLoadedLatency) - t.latency : void 0;
                    }
                }, Pe = new WeakMap(), ze = (function () {
                    function t(e) {
                        c(this, t);
                        C(this, Pe, {
                            writable: true,
                            value: void 0
                        });
                        S(this, Pe, e);
                        
                    }
                    return f(t, [{
                            key: 'getScores',
                            value: function (t) {
                                var e = Object.assign.apply(Object, k(Object.entries(z(this, Pe).aimMeasurementScoring).map(function (e) {
                                    var n = E(e, 2), r = n[0], a = n[1], o = je.hasOwnProperty(r) ? je[r](t) : t[r];
                                    return void 0 === o ? _e.hasOwnProperty(r) ? p({}, r, _e[r]) : {} : p({}, r, void 0 === o ? 0 : +a(o));
                                })));
                                return Object.assign.apply(Object, [{}].concat(k(Object.entries(z(this, Pe).aimExperiencesDefs).filter(function (t) {
                                    return E(t, 2)[1].input.every(function (t) {
                                        return e.hasOwnProperty(t);
                                    });
                                }).map(function (t) {
                                    var n, r = E(t, 2), a = r[0], o = r[1], l = o.input, s = o.pointThresholds, c = Math.max(0, (n = l.map(function (t) {
                                            return e[t];
                                        }), n.reduce(function (t, e) {
                                            return t + e;
                                        }, 0))), u = i(s, [
                                            0,
                                            1,
                                            2,
                                            3,
                                            4
                                        ])(c);
                                    return p({}, a, {
                                        points: c,
                                        classificationIdx: u,
                                        classificationName: ke[u]
                                    });
                                }))));
                            }
                        }]), t;
                }()), Se = new WeakMap(), Le = new WeakMap(), Ae = new WeakMap(), Te = new WeakMap(), Ce = new WeakMap(), He = new WeakMap(), Re = new WeakMap(), Ne = new WeakMap(), Ve = (function () {
                    function t(e) {
                        var n = this;
                        c(this, t);
                        p(this, 'raw', void 0);
                        p(this, 'getUnloadedLatency', function () {
                            return z(n, Te).call(n, 'getLatency', 'latency');
                        });
                        p(this, 'getUnloadedJitter', function () {
                            return z(n, Te).call(n, 'getJitter', 'latency');
                        });
                        p(this, 'getUnloadedLatencyPoints', function () {
                            return z(n, Te).call(n, 'getLatencyPoints', 'latency', []);
                        });
                        p(this, 'getDownLoadedLatency', function () {
                            return z(n, Te).call(n, 'getLoadedLatency', 'download');
                        });
                        p(this, 'getDownLoadedJitter', function () {
                            return z(n, Te).call(n, 'getLoadedJitter', 'download');
                        });
                        p(this, 'getDownLoadedLatencyPoints', function () {
                            return z(n, Te).call(n, 'getLoadedLatencyPoints', 'download', []);
                        });
                        p(this, 'getUpLoadedLatency', function () {
                            return z(n, Te).call(n, 'getLoadedLatency', 'upload');
                        });
                        p(this, 'getUpLoadedJitter', function () {
                            return z(n, Te).call(n, 'getLoadedJitter', 'upload');
                        });
                        p(this, 'getUpLoadedLatencyPoints', function () {
                            return z(n, Te).call(n, 'getLoadedLatencyPoints', 'upload', []);
                        });
                        p(this, 'getDownloadBandwidth', function () {
                            return z(n, Te).call(n, 'getBandwidth', 'download');
                        });
                        p(this, 'getDownloadBandwidthPoints', function () {
                            return z(n, Te).call(n, 'getBandwidthPoints', 'download', []);
                        });
                        p(this, 'getUploadBandwidth', function () {
                            return z(n, Te).call(n, 'getBandwidth', 'upload');
                        });
                        p(this, 'getUploadBandwidthPoints', function () {
                            return z(n, Te).call(n, 'getBandwidthPoints', 'upload', []);
                        });
                        p(this, 'getPacketLoss', function () {
                            return z(n, Te).call(n, 'getPacketLoss', 'packetLoss');
                        });
                        p(this, 'getPacketLossDetails', function () {
                            return z(n, Te).call(n, 'getPacketLossDetails', 'packetLoss', void 0, true);
                        });
                        p(this, 'getScores', function () {
                            return z(n, Ae).getScores(n.getSummary());
                        });
                        C(this, Se, {
                            writable: true,
                            value: void 0
                        });
                        C(this, Le, {
                            writable: true,
                            value: void 0
                        });
                        C(this, Ae, {
                            writable: true,
                            value: void 0
                        });
                        C(this, Te, {
                            writable: true,
                            value: function (t, e) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                return n.raw.hasOwnProperty(e) && n.raw[e].started ? a && n.raw[e].error ? { error: n.raw[e].error } : z(n, Le)[t](n.raw[e].results) : r;
                            }
                        });
                        C(this, Ce, {
                            writable: true,
                            value: function () {
                                return z(n, Te).call(n, 'getReachability', 'v4Reachability');
                            }
                        });
                        C(this, He, {
                            writable: true,
                            value: function () {
                                return z(n, Te).call(n, 'getReachabilityDetails', 'v4Reachability');
                            }
                        });
                        C(this, Re, {
                            writable: true,
                            value: function () {
                                return z(n, Te).call(n, 'getReachability', 'v6Reachability');
                            }
                        });
                        C(this, Ne, {
                            writable: true,
                            value: function () {
                                return z(n, Te).call(n, 'getReachabilityDetails', 'v6Reachability');
                            }
                        });
                        S(this, Se, e);
                        this.clear();
                        S(this, Le, new Ee(z(this, Se)));
                        S(this, Ae, new ze(z(this, Se)));
                        
                    }
                    return f(t, [
                        {
                            key: 'isFinished',
                            get: function () {
                                return Object.values(this.raw).every(function (t) {
                                    return t.finished;
                                });
                            }
                        },
                        {
                            key: 'clear',
                            value: function () {
                                this.raw = Object.assign.apply(Object, [{}].concat(k(k(new Set(z(this, Se).measurements.map(function (t) {
                                    return t.type;
                                }))).map(function (t) {
                                    return p({}, t, {
                                        started: false,
                                        finished: false,
                                        results: {}
                                    });
                                }))));
                            }
                        },
                        {
                            key: 'getSummary',
                            value: function () {
                                var t = {
                                    download: this.getDownloadBandwidth,
                                    upload: this.getUploadBandwidth,
                                    latency: this.getUnloadedLatency,
                                    jitter: this.getUnloadedJitter,
                                    downLoadedLatency: this.getDownLoadedLatency,
                                    downLoadedJitter: this.getDownLoadedJitter,
                                    upLoadedLatency: this.getUpLoadedLatency,
                                    upLoadedJitter: this.getUpLoadedJitter,
                                    packetLoss: this.getPacketLoss,
                                    v4Reachability: z(this, Ce),
                                    v6Reachability: z(this, Re)
                                };
                                return Object.assign.apply(Object, k(Object.entries(t).map(function (t) {
                                    var e = E(t, 2), n = e[0], r = (0, e[1])();
                                    return void 0 === r ? {} : p({}, n, r);
                                })));
                            }
                        }
                    ]), t;
                }()), De = Ve, Be = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return t ? Math.round(t * Math.pow(10, e)) / Math.pow(10, e) : t;
                }, Ie = function (t) {
                    return t.map(function (t) {
                        return Be(t, 2);
                    });
                }, We = function (t) {
                    return t.map(function (t) {
                        return {
                            bytes: +t.bytes,
                            bps: Be(t.bps)
                        };
                    });
                }, Fe = {
                    latencyMs: [
                        'getUnloadedLatencyPoints',
                        Ie
                    ],
                    download: [
                        'getDownloadBandwidthPoints',
                        We
                    ],
                    upload: [
                        'getUploadBandwidthPoints',
                        We
                    ],
                    downLoadedLatencyMs: [
                        'getDownLoadedLatencyPoints',
                        Ie
                    ],
                    upLoadedLatencyMs: [
                        'getUpLoadedLatencyPoints',
                        Ie
                    ],
                    packetLoss: [
                        'getPacketLossDetails',
                        function (t) {
                            return t.error ? void 0 : {
                                numMessages: t.numMessagesSent,
                                lossRatio: Be(t.packetLoss, 4)
                            };
                        }
                    ]
                }, Ue = function (t, e) {
                    var n = e.apiUrl, r = {
                            enumerable: r.enumerable || false,
                            configurable: true,
                            n: t[n]
                        };
                    Object.entries(Fe).forEach(function (e) {
                        var n = E(e, 2), a = n[0], o = E(n[1], 2), i = o[0], l = o[1], s = void 0 === l ? function (t) {
                                return t;
                            } : l, c = t[i]();
                        c && (r[a] = s(c));
                    });
                    var a = t.getScores();
                    a && (r.scores = Object.assign.apply(Object, [{}].concat(k(Object.entries(a).map(function (t) {
                        var e, n = E(t, 2), r = n[0], a = n[1];
                        return p({}, r, {
                            points: (e = a).points,
                            classification: e.classificationName
                        });
                    })))));
                    fetch(n, {
                        method: 'POST',
                        body: JSON.stringify(r)
                    });
                    
                }, Ze = ['type'], qe = ['numPackets'], $e = ['bytes'], Je = [
                    'latency',
                    'latencyUnderLoad',
                    'download',
                    'upload'
                ], Ge = function () {
                    return ''.concat(Math.round(10000000000000000 * Math.random()));
                }, Ke = new WeakMap(), Qe = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), nn = new WeakMap(), rn = new WeakMap(), an = new WeakMap(), on = new WeakMap(), ln = new WeakMap(), sn = new WeakMap(), cn = new WeakMap(), un = new WeakSet(), fn = new WeakSet(), pn = new WeakSet(), hn = new WeakSet(), dn = new WeakSet(), vn = new WeakSet(), mn = new WeakSet(), bn = (function () {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        c(this, t);
                        H(this, mn);
                        H(this, vn);
                        H(this, dn);
                        H(this, hn);
                        H(this, pn);
                        H(this, fn);
                        H(this, un);
                        p(this, 'onRunningChange', function () {
                        });
                        p(this, 'onResultsChange', function () {
                        });
                        C(this, Ke, {
                            writable: true,
                            value: function () {
                            }
                        });
                        C(this, Qe, {
                            writable: true,
                            value: function () {
                            }
                        });
                        C(this, tn, {
                            writable: true,
                            value: void 0
                        });
                        C(this, en, {
                            writable: true,
                            value: void 0
                        });
                        C(this, nn, {
                            writable: true,
                            value: Ge()
                        });
                        C(this, rn, {
                            writable: true,
                            value: -1
                        });
                        C(this, an, {
                            writable: true,
                            value: void 0
                        });
                        C(this, on, {
                            writable: true,
                            value: 1000000
                        });
                        C(this, ln, {
                            writable: true,
                            value: 1000000
                        });
                        C(this, sn, {
                            writable: true,
                            value: false
                        });
                        C(this, cn, {
                            writable: true,
                            value: false
                        });
                        S(this, tn, Object.assign({}, N, e, V));
                        S(this, en, new De(z(this, tn)));
                        z(this, tn).autoStart && this.play();
                        
                    }
                    return f(t, [
                        {
                            key: 'results',
                            get: function () {
                                return z(this, en);
                            }
                        },
                        {
                            key: 'isRunning',
                            get: function () {
                                return z(this, sn);
                            }
                        },
                        {
                            key: 'isFinished',
                            get: function () {
                                return z(this, cn);
                            }
                        },
                        {
                            key: 'onFinish',
                            set: function (t) {
                                S(this, Ke, t);
                            }
                        },
                        {
                            key: 'onError',
                            set: function (t) {
                                S(this, Qe, t);
                            }
                        },
                        {
                            key: 'pause',
                            value: function () {
                                Je.includes(A(this, pn, wn).call(this)) && z(this, an).pause();
                                A(this, un, gn).call(this, false);
                                
                            }
                        },
                        {
                            key: 'play',
                            value: function () {
                                z(this, sn) || (A(this, un, gn).call(this, true), A(this, mn, En).call(this));
                            }
                        },
                        {
                            key: 'restart',
                            value: function () {
                                A(this, dn, xn).call(this);
                                this.play();
                                
                            }
                        }
                    ]), t;
                }());
            function gn(t) {
                if (t !== z(this, sn)) {
                    S(this, sn, t);
                    this.onRunningChange(z(this, sn));
                }
            }
            function yn(t) {
                var e = this;
                if (t !== z(this, cn)) {
                    S(this, cn, t);
                    t && setTimeout(function () {
                        return z(e, Ke).call(e, e.results);
                    });
                }
            }
            function wn() {
                return z(this, rn) < 0 || z(this, rn) >= z(this, tn).measurements.length ? null : z(this, tn).measurements[z(this, rn)].type;
            }
            function On() {
                return z(this, en).raw[A(this, pn, wn).call(this)] || void 0;
            }
            function xn() {
                A(this, vn, Mn).call(this);
                S(this, nn, Ge());
                S(this, rn, -1);
                S(this, an, void 0);
                A(this, un, gn).call(this, false);
                A(this, fn, yn).call(this, false);
                z(this, en).clear();
                
            }
            function Mn() {
                var t = z(this, an);
                t && (t.onFinished = t.onConnectionError = t.onFail = t.onMsgReceived = t.onCredentialsFailure = t.onMeasurementResult = function () {
                }, Je.includes(A(this, pn, wn).call(this)) && t.pause());
            }
            function En() {
                var t, e = this;
                if (!(Je.includes(A(this, pn, wn).call(this)) && A(this, hn, On).call(this) && A(this, hn, On).call(this).started) || A(this, hn, On).call(this).finished || A(this, hn, On).call(this).finishedCurrentRound || A(this, hn, On).call(this).error) {
                    if (S(this, rn, (t = z(this, rn), ++t)), z(this, rn) >= z(this, tn).measurements.length) {
                        return A(this, un, gn).call(this, false), void A(this, fn, yn).call(this, true);
                    }
                    var n, r = z(this, tn).measurements[z(this, rn)], a = r.type, o = m(r, Ze), i = A(this, hn, On).call(this), l = z(this, tn), c = l.downloadApiUrl, u = l.uploadApiUrl, f = l.estimatedServerTime;
                    switch (a) {
                    case 'v4Reachability':
                    case 'v6Reachability':
                        (n = new we('https://'.concat(o.host), {
                            fetchOptions: {
                                method: 'GET',
                                mode: 'no-cors'
                            }
                        })).onFinished = function (t) {
                            i.finished = true;
                            i.results = s({ host: o.host }, t);
                            e.onResultsChange({ type: a });
                            A(e, mn, En).call(e);
                            
                        };
                        break;
                    case 'rpki':
                        (n = new we('https://'.concat(z(this, tn).rpkiInvalidHost), { timeout: 5000 })).onFinished = function (t) {
                            (t.response ? t.response.json() : Promise.resolve()).then(function (n) {
                                i.finished = true;
                                i.results = s({
                                    host: z(e, tn).rpkiInvalidHost,
                                    filteringInvalids: !t.reachable
                                }, n ? {
                                    asn: n.asn,
                                    name: n.name
                                } : {});
                                e.onResultsChange({ type: a });
                                A(e, mn, En).call(e);
                                
                            });
                        };
                        break;
                    case 'nxdomain':
                        (n = new we('https://'.concat(o.nxhost), { fetchOptions: { mode: 'no-cors' } })).onFinished = function (t) {
                            i.finished = true;
                            i.results = {
                                host: o.nxhost,
                                reachable: t.reachable
                            };
                            e.onResultsChange({ type: a });
                            A(e, mn, En).call(e);
                            
                        };
                        break;
                    case 'packetLoss':
                    case 'packetLossUnderLoad':
                        i.finished = false;
                        var p = o.numPackets, h = m(o, qe), d = z(this, tn), v = d.turnServerUri, b = d.turnServerCredsApiUrl, g = d.turnServerUser, y = d.turnServerPass, w = d.includeCredentials;
                        (n = new ge(s({
                            turnServerUri: v,
                            turnServerCredsApi: b,
                            turnServerCredsApiIncludeCredentials: w,
                            turnServerUser: g,
                            turnServerPass: y,
                            numMsgs: p,
                            downloadChunkSize: o.loadDown ? z(this, on) : void 0,
                            uploadChunkSize: o.loadUp ? z(this, ln) : void 0,
                            downloadApiUrl: c,
                            uploadApiUrl: u
                        }, h))).onMsgReceived = function () {
                            i.results = Object.assign({}, n.results);
                            e.onResultsChange({ type: a });
                            
                        }, n.onFinished = function () {
                            i.finished = true;
                            e.onResultsChange({ type: a });
                            A(e, mn, En).call(e);
                            
                        }, n.onConnectionError = function (t) {
                            i.error = t;
                            e.onResultsChange({ type: a });
                            z(e, Qe).call(e, 'Connection error while measuring packet loss: '.concat(t));
                            A(e, mn, En).call(e);
                            
                        }, n.onCredentialsFailure = function () {
                            i.error = 'unable to get turn server credentials';
                            e.onResultsChange({ type: a });
                            z(e, Qe).call(e, 'Error while measuring packet loss: unable to get turn server credentials.');
                            A(e, mn, En).call(e);
                            
                        };
                        break;
                    case 'latency':
                    case 'latencyUnderLoad':
                        i.finished = false, (n = new It([{
                                dir: 'down',
                                bytes: 0,
                                count: o.numPackets,
                                bypassMinDuration: true
                            }], {
                            downloadApiUrl: c,
                            uploadApiUrl: u,
                            estimatedServerTime: f,
                            logApiUrl: z(this, tn).logMeasurementApiUrl,
                            measurementId: z(this, nn),
                            downloadChunkSize: o.loadDown ? z(this, on) : void 0,
                            uploadChunkSize: o.loadUp ? z(this, ln) : void 0
                        })).fetchOptions = { credentials: z(this, tn).includeCredentials ? 'include' : void 0 }, n.onMeasurementResult = n.onNewMeasurementStarted = function (t, n) {
                            i.results = Object.assign({}, n.down[0]);
                            e.onResultsChange({ type: a });
                            
                        }, n.onFinished = function () {
                            i.finished = true;
                            e.onResultsChange({ type: a });
                            z(e, sn) && A(e, mn, En).call(e);
                            
                        }, n.onConnectionError = function (t) {
                            i.error = t;
                            e.onResultsChange({ type: a });
                            z(e, Qe).call(e, 'Connection error while measuring latency: '.concat(t));
                            A(e, mn, En).call(e);
                            
                        }, n.play();
                        break;
                    case 'download':
                    case 'upload':
                        if (i.finished || i.error) {
                            A(this, mn, En).call(this);
                        } else {
                 