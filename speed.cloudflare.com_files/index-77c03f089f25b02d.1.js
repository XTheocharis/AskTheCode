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