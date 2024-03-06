0) + y;
                        v[s] = {
                            data: i[s],
                            index: l,
                            value: f,
                            startAngle: m,
                            endAngle: u,
                            padAngle: g
                        };
                        
                    }
                    return v;
                }
                return i.value = function (e) {
                    return arguments.length ? (t = 'function' === typeof e ? e : Ct(+e), i) : t;
                }, i.sortValues = function (t) {
                    return arguments.length ? (e = t, n = null, i) : e;
                }, i.sort = function (t) {
                    return arguments.length ? (n = t, e = null, i) : n;
                }, i.startAngle = function (t) {
                    return arguments.length ? (r = 'function' === typeof t ? t : Ct(+t), i) : r;
                }, i.endAngle = function (t) {
                    return arguments.length ? (a = 'function' === typeof t ? t : Ct(+t), i) : a;
                }, i.padAngle = function (t) {
                    return arguments.length ? (o = 'function' === typeof t ? t : Ct(+t), i) : o;
                }, i;
            }
            var oe = n(83852), ie = n(39370), le = n(93016);
            'undefined' !== typeof window && /Mac/.test(navigator.platform);
            var se = n(8935), ce = n(54612), ue = [
                    'width',
                    'autoSize'
                ];
            function fe() {
                return fe = Object.assign ? Object.assign.bind() : function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                }, fe.apply(this, arguments);
            }
            function pe(t, e) {
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
            var he = t => {
                var e = e => {
                    var {
                            width: n,
                            autoSize: a = true
                        } = e, o = pe(e, ue);
                    return a ? r.createElement(se.SizeMe, null, e => {
                        var {
                            size: {width: a}
                        } = e;
                        return r.createElement('div', null, r.createElement(t, fe({ width: n || a || 0 }, o)));
                    }) : r.createElement(t, fe({}, o, { width: n }));
                };
                
                class n extends r.PureComponent {
                    constructor(t) {
                        super(t);
                        this.state = { init: false };
                        
                    }
                    componentDidMount() {
                        setTimeout(() => this.setState({ init: true }));
                    }
                    render() {
                        var {
                            width: t,
                            height: n
                        } = this.props;
                        return this.state.init ? r.createElement(e, this.props) : r.createElement(ce.xu, {
                            width: t,
                            height: n
                        });
                    }
                }
                return n.propTypes = {
                    width: o().number,
                    height: o().number
                }, n;
            };
            Object.keys(ie.Rl.breakpoints);
            Object.values(ie.Rl.breakpoints).map(t => parseInt(t, 10));
            
            var de = n(91115), ve = n(88800), me = (0, le.LM)(t => {
                    var {theme: e} = t;
                    return {
                        maxWidth: 360,
                        color: e.colors.gray[8],
                        backgroundColor: e.colors.gray[1],
                        border: '1px solid',
                        borderColor: (0, oe.DZ)(0.4, e.colors.gray[8])
                    };
                }, q);
            function be(t) {
                var {
                    data: e,
                    categoryDimension: n,
                    valueDimension: r,
                    maxCategories: a,
                    categoriesComparator: o
                } = t;
                return function (t, e) {
                    return Object.entries(t).sort((t, n) => {
                        var [r] = t, [a] = n;
                        return r === '(other)' ? 1 : a === '(other)' ? -1 : e(r, a);
                    }).map(t => {
                        var [e, n] = t;
                        return {
                            label: e,
                            value: n
                        };
                    });
                }(function (t, e) {
                    var n = {};
                    if (t.forEach(t => n[t.cat] = (n[t.cat] || 0) + +t.val), Object.keys(n).length <= e) {
                        return n;
                    }
                    var r = Object.assign({}, ...Object.entries(n).sort((t, e) => {
                        var {1: n} = t, {1: r} = e;
                        return r - n;
                    }).slice(0, e).map(t => {
                        var [e] = t;
                        return { [e]: null };
                    }));
                    return Object.entries(n).forEach(t => {
                        var [e, n] = t;
                        r.hasOwnProperty(e) ? a[e] = n : a['(other)'] += n;
                    }), a;
                }(function (t, e, n) {
                    var r = t => t instanceof Function ? t : e => e[t], a = r(e), o = r(n);
                    return t.map(t => ({
                        cat: a(t),
                        val: o(t)
                    })).filter(t => t.val > 0);
                }(e, n, r), a), o);
            }
            function ge(t, e) {
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
            function ye(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ge(Object(n), true).forEach(function (e) {
                        we(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function we(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : t[e] = n, t;
            }
            var Oe = (0, le.LM)(t => {
                    var {onClick: e} = t;
                    return ye(ye({
                        transitionProperty: 'transform',
                        transitionDuration: '.5s'
                    }, 'function' === typeof e && { cursor: 'pointer' }), {}, {
                        '&:hover': {
                            transform: 'scale('.concat(1.05, ')'),
                            transitionDuration: '.25s',
                            transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }
                    });
                }, 'g'), xe = (0, le.LM)(t => {
                    var {
                        theme: e,
                        color: n
                    } = t;
                    return {
                        transition: 'fill 80ms ease-out',
                        fill: n,
                        stroke: e.colors.white,
                        strokeWidth: 1,
                        strokeOpacity: 0.8
                    };
                }, 'path'), Me = (0, le.LM)(t => {
                    var {
                        theme: e,
                        fontSize: n,
                        light: r,
                        subtitle: a = false
                    } = t;
                    return {
                        fontSize: n,
                        textAnchor: 'middle',
                        fill: r ? e.colors.white : e.colors.black,
                        opacity: a ? 0.6 : 1,
                        pointerEvents: 'none'
                    };
                }, 'text'), Ee = (0, le.LM)(t => {
                    var {
                        theme: e,
                        loading: n
                    } = t;
                    return { fill: e.colors.gray[n ? 9 : 8] };
                }, 'circle');
            class ke extends r.PureComponent {
                constructor(t) {
                    super(t);
                    this.state = { chartId: Math.round(1000000000000 * Math.random()) };
                    
                }
                componentDidUpdate() {
                    q.rebuild();
                }
                _textFitsSlice(t, e, n, r, a, o, i) {
                    return !this.props.doughnut && function (t) {
                        var {
                                arcStartAngle: e,
                                arcEndAngle: n,
                                arcInnerRadius: r = 0,
                                arcOuterRadius: a,
                                textX: o,
                                textY: i,
                                textHeight: s
                            } = t, c = i - s / 2, u = i + s / 2, f = o < 0 ? -1 : 1, p = l(e - Math.PI / 2), h = l(n - Math.PI / 2);
                        if (!m(o, c, p, h) || !m(o, u, p, h)) {
                            return 0;
                        }
                        var d = (l(h - p) || 2 * Math.PI) > Math.PI, v = [].concat(...[
                                c,
                                u
                            ].map(t => [
                                ...d ? [] : [
                                    t / Math.tan(p),
                                    t / Math.tan(h)
                                ],
                                Math.sqrt(Math.pow(r, 2) - Math.pow(t, 2)) * f,
                                Math.sqrt(Math.pow(a, 2) - Math.pow(t, 2)) * f
                            ].filter(t => !isNaN(t))));
                        return 2 * Math.min(...v.map(t => Math.abs(t - o)));
                        function m(t, e, n, r) {
                            return !l(r - n) || l(Math.atan(e / t) + (t < 0 ? Math.PI : 0) - n) <= l(r - n);
                        }
                    }({
                        arcStartAngle: a,
                        arcEndAngle: o,
                        arcOuterRadius: i,
                        textX: n,
                        textY: r,
                        textHeight: e
                    }) >= t.length * e * 0.55;
                    function l(t) {
                        for (var e = Math.round(1000000000000 * t) / 1000000000000; e < 0;) {
                            e += 2 * Math.PI;
                        }
                        for (; e > 2 * Math.PI;) {
                            e -= 2 * Math.PI;
                        }
                        return e;
                    }
                }
                render() {
                    var {
                            theme: t,
                            width: e,
                            height: n,
                            data: a,
                            categoryDimension: o,
                            valueDimension: i,
                            maxCategories: l,
                            categoryColor: s,
                            categoriesComparator: c,
                            categoryNameFormatter: u,
                            valueFormatter: f,
                            onClick: p,
                            loading: h,
                            doughnut: d,
                            showLabel: v
                        } = this.props, {chartId: m} = this.state, b = be({
                            data: a,
                            categoryDimension: o,
                            valueDimension: i,
                            maxCategories: l,
                            categoriesComparator: c
                        }), g = s;
                    if (g instanceof Function) {
                        g = kt(s);
                        b.map(t => t.label).forEach(g);
                    }
                    var y = b.reduce((t, e) => t + e.value, 0), w = Math.min(e, n || 1e+400), O = w / 2 - w / 2 * 0.05, x = ee().outerRadius(O).innerRadius(d ? O - 34 : 0), M = ee().outerRadius(O).innerRadius(O / 3), E = t.fontSizes[1], k = t.fontSizes[0], j = 'piechart-tooltip-'.concat(m);
                    return r.createElement($.RD.Consumer, null, t => r.createElement('div', null, r.createElement('svg', {
                        'aria-hidden': 'true',
                        role: 'img',
                        width: w,
                        height: w,
                        viewBox: '-'.concat(w / 2, ' -').concat(w / 2, ' ').concat(w, ' ').concat(w)
                    }, b.length ? ae().sort(null).value(t => t.value)(b).map(e => {
                        var n = g(e.data.label);
                        h && (n = (0, oe.DZ)(0.9, (0, oe.se)(n)));
                        var a = (0, de._)(n), o = M.centroid(e), i = u(e.data.label), l = o[1] - 0.7 * E, s = e.value / y * 100, c = ''.concat(dt(s)), d = o[1] + 0.7 * k;
                        return r.createElement(Oe, {
                            key: i,
                            'data-for': j,
                            'data-html': true,
                            'data-tip': h ? null : ''.concat(i, ': <b>').concat(f(e.value), '</b> (').concat(dt(s, 2, t), ')'),
                            onClick: 'function' === typeof p ? () => p(e.data, e.index) : void 0
                        }, r.createElement(xe, {
                            d: x(e),
                            color: n
                        }), this._textFitsSlice(i, E, o[0], l, e.startAngle, e.endAngle, O) && !h && v && r.createElement('g', null, r.createElement(Me, {
                            light: a,
                            fontSize: E,
                            x: o[0],
                            y: l,
                            dy: '0.35em'
                        }, i), this._textFitsSlice(c, k, o[0], d, e.startAngle, e.endAngle, O) && r.createElement(Me, {
                            light: a,
                            fontSize: k,
                            subtitle: true,
                            x: o[0],
                            y: d,
                            dy: '0.35em'
                        }, c)));
                    }) : r.createElement(Ee, {
                        r: O,
                        loading: h
                    })), r.createElement(me, { id: j }), r.createElement(ve.G, null, r.createElement($.cC, {
                        id: 'common.pie_chart.refer_to_details',
                        _: 'Pie chart data visualization: refer to details section below for tabular data.'
                    }))));
                }
            }
            ke.propTypes = {
                theme: o().object.isRequired,
                width: o().number,
                height: o().number,
                data: o().array,
                categoryDimension: o().oneOfType([
                    o().string,
                    o().func
                ]),
                valueDimension: o().oneOfType([
                    o().string,
                    o().func
                ]),
                maxCategories: o().number,
                categoryColor: o().oneOfType([
                    o().array,
                    o().func
                ]),
                categoriesComparator: o().func,
                categoryNameFormatter: o().func,
                valueFormatter: o().func,
                onClick: o().func,
                loading: o().bool,
                doughnut: o().bool,
                showLabel: o().bool
            };
            ke.defaultProps = {
                width: void 0,
                data: [],
                categoriesComparator: (t, e) => t.localeCompare(e),
                categoryDimension: 'label',
                valueDimension: 'value',
                maxCategories: 20,
                categoryColor: ie.Rl.colors.sequential,
                categoryNameFormatter: t => t,
                valueFormatter: t => ht(t),
                loading: false,
                doughnut: false,
                showLabel: true
            };
            
            he((0, le.Zz)(ke));
            function je(t, e) {
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
            function _e(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? je(Object(n), true).forEach(function (e) {
                        Pe(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function Pe(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : t[e] = n, t;
            }
            var ze = (0, le.LM)(t => {
                    var {
                        theme: e,
                        color: n,
                        onClick: r
                    } = t;
                    return _e(_e({
                        fill: n,
                        stroke: e.colors.white,
                        strokeWidth: 1,
                        strokeOpacity: 0.8,
                        transitionProperty: 'transform',
                        transitionDuration: '.5s'
                    }, 'function' === typeof r && { cursor: 'pointer' }), {}, {
                        '&:hover': {
                            transform: 'scaleY('.concat(1.2, ') translateY(-').concat(10, '%)'),
                            transitionDuration: '.25s',
                            transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }
                    });
                }, 'rect'), Se = (0, le.LM)(t => {
                    var {
                        theme: e,
                        fontSize: n,
                        light: r,
                        subtitle: a = false
                    } = t;
                    return {
                        fontSize: n,
                        textAnchor: 'middle',
                        fill: r ? e.colors.white : e.colors.black,
                        opacity: a ? 0.6 : 1,
                        pointerEvents: 'none'
                    };
                }, 'text'), Le = (0, le.LM)(t => {
                    var {theme: e} = t;
                    return { fill: e.colors.gray[8] };
                }, 'rect');
            class Ae extends r.PureComponent {
                constructor(t) {
                    super(t);
                    Pe(this, '_roundPercentage', function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = Math.pow(10, e);
                        return t > 99 ? 100 - +(100 - t).toPrecision(1) : t < 1 ? +t.toPrecision(1) : Math.round(t * n) / n;
                    });
                    this.state = { chartId: Math.round(1000000000000 * Math.random()) };
                    
                }
                _textFitsWidth(t, e, n) {
                    return n >= t.length * e * 0.55;
                }
                render() {
                    var {
                            theme: t,
                            width: e,
                            height: n,
                            data: a,
                            categoryDimension: o,
                            valueDimension: i,
                            maxCategories: l,
                            categoryColor: s,
                            categoriesComparator: c,
                            categoryNameFormatter: u,
                            valueFormatter: f,
                            onClick: p,
                            showLabel: h
                        } = this.props, {chartId: d} = this.state, v = be({
                            data: a,
                            categoryDimension: o,
                            valueDimension: i,
                            maxCategories: l,
                            categoriesComparator: c
                        }), m = s;
                    if (m instanceof Function) {
                        m = kt(s);
                        v.map(t => t.label).forEach(m);
                    }
                    var b = v.reduce((t, e) => t + e.value, 0), g = 0.2 * n / 2, y = n - 2 * g, w = t.fontSizes[1], O = t.fontSizes[0], x = 'barchart-tooltip-'.concat(d);
                    return r.createElement('div', null, r.createElement('svg', {
                        width: e,
                        height: n
                    }, v.length ? ae().sort(null).endAngle(1).value(t => t.value)(v).map(t => {
                        var a = m(t.data.label), o = (0, de._)(a), i = [
                                t.startAngle,
                                t.endAngle
                            ].map(t => t * e), l = i[1] - i[0], s = [
                                i[0] + l / 2,
                                n / 2
                            ], c = u(t.data.label), d = s[1] - 0.6 * O, v = t.value / b * 100, M = ''.concat(this._roundPercentage(v), '%'), E = s[1] + 0.6 * w, k = ''.concat(c, ': <b>').concat(f(t.value), '</b> (').concat(this._roundPercentage(v, 2), '%)');
                        return r.createElement('g', {
                            key: c,
                            'data-for': x,
                            'data-html': true,
                            'data-tip': k
                        }, r.createElement(ze, {
                            x: i[0],
                            y: g,
                            width: l,
                            height: y,
                            color: a,
                            onClick: 'function' === typeof p ? () => p(t.data, t.index) : void 0
                        }), h && this._textFitsWidth(c, w, l) && r.createElement('g', null, r.createElement(Se, {
                            light: o,
                            fontSize: w,
                            x: s[0],
                            y: d,
                            dy: '0.35em'
                        }, c), h && this._textFitsWidth(M, O, l) && r.createElement(Se, {
                            light: o,
                            fontSize: O,
                            subtitle: true,
                            x: s[0],
                            y: E,
                            dy: '0.35em'
                        }, M)));
                    }) : r.createElement(Le, {
                        width: e,
                        height: y,
                        transform: 'translate(0, '.concat(g, ')')
                    })), r.createElement(me, { id: x }));
                }
            }
            Ae.propTypes = {
                theme: o().object.isRequired,
                width: o().number,
                height: o().number,
                data: o().array,
                categoryDimension: o().oneOfType([
                    o().string,
                    o().func
                ]),
                valueDimension: o().oneOfType([
                    o().string,
                    o().func
                ]),
                maxCategories: o().number,
                categoryColor: o().oneOfType([
                    o().array,
                    o().func
                ]),
                categoriesComparator: o().func,
                categoryNameFormatter: o().func,
                valueFormatter: o().func,
                onClick: o().func,
                showLabel: o().bool
            };
            Ae.defaultProps = {
                width: void 0,
                height: 50,
                data: [],
                categoriesComparator: (t, e) => t.localeCompare(e),
                categoryNameFormatter: t => t,
                categoryDimension: 'label',
                valueDimension: 'value',
                maxCategories: 20,
                categoryColor: ie.Rl.colors.categorical,
                valueFormatter: t => t,
                showLabel: true
            };
            
            var Te = he((0, le.Zz)(Ae));
            function Ce(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
            }
            var He = n(7480), Re = (0, le.LM)(t => {
                    var {
                        theme: e,
                        color: n
                    } = t;
                    return {
                        fill: n || e.colors.newGray[6],
                        stroke: e.colors.white,
                        strokeWidth: 1,
                        strokeOpacity: 0.8
                    };
                }, 'path'), Ne = (0, le.LM)(t => {
                    var {radius: e} = t;
                    return {
                        fontSize: Math.floor(0.5 * e),
                        textAnchor: 'middle'
                    };
                }, 'text'), Ve = t => {
                    var {
                            width: e,
                            height: n,
                            value: a,
                            total: o,
                            colorBreaks: i,
                            valueFormatter: l,
                            updateDuration: s
                        } = t, c = jt().domain(i.map(function () {
                            var {
                                threshold: t = 0
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return t;
                        })).range([
                            i[0],
                            ...i
                        ].map(t => {
                            var {color: e} = t;
                            return e;
                        })), u = Math.min(e, n || 1e+400), f = u / 2, p = 0.8 * f, h = ee().outerRadius(f).innerRadius(p), d = {
                            duration: s,
                            ease: Ce
                        }, v = l(a, o);
                    return r.createElement(r.Fragment, null, r.createElement('svg', {
                        'aria-hidden': 'true',
                        role: 'img',
                        width: u,
                        height: u,
                        viewBox: '-'.concat(u / 2, ' -').concat(u / 2, ' ').concat(u, ' ').concat(u)
                    }, r.createElement(Re, {
                        d: h({
                            startAngle: 0,
                            endAngle: 2 * Math.PI
                        })
                    }), r.createElement(He.Z, {
                        start: { value: 0 },
                        enter: {
                            timing: d,
                            value: [a]
                        },
                        update: {
                            timing: d,
                            value: [a]
                        }
                    }, t => {
                        var {value: e} = t, n = l(e, o);
                        return r.createElement('g', null, r.createElement(Re, {
                            d: h({
                                startAngle: 0,
                                endAngle: e / o * Math.PI * 2
                            }),
                            color: c(e)
                        }), r.createElement(Ne, {
                            radius: p,
                            dy: '0.35em'
                        }, n));
                    })), r.createElement(ve.G, null, v));
                };
            Ve.propTypes = {
                width: o().number,
                height: o().number,
                value: o().number.isRequired,
                total: o().number,
                colorBreaks: o().arrayOf(o().shape({
                    color: o().string.isRequired,
                    threshold: o().number
                })),
                valueFormatter: o().func,
                updateDuration: o().number
            };
            Ve.defaultProps = {
                width: void 0,
                total: 1,
                colorBreaks: [
                    {
                        color: ie.Rl.colors.red[3],
                        threshold: 0
                    },
                    {
                        color: ie.Rl.colors.gold[7],
                        threshold: 0.3
                    },
                    {
                        color: ie.Rl.colors.green[6],
                        threshold: 0.8
                    }
                ],
                valueFormatter: (t, e) => ''.concat(Math.round(t / e * 100), '%'),
                updateDuration: 1000
            };
            
            he(Ve);
            var De = (0, le.LM)(t => {
                    var {
                        theme: e,
                        color: n
                    } = t;
                    return { fill: n || e.colors.gray[8] };
                }, 'rect'), Be = t => {
                    var {
                            width: e,
                            height: n,
                            value: a,
                            total: o,
                            colorBreaks: i,
                            updateDuration: l
                        } = t, s = jt().domain(i.map(function () {
                            var {
                                threshold: t = 0
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            return t;
                        })).range([
                            i[0],
                            ...i
                        ].map(t => {
                            var {color: e} = t;
                            return e;
                        })), c = {
                            duration: l,
                            ease: Ce
                        };
                    return r.createElement('svg', {
                        width: e,
                        height: n
                    }, r.createElement(De, {
                        x: 0,
                        y: 0,
                        width: e,
                        height: n
                    }), r.createElement(He.Z, {
                        start: { value: 0 },
                        enter: {
                            timing: c,
                            value: [a]
                        },
                        update: {
                            timing: c,
                            value: [a]
                        }
                    }, t => {
                        var {value: e} = t;
                        return r.createElement(De, {
                            color: s(e),
                            x: 0,
                            y: 0,
                            width: ''.concat(e / o * 100, '%'),
                            height: n
                        });
                    }));
                };
            Be.propTypes = {
                width: o().oneOfType([
                    o().number,
                    o().string
                ]),
                height: o().oneOfType([
                    o().number,
                    o().string
                ]),
                value: o().number.isRequired,
                total: o().number,
                colorBreaks: o().arrayOf(o().shape({
                    color: o().string.isRequired,
                    threshold: o().number
                })),
                updateDuration: o().number
            };
            Be.defaultProps = {
                width: '100%',
                height: 10,
                total: 1,
                colorBreaks: [
                    {
                        color: ie.Rl.colors.red[3],
                        threshold: 0
                    },
                    {
                        color: ie.Rl.colors.gold[7],
                        threshold: 0.3
                    },
                    {
                        color: ie.Rl.colors.green[6],
                        threshold: 0.8
                    }
                ],
                updateDuration: 1000
            };
            
            var Ie = he(Be);
        },
        80855: function (t, e, n) {
            'use strict';
            function r(t, e, n) {
                t.prototype = e.prototype = n;
                n.constructor = t;
                
            }
            function a(t, e) {
                var n = Object.create(t.prototype);
                for (var r in e)
                    n[r] = e[r];
                return n;
            }
            function o() {
            }
            n.r(e);
            n.d(e, {
                interpolate: function () {
                    return rt;
                },
                interpolateArray: function () {
                    return X;
                },
                interpolateBasis: function () {
                    return R;
                },
                interpolateBasisClosed: function () {
                    return N;
                },
                interpolateCubehelix: function () {
                    return re;
                },
                interpolateCubehelixLong: function () {
                    return ae;
                },
                interpolateDate: function () {
                    return G;
                },
                interpolateDiscrete: function () {
                    return at;
                },
                interpolateHcl: function () {
                    return Ft;
                },
                interpolateHclLong: function () {
                    return Ut;
                },
                interpolateHsl: function () {
                    return Ot;
                },
                interpolateHslLong: function () {
                    return xt;
                },
                interpolateHue: function () {
                    return ot;
                },
                interpolateLab: function () {
                    return It;
                },
                interpolateNumber: function () {
                    return K;
                },
                interpolateNumberArray: function () {
                    return $;
                },
                interpolateObject: function () {
                    return Q;
                },
                interpolateRgb: function () {
                    return F;
                },
                interpolateRgbBasis: function () {
                    return Z;
                },
                interpolateRgbBasisClosed: function () {
                    return q;
                },
                interpolateRound: function () {
                    return it;
                },
                interpolateString: function () {
                    return nt;
                },
                interpolateTransformCss: function () {
                    return vt;
                },
                interpolateTransformSvg: function () {
                    return mt;
                },
                interpolateZoom: function () {
                    return yt;
                },
                piecewise: function () {
                    return oe;
                },
                quantize: function () {
                    return ie;
                }
            });
            
            var p = new RegExp('^rgb\\(' + [
                    '\\s*([+-]?\\d+)\\s*',
                    '\\s*([+-]?\\d+)\\s*',
                    '\\s*([+-]?\\d+)\\s*'
                ] + '\\)$'), h = new RegExp('^rgb\\(' + [
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*'
                ] + '\\)$'), d = new RegExp('^rgba\\(' + [
                    '\\s*([+-]?\\d+)\\s*',
                    '\\s*([+-]?\\d+)\\s*',
                    '\\s*([+-]?\\d+)\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*'
                ] + '\\)$'), v = new RegExp('^rgba\\(' + [
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*'
                ] + '\\)$'), m = new RegExp('^hsl\\(' + [
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*'
                ] + '\\)$'), b = new RegExp('^hsla\\(' + [
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
                    '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*'
                ] + '\\)$');
            function y() {
                return this.rgb().formatHex();
            }
            function w() {
                return this.rgb().formatRgb();
            }
            function O(t) {
                var e, n;
                return t = (t + '').trim().toLowerCase(), (e = /^#([0-9a-f]{3,8})$/.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), 6 === n ? x(e) : 3 === n ? new j(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === n ? M(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === n ? M(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = p.exec(t)) ? new j(e[1], e[2], e[3], 1) : (e = h.exec(t)) ? new j(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = d.exec(t)) ? M(e[1], e[2], e[3], e[4]) : (e = v.exec(t)) ? M(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = m.exec(t)) ? S(e[1], e[2] / 100, e[3] / 100, 1) : (e = b.exec(t)) ? S(e[1], e[2] / 100, e[3] / 100, e[4]) : g.hasOwnProperty(t) ? x(g[t]) : 'transparent' === t ? new j(NaN, NaN, NaN, 0) : null;
            }
            function x(t) {
                return new j(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
            }
            function M(t, e, n, r) {
                return r <= 0 && (t = e = n = NaN), new j(t, e, n, r);
            }
            function E(t) {
                return t instanceof o || (t = O(t)), t ? new j((t = t.rgb()).r, t.g, t.b, t.opacity) : new j();
            }
            function k(t, e, n, r) {
                return 1 === arguments.length ? E(t) : new j(t, e, n, null == r ? 1 : r);
            }
            function j(t, e, n, r) {
                this.r = +t;
                this.g = +e;
                this.b = +n;
                this.opacity = +r;
                
            }
            function _() {
                return '#' + z(this.r) + z(this.g) + z(this.b);
            }
            function P() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'rgb(' : 'rgba(') + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ')' : ', ' + t + ')');
            }
            function z(t) {
                return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? '0' : '') + t.toString(16);
            }
            function S(t, e, n, r) {
                return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new T(t, e, n, r);
            }
            function L(t) {
                if (t instanceof T) {
                    return new T(t.h, t.s, t.l, t.opacity);
                }
                if (t instanceof o || (t = O(t)), !t) {
                    return new T();
                }
                if (t instanceof T) {
                    return t;
                }
                var e = (t = t.rgb()).r / 255, n = t.g / 255, r = t.b / 255, a = Math.min(e, n, r), i = Math.max(e, n, r), l = NaN, s = i - a, c = (i + a) / 2;
                return s ? (l = e === i ? (n - r) / s + 6 * (n < r) : n === i ? (r - e) / s + 2 : (e - n) / s + 4, s /= c < 0.5 ? i + a : 2 - i - a, l *= 60) : s = c > 0 && c < 1 ? 0 : l, new T(l, s, c, t.opacity);
            }
            function A(t, e, n, r) {
                return 1 === arguments.length ? L(t) : new T(t, e, n, null == r ? 1 : r);
            }
            function T(t, e, n, r) {
                this.h = +t;
                this.s = +e;
                this.l = +n;
                this.opacity = +r;
                
            }
            function C(t, e, n) {
                return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
            }
            function H(t, e, n, r, a) {
                var o = t * t, i = o * t;
                return ((1 - 3 * t + 3 * o - i) * e + (4 - 6 * o + 3 * i) * n + (1 + 3 * t + 3 * o - 3 * i) * r + i * a) / 6;
            }
            function R(t) {
                var e = t.length - 1;
                return function (n) {
                    var r = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), a = t[r], o = t[r + 1], i = r > 0 ? t[r - 1] : 2 * a - o, l = r < e - 1 ? t[r + 2] : 2 * o - a;
                    return H((n - r / e) * e, i, a, o, l);
                };
            }
            function N(t) {
                var e = t.length;
                return function (n) {
                    var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e), a = t[(r + e - 1) % e], o = t[r % e], i = t[(r + 1) % e], l = t[(r + 2) % e];
                    return H((n - r / e) * e, a, o, i, l);
                };
            }
            function V(t) {
                return function () {
                    return t;
                };
            }
            function D(t, e) {
                return function (n) {
                    return t + n * e;
                };
            }
            function B(t, e) {
                var n = e - t;
                return n ? D(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : V(isNaN(t) ? e : t);
            }
            function I(t) {
                return 1 === (t = +t) ? W : function (e, n) {
                    return n - e ? function (t, e, n) {
                        return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function (r) {
                            return Math.pow(t + r * e, n);
                        };
                    }(e, n, t) : V(isNaN(e) ? n : e);
                };
            }
            function W(t, e) {
                var n = e - t;
                return n ? D(t, n) : V(isNaN(t) ? e : t);
            }
            r(o, O, {
                copy: function (t) {
                    return Object.assign(new this.constructor(), this, t);
                },
                displayable: function () {
                    return this.rgb().displayable();
                },
                hex: y,
                formatHex: y,
                formatHsl: function () {
                    return L(this).formatHsl();
                },
                formatRgb: w,
                toString: w
            });
            r(j, k, a(o, {
                brighter: function (t) {
                    return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
                },
                darker: function (t) {
                    return t = null == t ? 0.7 : Math.pow(0.7, t), new j(this.r * t, this.g * t, this.b * t, this.opacity);
                },
                rgb: function () {
                    return this;
                },
                displayable: function () {
                    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
                },
                hex: _,
                formatHex: _,
                formatRgb: P,
                toString: P
            }));
            r(T, A, a(o, {
                brighter: function (t) {
                    return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t), new T(this.h, this.s, this.l * t, this.opacity);
                },
                darker: function (t) {
                    return t = null == t ? 0.7 : Math.pow(0.7, t), new T(this.h, this.s, this.l * t, this.opacity);
                },
                rgb: function () {
                    var t = this.h % 360 + 360 * (this.h < 0), e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, a = 2 * n - r;
                    return new j(C(t >= 240 ? t - 240 : t + 120, a, r), C(t, a, r), C(t < 120 ? t + 240 : t - 120, a, r), this.opacity);
                },
                displayable: function () {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
                },
                formatHsl: function () {
                    var t = this.opacity;
                    return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? 'hsl(' : 'hsla(') + (this.h || 0) + ', ' + 100 * (this.s || 0) + '%, ' + 100 * (this.l || 0) + '%' + (1 === t ? ')' : ', ' + t + ')');
                }
            }));
            
            var F = function t(e) {
                var n = I(e);
                function r(t, e) {
                    var r = n((t = k(t)).r, (e = k(e)).r), a = n(t.g, e.g), o = n(t.b, e.b), i = W(t.opacity, e.opacity);
                    return function (e) {
                        return t.r = r(e), t.g = a(e), t.b = o(e), t.opacity = i(e), t + '';
                    };
                }
                return r.gamma = t, r;
            }(1);
            function U(t) {
                return function (e) {
                    var n, r, a = e.length, o = new Array(a), i = new Array(a), l = new Array(a);
                    for (n = 0; n < a; ++n) {
                        r = k(e[n]);
                        o[n] = r.r || 0;
                        i[n] = r.g || 0;
                        l[n] = r.b || 0;
                        
                    }
                    return o = t(o), i = t(i), l = t(l), r.opacity = 1, function (t) {
                        return r.r = o(t), r.g = i(t), r.b = l(t), r + '';
                    };
                };
            }
            var Z = U(R), q = U(N);
            function $(t, e) {
                e || (e = []);
                var n, r = t ? Math.min(e.length, t.length) : 0, a = e.slice();
                return function (o) {
                    for (n = 0; n < r; ++n) {
                        a[n] = t[n] * (1 - o) + e[n] * o;
                    }
                    return a;
                };
            }
            function Y(t) {
                return ArrayBuffer.isView(t) && !(t instanceof DataView);
            }
            function X(t, e) {
                return (Y(e) ? $ : J)(t, e);
            }
            function J(t, e) {
                var n, r = e ? e.length : 0, a = t ? Math.min(r, t.length) : 0, o = new Array(a), i = new Array(r);
                for (n = 0; n < a; ++n) {
                    o[n] = rt(t[n], e[n]);
                }
                for (; n < r; ++n) {
                    i[n] = e[n];
                }
                return function (t) {
                    for (n = 0; n < a; ++n) {
                        i[n] = o[n](t);
                    }
                    return i;
                };
            }
            function G(t, e) {
                var n = new Date();
                return t = +t, e = +e, function (r) {
                    return n.setTime(t * (1 - r) + e * r), n;
                };
            }
            function K(t, e) {
                return t = +t, e = +e, function (n) {
                    return t * (1 - n) + e * n;
                };
            }
            function Q(t, e) {
                var n, r = {}, a = { n: r[n](t) };
                for (n in (null !== t && 'object' === typeof t || (t = {}), null !== e && 'object' === typeof e || (e = {}), e))
                    n in t ? r[n] = rt(t[n], e[n]) : a[n] = e[n];
                return function (t) {
                    for (n in r);
                    return a;
                };
            }
            var et = new RegExp(/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g.source, 'g');
            function nt(t, e) {
                var n, r, a, o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g.lastIndex = et.lastIndex = 0, i = -1, l = [], s = [];
                for (t += '', e += ''; (n = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g.exec(t)) && (r = et.exec(e));) {
                    if ((a = r.index) > o) {
                        a = e.slice(o, a);
                        l[i] ? l[i] += a : l[++i] = a;
                    }
                    (n = n[0]) === (r = r[0]) ? l[i] ? l[i] += r : l[++i] = r : (l[++i] = null, s.push({
                        i: i,
                        x: K(n, r)
                    }));
                    o = et.lastIndex;
                    
                }
                return o < e.length && (a = e.slice(o), l[i] ? l[i] += a : l[++i] = a), l.length < 2 ? s[0] ? function (e) {
                    return t(e) + '';
                } : function () {
                    return t;
                } : (e = s.length, function (t) {
                    for (var n, r = 0; r < e; ++r) {
                        l[(n = s[r]).i] = n.x(t);
                    }
                    return l.join('');
                });
            }
            function rt(t, e) {
                var n, r = typeof e;
                return null == e || 'boolean' === r ? V(e) : ('number' === r ? K : 'string' === r ? (n = O(e)) ? (e = n, F) : nt : e instanceof O ? F : e instanceof Date ? G : Y(e) ? $ : Array.isArray(e) ? J : 'function' !== typeof e.valueOf && 'function' !== typeof e.toString || isNaN(e) ? Q : K)(t, e);
            }
            function at(t) {
                var e = t.length;
                return function (n) {
                    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
                };
            }
            function ot(t, e) {
                var n = B(+t, +e);
                return function (t) {
                    var e = n(t);
                    return e - 360 * Math.floor(e / 360);
                };
            }
            function it(t, e) {
                return t = +t, e = +e, function (n) {
                    return Math.round(t * (1 - n) + e * n);
                };
            }
            var lt, st, ct, ut, ft = 180 / Math.PI;
            function ht(t, e, n, r, a, o) {
                var i, l, s;
                return (i = Math.sqrt(t * t + e * e)) && (t /= i, e /= i), (s = t * n + e * r) && (n -= t * s, r -= e * s), (l = Math.sqrt(n * n + r * r)) && (n /= l, r /= l, s /= l), t * r < e * n && (t = -t, e = -e, s = -s, i = -i), {
                    translateX: a,
                    translateY: o,
                    rotate: Math.atan2(e, t) * ft,
                    skewX: Math.atan(s) * ft,
                    scaleX: i,
                    scaleY: l
                };
            }
            function dt(t, e, n, r) {
                function a(t) {
                    return t.length ? t.pop() + ' ' : '';
                }
                return function (o, i) {
                    var l = [], s = [];
                    return o = t(o), i = t(i), function (t, r, a, o, i, l) {
                        if (t !== a || r !== o) {
                            var s = i.push('translate(', null, e, null, n);
                            l.push({
                                i: s - 4,
                                x: K(t, a)
                            }, {
                                i: s - 2,
                                x: K(r, o)
                            });
                        } else {
                            (a || o) && i.push('translate(' + a + e + o + n);
                        }
                    }(o.translateX, o.translateY, i.translateX, i.translateY, l, s), function (t, e, n, o) {
                        t !== e ? (t - e > 180 ? e += 360 : e - t > 180 && (t += 360), o.push({
                            i: n.push(a(n) + 'rotate(', null, r) - 2,
                            x: K(t, e)
                        })) : e && n.push(a(n) + 'rotate(' + e + r);
                    }(o.rotate, i.rotate, l, s), function (t, e, n, o) {
                        t !== e ? o.push({
                            i: n.push(a(n) + 'skewX(', null, r) - 2,
                            x: K(t, e)
                        }) : e && n.push(a(n) + 'skewX(' + e + r);
                    }(o.skewX, i.skewX, l, s), function (t, e, n, r, o, i) {
                        if (t !== n || e !== r) {
                            var l = o.push(a(o) + 'scale(', null, ',', null, ')');
                            i.push({
                                i: l - 4,
                                x: K(t, n)
                            }, {
                                i: l - 2,
                                x: K(e, r)
                            });
                        } else {
                            1 === n && 1 === r || o.push(a(o) + 'scale(' + n + ',' + r + ')');
                        }
                    }(o.scaleX, o.scaleY, i.scaleX, i.scaleY, l, s), o = i = null, function (t) {
                        for (var e, n = -1, r = s.length; ++n < r;) {
                            l[(e = s[n]).i] = e.x(t);
                        }
                        return l.join('');
                    };
                };
            }
            var vt = dt(function (t) {
                    return 'none' === t ? pt : (lt || (lt = document.createElement('DIV'), st = document.documentElement, ct = document.defaultView), lt.style.transform = t, t = ct.getComputedStyle(st.appendChild(lt), null).getPropertyValue('transform'), st.removeChild(lt), ht(+(t = t.slice(7, -1).split(','))[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
                }, 'px, ', 'px)', 'deg)'), mt = dt(function (t) {
                    return null == t ? pt : (ut || (ut = document.createElementNS('http://www.w3.org/2000/svg', 'g')), ut.setAttribute('transform', t), (t = ut.transform.baseVal.consolidate()) ? ht((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : pt);
                }, ', ', ')', ')'), bt = Math.SQRT2;
            function gt(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2;
            }
            function yt(t, e) {
                var n, r, a = t[0], o = t[1], i = t[2], l = e[0], s = e[1], c = e[2], u = l - a, f = s - o, p = u * u + f * f;
                if (p < 1e-12) {
                    r = Math.log(c / i) / bt;
                    n = function (t) {
                        return [
                            a + t * u,
                            o + t * f,
                            i * Math.exp(bt * t * r)
                        ];
                    };
                    
                } else {
                    var h = Math.sqrt(p), d = (c * c - i * i + 4 * p) / (2 * i * 2 * h), v = (c * c - i * i - 4 * p) / (2 * c * 2 * h), m = Math.log(Math.sqrt(d * d + 1) - d), b = Math.log(Math.sqrt(v * v + 1) - v);
                    r = (b - m) / bt;
                    n = function (t) {
                        var e, n = t * r, l = gt(m), s = i / (2 * h) * (l * (e = bt * n + m, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function (t) {
                                return ((t = Math.exp(t)) - 1 / t) / 2;
                            }(m));
                        return [
                            a + s * u,
                            o + s * f,
                            i * l / gt(bt * n + m)
                        ];
                    };
                    
                }
                return n.duration = 1000 * r, n;
            }
            function wt(t) {
                return function (e, n) {
                    var r = t((e = A(e)).h, (n = A(n)).h), a = W(e.s, n.s), o = W(e.l, n.l), i = W(e.opacity, n.opacity);
                    return function (t) {
                        return e.h = r(t), e.s = a(t), e.l = o(t), e.opacity = i(t), e + '';
                    };
                };
            }
            var Ot = wt(B), xt = wt(W), Mt = Math.PI / 180, Et = 180 / Math.PI;
            function St(t) {
                if (t instanceof At) {
                    return new At(t.l, t.a, t.b, t.opacity);
                }
                if (t instanceof Dt) {
                    return Bt(t);
                }
                t instanceof j || (t = E(t));
                var e, n, r = Rt(t.r), a = Rt(t.g), o = Rt(t.b), i = Tt((0.2225045 * r + 0.7168786 * a + 0.0606169 * o) / 1);
                return r === a && a === o ? e = n = i : (e = Tt((0.4360747 * r + 0.3850649 * a + 0.1430804 * o) / 0.96422), n = Tt((0.0139322 * r + 0.0971045 * a + 0.7141733 * o) / 0.82521)), new At(116 * i - 16, 500 * (e - i), 200 * (i - n), t.opacity);
            }
            function Lt(t, e, n, r) {
                return 1 === arguments.length ? St(t) : new At(t, e, n, null == r ? 1 : r);
            }
            function At(t, e, n, r) {
                this.l = +t;
                this.a = +e;
                this.b = +n;
                this.opacity = +r;
                
            }
            function Tt(t) {
                return t > 0.008856451679035631 ? Math.pow(t, 0.3333333333333333) : t / 0.12841854934601665 + 0.13793103448275862;
            }
            function Ct(t) {
                return t > 0.20689655172413793 ? t * t * t : 0.12841854934601665 * (t - 0.13793103448275862);
            }
            function Ht(t) {
                return 255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 0.4166666666666667) - 0.055);
            }
            function Rt(t) {
                return (t /= 255) <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
            }
            function Nt(t) {
                if (t instanceof Dt) {
                    return new Dt(t.h, t.c, t.l, t.opacity);
                }
                if (t instanceof At || (t = St(t)), 0 === t.a && 0 === t.b) {
                    return new Dt(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
                }
                var e = Math.atan2(t.b, t.a) * Et;
                return new Dt(e < 0 ? e + 360 : e, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
            }
            function Vt(t, e, n, r) {
                return 1 === arguments.length ? Nt(t) : new Dt(t, e, n, null == r ? 1 : r);
            }
            function Dt(t, e, n, r) {
                this.h = +t;
                this.c = +e;
                this.l = +n;
                this.opacity = +r;
                
            }
            function Bt(t) {
                if (isNaN(t.h)) {
                    return new At(t.l, 0, 0, t.opacity);
                }
                var e = t.h * Mt;
                return new At(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);
            }
            function It(t, e) {
                var n = W((t = Lt(t)).l, (e = Lt(e)).l), r = W(t.a, e.a), a = W(t.b, e.b), o = W(t.opacity, e.opacity);
                return function (e) {
                    return t.l = n(e), t.a = r(e), t.b = a(e), t.opacity = o(e), t + '';
                };
            }
            function Wt(t) {
                return function (e, n) {
                    var r = t((e = Vt(e)).h, (n = Vt(n)).h), a = W(e.c, n.c), o = W(e.l, n.l), i = W(e.opacity, n.opacity);
                    return function (t) {
                        return e.h = r(t), e.c = a(t), e.l = o(t), e.opacity = i(t), e + '';
                    };
                };
            }
            r(At, Lt, a(o, {
                brighter: function (t) {
                    return new At(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
                },
                darker: function (t) {
                    return new At(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
                },
                rgb: function () {
                    var t = (this.l + 16) / 116, e = isNaN(this.a) ? t : t + this.a / 500, n = isNaN(this.b) ? t : t - this.b / 200;
                    return new j(Ht(3.1338561 * (e = 0.96422 * Ct(e)) - 1.6168667 * (t = 1 * Ct(t)) - 0.4906146 * (n = 0.82521 * Ct(n))), Ht(-0.9787684 * e + 1.9161415 * t + 0.033454 * n), Ht(0.0719453 * e - 0.2289914 * t + 1.4052427 * n), this.opacity);
                }
            }));
            r(Dt, Vt, a(o, {
                brighter: function (t) {
                    return new Dt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
                },
                darker: function (t) {
                    return new Dt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
                },
                rgb: function () {
                    return Bt(this).rgb();
                }
            }));
            
            var Ft = Wt(B), Ut = Wt(W), Zt = -0.14861, $t = -0.29227, Yt = -0.90649, Jt = 1.97294 * Yt, Kt = 1.78277 * $t - Yt * Zt;
            function Qt(t) {
                if (t instanceof ee) {
                    return new ee(t.h, t.s, t.l, t.opacity);
                }
                t instanceof j || (t = E(t));
                var e = t.r / 255, n = t.g / 255, r = t.b / 255, a = (Kt * r + Jt * e - 3.5172982438 * n) / (Kt + Jt - 3.5172982438), o = r - a, i = (1.97294 * (n - a) - $t * o) / Yt, l = Math.sqrt(i * i + o * o) / (1.97294 * a * (1 - a)), s = l ? Math.atan2(i, o) * Et - 120 : NaN;
                return new ee(s < 0 ? s + 360 : s, l, a, t.opacity);
            }
            function te(t, e, n, r) {
                return 1 === arguments.length ? Qt(t) : new ee(t, e, n, null == r ? 1 : r);
            }
            function ee(t, e, n, r) {
                this.h = +t;
                this.s = +e;
                this.l = +n;
                this.opacity = +r;
                
            }
            function ne(t) {
                return function e(n) {
                    function r(e, r) {
                        var a = t((e = te(e)).h, (r = te(r)).h), o = W(e.s, r.s), i = W(e.l, r.l), l = W(e.opacity, r.opacity);
                        return function (t) {
                            return e.h = a(t), e.s = o(t), e.l = i(Math.pow(t, n)), e.opacity = l(t), e + '';
                        };
                    }
                    return n = +n, r.gamma = e, r;
                }(1);
            }
            r(ee, te, a(o, {
                brighter: function (t) {
                    return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t), new ee(this.h, this.s, this.l * t, this.opacity);
                },
                darker: function (t) {
                    return t = null == t ? 0.7 : Math.pow(0.7, t), new ee(this.h, this.s, this.l * t, this.opacity);
                },
                rgb: function () {
                    var t = isNaN(this.h) ? 0 : (this.h + 120) * Mt, e = +this.l, n = isNaN(this.s) ? 0 : this.s * e * (1 - e), r = Math.cos(t), a = Math.sin(t);
                    return new j(255 * (e + n * (Zt * r + 1.78277 * a)), 255 * (e + n * ($t * r + Yt * a)), 255 * (e + n * (1.97294 * r)), this.opacity);
                }
            }));
            var re = ne(B), ae = ne(W);
            function oe(t, e) {
                for (var n = 0, r = e.length - 1, a = e[0], o = new Array(r < 0 ? 0 : r); n < r;) {
                    o[n] = t(a, a = e[++n]);
                }
                return function (t) {
                    var e = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
                    return o[e](t - e);
                };
            }
            function ie(t, e) {
                for (var n = new Array(e), r = 0; r < e; ++r) {
                    n[r] = t(r / (e - 1));
                }
                return n;
            }
        },
        23934: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            e.default = void 0;
            
            var r = o(n(67294)), a = (o(n(45697)), o(n(31717)));
            function o(t) {
                return t && t.__esModule ? t : { default: t };
            }
            var i = function () {
                return '$$key$$';
            };
            function l(t) {
                var e = t.show, n = t.start, o = t.enter, l = t.update, s = t.leave, c = t.children, u = 'function' === typeof n ? n() : n;
                return r.default.createElement(a.default, {
                    data: e ? [u] : [],
                    start: function () {
                        return u;
                    },
                    keyAccessor: i,
                    enter: 'function' === typeof o ? o : function () {
                        return o;
                    },
                    update: 'function' === typeof l ? l : function () {
                        return l;
                    },
                    leave: 'function' === typeof s ? s : function () {
                        return s;
                    }
                }, function (t) {
                    if (!t[0]) {
                        return null;
                    }
                    var e = c(t[0].state);
                    return e && r.default.Children.only(e);
                });
            }
            l.propTypes = {};
            l.defaultProps = { show: true };
            
            var s = l;
            e.default = s;
        },
        7480: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, 'Z', {
                enumerable: true,
                get: function () {
                    return a.default;
                }
            });
            var r, a = (r = n(23934)) && r.__esModule ? r : { default: r };
        },
        98268: function (t, e) {
            'use strict';
            function n(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t;
            }
            function r(t, e, n) {
                this.key = t;
                this.data = e;
                this.type = n;
                this.state = {};
                
            }
            Object.defineProperty(e, '__esModule', { value: true });
            e.default = void 0;
            n(r.prototype, {
                setState: function (t) {
                    var e = this.state;
                    n(e, 'function' === typeof t ? t(e) : t);
                },
                updateData: function (t) {
                    return this.data = t, this;
                },
                updateType: function (t) {
                    return this.type = t, this;
                }
            });
            
            var a = r;
            e.default = a;
        },
        12183: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            Object.defineProperty(e, 'default', {
                enumerable: true,
                get: function () {
                    return a.default;
                }
            });
            
            var r, a = (r = n(98268)) && r.__esModule ? r : { default: r };
        },
        80692: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            
            
            var r = function (t) {
                    if (t && t.__esModule) {
                        return t;
                    }
                    var e = {
                        default: void 0,
                        default: w
                    };
                    if (null != t) {
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                                r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n];
                            }
                    }
                    return e.default = t, e;
                }(n(67294)), a = n(46871), o = (u(n(45697)), n(2852)), i = u(n(12183)), l = u(n(77190)), s = n(50374), c = n(32957);
            function u(t) {
                return t && t.__esModule ? t : { default: t };
            }
            function f(t) {
                return f = 'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator ? function (t) {
                    return typeof t;
                } : function (t) {
                    return t && 'function' === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                }, f(t);
            }
            function p(t, e) {
                if (!(t instanceof e)) {
                    throw new TypeError('Cannot call a class as a function');
                }
            }
            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || false;
                    r.configurable = true;
                    'value' in r && (r.writable = true);
                    Object.defineProperty(t, r.key, r);
                    
                }
            }
            function d(t, e) {
                return !e || 'object' !== f(e) && 'function' !== typeof e ? b(t) : e;
            }
            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                }, v(t);
            }
            function m(t, e) {
                return m = Object.setPrototypeOf || function (t, e) {
                    return t.__proto__ = e, t;
                }, m(t, e);
            }
            function b(t) {
                if (void 0 === t) {
                    throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                }
                return t;
            }
            function g(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : t[e] = n, t;
            }
            var y = function (t) {
                function e() {
                    var t, n;
                    p(this, e);
                    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) {
                        a[o] = arguments[o];
                    }
                    return g(b(b(n = d(this, (t = v(e)).call.apply(t, [this].concat(a))))), 'state', {
                        nodeKeys: [],
                        nodeHash: {},
                        nodes: [],
                        data: null
                    }), g(b(b(n)), 'animate', function () {
                        var t = n.state, e = t.nodeKeys, r = t.nodeHash;
                        if (!n.unmounting) {
                            for (var a = false, o = [], i = e.length, l = 0; l < i; l++) {
                                var c = e[l], u = r[c];
                                u.TRANSITION_SCHEDULES && (a = true);
                                u.type !== s.LEAVE || u.TRANSITION_SCHEDULES ? o.push(c) : delete r[c];
                                
                            }
                            a || n.interval.stop();
                            n.setState(function () {
                                return {
                                    nodeKeys: o,
                                    nodes: o.map(function (t) {
                                        return r[t];
                                    })
                                };
                            });
                            
                        }
                    }), g(b(b(n)), 'interval', null), g(b(b(n)), 'unmounting', false), n;
                }
                var n, a, u;
                return function (t, e) {
                    if ('function' !== typeof e && null !== e) {
                        throw new TypeError('Super expression must either be null or a function');
                    }
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: true,
                            configurable: true
                        }
                    });
                    e && m(t, e);
                    
                }(e, t), n = e, u = [{
                        key: 'getDerivedStateFromProps',
                        value: function (t, e) {
                            if (t.data !== e.data) {
                                for (var n = t.data, r = t.keyAccessor, a = t.start, o = t.enter, u = t.update, f = t.leave, p = e.nodeKeys, h = e.nodeHash, d = {}, v = 0; v < p.length; v++) {
                                    d[p[v]] = v;
                                }
                                for (var m = { w: g }, b = [], g = 0; g < n.length; g++) {
                                    var y = n[g], w = r(y, g);
                                    
                                    b.push(w);
                                    void 0 === d[w] && (h[w] = new i.default(w, y, s.ENTER));
                                    
                                }
                                for (var O = 0; O < p.length; O++) {
                                    var x = p[O], M = h[x];
                                    void 0 !== m[x] ? (M.updateData(n[m[x]]), M.updateType(s.UPDATE)) : M.updateType(s.LEAVE);
                                }
                                for (var E = (0, l.default)(p, d, b, m), k = 0; k < E.length; k++) {
                                    var j = E[k], _ = h[j], P = _.data;
                                    _.type === s.ENTER ? (_.setState(a(P, m[j])), c.transition.call(_, o(P, m[j]))) : _.type === s.LEAVE ? c.transition.call(_, f(P, d[j])) : c.transition.call(_, u(P, m[j]));
                                }
                                return {
                                    data: n,
                                    nodes: E.map(function (t) {
                                        return h[t];
                                    }),
                                    nodeHash: h,
                                    nodeKeys: E
                                };
                            }
                            return null;
                        }
                    }], (a = [
                    {
                        key: 'componentDidMount',
                        value: function () {
                            this.startInterval();
                        }
                    },
                    {
                        key: 'componentDidUpdate',
                        value: function (t) {
                            t.data === this.props.data || this.unmounting || this.startInterval();
                        }
                    },
                    {
                        key: 'startInterval',
                        value: function () {
                            this.interval ? this.interval.restart(this.animate) : this.interval = (0, o.interval)(this.animate);
                        }
                    },
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            var t = this.state, e = t.nodeKeys, n = t.nodeHash;
                            this.unmounting = true;
                            this.interval && this.interval.stop();
                            e.forEach(function (t) {
                                c.stop.call(n[t]);
                            });
                            
                        }
                    },
                    {
                        key: 'render',
                        value: function () {
                            var t = this.props.children(this.state.nodes);
                            return t && r.default.Children.only(t);
                        }
                    }
                ]) && h(n.prototype, a), u && h(n, u), e;
            }(r.Component);
            y.propTypes = {};
            y.defaultProps = {
                enter: function () {
                },
                update: function () {
                },
                leave: function () {
                }
            };
            (0, a.polyfill)(y);
            
            var w = y;
            
        },
        31717: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            Object.defineProperty(e, 'default', {
                enumerable: true,
                get: function () {
                    return a.default;
                }
            });
            
            var r, a = (r = n(80692)) && r.__esModule ? r : { default: r };
        },
        77190: function (t, e) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            e.default = void 0;
            
            var n = function (t, e, n, r) {
                for (var a = [], o = 0; o < n.length; o++) {
                    a[o] = n[o];
                }
                for (var i = 0; i < t.length; i++) {
                    void 0 === r[t[i]] && a.push(t[i]);
                }
                return a.sort(function (t, a) {
                    var o = r[t], i = r[a], l = e[t], s = e[a];
                    if (null != o && null != i) {
                        return r[t] - r[a];
                    }
                    if (null != l && null != s) {
                        return e[t] - e[a];
                    }
                    if (null != o) {
                        for (var c = 0; c < n.length; c++) {
                            var u = n[c];
                            if (e[u]) {
                                if (o < r[u] && s > e[u]) {
                                    return -1;
                                }
                                if (o > r[u] && s < e[u]) {
                                    return 1;
                                }
                            }
                        }
                        return 1;
                    }
                    for (var f = 0; f < n.length; f++) {
                        var p = n[f];
                        if (e[p]) {
                            if (i < r[p] && l > e[p]) {
                                return 1;
                            }
                            if (i > r[p] && l < e[p]) {
                                return -1;
                            }
                        }
                    }
                    return -1;
                });
            };
            e.default = n;
        },
        32957: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            Object.defineProperty(e, 'transition', {
                enumerable: true,
                get: function () {
                    return r.default;
                }
            });
            Object.defineProperty(e, 'stop', {
                enumerable: true,
                get: function () {
                    return a.default;
                }
            });
            
            var r = o(n(11189)), a = o(n(42190));
            function o(t) {
                return t && t.__esModule ? t : { default: t };
            }
        },
        57059: function (t, e, n) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            e.default = function (t, e, n, r, o) {
                var l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, s = t.TRANSITION_SCHEDULES;
                if (s) {
                    if (n in s) {
                        return;
                    }
                } else {
                    t.TRANSITION_SCHEDULES = {};
                }
                var c = a({
                    stateKey: e,
                    events: l,
                    tweens: o
                }, r, {
                    timer: null,
                    state: 0
                });
                i(t, n, c);
            };
            
            var r = n(2852);
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {}, r = Object.keys(n);
                    'function' === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable;
                    })));
                    r.forEach(function (e) {
                        o(t, e, n[e]);
                    });
                    
                }
                return t;
            }
            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : t[e] = n, t;
            }
            function i(t, e, n) {
                var o = t.TRANSITION_SCHEDULES, i = a({}, n), l = i.tweens.length, s = new Array(l);
                function c(n) {
                    if (1 !== i.state) {
                        return f();
                    }
                    for (var a in o) {
                        var p = o[a];
                        if (p.stateKey === i.stateKey) {
                            if (3 === p.state) {
                                return (0, r.timeout)(c);
                            }
                            4 === p.state ? (p.state = 6, p.timer.stop(), p.events.interrupt && 'function' === typeof p.events.interrupt && p.events.interrupt.call(this), delete o[a]) : +a < e && (p.state = 6, p.timer.stop(), delete o[a]);
                        }
                    }
                    if ((0, r.timeout)(function () {
                            if (3 === i.state) {
                                i.state = 4;
                                i.timer.restart(u, i.delay, i.time);
                                u(n);
                            }
                        }), i.state = 2, i.events.start && 'function' === typeof i.events.start && i.events.start.call(t), 2 === i.state) {
                        i.state = 3;
                        for (var h = -1, d = 0; d < l; ++d) {
                            var v = i.tweens[d].call(t);
                            v && (s[++h] = v);
                        }
                        s.length = h + 1;
                    }
                }
                function u(e) {
                    var n = 1;
                    e < i.duration ? n = i.ease.call(null, e / i.duration) : (i.timer.restart(f), i.state = 5);
                    for (var r = -1; ++r < s.length;) {
                        s[r].call(null, n);
                    }
                    if (5 === i.state) {
                        i.events.end && 'function' === typeof i.events.end && i.events.end.call(t);
                        f();
                    }
                }
                function f() {
                    for (var n in (i.state = 6, i.timer.stop(), delete o[e], o))
                        return;
                    delete t.TRANSITION_SCHEDULES;
                }
                o[e] = i;
                i.timer = (0, r.timer)(function (t) {
                    i.state = 1;
                    i.timer.restart(c, i.delay, i.time);
                    i.delay <= t && c(t - i.delay);
                    
                }, 0, i.time);
                
            }
        },
        42190: function (t, e) {
            'use strict';
            Object.defineProperty(e, '__esModule', { value: true });
            e.default = function () {
                var t = this.TRANSITION_SCHEDULES;
                t && Object.keys(t).forEach(function (e) {
                    t[e].timer.stop();
                });
            };
         