extjs-data': '1' })
                }).then(function (n) {
                    return !n.ok && t > 1 && n.status >= 500 ? $(e, t - 1, r) : n;
                });
            }
            var X = {};
            function Y(e) {
                var t = document.documentElement, r = t.style.scrollBehavior;
                t.style.scrollBehavior = 'auto';
                e();
                t.style.scrollBehavior = r;
                
            }
            function J(e) {
                try {
                    return JSON.parse(e);
                } catch (t) {
                    return null;
                }
            }
            function Q(e) {
                var t, r = e.dataHref, n = e.inflightCache, a = e.isPrefetch, o = e.hasMiddleware, i = e.isServerRender, u = e.parseJSON, c = e.persistCache, s = e.isBackground, l = e.unstable_skipClientCache, f = new URL(r, window.location.href).href, d = function (e) {
                        return $(r, i ? 3 : 1, {
                            headers: a ? { purpose: 'prefetch' } : {},
                            method: null != (t = null == e ? void 0 : e.method) ? t : 'GET'
                        }).then(function (t) {
                            return t.ok && 'HEAD' === (null == e ? void 0 : e.method) ? {
                                dataHref: r,
                                response: t,
                                text: '',
                                json: {},
                                cacheKey: f
                            } : t.text().then(function (e) {
                                if (!t.ok) {
                                    if (o && [
                                            301,
                                            302,
                                            307,
                                            308
                                        ].includes(t.status)) {
                                        return {
                                            dataHref: r,
                                            response: t,
                                            text: e,
                                            json: {},
                                            cacheKey: f
                                        };
                                    }
                                    var n;
                                    if (!o && 404 === t.status) {
                                        if (null == (n = J(e)) ? void 0 : n.notFound) {
                                            return {
                                                dataHref: r,
                                                json: { notFound: K },
                                                response: t,
                                                text: e,
                                                cacheKey: f
                                            };
                                        }
                                    }
                                    var a = new Error('Failed to load static props');
                                    throw i || p.markAssetError(a), a;
                                }
                                return {
                                    dataHref: r,
                                    json: u ? J(e) : null,
                                    response: t,
                                    text: e,
                                    cacheKey: f
                                };
                            });
                        }).then(function (e) {
                            return c && 'no-cache' !== e.response.headers.get('x-middleware-cache') || delete n[f], e;
                        }).catch(function (e) {
                            throw delete n[f], e;
                        });
                    };
                return l && c ? d({}).then(function (e) {
                    return n[f] = Promise.resolve(e), e;
                }) : void 0 !== n[f] ? n[f] : n[f] = d(s ? { method: 'HEAD' } : {});
            }
            function ee() {
                return Math.random().toString(36).slice(2, 10);
            }
            function te(e) {
                var t = e.url, r = e.router;
                if (t === C.addBasePath(k.addLocale(r.asPath, r.locale))) {
                    throw new Error('Invariant: attempted to hard navigate to the same URL '.concat(t, ' ').concat(location.href));
                }
                window.location.href = t;
            }
            var re = function (e) {
                    var t = e.route, r = e.router, n = false, a = r.clc = function () {
                            n = true;
                        };
                    return function () {
                        if (n) {
                            var e = new Error('Abort fetching component for route: "'.concat(t, '"'));
                            throw e.cancelled = true, e;
                        }
                        a === r.clc && (r.clc = null);
                    };
                }, ne = (function () {
                    function e(t, r, a, o) {
                        var i = this, u = o.initialProps, c = o.pageLoader, s = o.App, l = o.wrapApp, f = o.Component, p = o.err, h = o.subscription, v = o.isFallback, m = o.locale, y = (o.locales, o.defaultLocale, o.domainLocales, o.isPreview);
                        n(this, e);
                        this.sdc = {};
                        this.isFirstPopStateEvent = true;
                        this._key = ee();
                        this.onPopState = function (e) {
                            var t = i.isFirstPopStateEvent;
                            i.isFirstPopStateEvent = false;
                            var r = e.state;
                            if (r) {
                                if (r.__NA) {
                                    window.location.reload();
                                } else {
                                    if (r.__N && (!t || i.locale !== r.options.locale || r.as !== i.asPath)) {
                                        var n = r.url, a = r.as, o = r.options, u = r.key;
                                        i._key = u;
                                        var c = x.parseRelativeUrl(n).pathname;
                                        i.isSsr && a === C.addBasePath(i.asPath) && c === C.addBasePath(i.pathname) || i._bps && !i._bps(r) || i.change('replaceState', n, a, Object.assign({}, o, {
                                            shallow: o.shallow && i._shallow,
                                            locale: o.locale || i.defaultLocale,
                                            _h: 0
                                        }), undefined);
                                    }
                                }
                            } else {
                                var s = i.pathname, l = i.query;
                                i.changeState('replaceState', j.formatWithValidation({
                                    pathname: C.addBasePath(s),
                                    query: l
                                }), _.getURL());
                            }
                        };
                        
                        var g = d.removeTrailingSlash(t);
                        this.components = {};
                        '/_error' !== t && (this.components[g] = {
                            Component: f,
                            initial: true,
                            props: u,
                            err: p,
                            __N_SSG: u && u.__N_SSG,
                            __N_SSP: u && u.__N_SSP
                        });
                        this.components['/_app'] = {
                            Component: s,
                            styleSheets: []
                        };
                        this.events = e.events;
                        this.pageLoader = c;
                        
                        var P = b.isDynamicRoute(t) && self.__NEXT_DATA__.autoExport;
                        if (this.basePath = '', this.sub = h, this.clc = null, this._wrapApp = l, this.isSsr = true, this.isLocaleDomain = false, this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !P && !self.location.search), this.state = {
                                route: g,
                                pathname: t,
                                query: r,
                                asPath: P ? t : a,
                                isPreview: !!y,
                                locale: void 0,
                                isFallback: v
                            }, this._initialMatchesMiddlewarePromise = Promise.resolve(false), !a.startsWith('//')) {
                            var w = { locale: m }, S = _.getURL();
                            this._initialMatchesMiddlewarePromise = B({
                                router: this,
                                locale: m,
                                asPath: S
                            }).then(function (e) {
                                return w._shouldResolveHref = a !== t, i.changeState('replaceState', e ? S : j.formatWithValidation({
                                    pathname: C.addBasePath(t),
                                    query: r
                                }), S, w), e;
                            });
                        }
                        window.addEventListener('popstate', this.onPopState);
                    }
                    return a(e, [
                        {
                            key: 'reload',
                            value: function () {
                                window.location.reload();
                            }
                        },
                        {
                            key: 'back',
                            value: function () {
                                window.history.back();
                            }
                        },
                        {
                            key: 'push',
                            value: function (e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                var n = G(this, e, t);
                                return e = n.url, t = n.as, this.change('pushState', e, t, r);
                            }
                        },
                        {
                            key: 'replace',
                            value: function (e, t) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = G(this, e, t);
                                return e = n.url, t = n.as, this.change('replaceState', e, t, r);
                            }
                        },
                        {
                            key: 'change',
                            value: function (t, r, n, a, s) {
                                var l = this;
                                return u(i.mark(function u() {
                                    var f, m, y, g, P, w, A, T, I, q, H, z, V, $, X, Y, J, Q, ee, re, ne, ae, oe, ie, ue, ce, se, le, fe, de, pe, he, ve, me, ye, ge, _e, be, xe, Pe, we, Se, Ee, je, Oe, ke, Re, Me, Ce, Le, Ae, Te, Ne, Ie, De, Be, qe, He;
                                    return i.wrap(function (i) {
                                        for (;;) {
                                            switch (i.prev = i.next) {
                                            case 0:
                                                if (W(r)) {
                                                    i.next = 3;
                                                    break;
                                                }
                                                return te({
                                                    url: r,
                                                    router: l
                                                }), i.abrupt('return', false);
                                            case 3:
                                                if (f = a._h, m = f || a._shouldResolveHref || O.parsePath(r).pathname === O.parsePath(n).pathname, y = c({}, l.state), g = true !== l.isReady, l.isReady = true, P = l.isSsr, f || (l.isSsr = false), !f || !l.clc) {
                                                    i.next = 12;
                                                    break;
                                                }
                                                return i.abrupt('return', false);
                                            case 12:
                                                w = y.locale, i.next = 25;
                                                break;
                                            case 25:
                                                if (_.ST && performance.mark('routeChange'), T = a.shallow, I = void 0 !== T && T, q = a.scroll, H = void 0 === q || q, z = { shallow: I }, l._inFlightRoute && l.clc && (P || e.events.emit('routeChangeError', D(), l._inFlightRoute, z), l.clc(), l.clc = null), n = C.addBasePath(k.addLocale(L.hasBasePath(n) ? M.removeBasePath(n) : n, a.locale, l.defaultLocale)), V = R.removeLocale(L.hasBasePath(n) ? M.removeBasePath(n) : n, y.locale), l._inFlightRoute = n, $ = w !== y.locale, f || !l.onlyAHashChange(V) || $) {
                                                    i.next = 49;
                                                    break;
                                                }
                                                return y.asPath = V, e.events.emit('hashChangeStart', n, z), l.changeState(t, r, n, c({}, a, { scroll: false })), H && l.scrollToHash(V), i.prev = 38, i.next = 41, l.set(y, l.components[y.route], null);
                                            case 41:
                                                i.next = 47;
                                                break;
                                            case 43:
                                                throw i.prev = 43, i.t0 = i.catch(38), v.default(i.t0) && i.t0.cancelled && e.events.emit('routeChangeError', i.t0, V, z), i.t0;
                                            case 47:
                                                return e.events.emit('hashChangeComplete', n, z), i.abrupt('return', true);
                                            case 49:
                                                return X = x.parseRelativeUrl(r), Y = X.pathname, J = X.query, i.prev = 51, i.next = 54, Promise.all([
                                                    l.pageLoader.getPageList(),
                                                    p.getClientBuildManifest(),
                                                    l.pageLoader.getMiddleware()
                                                ]);
                                            case 54:
                                                ee = i.sent, re = o(ee, 2), Q = re[0], re[1].__rewrites, i.next = 64;
                                                break;
                                            case 60:
                                                return i.prev = 60, i.t1 = i.catch(51), te({
                                                    url: n,
                                                    router: l
                                                }), i.abrupt('return', false);
                                            case 64:
                                                return l.urlIsNew(V) || $ || (t = 'replaceState'), ne = n, Y = Y ? d.removeTrailingSlash(M.removeBasePath(Y)) : Y, i.next = 69, B({
                                                    asPath: n,
                                                    locale: y.locale,
                                                    router: l
                                                });
                                            case 69:
                                                if (ae = i.sent, a.shallow && ae && (Y = l.pathname), !m || '/_error' === Y) {
                                                    i.next = 84;
                                                    break;
                                                }
                                                a._shouldResolveHref = true, i.next = 82;
                                                break;
                                            case 78:
                                                ae || (ne = oe.asPath), oe.matchedPage && oe.resolvedHref && (Y = oe.resolvedHref, X.pathname = C.addBasePath(Y), ae || (r = j.formatWithValidation(X))), i.next = 84;
                                                break;
                                            case 82:
                                                X.pathname = Z(Y, Q), X.pathname !== Y && (Y = X.pathname, X.pathname = C.addBasePath(Y), ae || (r = j.formatWithValidation(X)));
                                            case 84:
                                                if (W(n)) {
                                                    i.next = 89;
                                                    break;
                                                }
                                                i.next = 87;
                                                break;
                                            case 87:
                                                return te({
                                                    url: n,
                                                    router: l
                                                }), i.abrupt('return', false);
                                            case 89:
                                                if (ne = R.removeLocale(M.removeBasePath(ne), y.locale), ie = d.removeTrailingSlash(Y), ue = false, !b.isDynamicRoute(ie)) {
                                                    i.next = 107;
                                                    break;
                                                }
                                                if (A = x.parseRelativeUrl(ne), ce = A.pathname, se = E.getRouteRegex(ie), ue = S.getRouteMatcher(se)(ce), fe = (le = ie === ce) ? U(ie, ce, J) : {}, ue && (!le || fe.result)) {
                                                    i.next = 106;
                                                    break;
                                                }
                                                if (!((de = Object.keys(se.groups).filter(function (e) {
                                                        return !J[e];
                                                    })).length > 0) || ae) {
                                                    i.next = 104;
                                                    break;
                                                }
                                                throw new Error((le ? 'The provided `href` ('.concat(r, ') value is missing query values (').concat(de.join(', '), ') to be interpolated properly. ') : 'The provided `as` value ('.concat(ce, ') is incompatible with the `href` value (').concat(ie, '). ')) + 'Read more: https://nextjs.org/docs/messages/'.concat(le ? 'href-interpolation-failed' : 'incompatible-href-as'));
                                            case 104:
                                                i.next = 107;
                                                break;
                                            case 106:
                                                le ? n = j.formatWithValidation(Object.assign({}, A, {
                                                    pathname: fe.result,
                                                    query: F(J, fe.params)
                                                })) : Object.assign(J, ue);
                                            case 107:
                                                return f || e.events.emit('routeChangeStart', n, z), i.prev = 108, i.next = 111, l.getRouteInfo({
                                                    route: ie,
                                                    pathname: Y,
                                                    query: J,
                                                    as: n,
                                                    resolvedAs: ne,
                                                    routeProps: z,
                                                    locale: y.locale,
                                                    isPreview: y.isPreview,
                                                    hasMiddleware: ae
                                                });
                                            case 111:
                                                if ('route' in (ve = i.sent) && ae && (Y = ve.route || ie, ie = Y, z.shallow || (J = Object.assign({}, ve.query || {}, J)), me = L.hasBasePath(X.pathname) ? M.removeBasePath(X.pathname) : X.pathname, ue && Y !== me && Object.keys(ue).forEach(function (e) {
                                                        ue && J[e] === ue[e] && delete J[e];
                                                    }), b.isDynamicRoute(Y) && (ye = !z.shallow && ve.resolvedAs ? ve.resolvedAs : C.addBasePath(k.addLocale(new URL(n, location.href).pathname, y.locale), true), ge = ye, L.hasBasePath(ge) && (ge = M.removeBasePath(ge)), _e = E.getRouteRegex(Y), (be = S.getRouteMatcher(_e)(ge)) && Object.assign(J, be))), !('type' in ve)) {
                                                    i.next = 120;
                                                    break;
                                                }
                                                if ('redirect-internal' !== ve.type) {
                                                    i.next = 118;
                                                    break;
                                                }
                                                return i.abrupt('return', l.change(t, ve.newUrl, ve.newAs, a));
                                            case 118:
                                                return te({
                                                    url: ve.destination,
                                                    router: l
                                                }), i.abrupt('return', new Promise(function () {
                                                }));
                                            case 120:
                                                if (Pe = (xe = ve).error, we = xe.props, Se = xe.__N_SSG, Ee = xe.__N_SSP, (je = ve.Component) && je.unstable_scriptLoader && [].concat(je.unstable_scriptLoader()).forEach(function (e) {
                                                        h.handleClientScriptLoad(e.props);
                                                    }), !Se && !Ee || !we) {
                                                    i.next = 150;
                                                    break;
                                                }
                                                if (!we.pageProps || !we.pageProps.__N_REDIRECT) {
                                                    i.next = 134;
                                                    break;
                                                }
                                                if (a.locale = false, !(Oe = we.pageProps.__N_REDIRECT).startsWith('/') || false === we.pageProps.__N_REDIRECT_BASE_PATH) {
                                                    i.next = 132;
                                                    break;
                                                }
                                                return (ke = x.parseRelativeUrl(Oe)).pathname = Z(ke.pathname, Q), Re = G(l, Oe, Oe), Me = Re.url, Ce = Re.as, i.abrupt('return', l.change(t, Me, Ce, a));
                                            case 132:
                                                return te({
                                                    url: Oe,
                                                    router: l
                                                }), i.abrupt('return', new Promise(function () {
                                                }));
                                            case 134:
                                                if (y.isPreview = !!we.__N_PREVIEW, we.notFound !== K) {
                                                    i.next = 150;
                                                    break;
                                                }
                                                return i.prev = 136, i.next = 139, l.fetchComponent('/404');
                                            case 139:
                                                Le = '/404', i.next = 145;
                                                break;
                                            case 142:
                                                i.prev = 142, i.t2 = i.catch(136), Le = '/_error';
                                            case 145:
                                                return i.next = 147, l.getRouteInfo({
                                                    route: Le,
                                                    pathname: Le,
                                                    query: J,
                                                    as: n,
                                                    resolvedAs: ne,
                                                    routeProps: { shallow: false },
                                                    locale: y.locale,
                                                    isPreview: y.isPreview
                                                });
                                            case 147:
                                                if (!('type' in (ve = i.sent))) {
                                                    i.next = 150;
                                                    break;
                                                }
                                                throw new Error('Unexpected middleware effect on /404');
                                            case 150:
                                                if (e.events.emit('beforeHistoryChange', n, z), l.changeState(t, r, n, a), f && '/_error' === Y && 500 === (null == (pe = self.__NEXT_DATA__.props) || null == (he = pe.pageProps) ? void 0 : he.statusCode) && (null == we ? void 0 : we.pageProps) && (we.pageProps.statusCode = 500), Te = a.shallow && y.route === (null != (Ae = ve.route) ? Ae : ie), Ie = null != (Ne = a.scroll) ? Ne : !a._h && !Te, De = Ie ? {
                                                        x: 0,
                                                        y: 0
                                                    } : null, Be = c({}, y, {
                                                        route: ie,
                                                        pathname: Y,
                                                        query: J,
                                                        asPath: V,
                                                        isFallback: false
                                                    }), qe = null != s ? s : De, a._h && !qe && !g && !$ && N.compareRouterStates(Be, l.state)) {
                                                    i.next = 169;
                                                    break;
                                                }
                                                return i.next = 162, l.set(Be, ve, qe).catch(function (e) {
                                                    if (!e.cancelled) {
                                                        throw e;
                                                    }
                                                    Pe = Pe || e;
                                                });
                                            case 162:
                                                if (!Pe) {
                                                    i.next = 165;
                                                    break;
                                                }
                                                throw f || e.events.emit('routeChangeError', Pe, V, z), Pe;
                                            case 165:
                                                0, f || e.events.emit('routeChangeComplete', n, z), He = /#.+$/, Ie && He.test(n) && l.scrollToHash(n);
                                            case 169:
                                                return i.abrupt('return', true);
                                            case 172:
                                                if (i.prev = 172, i.t3 = i.catch(108), !v.default(i.t3) || !i.t3.cancelled) {
                                                    i.next = 176;
                                                    break;
                                                }
                                                return i.abrupt('return', false);
                                            case 176:
                                                throw i.t3;
                                            case 177:
                                            case 'end':
                                                return i.stop();
                                            }
                                        }
                                    }, u, null, [
                                        [
                                            38,
                                            43
                                        ],
                                        [
                                            51,
                                            60
                                        ],
                                        [
                                            108,
                                            172
                                        ],
                                        [
                                            136,
                                            142
                                        ]
                                    ]);
                                }))();
                            }
                        },
                        {
                            key: 'changeState',
                            value: function (e, t, r) {
                                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                'pushState' === e && _.getURL() === r || (this._shallow = n.shallow, window.history[e]({
                                    url: t,
                                    as: r,
                                    options: n,
                                    __N: true,
                                    key: this._key = 'pushState' !== e ? this._key : ee()
                                }, '', r));
                            }
                        },
                        {
                            key: 'handleRouteInfoError',
                            value: function (t, r, n, a, o, c) {
                                var s = this;
                                return u(i.mark(function u() {
                                    var l, f, d, h;
                                    return i.wrap(function (i) {
                                        for (;;) {
                                            switch (i.prev = i.next) {
                                            case 0:
                                                if (console.error(t), !t.cancelled) {
                                                    i.next = 3;
                                                    break;
                                                }
                                                throw t;
                                            case 3:
                                                if (!p.isAssetError(t) && !c) {
                                                    i.next = 7;
                                                    break;
                                                }
                                                throw e.events.emit('routeChangeError', t, a, o), te({
                                                    url: a,
                                                    router: s
                                                }), D();
                                            case 7:
                                                return i.prev = 7, i.next = 10, s.fetchComponent('/_error');
                                            case 10:
                                                if (l = i.sent, f = l.page, d = l.styleSheets, (h = {
                                                        props: undefined,
                                                        Component: f,
                                                        styleSheets: d,
                                                        err: t,
                                                        error: t
                                                    }).props) {
                                                    i.next = 25;
                                                    break;
                                                }
                                                return i.prev = 15, i.next = 18, s.getInitialProps(f, {
                                                    err: t,
                                                    pathname: r,
                                                    query: n
                                                });
                                            case 18:
                                                h.props = i.sent, i.next = 25;
                                                break;
                                            case 21:
                                                i.prev = 21, i.t0 = i.catch(15), console.error('Error in error page `getInitialProps`: ', i.t0), h.props = {};
                                            case 25:
                                                return i.abrupt('return', h);
                                            case 28:
                                                return i.prev = 28, i.t1 = i.catch(7), i.abrupt('return', s.handleRouteInfoError(v.default(i.t1) ? i.t1 : new Error(i.t1 + ''), r, n, a, o, true));
                                            case 31:
                                            case 'end':
                                                return i.stop();
                                            }
                                        }
                                    }, u, null, [
                                        [
                                            7,
                                            28
                                        ],
                                        [
                                            15,
                                            21
                                        ]
                                    ]);
                                }))();
                            }
                        },
                        {
                            key: 'getRouteInfo',
                            value: function (e) {
                                var t = e.route, r = e.pathname, n = e.query, a = e.as, o = e.resolvedAs, s = e.routeProps, l = e.locale, f = e.hasMiddleware, p = e.isPreview, h = e.unstable_skipClientCache, m = this;
                                return u(i.mark(function e() {
                                    var g, _, b, x, P, w, S, E, O, k, R, C, L, A;
                                    return i.wrap(function (e) {
                                        for (;;) {
                                            switch (e.prev = e.next) {
                                            case 0:
                                                if (g = t, e.prev = 1, P = re({
                                                        route: g,
                                                        router: m
                                                    }), w = m.components[g], !s.shallow || !w || m.route !== g) {
                                                    e.next = 6;
                                                    break;
                                                }
                                                return e.abrupt('return', w);
                                            case 6:
                                                return f && (w = void 0), S = w && !('initial' in w) ? w : void 0, E = {
                                                    dataHref: m.pageLoader.getDataHref({
                                                        href: j.formatWithValidation({
                                                            pathname: r,
                                                            query: n
                                                        }),
                                                        skipInterpolation: true,
                                                        asPath: o,
                                                        locale: l
                                                    }),
                                                    hasMiddleware: true,
                                                    isServerRender: m.isSsr,
                                                    parseJSON: true,
                                                    inflightCache: m.sdc,
                                                    persistCache: !p,
                                                    isPrefetch: false,
                                                    unstable_skipClientCache: h
                                                }, e.next = 11, V({
                                                    fetchData: function () {
                                                        return Q(E);
                                                    },
                                                    asPath: o,
                                                    locale: l,
                                                    router: m
                                                });
                                            case 11:
                                                if (O = e.sent, P(), 'redirect-internal' !== (null == O || null == (_ = O.effect) ? void 0 : _.type) && 'redirect-external' !== (null == O || null == (b = O.effect) ? void 0 : b.type)) {
                                                    e.next = 15;
                                                    break;
                                                }
                                                return e.abrupt('return', O.effect);
                                            case 15:
                                                if ('rewrite' !== (null == O || null == (x = O.effect) ? void 0 : x.type)) {
                                                    e.next = 23;
                                                    break;
                                                }
                                                if (g = d.removeTrailingSlash(O.effect.resolvedHref), r = O.effect.resolvedHref, n = c({}, n, O.effect.parsedAs.query), o = M.removeBasePath(y.normalizeLocalePath(O.effect.parsedAs.pathname, m.locales).pathname), w = m.components[g], !s.shallow || !w || m.route !== g || f) {
                                                    e.next = 23;
                                                    break;
                                                }
                                                return e.abrupt('return', c({}, w, { route: g }));
                                            case 23:
                                                if ('/api' !== g && !g.startsWith('/api/')) {
                                                    e.next = 26;
                                                    break;
                                                }
                                                return te({
                                                    url: a,
                                                    router: m
                                                }), e.abrupt('return', new Promise(function () {
                                                }));
                                            case 26:
                                                if (e.t0 = S, e.t0) {
                                                    e.next = 31;
                                                    break;
                                                }
                                                return e.next = 30, m.fetchComponent(g).then(function (e) {
                                                    return {
                                                        Component: e.page,
                                                        styleSheets: e.styleSheets,
                                                        __N_SSG: e.mod.__N_SSG,
                                                        __N_SSP: e.mod.__N_SSP
                                                    };
                                                });
                                            case 30:
                                                e.t0 = e.sent;
                                            case 31:
                                                k = e.t0, e.next = 36;
                                                break;
                                            case 36:
                                                return R = k.__N_SSG || k.__N_SSP, e.next = 39, m._getData(u(i.mark(function e() {
                                                    var t, u, c;
                                                    return i.wrap(function (e) {
                                                        for (;;) {
                                                            switch (e.prev = e.next) {
                                                            case 0:
                                                                if (!R) {
                                                                    e.next = 12;
                                                                    break;
                                                                }
                                                                if (!(null == O ? void 0 : O.json)) {
                                                                    e.next = 5;
                                                                    break;
                                                                }
                                                                e.t0 = O, e.next = 8;
                                                                break;
                                                            case 5:
                                                                return e.next = 7, Q({
                                                                    dataHref: m.pageLoader.getDataHref({
                                                                        href: j.formatWithValidation({
                                                                            pathname: r,
                                                                            query: n
                                                                        }),
                                                                        asPath: o,
                                                                        locale: l
                                                                    }),
                                                                    isServerRender: m.isSsr,
                                                                    parseJSON: true,
                                                                    inflightCache: m.sdc,
                                                                    persistCache: !p,
                                                                    isPrefetch: false,
                                                                    unstable_skipClientCache: h
                                                                });
                                                            case 7:
                                                                e.t0 = e.sent;
                                                            case 8:
                                                                return t = e.t0, u = t.json, c = t.cacheKey, e.abrupt('return', {
                                                                    cacheKey: c,
                                                                    props: u || {}
                                                                });
                                                            case 12:
                                                                return e.t1 = {}, e.next = 15, m.getInitialProps(k.Component, {
                                                                    pathname: r,
                                                                    query: n,
                                                                    asPath: a,
                                                                    locale: l,
                                                                    locales: m.locales,
                                                                    defaultLocale: m.defaultLocale
                                                                });
                                                            case 15:
                                                                return e.t2 = e.sent, e.abrupt('return', {
                                                                    headers: e.t1,
                                                                    cacheKey: '',
                                                                    props: e.t2
                                                                });
                                                            case 17:
                                                            case 'end':
                                                                return e.stop();
                                                            }
                                                        }
                                                    }, e);
                                                })));
                                            case 39:
                                                return C = e.sent, L = C.props, A = C.cacheKey, k.__N_SSP && E.dataHref && delete m.sdc[A], !m.isPreview && k.__N_SSG && Q(Object.assign({}, E, {
                                                    isBackground: true,
                                                    persistCache: false,
                                                    inflightCache: X
                                                })).catch(function () {
                                                }), L.pageProps = Object.assign({}, L.pageProps), k.props = L, k.route = g, k.query = n, k.resolvedAs = o, m.components[g] = k, e.abrupt('return', k);
                                            case 53:
                                                return e.prev = 53, e.t1 = e.catch(1), e.abrupt('return', m.handleRouteInfoError(v.getProperError(e.t1), r, n, a, s));
                                            case 56:
                                            case 'end':
                                                return e.stop();
                                            }
                                        }
                                    }, e, null, [[
                                            1,
                                            53
                                        ]]);
                                }))();
                            }
                        },
                        {
                            key: 'set',
                            value: function (e, t, r) {
                                return this.state = e, this.sub(t, this.components['/_app'].Component, r);
                            }
                        },
                        {
                            key: 'beforePopState',
                            value: function (e) {
                                this._bps = e;
                            }
                        },
                        {
                            key: 'onlyAHashChange',
                            value: function (e) {
                                if (!this.asPath) {
                                    return false;
                                }
                                var t = this.asPath.split('#'), r = o(t, 2), n = r[0], a = r[1], i = e.split('#'), u = o(i, 2), c = u[0], s = u[1];
                                return !(!s || n !== c || a !== s) || n === c && a !== s;
                            }
                        },
                        {
                            key: 'scrollToHash',
                            value: function (e) {
                                var t = e.split('#'), r = o(t, 2)[1], n = void 0 === r ? '' : r;
                                if ('' !== n && 'top' !== n) {
                                    var a = decodeURIComponent(n), i = document.getElementById(a);
                                    if (i) {
                                        Y(function () {
                                            return i.scrollIntoView();
                                        });
                                    } else {
                                        var u = document.getElementsByName(a)[0];
                                        u && Y(function () {
                                            return u.scrollIntoView();
                                        });
                                    }
                                } else {
                                    Y(function () {
                                        return window.scrollTo(0, 0);
                                    });
                                }
                            }
                        },
                        {
                            key: 'urlIsNew',
                            value: function (e) {
                                return this.asPath !== e;
                            }
                        },
                        {
                            key: 'prefetch',
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = this;
                                return u(i.mark(function a() {
                                    var o, u, c, s, l, f, p, h, v, m;
                                    return i.wrap(function (a) {
                                        for (;;) {
                                            switch (a.prev = a.next) {
                                            case 0:
                                                if (!I.isBot(window.navigator.userAgent)) {
                                                    a.next = 2;
                                                    break;
                                                }
                                                return a.abrupt('return');
                                            case 2:
                                                return o = x.parseRelativeUrl(e), u = o.pathname, c = o.query, a.next = 7, n.pageLoader.getPageList();
                                            case 7:
                                                s = a.sent, l = t, f = 'undefined' !== typeof r.locale ? r.locale || void 0 : n.locale, a.next = 20;
                                                break;
                                            case 13:
                                                if (h = a.sent, p = h.__rewrites, !(v = w.default(C.addBasePath(k.addLocale(t, n.locale), true), s, p, o.query, function (e) {
                                                        return Z(e, s);
                                                    }, n.locales)).externalDest) {
                                                    a.next = 18;
                                                    break;
                                                }
                                                return a.abrupt('return');
                                            case 18:
                                                l = R.removeLocale(M.removeBasePath(v.asPath), n.locale), v.matchedPage && v.resolvedHref && (u = v.resolvedHref, o.pathname = u, e = j.formatWithValidation(o));
                                            case 20:
                                                o.pathname = Z(o.pathname, s), b.isDynamicRoute(o.pathname) && (u = o.pathname, o.pathname = u, Object.assign(c, S.getRouteMatcher(E.getRouteRegex(o.pathname))(O.parsePath(t).pathname) || {}), e = j.formatWithValidation(o)), a.next = 24;
                                                break;
                                            case 24:
                                                return m = d.removeTrailingSlash(u), a.next = 27, Promise.all([
                                                    n.pageLoader._isSsg(m).then(function (t) {
                                                        return !!t && Q({
                                                            dataHref: n.pageLoader.getDataHref({
                                                                href: e,
                                                                asPath: l,
                                                                locale: f
                                                            }),
                                                            isServerRender: false,
                                                            parseJSON: true,
                                                            inflightCache: n.sdc,
                                                            persistCache: !n.isPreview,
                                                            isPrefetch: true,
                                                            unstable_skipClientCache: r.unstable_skipClientCache || r.priority && true
                                                        }).then(function () {
                                                            return false;
                                                        });
                                                    }),
                                                    n.pageLoader[r.priority ? 'loadPage' : 'prefetch'](m)
                                                ]);
                                            case 27:
                                            case 'end':
                                                return a.stop();
                                            }
                                        }
                                    }, a);
                                }))();
                            }
                        },
                        {
                            key: 'fetchComponent',
                            value: function (e) {
                                var t = this;
                                return u(i.mark(function r() {
                                    var n, a;
                                    return i.wrap(function (r) {
                                        for (;;) {
                                            switch (r.prev = r.next) {
                                            case 0:
                                                return n = re({
                                                    route: e,
                                                    router: t
                                                }), r.prev = 1, r.next = 4, t.pageLoader.loadPage(e);
                                            case 4:
                                                return a = r.sent, n(), r.abrupt('return', a);
                                            case 9:
                                                throw r.prev = 9, r.t0 = r.catch(1), n(), r.t0;
                                            case 13:
                                            case 'end':
                                                return r.stop();
                                            }
                                        }
                                    }, r, null, [[
                                            1,
                                            9
                                        ]]);
                                }))();
                            }
                        },
                        {
                            key: '_getData',
                            value: function (e) {
                                var t = this, r = false, n = function () {
                                        r = true;
                                    };
                                return this.clc = n, e().then(function (e) {
                                    if (n === t.clc && (t.clc = null), r) {
                                        var a = new Error('Loading initial props cancelled');
                                        throw a.cancelled = true, a;
                                    }
                                    return e;
                                });
                            }
                        },
                        {
                            key: '_getFlightData',
                            value: function (e) {
                                return Q({
                                    dataHref: e,
                                    isServerRender: true,
                                    parseJSON: false,
                                    inflightCache: this.sdc,
                                    persistCache: false,
                                    isPrefetch: false
                                }).then(function (e) {
                                    return { data: e.text };
                                });
                            }
                        },
                        {
                            key: 'getInitialProps',
                            value: function (e, t) {
                                var r = this.components['/_app'].Component, n = this._wrapApp(r);
                                return t.AppTree = n, _.loadGetInitialProps(r, {
                                    AppTree: n,
                                    Component: e,
                                    router: this,
                                    ctx: t
                                });
                            }
                        },
                        {
                            key: 'route',
                            get: function () {
                                return this.state.route;
                            }
                        },
                        {
                            key: 'pathname',
                            get: function () {
                                return this.state.pathname;
                            }
                        },
                        {
                            key: 'query',
                            get: function () {
                                return this.state.query;
                            }
                        },
                        {
                            key: 'asPath',
                            get: function () {
                                return this.state.asPath;
                            }
                        },
                        {
                            key: 'locale',
                            get: function () {
                                return this.state.locale;
                            }
                        },
                        {
                            key: 'isFallback',
                            get: function () {
                                return this.state.isFallback;
                            }
                        },
                        {
                            key: 'isPreview',
                            get: function () {
                                return this.state.isPreview;
                            }
                        }
                    ]), e;
                }());
            ne.events = g.default();
            t.default = ne;
            
        },
        8249: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.addLocale = function (e, t, r, o) {
                if (t && t !== r && (o || !a.pathHasPrefix(e.toLowerCase(), '/'.concat(t.toLowerCase())) && !a.pathHasPrefix(e.toLowerCase(), '/api'))) {
                    return n.addPathPrefix(e, '/'.concat(t));
                }
                return e;
            };
            
            var n = r(89782), a = r(19880);
        },
        89782: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.addPathPrefix = function (e, t) {
                if (!e.startsWith('/') || !t) {
                    return e;
                }
                var r = n.parsePath(e), a = r.pathname, o = r.query, i = r.hash;
                return ''.concat(t).concat(a).concat(o).concat(i);
            };
            
            var n = r(23082);
        },
        75954: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.addPathSuffix = function (e, t) {
                if (!e.startsWith('/') || !t) {
                    return e;
                }
                var r = n.parsePath(e), a = r.pathname, o = r.query, i = r.hash;
                return ''.concat(a).concat(t).concat(o).concat(i);
            };
            
            var n = r(23082);
        },
        56752: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.compareRouterStates = function (e, t) {
                var r = Object.keys(e);
                if (r.length !== Object.keys(t).length) {
                    return false;
                }
                for (var n = r.length; n--;) {
                    var a = r[n];
                    if ('query' === a) {
                        var o = Object.keys(e.query);
                        if (o.length !== Object.keys(t.query).length) {
                            return false;
                        }
                        for (var i = o.length; i--;) {
                            var u = o[i];
                            if (!t.query.hasOwnProperty(u) || e.query[u] !== t.query[u]) {
                                return false;
                            }
                        }
                    } else {
                        if (!t.hasOwnProperty(a) || e[a] !== t[a]) {
                            return false;
                        }
                    }
                }
                return true;
            };
            
        },
        46394: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.formatNextPathnameInfo = function (e) {
                var t = i.addLocale(e.pathname, e.locale, e.buildId ? void 0 : e.defaultLocale, e.ignorePrefix);
                e.buildId && (t = o.addPathSuffix(a.addPathPrefix(t, '/_next/data/'.concat(e.buildId)), '/' === e.pathname ? 'index.json' : '.json'));
                return t = a.addPathPrefix(t, e.basePath), e.trailingSlash ? e.buildId || t.endsWith('/') ? t : o.addPathSuffix(t, '/') : n.removeTrailingSlash(t);
            };
            
            var n = r(15323), a = r(89782), o = r(75954), i = r(8249);
        },
        69422: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.formatUrl = o;
            t.formatWithValidation = function (e) {
                0;
                return o(e);
            };
            t.urlObjectKeys = void 0;
            
            var n = (0, r(91598).Z)(r(25880));
            function o(e) {
                var t = e.auth, r = e.hostname, o = e.protocol || '', i = e.pathname || '', u = e.hash || '', c = e.query || '', s = false;
                t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : '';
                e.host ? s = t + e.host : r && (s = t + (~r.indexOf(':') ? '['.concat(r, ']') : r), e.port && (s += ':' + e.port));
                c && 'object' === typeof c && (c = String(n.urlQueryToSearchParams(c)));
                
                var l = e.search || c && '?'.concat(c) || '';
                return o && !o.endsWith(':') && (o += ':'), e.slashes || (!o || /https?|ftp|gopher|file/.test(o)) && false !== s ? (s = '//' + (s || ''), i && '/' !== i[0] && (i = '/' + i)) : s || (s = ''), u && '#' !== u[0] && (u = '#' + u), l && '?' !== l[0] && (l = '?' + l), i = i.replace(/[?#]/g, encodeURIComponent), l = l.replace('#', '%23'), ''.concat(o).concat(s).concat(i).concat(l).concat(u);
            }
            t.urlObjectKeys = [
                'auth',
                'hash',
                'host',
                'hostname',
                'href',
                'path',
                'pathname',
                'port',
                'protocol',
                'query',
                'search',
                'slashes'
            ];
        },
        58792: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.default = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '', r = '/' === e ? '/index' : /^\/index(\/|$)/.test(e) ? '/index'.concat(e) : ''.concat(e);
                return r + t;
            };
            
        },
        83601: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.getNextPathnameInfo = function (e, t) {
                var r, i = null != (r = t.nextConfig) ? r : {}, u = i.basePath, c = i.i18n, s = i.trailingSlash, l = {
                        pathname: e,
                        trailingSlash: '/' !== e ? e.endsWith('/') : s
                    };
                u && o.pathHasPrefix(l.pathname, u) && (l.pathname = a.removePathPrefix(l.pathname, u), l.basePath = u);
                if (true === t.parseData && l.pathname.startsWith('/_next/data/') && l.pathname.endsWith('.json')) {
                    var f = l.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/'), d = f[0];
                    l.pathname = 'index' !== f[1] ? '/'.concat(f.slice(1).join('/')) : '/';
                    l.buildId = d;
                    
                }
                if (c) {
                    var p = n.normalizeLocalePath(l.pathname, c.locales);
                    l.locale = null == p ? void 0 : p.detectedLocale;
                    l.pathname = (null == p ? void 0 : p.pathname) || l.pathname;
                    
                }
                return l;
            };
            
            var n = r(9625), a = r(29543), o = r(19880);
        },
        41134: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            Object.defineProperty(t, 'getSortedRoutes', {
                enumerable: true,
                get: function () {
                    return n.getSortedRoutes;
                }
            });
            Object.defineProperty(t, 'isDynamicRoute', {
                enumerable: true,
                get: function () {
                    return a.isDynamicRoute;
                }
            });
            
            var n = r(43258), a = r(9636);
        },
        29293: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.isBot = function (e) {
                return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e);
            };
            
        },
        9636: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.isDynamicRoute = function (e) {
                return /\/\[[^/]+?\](?=\/|$)/.test(e);
            };
            
            
        },
        23082: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.parsePath = function (e) {
                var t = e.indexOf('#'), r = e.indexOf('?'), n = r > -1 && (t < 0 || r < t);
                if (n || t > -1) {
                    return {
                        pathname: e.substring(0, n ? r : t),
                        query: n ? e.substring(r, t > -1 ? t : void 0) : '',
                        hash: t > -1 ? e.slice(t) : ''
                    };
                }
                return {
                    pathname: e,
                    query: '',
                    hash: ''
                };
            };
            
        },
        86472: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.parseRelativeUrl = function (e, t) {
                var r = new URL(n.getLocationOrigin()), o = t ? new URL(t, r) : e.startsWith('.') ? new URL(window.location.href) : r, i = new URL(e, o), u = i.pathname, c = i.searchParams, s = i.search, l = i.hash, f = i.href;
                if (i.origin !== r.origin) {
                    throw new Error('invariant: invalid relative URL, router received '.concat(e));
                }
                return {
                    pathname: u,
                    query: a.searchParamsToUrlQuery(c),
                    search: s,
                    hash: l,
                    href: f.slice(r.origin.length)
                };
            };
            
            var n = r(99475), a = r(25880);
        },
        19880: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.pathHasPrefix = function (e, t) {
                if ('string' !== typeof e) {
                    return false;
                }
                var r = n.parsePath(e).pathname;
                return r === t || r.startsWith(t + '/');
            };
            
            var n = r(23082);
        },
        25880: function (e, t, r) {
            'use strict';
            var n = r(85696);
            function a(e) {
                return 'string' === typeof e || 'number' === typeof e && !isNaN(e) || 'boolean' === typeof e ? String(e) : '';
            }
            Object.defineProperty(t, '__esModule', { value: true });
            
            
            
            
        },
        29543: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.removePathPrefix = function (e, t) {
                if (n.pathHasPrefix(e, t)) {
                    var r = e.slice(t.length);
                    return r.startsWith('/') ? r : '/'.concat(r);
                }
                return e;
            };
            
            var n = r(19880);
        },
        15323: function (e, t) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.removeTrailingSlash = function (e) {
                return e.replace(/\/$/, '') || '/';
            };
            
        },
        61553: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.getRouteMatcher = function (e) {
                var t = e.re, r = e.groups;
                return function (e) {
                    var a = t.exec(e);
                    if (!a) {
                        return false;
                    }
                    var o = function (e) {
                            try {
                                return decodeURIComponent(e);
                            } catch (t) {
                                throw new n.DecodeError('failed to decode param');
                            }
                        }, i = {};
                    return Object.keys(r).forEach(function (e) {
                        var t = r[e], n = a[t.pos];
                        void 0 !== n && (i[e] = ~n.indexOf('/') ? n.split('/').map(function (e) {
                            return o(e);
                        }) : t.repeat ? [o(n)] : o(n));
                    }), i;
                };
            };
            
            var n = r(99475);
        },
        76927: function (e, t, r) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.getRouteRegex = c;
            t.getNamedRouteRegex = function (e) {
                var t = s(e);
                return n({}, c(e), {
                    namedRegex: '^'.concat(t.namedParameterizedRoute, '(?:/)?$'),
                    routeKeys: t.routeKeys
                });
            };
            t.getNamedMiddlewareRegex = function (e, t) {
                var r = u(e).parameterizedRoute, n = t.catchAll, a = void 0 === n || n;
                if ('/' === r) {
                    return { namedRegex: '^/'.concat(a ? '.*' : '', '$') };
                }
                var o = s(e).namedParameterizedRoute, i = a ? '(?:(/.*)?)' : '';
                return { namedRegex: '^'.concat(o).concat(i, '$') };
            };
            
            var n = r(6495).Z, a = r(79817), o = r(15323);
            function i(e) {
                var t = e.startsWith('[') && e.endsWith(']');
                t && (e = e.slice(1, -1));
                var r = e.startsWith('...');
                return r && (e = e.slice(3)), {
                    key: e,
                    repeat: r,
                    optional: t
                };
            }
            function u(e) {
                var t = o.removeTrailingSlash(e).slice(1).split('/'), r = {}, n = 1;
                return {
                    parameterizedRoute: t.map(function (e) {
                        if (e.startsWith('[') && e.endsWith(']')) {
                            var t = i(e.slice(1, -1)), o = t.key, u = t.optional, c = t.repeat;
                            return r[o] = {
                                pos: n++,
                                repeat: c,
                                optional: u
                            }, c ? u ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
                        }
                        return '/'.concat(a.escapeStringRegexp(e));
                    }).join(''),
                    groups: r
                };
            }
            function c(e) {
                var t = u(e), r = t.parameterizedRoute, n = t.groups;
                return {
                    re: new RegExp('^'.concat(r, '(?:/)?$')),
                    groups: n
                };
            }
            function s(e) {
                var t = o.removeTrailingSlash(e).slice(1).split('/'), r = (function () {
                        var e = 97, t = 1;
                        return function () {
                            for (var r = '', n = 0; n < t; n++) {
                                r += String.fromCharCode(e);
                                if (++e > 122) {
                                    t++;
                                    e = 97;
                                }
                                
                            }
                            return r;
                        };
                    }()), n = {};
                return {
                    namedParameterizedRoute: t.map(function (e) {
                        if (e.startsWith('[') && e.endsWith(']')) {
                            var t = i(e.slice(1, -1)), o = t.key, u = t.optional, c = t.repeat, s = o.replace(/\W/g, ''), l = false;
                            return (0 === s.length || s.length > 30) && (l = true), isNaN(parseInt(s.slice(0, 1))) || (l = true), l && (s = r()), n[s] = o, c ? u ? '(?:/(?<'.concat(s, '>.+?))?') : '/(?<'.concat(s, '>.+?)') : '/(?<'.concat(s, '>[^/]+?)');
                        }
                        return '/'.concat(a.escapeStringRegexp(e));
                    }).join(''),
                    routeKeys: n
                };
            }
        },
        43258: function (e, t, r) {
            'use strict';
            var n = r(7980), a = r(33227), o = r(88361);
            Object.defineProperty(t, '__esModule', { value: true });
            t.getSortedRoutes = function (e) {
                var t = new i();
                return e.forEach(function (e) {
                    return t.insert(e);
                }), t.smoosh();
            };
            
            var i = (function () {
                function e() {
                    a(this, e);
                    this.placeholder = true;
                    this.children = new Map();
                    this.slugName = null;
                    this.restSlugName = null;
                    this.optionalRestSlugName = null;
                    
                }
                return o(e, [
                    {
                        key: 'insert',
                        value: function (e) {
                            this._insert(e.split('/').filter(Boolean), [], false);
                        }
                    },
                    {
                        key: 'smoosh',
                        value: function () {
                            return this._smoosh();
                        }
                    },
                    {
                        key: '_smoosh',
                        value: function () {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '/', r = n(this.children.keys()).sort();
                            null !== this.slugName && r.splice(r.indexOf('[]'), 1);
                            null !== this.restSlugName && r.splice(r.indexOf('[...]'), 1);
                            null !== this.optionalRestSlugName && r.splice(r.indexOf('[[...]]'), 1);
                            
                            var a = r.map(function (r) {
                                return e.children.get(r)._smoosh(''.concat(t).concat(r, '/'));
                            }).reduce(function (e, t) {
                                return [].concat(n(e), n(t));
                            }, []);
                            if (null !== this.slugName && a.push.apply(a, n(this.children.get('[]')._smoosh(''.concat(t, '[').concat(this.slugName, ']/')))), !this.placeholder) {
                                var o = '/' === t ? '/' : t.slice(0, -1);
                                if (null != this.optionalRestSlugName) {
                                    throw new Error('You cannot define a route with the same specificity as a optional catch-all route ("'.concat(o, '" and "').concat(o, '[[...').concat(this.optionalRestSlugName, ']]").'));
                                }
                                a.unshift(o);
                            }
                            return null !== this.restSlugName && a.push.apply(a, n(this.children.get('[...]')._smoosh(''.concat(t, '[...').concat(this.restSlugName, ']/')))), null !== this.optionalRestSlugName && a.push.apply(a, n(this.children.get('[[...]]')._smoosh(''.concat(t, '[[...').concat(this.optionalRestSlugName, ']]/')))), a;
                        }
                    },
                    {
                        key: '_insert',
                        value: function (t, r, n) {
                            if (0 !== t.length) {
                                if (n) {
                                    throw new Error('Catch-all must be the last part of the URL.');
                                }
                                var a = t[0];
                                if (a.startsWith('[') && a.endsWith(']')) {
                                    var o = function (e, t) {
                                            if (null !== e && e !== t) {
                                                throw new Error('You cannot use different slug names for the same dynamic path (\''.concat(e, '\' !== \'').concat(t, '\').'));
                                            }
                                            r.forEach(function (e) {
                                                if (e === t) {
                                                    throw new Error('You cannot have the same slug name "'.concat(t, '" repeat within a single dynamic path'));
                                                }
                                                if (e.replace(/\W/g, '') === a.replace(/\W/g, '')) {
                                                    throw new Error('You cannot have the slug names "'.concat(e, '" and "').concat(t, '" differ only by non-word symbols within a single dynamic path'));
                                                }
                                            });
                                            r.push(t);
                                            
                                        }, i = a.slice(1, -1), u = false;
                                    if (i.startsWith('[') && i.endsWith(']') && (i = i.slice(1, -1), u = true), i.startsWith('...') && (i = i.substring(3), n = true), i.startsWith('[') || i.endsWith(']')) {
                                        throw new Error('Segment names may not start or end with extra brackets (\''.concat(i, '\').'));
                                    }
                                    if (i.startsWith('.')) {
                                        throw new Error('Segment names may not start with erroneous periods (\''.concat(i, '\').'));
                                    }
                                    if (n) {
                                        if (u) {
                                            if (null != this.restSlugName) {
                                                throw new Error('You cannot use both an required and optional catch-all route at the same level ("[...'.concat(this.restSlugName, ']" and "').concat(t[0], '" ).'));
                                            }
                                            o(this.optionalRestSlugName, i);
                                            this.optionalRestSlugName = i;
                                            a = '[[...]]';
                                            
                                        } else {
                                            if (null != this.optionalRestSlugName) {
                                                throw new Error('You cannot use both an optional and required catch-all route at the same level ("[[...'.concat(this.optionalRestSlugName, ']]" and "').concat(t[0], '").'));
                                            }
                                            o(this.restSlugName, i);
                                            this.restSlugName = i;
                                            a = '[...]';
                                            
                                        }
                                    } else {
                                        if (u) {
                                            throw new Error('Optional route parameters are not yet supported ("'.concat(t[0], '").'));
                                        }
                                        o(this.slugName, i);
                                        this.slugName = i;
                                        a = '[]';
                                        
                                    }
                                }
                                this.children.has(a) || this.children.set(a, new e());
                                this.children.get(a)._insert(t.slice(1), r, n);
                                
                            } else {
                                this.placeholder = false;
                            }
                        }
                    }
                ]), e;
            }());
        },
        36616: function (e, t) {
            'use strict';
            var r;
            Object.defineProperty(t, '__esModule', { value: true });
            t.setConfig = function (e) {
                r = e;
            };
            t.default = void 0;
            
            t.default = function () {
                return r;
            };
            ('function' === typeof t.default || 'object' === typeof t.default && null !== t.default) && 'undefined' === typeof t.default.__esModule && (Object.defineProperty(t.default, '__esModule', { value: true }), Object.assign(t.default, t), e.exports = t.default);
            
        },
        99475: function (e, t, r) {
            'use strict';
            var n = r(88361), a = r(33227), o = r(85971), i = r(52715), u = r(91193), c = r(36558), s = r(87794);
            function l(e) {
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
                    var r, n = u(e);
                    if (t) {
                        var a = u(this).constructor;
                        r = Reflect.construct(n, arguments, a);
                    } else {
                        r = n.apply(this, arguments);
                    }
                    return i(this, r);
                };
            }
            Object.defineProperty(t, '__esModule', { value: true });
            t.execOnce = function (e) {
                var t, r = false;
                return function () {
                    return r || (r = true, t = e.apply(void 0, arguments)), t;
                };
            };
            t.getLocationOrigin = p;
            t.getURL = function () {
                var e = window.location.href, t = p();
                r