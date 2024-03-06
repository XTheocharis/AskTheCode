(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        44476: function (e, t, r) {
            'use strict';
            r.d(t, {
                T: function () {
                    return j;
                },
                r: function () {
                    return b;
                }
            });
            var n = r(4730), o = r(59499), i = r(27812), s = (r(67294), r(45697)), a = r.n(s), c = r(88306), l = r.n(c), u = r(93016), d = r(29514), p = r(85893), f = [
                    'areasPerSize',
                    'gapX',
                    'gapY',
                    'theme',
                    'as',
                    'id'
                ], h = [
                    'areaId',
                    'children'
                ];
            function m(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function g(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(r), true).forEach(function (t) {
                        (0, o.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var y = l()(function (e, t, r) {
                    var n = {
                            display: 'grid',
                            gridAutoColumns: '1fr',
                            gridAutoRows: 'auto',
                            gap: ''.concat(r, ' ').concat(t),
                            justifyItems: 'stretch',
                            alignItems: 'stretch',
                            justifyContent: 'stretch'
                        }, s = Object.keys(e).sort(function (e, t) {
                            return e - t;
                        });
                    return Object.assign.apply(Object, [n].concat((0, i.Z)(s.map(function (t, r) {
                        return (0, o.Z)({}, '@media (min-width: '.concat(t, 'px) ').concat(r < s.length - 1 ? 'and (max-width: '.concat(s[r + 1], 'px)') : ''), {
                            gridTemplateAreas: e[t].map(function (e) {
                                return '"'.concat(e.join(' '), '"');
                            }).join(' ')
                        });
                    })))), n;
                }), j = (0, u.LM)(function (e) {
                    var t = e.areasPerSize, r = e.gapX, o = e.gapY, i = (e.theme, e.as, e.id, (0, n.Z)(e, f));
                    return Object.assign({}, y(t, r, o), i);
                });
            j.propTypes = {
                areasPerSize: a().objectOf(a().arrayOf(a().arrayOf(a().string))).isRequired,
                gapX: a().string,
                gapY: a().string
            };
            j.defaultProps = {
                gapX: '16px',
                gapY: '16px'
            };
            
            var b = function (e) {
                var t = e.areaId, r = e.children, o = (0, n.Z)(e, h);
                return (0, p.jsx)(d.ZC, g(g({
                    style: { gridArea: t },
                    display: 'flex',
                    flexDirection: 'column'
                }, o), {}, { children: r || false }));
            };
        },
        52340: function (e, t, r) {
            'use strict';
            var n = r(59499), o = r(4730), i = (r(67294), r(29514)), s = r(85893), a = [
                    'color',
                    'height'
                ];
            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            var l = function (e) {
                var t = e.color, r = e.height, l = (0, o.Z)(e, a);
                return (0, s.jsx)(i.ZC, function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), true).forEach(function (t) {
                            (0, n.Z)(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                    return e;
                }({
                    backgroundColor: t,
                    width: '100%',
                    height: ''.concat(r, 'px')
                }, l));
            };
            l.defaultProps = {
                color: 'black',
                height: 2
            };
            t.Z = l;
            
        },
        7316: function (e, t, r) {
            'use strict';
            var n = r(59499), o = r(4730), i = r(67294), s = r(45697), a = r.n(s), c = r(29514), l = r(89950), u = r(65027), d = r(85893), p = [
                    'content',
                    'iconType',
                    'iconColor'
                ];
            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(r), true).forEach(function (t) {
                        (0, n.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var m = i.memo(function (e) {
                var t = e.content, r = e.iconType, n = e.iconColor, i = (0, o.Z)(e, p);
                return (0, d.jsx)(c.ZC, {
                    display: 'inline-block',
                    mb: '-3px',
                    mx: 1,
                    children: (0, d.jsx)(u.Z, h(h({
                        content: t,
                        place: 'top'
                    }, i), {}, {
                        children: (0, d.jsx)(c.ZC, {
                            pointerEvents: 'none',
                            children: (0, d.jsx)(l.J, {
                                label: 'info',
                                type: r,
                                size: 14,
                                color: n
                            })
                        })
                    }))
                });
            });
            m.propTypes = {
                content: a().node.isRequired,
                iconType: a().string,
                iconColor: a().string
            };
            m.defaultProps = {
                iconType: 'info-sign',
                iconColor: 'blue.4'
            };
            t.Z = m;
            
        },
        17018: function (e, t, r) {
            'use strict';
            r(67294);
            var n = r(8935), o = r(29514), i = r(52340), s = (r(7251), r(85893)), a = function (e) {
                    var t = e.title, r = e.link, a = e.running, c = e.headerContent, l = e.topBar, u = e.maxWidth, d = e.fullWidthBreakpoint, p = e.children;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(o.ZC, {
                            children: (0, s.jsx)(n.SizeMe, {
                                children: function (e) {
                                    var n = e.size.width;
                                    return (0, s.jsx)(o.ZC, {
                                        mx: 3,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        children: (0, s.jsxs)(o.ZC, {
                                            flex: 1,
                                            width: 0,
                                            maxWidth: n > d ? void 0 : u,
                                            children: [
                                                (0, s.jsx)(o.ZC, { my: 3 }),
                                                (0, s.jsxs)(o.ZC, {
                                                    display: 'flex',
                                                    mx: 0,
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-end',
                                                    children: [
                                                        (0, s.jsx)(o.A, {
                                                            href: r,
                                                            style: { textDecoration: 'none' },
                                                            children: (0, s.jsxs)(o.ZC, {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                children: [
                                                                    (0, s.jsx)(o.ZC, {
                                                                        children: (0, s.jsx)('img', {
                                                                            height: '28px',
                                                                            src: '/static/img/speedrabbit-'.concat(a ? 'animate.gif' : 'static.png')
                                                                        })
                                                                    }),
                                                                    !!t && (0, s.jsx)(o.ZC, {
                                                                        mx: 2,
                                                                        fontSize: 5,
                                                                        fontWeight: 700,
                                                                        whiteSpace: 'nowrap',
                                                                        color: 'black',
                                                                        children: t
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        c
                                                    ]
                                                }),
                                                (0, s.jsx)(i.Z, { mt: '12px' }),
                                                l,
                                                (0, s.jsx)(o.ZC, { my: '19px' }),
                                                p
                                            ]
                                        })
                                    });
                                }
                            })
                        })
                    });
                };
            a.defaultProps = {
                link: '/',
                headerContent: false,
                topBar: false
            };
            t.Z = a;
            
        },
        65027: function (e, t, r) {
            'use strict';
            var n = r(59499), o = r(4730), i = r(67294), s = r(38735), a = r(14461), c = r.n(a), l = r(29514), u = r(85893), d = [
                    'content',
                    'maxWidth',
                    'rebuildOnChange',
                    'disable',
                    'children'
                ];
            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? p(Object(r), true).forEach(function (t) {
                        (0, n.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var h = function (e) {
                var t = e.content, r = e.maxWidth, n = e.rebuildOnChange, a = e.disable, p = e.children, h = (0, o.Z)(e, d), m = (0, i.useState)(c()('single_tooltip_'))[0];
                return (0, i.useEffect)(function () {
                    n && s.Z.rebuild();
                }, [
                    t,
                    n
                ]), (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)('div', {
                            'data-tip': true,
                            'data-for': m,
                            children: p
                        }),
                        (0, u.jsx)(s.Z, f({
                            id: m,
                            disable: a,
                            effect: 'solid',
                            getContent: (0, i.useCallback)(function () {
                                return (0, u.jsx)(l.ZC, {
                                    fontSize: 1,
                                    color: 'gray.9',
                                    maxWidth: r,
                                    children: t || false
                                });
                            }, [
                                t,
                                r
                            ])
                        }, h))
                    ]
                });
            };
            h.defaultProps = {
                maxWidth: '21rem',
                rebuildOnChange: false
            };
            t.Z = h;
            
        },
        54546: function (e, t, r) {
            'use strict';
            function n(e) {
                var t = e && Math.abs(e) < 1 ? 12 : 0, r = Number(Math.round(e * Math.pow(10, t))).toString().split(',')[0].length;
                return 3 * Math.floor((r - 1) / 3) - t;
            }
            function o(e) {
                return e < -9 ? 'p' : e < -6 ? 'n' : e < -3 ? 'μ' : e < 0 ? 'm' : e < 3 ? '' : e < 6 ? 'k' : e < 9 ? 'M' : e < 12 ? 'G' : e < 15 ? 'T' : e < 18 ? 'P' : e < 21 ? 'E' : 'Z';
            }
            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '', r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2, i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (Math.abs(e) === 1e+400) {
                    return ''.concat(e < 0 ? '-' : '', '\u221E');
                }
                if (!i) {
                    return ''.concat(Number(e.toFixed(r))).concat(t);
                }
                var s = n(e);
                return ''.concat(Number((e * Math.pow(10, -s)).toFixed(r))).concat(t).concat(o(s));
            }
            r.d(t, {
                Kt: function () {
                    return c;
                },
                Ov: function () {
                    return s;
                },
                Pe: function () {
                    return l;
                },
                Sm: function () {
                    return a;
                },
                ao: function () {
                    return i;
                },
                gX: function () {
                    return o;
                },
                h3: function () {
                    return n;
                }
            });
            var s = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return (e > 99 && e < 100 ? 100 - +(100 - e).toPrecision(Math.max(1, t)) : e > 0 && e < 1 ? +e.toPrecision(Math.max(1, t)) : i(e, '', t)) + '%';
                }, a = function (e) {
                    return e.reduce(function (e, t) {
                        return e + t;
                    }, 0);
                }, c = function (e) {
                    return a(e) / e.length;
                }, l = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.5;
                    if (!e.length) {
                        return 0;
                    }
                    var r = e.slice().sort(function (e, t) {
                            return e - t;
                        }), n = (e.length - 1) * t, o = n % 1;
                    if (0 === o) {
                        return r[Math.round(n)];
                    }
                    var i = [
                        Math.floor,
                        Math.ceil
                    ].map(function (e) {
                        return r[e(n)];
                    });
                    return i[0] + (i[1] - i[0]) * o;
                };
        },
        48444: function (e, t, r) {
            'use strict';
            var n = r(59499), o = r(4730), i = (r(67294), r(29514)), s = r(93016), a = r(52340), c = r(16505), l = r(85893), u = ['children'];
            function d(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(r), true).forEach(function (t) {
                        (0, n.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var f = (0, s.LM)(function () {
                    return {
                        color: 'black',
                        fontWeight: '500',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' }
                    };
                }, i.A), h = function (e) {
                    var t = e.children, r = (0, o.Z)(e, u);
                    return (0, l.jsx)(f, p(p({ px: 2 }, r), {}, { children: t }));
                }, m = function () {
                    return (0, l.jsxs)(i.ZC, {
                        my: 3,
                        children: [
                            (0, l.jsx)(a.Z, {}),
                            (0, l.jsx)(i.ZC, { my: 2 }),
                            (0, l.jsxs)(i.ZC, {
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                children: [
                                    (0, l.jsxs)(i.ZC, {
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        children: [
                                            (0, l.jsx)(h, {
                                                href: '/',
                                                children: 'Home'
                                            }),
                                            (0, l.jsx)(h, {
                                                href: '/about/',
                                                children: 'About'
                                            }),
                                            (0, l.jsx)(h, {
                                                href: 'https://www.cloudflare.com/privacypolicy/',
                                                children: 'Privacy Policy'
                                            }),
                                            (0, l.jsx)(h, {
                                                href: 'https://www.cloudflare.com/website-terms/',
                                                children: 'Terms of Use'
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)(f, {
                                        target: '_blank',
                                        href: 'https://www.cloudflare.com',
                                        children: (0, l.jsx)(i.ZC, {
                                            lineHeight: 0,
                                            children: (0, l.jsx)(c.TR, {})
                                        })
                                    })
                                ]
                            })
                        ]
                    });
                };
            m.defaultProps = { page: 'home' };
            t.Z = m;
            
        },
        76871: function (e, t, r) {
            'use strict';
            r.d(t, {
                DM: function () {
                    return f;
                },
                JN: function () {
                    return 1200;
                },
                MR: function () {
                    return 768;
                },
                bh: function () {
                    return 'com.cloudflare.speed/consent/agree';
                },
                c3: function () {
                    return 'pk.eyJ1IjoiY2xvdWRmbGFyZW1hcHMiLCJhIjoiY2pydHBvdTVqMDJnczQzcGZ3YnQyczJ6byJ9.Cdd2tpm161IybChVgHgJ3g';
                },
                gW: function () {
                    return c;
                },
                q$: function () {
                    return 1800;
                },
                qf: function () {
                    return a;
                },
                rb: function () {
                    return s;
                }
            });
            var n = r(39370), s = ''.concat('', '/meta'), a = ''.concat('', '/locations'), c = {
                    downloadApiUrl: ''.concat('', '/__down'),
                    uploadApiUrl: ''.concat('', '/__up'),
                    logMeasurementApiUrl: ''.concat('', '/__log'),
                    turnServerCredsApiUrl: ''.concat('', '/turn-creds'),
                    includeCredentials: true
                }, f = {
                    latency: n.Rl.colors.blue[4],
                    download: n.Rl.colors.cfOrange,
                    upload: n.Rl.colors.violet[4]
                };
        },
        48175: function (e, t, r) {
            'use strict';
            r.r(t);
            r.d(t, {
                default: function () {
                    return Et;
                }
            });
            
            r(35666);
            var n = r(67294), o = r(9008), i = r.n(o), s = r(60335), a = r(2664), c = r(14890), l = r(59499);
            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            
            var f = (0, c.MT)(function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p, t = arguments.length > 1 ? arguments[1] : void 0;
                    if ('UPDATE_SUMMARY' === t.type) {
                        var r = t.payload;
                        return d(d({}, e), {}, { summary: r });
                    }
                    return e;
                }), h = r(45697), m = r.n(h);
            function g() {
                var e = (0, n.useState)(true), t = e[0], r = e[1];
                return (0, n.useEffect)(function () {
                    return r(false);
                }, []), t;
            }
            var y = function (e) {
                var t = e.children, r = e.onSSR;
                return g() ? r : t;
            };
            y.propTypes = {
                children: m().node.isRequired,
                onSSR: m().node
            };
            y.defaultProps = { onSSR: false };
            
            var j = y, b = r(17018), x = r(61773), v = r(4730), O = r(5152), w = r.n(O), P = r(29514), C = r(76871), S = r(68516), Z = r(44476), k = r(7316), M = r(52340), D = r(93016), T = r(50029), L = r(87794), I = r.n(L), R = (r(94301), r(58902)), E = r(13940), A = r(48789);
            var z = r(85893), U = [
                    'urls',
                    'silentUpdate',
                    'children'
                ], W = ['silent'], F = [
                    'url',
                    'dataAccessor',
                    'errorCheck',
                    'isEmptyCheck',
                    'emptyMessage',
                    'loadingIndicator',
                    'showState',
                    'silentUpdate',
                    'pollingFrequency',
                    'children'
                ];
            function q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : q(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var B = {}, N = function (e, t) {
                    var r = t.useCache, n = void 0 === r || r, o = t.cacheIt, i = void 0 === o || o, s = t.options, a = void 0 === s ? {} : s, c = t.responseParser, l = void 0 === c ? function (e) {
                            return e.json();
                        } : c, u = t.ignoreErrors, d = void 0 !== u && u, p = t.isErrorResponse, f = void 0 === p ? function (e) {
                            return !e.ok;
                        } : p, h = t.errorResponseParser, m = void 0 === h ? function (e) {
                            return e.statusText;
                        } : h, g = t.errorFormatter, y = void 0 === g ? function (e, t) {
                            return ''.concat(e, ' ').concat(t);
                        } : g;
                    if (n && B.hasOwnProperty(e)) {
                        return B[e];
                    }
                    var j = fetch(e, a).then((function () {
                        var e = (0, T.Z)(I().mark(function e(t) {
                            return I().wrap(function (e) {
                                for (;;) {
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (f(t)) {
                                            
                                            break;
                                        }
                                        return e.abrupt('return', t);
                                    case 2:
                                        return e.t0 = Error, e.next = 5, m(t);
                                    case 5:
                                        throw e.t1 = e.sent, (0, e.t0)(e.t1);
                                    case 7:
                                    case 'end':
                                        return e.stop();
                                    }
                                }
                            }, e);
                        }));
                        return function (t) {
                            return e.apply(this, arguments);
                        };
                    }())).then(l).then(function (t) {
                        return i ? B[e] = t : t;
                    }).catch(function (t) {
                        if (!d) {
                            throw Error(y(t, e));
                        }
                    });
                    return i && !B.hasOwnProperty(e) && (B[e] = j), j;
                }, Y = function (e) {
                    var t = e.urls, r = e.silentUpdate, o = e.children, i = (0, v.Z)(e, U), s = (0, n.useState)(void 0), a = s[0], c = s[1], l = (0, n.useState)(false), u = l[0], d = l[1], p = (0, n.useState)(null), f = p[0], h = p[1], m = (function () {
                            var e = (0, n.useRef)(true);
                            return (0, n.useEffect)(function () {
                                return function () {
                                    
                                };
                            }, []), function () {
                                return e.current;
                            };
                        }()), y = (0, n.useRef)(), j = {
                            loading: u,
                            responses: a,
                            error: f
                        }, b = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.silent, o = void 0 === n ? r : n, s = (0, v.Z)(e, W), a = y.current = Math.round(1000000000000 * Math.random()), l = t.map(function (e) {
                                    return N(e, Object.assign({}, i, s));
                                }), u = l.some(function (e) {
                                    return 'object' === typeof e && !!e.then;
                                });
                            !o && u && (m() && d(j.loading = true), m() && c(j.responses = null), m() && h(j.error = null));
                            u || (j.responses = l);
                            R.Z.all(l).then(function (e) {
                                a === y.current && m() && c(e);
                            }).catch(function (e) {
                                a === y.current && m() && h(''.concat(e));
                            }).finally(function () {
                                m() && d(false);
                            });
                            
                        };
                    return (0, n.useMemo)(function () {
                        return b({ silent: r && !!a });
                    }, [
                        JSON.stringify(t),
                        t.filter(function (e) {
                            return B.hasOwnProperty(e);
                        }).length
                    ]), !g() && !!o && o(_(_({}, j), {}, { refetch: b }));
                };
            Y.propTypes = {
                urls: m().arrayOf(m().string).isRequired,
                silentUpdate: m().bool,
                children: m().func
            };
            Y.defaultProps = { silentUpdate: false };
            
            var H = function (e) {
                var t = e.url, r = e.dataAccessor, o = e.errorCheck, i = e.isEmptyCheck, s = e.emptyMessage, a = e.loadingIndicator, c = e.showState, l = e.silentUpdate, u = e.pollingFrequency, d = e.children, p = (0, v.Z)(e, F), f = (0, n.useRef)();
                (0, n.useEffect)(function () {
                    return function () {
                        return clearTimeout(f.current);
                    };
                }, []);
                var h = !(t instanceof Array), m = h ? [t] : t;
                return (0, z.jsx)(Y, _(_({
                    urls: m,
                    silentUpdate: l
                }, p), {}, {
                    children: function (e) {
                        var t, n = e.responses, l = e.loading, p = e.error, m = e.refetch;
                        return clearTimeout(f.current), u > 0 && !l && (n || p) && (f.current = setTimeout(function () {
                            return m({ useCache: false });
                        }, u)), p ? c && (0, z.jsx)(E.F, {
                            m: 2,
                            type: 'error',
                            children: p
                        }) : l ? c && a : !!n && (n.some(o) ? c && (0, z.jsx)(E.F, {
                            m: 2,
                            type: 'error',
                            children: n.map(o).join(', ')
                        }) : (t = n.map(r)).every(i) ? c && (0, z.jsx)(E.F, {
                            m: 2,
                            type: 'info',
                            children: s
                        }) : !!d && d(h ? t[0] : t, m));
                    }
                }));
            };
            H.defaultProps = {
                dataAccessor: function (e) {
                    return e;
                },
                errorCheck: function () {
                    return false;
                },
                isEmptyCheck: function (e) {
                    return !e || e instanceof Array && !e.length || 'object' === typeof e && !Object.keys(e).length;
                },
                emptyMessage: 'No data found',
                loadingIndicator: (0, z.jsx)(P.ZC, {
                    textAlign: 'center',
                    py: 6,
                    children: (0, z.jsx)(A.g, { size: '2x' })
                }),
                showState: true,
                pollingFrequency: 0,
                silentUpdate: false
            };
            var G = H, J = ['children'];
            function V(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? V(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : V(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var $ = function (e) {
                    var t = e.children, r = (0, v.Z)(e, J);
                    return (0, z.jsx)(G, X(X({
                        url: C.rb,
                        options: { credentials: 'include' }
                    }, r), {}, { children: t }));
                }, K = ['children'];
            function Q(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function ee(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Q(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var te = function (e) {
                    var t = e.children, r = (0, v.Z)(e, K);
                    return (0, z.jsx)(G, ee(ee({
                        url: C.qf,
                        options: { credentials: 'include' }
                    }, r), {}, { children: t }));
                }, re = (0, D.LM)(function (e) {
                    return {
                        borderWidth: 1,
                        borderColor: e.theme.colors.gray[6],
                        borderStyle: 'solid',
                        borderRadius: '5px'
                    };
                }, P.ZC), ne = re, oe = r(27812), ie = r(99603), se = r(59417), ae = r(39370);
            function ce(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ce(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var ue = (function () {
                    
                    return [
                        'MapProvider',
                        'MapWrapper',
                        'LinksLayer',
                        'BubbleLayer'
                    ].forEach(function (t) {
                        return e[t] = w()(function () {
                            return Promise.all([
                                r.e(634),
                                r.e(659),
                                r.e(833),
                                r.e(208)
                            ]).then(r.bind(r, 40272)).then(function (e) {
                                return e[t];
                            });
                        }, {
                            ssr: false,
                            loadableGenerated: {
                                webpack: function () {
                                    return [40272];
                                }
                            }
                        });
                    }), e;
                }()), de = ue.MapProvider, pe = ue.MapWrapper, fe = ue.LinksLayer, he = ue.BubbleLayer, me = w()(function () {
                    return Promise.all([
                        r.e(634),
                        r.e(833),
                        r.e(104)
                    ]).then(r.bind(r, 5104));
                }, {
                    ssr: false,
                    loadableGenerated: {
                        webpack: function () {
                            return [5104];
                        }
                    }
                }), ge = w()(function () {
                    return Promise.all([
                        r.e(634),
                        r.e(833),
                        r.e(123)
                    ]).then(r.bind(r, 26123));
                }, {
                    ssr: false,
                    loadableGenerated: {
                        webpack: function () {
                            return [26123];
                        }
                    }
                }), ye = function (e) {
                    var t = e.data;
                    return ''.concat(t.city, ', ').concat(t.cca2, ' (').concat(t.iata, ')');
                }, je = function (e) {
                    return e.data.name;
                }, be = function () {
                    return (0, z.jsx)(P.ZC, {
                        mt: '-23px',
                        color: 'red.4',
                        fontSize: 5,
                        children: (0, z.jsx)(ie.G, { icon: se.FGq })
                    });
                }, xe = {
                    client: ae.Rl.colors.red[4],
                    colo: ae.Rl.colors.cfOrange,
                    otherColo: ae.Rl.colors.cfOrange
                }, ve = n.memo(function (e) {
                    var t = e.height, r = e.colos, o = e.colo, i = e.city, s = e.country, a = e.latitude, c = e.longitude, l = (0, n.useMemo)(function () {
                            return o ? o.split('-')[0] : o;
                        }, [o]), u = r.find(function (e) {
                            return e.iata === l;
                        });
                    l && !u && console.warn('Unable to find client colo:', l);
                    var d = a && c && {
                            name: 'You ('.concat([
                                i,
                                s
                            ].filter(function (e) {
                                return e;
                            }).join(', '), ')'),
                            lat: +a,
                            lng: +c
                        }, p = !!a && !!c && !!u && [{
                                srcLat: +a,
                                srcLng: +c,
                                dstLat: u.lat,
                                dstLng: u.lon
                            }], f = (0, n.useMemo)(function () {
                            var e = {
                                lat: [],
                                lng: []
                            };
                            return a && e.lat.push(+a), c && e.lng.push(+c), u && e.lat.push(+u.lat) && e.lng.push(+u.lon), e;
                        }, [
                            a,
                            c,
                            u
                        ]), h = (0, n.useState)(true), m = h[0], g = h[1];
                    (0, n.useEffect)(function () {
                        return setTimeout(function () {
                            return g(false);
                        }, 1500);
                    }, []);
                    var y = (0, n.useMemo)(function () {
                        if (m) {
                            return {};
                        }
                        var e, t, r, n;
                        return {
                            fitBounds: f.lat.length && f.lng.length && (e = Math.min.apply(Math, (0, oe.Z)(f.lat)), t = Math.min.apply(Math, (0, oe.Z)(f.lng)), r = Math.max.apply(Math, (0, oe.Z)(f.lat)), n = Math.max.apply(Math, (0, oe.Z)(f.lng)), [
                                [
                                    t,
                                    e
                                ],
                                [
                                    n,
                                    r
                                ]
                            ]) || void 0,
                            fitBoundsOptions: {
                                maxZoom: 7.5,
                                padding: 50
                            }
                        };
                    }, [
                        m,
                        f
                    ]);
                    return (0, z.jsx)(de, {
                        accessToken: C.c3,
                        children: (0, z.jsxs)(pe, le(le({
                            height: t,
                            style: 'mapbox://styles/cloudflaremaps/cjrtpcmyt023q1fqjupfkwken'
                        }, y), {}, {
                            children: [
                                (0, z.jsx)(he, {
                                    data: r.filter(function (e) {
                                        return e !== u;
                                    }),
                                    latDimension: 'lat',
                                    lngDimension: 'lon',
                                    valueDimension: function () {
                                        return 1;
                                    },
                                    colorDimension: function () {
                                        return xe.otherColo;
                                    },
                                    maxRadius: 3.5,
                                    showLegend: false,
                                    TooltipContent: ye
                                }),
                                !!p && (0, z.jsx)(fe, {
                                    data: p,
                                    gradientColors: [
                                        xe.client,
                                        xe.colo
                                    ],
                                    widthDimension: 1.5,
                                    opacityDimension: 0.7
                                }),
                                !!u && (0, z.jsx)(me, {
                                    data: [u],
                                    latDimension: 'lat',
                                    lngDimension: 'lon',
                                    TooltipContent: ye
                                }),
                                !!d && (0, z.jsx)(ge, {
                                    data: [d],
                                    contentDimension: be,
                                    TooltipContent: je
                                })
                            ]
                        }))
                    });
                });
            ve.defaultProps = { height: 0 };
            var Oe = ve, we = r(89950), Pe = (0, D.LM)(function () {
                    return { fontWeight: 500 };
                }, 'span'), Ce = function (e) {
                    var t = e.colo, r = e.asn, n = e.asOrganization, o = e.clientIp;
                    return !(!o && !t) && (0, z.jsx)(P.ZC, {
                        mt: '12px',
                        fontSize: '13px',
                        children: [
                            o && {
                                icon: 'flowchart',
                                text: (0, z.jsxs)(z.Fragment, {
                                    children: [
                                        'Connected via ',
                                        (0, z.jsxs)(Pe, {
                                            children: [
                                                'IPv',
                                                o.includes(':') ? '6' : '4'
                                            ]
                                        })
                                    ]
                                })
                            },
                            t && {
                                icon: 'drive',
                                text: (0, z.jsxs)(z.Fragment, {
                                    children: [
                                        'Server location: ',
                                        (0, z.jsx)(Pe, { children: t.city || t.iata })
                                    ]
                                })
                            },
                            r && {
                                icon: 'network',
                                text: (0, z.jsxs)(z.Fragment, {
                                    children: [
                                        'Your network:',
                                        ' ',
                                        (0, z.jsxs)(Pe, {
                                            children: [
                                                n || '',
                                                !!r && (0, z.jsxs)('span', {
                                                    children: [
                                                        ' ',
                                                        '(',
                                                        (0, z.jsxs)('a', {
                                                            href: 'https://radar.cloudflare.com/quality/as'.concat(r),
                                                            target: '_blank',
                                                            rel: 'noreferrer',
                                                            children: [
                                                                'AS',
                                                                r
                                                            ]
                                                        }),
                                                        ')'
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            },
                            o && {
                                icon: 'internet-browser',
                                text: (0, z.jsxs)(z.Fragment, {
                                    children: [
                                        'Your IP address:',
                                        ' ',
                                        (0, z.jsx)(Pe, {
                                            children: (0, z.jsx)('a', {
                                                href: 'https://radar.cloudflare.com/ip/'.concat(o),
                                                target: '_blank',
                                                rel: 'noreferrer',
                                                children: o
                                            })
                                        })
                                    ]
                                })
                            }
                        ].filter(function (e) {
                            return e;
                        }).map(function (e, t) {
                            var r = e.icon, n = e.text;
                            return (0, z.jsxs)(P.ZC, {
                                display: 'flex',
                                alignItems: 'center',
                                mt: 2,
                                children: [
                                    (0, z.jsx)(we.J, {
                                        type: r,
                                        label: r,
                                        size: 16
                                    }),
                                    (0, z.jsx)(P.ZC, { mx: 1 }),
                                    (0, z.jsx)(P.ZC, { children: n })
                                ]
                            }, t);
                        })
                    });
                }, Se = [
                    'colos',
                    'colo'
                ];
            function Ze(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ze(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ze(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var Me = (0, D.LM)(function (e) {
                    var t, r = e.heights, n = void 0 === r ? [
                            void 0,
                            void 0,
                            void 0
                        ] : r;
                    return t = { height: n[0] }, (0, l.Z)(t, '@media (min-width: '.concat(C.MR, 'px) and (max-width: ').concat(C.q$, 'px)'), { height: n[1] }), (0, l.Z)(t, '@media (min-width: '.concat(C.q$, 'px)'), { height: n[2] }), t;
                }, P.ZC), De = n.memo(function (e) {
                    var t = e.colos, r = e.colo, n = (0, v.Z)(e, Se), o = r ? t.find(function (e) {
                            return e.iata === r;
                        }) || { iata: r } : void 0;
                    return (0, z.jsxs)(ne, {
                        p: 2,
                        children: [
                            (0, z.jsx)(Me, {
                                heights: [
                                    '220px',
                                    '320px',
                                    '360px'
                                ],
                                position: 'relative',
                                children: (0, z.jsx)(Oe, ke({}, ke({
                                    colos: t,
                                    colo: r
                                }, n)))
                            }),
                            (0, z.jsx)(Ce, ke(ke({}, n), {}, { colo: o }))
                        ]
                    });
                }), Te = n.memo(function (e) {
                    return (0, z.jsx)($, {
                        children: function (t) {
                            return (0, z.jsx)(te, {
                                children: function (r) {
                                    return (0, z.jsx)(De, ke({}, ke(ke({ colos: r }, t), e)));
                                }
                            });
                        }
                    });
                }), Le = r(16835), Ie = r(8935), Ee = [
                    'red.5',
                    'orange.6',
                    'gray.3',
                    'green.5',
                    'blue.4'
                ], Ae = 170 * Object.keys(Re).length, ze = function (e) {
                    var t = e.results, r = e.finished, o = (0, n.useMemo)(function () {
                            return r && t.getScores();
                        }, [
                            r,
                            t
                        ]);
                    return (0, z.jsx)(ne, {
                        p: 2,
                        children: r && o ? (0, z.jsx)(Ie.SizeMe, {
                            children: function (e) {
                                var t = e.size.width < Ae;
                                return (0, z.jsx)(P.ZC, {
                                    display: 'flex',
                                    flexDirection: t ? 'column' : 'row',
                                    children: Object.entries(o).map(function (e, r) {
                                        var n, o = (0, Le.Z)(e, 2), i = o[0], s = o[1], a = s.classificationIdx, c = s.classificationName;
                                        return (0, z.jsxs)(z.Fragment, {
                                            children: [
                                                !t && !!r && (0, z.jsx)(P.ZC, { children: '\u2022' }),
                                                (0, z.jsxs)(P.ZC, {
                                                    flex: 1,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: '7px',
                                                    mt: t && r > 0 ? '1px' : 0,
                                                    children: [
                                                        (0, z.jsxs)(P.ZC, {
                                                            flex: t ? 1 : void 0,
                                                            textAlign: 'right',
                                                            fontSize: 2,
                                                            children: [
                                                                Re[i],
                                                                ':'
                                                            ]
                                                        }),
                                                        (0, z.jsx)(P.ZC, {
                                                            flex: t ? 1 : void 0,
                                                            fontSize: 3,
                                                            color: Ee[a],
                                                            fontWeight: 'bold',
                                                            children: (n = c, n.toLowerCase().split(' ').map(function (e) {
                                                                return e.charAt(0).toUpperCase() + e.substring(1);
                                                            }).join(' '))
                                                        })
                                                    ]
                                                }, r)
                                            ]
                                        });
                                    })
                                });
                            }
                        }) : (0, z.jsx)(P.ZC, {
                            textAlign: 'center',
                            my: 2,
                            color: 'gray.6',
                            fontSize: 2,
                            children: 'waiting to finish measurements...'
                        })
                    });
                }, Ue = r(54546), We = r(72164), Fe = r(65027), qe = function (e) {
                    var t = e.height;
                    return (0, z.jsx)(P.ZC, {
                        width: '100%',
                        height: ''.concat(t, 'px'),
                        fontSize: 2,
                        color: 'gray.7',
                        backgroundColor: 'gray.9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        children: 'waiting for measurements...'
                    });
                }, _e = w()(function () {
                    return Promise.all([
                        r.e(960),
                        r.e(876),
                        r.e(660)
                    ]).then(r.bind(r, 58660));
                }, {
                    ssr: false,
                    loadableGenerated: {
                        webpack: function () {
                            return [58660];
                        }
                    }
                }), Be = function (e) {
                    var t = e.title, r = e.xAxisLabel, n = e.yAxisLabel, o = e.vals, i = e.rangeMax, s = e.color, a = 41 + (t ? 25 : 0) + (r ? 22 : 0), c = !(null !== o && void 0 !== o && o.length) || 0 === o.length;
                    return (0, z.jsx)(Ie.SizeMe, {
                        children: function (e) {
                            var l = e.size.width;
                            return (0, z.jsx)(P.ZC, {
                                width: '100%',
                                height: ''.concat(a, 'px'),
                                position: 'relative',
                                children: c ? (0, z.jsx)(qe, { height: a }) : (0, z.jsx)(P.ZC, {
                                    position: 'absolute',
                                    children: (0, z.jsx)(_e, {
                                        data: [{
                                                name: ''.concat(n, ' '),
                                                x: o.length > 0 ? o.filter(function (e) {
                                                    return e;
                                                }) : [null],
                                                type: 'box',
                                                boxmean: true,
                                                boxpoints: 'all',
                                                pointpos: -1.8,
                                                jitter: 0.3,
                                                line: { width: 1 },
                                                marker: {
                                                    size: 4,
                                                    color: s
                                                },
                                                hoverinfo: 'none'
                                            }],
                                        layout: {
                                            title: t,
                                            width: l,
                                            height: a,
                                            margin: {
                                                t: t ? 25 : 0,
                                                b: 14 + (r ? 22 : 0),
                                                l: 6 + (n ? 8.5 * n.length : 0),
                                                r: 12
                                            },
                                            yaxis: {},
                                            xaxis: Object.assign({
                                                title: r || void 0,
                                                zeroline: false,
                                                rangemode: 'tozero'
                                            }, i ? {
                                                range: [
                                                    0,
                                                    1.01 * i
                                                ]
                                            } : {}),
                                            paper_bgcolor: 'rgba(0,0,0,0)',
                                            plot_bgcolor: 'rgba(0,0,0,0)'
                                        },
                                        config: {
                                            displayModeBar: false,
                                            staticPlot: true
                                        }
                                    })
                                })
                            });
                        }
                    });
                };
            Be.defaultProps = { vals: [] };
            var Ne = Be, Ye = (0, D.LM)(function (e) {
                    var t = e.forceHoverOn;
                    return {
                        backgroundColor: void 0 !== t && t ? '#F7F7F8' : 'white',
                        transition: 'background-color 200ms',
                        ':hover': { backgroundColor: '#F7F7F8' }
                    };
                }, P.ZC), He = Ye, Ge = r(12346), Je = n.memo(function (e) {
                    var t = e.value, r = e.total;
                    return (0, z.jsx)(Ge.eu, {
                        width: '100%',
                        height: 2,
                        value: t,
                        total: r,
                        colorBreaks: [
                            {
                                color: ae.Rl.colors.gold[7],
                                threshold: 0
                            },
                            {
                                color: ae.Rl.colors.green[6],
                                threshold: r
                            }
                        ],
                        updateDuration: 100
                    });
                });
            Je.propTypes = {
                value: m().number,
                total: m().number
            };
            Je.defaultProps = {
                value: 0,
                total: 0
            };
            
            var Ve = Je;
            function Xe(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            var $e = w()(function () {
                    return r.e(907).then(r.bind(r, 47907)).then(function (e) {
                        return e.TableView;
                    });
                }, {
                    ssr: false,
                    loadableGenerated: {
                        webpack: function () {
                            return [47907];
                        }
                    }
                }), Ke = (0, D.LM)(function (e) {
                    var t = e.theme, r = e.isBold, n = void 0 !== r && r;
                    return {
                        fontSize: t.fontSizes[2],
                        fontWeight: n ? 500 : void 0
                    };
                }, 'span'), Qe = function (e) {
                    var t = e.timings, r = e.bytes, n = function (e) {
                            return ''.concat(Math.round(100 * e) / 100, ' ms');
                        }, o = t.map(function (e, t) {
                            return function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Xe(Object(r), true).forEach(function (t) {
                                        (0, l.Z)(e, t, r[t]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xe(Object(r)).forEach(function (t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                    });
                                }
                                return e;
                            }({ idx: '#'.concat(t + 1) }, e);
                        }), i = !r, s = {
                            idx: {
                                label: '',
                                cell: function (e) {
                                    return (0, z.jsx)(Ke, {
                                        isBold: e.isBold,
                                        children: e.idx
                                    });
                                },
                                align: 'center'
                            },
                            latency: {
                                label: 'Ping',
                                cell: function (e) {
                                    return (0, z.jsx)(Ke, {
                                        isBold: e.isBold,
                                        children: n(e.ping)
                                    });
                                },
                                align: 'right'
                            },
                            duration: {
                                label: 'Duration',
                                cell: function (e) {
                                    return (0, z.jsx)(Ke, {
                                        isBold: e.isBold,
                                        children: n(e.duration)
                                    });
                                },
                                align: 'right'
                            },
                            speed: {
                                label: 'Speed',
                                cell: function (e) {
                                    return (0, z.jsx)(Ke, {
                                        isBold: e.isBold,
                                        children: (t = e.bps, t ? ''.concat((0, Ue.ao)(t, ' ', 2), 'bps') : '-')
                                    });
                                    var t;
                                },
                                align: 'right'
                            }
                        }, a = [
                            s.idx,
                            i ? s.latency : s.duration
                        ].concat((0, oe.Z)(i ? [] : [s.speed]));
                    return (0, z.jsx)($e, {
                        rowHover: true,
                        bordered: true,
                        fixedLayout: false,
                        rows: o,
                        columns: a
                    });
                }, et = function (e) {
                    var t = e.isLatency, r = e.vals, n = t ? r.map(function (e) {
                            return e / 1000;
                        }) : r, o = t ? 's' : 'bps';
                    return (0, z.jsxs)(z.Fragment, {
                        children: [
                            (0, z.jsx)(P.ZC, { children: S.RI }),
                            (0, z.jsx)(P.Ul, {
                                children: [
                                    [
                                        'Min',
                                        Math.min.apply(Math, (0, oe.Z)(n))
                                    ],
                                    [
                                        'Max',
                                        Math.max.apply(Math, (0, oe.Z)(n))
                                    ],
                                    [
                                        'Average',
                                        (0, Ue.Kt)(n)
                                    ],
                                    [
                                        'Median',
                                        (0, Ue.Pe)(n, 0.5)
                                    ],
                                    [
                                        '25th percentile',
                                        (0, Ue.Pe)(n, 0.25)
                                    ],
                                    [
                                        '75th percentile',
                                        (0, Ue.Pe)(n, 0.75)
                                    ]
                                ].map(function (e) {
                                    var t = (0, Le.Z)(e, 2), r = t[0], n = t[1];
                                    return (0, z.jsxs)(P.Li, {
                                        children: [
                                            r,
                                            ':',
                                            ' ',
                                            (0, z.jsxs)('b', {
                                                children: [
                                                    (0, Ue.ao)(n, ' '),
                                                    o
                                                ]
                                            })
                                        ]
                                    }, r);
                                })
                            })
                        ]
                    });
                }, tt = n.memo(function (e) {
                    var t = e.isOpen, r = e.isLatency, n = e.isUpload, o = e.loaded, i = e.bytes, s = e.vals, a = e.maxVal, c = e.numMeasurements;
                    return (0, z.jsx)(Fe.Z, {
                        disable: !(null !== s && void 0 !== s && s.length),
                        content: (0, z.jsx)(et, {
                            isLatency: r,
                            vals: s
                        }),
                        children: (0, z.jsxs)(P.ZC, {
                            width: '100%',
                            children: [
                                (0, z.jsxs)(P.ZC, {
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    children: [
                                        (0, z.jsxs)(P.ZC, {
                                            fontSize: 3,
                                            fontWeight: 500,
                                            children: [
                                                (0, z.jsx)(P.Dr, { children: r ? o ? 'Latency during '.concat(o, 'load') : 'Unloaded latency' : ''.concat((0, Ue.ao)(i), 'B ').concat(n ? 'upload' : 'download', ' test') }),
                                                ' ',
                                                (0, z.jsxs)(P.Dr, {
                                                    fontSize: '80%',
                                                    fontWeight: 500,
                                                    children: [
                                                        '(',
                                                        s.length,
                                                        c ? '/'.concat(c) : '',
                                                        ')'
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, z.jsx)(We.OE, {
                                            isActive: t,
                                            color: 'gray.4',
                                            size: '14px',
                                            startAngle: 90,
                                            endAngle: -90
                                        })
                                    ]
                                }),
                                (0, z.jsx)(P.ZC, { my: '12px' }),
                                (0, z.jsx)(Ne, {
                                    vals: s.filter(function (e) {
                                        return void 0 !== e;
                                    }),
                                    rangeMax: a,
                                    yAxisLabel: r ? 'ms' : 'bps',
                                    color: C.DM[r ? o ? ''.concat(o, 'load') : 'latency' : n ? 'upload' : 'download']
                                }),
                                (0, z.jsx)(P.ZC, { my: '6px' }),
                                (0, z.jsx)(Ve, {
                                    total: c,
                                    value: s.length
                                })
                            ]
                        })
                    });
                }, (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = function (e) {
                            return e;
                        };
                    return function (r, n) {
                        var o = new Set([].concat((0, oe.Z)(Object.keys(r)), (0, oe.Z)(Object.keys(n))));
                        return (0, oe.Z)(o).every(function (o) {
                            var i = e[o] || t;
                            return i(r[o]) === i(n[o]);
                        });
                    };
                }({ vals: Ue.Sm })));
            tt.propTypes = {
                isOpen: m().bool.isRequired,
                isLatency: m().bool.isRequired,
                isUpload: m().bool.isRequired,
                loaded: m().oneOf([
                    false,
                    'down',
                    'up'
                ]),
                bytes: m().number,
                vals: m().arrayOf(m().number).isRequired,
                maxVal: m().number.isRequired,
                numMeasurements: m().number
            };
            var rt = n.memo(function (e) {
                    var t, r = e.timings, o = e.isUpload, i = e.isLatency, s = (0, n.useState)(), a = s[0], c = s[1], l = i ? function (e) {
                            return e.ping;
                        } : function (e) {
                            return e.bps;
                        }, u = (t = []).concat.apply(t, (0, oe.Z)(r.map(function (e) {
                            return e.timings.map(l);
                        }))), d = Math.max.apply(Math, [0].concat((0, oe.Z)(u.map(function (e) {
                            return e || 0;
                        }))));
                    return (0, z.jsx)(z.Fragment, {
                        children: 0 === r.length ? (0, z.jsx)(ne, {
                            mb: 2,
                            p: 2,
                            children: (0, z.jsx)(qe, { height: 50 })
                        }) : r.map(function (e) {
                            var t = e.loaded, r = e.bytes, n = e.timings, s = e.numMeasurements, u = i ? t : r, p = a === u;
                            return (0, z.jsxs)(ne, {
                                mb: 2,
                                boxShadow: p ? '0 0 5px 5px rgba(0,0,0,0.12)' : 'initial',
                                transition: 'box-shadow 300ms',
                                children: [
                                    (0, z.jsx)(He, {
                                        forceHoverOn: p,
                                        borderRadius: p ? '5px 5px 0 0' : '5px',
                                        px: 3,
                                        py: 2,
                                        cursor: 'pointer',
                                        onClick: function () {
                                            return c(p ? void 0 : u);
                                        },
                                        children: (0, z.jsx)(tt, {
                                            isOpen: p,
                                            isLatency: i,
                                            isUpload: o,
                                            bytes: r,
                                            loaded: t,
                                            vals: n.map(l),
                                            maxVal: d,
                                            numMeasurements: s
                                        })
                                    }),
                                    p && (0, z.jsx)(P.ZC, {
                                        p: 3,
                                        children: n.length ? (0, z.jsx)(Qe, {
                                            timings: n,
                                            bytes: r,
                                            isUpload: o
                                        }) : (0, z.jsx)(P.ZC, {
                                            textAlign: 'center',
                                            children: (0, z.jsx)(A.g, { size: '1.5x' })
                                        })
                                    })
                                ]
                            }, u);
                        })
                    });
                }), nt = function (e) {
                    return {
                        Received: ae.Rl.colors.green[5],
                        Lost: ae.Rl.colors.red[5],
                        Sending: ae.Rl.colors.gray[6]
                    }[e];
                }, ot = function (e, t) {
                    var r = [
                        'Received',
                        'Lost',
                        'Sending'
                    ];
                    return r.indexOf(e) - r.indexOf(t);
                }, it = function (e) {
                    return ''.concat((0, Ue.ao)(e), ' packets');
                }, st = n.memo(function (e) {
                    var t = e.totalMessages, r = e.numMessagesSent, o = e.lostMessages, i = (0, n.useMemo)(function () {
                            return [
                                {
                                    name: 'Sending',
                                    val: t - r
                                },
                                {
                                    name: 'Lost',
                                    val: o.length
                                },
                                {
                                    name: 'Received',
                                    val: r - o.length
                                }
                            ];
                        }, [
                            t,
                            r,
                            o.length
                        ]);
                    return t ? (0, z.jsx)(Ie.SizeMe, {
                        children: function (e) {
                            var t = e.size.width;
                            return (0, z.jsx)(P.ZC, {
                                width: '100%',
                                height: ''.concat(40, 'px'),
                                position: 'relative',
                                children: (0, z.jsx)(P.ZC, {
                                    position: 'absolute',
                                    children: (0, z.jsx)(Ge.xN, {
                                        width: t,
                                        height: 40,
                                        data: i,
                                        categoryDimension: 'name',
                                        valueDimension: 'val',
                                        categoriesComparator: ot,
                                        categoryColor: nt,
                                        valueFormatter: it
                                    })
                                })
                            });
                        }
                    }) : (0, z.jsx)(qe, { height: 40 });
                });
            st.defaultProps = {
                totalMessages: 0,
                numMessagesSent: 0,
                lostMessages: []
            };
            var at = st, ct = function (e) {
                    var t = e.error;
                    return (0, z.jsxs)(E.F, {
                        type: 'error',
                        display: 'flex',
                        mb: 0,
                        children: [
                            (0, z.jsx)(we.J, {
                                type: 'exclamation-sign',
                                mt: '1px',
                                mr: 2
                            }),
                            (0, z.jsxs)(P.ZC, {
                                fontSize: 2,
                                children: [
                                    'Unable to perform measurement: ',
                                    t
                                ]
                            })
                        ]
                    });
                }, lt = n.memo(function (e) {
                    var t = e.totalMessages, r = e.numMessagesSent, o = e.packetLoss, i = e.lostMessages, s = e.error, a = (0, n.useState)(false), c = a[0], l = a[1];
                    return (0, z.jsxs)(ne, {
                        boxShadow: c ? '0 0 5px 5px rgba(0,0,0,0.12)' : 'initial',
                        transition: 'box-shadow 300ms',
                        children: [
                            (0, z.jsx)(He, {
                                forceHoverOn: c,
                                borderRadius: c ? '5px 5px 0 0' : '5px',
                                px: 3,
                                py: 2,
                                cursor: 'pointer',
                                onClick: t ? function () {
                                    return l(function (e) {
                                        return !e;
                                    });
                                } : void 0,
                                children: (0, z.jsxs)(P.ZC, {
                                    width: '100%',
                                    children: [
                                        (0, z.jsxs)(P.ZC, {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            children: [
                                                (0, z.jsxs)(P.ZC, {
                                                    fontSize: 3,
                                                    fontWeight: 500,
                                                    children: [
                                                        (0, z.jsx)(P.Dr, { children: 'Packet Loss Test' }),
                                                        ' ',
                                                        !!t && (0, z.jsxs)(P.Dr, {
                                                            fontSize: '80%',
                                                            fontWeight: 500,
                                                            children: [
                                                                '(',
                                                                r,
                                                                '/',
                                                                t,
                                                                ')'
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                !!t && (0, z.jsx)(We.OE, {
                                                    isActive: c,
                                                    color: 'gray.4',
                                                    size: '14px',
                                                    startAngle: 90,
                                                    endAngle: -90
                                                })
                                            ]
                                        }),
                                        (0, z.jsx)(P.ZC, { my: '12px' }),
                                        s ? (0, z.jsx)(ct, { error: s }) : (0, z.jsx)(at, {
                                            totalMessages: t,
                                            numMessagesSent: r,
                                            lostMessages: i,
                                            packetLoss: o
                                        }),
                                        (0, z.jsx)(Ve, {
                                            total: t || 1,
                                            value: r || 0
                                        })
                                    ]
                                })
                            }),
                            c && !!t && (0, z.jsxs)(P.ZC, {
                                p: 3,
                                fontSize: 2,
                                children: [
                                    (0, z.jsxs)(P.ZC, {
                                        children: [
                                            (0, z.jsx)(P.Dr, {
                                                fontWeight: 'bold',
                                                children: 'Packet Loss:'
                                            }),
                                            ' ',
                                            (0, z.jsx)('i', { children: (0, Ue.Ov)(100 * o, 2) })
                                        ]
                                    }),
                                    !!i.length && (0, z.jsxs)(P.ZC, {
                                        mt: 2,
                                        children: [
                                            (0, z.jsx)(P.Dr, {
                                                fontWeight: 'bold',
                                                children: 'Missing Messages:'
                                            }),
                                            ' ',
                                            (0, z.jsx)(P.Dr, {
                                                fontSize: '0.7em',
                                                children: i.join(', ')
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    });
                });
            lt.defaultProps = {
                totalMessages: 0,
                lostMessages: []
            };
            var ut = lt;
            function dt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function pt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? dt(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dt(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var ft = n.memo(function (e) {
                    var t = e.type, r = e.results;
                    if ('packetLoss' === t) {
                        return (0, z.jsx)(ut, pt({}, r.getPacketLossDetails()));
                    }
                    var o = 'latency' === t ? [
                            {
                                loaded: false,
                                numMeasurements: r.raw.latency.results.numMeasurements,
                                timings: r.getUnloadedLatencyPoints()
                            },
                            {
                                loaded: 'down',
                                timings: r.getDownLoadedLatencyPoints()
                            },
                            {
                                loaded: 'up',
                                timings: r.getUpLoadedLatencyPoints()
                            }
                        ] : Object.entries(r.raw[t].results).map(function (e) {
                            var t = (0, Le.Z)(e, 2);
                            return pt({ bytes: +t[0] }, t[1]);
                        }), i = (0, n.useMemo)(function () {
                            return 'latency' === t ? o.map(function (e) {
                                return pt(pt({}, e), {}, {
                                    timings: e.timings.map(function (e) {
                                        return { ping: e };
                                    })
                                });
                            }) : o;
                        }, [
                            t,
                            (0, Ue.Sm)(o.map(function (e) {
                                return e.numMeasurements ? e.timings.length : (0, Ue.Sm)(e.timings);
                            }))
                        ]);
                    return (0, z.jsx)(rt, {
                        timings: i,
                        isLatency: 'latency' === t,
                        isUpload: 'upload' === t
                    });
                }), ht = ft, mt = [
                    'areaId',
                    'alignSelf'
                ];
            function gt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function yt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? gt(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gt(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var jt = w()(function () {
                    return Promise.all([
                        r.e(876),
                        r.e(457),
                        r.e(847),
                        r.e(363)
                    ]).then(r.bind(r, 74363));
                }, {
                    ssr: false,
                    loadableGenerated: {
                        webpack: function () {
                            return [74363];
                        }
                    }
                }), bt = function (e) {
                    var t = e.title, r = e.info, n = e.moreUrl, o = e.children;
                    return (0, z.jsxs)(z.Fragment, {
                        children: [
                            !!t && (0, z.jsxs)(P.ZC, {
                                display: 'flex',
                                alignItems: 'center',
                                mb: 3,
                                children: [
                                    (0, z.jsx)(P.ZC, {
                                        fontSize: '19px',
                                        fontWeight: 600,
                                        children: t
                                    }),
                                    !!r && (0, z.jsx)(k.Z, {
                                        iconColor: 'gray.3',
                                        content: r
                                    }),
                                    !!n && (0, z.jsx)(P.A, {
                                        href: n,
                                        target: '_blank',
                                        rel: 'noreferrer',
                                        fontSize: '13px',
                                        ml: 2,
                                        children: 'Learn more'
                                    })
                                ]
                            }),
                            (0, z.jsx)(P.ZC, {
                                flex: '1',
                                children: o || false
                            })
                        ]
                    });
                }, xt = function (e) {
                    var t = e.areaId, r = e.alignSelf, n = (0, v.Z)(e, mt);
                    return (0, z.jsx)(Z.r, {
                        areaId: t,
                        alignSelf: r,
                        children: (0, z.jsx)(bt, yt({}, n))
                    });
                }, vt = n.memo(function (e) {
                    var t = e.latestMsmTs, r = e.results, o = e.running, i = e.finished, s = e.pause, a = e.play, c = e.restart, u = r.raw.hasOwnProperty('latency'), d = r.raw.hasOwnProperty('download'), p = r.raw.hasOwnProperty('upload'), f = r.raw.hasOwnProperty('packetLoss'), h = (0, n.useMemo)(function () {
                            var e;
                            return e = {
                                0: [
                                    ['overview'],
                                    ['overviewSeparator'],
                                    ['scores'],
                                    ['separator2'],
                                    ['map'],
                                    u && ['latency'],
                                    f && ['packetLoss'],
                                    d && ['download'],
                                    p && ['upload']
                                ].filter(function (e) {
                                    return e;
                                })
                            }, (0, l.Z)(e, C.MR, [
                                [
                                    'overview',
                                    'overview'
                                ],
                                [
                                    'overviewSeparator',
                                    'overviewSeparator'
                                ],
                                [
                                    'scores',
                                    'scores'
                                ],
                                [
                                    'separator2',
                                    'separator2'
                                ],
                                [
                                    'map',
                                    'latency'
                                ],
                                f && [
                                    'map',
                                    'packetLoss'
                                ],
                                (d || p) && [
                                    'download',
                                    'upload'
                                ]
                            ].filter(function (e) {
                                return e;
                            })), (0, l.Z)(e, C.q$, [
                                [
                                    'overview',
                                    'overview',
                                    'map'
                                ],
                                [
                                    'separator2',
                                    'separator2',
                                    'map'
                                ],
                                [
                                    'scores',
                                    'scores',
                                    'map'
                                ],
                                [
                                    'overviewSeparator',
                                    'overviewSeparator',
                                    'overviewSeparator'
                                ],
                                (d || p || u) && [
                                    'download',
                                    'upload',
                                    'latency'
                                ],
                                f ? [
                                    'download',
                                    'upload',
                                    'packetLoss'
                                ] : void 0
                            ].filter(function (e) {
                                return e;
                            })), e;
                        }, [
                            u,
                            d,
                            p,
                            f
                        ]);
                    return (0, z.jsxs)(z.Fragment, {
                        children: [
                            (0, z.jsxs)(Z.T, {
                                areasPerSize: h,
                                gapX: '20px',
                                gapY: '24px',
                                children: [
                                    (0, z.jsx)(xt, {
                                        areaId: 'overview',
                                        title: 'Your Internet Speed',
                                        children: (0, z.jsx)(jt, {
                                            latestMsmTs: t,
                                            results: r,
                                            running: o,
                                            finished: i,
                                            pause: s,
                                            play: a,
                                            restart: c
                                        })
                                    }),
                                    (0, z.jsx)(Z.r, {
                                        areaId: 'overviewSeparator',
                                        children: (0, z.jsx)(M.Z, {})
                                    }),
                                    (0, z.jsx)(Z.r, {
                                        areaId: 'separator2',
                                        children: (0, z.jsx)(M.Z, {})
                                    }),
                                    (0, z.jsx)(xt, {
                                        areaId: 'scores',
                                        title: 'Network Quality Score',
                                        info: S.YP,
                                        moreUrl: 'https://developers.cloudflare.com/fundamentals/speed/aim/',
                                        children: (0, z.jsx)(ze, {
                                            results: r,
                                            finished: i
                                        })
                                    }),
                                    (0, z.jsx)(xt, {
                                        areaId: 'map',
                                        title: 'Server Location',
                                        info: S.gp,
                                        children: (0, z.jsx)(Te, {})
                                    }),
                                    !!u && (0, z.jsx)(xt, {
                                        areaId: 'latency',
                                        title: 'Latency Measurements',
                                        info: S.MC,
                                        children: (0, z.jsx)(ht, {
                                            type: 'latency',
                                            results: r,
                                            latestMsmTs: t
                                        })
                                    }),
                                    !!f && (0, z.jsx)(xt, {
                                        areaId: 'packetLoss',
                                        title: 'Packet Loss Measurements',
                                        info: S.Kp,
                                        children: (0, z.jsx)(ht, {
                                            type: 'packetLoss',
                                            results: r,
                                            latestMsmTs: t
                                        })
                                    }),
                                    !!d && (0, z.jsx)(xt, {
                                        areaId: 'download',
                                        title: 'Download Measurements',
                                        info: S.xB,
                                        children: (0, z.jsx)(ht, {
                                            type: 'download',
                                            results: r,
                                            latestMsmTs: t
                                        })
                                    }),
                                    !!p && (0, z.jsx)(xt, {
                                        areaId: 'upload',
                                        title: 'Upload Measurements',
                                        info: S.mT,
                                        children: (0, z.jsx)(ht, {
                                            type: 'upload',
                                            results: r,
                                            latestMsmTs: t
                                        })
                                    })
                                ]
                            }),
                            (0, z.jsx)(P.ZC, { my: 3 })
                        ]
                    });
                }), Ot = function (e) {
                    var t = e.running, r = e.onRunningChange, o = (0, n.useState)(false), i = o[0], s = o[1], a = (0, n.useState)(), c = a[0], l = a[1], u = (0, n.useMemo)(function () {
                            var e = new x.Z(C.gW);
                            return e.onResultsChange = function () {
                                return l(+new Date());
                            }, e.onFinish = function () {
                                return s(true);
                            }, e;
                        }, []);
                    (0, n.useEffect)(function () {
                        u.onRunningChange = function (e) {
                            e && s(false);
                            r(e);
                            
                        };
                    }, [
                        u,
                        r
                    ]);
                    (0, n.useEffect)(function () {
                        t ? u.play() : u.pause();
                    }, [
                        u,
                        t
                    ]);
                    
                    var d = (0, n.useCallback)(function () {
                            return u.pause();
                        }, [u]), p = (0, n.useCallback)(function () {
                            return u.play();
                        }, [u]), f = (0, n.useCallback)(function () {
                            return u.restart();
                        }, [u]);
                    return (0, z.jsx)(vt, {
                        results: u.results,
                        latestMsmTs: c,
                        running: t,
                        finished: i,
                        pause: d,
                        play: p,
                        restart: f
                    });
                }, wt = ['children'], Pt = function (e) {
                    var t = e.children, r = (0, v.Z)(e, wt);
                    return (0, z.jsx)(G, {
                        url: C.rb,
                        options: { credentials: 'include' },
                        children: function (e) {
                            return e.hostname.startsWith('h3.') && 'HTTP/3' !== e.httpProtocol ? (0, z.jsxs)(E.F, {
                                type: 'error',
                                display: 'flex',
                                children: [
                                    (0, z.jsx)(we.J, {
                                        type: 'exclamation-sign',
                                        mt: '1px',
                                        mr: 2
                                    }),
                                    (0, z.jsxs)(P.ZC, {
                                        children: [
                                            'Unable to perform speed measurements: ',
                                            (0, z.jsx)('b', { children: 'HTTP/3' }),
                                            ' is not enabled in browser.'
                                        ]
                                    })
                                ]
                            }) : t(r);
                        }
                    });
                }, Ct = (0, D.LM)(function () {
                    return {
                        color: 'black',
                        fontSize: '15px',
                        fontWeight: '500',
                        textDecoration: 'none',
                        '&:hover': { textDecoration: 'underline' }
                    };
                }, P.A), St = function () {
                    return (0, z.jsx)(z.Fragment, {
                        children: (0, z.jsx)(Ct, {
                            href: '/about/',
                            children: 'About'
                        })
                    });
                }, Zt = r(48444), kt = r(22485), Mt = [
                    'children',
                    'isActive'
                ];
            function Dt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    }));
                    r.push.apply(r, n);
                    
                }
                return r;
            }
            function Tt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Dt(Object(r), true).forEach(function (t) {
                        (0, l.Z)(e, t, r[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dt(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
                }
                return e;
            }
            var Lt = function (e) {
                    var t = e.children, r = e.isActive, n = (0, v.Z)(e, Mt);
                    return (0, z.jsxs)(P.A, Tt(Tt({}, n), {}, {
                        cursor: 'pointer',
                        children: [
                            (0, z.jsx)(P.Dr, {
                                fontWeight: 'bold',
                                children: t
                            }),
                            '\u202F',
                            (0, z.jsx)(We.OE, {
                                isActive: r,
                                color: 'inherit',
                                size: '16px'
                            })
                        ]
                    }));
                }, It = function (e) {
                    var t = e.onAgree, r = (0, n.useState)(false), o = r[0], i = r[1];
                    return (0, n.useEffect)(function () {
                        var e = document.body.style.overflowY;
                        return document.body.style.overflowY = 'hidden', function () {
                            document.body.style.overflowY = e;
                        };
                    }), (0, z.jsx)(z.Fragment, {
                        children: (0, z.jsxs)(P.ZC, {
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            zIndex: 11,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            flexDirection: 'column',
                            padding: '1em',
                            backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.7)',
                            children: [
                                (0, z.jsx)(P.ZC, {
                                    flexShrink: 1,
                                    height: '10%',
                                    minHeight: 0,
                                    maxHeight: '10%'
                                }),
                                (0, z.jsxs)(P.ZC, {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: '#fff',
                                    borderRadius: '5px',
                                    lineHeight: 1.5,
                                    padding: '1em',
                                    maxWidth: '45em',
                                    maxHeight: '100%',
                                    overflowY: 'auto',
                                    children: [
                                        (0, z.jsxs)(P.ZC, {
                                            flexShrink: '1',
                                            overflowY: 'auto',
                                            children: [
                                                (0, z.jsxs)(P.P, {
                                                    mt: 0,
                                                    mb: 1,
                                                    children: [
                                                        'When you run Speed Test, your IP address will be shared with Cloudflare and processed in accordance with our',
                                                        ' ',
                                                        (0, z.jsx)('a', {
                                                            href: 'https://www.cloudflare.com/privacypolicy/',
                                                            children: 'privacy policy'
                                                        }),
                                                        '. \xA0',
                                                        (0, z.jsx)('br', {}),
                                                        (0, z.jsx)(Lt, {
                                                            isActive: o,
                                                            onClick: function () {
                                                                return i(function (e) {
                                                                    return !e;
                                                                });
                                                            },
                                                            children: 'Learn More'
                                                        })
                                                    ]
                                                }),
                                                (0, z.jsxs)(P.ZC, {
                                                    color: 'gray.4',
                                                    borderLeftColor: 'gray.4',
                                                    borderLeft: '4px solid',
                                                    pl: 2,
                                                    display: o ? '' : 'none',
                                                    children: [
                                                        (0, z.jsx)(P.P, {
                                                            mt: 0,
                                                            children: 'When you use Speed Test, Cloudflare receives the IP address you use to connect to Cloudflare\u2019s Speed Test service. Cloudflare uses your IP address to estimate your geolocation (at the country and city levels) and to identify the Autonomous System Number (ASN) associated with your IP address.'
                                                        }),
                                                        (0, z.jsx)('p', { children: 'Cloudflare shares anonymized measurement information (e.g., the estimated geolocation, ASN associated with your Speed Test, etc.) with our measurement partners as part of Cloudflare\u2019s contribution to a shared Internet performance database. We do not share your IP address with our measurement partners.' }),
                                                        (0, z.jsx)('p', { children: 'As a part of this Speed Test, Cloudflare receives the following information:' }),
                                                        (0, z.jsxs)('ul', {
                                                            children: [
                                                                (0, z.jsx)('li', { children: 'Your IP address;' }),
                                                                (0, z.jsx)('li', { children: 'An estimate of your location (Country, City);' }),
                                                                (0, z.jsx)('li', { children: 'The Autonomous System Number of your ISP (ASN).' })
                                                            ]
                                                        }),
                                                        (0, z.jsx)('p', { children: 'Cloudflare truncates your IP address that it receives as part of your use of the Speed Test to /24 and /48 for IPv4 and IPv6 addresses, respectively.' })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, z.jsxs)(P.ZC, {
                                            mt: '1em',
                                            flexShrink: '0',
                                            children: [
                                                (0, z.jsxs)(kt.zx, {
                                                    fontSize: 4,
                                                    px: 24,
                                                    py: 8,
                                                    inverted: false,
                                                    type: 'primary',
                                                    onClick: function () {
                                                        return null === t || void 0 === t ? void 0 : t();
                                                    },
                                                    children: [
                                                        (0, z.jsx)(we.J, {
                                                            size: 16,
                                                            type: 'caret-right',
                                                            ariaLabel: 'start',
                                                            mr: 2,
                                                            ml: -4
                                                        }),
                                                        'Start'
                                                    ]
                                                }),
                                                (0, z.jsx)(P.ZC, {
                                                    mt: 2,
                                                    color: 'gray.4',
                                                    fontSize: 2,
                                                    fontWeight: 'bold',
                                                    children: 'Note: A speed test can consume up to 200MB of data.'
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    });
                }, Rt = function () {
                    var e = (0, n.useState)(function () {
                            return null !== localStorage.getItem(C.bh);
                        }), t = e[0], r = e[1], o = (0, n.useState)(t), i = o[0], s = o[1];
                    return (0, z.jsxs)(b.Z, {
                        title: 'Speed Test',
                        running: i,
                        headerContent: (0, z.jsx)(St, {}),
                        maxWidth: C.JN,
                        fullWidthBreakpoint: C.q$,
                        children: [
                            !t && (0, z.jsx)(It, {
                                onAgree: function () {
                                    localStorage.setItem(C.bh, '');
                                    r(true);
                                    s(true);
                                    
                                }
                            }),
                            (0, z.jsx)(Pt, {
                                children: function () {
                                    return (0, z.jsx)(Ot, {
                                        running: i,
                                        onRunningChange: s
                                    });
                                }
                            }),
                            (0, z.jsx)(Zt.Z, {})
                        ]
                    });
                }, Et = function () {
                    return (0, n.useEffect)(function () {
                    }, []), (0, z.jsxs)(z.Fragment, {
                        children: [
                            (0, z.jsx)(i(), { children: (0, z.jsx)('title', { children: 'Internet Speed Test - Measure Network Performance | Cloudflare' }) }),
                            (0, z.jsx)(s.V9, {
                                children: (0, z.jsx)(j, {
                                    children: (0, z.jsx)(a.zt, {
                                        store: f,
                                        children: (0, z.jsx)(Rt, {})
                                    })
                                })
                            })
                        ]
                    });
                };
        },
        68516: function (e, t, r) {
            'use strict';
            r.d(t, {
                GG: function () {
                    return 'Packet loss indicates the presence of packets that are lost in the communication with the testing network. A high packet loss rate can cause jitter to rise and disrupt real-time sensitive applications like streaming and gaming. It\'s calculated as the percentage of UDP packets that are not received after being relayed through a WebRTC TURN server.';
                },
                Kp: function () {
                    return 'Each measurement represents a UDP packet that was sent to the TURN server for relaying. The WebRTC packet receiver is also configured in this application, thus every packet that is not received contributes to the packet loss rate. After sending all the test packets, there is a short time window to wait for the reception of all the packets still in transit.';
                },
                MC: function () {
                    return 'Each measurement represents the amount of time an HTTP request took to reach the server. It\u2019s calculated by determining the time to first byte and subtracting the amount of processing time the server took to handle the request.';
                },
                RI: function () {
                    return 'The thick bar covers all measurements that fall within the 25th to 75th percentile. The solid line marks the median score whilst the dotted line represents average.';
                },
                RL: function () {
                    return 'Although median RTT is important, it only paints half the picture. RTT can go up and down from time to time, which is noticeable in applications like video chat, gaming, or streaming. Jitter gives you insight into how much variation we see in the RTT measurements. It\'s calculated as the average distance between consecutive RTT measurements. Lower jitter is better.';
                },
                Uo: function () {
                    return 'Round trip time latency (or RTT) is the time it takes for a packet to be sent from your computer to Cloudflare\'s network and back. It is especially important for applications such as gaming and video chat, where you want to be as up to date as possible. The number reported represents the median of all RTT measurements. Lower RTT is better.';
                },
                VG: function () {
                    return 'Download determines how fast your network connection can get data from the test network. This is important when downloading large files such as updates for applications or streaming video services. Download speed is tested by downloading files of various sizes. The number reported represents the 90th percentile of all download measurements and not the absolute maximum. Scroll down to view details.';
                },
                YP: function () {
                    return 'Aggregated Internet Measurement (AIM) helps you understand your Internet quality to identify scenarios that your Internet connection is good or bad for. Typically, an Internet speed test provides you with upload and download speeds, which may not always provide a holistic view of your Internet quality.';
                },
                gp: function () {
                    return 'Shows the data center that\u2019s currently being used to test your network connection. Data center locations are tracked as airport codes and may not be 100% accurate.';
                },
                mT: function () {
                    return 'Each measurement represents the actual time it took to upload the file. To do this, we start measuring from the moment we start uploading the file till we receive the first byte of the acknowledgement.';
                },
                uR: function () {
                    return 'Upload determines how fast your network connection can transfer data to the test network. This is especially important for applications such as FTP or if you are the source for a live video stream. Upload speed is tested by uploading files of various sizes. The number reported represents the 90th percentile of all upload measurements and not the absolute maximum. Scroll down to view details.';
                },
                xB: function () {
                    return 'Each measurement represents the actual time it took to transfer the file. To do this, we start measuring from the moment we start receiving the actual first byte of data. This omits the time required to actually perform and process the actual HTTP request.';
                }
            });
            
        },
        75557: function (e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/',
                function () {
                    return r(48175);
                }
            ]);
        },
        7251: function () {
        },
        24654: function () {
        }
    },
    function (e) {
        e.O(0, [
            774,
            976,
            885,
            420,
            320,
            339,
            888,
            179
        ], function () {
            return t = 75557, e(e.s = t);
            var t;
        });
        var t = e.O();
        _N_E = t;
    }
]);