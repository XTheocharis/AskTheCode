                  i = c(i, t[o = l[a]], o, t);
                }
                return i;
            };
            function St(t) {
                var e = function (t) {
                    for (var e = [], n = 0, r = t.length; n < r;) {
                        var a = t.charCodeAt(n++);
                        if (a >= 55296 && a <= 56319 && n < r) {
                            var o = t.charCodeAt(n++);
                            56320 == (64512 & o) ? e.push(((1023 & a) << 10) + (1023 & o) + 65536) : (e.push(a), n--);
                        } else {
                            e.push(a);
                        }
                    }
                    return e;
                }(t);
                return 1 === e.length ? e[0].toString(16) : null;
            }
            function Lt(t) {
                return Object.keys(t).reduce(function (e, n) {
                    var r = t[n];
                    return r.icon ? e[r.iconName] = r.icon : e[n] = r, e;
                }, {});
            }
            function At(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.skipHooks, o = void 0 !== r && r, i = Lt(e);
                'function' !== typeof Mt.hooks.addPack || o ? Mt.styles[t] = a(a({}, Mt.styles[t] || {}), i) : Mt.hooks.addPack(t, Lt(e));
                'fas' === t && At('fa', e);
                
            }
            var Tt, Ct, Ht, Rt = Mt.styles, Nt = Mt.shims, Vt = (l(Tt = {}, 'classic', Object.values(U.classic)), l(Tt, 'sharp', Object.values(U.sharp)), Tt), Dt = null, Bt = {}, It = {}, Wt = {}, Ft = {}, Ut = {}, Zt = (l(Ct = {}, 'classic', Object.keys(W.classic)), l(Ct, 'sharp', Object.keys(W.sharp)), Ct);
            function qt(t, e) {
                var n, r = e.split('-'), a = r[0], o = r.slice(1).join('-');
                return a !== t || '' === o || (n = o, ~at.indexOf(n)) ? null : o;
            }
            var $t, Yt = function () {
                    var t = function (t) {
                        return zt(Rt, function (e, n, r) {
                            return e[r] = zt(n, t, {}), e;
                        }, {});
                    };
                    Bt = t(function (t, e, n) {
                        (e[3] && (t[e[3]] = n), e[2]) && e[2].filter(function (t) {
                            return 'number' === typeof t;
                        }).forEach(function (e) {
                            t[e.toString(16)] = n;
                        });
                        return t;
                    });
                    It = t(function (t, e, n) {
                        (t[n] = n, e[2]) && e[2].filter(function (t) {
                            return 'string' === typeof t;
                        }).forEach(function (e) {
                            t[e] = n;
                        });
                        return t;
                    });
                    Ut = t(function (t, e, n) {
                        var r = e[2];
                        return t[n] = n, r.forEach(function (e) {
                            t[e] = n;
                        }), t;
                    });
                    
                    var e = 'far' in Rt || st.autoFetchSvg, n = zt(Nt, function (t, n) {
                            var r = n[0], a = n[1], o = n[2];
                            return 'far' !== a || e || (a = 'fas'), 'string' === typeof r && (t.names[r] = {
                                prefix: a,
                                iconName: o
                            }), 'number' === typeof r && (t.unicodes[r.toString(16)] = {
                                prefix: a,
                                iconName: o
                            }), t;
                        }, {
                            names: {},
                            unicodes: {}
                        });
                    Wt = n.names;
                    Ft = n.unicodes;
                    Dt = Qt(st.styleDefault, { family: st.familyDefault });
                    
                };
            function Xt(t, e) {
                return (Bt[t] || {})[e];
            }
            function Jt(t, e) {
                return (Ut[t] || {})[e];
            }
            function Gt(t) {
                return Wt[t] || {
                    prefix: null,
                    iconName: null
                };
            }
            function Kt() {
                return Dt;
            }
            $t = function (t) {
                Dt = Qt(t.styleDefault, { family: st.familyDefault });
            };
            ct.push($t);
            Yt();
            
            function Qt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.family, r = void 0 === n ? 'classic' : n, a = W[r][t], o = F[r][t] || F[r][a], i = t in Mt.styles ? t : null;
                return o || i || null;
            }
            var te = (l(Ht = {}, 'classic', Object.keys(U.classic)), l(Ht, 'sharp', Object.keys(U.sharp)), Ht);
            function ee(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.skipLookups, a = void 0 !== r && r, o = (l(e = {}, 'classic', ''.concat(st.cssPrefix, '-').concat('classic')), l(e, 'sharp', ''.concat(st.cssPrefix, '-').concat('sharp')), e), i = null, s = 'classic';
                (t.includes(o.classic) || t.some(function (t) {
                    return te.classic.includes(t);
                })) && (s = 'classic');
                (t.includes(o.sharp) || t.some(function (t) {
                    return te.sharp.includes(t);
                })) && (s = 'sharp');
                
                var c = t.reduce(function (t, e) {
                    var n = qt(st.cssPrefix, e);
                    if (Rt[e] ? (e = Vt[s].includes(e) ? Z[s][e] : e, i = e, t.prefix = e) : Zt[s].indexOf(e) > -1 ? (i = e, t.prefix = Qt(e, { family: s })) : n ? t.iconName = n : e !== st.replacementClass && e !== o.classic && e !== o.sharp && t.rest.push(e), !a && t.prefix && t.iconName) {
                        var r = 'fa' === i ? Gt(t.iconName) : {}, l = Jt(t.prefix, t.iconName);
                        r.prefix && (i = null);
                        t.iconName = r.iconName || l || t.iconName;
                        t.prefix = r.prefix || t.prefix;
                        'far' !== t.prefix || Rt.far || !Rt.fas || st.autoFetchSvg || (t.prefix = 'fas');
                        
                    }
                    return t;
                }, {
                    prefix: null,
                    iconName: null,
                    rest: []
                });
                return (t.includes('fa-brands') || t.includes('fab')) && (c.prefix = 'fab'), (t.includes('fa-duotone') || t.includes('fad')) && (c.prefix = 'fad'), c.prefix || s !== 'sharp' || !Rt.fass && !st.autoFetchSvg || (c.prefix = 'fass', c.iconName = Jt(c.prefix, c.iconName) || c.iconName), 'fa' !== c.prefix && 'fa' !== i || (c.prefix = Kt() || 'fas'), c;
            }
            var ne = (function () {
                    function t() {
                        !function (t, e) {
                            if (!(t instanceof e)) {
                                throw new TypeError('Cannot call a class as a function');
                            }
                        }(this, t);
                        this.definitions = {};
                        
                    }
                    var e, n, r;
                    return e = t, n = [
                        {
                            key: 'add',
                            value: function () {
                                for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) {
                                    n[r] = arguments[r];
                                }
                                var o = n.reduce(this._pullDefinitions, {});
                                Object.keys(o).forEach(function (e) {
                                    t.definitions[e] = a(a({}, t.definitions[e] || {}), o[e]);
                                    At(e, o[e]);
                                    
                                    var n = U.classic[e];
                                    n && At(n, o[e]);
                                    Yt();
                                    
                                });
                            }
                        },
                        {
                            key: 'reset',
                            value: function () {
                                this.definitions = {};
                            }
                        },
                        {
                            key: '_pullDefinitions',
                            value: function (t, e) {
                                var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                                return Object.keys(n).map(function (e) {
                                    var r = n[e], a = r.prefix, o = r.iconName, i = r.icon, l = i[2];
                                    t[a] || (t[a] = {});
                                    l.length > 0 && l.forEach(function (e) {
                                        'string' === typeof e && (t[a][e] = i);
                                    });
                                    t[a][o] = i;
                                    
                                }), t;
                            }
                        }
                    ], n && i(e.prototype, n), r && i(e, r), Object.defineProperty(e, 'prototype', { writable: false }), t;
                }()), re = [], ae = {}, oe = {}, ie = Object.keys(oe);
            function le(t, e) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) {
                    r[a - 2] = arguments[a];
                }
                var o = ae[t] || [];
                return o.forEach(function (t) {
                    e = t.apply(null, [e].concat(r));
                }), e;
            }
            function se(t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) {
                    n[r - 1] = arguments[r];
                }
                var a = ae[t] || [];
                a.forEach(function (t) {
                    t.apply(null, n);
                });
            }
            function ce() {
                var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
                return oe[t] ? oe[t].apply(null, e) : void 0;
            }
            function ue(t) {
                'fa' === t.prefix && (t.prefix = 'fas');
                var e = t.iconName, n = t.prefix || Kt();
                if (e) {
                    return e = Jt(n, e) || e, Pt(fe.definitions, n, e) || Pt(Mt.styles, n, e);
                }
            }
            var fe = new ne(), he = {
                    noAuto: function () {
                        
                        
                        se('noAuto');
                        
                    },
                    config: st,
                    dom: pe,
                    parse: {
                        icon: function (t) {
                            if (null === t) {
                                return null;
                            }
                            if ('object' === o(t) && t.prefix && t.iconName) {
                                return {
                                    prefix: t.prefix,
                                    iconName: Jt(t.prefix, t.iconName) || t.iconName
                                };
                            }
                            if (Array.isArray(t) && 2 === t.length) {
                                var e = 0 === t[1].indexOf('fa-') ? t[1].slice(3) : t[1], n = Qt(t[0]);
                                return {
                                    prefix: n,
                                    iconName: Jt(n, e) || e
                                };
                            }
                            if ('string' === typeof t && (t.indexOf(''.concat(st.cssPrefix, '-')) > -1 || t.match(/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/))) {
                                var r = ee(t.split(' '), { skipLookups: true });
                                return {
                                    prefix: r.prefix || Kt(),
                                    iconName: Jt(r.prefix, r.iconName) || r.iconName
                                };
                            }
                            if ('string' === typeof t) {
                                var a = Kt();
                                return {
                                    prefix: a,
                                    iconName: Jt(a, t) || t
                                };
                            }
                        }
                    },
                    library: fe,
                    findIconDefinition: ue,
                    toHtml: _t
                }, de = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.autoReplaceSvgRoot, n = void 0 === e ? k : e;
                    (Object.keys(Mt.styles).length > 0 || st.autoFetchSvg) && P && false && he.dom.i2svg({ node: n });
                };
            function ve(t, e) {
                return Object.defineProperty(t, 'abstract', { get: e }), Object.defineProperty(t, 'html', {
                    get: function () {
                        return t.abstract.map(function (t) {
                            return _t(t);
                        });
                    }
                }), Object.defineProperty(t, 'node', {
                    get: function () {
                        if (P) {
                            var e = k.createElement('div');
                            return e.innerHTML = t.html, e.children;
                        }
                    }
                }), t;
            }
            function me(t) {
                var e = t.icons, n = e.main, r = e.mask, o = t.prefix, i = t.iconName, l = t.transform, s = t.symbol, c = t.title, u = t.maskId, f = t.titleId, p = t.extra, h = t.watchable, d = void 0 !== h && h, v = r.found ? r : n, m = v.width, b = v.height, g = 'fak' === o, y = [
                        st.replacementClass,
                        i ? ''.concat(st.cssPrefix, '-').concat(i) : ''
                    ].filter(function (t) {
                        return -1 === p.classes.indexOf(t);
                    }).filter(function (t) {
                        return '' !== t || !!t;
                    }).concat(p.classes).join(' '), w = {
                        children: [],
                        attributes: a(a({}, p.attributes), {}, {
                            'data-prefix': o,
                            'data-icon': i,
                            class: y,
                            role: p.attributes.role || 'img',
                            xmlns: 'http://www.w3.org/2000/svg',
                            viewBox: '0 0 '.concat(m, ' ').concat(b)
                        })
                    }, O = g && !~p.classes.indexOf('fa-fw') ? { width: ''.concat(m / b * 16 * 0.0625, 'em') } : {};
                d && (w.attributes['data-fa-i2svg'] = '');
                c && (w.children.push({
                    tag: 'title',
                    attributes: { id: w.attributes['aria-labelledby'] || 'title-'.concat(f || pt()) },
                    children: [c]
                }), delete w.attributes.title);
                
                var x = a(a({}, w), {}, {
                        prefix: o,
                        iconName: i,
                        main: n,
                        mask: r,
                        maskId: u,
                        transform: l,
                        symbol: s,
                        styles: a(a({}, O), p.styles)
                    }), M = r.found && n.found ? ce('generateAbstractMask', x) || {
                        children: [],
                        attributes: {}
                    } : ce('generateAbstractIcon', x) || {
                        children: [],
                        attributes: {}
                    }, E = M.children, k = M.attributes;
                return x.children = E, x.attributes = k, s ? function (t) {
                    var e = t.prefix, n = t.iconName, r = t.children, o = t.attributes, i = t.symbol, l = true === i ? ''.concat(e, '-').concat(st.cssPrefix, '-').concat(n) : i;
                    return [{
                            tag: 'svg',
                            attributes: { style: 'display: none;' },
                            children: [{
                                    tag: 'symbol',
                                    attributes: a(a({}, o), {}, { id: l }),
                                    children: r
                                }]
                        }];
                }(x) : function (t) {
                    var e = t.children, n = t.main, r = t.mask, o = t.attributes, i = t.styles, l = t.transform;
                    if (bt(l) && n.found && !r.found) {
                        var s = {
                            x: n.width / n.height / 2,
                            y: 0.5
                        };
                        o.style = mt(a(a({}, i), {}, { 'transform-origin': ''.concat(s.x + l.x / 16, 'em ').concat(s.y + l.y / 16, 'em') }));
                    }
                    return [{
                            tag: 'svg',
                            attributes: o,
                            children: e
                        }];
                }(x);
            }
            function be(t) {
                var e = t.content, n = t.width, r = t.height, o = t.transform, i = t.title, l = t.extra, s = t.watchable, c = void 0 !== s && s, u = a(a(a({}, l.attributes), i ? { title: i } : {}), {}, { class: l.classes.join(' ') });
                c && (u['data-fa-i2svg'] = '');
                var f = a({}, l.styles);
                bt(o) && (f.transform = function (t) {
                    var e = t.transform, n = t.width, r = void 0 === n ? 16 : n, a = t.height, o = void 0 === a ? 16 : a, i = t.startCentered, l = void 0 !== i && i, s = '';
                    return s += l && z ? 'translate('.concat(e.x / 16 - r / 2, 'em, ').concat(e.y / 16 - o / 2, 'em) ') : l ? 'translate(calc(-50% + '.concat(e.x / 16, 'em), calc(-50% + ').concat(e.y / 16, 'em)) ') : 'translate('.concat(e.x / 16, 'em, ').concat(e.y / 16, 'em) '), s += 'scale('.concat(e.size / 16 * (e.flipX ? -1 : 1), ', ').concat(e.size / 16 * (e.flipY ? -1 : 1), ') '), s + 'rotate('.concat(e.rotate, 'deg) ');
                }({
                    transform: o,
                    startCentered: true,
                    width: n,
                    height: r
                }), f['-webkit-transform'] = f.transform);
                var p = mt(f);
                p.length > 0 && (u.style = p);
                var h = [];
                return h.push({
                    tag: 'span',
                    attributes: u,
                    children: [e]
                }), i && h.push({
                    tag: 'span',
                    attributes: { class: 'sr-only' },
                    children: [i]
                }), h;
            }
            function ge(t) {
                var e = t.content, n = t.title, r = t.extra, o = a(a(a({}, r.attributes), n ? { title: n } : {}), {}, { class: r.classes.join(' ') }), i = mt(r.styles);
                i.length > 0 && (o.style = i);
                var l = [];
                return l.push({
                    tag: 'span',
                    attributes: o,
                    children: [e]
                }), n && l.push({
                    tag: 'span',
                    attributes: { class: 'sr-only' },
                    children: [n]
                }), l;
            }
            var ye = Mt.styles;
            function we(t) {
                var e = t[0], n = t[1], r = s(t.slice(4), 1)[0];
                return {
                    found: true,
                    width: e,
                    height: n,
                    icon: Array.isArray(r) ? {
                        tag: 'g',
                        attributes: { class: ''.concat(st.cssPrefix, '-').concat('duotone-group') },
                        children: [
                            {
                                tag: 'path',
                                attributes: {
                                    class: ''.concat(st.cssPrefix, '-').concat('secondary'),
                                    fill: 'currentColor',
                                    d: r[0]
                                }
                            },
                            {
                                tag: 'path',
                                attributes: {
                                    class: ''.concat(st.cssPrefix, '-').concat('primary'),
                                    fill: 'currentColor',
                                    d: r[1]
                                }
                            }
                        ]
                    } : {
                        tag: 'path',
                        attributes: {
                            fill: 'currentColor',
                            d: r
                        }
                    }
                };
            }
            
            function xe(t, e) {
                var n = e;
                return 'fa' === e && null !== st.styleDefault && (e = Kt()), new Promise(function (r, o) {
                    ce('missingIconAbstract');
                    if ('fa' === n) {
                        var i = Gt(t) || {};
                        t = i.iconName || t;
                        e = i.prefix || e;
                        
                    }
                    if (t && e && ye[e] && ye[e][t]) {
                        return r(we(ye[e][t]));
                    }
                    !function (t, e) {
                        N || st.showMissingIcons || !t || console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
                    }(t, e);
                    r(a(a({}, Oe), {}, { icon: st.showMissingIcons && t && ce('missingIconAbstract') || {} }));
                    
                });
            }
            var Me = function () {
                }, Ee = st.measurePerformance && _ && _.mark && _.measure ? _ : {
                    mark: Me,
                    measure: Me
                }, je = function (t) {
                    Ee.mark(''.concat('FA "6.5.1"', ' ').concat(t, ' ends'));
                    Ee.measure(''.concat('FA "6.5.1"', ' ').concat(t), ''.concat('FA "6.5.1"', ' ').concat(t, ' begins'), ''.concat('FA "6.5.1"', ' ').concat(t, ' ends'));
                    
                }, _e = function (t) {
                    return Ee.mark(''.concat('FA "6.5.1"', ' ').concat(t, ' begins')), function () {
                        return je(t);
                    };
                }, Pe = function () {
                };
            function ze(t) {
                return 'string' === typeof (t.getAttribute ? t.getAttribute('data-fa-i2svg') : null);
            }
            function Se(t) {
                return k.createElementNS('http://www.w3.org/2000/svg', t);
            }
            function Le(t) {
                return k.createElement(t);
            }
            function Ae(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.ceFn, r = void 0 === n ? 'svg' === t.tag ? Se : Le : n;
                if ('string' === typeof t) {
                    return k.createTextNode(t);
                }
                var a = r(t.tag);
                Object.keys(t.attributes || []).forEach(function (e) {
                    a.setAttribute(e, t.attributes[e]);
                });
                var o = t.children || [];
                return o.forEach(function (t) {
                    a.appendChild(Ae(t, { ceFn: r }));
                }), a;
            }
            var Te = {
                replace: function (t) {
                    var e = t[0];
                    if (e.parentNode) {
                        if (t[1].forEach(function (t) {
                                e.parentNode.insertBefore(Ae(t), e);
                            }), null === e.getAttribute('data-fa-i2svg') && st.keepOriginalSource) {
                            var n = k.createComment(function (t) {
                                var e = ' '.concat(t.outerHTML, ' ');
                                return ''.concat(e, 'Font Awesome fontawesome.com ');
                            }(e));
                            e.parentNode.replaceChild(n, e);
                        } else {
                            e.remove();
                        }
                    }
                },
                nest: function (t) {
                    var e = t[0], n = t[1];
                    if (~dt(e).indexOf(st.replacementClass)) {
                        return Te.replace(t);
                    }
                    var r = new RegExp(''.concat(st.cssPrefix, '-.*'));
                    if (delete n[0].attributes.id, n[0].attributes.class) {
                        var a = n[0].attributes.class.split(' ').reduce(function (t, e) {
                            return e === st.replacementClass || e.match(r) ? t.toSvg.push(e) : t.toNode.push(e), t;
                        }, {
                            toNode: [],
                            toSvg: []
                        });
                        n[0].attributes.class = a.toSvg.join(' ');
                        0 === a.toNode.length ? e.removeAttribute('class') : e.setAttribute('class', a.toNode.join(' '));
                        
                    }
                    var o = n.map(function (t) {
                        return _t(t);
                    }).join('\n');
                    e.setAttribute('data-fa-i2svg', '');
                    e.innerHTML = o;
                    
                }
            };
            function Ce(t) {
                t();
            }
            function He(t, e) {
                var n = 'function' === typeof e ? e : Pe;
                if (0 === t.length) {
                    n();
                } else {
                    var r = Ce;
                    'async' === st.mutateApproach && (r = E.requestAnimationFrame || Ce);
                    r(function () {
                        var e = true === false ? Te.replace : Te[false] || Te.replace, r = _e('mutate');
                        t.map(e);
                        r();
                        n();
                        
                    });
                    
                }
            }
            var Re = false;
            function Ne() {
                Re = true;
            }
            function Ve() {
                Re = false;
            }
            var De = null;
            function Be(t) {
                if (j && false) {
                    var e = t.treeCallback, n = void 0 === e ? Pe : e, r = t.nodeCallback, a = void 0 === r ? Pe : r, o = t.pseudoElementsCallback, i = void 0 === o ? Pe : o, l = t.observeMutationsRoot, s = void 0 === l ? k : l;
                    De = new j(function (t) {
                        if (!Re) {
                            var e = Kt();
                            ht(t).forEach(function (t) {
                                if ('childList' === t.type && t.addedNodes.length > 0 && !ze(t.addedNodes[0]) && (st.searchPseudoElements && i(t.target), n(t.target)), 'attributes' === t.type && t.target.parentNode && st.searchPseudoElements && i(t.target.parentNode), 'attributes' === t.type && ze(t.target) && ~K.indexOf(t.attributeName)) {
                                    if ('class' === t.attributeName && function (t) {
                                            var e = t.getAttribute ? t.getAttribute('data-prefix') : null, n = t.getAttribute ? t.getAttribute('data-icon') : null;
                                            return e && n;
                                        }(t.target)) {
                                        var r = ee(dt(t.target)), o = r.prefix, l = r.iconName;
                                        t.target.setAttribute('data-prefix', o || e);
                                        l && t.target.setAttribute('data-icon', l);
                                        
                                    } else {
                                        (s = t.target) && s.classList && s.classList.contains && s.classList.contains(st.replacementClass) && a(t.target);
                                    }
                                }
                                var s;
                            });
                        }
                    });
                    P && De.observe(s, {
                        childList: true,
                        attributes: true,
                        characterData: true,
                        subtree: true
                    });
                    
                }
            }
            function Ie(t) {
                var e = t.getAttribute('style'), n = [];
                return e && (n = e.split(';').reduce(function (t, e) {
                    var n = e.split(':'), r = n[0], a = n.slice(1);
                    return r && a.length > 0 && (t[r] = a.join(':').trim()), t;
                }, {})), n;
            }
            function We(t) {
                var e, n, r = t.getAttribute('data-prefix'), a = t.getAttribute('data-icon'), o = void 0 !== t.innerText ? t.innerText.trim() : '', i = ee(dt(t));
                return i.prefix || (i.prefix = Kt()), r && a && (i.prefix = r, i.iconName = a), i.iconName && i.prefix || (i.prefix && o.length > 0 && (i.iconName = (e = i.prefix, n = t.innerText, (It[e] || {})[n] || Xt(i.prefix, St(t.innerText)))), !i.iconName && st.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = t.firstChild.data)), i;
            }
            function Fe(t) {
                var e = ht(t.attributes).reduce(function (t, e) {
                        return 'class' !== t.name && 'style' !== t.name && (t[e.name] = e.value), t;
                    }, {}), n = t.getAttribute('title'), r = t.getAttribute('data-fa-title-id');
                return st.autoA11y && (n ? e['aria-labelledby'] = ''.concat(st.replacementClass, '-title-').concat(r || pt()) : (e['aria-hidden'] = 'true', e.focusable = 'false')), e;
            }
            function Ue(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { styleParser: true }, n = We(t), r = n.iconName, o = n.prefix, i = n.rest, l = Fe(t), s = le('parseNodeAttributes', {}, t), c = e.styleParser ? Ie(t) : [];
                return a({
                    iconName: r,
                    title: t.getAttribute('title'),
                    titleId: t.getAttribute('data-fa-title-id'),
                    prefix: o,
                    transform: ft,
                    mask: {
                        iconName: null,
                        prefix: null,
                        rest: []
                    },
                    maskId: null,
                    symbol: false,
                    extra: {
                        classes: i,
                        styles: c,
                        attributes: l
                    }
                }, s);
            }
            var Ze = Mt.styles;
            function qe(t) {
                var e = 'nest' === false ? Ue(t, { styleParser: false }) : Ue(t);
                return ~e.extra.classes.indexOf('fa-layers-text') ? ce('generateLayersText', t, e) : ce('generateSvgReplacementMutation', t, e);
            }
            var $e = new Set();
            function Ye(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!P) {
                    return Promise.resolve();
                }
                var n = k.documentElement.classList, r = function (t) {
                        return n.add(''.concat('fontawesome-i2svg', '-').concat(t));
                    }, a = function (t) {
                        return n.remove(''.concat('fontawesome-i2svg', '-').concat(t));
                    }, o = st.autoFetchSvg ? $e : B.map(function (t) {
                        return 'fa-'.concat(t);
                    }).concat(Object.keys(Ze));
                o.includes('fa') || o.push('fa');
                var i = ['.'.concat('fa-layers-text', ':not([').concat('data-fa-i2svg', '])')].concat(o.map(function (t) {
                    return '.'.concat(t, ':not([').concat('data-fa-i2svg', '])');
                })).join(', ');
                if (0 === i.length) {
                    return Promise.resolve();
                }
                var l = [];
                try {
                    l = ht(t.querySelectorAll(i));
                } catch (Hn) {
                }
                if (!(l.length > 0)) {
                    return Promise.resolve();
                }
                r('pending');
                a('complete');
                
                var s = _e('onTree'), c = l.reduce(function (t, e) {
                        try {
                            var n = qe(e);
                            n && t.push(n);
                        } catch (Hn) {
                            N || 'MissingIcon' === Hn.name && console.error(Hn);
                        }
                        return t;
                    }, []);
                return new Promise(function (t, n) {
                    Promise.all(c).then(function (n) {
                        He(n, function () {
                            r('active');
                            r('complete');
                            a('pending');
                            'function' === typeof e && e();
                            s();
                            t();
                            
                        });
                    }).catch(function (t) {
                        s();
                        n(t);
                        
                    });
                });
            }
            function Xe(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                qe(t).then(function (t) {
                    t && He([t], e);
                });
            }
            B.map(function (t) {
                $e.add('fa-'.concat(t));
            });
            Object.keys(W.classic).map($e.add.bind($e));
            Object.keys(W.sharp).map($e.add.bind($e));
            $e = c($e);
            
            var Je = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.transform, r = void 0 === n ? ft : n, o = e.symbol, i = void 0 !== o && o, l = e.mask, s = void 0 === l ? null : l, c = e.maskId, u = void 0 === c ? null : c, f = e.title, p = void 0 === f ? null : f, h = e.titleId, d = void 0 === h ? null : h, v = e.classes, m = void 0 === v ? [] : v, b = e.attributes, g = void 0 === b ? {} : b, y = e.styles, w = void 0 === y ? {} : y;
                    if (t) {
                        var O = t.prefix, x = t.iconName, M = t.icon;
                        return ve(a({ type: 'icon' }, t), function () {
                            return se('beforeDOMElementCreation', {
                                iconDefinition: t,
                                params: e
                            }), st.autoA11y && (p ? g['aria-labelledby'] = ''.concat(st.replacementClass, '-title-').concat(d || pt()) : (g['aria-hidden'] = 'true', g.focusable = 'false')), me({
                                icons: {
                                    main: we(M),
                                    mask: s ? we(s.icon) : {
                                        found: false,
                                        width: null,
                                        height: null,
                                        icon: {}
                                    }
                                },
                                prefix: O,
                                iconName: x,
                                transform: a(a({}, ft), r),
                                symbol: i,
                                title: p,
                                maskId: u,
                                titleId: d,
                                extra: {
                                    attributes: g,
                                    styles: w,
                                    classes: m
                                }
                            });
                        });
                    }
                }, Ge = {
                    mixout: function () {
                        return {
                            icon: (t = Je, function (e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = (e || {}).icon ? e : ue(e || {}), o = n.mask;
                                return o && (o = (o || {}).icon ? o : ue(o || {})), t(r, a(a({}, n), {}, { mask: o }));
                            })
                        };
                        var t;
                    },
                    hooks: function () {
                        return {
                            mutationObserverCallbacks: function (t) {
                                return t.treeCallback = Ye, t.nodeCallback = Xe, t;
                            }
                        };
                    },
                    provides: function (t) {
                        t.i2svg = function (t) {
                            var e = t.node, n = void 0 === e ? k : e, r = t.callback;
                            return Ye(n, void 0 === r ? function () {
                            } : r);
                        };
                        t.generateSvgReplacementMutation = function (t, e) {
                            var n = e.iconName, r = e.title, a = e.titleId, o = e.prefix, i = e.transform, l = e.symbol, c = e.mask, u = e.maskId, f = e.extra;
                            return new Promise(function (e, p) {
                                Promise.all([
                                    xe(n, o),
                                    c.iconName ? xe(c.iconName, c.prefix) : Promise.resolve({
                                        found: false,
                                        width: 512,
                                        height: 512,
                                        icon: {}
                                    })
                                ]).then(function (c) {
                                    var p = s(c, 2), h = p[0], d = p[1];
                                    e([
                                        t,
                                        me({
                                            icons: {
                                                main: h,
                                                mask: d
                                            },
                                            prefix: o,
                                            iconName: n,
                                            transform: i,
                                            symbol: l,
                                            maskId: u,
                                            title: r,
                                            titleId: a,
                                            extra: f,
                                            watchable: true
                                        })
                                    ]);
                                }).catch(p);
                            });
                        };
                        t.generateAbstractIcon = function (t) {
                            var e, n = t.children, r = t.attributes, a = t.main, o = t.transform, i = mt(t.styles);
                            return i.length > 0 && (r.style = i), bt(o) && (e = ce('generateAbstractTransformGrouping', {
                                main: a,
                                transform: o,
                                containerWidth: a.width,
                                iconWidth: a.width
                            })), n.push(e || a.icon), {
                                children: n,
                                attributes: r
                            };
                        };
                        
                    }
                }, Ke = {
                    mixout: function () {
                        return {
                            layer: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.classes, r = void 0 === n ? [] : n;
                                return ve({ type: 'layer' }, function () {
                                    se('beforeDOMElementCreation', {
                                        assembler: t,
                                        params: e
                                    });
                                    var n = [];
                                    return t(function (t) {
                                        Array.isArray(t) ? t.map(function (t) {
                                            n = n.concat(t.abstract);
                                        }) : n = n.concat(t.abstract);
                                    }), [{
                                            tag: 'span',
                                            attributes: { class: [''.concat(st.cssPrefix, '-layers')].concat(c(r)).join(' ') },
                                            children: n
                                        }];
                                });
                            }
                        };
                    }
                }, Qe = {
                    mixout: function () {
                        return {
                            counter: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.title, r = void 0 === n ? null : n, a = e.classes, o = void 0 === a ? [] : a, i = e.attributes, l = void 0 === i ? {} : i, s = e.styles, u = void 0 === s ? {} : s;
                                return ve({
                                    type: 'counter',
                                    content: t
                                }, function () {
                                    return se('beforeDOMElementCreation', {
                                        content: t,
                                        params: e
                                    }), ge({
                                        content: t.toString(),
                                        title: r,
                                        extra: {
                                            attributes: l,
                                            styles: u,
                                            classes: [''.concat(st.cssPrefix, '-layers-counter')].concat(c(o))
                                        }
                                    });
                                });
                            }
                        };
                    }
                }, tn = {
                    mixout: function () {
                        return {
                            text: function (t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.transform, r = void 0 === n ? ft : n, o = e.title, i = void 0 === o ? null : o, l = e.classes, s = void 0 === l ? [] : l, u = e.attributes, f = void 0 === u ? {} : u, p = e.styles, h = void 0 === p ? {} : p;
                                return ve({
                                    type: 'text',
                                    content: t
                                }, function () {
                                    return se('beforeDOMElementCreation', {
                                        content: t,
                                        params: e
                                    }), be({
                                        content: t,
                                        transform: a(a({}, ft), r),
                                        title: i,
                                        extra: {
                                            attributes: f,
                                            styles: h,
                                            classes: [''.concat(st.cssPrefix, '-layers-text')].concat(c(s))
                                        }
                                    });
                                });
                            }
                        };
                    },
                    provides: function (t) {
                        t.generateLayersText = function (t, e) {
                            var n = e.title, r = e.transform, a = e.extra, o = null, i = null;
                            if (z) {
                                var l = parseInt(getComputedStyle(t).fontSize, 10), s = t.getBoundingClientRect();
                                o = s.width / l;
                                i = s.height / l;
                                
                            }
                            return st.autoA11y && !n && (a.attributes['aria-hidden'] = 'true'), Promise.resolve([
                                t,
                                be({
                                    content: t.innerHTML,
                                    width: o,
                                    height: i,
                                    transform: r,
                                    title: n,
                                    extra: a,
                                    watchable: true
                                })
                            ]);
                        };
                    }
                }, en = new RegExp('"', 'ug'), nn = [
                    1105920,
                    1112319
                ];
            function rn(t, e) {
                var n = ''.concat('data-fa-pseudo-element-pending').concat(e.replace(':', '-'));
                return new Promise(function (r, o) {
                    if (null !== t.getAttribute(n)) {
                        return r();
                    }
                    var i = ht(t.children).filter(function (t) {
                            return t.getAttribute('data-fa-pseudo-element') === e;
                        })[0], l = E.getComputedStyle(t, e), s = l.getPropertyValue('font-family').match(/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i), c = l.getPropertyValue('font-weight'), u = l.getPropertyValue('content');
                    if (i && !s) {
                        return t.removeChild(i), r();
                    }
                    if (s && 'none' !== u && '' !== u) {
                        var f = l.getPropertyValue('content'), p = ~['Sharp'].indexOf(s[2]) ? 'sharp' : 'classic', h = ~[
                                'Solid',
                                'Regular',
                                'Light',
                                'Thin',
                                'Duotone',
                                'Brands',
                                'Kit'
                            ].indexOf(s[2]) ? F[p][s[2].toLowerCase()] : X[p][c], d = function (t) {
                                var e = t.replace(en, ''), n = function (t, e) {
                                        var n, r = t.length, a = t.charCodeAt(e);
                                        return a >= 55296 && a <= 56319 && r > e + 1 && (n = t.charCodeAt(e + 1)) >= 56320 && n <= 57343 ? 1024 * (a - 55296) + n - 56320 + 65536 : a;
                                    }(e, 0), r = n >= nn[0] && n <= nn[1], a = 2 === e.length && e[0] === e[1];
                                return {
                                    value: St(a ? e[0] : e),
                                    isSecondary: r || a
                                };
                            }(f), v = d.value, m = d.isSecondary, b = s[0].startsWith('FontAwesome'), g = Xt(h, v), y = g;
                        if (b) {
                            var w = function (t) {
                                var e = Ft[t], n = Xt('fas', t);
                                return e || (n ? {
                                    prefix: 'fas',
                                    iconName: n
                                } : null) || {
                                    prefix: null,
                                    iconName: null
                                };
                            }(v);
                            w.iconName && w.prefix && (g = w.iconName, h = w.prefix);
                        }
                        if (!g || m || i && i.getAttribute('data-prefix') === h && i.getAttribute('data-icon') === y) {
                            r();
                        } else {
                            t.setAttribute(n, y);
                            i && t.removeChild(i);
                            
                            var O = {
                                    iconName: null,
                                    title: null,
                                    titleId: null,
                                    prefix: null,
                                    transform: ft,
                                    symbol: false,
                                    mask: {
                                        iconName: null,
                                        prefix: null,
                                        rest: []
                                    },
                                    maskId: null,
                                    extra: {
                                        classes: [],
                                        styles: {},
                                        attributes: {}
                                    }
                                }, x = O.extra;
                            x.attributes['data-fa-pseudo-element'] = e;
                            xe(g, h).then(function (o) {
                                var i = me(a(a({}, O), {}, {
                                        icons: {
                                            main: o,
                                            mask: {
                                                prefix: null,
                                                iconName: null,
                                                rest: []
                                            }
                                        },
                                        prefix: h,
                                        iconName: y,
                                        extra: x,
                                        watchable: true
                                    })), l = k.createElementNS('http://www.w3.org/2000/svg', 'svg');
                                '::before' === e ? t.insertBefore(l, t.firstChild) : t.appendChild(l);
                                l.outerHTML = i.map(function (t) {
                                    return _t(t);
                                }).join('\n');
                                t.removeAttribute(n);
                                r();
                                
                            }).catch(o);
                            
                        }
                    } else {
                        r();
                    }
                });
            }
            function an(t) {
                return Promise.all([
                    rn(t, '::before'),
                    rn(t, '::after')
                ]);
            }
            function on(t) {
                return t.parentNode !== document.head && !~R.indexOf(t.tagName.toUpperCase()) && !t.getAttribute('data-fa-pseudo-element') && (!t.parentNode || 'svg' !== t.parentNode.tagName);
            }
            function ln(t) {
                if (P) {
                    return new Promise(function (e, n) {
                        var r = ht(t.querySelectorAll('*')).filter(on).map(an), a = _e('searchPseudoElements');
                        Ne();
                        Promise.all(r).then(function () {
                            a();
                            Ve();
                            e();
                            
                        }).catch(function () {
                            a();
                            Ve();
                            n();
                            
                        });
                        
                    });
                }
            }
            var sn = false, cn = function (t) {
                    return t.toLowerCase().split(' ').reduce(function (t, e) {
                        var n = e.toLowerCase().split('-'), r = n[0], a = n.slice(1).join('-');
                        if (r && 'h' === a) {
                            return t.flipX = true, t;
                        }
                        if (r && 'v' === a) {
                            return t.flipY = true, t;
                        }
                        if (a = parseFloat(a), isNaN(a)) {
                            return t;
                        }
                        switch (r) {
                        case 'grow':
                            t.size = t.size + a;
                            break;
                        case 'shrink':
                            t.size = t.size - a;
                            break;
                        case 'left':
                            t.x = t.x - a;
                            break;
                        case 'right':
                            t.x = t.x + a;
                            break;
                        case 'up':
                            t.y = t.y - a;
                            break;
                        case 'down':
                            t.y = t.y + a;
                            break;
                        case 'rotate':
                            t.rotate = t.rotate + a;
                        }
                        return t;
                    }, {
                        size: 16,
                        x: 0,
                        y: 0,
                        flipX: false,
                        flipY: false,
                        rotate: 0
                    });
                }, un = {
                    mixout: function () {
                        return {
                            parse: {
                                transform: function (t) {
                                    return cn(t);
                                }
                            }
                        };
                    },
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (t, e) {
                                var n = e.getAttribute('data-fa-transform');
                                return n && (t.transform = cn(n)), t;
                            }
                        };
                    },
                    provides: function (t) {
                        t.generateAbstractTransformGrouping = function (t) {
                            var e = t.main, n = t.transform, r = t.containerWidth, o = t.iconWidth, i = { transform: 'translate('.concat(r / 2, ' 256)') }, l = 'translate('.concat(32 * n.x, ', ').concat(32 * n.y, ') '), s = 'scale('.concat(n.size / 16 * (n.flipX ? -1 : 1), ', ').concat(n.size / 16 * (n.flipY ? -1 : 1), ') '), c = 'rotate('.concat(n.rotate, ' 0 0)'), u = {
                                    outer: i,
                                    inner: { transform: ''.concat(l, ' ').concat(s, ' ').concat(c) },
                                    path: { transform: 'translate('.concat(o / 2 * -1, ' -256)') }
                                };
                            return {
                                tag: 'g',
                                attributes: a({}, u.outer),
                                children: [{
                                        tag: 'g',
                                        attributes: a({}, u.inner),
                                        children: [{
                                                tag: e.icon.tag,
                                                children: e.icon.children,
                                                attributes: a(a({}, e.icon.attributes), u.path)
                                            }]
                                    }]
                            };
                        };
                    }
                };
            function pn(t) {
                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = 'black'), t;
            }
            var hn = {
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (t, e) {
                                var n = e.getAttribute('data-fa-mask'), r = n ? ee(n.split(' ').map(function (t) {
                                        return t.trim();
                                    })) : {
                                        prefix: null,
                                        iconName: null,
                                        rest: []
                                    };
                                return r.prefix || (r.prefix = Kt()), t.mask = r, t.maskId = e.getAttribute('data-fa-mask-id'), t;
                            }
                        };
                    },
                    provides: function (t) {
                        t.generateAbstractMask = function (t) {
                            var e, n = t.children, r = t.attributes, o = t.main, i = t.mask, l = t.maskId, s = t.transform, c = o.width, u = o.icon, f = i.width, p = i.icon, h = function (t) {
                                    var e = t.transform, n = t.containerWidth, r = t.iconWidth, a = { transform: 'translate('.concat(n / 2, ' 256)') }, o = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '), i = 'scale('.concat(e.size / 16 * (e.flipX ? -1 : 1), ', ').concat(e.size / 16 * (e.flipY ? -1 : 1), ') '), l = 'rotate('.concat(e.rotate, ' 0 0)');
                                    return {
                                        outer: a,
                                        inner: { transform: ''.concat(o, ' ').concat(i, ' ').concat(l) },
                                        path: { transform: 'translate('.concat(r / 2 * -1, ' -256)') }
                                    };
                                }({
                                    transform: s,
                                    containerWidth: f,
                                    iconWidth: c
                                }), d = {
                                    tag: 'rect',
                                    attributes: a(a({}, fn), {}, { fill: 'white' })
                                }, v = u.children ? { children: u.children.map(pn) } : {}, m = {
                                    tag: 'g',
                                    attributes: a({}, h.inner),
                                    children: [pn(a({
                                            tag: u.tag,
                                            attributes: a(a({}, u.attributes), h.path)
                                        }, v))]
                                }, b = {
                                    tag: 'g',
                                    attributes: a({}, h.outer),
                                    children: [m]
                                }, g = 'mask-'.concat(l || pt()), y = 'clip-'.concat(l || pt()), w = {
                                    tag: 'mask',
                                    attributes: a(a({}, fn), {}, {
                                        id: g,
                                        maskUnits: 'userSpaceOnUse',
                                        maskContentUnits: 'userSpaceOnUse'
                                    }),
                                    children: [
                                        d,
                                        b
                                    ]
                                }, O = {
                                    tag: 'defs',
                                    children: [
                                        {
                                            tag: 'clipPath',
                                            attributes: { id: y },
                                            children: (e = p, 'g' === e.tag ? e.children : [e])
                                        },
                                        w
                                    ]
                                };
                            return n.push(O, {
                                tag: 'rect',
                                attributes: a({
                                    fill: 'currentColor',
                                    'clip-path': 'url(#'.concat(y, ')'),
                                    mask: 'url(#'.concat(g, ')')
                                }, fn)
                            }), {
                                children: n,
                                attributes: r
                            };
                        };
                    }
                }, dn = {
                    provides: function (t) {
                        var e = false;
                        E.matchMedia && (e = E.matchMedia('(prefers-reduced-motion: reduce)').matches);
                        t.missingIconAbstract = function () {
                            var t = [];
                            t.push({
                                tag: 'path',
                                attributes: a(a({}, n), {}, { d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z' })
                            });
                            var o = a(a({}, r), {}, { attributeName: 'opacity' }), i = {
                                    tag: 'circle',
                                    attributes: a(a({}, n), {}, {
                                        cx: '256',
                                        cy: '364',
                                        r: '28'
                                    }),
                                    children: []
                                };
                            return e || i.children.push({
                                tag: 'animate',
                                attributes: a(a({}, r), {}, {
                                    attributeName: 'r',
                                    values: '28;14;28;28;14;28;'
                                })
                            }, {
                                tag: 'animate',
                                attributes: a(a({}, o), {}, { values: '1;0;1;1;0;1;' })
                            }), t.push(i), t.push({
                                tag: 'path',
                                attributes: a(a({}, n), {}, {
                                    opacity: '1',
                                    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
                                }),
                                children: e ? [] : [{
                                        tag: 'animate',
                                        attributes: a(a({}, o), {}, { values: '1;0;0;0;0;1;' })
                                    }]
                            }), e || t.push({
                                tag: 'path',
                                attributes: a(a({}, n), {}, {
                                    opacity: '0',
                                    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
                                }),
                                children: [{
                                        tag: 'animate',
                                        attributes: a(a({}, o), {}, { values: '0;0;1;1;0;0;' })
                                    }]
                            }), {
                                tag: 'g',
                                attributes: { class: 'missing' },
                                children: t
                            };
                        };
                        
                    }
                };
            !function (t, e) {
                var n = e.mixoutsTo;
                re = t;
                ae = {};
                Object.keys(oe).forEach(function (t) {
                    -1 === ie.indexOf(t) && delete oe[t];
                });
                re.forEach(function (t) {
                    var e = t.mixout ? t.mixout() : {};
                    if (Object.keys(e).forEach(function (t) {
                            'function' === typeof e[t] && (n[t] = e[t]);
                            'object' === o(e[t]) && Object.keys(e[t]).forEach(function (r) {
                                n[t] || (n[t] = {});
                                n[t][r] = e[t][r];
                                
                            });
                            
                        }), t.hooks) {
                        var r = t.hooks();
                        Object.keys(r).forEach(function (t) {
                            ae[t] || (ae[t] = []);
                            ae[t].push(r[t]);
                            
                        });
                    }
                    t.provides && t.provides(oe);
                });
                
            }([
                Ot,
                Ge,
                Ke,
                Qe,
                tn,
                {
                    hooks: function () {
                        return {
                            mutationObserverCallbacks: function (t) {
                                return t.pseudoElementsCallback = ln, t;
                            }
                        };
                    },
                    provides: function (t) {
                        t.pseudoElements2svg = function (t) {
                            var e = t.node, n = void 0 === e ? k : e;
                            st.searchPseudoElements && ln(n);
                        };
                    }
                },
                {
                    mixout: function () {
                        return {
                            dom: {
                                unwatch: function () {
                                    Ne();
                                    sn = true;
                                    
                                }
                            }
                        };
                    },
                    hooks: function () {
                        return {
                            bootstrap: function () {
                                Be(le('mutationObserverCallbacks', {}));
                            },
                            noAuto: function () {
                                De && De.disconnect();
                            },
                            watch: function (t) {
                                var e = t.observeMutationsRoot;
                                sn ? Ve() : Be(le('mutationObserverCallbacks', { observeMutationsRoot: e }));
                            }
                        };
                    }
                },
                un,
                hn,
                dn,
                {
                    hooks: function () {
                        return {
                            parseNodeAttributes: function (t, e) {
                                var n = e.getAttribute('data-fa-symbol'), r = null !== n && ('' === n || n);
                                return t.symbol = r, t;
                            }
                        };
                    }
                }
            ], { mixoutsTo: he });
            var vn = he.parse, mn = he.icon, bn = n(45697), gn = n.n(bn), yn = n(67294);
            function wn(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    }));
                    n.push.apply(n, r);
                    
                }
                return n;
            }
            function On(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? wn(Object(n), true).forEach(function (e) {
                        Mn(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function xn(t) {
                return xn = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                    return typeof t;
                } : function (t) {
                    return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }, xn(t);
            }
            function Mn(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : t[e] = n, t;
            }
            function En(t, e) {
                if (null == t) {
                    return {};
                }
                var n, r, a = function (t, e) {
                        if (null == t) {
                            return {};
                        }
                        var n, r, a = {}, o = Object.keys(t);
                        for (r = 0; r < o.length; r++) {
                            n = o[r];
                            e.indexOf(n) >= 0 || (a[n] = t[n]);
                            
                        }
                        return a;
                    }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < o.length; r++) {
                        n = o[r];
                        e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
                        
                    }
                }
                return a;
            }
            function kn(t) {
                return function (t) {
                    if (Array.isArray(t)) {
                        return jn(t);
                    }
                }(t) || function (t) {
                    if ('undefined' !== typeof Symbol && null != t[Symbol.iterator] || null != t['@@iterator']) {
                        return Array.from(t);
                    }
                }(t) || function (t, e) {
                    if (!t) {
                        return;
                    }
                    if ('string' === typeof t) {
                        return jn(t, e);
                    }
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    'Object' === n && t.constructor && (n = t.constructor.name);
                    if ('Map' === n || 'Set' === n) {
                        return Array.from(t);
                    }
                    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                        return jn(t, e);
                    }
                }(t) || (function () {
                    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }());
            }
            function jn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) {
                    r[n] = t[n];
                }
                return r;
            }
            function _n(t) {
                return e = t, (e -= 0) === e ? t : (t = t.replace(/[\-_\s]+(.)?/g, function (t, e) {
                    return e ? e.toUpperCase() : '';
                })).substr(0, 1).toLowerCase() + t.substr(1);
                var e;
            }
            var Pn = ['style'];
            function zn(t) {
                return t.split(';').map(function (t) {
                    return t.trim();
                }).filter(function (t) {
                    return t;
                }).reduce(function (t, e) {
                    var n, r = e.indexOf(':'), a = _n(e.slice(0, r)), o = e.slice(r + 1).trim();
                    return a.startsWith('webkit') ? t[n = a, n.charAt(0).toUpperCase() + n.slice(1)] = o : t[a] = o, t;
                }, {});
            }
            var Sn = false;
            try {
                Sn = true;
            } catch (Hn) {
            }
            function Ln(t) {
                return t && 'object' === xn(t) && t.prefix && t.iconName && t.icon ? t : vn.icon ? vn.icon(t) : null === t ? null : t && 'object' === xn(t) && t.prefix && t.iconName ? t : Array.isArray(t) && 2 === t.length ? {
                    prefix: t[0],
                    iconName: t[1]
                } : 'string' === typeof t ? {
                    prefix: 'fas',
                    iconName: t
                } : void 0;
            }
            function An(t, e) {
                return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? Mn({}, t, e) : {};
            }
            var Tn = yn.forwardRef(function (t, e) {
                var n = t.icon, r = t.mask, a = t.symbol, o = t.className, i = t.title, l = t.titleId, s = t.maskId, c = Ln(n), u = An('classes', [].concat(kn(function (t) {
                        var e, n = t.beat, r = t.fade, a = t.beatFade, o = t.bounce, i = t.shake, l = t.flash, s = t.spin, c = t.spinPulse, u = t.spinReverse, f = t.pulse, p = t.fixedWidth, h = t.inverse, d = t.border, v = t.listItem, m = t.flip, b = t.size, g = t.rotation, y = t.pull, w = (Mn(e = {
                                'fa-beat': n,
                                'fa-fade': r,
                                'fa-beat-fade': a,
                                'fa-bounce': o,
                                'fa-shake': i,
                                'fa-flash': l,
                                'fa-spin': s,
                                'fa-spin-reverse': u,
                                'fa-spin-pulse': c,
                                'fa-pulse': f,
                                'fa-fw': p,
                                'fa-inverse': h,
                                'fa-border': d,
                                'fa-li': v,
                                'fa-flip': true === m,
                                'fa-flip-horizontal': 'horizontal' === m || 'both' === m,
                                'fa-flip-vertical': 'vertical' === m || 'both' === m
                            }, 'fa-'.concat(b), 'undefined' !== typeof b && null !== b), Mn(e, 'fa-rotate-'.concat(g), 'undefined' !== typeof g && null !== g && 0 !== g), Mn(e, 'fa-pull-'.concat(y), 'undefined' !== typeof y && null !== y), Mn(e, 'fa-swap-opacity', t.swapOpacity), e);
                        return Object.keys(w).map(function (t) {
                            return w[t] ? t : null;
                        }).filter(function (t) {
                            return t;
                        });
                    }(t)), kn(o.split(' ')))), f = An('transform', 'string' === typeof t.transform ? vn.transform(t.transform) : t.transform), p = An('mask', Ln(r)), h = mn(c, On(On(On(On({}, u), f), p), {}, {
                        symbol: a,
                        title: i,
                        titleId: l,
                        maskId: s
                    }));
                if (!h) {
                    return (function () {
                        var t;
                        !Sn && console && 'function' === typeof console.error && (t = console).error.apply(t, arguments);
                    }('Could not find icon', c)), null;
                }
                var d = h.abstract, v = { ref: e };
                return Object.keys(t).forEach(function (e) {
                    Tn.defaultProps.hasOwnProperty(e) || (v[e] = t[e]);
                }), Cn(d[0], v);
            });
            Tn.displayName = 'FontAwesomeIcon';
            Tn.propTypes = {
                beat: gn().bool,
                border: gn().bool,
                beatFade: gn().bool,
                bounce: gn().bool,
                className: gn().string,
                fade: gn().bool,
                flash: gn().bool,
                mask: gn().oneOfType([
                    gn().object,
                    gn().array,
                    gn().string
                ]),
                maskId: gn().string,
                fixedWidth: gn().bool,
                inverse: gn().bool,
                flip: gn().oneOf([
                    true,
                    false,
                    'horizontal',
                    'vertical',
                    'both'
                ]),
                icon: gn().oneOfType([
                    gn().object,
                    gn().array,
                    gn().string
                ]),
                listItem: gn().bool,
                pull: gn().oneOf([
                    'right',
                    'left'
                ]),
                pulse: gn().bool,
                rotation: gn().oneOf([
                    0,
                    90,
                    180,
                    270
                ]),
                shake: gn().bool,
                size: gn().oneOf([
                    '2xs',
                    'xs',
                    'sm',
                    'lg',
                    'xl',
                    '2xl',
                    '1x',
                    '2x',
                    '3x',
                    '4x',
                    '5x',
                    '6x',
                    '7x',
                    '8x',
                    '9x',
                    '10x'
                ]),
                spin: gn().bool,
                spinPulse: gn().bool,
                spinReverse: gn().bool,
                symbol: gn().oneOfType([
                    gn().bool,
                    gn().string
                ]),
                title: gn().string,
                titleId: gn().string,
                transform: gn().oneOfType([
                    gn().string,
                    gn().object
                ]),
                swapOpacity: gn().bool
            };
            Tn.defaultProps = {
                border: false,
                className: '',
                mask: null,
                maskId: null,
                fixedWidth: false,
                inverse: false,
                flip: false,
                icon: null,
                listItem: false,
                pull: null,
                pulse: false,
                rotation: null,
                size: null,
                spin: false,
                spinPulse: false,
                spinReverse: false,
                beat: false,
                fade: false,
                beatFade: false,
                bounce: false,
                shake: false,
                symbol: false,
                title: '',
                titleId: null,
                transform: null,
                swapOpacity: false
            };
            
            var Cn = function t(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ('string' === typeof n) {
                    return n;
                }
                var a = (n.children || []).map(function (n) {
                        return t(e, n);
                    }), o = Object.keys(n.attributes || {}).reduce(function (t, e) {
                        var r = n.attributes[e];
                        switch (e) {
                        case 'class':
                            t.attrs.className = r, delete n.attributes.class;
                            break;
                        case 'style':
                            t.attrs.style = zn(r);
                            break;
                        default:
                            0 === e.indexOf('aria-') || 0 === e.indexOf('data-') ? t.attrs[e.toLowerCase()] = r : t.attrs[_n(e)] = r;
                        }
                        return t;
                    }, { attrs: {} }), i = r.style, l = void 0 === i ? {} : i, s = En(r, Pn);
                return o.attrs.style = On(On({}, o.attrs.style), l), e.apply(void 0, [
                    n.tag,
                    On(On({}, o.attrs), s)
                ].concat(kn(a)));
            }.bind(null, yn.createElement);
        },
        55581: function (t, e, n) {
            'use strict';
            n.d(e, {
                UI: function () {
                    return i;
                }
            });
            
            function a() {
            }
            function o(t, e) {
                var n = new a();
                if (t instanceof a) {
                    t.each(function (t, e) {
                        n.set(e, t);
                    });
                } else {
                    if (Array.isArray(t)) {
                        var r, o = -1, i = t.length;
                        if (null == e) {
                            for (; ++o < i;) {
                                n.set(o, t[o]);
                            }
                        } else {
                            for (; ++o < i;) {
                                n.set(e(r = t[o], o, t), r);
                            }
                        }
                    } else {
                        if (t) {
                            for (var l in t)
                                n.set(l, t[l]);
                        }
                    }
                }
                return n;
            }
            a.prototype = o.prototype = {
                constructor: a,
                has: function (t) {
                    return '$' + t in this;
                },
                get: function (t) {
                    return this['$' + t];
                },
                set: function (t, e) {
                    return this['$' + t] = e, this;
                },
                remove: function (t) {
                    var e = '$' + t;
                    return e in this && delete this[e];
                },
                clear: function () {
                    for (var t in this)
                        t[0] === '$' && delete this[t];
                },
                keys: function () {
                    var t = [];
                    for (var e in this)
                        e[0] === '$' && t.push(e.slice(1));
                    return t;
                },
                values: function () {
                    var t = [];
                    for (var e in this)
                        e[0] === '$' && t.push(this[e]);
                    return t;
                },
                entries: function () {
                    var t = [];
                    for (var e in this)
                        e[0] === '$' && t.push({
                            key: e.slice(1),
                            value: this[e]
                        });
                    return t;
                },
                size: function () {
                    var t = 0;
                    for (var e in this)
                        e[0] === '$' && ++t;
                    return t;
                },
                empty: function () {
                    for (var t in this)
                        if (t[0] === '$') {
                            return false;
                        }
                    return true;
                },
                each: function (t) {
                    for (var e in this)
                        e[0] === '$' && t(this[e], e.slice(1), this);
                }
            };
            var i = o;
            function l() {
            }
            var s = i.prototype;
            function c(t, e) {
                var n = new l();
                if (t instanceof l) {
                    t.each(function (t) {
                        n.add(t);
                    });
                } else {
                    if (t) {
                        var r = -1, a = t.length;
                        if (null == e) {
                            for (; ++r < a;) {
                                n.add(t[r]);
                            }
                        } else {
                            for (; ++r < a;) {
                                n.add(e(t[r], r, t));
                            }
                        }
                    }
                }
                return n;
            }
            l.prototype = c.prototype = {
                constructor: l,
                has: s.has,
                add: function (t) {
                    return this['$' + (t += '')] = t, this;
                },
                remove: s.remove,
                clear: s.clear,
                values: s.keys,
                size: s.size,
                empty: s.empty,
                each: s.each
            };
        },
        2852: function (t, e, n) {
            'use strict';
            n.r(e);
            n.d(e, {
                i