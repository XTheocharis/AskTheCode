(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [
        888,
        741
    ],
    {
        22741: function (e, t, n) {
            'use strict';
            var r = n(33227), u = n(88361), o = n(85971), i = n(52715), c = n(91193), a = n(87794);
            function p(e) {
                var t = (function () {
                    if ('undefined' === typeof Reflect || !Reflect.construct) {
                        return false;
                    }
                    if (Reflect.construct.sham) {
                        return false;
                    }
                    if ('function' === typeof Proxy) {
                        return true;
                    }
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                        })), true;
                    } catch (e) {
                        return false;
                    }
                }());
                return function () {
                    var n, r = c(e);
                    if (t) {
                        var u = c(this).constructor;
                        n = Reflect.construct(r, arguments, u);
                    } else {
                        n = r.apply(this, arguments);
                    }
                    return i(this, n);
                };
            }
            Object.defineProperty(t, '__esModule', { value: true });
            Object.defineProperty(t, 'AppInitialProps', {
                enumerable: true,
                get: function () {
                    return l.AppInitialProps;
                }
            });
            Object.defineProperty(t, 'NextWebVitalsMetric', {
                enumerable: true,
                get: function () {
                    return l.NextWebVitalsMetric;
                }
            });
            Object.defineProperty(t, 'AppType', {
                enumerable: true,
                get: function () {
                    return l.AppType;
                }
            });
            t.default = void 0;
            
            var f = n(60932).Z, s = (0, n(92648).Z)(n(67294)), l = n(99475);
            function d(e) {
                return v.apply(this, arguments);
            }
            function v() {
                return (v = f(a.mark(function e(t) {
                    var n, r, u;
                    return a.wrap(function (e) {
                        for (;;) {
                            switch (e.prev = e.next) {
                            case 0:
                                return n = t.Component, r = t.ctx, e.next = 3, l.loadGetInitialProps(n, r);
                            case 3:
                                return u = e.sent, e.abrupt('return', { pageProps: u });
                            case 5:
                            case 'end':
                                return e.stop();
                            }
                        }
                    }, e);
                }))).apply(this, arguments);
            }
            var y = function (e) {
                o(n, e);
                var t = p(n);
                function n() {
                    return r(this, n), t.apply(this, arguments);
                }
                return u(n, [{
                        key: 'render',
                        value: function () {
                            var e = this.props, t = e.Component, n = e.pageProps;
                            return s.default.createElement(t, Object.assign({}, n));
                        }
                    }]), n;
            }(s.default.Component);
            y.origGetInitialProps = d;
            y.getInitialProps = d;
            t.default = y;
            
        },
        41597: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/_app',
                function () {
                    return n(22741);
                }
            ]);
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t);
        };
        e.O(0, [
            774,
            179
        ], function () {
            return t(41597), t(69898);
        });
        var n = e.O();
        _N_E = n;
    }
]);