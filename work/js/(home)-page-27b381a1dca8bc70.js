(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [608],
  {
    14514: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 63236, 23)),
        Promise.resolve().then(n.bind(n, 63426)),
        Promise.resolve().then(n.bind(n, 84036)),
        Promise.resolve().then(n.bind(n, 69679)),
        Promise.resolve().then(n.bind(n, 11908)),
        Promise.resolve().then(n.bind(n, 90226)),
        Promise.resolve().then(n.bind(n, 26388)),
        Promise.resolve().then(n.bind(n, 30239)),
        Promise.resolve().then(n.bind(n, 6975)),
        Promise.resolve().then(n.bind(n, 89461)),
        Promise.resolve().then(n.bind(n, 75962)),
        Promise.resolve().then(n.bind(n, 5783)),
        Promise.resolve().then(n.bind(n, 40861)),
        Promise.resolve().then(n.t.bind(n, 67905, 23)),
        Promise.resolve().then(n.t.bind(n, 24627, 23)),
        Promise.resolve().then(n.bind(n, 49450)),
        Promise.resolve().then(n.bind(n, 78201)),
        Promise.resolve().then(n.t.bind(n, 70675, 23)),
        Promise.resolve().then(n.t.bind(n, 4723, 23)),
        Promise.resolve().then(n.bind(n, 59120)),
        Promise.resolve().then(n.bind(n, 25327)),
        Promise.resolve().then(n.bind(n, 22194)),
        Promise.resolve().then(n.t.bind(n, 87836, 23)),
        Promise.resolve().then(n.bind(n, 45840)),
        Promise.resolve().then(n.bind(n, 37283)),
        Promise.resolve().then(n.t.bind(n, 72746, 23)),
        Promise.resolve().then(n.bind(n, 65255)),
        Promise.resolve().then(n.bind(n, 51473)),
        Promise.resolve().then(n.bind(n, 23560)),
        Promise.resolve().then(n.t.bind(n, 24566, 23)),
        Promise.resolve().then(n.t.bind(n, 57142, 23)),
        Promise.resolve().then(n.t.bind(n, 11141, 23)),
        Promise.resolve().then(n.t.bind(n, 12342, 23)),
        Promise.resolve().then(n.t.bind(n, 80868, 23)),
        Promise.resolve().then(n.bind(n, 14233)),
        Promise.resolve().then(n.t.bind(n, 17039, 23)),
        Promise.resolve().then(n.bind(n, 47855));
    },
    6975: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(66203),
        a = n(37145),
        o = n.n(a);
      function c(e) {
        let { src: t, layout: n = "fill" } = e,
          a = (0, r.useRef)(null),
          [c, l] = (0, r.useState)(!1),
          d = o()[n];
        return (
          (0, r.useEffect)(() => {
            let e = new IntersectionObserver(
              (e) => {
                e[0].isIntersecting
                  ? (c || l(!0), a.current && a.current.play())
                  : a.current && a.current.pause();
              },
              { root: null, rootMargin: "0px", threshold: 0.1 }
            );
            return (
              a.current && e.observe(a.current),
              () => {
                a.current && e.unobserve(a.current);
              }
            );
          }, [c]),
          (0, i.jsx)("span", {
            className: (0, s.cn)(o().video, d),
            children: (0, i.jsx)("video", {
              ref: a,
              loop: !0,
              muted: !0,
              playsInline: !0,
              controls: !1,
              children:
                c && (0, i.jsx)("source", { src: t, type: "video/mp4" }),
            }),
          })
        );
      }
    },
    89461: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(34802),
        a = n.n(s),
        o = n(66203),
        c = n(75962),
        l = n(71947);
      function d(e) {
        let {
            href: t,
            text: n,
            type: s,
            color: d = "black",
            target: u = "",
            direction: _ = "forwards",
          } = e,
          p = (0, r.useRef)(null),
          m = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("span", {
              className: a().text,
              children: [
                (0, i.jsx)("span", {
                  className: a().textInner,
                  dangerouslySetInnerHTML: { __html: n },
                }),
                (0, i.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 17.1 15.17",
                  className: a().buttonArrow,
                  children: (0, i.jsx)("path", {
                    d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                    fill: "currentColor",
                  }),
                }),
              ],
            }),
          }),
          h = a()[d];
        return (() => {
          switch (s) {
            case "a-internal":
              return (0, i.jsx)(l.default, {
                children: (0, i.jsx)("div", {
                  className: (0, o.cn)(a().button, h),
                  ref: p,
                  "data-direction": _,
                  children: (0, i.jsxs)(c.default, {
                    href: t,
                    className: a().inner,
                    children: [
                      (0, i.jsx)("span", { className: a().border }),
                      m,
                    ],
                  }),
                }),
              });
            case "a-external":
              return (0, i.jsx)(l.default, {
                children: (0, i.jsx)("div", {
                  className: (0, o.cn)(a().button, h),
                  ref: p,
                  "data-direction": _,
                  children: (0, i.jsxs)("a", {
                    href: t,
                    className: a().inner,
                    target: u,
                    children: [
                      (0, i.jsx)("span", { className: a().border }),
                      m,
                    ],
                  }),
                }),
              });
            default:
              return (0, i.jsx)(l.default, {
                children: (0, i.jsx)("button", {
                  className: (0, o.cn)(a().button, h),
                  ref: p,
                  "data-direction": _,
                  children: (0, i.jsxs)("div", {
                    className: a().inner,
                    children: [
                      (0, i.jsx)("span", { className: a().border }),
                      m,
                    ],
                  }),
                }),
              });
          }
        })();
      }
    },
    75962: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n(3827),
        r = n(56014),
        s = n(8792),
        a = n(64090),
        o = n(47907);
      function c(e) {
        let { href: t, children: n, onClick: c, className: l, ...d } = e,
          { goToRoute: u } = (0, r.useNavigationContext)(),
          { setLoading: _ } = (0, r.useNavigationContext)(),
          p = (0, o.usePathname)();
        return (
          (0, a.useLayoutEffect)(() => {
            _(r.LOADING_STATES.LOADED);
          }, [p]),
          (0, i.jsx)(s.default, {
            prefetch: !0,
            passHref: !0,
            href: t,
            legacyBehavior: !0,
            children: (0, i.jsx)("a", {
              onClick: (e) => {
                let n = new URL(t, window.location.href),
                  i = n.pathname.endsWith("/")
                    ? n.pathname.slice(0, -1)
                    : n.pathname,
                  r = p.endsWith("/") ? p.slice(0, -1) : p;
                e.preventDefault(), c && c(), i !== r && u(t);
              },
              className: l,
              ...d,
              children: n,
            }),
          })
        );
      }
    },
    5783: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(91578),
        c = n.n(o);
      function l() {
        let e = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.ic.create({
              trigger: e.current,
              start: "top-=1 top",
              end: "bottom top",
              onEnter: () => {
                document.documentElement.style.setProperty(
                  "--theme-primary",
                  "#fff"
                ),
                  document.documentElement.style.setProperty(
                    "--theme-secondary",
                    "#000"
                  );
              },
              onEnterBack: () => {
                document.documentElement.style.setProperty(
                  "--theme-primary",
                  "#fff"
                ),
                  document.documentElement.style.setProperty(
                    "--theme-secondary",
                    "#000"
                  );
              },
              onLeave: () => {
                document.documentElement.style.setProperty(
                  "--theme-primary",
                  "#000"
                ),
                  document.documentElement.style.setProperty(
                    "--theme-secondary",
                    "#fff"
                  );
              },
              onLeaveBack: () => {
                document.documentElement.style.setProperty(
                  "--theme-primary",
                  "#000"
                ),
                  document.documentElement.style.setProperty(
                    "--theme-secondary",
                    "#fff"
                  );
              },
            });
          }),
          (0, i.jsx)("div", { className: c().cover, ref: e })
        );
      }
    },
    40861: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(75962),
        a = n(49908),
        o = n(11984),
        c = n(69162),
        l = n.n(c);
      function d() {
        let e = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            let t = window.innerHeight;
            o.p8.to(e.current, {
              opacity: 1,
              scrollTrigger: {
                trigger: document.body,
                start: "top+=".concat(t / 2, " top"),
                end: "bottom bottom",
                toggleActions: "play reverse play reverse",
              },
              ease: "power3.out",
              duration: 0.3,
            });
          }),
          (0, i.jsx)("div", {
            className: l().linkContainer,
            ref: e,
            children: (0, i.jsx)(s.default, {
              className: l().button,
              href: "/start-your-project",
              children: (0, i.jsxs)("span", {
                className: l().text,
                children: [
                  (0, i.jsx)("span", {
                    className: l().textInner,
                    children: "Start your project",
                  }),
                  (0, i.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 17.1 15.17",
                    className: l().buttonArrow,
                    children: (0, i.jsx)("path", {
                      d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                      fill: "currentColor",
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
    },
    23560: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n(3827),
        r = n(64090);
      n(61374);
      var s = n(66203),
        a = n(38715),
        o = n.n(a);
      function c(e) {
        var t, n, a, c;
        let {
          image: l,
          sizes: d = "100vw",
          lazy: u = !0,
          priority: _ = "low",
          layout: p = "fill",
        } = e;
        if (!l) return null;
        let m = o()[p];
        return (
          (0, r.useEffect)(() => {
            window.lazySizes &&
              "function" == typeof window.lazySizes.update &&
              window.lazySizes.update();
          }, [l]),
          (0, i.jsxs)("span", {
            className: (0, s.cn)(o().image, m),
            children: [
              u &&
                (0, i.jsx)("img", {
                  "data-srcset": l.srcSet || "",
                  "data-src": l.sourceUrl || "",
                  alt: l.altText || "",
                  fetchPriority: _,
                  height:
                    (null == l
                      ? void 0
                      : null === (t = l.mediaDetails) || void 0 === t
                      ? void 0
                      : t.height) || "",
                  width:
                    (null == l
                      ? void 0
                      : null === (n = l.mediaDetails) || void 0 === n
                      ? void 0
                      : n.width) || "",
                  sizes: "auto",
                  className: "lazyload",
                }),
              !u &&
                (0, i.jsx)("img", {
                  srcSet: l.srcSet || "",
                  src: l.sourceUrl || "",
                  alt: l.altText || "",
                  loading: "eager",
                  fetchPriority: _,
                  height:
                    (null == l
                      ? void 0
                      : null === (a = l.mediaDetails) || void 0 === a
                      ? void 0
                      : a.height) || "",
                  width:
                    (null == l
                      ? void 0
                      : null === (c = l.mediaDetails) || void 0 === c
                      ? void 0
                      : c.width) || "",
                  sizes: d,
                }),
            ],
          })
        );
      }
    },
    14233: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(3827),
        r = n(64090),
        s = n(86582),
        a = n.n(s);
      t.default = (e) => {
        let { children: t } = e,
          n = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = null,
              t = n.current;
            return (
              t &&
                (e = new IntersectionObserver((e) => {
                  e.forEach((e) => {
                    e.target.querySelectorAll(".inner").forEach((t) => {
                      e.isIntersecting
                        ? (t.style.animationPlayState = "running")
                        : (t.style.animationPlayState = "paused");
                    });
                  });
                })).observe(t),
              () => {
                e && e.disconnect(),
                  t &&
                    t.querySelectorAll(".inner").forEach((e) => {
                      e.style.animationPlayState = "initial";
                    });
              }
            );
          }, []),
          (0, i.jsxs)("div", {
            ref: n,
            className: a().marquee,
            children: [
              (0, i.jsx)("div", { className: a().inner, children: t }),
              (0, i.jsx)("div", { className: a().inner, children: t }),
            ],
          })
        );
      };
    },
    63426: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(71605),
        c = n.n(o);
      function l(e) {
        let { children: t } = e,
          n = (0, r.useRef)(null);
        return (
          (0, a.V)(
            () => {
              s.p8.matchMedia().add("(min-width: 850px)", () => {
                s.ic.batch('[data-animation="grid-item"]', {
                  onEnter: (e) =>
                    s.p8.to(e, {
                      opacity: 1,
                      y: 0,
                      ease: "power1.out",
                      duration: 1,
                      stagger: 0.15,
                    }),
                });
              });
            },
            { scope: n }
          ),
          (0, i.jsx)("div", { className: c().grid, ref: n, children: t })
        );
      }
    },
    84036: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(39476),
        c = n.n(o);
      function l(e) {
        let { children: t, fill: n = !1, duration: o = 0.75, delay: l = 0 } = e,
          d = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(d.current, {
                opacity: 1,
                scrollTrigger: {
                  trigger: d.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: "none",
                duration: o,
                delay: l,
              });
            });
          }),
          (0, i.jsx)("span", {
            className: c().container,
            "data-fill": n,
            ref: d,
            children: t,
          })
        );
      }
    },
    69679: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(64454),
        c = n.n(o);
      function l(e) {
        let {
            children: t,
            fill: n = !1,
            duration: o = 0.75,
            delay: l = 0,
            direction: d = "counterclockwise",
          } = e,
          u = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(u.current, {
                opacity: 1,
                rotate: 0,
                scrollTrigger: {
                  trigger: u.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: "power4.out",
                duration: o,
                delay: l,
              });
            });
          }),
          (0, i.jsx)("span", {
            className: c().container,
            "data-fill": n,
            "data-direction": d,
            ref: u,
            children: t,
          })
        );
      }
    },
    11908: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(4969),
        c = n.n(o);
      function l(e) {
        let { children: t, fill: n = !1, duration: o = 1.5, delay: l = 0 } = e,
          d = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(d.current, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                  trigger: d.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: "power1.out",
                duration: o,
                delay: l,
              });
            });
          }),
          (0, i.jsx)("span", {
            className: c().container,
            "data-fill": n,
            ref: d,
            children: t,
          })
        );
      }
    },
    90226: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(94863),
        c = n.n(o);
      function l(e) {
        let { children: t, fill: n = !1, duration: o = 0.3, delay: l = 0 } = e,
          d = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(d.current, {
                color: "#000000",
                ease: "none",
                duration: o,
                delay: l,
              });
            });
          }),
          (0, i.jsx)("span", {
            className: c().container,
            "data-fill": n,
            ref: d,
            children: t,
          })
        );
      }
    },
    26388: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(96980),
        c = n.n(o);
      function l(e) {
        let { children: t } = e,
          n = (0, r.useRef)(null);
        return (
          (0, a.V)(
            () => {
              s.p8.matchMedia().add("(min-width: 850px)", () => {
                new s.C2("span", {
                  type: "lines,words,chars",
                  linesClass: "split-line",
                  charsClass: "split-char",
                  wordsClass: "split-word",
                }),
                  s.ic.create({
                    trigger: n.current,
                    start: "top bottom",
                    end: "bottom top",
                    onEnter: (e) => {
                      let t = s.p8.utils.toArray(".split-word");
                      0 !== t.length &&
                        t.forEach((e) => {
                          let t = s.p8.utils.toArray(
                            e.querySelectorAll(".split-char")
                          );
                          s.p8.to(t, {
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            duration: 1,
                            ease: "power3.out",
                          });
                        });
                    },
                  });
              });
            },
            { scope: n }
          ),
          (0, i.jsx)("div", {
            className: c().headingOuter,
            ref: n,
            children: t,
          })
        );
      }
    },
    71947: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return c;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(3568),
        o = n.n(a);
      function c(e) {
        let { children: t, fill: n = !1 } = e,
          a = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            if (null === a.current || window.innerWidth < 850) return;
            let e = s.p8.quickTo(a.current, "x", {
                duration: 0.5,
                ease: "power3.out",
              }),
              t = s.p8.quickTo(a.current, "y", {
                duration: 0.5,
                ease: "power3.out",
              }),
              n = (n) => {
                if (!a.current) return;
                let { clientX: i, clientY: r } = n,
                  {
                    height: s,
                    width: o,
                    left: c,
                    top: l,
                  } = a.current.getBoundingClientRect(),
                  d = i - (c + o / 2),
                  u = r - (l + s / 2);
                (u *= 0.5), e((d *= 0.5)), t(u);
              },
              i = () => {
                e(0), t(0);
              };
            return (
              a.current.addEventListener("mousemove", n),
              a.current.addEventListener("mouseleave", i),
              () => {
                null !== a.current &&
                  (a.current.removeEventListener("mousemove", n),
                  a.current.removeEventListener("mouseleave", i));
              }
            );
          }, []),
          (0, i.jsx)("div", {
            className: o().magnetic,
            "data-fill": n,
            ref: a,
            children: t,
          })
        );
      }
    },
    30239: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(28634),
        c = n.n(o);
      function l(e) {
        let { children: t, fill: n = !1, strength: o = 5 } = e,
          l = (0, r.useRef)(null),
          d = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.fromTo(
                d.current,
                { yPercent: "-".concat(o) },
                {
                  yPercent: o,
                  ease: "linear",
                  scrollTrigger: { trigger: l.current, scrub: !0 },
                }
              );
            });
          }),
          (0, i.jsx)("span", {
            className: c().container,
            "data-fill": n,
            ref: l,
            children: (0, i.jsx)("span", {
              className: c().containerInner,
              "data-fill": n,
              ref: d,
              children: t,
            }),
          })
        );
      }
    },
    71359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(69655),
        c = n.n(o);
      function l(e) {
        let { children: t, fill: n = !1, duration: o = 0.5, delay: l = 0 } = e,
          d = (0, r.useRef)(null),
          u = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(d.current, {
                scale: 1,
                scrollTrigger: {
                  trigger: d.current,
                  start: "top bottom",
                  end: "bottom top",
                },
                ease: s.t_.create(
                  "custom",
                  "M0,0 C0,0 0.03,0.285 0.062,0.42 0.094,0.555 0.115,0.589 0.14,0.654 0.163,0.714 0.199,0.826 0.227,0.873 0.25,0.914 0.295,0.983 0.322,1.01 0.346,1.034 0.394,1.08 0.444,1.08 0.549,1.08 0.597,0.939 0.67,0.939 0.782,0.917 1,1 1,1 "
                ),
                duration: o,
                delay: l,
              }),
                s.p8.to(u.current, {
                  opacity: 1,
                  scrollTrigger: {
                    trigger: d.current,
                    start: "top bottom",
                    end: "bottom top",
                  },
                  ease: "none",
                  duration: o / 2,
                  delay: l,
                });
            });
          }),
          (0, i.jsx)("span", {
            className: c().container,
            "data-fill": n,
            ref: d,
            children: (0, i.jsx)("span", {
              className: c().inner,
              "data-fill": n,
              ref: u,
              children: t,
            }),
          })
        );
      }
    },
    49450: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(11908),
        c = n(25648),
        l = n.n(c);
      function d(e) {
        let { data: t } = e;
        if (!t) return null;
        let n = (0, r.useRef)(null);
        return (
          (0, a.V)(
            () => {
              s.p8.matchMedia().add("(min-width: 850px)", () => {
                s.p8.utils.toArray("em").forEach((e, t) => {
                  s.p8.fromTo(
                    e,
                    { "--clipEnd": "0%" },
                    {
                      "--clipEnd": "100%",
                      delay: 0.25 * t,
                      scrollTrigger: {
                        trigger: e,
                        start: "bottom+=25% bottom",
                        end: "center center",
                      },
                    }
                  );
                });
              });
            },
            { scope: n }
          ),
          (0, i.jsx)("h2", {
            className: l().heading,
            ref: n,
            children: (0, i.jsx)(o.default, {
              children: (0, i.jsx)("span", {
                dangerouslySetInnerHTML: { __html: t || "" },
              }),
            }),
          })
        );
      }
    },
    78201: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return tn;
          },
        });
      var i,
        r,
        s,
        a,
        o,
        c,
        l,
        d,
        u,
        _,
        p,
        m,
        h,
        A,
        I,
        g,
        f,
        E,
        v,
        N,
        x,
        P,
        T,
        O,
        M,
        S,
        D,
        C,
        b,
        L,
        R,
        y,
        w,
        j,
        V,
        U,
        B,
        F,
        k,
        H,
        X,
        G,
        W,
        z,
        q,
        Z,
        Y,
        Q,
        K,
        J,
        $,
        ee,
        et,
        en,
        ei,
        er,
        es,
        ea,
        eo,
        ec,
        el,
        ed,
        eu,
        e_,
        ep,
        em,
        eh,
        eA,
        eI,
        eg,
        ef,
        eE,
        ev,
        eN,
        ex,
        eP,
        eT,
        eO,
        eM,
        eS,
        eD,
        eC,
        eb,
        eL,
        eR,
        ey,
        ew,
        ej,
        eV,
        eU,
        eB,
        eF,
        ek,
        eH,
        eX,
        eG,
        eW,
        ez,
        eq = n(3827),
        eZ = n(64090),
        eY = n(11984),
        eQ = n(49908),
        eK = n(24627),
        eJ = n.n(eK);
      ((i = Q || (Q = {})).DatabaseId = "DATABASE_ID"),
        (i.Id = "ID"),
        (i.Slug = "SLUG"),
        (i.Uri = "URI"),
        ((r = K || (K = {})).G = "G"),
        (r.Pg = "PG"),
        (r.R = "R"),
        (r.X = "X"),
        ((s = J || (J = {})).DatabaseId = "DATABASE_ID"),
        (s.Id = "ID"),
        (s.Name = "NAME"),
        (s.Slug = "SLUG"),
        (s.Uri = "URI"),
        ((a = $ || ($ = {})).DatabaseId = "DATABASE_ID"),
        (a.Id = "ID"),
        (a.Slug = "SLUG"),
        (a.Uri = "URI"),
        ((o = ee || (ee = {})).DatabaseId = "DATABASE_ID"),
        (o.Id = "ID"),
        (o.Name = "NAME"),
        (o.Slug = "SLUG"),
        (o.Uri = "URI"),
        ((c = et || (et = {})).DatabaseId = "DATABASE_ID"),
        (c.Id = "ID"),
        ((l = en || (en = {})).Approve = "APPROVE"),
        (l.Hold = "HOLD"),
        (l.Spam = "SPAM"),
        (l.Trash = "TRASH"),
        ((d = ei || (ei = {})).CommentAgent = "COMMENT_AGENT"),
        (d.CommentApproved = "COMMENT_APPROVED"),
        (d.CommentAuthor = "COMMENT_AUTHOR"),
        (d.CommentAuthorEmail = "COMMENT_AUTHOR_EMAIL"),
        (d.CommentAuthorIp = "COMMENT_AUTHOR_IP"),
        (d.CommentAuthorUrl = "COMMENT_AUTHOR_URL"),
        (d.CommentContent = "COMMENT_CONTENT"),
        (d.CommentDate = "COMMENT_DATE"),
        (d.CommentDateGmt = "COMMENT_DATE_GMT"),
        (d.CommentId = "COMMENT_ID"),
        (d.CommentIn = "COMMENT_IN"),
        (d.CommentKarma = "COMMENT_KARMA"),
        (d.CommentParent = "COMMENT_PARENT"),
        (d.CommentPostId = "COMMENT_POST_ID"),
        (d.CommentType = "COMMENT_TYPE"),
        (d.UserId = "USER_ID"),
        ((u = er || (er = {})).DatabaseId = "DATABASE_ID"),
        (u.Id = "ID"),
        (u.Uri = "URI"),
        ((_ = es || (es = {})).Attachment = "ATTACHMENT"),
        (_.Author = "AUTHOR"),
        (_.Blog = "BLOG"),
        (_.Landing = "LANDING"),
        (_.Page = "PAGE"),
        (_.Post = "POST"),
        (_.Project = "PROJECT"),
        (_.Service = "SERVICE"),
        ((p = ea || (ea = {})).Id = "ID"),
        (p.Name = "NAME"),
        ((eo || (eo = {})).Post = "POST"),
        ((m = ec || (ec = {})).Blog = "BLOG"),
        (m.Post = "POST"),
        ((el || (el = {})).Post = "POST"),
        ((ed || (ed = {})).Project = "PROJECT"),
        ((eu || (eu = {})).Project = "PROJECT"),
        ((h = e_ || (e_ = {})).DatabaseId = "DATABASE_ID"),
        (h.Id = "ID"),
        (h.Uri = "URI"),
        ((A = ep || (ep = {})).DatabaseId = "DATABASE_ID"),
        (A.Id = "ID"),
        (A.Slug = "SLUG"),
        (A.SourceUrl = "SOURCE_URL"),
        (A.Uri = "URI"),
        ((I = em || (em = {})).Large = "LARGE"),
        (I.Medium = "MEDIUM"),
        (I.MediumLarge = "MEDIUM_LARGE"),
        (I.Qhd = "QHD"),
        (I.Thumbnail = "THUMBNAIL"),
        (I["1536X1536"] = "_1536X1536"),
        (I["2048X2048"] = "_2048X2048"),
        ((g = eh || (eh = {})).AutoDraft = "AUTO_DRAFT"),
        (g.Inherit = "INHERIT"),
        (g.Private = "PRIVATE"),
        (g.Trash = "TRASH"),
        ((f = eA || (eA = {})).DatabaseId = "DATABASE_ID"),
        (f.Id = "ID"),
        ((E = eI || (eI = {})).FooterNavigation = "FOOTER_NAVIGATION"),
        (E.PrimaryNavigation = "PRIMARY_NAVIGATION"),
        ((v = eg || (eg = {})).DatabaseId = "DATABASE_ID"),
        (v.Id = "ID"),
        (v.Location = "LOCATION"),
        (v.Name = "NAME"),
        (v.Slug = "SLUG"),
        ((N = ef || (ef = {})).ApplicationJava = "APPLICATION_JAVA"),
        (N.ApplicationMsword = "APPLICATION_MSWORD"),
        (N.ApplicationOctetStream = "APPLICATION_OCTET_STREAM"),
        (N.ApplicationOnenote = "APPLICATION_ONENOTE"),
        (N.ApplicationOxps = "APPLICATION_OXPS"),
        (N.ApplicationPdf = "APPLICATION_PDF"),
        (N.ApplicationRar = "APPLICATION_RAR"),
        (N.ApplicationRtf = "APPLICATION_RTF"),
        (N.ApplicationTtafXml = "APPLICATION_TTAF_XML"),
        (N.ApplicationVndAppleKeynote = "APPLICATION_VND_APPLE_KEYNOTE"),
        (N.ApplicationVndAppleNumbers = "APPLICATION_VND_APPLE_NUMBERS"),
        (N.ApplicationVndApplePages = "APPLICATION_VND_APPLE_PAGES"),
        (N.ApplicationVndMsAccess = "APPLICATION_VND_MS_ACCESS"),
        (N.ApplicationVndMsExcel = "APPLICATION_VND_MS_EXCEL"),
        (N.ApplicationVndMsExcelAddinMacroenabled_12 =
          "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12"),
        (N.ApplicationVndMsExcelSheetBinaryMacroenabled_12 =
          "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12"),
        (N.ApplicationVndMsExcelSheetMacroenabled_12 =
          "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12"),
        (N.ApplicationVndMsExcelTemplateMacroenabled_12 =
          "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12"),
        (N.ApplicationVndMsPowerpoint = "APPLICATION_VND_MS_POWERPOINT"),
        (N.ApplicationVndMsPowerpointAddinMacroenabled_12 =
          "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12"),
        (N.ApplicationVndMsPowerpointPresentationMacroenabled_12 =
          "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12"),
        (N.ApplicationVndMsPowerpointSlideshowMacroenabled_12 =
          "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12"),
        (N.ApplicationVndMsPowerpointSlideMacroenabled_12 =
          "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12"),
        (N.ApplicationVndMsPowerpointTemplateMacroenabled_12 =
          "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12"),
        (N.ApplicationVndMsProject = "APPLICATION_VND_MS_PROJECT"),
        (N.ApplicationVndMsWordDocumentMacroenabled_12 =
          "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12"),
        (N.ApplicationVndMsWordTemplateMacroenabled_12 =
          "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12"),
        (N.ApplicationVndMsWrite = "APPLICATION_VND_MS_WRITE"),
        (N.ApplicationVndMsXpsdocument = "APPLICATION_VND_MS_XPSDOCUMENT"),
        (N.ApplicationVndOasisOpendocumentChart =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART"),
        (N.ApplicationVndOasisOpendocumentDatabase =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE"),
        (N.ApplicationVndOasisOpendocumentFormula =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA"),
        (N.ApplicationVndOasisOpendocumentGraphics =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS"),
        (N.ApplicationVndOasisOpendocumentPresentation =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION"),
        (N.ApplicationVndOasisOpendocumentSpreadsheet =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET"),
        (N.ApplicationVndOasisOpendocumentText =
          "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"),
        (N.ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate =
          "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE"),
        (N.ApplicationWordperfect = "APPLICATION_WORDPERFECT"),
        (N.ApplicationX_7ZCompressed = "APPLICATION_X_7Z_COMPRESSED"),
        (N.ApplicationXGzip = "APPLICATION_X_GZIP"),
        (N.ApplicationXTar = "APPLICATION_X_TAR"),
        (N.ApplicationZip = "APPLICATION_ZIP"),
        (N.AudioAac = "AUDIO_AAC"),
        (N.AudioFlac = "AUDIO_FLAC"),
        (N.AudioMidi = "AUDIO_MIDI"),
        (N.AudioMpeg = "AUDIO_MPEG"),
        (N.AudioOgg = "AUDIO_OGG"),
        (N.AudioWav = "AUDIO_WAV"),
        (N.AudioXMatroska = "AUDIO_X_MATROSKA"),
        (N.AudioXMsWax = "AUDIO_X_MS_WAX"),
        (N.AudioXMsWma = "AUDIO_X_MS_WMA"),
        (N.AudioXRealaudio = "AUDIO_X_REALAUDIO"),
        (N.ImageBmp = "IMAGE_BMP"),
        (N.ImageGif = "IMAGE_GIF"),
        (N.ImageHeic = "IMAGE_HEIC"),
        (N.ImageJpeg = "IMAGE_JPEG"),
        (N.ImagePng = "IMAGE_PNG"),
        (N.ImageTiff = "IMAGE_TIFF"),
        (N.ImageWebp = "IMAGE_WEBP"),
        (N.ImageXIcon = "IMAGE_X_ICON"),
        (N.TextCalendar = "TEXT_CALENDAR"),
        (N.TextCss = "TEXT_CSS"),
        (N.TextCsv = "TEXT_CSV"),
        (N.TextPlain = "TEXT_PLAIN"),
        (N.TextRichtext = "TEXT_RICHTEXT"),
        (N.TextTabSeparatedValues = "TEXT_TAB_SEPARATED_VALUES"),
        (N.TextVtt = "TEXT_VTT"),
        (N.Video_3Gpp = "VIDEO_3GPP"),
        (N.Video_3Gpp2 = "VIDEO_3GPP2"),
        (N.VideoAvi = "VIDEO_AVI"),
        (N.VideoDivx = "VIDEO_DIVX"),
        (N.VideoMp4 = "VIDEO_MP4"),
        (N.VideoMpeg = "VIDEO_MPEG"),
        (N.VideoOgg = "VIDEO_OGG"),
        (N.VideoQuicktime = "VIDEO_QUICKTIME"),
        (N.VideoWebm = "VIDEO_WEBM"),
        (N.VideoXFlv = "VIDEO_X_FLV"),
        (N.VideoXMatroska = "VIDEO_X_MATROSKA"),
        (N.VideoXMsAsf = "VIDEO_X_MS_ASF"),
        (N.VideoXMsWm = "VIDEO_X_MS_WM"),
        (N.VideoXMsWmv = "VIDEO_X_MS_WMV"),
        (N.VideoXMsWmx = "VIDEO_X_MS_WMX"),
        ((x = eE || (eE = {})).Asc = "ASC"),
        (x.Desc = "DESC"),
        ((P = ev || (ev = {})).DatabaseId = "DATABASE_ID"),
        (P.Id = "ID"),
        (P.Uri = "URI"),
        ((T = eN || (eN = {})).Active = "ACTIVE"),
        (T.DropIn = "DROP_IN"),
        (T.Inactive = "INACTIVE"),
        (T.MustUse = "MUST_USE"),
        (T.Paused = "PAUSED"),
        (T.RecentlyActive = "RECENTLY_ACTIVE"),
        (T.Upgrade = "UPGRADE"),
        ((O = ex || (ex = {})).DatabaseId = "DATABASE_ID"),
        (O.Id = "ID"),
        (O.Name = "NAME"),
        (O.Slug = "SLUG"),
        (O.Uri = "URI"),
        ((M = eP || (eP = {})).DatabaseId = "DATABASE_ID"),
        (M.Id = "ID"),
        (M.Slug = "SLUG"),
        (M.Uri = "URI"),
        ((S = eT || (eT = {})).Raw = "RAW"),
        (S.Rendered = "RENDERED"),
        ((D = eO || (eO = {})).Date = "DATE"),
        (D.Modified = "MODIFIED"),
        ((C = eM || (eM = {})).Author = "AUTHOR"),
        (C.CommentCount = "COMMENT_COUNT"),
        (C.Date = "DATE"),
        (C.In = "IN"),
        (C.MenuOrder = "MENU_ORDER"),
        (C.Modified = "MODIFIED"),
        (C.NameIn = "NAME_IN"),
        (C.Parent = "PARENT"),
        (C.Slug = "SLUG"),
        (C.Title = "TITLE"),
        ((b = eS || (eS = {})).AcfDisabled = "ACF_DISABLED"),
        (b.AutoDraft = "AUTO_DRAFT"),
        (b.Draft = "DRAFT"),
        (b.Future = "FUTURE"),
        (b.Inherit = "INHERIT"),
        (b.Pending = "PENDING"),
        (b.Private = "PRIVATE"),
        (b.Publish = "PUBLISH"),
        (b.RequestCompleted = "REQUEST_COMPLETED"),
        (b.RequestConfirmed = "REQUEST_CONFIRMED"),
        (b.RequestFailed = "REQUEST_FAILED"),
        (b.RequestPending = "REQUEST_PENDING"),
        (b.Trash = "TRASH"),
        ((L = eD || (eD = {})).DatabaseId = "DATABASE_ID"),
        (L.Id = "ID"),
        (L.Slug = "SLUG"),
        (L.Uri = "URI"),
        ((R = eC || (eC = {})).And = "AND"),
        (R.Or = "OR"),
        ((y = eb || (eb = {})).Summary = "summary"),
        (y.SummaryLargeImage = "summary_large_image"),
        ((w = eL || (eL = {})).Async = "ASYNC"),
        (w.Defer = "DEFER"),
        ((j = eR || (eR = {})).DatabaseId = "DATABASE_ID"),
        (j.Id = "ID"),
        (j.Uri = "URI"),
        ((V = ey || (ey = {})).DatabaseId = "DATABASE_ID"),
        (V.Id = "ID"),
        (V.Name = "NAME"),
        (V.Slug = "SLUG"),
        (V.Uri = "URI"),
        ((U = ew || (ew = {})).Id = "ID"),
        (U.Name = "NAME"),
        (U.Slug = "SLUG"),
        (U.TaxonomyId = "TAXONOMY_ID"),
        ((B = ej || (ej = {})).And = "AND"),
        (B.Exists = "EXISTS"),
        (B.In = "IN"),
        (B.NotExists = "NOT_EXISTS"),
        (B.NotIn = "NOT_IN"),
        ((F = eV || (eV = {})).Blogfilter = "BLOGFILTER"),
        (F.Category = "CATEGORY"),
        (F.Postformat = "POSTFORMAT"),
        (F.Tag = "TAG"),
        (F.Taxonomysector = "TAXONOMYSECTOR"),
        (F.Taxonomyservice = "TAXONOMYSERVICE"),
        ((k = eU || (eU = {})).Id = "ID"),
        (k.Name = "NAME"),
        ((H = eB || (eB = {})).DatabaseId = "DATABASE_ID"),
        (H.Id = "ID"),
        (H.Name = "NAME"),
        (H.Slug = "SLUG"),
        (H.Uri = "URI"),
        ((X = eF || (eF = {})).DatabaseId = "DATABASE_ID"),
        (X.Id = "ID"),
        (X.Name = "NAME"),
        (X.Slug = "SLUG"),
        (X.Uri = "URI"),
        ((G = ek || (ek = {})).DatabaseId = "DATABASE_ID"),
        (G.Id = "ID"),
        (G.Name = "NAME"),
        (G.Slug = "SLUG"),
        (G.Uri = "URI"),
        ((W = eH || (eH = {})).Count = "COUNT"),
        (W.Description = "DESCRIPTION"),
        (W.Name = "NAME"),
        (W.Slug = "SLUG"),
        (W.TermGroup = "TERM_GROUP"),
        (W.TermId = "TERM_ID"),
        (W.TermOrder = "TERM_ORDER"),
        ((z = eX || (eX = {})).DatabaseId = "DATABASE_ID"),
        (z.Email = "EMAIL"),
        (z.Id = "ID"),
        (z.Slug = "SLUG"),
        (z.Uri = "URI"),
        (z.Username = "USERNAME"),
        ((q = eG || (eG = {})).Administrator = "ADMINISTRATOR"),
        (q.Author = "AUTHOR"),
        (q.Contributor = "CONTRIBUTOR"),
        (q.Editor = "EDITOR"),
        (q.SeoEditor = "SEO_EDITOR"),
        (q.SeoManager = "SEO_MANAGER"),
        (q.Subscriber = "SUBSCRIBER"),
        ((Z = eW || (eW = {})).DisplayName = "DISPLAY_NAME"),
        (Z.Email = "EMAIL"),
        (Z.Login = "LOGIN"),
        (Z.LoginIn = "LOGIN_IN"),
        (Z.NiceName = "NICE_NAME"),
        (Z.NiceNameIn = "NICE_NAME_IN"),
        (Z.Registered = "REGISTERED"),
        (Z.Url = "URL"),
        ((Y = ez || (ez = {})).Email = "EMAIL"),
        (Y.Id = "ID"),
        (Y.Login = "LOGIN"),
        (Y.Nicename = "NICENAME"),
        (Y.Url = "URL");
      var e$ = n(23560),
        e1 = n(20734),
        e0 = n.n(e1);
      let e2 = window.matchMedia("(min-width: 1025px)"),
        e3 = window.matchMedia("(pointer: coarse)"),
        e5 = () => !!e3 && e3.matches,
        e4 = () => !!e2 && e2.matches,
        e6 = (e, t, n, i, r) => ((e - t) * (r - i)) / (n - t) + i,
        e7 = (e, t, n) => (1 - n) * e + n * t,
        e8 = (e, t, n) => (e <= t ? t : e >= n ? n : e),
        e9 = (e) => {
          let t, n;
          return e
            ? ("nativeEvent" in e
                ? ((t = e.nativeEvent.clientX), (n = e.nativeEvent.clientY))
                : ((t = e.clientX), (n = e.clientY)),
              { x: t, y: n })
            : null;
        };
      class te {
        init() {
          this.shouldHover() &&
            this.DOM.reveal &&
            (this.setupMouseEvents(), this.addMouseEventListeners());
        }
        setupMouseEvents() {
          (this.mouse.enterFn = (e) => {
            this.showImage(),
              (this.mouse.position = e9(e)),
              (this.firstRAFCycle = !0),
              this.loopRender(),
              window.addEventListener("mousemove", this.onMouseMove, {
                signal: this.signal,
              });
          }),
            (this.mouse.leaveFn = () => {
              this.stopRendering(),
                this.hideImage(),
                window.removeEventListener("mousemove", this.onMouseMove, {
                  signal: this.signal,
                });
            });
        }
        showImage() {
          this.stopAnimations(),
            (this.tl = eY.p8
              .timeline({
                onStart: () => {
                  eY.p8.set(this.DOM.reveal, { opacity: 1 }),
                    eY.p8.set(this.DOM.element, { zIndex: 2 });
                },
              })
              .fromTo(
                this.DOM.revealInner,
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "sine.out" }
              ));
        }
        stopAnimations() {
          eY.p8.killTweensOf(this.DOM.reveal),
            eY.p8.killTweensOf(this.DOM.revealInner);
        }
        onMouseMove(e) {
          this.mouse.position = e9(e);
        }
        calcBounds() {
          (this.bounds.container = this.DOM.container.getBoundingClientRect()),
            (this.bounds.trigger = this.DOM.trigger.getBoundingClientRect()),
            (this.bounds.element = this.DOM.element.getBoundingClientRect()),
            (this.bounds.reveal = this.DOM.reveal.getBoundingClientRect());
        }
        addMouseEventListeners() {
          this.DOM.trigger.addEventListener("mouseenter", this.mouse.enterFn, {
            signal: this.signal,
          }),
            this.DOM.trigger.addEventListener(
              "mouseleave",
              this.mouse.leaveFn,
              { signal: this.signal }
            );
        }
        hideImage() {
          this.stopAnimations(),
            (this.tl = eY.p8
              .timeline({
                onStart: () => {
                  eY.p8.set(this.DOM.element, { zIndex: 1 });
                },
                onComplete: () => {
                  eY.p8.set(this.DOM.reveal, { opacity: 0 });
                },
              })
              .to(this.DOM.revealInner, {
                duration: 0.2,
                ease: "sine.out",
                scale: 0.5,
                opacity: 0,
              }));
        }
        loopRender() {
          this.requestId ||
            (this.requestId = requestAnimationFrame(() => this.render()));
        }
        stopRendering() {
          this.requestId &&
            (window.cancelAnimationFrame(this.requestId),
            (this.requestId = void 0));
        }
        render() {
          (this.requestId = void 0),
            this.firstRAFCycle && this.calcBounds(),
            (this.mouse.distance.x = e8(
              Math.abs(this.mouse.positionCache.x - this.mouse.position.x),
              0,
              100
            )),
            (this.mouse.direction.x =
              this.mouse.positionCache.x - this.mouse.position.x),
            (this.mouse.direction.y =
              this.mouse.positionCache.y - this.mouse.position.y),
            (this.mouse.positionCache.x = this.mouse.position.x),
            (this.mouse.positionCache.y = this.mouse.position.y),
            this.calculateImagePosition(),
            this.calculateImageRotation(),
            this.interpolateValues(),
            eY.p8.set(this.DOM.reveal, {
              x: this.animatableProperties.tx.previous,
              y: this.animatableProperties.ty.previous,
              rotation: this.animatableProperties.rotation.previous,
            }),
            (this.firstRAFCycle = !1),
            this.loopRender();
        }
        interpolateValues() {
          (this.animatableProperties.tx.previous = this.firstRAFCycle
            ? this.animatableProperties.tx.current
            : e7(
                this.animatableProperties.tx.previous,
                this.animatableProperties.tx.current,
                this.animatableProperties.tx.amt
              )),
            (this.animatableProperties.ty.previous = this.firstRAFCycle
              ? this.animatableProperties.ty.current
              : e7(
                  this.animatableProperties.ty.previous,
                  this.animatableProperties.ty.current,
                  this.animatableProperties.ty.amt
                )),
            (this.animatableProperties.rotation.previous = this.firstRAFCycle
              ? this.animatableProperties.rotation.current
              : e7(
                  this.animatableProperties.rotation.previous,
                  this.animatableProperties.rotation.current,
                  this.animatableProperties.rotation.amt
                ));
        }
        calculateImagePosition() {
          let e =
              Math.abs(this.mouse.position.x - this.bounds.trigger.left) -
              this.bounds.trigger.width / 2,
            t =
              Math.abs(this.mouse.position.y - this.bounds.trigger.top) -
              this.bounds.trigger.height / 2;
          (this.animatableProperties.tx.current = e6(
            e,
            0,
            this.bounds.trigger.width,
            0,
            this.bounds.container.width * this.options.xLimit
          )),
            (this.animatableProperties.ty.current = e6(
              t,
              0,
              this.bounds.trigger.height,
              0,
              this.bounds.container.height * this.options.yLimit
            ));
        }
        calculateImageRotation() {
          this.animatableProperties.rotation.current = this.firstRAFCycle
            ? 0
            : e6(
                this.mouse.distance.x,
                0,
                100,
                0,
                this.mouse.direction.x < 0
                  ? this.options.rotationLimit
                  : 0 - this.options.rotationLimit
              );
        }
        destroy() {
          this.stopRendering(),
            this.stopAnimations(),
            this.controller.abort(),
            [...Object.values(this.DOM)].forEach((e) => {
              eY.p8.set(e, { clearProps: "all" });
            });
        }
        refresh() {
          this.shouldHover ? this.destroy() : this.initEvents();
        }
        constructor(e = {}, t, n, i, r, s) {
          (this.shouldHover = () => !e5() && e4()),
            (this.DOM = {}),
            (this.controller = new AbortController()),
            (this.signal = this.controller.signal),
            (this.options = {
              xLimit: 1,
              yLimit: 0.5,
              rotationLimit: 60,
              ...e,
            }),
            (this.tl = null),
            (this.requestId = null),
            (this.firstRAFCycle = null),
            (this.bounds = {}),
            (this.mouse = {
              position: { x: 0, y: 0 },
              positionCache: { x: 0, y: 0 },
              distance: { x: 0 },
              direction: { x: 0, y: 0 },
            }),
            (this.animatableProperties = {
              tx: { previous: 0, current: 0, amt: 0.04 },
              ty: { previous: 0, current: 0, amt: 0.04 },
              rotation: { previous: 0, current: 0, amt: 0.04 },
            }),
            (this.DOM.element = t),
            (this.DOM.container = n),
            (this.DOM.trigger = i),
            (this.DOM.reveal = r),
            (this.DOM.revealInner = s),
            (this.onMouseMove = this.onMouseMove.bind(this)),
            this.init();
        }
      }
      function tt(e) {
        let { data: t, index: n, inViewport: i = !1 } = e;
        if (!t) return null;
        let r = (0, eZ.useRef)(null),
          s = (0, eZ.useRef)(null),
          a = (0, eZ.useRef)(null),
          o = (0, eZ.useRef)(null),
          c = (0, eZ.useRef)(null),
          l = (0, eZ.useRef)(null),
          d = (0, eZ.useRef)(null),
          u = (0, eZ.useRef)(null);
        return (
          (0, eQ.V)(
            () => {
              eY.p8.matchMedia().add("(min-width: 850px)", () => {
                i &&
                  eY.p8
                    .timeline({ delay: 0.25 * n })
                    .to(
                      l.current,
                      { y: "0%", duration: 0.6, ease: "power2.out" },
                      ">-0.2"
                    )
                    .to(
                      d.current,
                      { y: "0%", duration: 0.4, ease: "power2.out" },
                      ">-0.2"
                    )
                    .to(
                      u.current,
                      { scaleX: 1, duration: 0.4, ease: "power2.out" },
                      ">-0.2"
                    );
              }),
                new te(
                  {},
                  r.current,
                  s.current,
                  a.current,
                  o.current,
                  c.current
                );
            },
            { scope: s, dependencies: [i] }
          ),
          (0, eq.jsx)("div", {
            ref: r,
            children: (0, eq.jsxs)("div", {
              className: e0().section,
              ref: s,
              children: [
                (0, eq.jsxs)("div", {
                  className: e0().sectionTrigger,
                  ref: a,
                  children: [
                    (0, eq.jsxs)("div", {
                      className: e0().sectionHeading,
                      children: [
                        (0, eq.jsx)("span", {
                          className: e0().numberOuter,
                          children: (0, eq.jsxs)("span", {
                            className: e0().number,
                            ref: l,
                            children: ["0", n + 1, "/"],
                          }),
                        }),
                        (0, eq.jsx)("span", {
                          className: e0().headingOuter,
                          children: (0, eq.jsx)("h3", {
                            dangerouslySetInnerHTML: {
                              __html: (null == t ? void 0 : t.heading) || "",
                            },
                            ref: d,
                          }),
                        }),
                      ],
                    }),
                    (0, eq.jsx)("div", {
                      className: e0().sectionImage,
                      children: (0, eq.jsx)("div", {
                        className: e0().sectionImageReveal,
                        ref: o,
                        children: (0, eq.jsx)("div", {
                          className: e0().sectionImageInner,
                          ref: c,
                          children: (0, eq.jsx)(e$.default, {
                            image: null == t ? void 0 : t.image,
                            layout: "intrinsic",
                          }),
                        }),
                      }),
                    }),
                    (0, eq.jsx)("p", {
                      className: e0().sectionDescription,
                      dangerouslySetInnerHTML: {
                        __html: (null == t ? void 0 : t.description) || "",
                      },
                    }),
                  ],
                }),
                (0, eq.jsx)("div", {
                  className: e0().line,
                  ref: u,
                  children: (0, eq.jsx)("div", { className: e0().lineInner }),
                }),
              ],
            }),
          })
        );
      }
      function tn(e) {
        let { data: t } = e;
        if (!t) return null;
        let n = (0, eZ.useRef)(null),
          [i, r] = (0, eZ.useState)(!1);
        return (
          (0, eQ.V)(() => {
            eY.p8.matchMedia().add("(min-width: 850px)", () => {
              eY.ic.create({
                trigger: n.current,
                start: "top center+=15%",
                onEnter: () => r(!0),
                once: !0,
              });
            });
          }),
          (0, eq.jsx)("div", {
            className: eJ().sections,
            ref: n,
            children:
              (null == t ? void 0 : t.sections) &&
              (null == t
                ? void 0
                : t.sections.map((e, t) =>
                    (0, eq.jsx)(tt, { data: e, index: t, inViewport: i }, t)
                  )),
          })
        );
      }
    },
    59120: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(95794),
        c = n.n(o);
      function l() {
        let e = (0, r.useRef)(null);
        return (
          (0, a.V)(
            () => {
              s.p8.matchMedia().add("(min-width: 850px)", () => {
                let e = s.p8.timeline({ duration: 1, ease: "power3.out" }),
                  t = document.querySelector(".rebelLetters").getBBox().height,
                  n = document
                    .querySelector(".againstLetters")
                    .getBBox().height,
                  i = document.querySelector(".boringLetters").getBBox().height;
                e.set(".rebelLetters", { y: "".concat(t, "px") })
                  .set(".rebelMask", { y: "-".concat(t, "px") })
                  .set(".rebelLetters", { opacity: 1 })
                  .set(".againstLetters", { y: "".concat(n, "px") })
                  .set(".againstMask", { y: "-".concat(n, "px") })
                  .set(".againstLetters", { opacity: 1 })
                  .set(".boringLetters", { y: "".concat(i, "px") })
                  .set(".boringMask", { y: "-".concat(i, "px") })
                  .set(".boringLetters", { opacity: 1 })
                  .to(".rebelLetters", { y: 0 })
                  .to(".rebelMask", { y: 0 }, "<")
                  .to(".againstLetters", { y: 0 }, "<+=0.125")
                  .to(".againstMask", { y: 0 }, "<")
                  .to(".boringLetters", { y: 0 }, "<+=0.125")
                  .to(".boringMask", { y: 0 }, "<");
              });
            },
            { scope: e }
          ),
          (0, i.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1143.9 590.2",
            className: c().desktop,
            ref: e,
            children: [
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsx)("mask", {
                    id: "rebel-mask",
                    children: (0, i.jsx)("rect", {
                      className: "rebelMask",
                      x: "0",
                      y: "0",
                      width: "591.4",
                      height: "166.8",
                      style: { fill: "#fff" },
                    }),
                  }),
                  (0, i.jsx)("mask", {
                    id: "against-mask",
                    children: (0, i.jsx)("rect", {
                      className: "againstMask",
                      x: "246.6",
                      y: "164.3",
                      width: "897.3",
                      height: "231",
                      style: { fill: "#fff" },
                    }),
                  }),
                  (0, i.jsx)("mask", {
                    id: "boring-mask",
                    children: (0, i.jsx)("rect", {
                      className: "boringMask",
                      x: "37",
                      y: "358.5",
                      width: "773.7",
                      height: "231.7",
                      style: { fill: "#fff" },
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("g", {
                className: "rebelLetters",
                mask: "url(#rebel-mask)",
                style: { opacity: "0" },
                children: [
                  (0, i.jsx)("rect", {
                    y: "47.1",
                    width: "30.6",
                    height: "117",
                  }),
                  (0, i.jsx)("path", {
                    d: "M75.5,72.2c-8.8,0-16.4,1.7-22.8,5.1c-6,3-11.3,7.2-15.5,12.3c-3.5,4.2-6.3,9-8.2,14.1l-0.2-12.9c0.4-2.8,1-5.6,1.9-8.3 c1.3-4.1,2.9-8.2,4.9-12c2.3-4.5,5.3-8.7,8.7-12.5c3.7-4.1,8.2-7.4,13.2-9.8c5.7-2.6,11.9-3.9,18.1-3.8V72.2z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M217.3,73.8c-4.8-9.7-12.9-17.5-22.7-22c-10.2-4.9-23-7.3-38.4-7.3c-15.1,0-28.2,2.4-39.4,7.3 c-11.2,4.9-20,11.9-26.2,21.1c-6.3,9.2-9.4,20.2-9.4,33.1c0,12.9,3.2,23.8,9.7,32.9c6.4,9.1,15.4,16,26.8,20.8 c11.5,4.8,24.6,7.2,39.5,7.2c13.3,0,24.6-1.8,33.9-5.4c9.2-3.6,16.6-8.5,22-14.8c5.3-6,8.8-13.5,10-21.4h-29.6 c-1.9,5.3-6.1,9.7-12.6,13.1c-6.5,3.4-14.6,5.1-24.4,5.1c-8.8,0-16.4-1.4-22.7-4.2c-5.9-2.5-11.1-6.5-15.1-11.5 c-3.6-4.7-5.9-10.3-6.7-16.2h111.5C224.3,96.1,222.3,83.6,217.3,73.8z M113.7,93.4c2-7.2,6.6-13.3,13.7-18.2s16.2-7.4,27.5-7.4h0 c11.4,0,20.5,2.3,27.2,6.9c6.4,4.2,10.5,11.1,11.2,18.7H113.7z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M274.1,0v133.9c0,5-0.2,10.4-0.7,16.1s-0.9,10.4-1.4,14h-28.5V0H274.1z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M383.2,73.4c-5.3-9-12.9-16.4-22.1-21.3c-9.3-5.1-20-7.6-32.1-7.6c-10.5,0-19.5,1.6-26.8,4.7c-6.9,2.8-13.1,7.3-17.9,13.1 c-4.6,5.7-8,12.3-10,19.4c-2.2,7.8-3.2,15.9-3.2,24c0,7.1,1.2,14.2,3.3,21.1c2.2,7.1,5.6,13.8,10.1,19.8 c4.7,6.2,10.9,11.2,17.9,14.6c7.4,3.7,16.2,5.5,26.6,5.5c11.1,0.2,22-2.5,31.8-7.6c9.3-5,17-12.4,22.4-21.4 c5.5-9.2,8.2-19.8,8.2-31.9C391.3,93.3,388.6,82.5,383.2,73.4z M355,125.3c-3.4,5.6-8.4,10.1-14.2,13.1 c-6.1,3.1-13.3,4.7-21.6,4.7h0c-9.3,0-17.3-1.6-24-4.7c-13-5.6-21.3-18.5-20.9-32.7c0-8,1.8-14.8,5.5-20.4 c3.9-5.7,9.3-10.2,15.6-12.8c6.8-3,14.7-4.5,23.8-4.5c13,0,23.1,3.5,30.2,10.3c7.1,6.9,10.7,16,10.7,27.3 C360.2,112.6,358.4,119.4,355,125.3z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M536.9,73.8c-4.8-9.7-12.9-17.5-22.7-22c-10.2-4.9-23-7.3-38.4-7.3c-15.1,0-28.2,2.4-39.4,7.3 c-11.2,4.9-20,11.9-26.2,21.1c-6.3,9.2-9.4,20.2-9.4,33.1c0,12.9,3.2,23.8,9.6,32.9c6.4,9.1,15.4,16,26.8,20.8s24.6,7.2,39.5,7.2 c13.3,0,24.6-1.8,33.9-5.4c9.2-3.6,16.6-8.5,22-14.8c5.3-6,8.8-13.5,10-21.4H513c-1.9,5.3-6.1,9.7-12.6,13.1 c-6.5,3.4-14.6,5.1-24.4,5.1c-8.8,0-16.4-1.4-22.7-4.2c-5.9-2.5-11.1-6.5-15.1-11.5c-3.6-4.7-5.9-10.3-6.7-16.2h111.5 C543.9,96.1,541.8,83.6,536.9,73.8z M433.2,93.4c2-7.2,6.6-13.3,13.6-18.2s16.2-7.4,27.5-7.4v0c11.5,0,20.5,2.3,27.2,6.9 c6.4,4.2,10.5,11.1,11.2,18.7H433.2z",
                  }),
                  (0, i.jsx)("polygon", {
                    points: "513,125.2 513,125.2 513,125.2   ",
                  }),
                  (0, i.jsx)("path", { d: "M560.8,0h30.6v164h-30.6V0z" }),
                ],
              }),
              (0, i.jsxs)("g", {
                className: "againstLetters",
                mask: "url(#against-mask)",
                style: { opacity: "0" },
                children: [
                  (0, i.jsx)("path", {
                    d: "M361.5,243.1c-3.6-9-9.9-16.7-18-22c-8.2-5.4-19.1-8.1-32.6-8.1c-12.2,0-23.2,2.5-32.8,7.6c-9.4,4.9-17.4,12.3-23,21.3 c-5.6,9.1-8.5,19.8-8.5,32.2c0,12.1,2.8,22.7,8.3,31.9c5.4,9.1,13.3,16.5,22.6,21.4c9.7,5.2,20.6,7.8,31.6,7.7l0,0 c10.3,0,19.2-1.8,26.6-5.5c7-3.4,13.2-8.4,17.9-14.6c4.5-5.9,7.9-12.6,10.1-19.8c2.1-6.8,3.3-13.9,3.3-21.1 C367.3,263.6,365.3,253,361.5,243.1z M343.1,306.9c-6.8,3.1-14.8,4.7-24,4.7h0c-7.5,0.2-14.8-1.5-21.5-4.7 c-6-2.9-11-7.4-14.5-13.1c-3.6-5.9-5.3-12.7-5.2-19.6c0-11.3,3.6-20.4,10.8-27.2c7.2-6.8,17.3-10.2,30.4-10.2 c9.3,0,17.2,1.5,23.9,4.4c6.3,2.6,11.7,7,15.5,12.7c3.7,5.6,5.5,12.4,5.5,20.4C364.4,288.3,356.1,301.3,343.1,306.9z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M364,215.6h30.6v117h-28.5c-0.8-6.1-1.3-11.5-1.6-16.2s-0.5-9.3-0.5-13.9V215.6z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M671.6,243.1c-3.6-9-9.9-16.7-18-22c-8.2-5.4-19.1-8.1-32.6-8.1c-12.2,0-23.2,2.5-32.8,7.6c-9.4,4.9-17.4,12.3-23,21.3 c-5.6,9.1-8.5,19.8-8.5,32.2c0,12.1,2.8,22.7,8.3,31.9c5.4,9.1,13.3,16.5,22.6,21.4c9.7,5.2,20.6,7.8,31.7,7.7l0,0 c10.4,0,19.2-1.8,26.6-5.5c7-3.4,13.1-8.4,17.9-14.6c4.5-5.9,7.9-12.6,10.1-19.8c2.1-6.8,3.2-13.9,3.3-21.1 C677.4,263.6,675.5,253,671.6,243.1z M653.2,306.9c-6.8,3.1-14.8,4.7-24,4.7h0c-7.5,0.2-14.8-1.5-21.5-4.7 c-6-2.9-11-7.4-14.5-13.1c-3.6-5.9-5.3-12.7-5.2-19.6c0-11.3,3.6-20.4,10.8-27.2c7.2-6.8,17.3-10.2,30.4-10.2 c9.3,0,17.2,1.5,23.9,4.4c6.3,2.6,11.7,7,15.5,12.7c3.7,5.6,5.5,12.4,5.5,20.4C674.6,288.4,666.3,301.3,653.2,306.9z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M674.2,215.6h30.6v117h-28.5c-0.8-6.1-1.3-11.5-1.7-16.2s-0.5-9.3-0.5-13.9L674.2,215.6L674.2,215.6z",
                  }),
                  (0, i.jsx)("rect", {
                    x: "727.5",
                    y: "164.3",
                    width: "29.7",
                    height: "26.8",
                  }),
                  (0, i.jsx)("rect", {
                    x: "726.9",
                    y: "215.6",
                    width: "30.6",
                    height: "117",
                  }),
                  (0, i.jsx)("rect", {
                    x: "780.5",
                    y: "215.6",
                    width: "30.6",
                    height: "117",
                  }),
                  (0, i.jsx)("path", {
                    d: "M865.5,213c6.8-0.1,13.5,0.9,20,2.8c5.9,1.8,11.3,4.7,16,8.7c4.7,4.1,8.3,9.2,10.6,14.9c2.5,6,3.8,13.2,3.8,21.5v71.5 h-30.6v-66.1c0-9.9-2.4-17.1-7.2-21.8s-12.6-6.9-23.4-6.9c-7.6-0.1-15.2,1.5-22.1,4.7c-6.1,2.8-11.6,6.8-16,11.9 c-4.1,4.8-6.4,9.8-7.1,14.9l-0.2-12c0.8-5.6,2.7-11,5.4-16c6.3-11.3,16.4-20,28.5-24.5C850.3,214.1,857.9,212.9,865.5,213",
                  }),
                  (0, i.jsx)("path", {
                    d: "M931.4,293.7h28.2c1.7,5.3,5.3,9.7,10.7,13.1c5.4,3.4,12.5,5.1,21.3,5.1c6,0,10.6-0.5,13.9-1.6s5.6-2.7,6.8-4.8 c1.3-2.2,1.9-4.7,1.9-7.2c0.2-2.9-1-5.7-3.1-7.6c-2-1.8-5.2-3.2-9.4-4.4c-5.3-1.3-10.8-2.3-16.2-3.1c-6.6-1.1-12.9-2.4-19.1-4 c-5.7-1.4-11.1-3.5-16.2-6.2c-4.5-2.4-8.3-5.7-11.2-9.9c-2.8-4-4.1-8.9-4.1-14.7c-0.1-5.3,1.3-10.5,4.1-15.1 c2.9-4.6,6.9-8.3,11.5-11.1c5.4-3.2,11.3-5.5,17.4-6.8c7.1-1.6,14.3-2.4,21.5-2.4c11.6,0,21.3,1.7,29,5.1s13.5,8.1,17.3,14.1 c3.9,6.2,5.9,13.5,5.8,20.8h-27.1c-1.3-5.8-3.8-10-7.5-12.6s-9.6-3.9-17.4-3.9c-7.7,0-13.5,1.2-17.4,3.5s-5.9,5.6-5.9,9.6 c-0.1,3,1.2,5.9,3.7,7.6c2.4,1.8,6,3.3,10.8,4.4s10.8,2.3,18,3.5c6.1,1.3,12,2.7,17.5,4.2c5.2,1.4,10.2,3.4,14.9,6 c4.2,2.3,7.8,5.6,10.5,9.6c2.6,4,3.9,9.1,3.9,15.2c0,7.5-2.2,13.9-6.5,19.1s-10.5,9.1-18.5,11.9c-8,2.7-17.6,4.1-28.7,4.1 c-9.9,0-18.4-1.1-25.5-3.2c-6.3-1.7-12.3-4.5-17.8-8.2c-4.3-2.9-8-6.6-10.9-10.8c-2.3-3.3-4.1-7-5.3-10.9 C931.5,299.5,931.1,296.6,931.4,293.7",
                  }),
                  (0, i.jsx)("rect", {
                    x: "1053.1",
                    y: "215.6",
                    width: "90.8",
                    height: "23.8",
                  }),
                  (0, i.jsx)("rect", {
                    x: "1083.2",
                    y: "183.6",
                    width: "30.6",
                    height: "149",
                  }),
                  (0, i.jsx)("path", {
                    d: "M512.2,395.3v-21.1c0-7.1-2.3-12.1-6.9-14.9c-4.6-2.8-10.8-4.2-18.7-4.2h-36.1c-5.9,0.1-11.8-0.4-17.6-1.6 c-4-0.8-7.9-2.4-11.3-4.6c-2.6-1.8-4.7-4.2-6-7.1c-1.2-2.7-1.9-5.7-1.9-8.7c0-6.2,2-10.9,6-14.1c4-3.2,9.5-5.3,16.3-6.4 c7.5-1.1,15-1.3,22.6-0.7l14.7,2.6c-9.8,0.3-17,1.1-21.8,2.4s-7.1,3.9-7.1,7.8c-0.1,2.2,1,4.2,2.8,5.5c1.9,1.3,4.5,2,7.9,2h37.9 c10.4,0,19.3,1.1,26.6,3.4s13,6,16.9,11.4c3.9,5.4,5.8,12.7,5.8,22v26.5H512.2z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M506.4,229.7c2.3,0.9,4.6,1.7,7,2.5c-2.5-1.5-5-2.9-7.7-4.2L506.4,229.7z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M552.1,239.4v-22.8l-58.4-0.2c-3.3-0.8-6.6-1.4-9.9-1.9c-3.4-0.5-6.9-0.7-10.4-0.7c-12.9,0-24.1,2.1-33.6,6.3 s-16.9,10.1-22,17.7c-5.1,7.6-7.7,16.5-7.7,27s2.6,19.5,7.9,27c5.3,7.4,12.7,13.1,22.2,16.9c9.5,3.8,20.6,5.7,33.2,5.7l0,0 c12.9,0,24-1.9,33.4-5.7c9.4-3.8,16.6-9.3,21.8-16.5s7.7-15.9,7.7-26c0.1-5.8-1.4-11.4-4.3-16.4c-3-4.8-6.8-9.1-11.3-12.6 c-2.3-1.8-4.7-3.5-7.2-5c-2.3-0.8-4.7-1.6-7-2.5l-0.7-1.6c2.6,1.2,5.2,2.6,7.7,4.2c4.8,1.6,9.6,3.1,14.6,4.3 C535.8,238.6,543.9,239.6,552.1,239.4z M506.9,265.1c0.1,5.2-1.3,10.4-4.2,14.8c-2.9,4.2-7,7.5-11.8,9.4 c-5.6,2.3-11.5,3.4-17.6,3.3l0,0c-6.1,0.1-12.1-1-17.8-3.3c-4.8-1.9-8.8-5.2-11.8-9.4c-0.6-1-1.2-2.1-1.7-3.2 c-6.3-13.8-0.2-30.1,13.6-36.4c5.6-2.3,11.6-3.5,17.7-3.4c6.1-0.1,12.1,1,17.7,3.4c4.7,2,8.8,5.4,11.6,9.7 C505.6,254.4,507,259.7,506.9,265.1z",
                  }),
                ],
              }),
              (0, i.jsxs)("g", {
                className: "boringLetters",
                mask: "url(#boring-mask)",
                style: { opacity: "0" },
                children: [
                  (0, i.jsx)("path", {
                    d: "M765.1,424.6c2.3,0.9,4.6,1.7,7,2.5c-2.5-1.5-5-2.9-7.7-4.2L765.1,424.6z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M67.4,358.5v133.1c0,5-0.2,10.3-0.7,16c-0.5,5.7-0.9,10.3-1.4,13.9H37V358.5H67.4L67.4,358.5z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M175.9,431.5c-5.4-9-12.7-16.1-22-21.2c-9.3-5.1-19.9-7.6-31.9-7.6c-10.5,0-19.3,1.6-26.7,4.7c-7.3,3.1-13.3,7.5-17.8,13 c-4.5,5.5-7.8,12-10,19.3c-2.1,7.3-3.2,15.3-3.2,23.9c0,6.9,1.1,13.8,3.3,20.9c2.2,7.1,5.5,13.7,10.1,19.7 c4.5,6,10.5,10.9,17.8,14.5c7.3,3.7,16.1,5.5,26.4,5.5l0,0c11.7,0,22.2-2.6,31.6-7.6c9.4-5.1,16.8-12.2,22.2-21.3 s8.2-19.4,8.2-31.7S181.3,440.6,175.9,431.5z M147.8,483.1c-3.4,5.5-8.1,9.9-14.2,13c-6.1,3.1-13.3,4.7-21.5,4.7v0 c-9.2,0-17.2-1.6-23.9-4.7c-6.7-3.1-11.9-7.5-15.4-13.1c-3.6-5.6-5.4-12.1-5.4-19.4c0-8,1.8-14.7,5.5-20.2 c3.7-5.5,8.8-9.8,15.6-12.8c6.7-3,14.6-4.5,23.6-4.5c13,0,23,3.4,30.1,10.3c7.1,6.9,10.6,15.9,10.6,27.1 C152.9,471.1,151.2,477.6,147.8,483.1z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M770.9,590.2v-21.1c0-7.1-2.3-12.1-6.9-14.9s-10.8-4.2-18.7-4.2h-36.1c-5.9,0.1-11.8-0.4-17.6-1.6 c-4-0.8-7.9-2.4-11.3-4.7c-2.6-1.8-4.7-4.2-6-7.1c-1.2-2.7-1.9-5.7-1.9-8.7c0-6.2,2-10.9,6-14.1c4-3.2,9.5-5.3,16.3-6.4 c7.5-1.1,15-1.3,22.6-0.7l14.7,2.6c-9.8,0.3-17,1.1-21.8,2.4c-4.7,1.3-7.1,3.9-7.1,7.8c-0.1,2.2,1,4.2,2.8,5.5 c1.9,1.3,4.5,2,7.9,2h37.9c10.4,0,19.3,1.1,26.7,3.4s13,6,16.9,11.4c3.9,5.3,5.8,12.7,5.8,22v26.5L770.9,590.2L770.9,590.2z",
                  }),
                  (0, i.jsx)("path", {
                    d: "M810.7,434.3v-22.8l-58.4-0.2c-3.3-0.8-6.6-1.4-9.9-1.9c-3.4-0.5-6.9-0.7-10.4-0.7c-12.9,0-24.1,2.1-33.6,6.3 s-16.9,10.1-22,17.7c-5.1,7.6-7.7,16.5-7.7,27s2.6,19.5,7.9,27c5.3,7.5,12.7,13.1,22.2,16.9c9.5,3.8,20.6,5.7,33.2,5.7l0,0 c12.9,0,24-1.9,33.4-5.7s16.6-9.3,21.8-16.5s7.7-15.9,7.7-26c0.1-5.8-1.4-11.4-4.3-16.4c-3-4.8-6.8-9.1-11.3-12.6 c-2.3-1.8-4.7-3.5-7.2-5c-2.3-0.8-4.7-1.6-7-2.5l-0.7-1.6c2.6,1.2,5.2,2.6,7.7,4.2c4.8,1.6,9.6,3.1,14.6,4.3 C794.5,433.5,802.6,434.5,810.7,434.3z M765.6,459.9c0.1,5.2-1.3,10.4-4.2,14.8c-2.9,4.2-7,7.5-11.8,9.4 c-5.6,2.3-11.5,3.4-17.6,3.3v0c-6.1,0.1-12.1-1-17.8-3.3c-4.8-1.9-8.8-5.2-11.8-9.4c-0.6-1-1.2-2.1-1.7-3.2 c-6.3-13.8-0.2-30.1,13.6-36.4c5.6-2.4,11.6-3.5,17.7-3.4c6.1-0.1,12.1,1,17.7,3.4c4.7,2,8.8,5.4,11.6,9.6 C764.2,449.3,765.7,454.6,765.6,459.9z",
                  }),
                  (0, i.jsx)("rect", {
                    x: "357.5",
                    y: "408.7",
                    width: "30.2",
                    height: "118.2",
                  }),
                  (0, i.jsx)("path", {
                    d: "M432.2,436.2c-8.7,0-16.2,1.7-22.6,5c-5.9,3-11.1,7.1-15.4,12.2c-3.5,4.1-6.3,8.9-8.1,14l-0.2-12.8c0.4-2.8,1-5.6,1.9-8.3 c1.3-4.1,2.9-8.1,4.9-11.9c2.3-4.5,5.2-8.6,8.6-12.3c3.7-4,8.1-7.3,13-9.7c5.6-2.6,11.7-3.9,17.9-3.7V436.2z",
                  }),
                  (0, i.jsx)("rect", {
                    x: "452.6",
                    y: "369.7",
                    width: "30.2",
                    height: "26.5",
                  }),
                  (0, i.jsx)("rect", {
                    x: "452.6",
                    y: "409",
                    width: "30.2",
                    height: "118",
                  }),
                  (0, i.jsx)("rect", {
                    x: "512.3",
                    y: "408.7",
                    width: "30.3",
                    height: "118.5",
                  }),
                  (0, i.jsx)("path", {
                    d: "M596.4,409c6.7-0.1,13.4,0.9,19.8,2.8c5.8,1.7,11.2,4.7,15.8,8.6c4.6,4,8.2,9.1,10.5,14.8c2.5,6,3.7,13.1,3.7,21.3v70.8 h-30.3v-65.4c0-9.8-2.4-17-7.1-21.5s-12.5-6.9-23.2-6.9c-7.5-0.1-15,1.5-21.9,4.6c-6,2.8-11.4,6.8-15.8,11.8 c-4,4.7-6.4,9.7-7,14.8l-0.2-11.9c0.8-5.5,2.6-10.9,5.3-15.8c6.2-11.2,16.2-19.8,28.2-24.2C581.4,410.2,588.8,408.9,596.4,409",
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
    25327: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(71359),
        a = n(11984),
        o = n(87211),
        c = n.n(o);
      function l(e) {
        let { loopVideoSrc: t, fullVideoSrc: n } = e,
          [o, l] = (0, r.useState)(!1),
          [d, u] = (0, r.useState)(!1),
          [_, p] = (0, r.useState)(!1),
          m = (0, r.useRef)(null),
          h = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            function e() {
              l(window.innerWidth > 849);
            }
            return (
              window.addEventListener("resize", e),
              e(),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          (0, i.jsx)(i.Fragment, {
            children:
              o &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)("button", {
                    className: c().icon,
                    ref: h,
                    children: [
                      (0, i.jsx)("div", { className: c().line }),
                      (0, i.jsx)("div", { className: c().line }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: c().video,
                    ref: m,
                    onClick: () => {
                      if (_) return;
                      let e = m.current;
                      if (!e) return;
                      p(!0);
                      let t = "true" === e.dataset.fullscreen,
                        n = a.BW.getState(e);
                      e.dataset.fullscreen = t ? "false" : "true";
                      let i = e.querySelector("video"),
                        r = document.querySelectorAll("[data-modal-hide]");
                      i &&
                        (t
                          ? (u(!1),
                            window.lenis.start(),
                            a.p8.to(r, {
                              duration: 0.5,
                              opacity: 1,
                              delay: 0.15,
                              pointerEvents: "all",
                              ease: "power3.inOut",
                            }),
                            a.p8.to(h.current, {
                              duration: 0.25,
                              opacity: 0,
                              pointerEvents: "none",
                              ease: "power3.inOut",
                            }))
                          : (u(!0),
                            window.lenis.stop(),
                            a.p8.to(r, {
                              duration: 0.5,
                              opacity: 0,
                              delay: 0.3,
                              pointerEvents: "none",
                              ease: "power3.inOut",
                            }),
                            a.p8.to(h.current, {
                              duration: 0.25,
                              opacity: 1,
                              delay: 0.75,
                              pointerEvents: "none",
                              ease: "power3.inOut",
                            }))),
                        a.BW.from(n, {
                          duration: 1,
                          ease: "power3.inOut",
                          onComplete: () => p(!1),
                        });
                    },
                    children: (0, i.jsx)(s.default, {
                      fill: !0,
                      delay: 1.5,
                      children: (0, i.jsx)("video", {
                        src: d ? n : t,
                        playsInline: !0,
                        autoPlay: !0,
                        muted: !d,
                        loop: !0,
                      }),
                    }),
                  }),
                ],
              }),
          })
        );
      }
    },
    22194: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(85436),
        c = n.n(o);
      function l(e) {
        let { children: t } = e,
          n = (0, r.useRef)(null);
        return (
          (0, a.V)(
            () => {
              s.p8.matchMedia().add("(min-width: 850px)", () => {
                s.p8.to(s.p8.utils.toArray('[data-animation="grid-item"]'), {
                  opacity: 1,
                  y: 0,
                  scrollTrigger: {
                    trigger: n.current,
                    start: "top center+=15%",
                    once: !0,
                  },
                  ease: "power1.out",
                  duration: 1,
                  stagger: {
                    grid: [5, 3],
                    from: 0,
                    ease: "power2.in",
                    amount: 0.35,
                  },
                });
              });
            },
            { scope: n }
          ),
          (0, i.jsx)("div", { className: c().grid, ref: n, children: t })
        );
      }
    },
    45840: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(75329),
        c = n.n(o);
      function l(e) {
        let { children: t } = e,
          n = (0, r.useRef)(null),
          o = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(n.current, {
                autoAlpha: 0,
                scale: 0.5,
                scrollTrigger: {
                  trigger: n.current,
                  start: "center center",
                  end: "center top",
                  scrub: !0,
                  pin: !0,
                  pinSpacing: !1,
                  toggleActions: "play none reverse none",
                },
              }),
                s.p8.to(o.current, {
                  rotate: "0deg",
                  scrollTrigger: {
                    trigger: o.current,
                    start: "top bottom",
                    end: "bottom center",
                    scrub: !0,
                    toggleActions: "play none reverse none",
                  },
                });
            });
          }),
          (0, i.jsx)("div", {
            ref: n,
            className: c().animatedArrow,
            children: (0, i.jsx)("div", {
              ref: o,
              className: c().innerArrow,
              children: t,
            }),
          })
        );
      }
    },
    37283: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return l;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(11984),
        a = n(49908),
        o = n(72746),
        c = n.n(o);
      function l(e) {
        let { children: t } = e,
          n = (0, r.useRef)(null);
        return (
          (0, a.V)(() => {
            s.p8.matchMedia().add("(min-width: 850px)", () => {
              s.p8.to(n.current, {
                autoAlpha: 0,
                scale: 0.75,
                scrollTrigger: {
                  trigger: n.current,
                  start: "center center",
                  end: "center top",
                  scrub: !0,
                  pin: !0,
                  pinSpacing: !1,
                  toggleActions: "play none reverse none",
                },
              });
            });
          }),
          (0, i.jsx)("span", {
            ref: n,
            className: c().animatedHeading,
            children: t,
          })
        );
      }
    },
    65255: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return x;
          },
        });
      var i = n(3827),
        r = n(89461),
        s = n(64090),
        a = n(23560),
        o = n(6975),
        c = n(75801),
        l = n.n(c);
      function d(e) {
        var t, n;
        let { service: r } = e,
          [c, d] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let e = () => {
              d(window.innerWidth < 769);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, i.jsx)("div", {
            className: l().mediaContainer,
            children:
              !c &&
              (null == r
                ? void 0
                : null === (t = r.video) || void 0 === t
                ? void 0
                : t.mediaItemUrl)
                ? (0, i.jsx)(o.default, {
                    layout: "fill",
                    src:
                      null == r
                        ? void 0
                        : null === (n = r.video) || void 0 === n
                        ? void 0
                        : n.mediaItemUrl,
                  })
                : (0, i.jsx)(a.default, {
                    image: null == r ? void 0 : r.image,
                  }),
          })
        );
      }
      var u = n(75962),
        _ = n(83816),
        p = n.n(_),
        m = n(66203);
      function h(e) {
        var t, n;
        let { service: s } = e;
        return (0, i.jsxs)(
          "div",
          {
            className: (0, m.cn)(p().panel, "servicePanel"),
            children: [
              (0, i.jsxs)("div", {
                className: p().panelText,
                children: [
                  (0, i.jsx)("h3", {
                    className: p().panelHeading,
                    children: null == s ? void 0 : s.heading,
                  }),
                  (0, i.jsx)("div", {
                    className: p().tags,
                    children:
                      (null == s ? void 0 : s.tags) &&
                      (null == s
                        ? void 0
                        : s.tags.map((e) =>
                            (0, i.jsx)(
                              u.default,
                              {
                                href: "service/".concat(
                                  null == e ? void 0 : e.slug
                                ),
                                className: p().tag,
                                children: null == e ? void 0 : e.title,
                              },
                              null == e ? void 0 : e.id
                            )
                          )),
                  }),
                  (0, i.jsx)("p", {
                    className: p().panelMainText,
                    children: null == s ? void 0 : s.mainText,
                  }),
                  (null == s
                    ? void 0
                    : null === (t = s.link) || void 0 === t
                    ? void 0
                    : t.slug) &&
                    (0, i.jsx)(r.default, {
                      text: "Find out more",
                      type: "a-internal",
                      href: "service/".concat(
                        null == s
                          ? void 0
                          : null === (n = s.link) || void 0 === n
                          ? void 0
                          : n.slug
                      ),
                    }),
                ],
              }),
              (0, i.jsx)(d, { service: s }),
              (0, i.jsx)("div", { className: p().panelBackground }),
            ],
          },
          null == s ? void 0 : s.heading
        );
      }
      var A = n(11984),
        I = n(49908),
        g = n(65601),
        f = n.n(g);
      function E(e) {
        let { children: t } = e,
          n = (0, s.useRef)(null),
          r = (0, s.useRef)(null);
        return (
          (0, I.V)(() => {
            A.p8.matchMedia().add("(min-width: 850px)", () => {
              let e = n.current,
                t = r.current;
              A.p8.to(e, {
                scrollTrigger: {
                  trigger: e,
                  start: () => "center center",
                  endTrigger: t,
                  end: () => "bottom top",
                  scrub: !0,
                  pin: !0,
                  pinSpacing: !1,
                  toggleActions: "play none reverse none",
                },
                ease: "sine.in",
              }),
                A.p8.to(e, {
                  autoAlpha: 0,
                  scale: 0.8,
                  ease: "sine.in",
                  scrollTrigger: {
                    trigger: t,
                    start: () => "bottom bottom",
                    end: () => "center top",
                    scrub: !0,
                    toggleActions: "play none reverse none",
                  },
                });
            });
          }),
          (0, i.jsxs)("div", {
            className: f().panel,
            children: [
              (0, i.jsx)("div", {
                className: f().panelInner,
                ref: n,
                children: t,
              }),
              (0, i.jsx)("div", { className: f().spacer, ref: r }),
            ],
          })
        );
      }
      var v = n(65657),
        N = n.n(v);
      function x(e) {
        let { services: t } = e;
        return (0, i.jsx)("div", {
          className: N().panels,
          children: (0, i.jsx)("div", {
            className: "container",
            children:
              t &&
              t.map((e) =>
                (0, i.jsx)(
                  E,
                  { children: (0, i.jsx)(h, { service: e }) },
                  null == e ? void 0 : e.heading
                )
              ),
          }),
        });
      }
    },
    51473: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var i = n(3827),
        r = n(64090),
        s = n(70993),
        a = n.n(s),
        o = n(89461),
        c = n(23560),
        l = n(66203);
      function d(e) {
        var t, n;
        let { statistic: r } = e;
        return (0, i.jsxs)("div", {
          className: (0, l.cn)(a().panel, "statisticPanel"),
          children: [
            (0, i.jsx)("figure", {
              className: a().backgroundImage,
              children: (0, i.jsx)(c.default, {
                image: null == r ? void 0 : r.backgroundImage,
              }),
            }),
            (0, i.jsxs)("div", {
              className: a().panelWrap,
              children: [
                (0, i.jsx)("figure", {
                  className: a().logo,
                  children: (0, i.jsx)(c.default, {
                    image: null == r ? void 0 : r.brandLogo,
                    layout: "intrinsic",
                  }),
                }),
                (0, i.jsx)("figure", {
                  className: (0, l.cn)(a().visualMobile),
                  children: (0, i.jsx)(c.default, {
                    image: null == r ? void 0 : r.brandVisual,
                    layout: "intrinsic",
                  }),
                }),
                (0, i.jsx)("h3", {
                  className: a().heading,
                  children: null == r ? void 0 : r.mainStatistic,
                }),
                (0, i.jsx)("span", {
                  className: a().description,
                  children: null == r ? void 0 : r.description,
                }),
                (0, i.jsx)("div", {
                  className: a().buttons,
                  children: (0, i.jsx)(o.default, {
                    type: "a-internal",
                    href:
                      (null == r
                        ? void 0
                        : null === (t = r.button) || void 0 === t
                        ? void 0
                        : t.url) || "",
                    text:
                      (null == r
                        ? void 0
                        : null === (n = r.button) || void 0 === n
                        ? void 0
                        : n.title) || "",
                    color: "white",
                  }),
                }),
              ],
            }),
            (0, i.jsx)("figure", {
              className: (0, l.cn)(a().visual),
              children: (0, i.jsx)(c.default, {
                image: null == r ? void 0 : r.brandVisual,
                layout: "contain",
              }),
            }),
          ],
        });
      }
      var u = n(39691),
        _ = n.n(u),
        p = n(18020),
        m = n(49675);
      function h(e) {
        let { statistics: t } = e,
          n = (0, r.useRef)(null),
          s = null;
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              var e, t, i;
              let r =
                  null === (t = n.current) || void 0 === t
                    ? void 0
                    : null === (e = t.parentElement) || void 0 === e
                    ? void 0
                    : e.offsetWidth,
                s =
                  null === (i = n.current) || void 0 === i
                    ? void 0
                    : i.offsetWidth;
              if (void 0 === r || void 0 === s) return;
              let a = (r - (r - s) / 2) / s;
              return (a = Math.max(a, 1)), "".concat(100 * a, "%");
            };
            (s = new p.Z(n.current, {
              modules: [m.VS, m.gI, m.W_],
              effect: "creative",
              speed: 600,
              resistanceRatio: 0,
              grabCursor: !0,
              parallax: !0,
              creativeEffect: {
                limitProgress: 3,
                perspective: !0,
                shadowPerProgress: !0,
                prev: { shadow: !0, translate: ["-7%", 0, -100] },
                next: { translate: [e() || "0%", 0, 0] },
              },
              navigation: { prevEl: ".swiper-panel-next" },
            })).slideTo(s.slides.length - 1);
            let t = () => {
              s &&
                s.params.creativeEffect &&
                s.params.creativeEffect.next &&
                !s.destroyed &&
                ((s.params.creativeEffect.next.translate = [e() || "0%", 0, 0]),
                s.update());
            };
            return (
              window.addEventListener("resize", t),
              () => {
                s && s.destroy(!0, !0), window.removeEventListener("resize", t);
              }
            );
          }, []),
          (0, i.jsx)("div", {
            className: _().panels,
            children: (0, i.jsx)("div", {
              className: (0, l.cn)(_().container),
              children: (0, i.jsxs)("div", {
                className: (0, l.cn)(_().swiper, "swiper"),
                ref: n,
                children: [
                  (0, i.jsx)("div", {
                    className: "swiper-wrapper",
                    children:
                      null == t
                        ? void 0
                        : t.map((e, t) =>
                            (0, i.jsx)(
                              "div",
                              {
                                className: (0, l.cn)(
                                  _().swiperSlide,
                                  "swiper-slide"
                                ),
                                children: (0, i.jsx)(d, { statistic: e }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, i.jsx)("div", {
                    className: _().swiperNav,
                    children: (0, i.jsx)("div", {
                      className: (0, l.cn)(
                        _().swiperNavNext,
                        "swiper-panel-next"
                      ),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      n(86978), n(27409);
    },
    56014: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          LOADING_STATES: function () {
            return r;
          },
          NavigationContext: function () {
            return d;
          },
          NavigationContextProvider: function () {
            return u;
          },
          useNavigationContext: function () {
            return _;
          },
        });
      var i,
        r,
        s = n(3827),
        a = n(93696),
        o = n(64090);
      let c = () => {
        let { loading: e, setLoading: t } = _(),
          n = (0, o.useRef)(null),
          i = () => {
            a.ZP.set(n.current, {
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            });
          },
          c = () => {
            a.ZP.to(n.current, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1,
              ease: "power4.inOut",
            });
          },
          l = () => {
            a.ZP.to(n.current, {
              opacity: 0,
              duration: 0.6,
              ease: "none",
              onComplete: () => {
                a.ZP.set(n.current, {
                  clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                  opacity: 1,
                });
              },
            });
          };
        return (
          (0, o.useEffect)(() => {
            i();
          }, []),
          (0, o.useEffect)(() => {
            switch (e) {
              case r.LOADING:
                c();
                break;
              case r.LOADED:
                l();
            }
          }, [e]),
          (0, s.jsx)("div", {
            ref: n,
            style: {
              position: "fixed",
              zIndex: 50,
              width: "100vw",
              height: "100vh",
              background: "#efefef",
            },
          })
        );
      };
      var l = n(47907);
      ((i = r || (r = {})).INIT = "INITIALIZED"),
        (i.LOADING = "PENDING"),
        (i.LOADED = "COMPLETE");
      let d = (0, o.createContext)({
          goToRoute: (e) => {},
          loading: "INITIALIZED",
          setLoading: () => {},
        }),
        u = (e) => {
          let { children: t } = e,
            n = (0, l.useRouter)(),
            [i, r] = (0, o.useState)("INITIALIZED"),
            a = async (e) => {
              r("PENDING"),
                n.prefetch(e),
                setTimeout(() => {
                  window.scrollTo(0, -100), n.push(e, { scroll: !0 });
                }, 1e3);
            };
          return (0, s.jsxs)(d.Provider, {
            value: { goToRoute: a, loading: i, setLoading: r },
            children: [(0, s.jsx)(c, {}), t],
          });
        },
        _ = () => (0, o.useContext)(d);
    },
    66203: function (e, t, n) {
      "use strict";
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let i = (e) =>
          e.reduce(
            (e, t) => (
              Array.isArray(t) ? e.push(...i(t)) : null != t && e.push(t), e
            ),
            []
          );
        return i(t).join(" ");
      }
      n.d(t, {
        cn: function () {
          return i;
        },
      });
    },
    27409: function () {},
    63236: function (e) {
      e.exports = { backgroundBlurFilter: "home_backgroundBlurFilter__p3EL0" };
    },
    37145: function (e) {
      e.exports = {
        video: "AutoplayVideo_video__zckWy",
        fill: "AutoplayVideo_fill__ZPgCR",
        contain: "AutoplayVideo_contain__a0yBB",
        intrinsic: "AutoplayVideo_intrinsic__8aQoe",
      };
    },
    34802: function (e) {
      e.exports = {
        button: "Button_button__JJiqJ",
        inner: "Button_inner__fnyH6",
        border: "Button_border__hirH2",
        textInner: "Button_textInner__JTTHe",
        white: "Button_white__MQaf2",
        text: "Button_text__IZaCD",
        buttonArrow: "Button_buttonArrow__0W9XI",
        "button-text": "Button_button-text__yLgXu",
      };
    },
    91578: function (e) {
      e.exports = { cover: "DarkThemeSwitch_cover__hn_xc" };
    },
    69162: function (e) {
      e.exports = {
        linkContainer: "FloatingStartButton_linkContainer__eZz7z",
        button: "FloatingStartButton_button__Ncnrf",
        buttonArrow: "FloatingStartButton_buttonArrow__re1eN",
        "button-text": "FloatingStartButton_button-text__qflla",
        text: "FloatingStartButton_text__70x9M",
      };
    },
    38715: function (e) {
      e.exports = {
        image: "Image_image__RAAdZ",
        fill: "Image_fill__EiIzS",
        contain: "Image_contain__awbZj",
        intrinsic: "Image_intrinsic__JRoea",
      };
    },
    24566: function (e) {
      e.exports = {
        kotaverseCta: "KotaverseCta_kotaverseCta__bBpWa",
        backgroundImage: "KotaverseCta_backgroundImage__6TVCS",
        backgroundVideo: "KotaverseCta_backgroundVideo__FSZyH",
        smallHeading: "KotaverseCta_smallHeading__2lBEA",
        text: "KotaverseCta_text__IMtZr",
        marquee: "KotaverseCta_marquee__PNczk",
      };
    },
    86582: function (e) {
      e.exports = {
        marquee: "Marquee_marquee__ALmrA",
        inverted: "Marquee_inverted__b4oEL",
        inner: "Marquee_inner__fvYgL",
        "marquee-inverted": "Marquee_marquee-inverted__nPQo9",
      };
    },
    17039: function (e) {
      e.exports = {
        project: "ProjectCard_project__d1wbY",
        imageOverlay: "ProjectCard_imageOverlay__OCawr",
        small: "ProjectCard_small__xsL92",
        large: "ProjectCard_large__JOQbv",
        heading: "ProjectCard_heading__1csIW",
        projectText: "ProjectCard_projectText__o770X",
        projectImage: "ProjectCard_projectImage__Nfx9I",
        tags: "ProjectCard_tags__XdVcf",
      };
    },
    71605: function (e) {
      e.exports = { grid: "AnimatedGrid_grid__otAMD" };
    },
    39476: function (e) {
      e.exports = { container: "FadeIn_container__bjQVL" };
    },
    64454: function (e) {
      e.exports = { container: "FadeInRotate_container__QE9u9" };
    },
    4969: function (e) {
      e.exports = { container: "FadeInUp_container___uxva" };
    },
    94863: function (e) {
      e.exports = { container: "HeroFadeIn_container___NgC6" };
    },
    96980: function (e) {
      e.exports = { headingOuter: "LargeHeading_headingOuter__i9qcd" };
    },
    3568: function (e) {
      e.exports = { magnetic: "Magnetic_magnetic__LncOy" };
    },
    28634: function (e) {
      e.exports = {
        container: "Parallax_container__O28WA",
        containerInner: "Parallax_containerInner__yaEn0",
      };
    },
    69655: function (e) {
      e.exports = {
        container: "ScaleFadeIn_container__cK78G",
        inner: "ScaleFadeIn_inner__y4reT",
      };
    },
    67905: function (e) {
      e.exports = {
        articles: "Articles_articles__Wcz2C",
        heading: "Articles_heading__zNRl8",
        articlesList: "Articles_articlesList__CXW8a",
        article: "Articles_article__3ZS4Y",
        image: "Articles_image__Cvgsi",
        text: "Articles_text__HhO2L",
        filterNames: "Articles_filterNames__mCWt8",
        title: "Articles_title__h86PB",
        mobileButton: "Articles_mobileButton__Df7CF",
      };
    },
    24627: function (e) {
      e.exports = {
        ethos: "Ethos_ethos__vP_lg",
        sections: "Ethos_sections__tC3Xx",
      };
    },
    25648: function (e) {
      e.exports = { heading: "EthosHeading_heading__shnxH" };
    },
    20734: function (e) {
      e.exports = {
        section: "EthosSection_section__hjSSE",
        sectionHeading: "EthosSection_sectionHeading___kl5X",
        sectionDescription: "EthosSection_sectionDescription__9BWQV",
        lineInner: "EthosSection_lineInner__7mqkk",
        sectionTrigger: "EthosSection_sectionTrigger__Dbhq8",
        sectionImage: "EthosSection_sectionImage__R8Wnf",
        numberOuter: "EthosSection_numberOuter__uo7oD",
        number: "EthosSection_number__MbFH_",
        headingOuter: "EthosSection_headingOuter___3MYl",
        sectionImageReveal: "EthosSection_sectionImageReveal__oz58_",
        line: "EthosSection_line___wkFr",
      };
    },
    4723: function (e) {
      e.exports = {
        faqsList: "FaqsList_faqsList__3yyiS",
        heading: "FaqsList_heading__kirHR",
        faq: "FaqsList_faq__US_6Y",
        question: "FaqsList_question__6fKon",
        icon: "FaqsList_icon__54ODy",
        answer: "FaqsList_answer__XAnT2",
      };
    },
    70675: function (e) {
      e.exports = {
        hero: "Hero_hero__IrR3f",
        logos: "Hero_logos__jC9k_",
        logosInner: "Hero_logosInner__D4sWL",
        splitText: "Hero_splitText__diMTw",
        mobile: "Hero_mobile__VkWXK",
        introText: "Hero_introText__wboFn",
      };
    },
    95794: function (e) {
      e.exports = { desktop: "HeroSplitTextDesktop_desktop__Bey7n" };
    },
    87211: function (e) {
      e.exports = {
        video: "HeroVideo_video__OoWDY",
        icon: "HeroVideo_icon__7Uphv",
        line: "HeroVideo_line__lnkqU",
      };
    },
    85436: function (e) {
      e.exports = { grid: "AnimatedLogoGrid_grid__3n0at" };
    },
    87836: function (e) {
      e.exports = {
        partners: "Partners_partners__jBo8y",
        heading: "Partners_heading__AOTNV",
        bottom: "Partners_bottom__5DSXe",
        headingInner: "Partners_headingInner__vdhDe",
        arrowWrapper: "Partners_arrowWrapper__Xq8Wc",
        logos: "Partners_logos__7QiB4",
        logosInner: "Partners_logosInner__Aoq5_",
        logo: "Partners_logo__eDI8e",
        introText: "Partners_introText__3_Pu8",
      };
    },
    75329: function (e) {
      e.exports = {
        animatedArrow: "AnimatedArrow_animatedArrow__Q4v7Q",
        innerArrow: "AnimatedArrow_innerArrow__6mwTB",
      };
    },
    65601: function (e) {
      e.exports = {
        panel: "AnimatedPanel_panel__eAXfR",
        spacer: "AnimatedPanel_spacer__w4GTD",
      };
    },
    75801: function (e) {
      e.exports = { mediaContainer: "ServiceMedia_mediaContainer__WGgZa" };
    },
    57142: function (e) {
      e.exports = {
        services: "Services_services__YnZAs",
        panels: "Services_panels__VAWdb",
        panel: "Services_panel__twaD0",
        panelText: "Services_panelText__sc7fW",
        panelImage: "Services_panelImage__CRtd5",
        panelBackground: "Services_panelBackground__r6Fz4",
        panelHeading: "Services_panelHeading__V9IPr",
        tags: "Services_tags__yRg49",
        tag: "Services_tag__iIhML",
        panelMainText: "Services_panelMainText__Osy3X",
      };
    },
    72746: function (e) {
      e.exports = {
        heading: "ServicesHeading_heading__w6gAZ",
        bottom: "ServicesHeading_bottom__K8yXu",
        arrow: "ServicesHeading_arrow__L7E0F",
      };
    },
    83816: function (e) {
      e.exports = {
        panel: "ServicesPanel_panel__YF4OS",
        panelText: "ServicesPanel_panelText__iyjwZ",
        panelImage: "ServicesPanel_panelImage__q_zlA",
        panelBackground: "ServicesPanel_panelBackground__O9mDV",
        panelHeading: "ServicesPanel_panelHeading__5Sy4s",
        tags: "ServicesPanel_tags__6NQOl",
        tag: "ServicesPanel_tag__JYwRk",
        panelMainText: "ServicesPanel_panelMainText__4F0TZ",
      };
    },
    65657: function (e) {
      e.exports = { panels: "ServicesPanels_panels__NpKkK" };
    },
    11141: function (e) {
      e.exports = { statistics: "Statistics_statistics__vWlOY" };
    },
    39691: function (e) {
      e.exports = {
        panels: "StatisticsCarousel_panels__pxnru",
        container: "StatisticsCarousel_container__2XA6W",
        swiper: "StatisticsCarousel_swiper__PGdj6",
        swiperSlide: "StatisticsCarousel_swiperSlide__is8BS",
        swiperNav: "StatisticsCarousel_swiperNav__Pi054",
        swiperNavNext: "StatisticsCarousel_swiperNavNext__sdg5A",
      };
    },
    12342: function (e) {
      e.exports = {
        heading: "StatisticsHeading_heading__3C_3F",
        bottom: "StatisticsHeading_bottom__WtLQC",
      };
    },
    70993: function (e) {
      e.exports = {
        panel: "StatisticsPanel_panel__5YHtR",
        panelWrap: "StatisticsPanel_panelWrap__XLJZs",
        logo: "StatisticsPanel_logo__Y5wQT",
        visual: "StatisticsPanel_visual__W0d30",
        visualMobile: "StatisticsPanel_visualMobile__NTMW2",
        heading: "StatisticsPanel_heading__UrLlt",
        rainbow: "StatisticsPanel_rainbow__FRjps",
        description: "StatisticsPanel_description__csS74",
        buttons: "StatisticsPanel_buttons__FwZUj",
        backgroundImage: "StatisticsPanel_backgroundImage___Dgsu",
      };
    },
    80868: function (e) {
      e.exports = {
        work: "Work_work__rSI8c",
        text: "Work_text__WI9A4",
        heading: "Work_heading__pbv4g",
        bottom: "Work_bottom__rzrzH",
        rightText: "Work_rightText__zx_Y0",
        projects: "Work_projects__A5q77",
        buttonContainer: "Work_buttonContainer__Owbmu",
      };
    },
    18020: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i.S;
        },
      });
      var i = n(58710);
    },
  },
  function (e) {
    e.O(0, [922, 689, 912, 924, 228, 855, 721, 971, 69, 744], function () {
      return e((e.s = 14514));
    }),
      (_N_E = e.O());
  },
]);
