(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [210],
  {
    89461: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return u;
          },
        });
      var n = s(3827),
        a = s(64090),
        r = s(34802),
        l = s.n(r),
        c = s(66203),
        i = s(75962),
        o = s(71947);
      function u(e) {
        let {
            href: t,
            text: s,
            type: r,
            color: u = "black",
            target: d = "",
            direction: m = "forwards",
          } = e,
          h = (0, a.useRef)(null),
          x = (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("span", {
              className: l().text,
              children: [
                (0, n.jsx)("span", {
                  className: l().textInner,
                  dangerouslySetInnerHTML: { __html: s },
                }),
                (0, n.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 17.1 15.17",
                  className: l().buttonArrow,
                  children: (0, n.jsx)("path", {
                    d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                    fill: "currentColor",
                  }),
                }),
              ],
            }),
          }),
          p = l()[u];
        return (() => {
          switch (r) {
            case "a-internal":
              return (0, n.jsx)(o.default, {
                children: (0, n.jsx)("div", {
                  className: (0, c.cn)(l().button, p),
                  ref: h,
                  "data-direction": m,
                  children: (0, n.jsxs)(i.default, {
                    href: t,
                    className: l().inner,
                    children: [
                      (0, n.jsx)("span", { className: l().border }),
                      x,
                    ],
                  }),
                }),
              });
            case "a-external":
              return (0, n.jsx)(o.default, {
                children: (0, n.jsx)("div", {
                  className: (0, c.cn)(l().button, p),
                  ref: h,
                  "data-direction": m,
                  children: (0, n.jsxs)("a", {
                    href: t,
                    className: lainner,
                    target: d,
                    children: [
                      (0, n.jsx)("span", { className: l().border }),
                      x,
                    ],
                  }),
                }),
              });
            default:
              return (0, n.jsx)(o.default, {
                children: (0, n.jsx)("button", {
                  className: (0, c.cn)(l().button, p),
                  ref: h,
                  "data-direction": m,
                  children: (0, n.jsxs)("a", {
                    className: l().inner,
                    children: [
                      (0, n.jsx)("span", { className: l().border }),
                      x,
                    ],
                  }),
                }),
              });
          }
        })();
      }
    },
    63426: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return o;
          },
        });
      var n = s(3827),
        a = s(64090),
        r = s(11984),
        l = s(49908),
        c = s(71605),
        i = s.n(c);
      function o(e) {
        let { children: t } = e,
          s = (0, a.useRef)(null);
        return (
          (0, l.V)(
            () => {
              r.p8.matchMedia().add("(min-width: 850px)", () => {
                r.ic.batch('[data-animation="grid-item"]', {
                  onEnter: (e) =>
                    r.p8.to(e, {
                      opacity: 1,
                      y: 0,
                      ease: "power1.out",
                      duration: 1,
                      stagger: 0.15,
                    }),
                });
              });
            },
            { scope: s }
          ),
          (0, n.jsx)("div", { className: i().grid, ref: s, children: t })
        );
      }
    },
    71947: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return i;
          },
        });
      var n = s(3827),
        a = s(64090),
        r = s(11984),
        l = s(3568),
        c = s.n(l);
      function i(e) {
        let { children: t, fill: s = !1 } = e,
          l = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            if (null === l.current || window.innerWidth < 850) return;
            let e = r.p8.quickTo(l.current, "x", {
                duration: 0.5,
                ease: "power3.out",
              }),
              t = r.p8.quickTo(l.current, "y", {
                duration: 0.5,
                ease: "power3.out",
              }),
              s = (s) => {
                if (!l.current) return;
                let { clientX: n, clientY: a } = s,
                  {
                    height: r,
                    width: c,
                    left: i,
                    top: o,
                  } = l.current.getBoundingClientRect(),
                  u = n - (i + c / 2),
                  d = a - (o + r / 2);
                (d *= 0.5), e((u *= 0.5)), t(d);
              },
              n = () => {
                e(0), t(0);
              };
            return (
              l.current.addEventListener("mousemove", s),
              l.current.addEventListener("mouseleave", n),
              () => {
                null !== l.current &&
                  (l.current.removeEventListener("mousemove", s),
                  l.current.removeEventListener("mouseleave", n));
              }
            );
          }, []),
          (0, n.jsx)("div", {
            className: c().magnetic,
            "data-fill": s,
            ref: l,
            children: t,
          })
        );
      }
    },
    39152: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return f;
          },
        });
      var n = s(3827),
        a = s(64090),
        r = s(89542);
      s(15355);
      var l = (0, s(13472).$)("ed9936b7e6c93f4df39adc7b63f53de659104e89"),
        c = s(84036),
        i = s(40343),
        o = s.n(i),
        u = s(41852),
        d = s(66203),
        m = s(63426),
        h = s(89461);
      let x = { message: null, buttonText: null, status: null };
      function p(e) {
        let { text: t, status: s } = e,
          { pending: a } = (0, r.useFormStatus)();
        return (0, n.jsxs)("button", {
          type: "submit",
          "aria-disabled": a,
          className: (0, d.cn)(o().submit, "sent" === s ? o().sent : ""),
          children: [
            (0, n.jsxs)("span", {
              className: o().text,
              children: [t || "Send it", " "],
            }),
            "sent" !== s &&
              "failed" !== s &&
              (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 17.1 15.17",
                className: o().buttonArrow,
                children: (0, n.jsx)("path", {
                  d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                  fill: "currentColor",
                }),
              }),
            "sent" === s &&
              (0, n.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 800 707.51",
                className: o().buttonArrow,
                children: (0, n.jsx)("path", {
                  d: "M738.37 0L322.99 598.12 47.42 373.14 0 431.25 338.37 707.51 800 42.78 738.37 0z",
                  fill: "#fff",
                }),
              }),
            "failed" === s ||
              (null === s &&
                (0, n.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 17.1 15.17",
                  className: o().buttonArrow,
                  children: (0, n.jsx)("path", {
                    d: "m17.1,7.58s-.01-.04-.01-.06c.01-.22-.06-.45-.24-.61L9.23.19c-.31-.27-.78-.24-1.06.07-.27.31-.24.78.07,1.06l6.26,5.52H.75c-.41,0-.75.34-.75.75s.34.75.75.75h13.74l-6.26,5.52c-.31.27-.34.75-.07,1.06.15.17.35.25.56.25.18,0,.35-.06.5-.19l7.62-6.72c.18-.16.25-.39.24-.61,0-.02.01-.04.01-.06Z",
                    fill: "currentColor",
                  }),
                })),
          ],
        });
      }
      function f(e) {
        let { data: t, theme: s = "light" } = e,
          [i, f] = (0, r.useFormState)(l, x),
          [_, b] = (0, a.useState)("Attachments"),
          [j, g] = (0, a.useState)(""),
          [v, w] = (0, a.useState)(""),
          [N, y] = (0, a.useState)(""),
          F = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            g(document.title),
              w(window.location.href),
              localStorage.getItem("referrer")
                ? y("PPC")
                : y(document.referrer);
          }, [j, v, N]),
          (0, a.useEffect)(() => {
            (null == i ? void 0 : i.status) === "sent" &&
              F.current &&
              F.current.scrollIntoView({ behavior: "smooth" });
          }, [null == i ? void 0 : i.status]),
          (0, n.jsx)("section", {
            className: o().contactForm,
            "data-theme": s,
            ref: F,
            children: (0, n.jsxs)("div", {
              className: "container",
              children: [
                (null == i ? void 0 : i.status) !== "sent" &&
                  (0, n.jsx)("div", {
                    className: o().formOuter,
                    children: (0, n.jsx)(c.default, {
                      delay: 0.25,
                      children: (0, n.jsxs)("form", {
                        action: f,
                        className: (0, d.cn)(
                          o().form,
                          (null == i ? void 0 : i.status) === "sent"
                            ? o().sent
                            : ""
                        ),
                        children: [
                          (0, n.jsxs)("fieldset", {
                            className: o().fullWidth,
                            children: [
                              (0, n.jsx)("legend", {
                                children: "I am interested in :",
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.1",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "A new website",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.2",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "Branding",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.3",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "Motion graphics",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.4",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "E-Commerce",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.5",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "Development",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.6",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "On-going support",
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "interestedIn",
                                    value: "1.7",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().button,
                                    children: "App from scratch",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsx)("input", {
                            className: o().quarterWidth,
                            type: "text",
                            placeholder: "First name*",
                            name: "firstName",
                            required: !0,
                          }),
                          (0, n.jsx)("input", {
                            className: o().quarterWidth,
                            type: "text",
                            placeholder: "Last name*",
                            name: "lastName",
                            required: !0,
                          }),
                          (0, n.jsx)("input", {
                            className: (0, d.cn)(o().halfWidth, o().email),
                            type: "email",
                            placeholder: "Email*",
                            name: "email",
                            required: !0,
                          }),
                          (0, n.jsxs)("div", {
                            className: (0, d.cn)(o().halfWidth, o().budget),
                            children: [
                              (0, n.jsx)("input", {
                                className: o().inputBudget,
                                type: "text",
                                placeholder: "Budget (\xa3)",
                                name: "budget",
                              }),
                              (0, n.jsxs)("span", {
                                className: o().budgetDescription,
                                children: [
                                  "More info on minimum/typical budget sizes can be found ",
                                  (0, n.jsx)("a", {
                                    href: "/faqs",
                                    target: "_blank",
                                    children: "here",
                                  }),
                                  ".",
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: (0, d.cn)(o().halfWidth, o().uploads),
                            children: [
                              (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 19.59 22.38",
                                children: (0, n.jsx)("path", {
                                  fill: "dark" === s ? "#fff" : "#000",
                                  d: "M13.86 7.15l-1.42-1.42-7.1 7.1c-1.17 1.18-1.15 3.09.03 4.26a3.006 3.006 0 004.23 0l8.52-8.52a5.022 5.022 0 00-7.1-7.1l-8.95 8.94-.02.02a7.007 7.007 0 000 9.9 7.007 7.007 0 009.9 0l.02-.02 6.11-6.1-1.42-1.42-6.11 6.1-.02.02a4.983 4.983 0 01-7.06-.05 4.986 4.986 0 010-7.01l.02-.02 8.95-8.94a3.015 3.015 0 014.26-.03c1.18 1.17 1.2 3.07.03 4.26l-.03.03-8.52 8.52c-.39.39-1.03.39-1.42 0s-.39-1.03 0-1.42l7.1-7.1z",
                                }),
                              }),
                              (0, n.jsx)("input", {
                                type: "file",
                                id: "files",
                                className: o().inputfile,
                                name: "attachments",
                                accept: ".doc,.docx,.pdf,image/*",
                                multiple: !0,
                                onChange: (e) => {
                                  let t = "Attachments";
                                  e.target.files &&
                                    e.target.files.length > 0 &&
                                    (t =
                                      e.target.files.length > 1
                                        ? "".concat(
                                            e.target.files.length,
                                            " files selected"
                                          )
                                        : e.target.files[0].name),
                                    b(t);
                                },
                              }),
                              (0, n.jsx)("label", {
                                htmlFor: "files",
                                children: _,
                              }),
                            ],
                          }),
                          (0, n.jsx)("input", {
                            className: o().fullWidth,
                            type: "text",
                            placeholder: "Message",
                            name: "message",
                          }),
                          (0, n.jsx)("input", {
                            className: o().fullWidth,
                            type: "text",
                            placeholder: "Referrer",
                            name: "referrer",
                            defaultValue: N,
                            hidden: !0,
                          }),
                          (0, n.jsx)("input", {
                            className: o().fullWidth,
                            type: "text",
                            placeholder: "pageTitle",
                            name: "pageTitle",
                            defaultValue: j,
                            hidden: !0,
                          }),
                          (0, n.jsx)("input", {
                            className: o().fullWidth,
                            type: "text",
                            placeholder: "pageUrl",
                            name: "pageUrl",
                            defaultValue: v,
                            hidden: !0,
                          }),
                          (0, n.jsxs)("div", {
                            className: o().bottomRow,
                            children: [
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "newsletter",
                                    value: "1",
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().checkbox,
                                  }),
                                  "I'm happy to receive a monthly newsletter from KOTA",
                                ],
                              }),
                              (0, n.jsxs)("label", {
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    name: "privacy",
                                    value: "1",
                                    required: !0,
                                  }),
                                  (0, n.jsx)("span", {
                                    className: o().checkbox,
                                  }),
                                  "I understand that KOTA will securely hold my data in accordance with their privacy policy.",
                                ],
                              }),
                              (0, n.jsx)(p, {
                                text:
                                  (null == i ? void 0 : i.buttonText) ||
                                  "Submit",
                                status: (null == i ? void 0 : i.status) || "",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                (null == i ? void 0 : i.status) === "sent" &&
                  (0, n.jsxs)("div", {
                    className: o().successMessage,
                    children: [
                      (0, n.jsx)("h2", {
                        className: o().successTitle,
                        children: null == t ? void 0 : t.heading,
                      }),
                      (0, n.jsx)("p", {
                        className: o().successText,
                        children: null == t ? void 0 : t.text,
                      }),
                      (0, n.jsx)(m.default, {
                        children: (0, n.jsx)("div", {
                          className: "container",
                          children:
                            (null == t ? void 0 : t.relatedProjects) &&
                            (null == t
                              ? void 0
                              : t.relatedProjects
                                  .filter((e) => null !== e)
                                  .map((e) =>
                                    (0, n.jsx)(
                                      u.Z,
                                      { project: e, size: "small" },
                                      null == e ? void 0 : e.databaseId
                                    )
                                  )),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: o().buttonWrap,
                        children: (0, n.jsx)(h.default, {
                          type: "a-internal",
                          href: "/work",
                          text: "View all our projects",
                          color: "light" == s ? "black" : "white",
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          })
        );
      }
    },
    95423: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return c;
          },
        });
      var n = s(3827),
        a = s(64090),
        r = s(59546),
        l = s.n(r);
      function c(e) {
        let { text: t, className: s } = e,
          r = (0, a.useRef)(null),
          [c, i] = (0, a.useState)("Copy email address"),
          [o, u] = (0, a.useState)("");
        return (0, n.jsxs)("a", {
          className: "".concat(s, " ").concat(l().copyText),
          ref: r,
          onClick: () => {
            navigator.clipboard
              .writeText(t)
              .then(() => {
                i("Copied!"),
                  u(l().mobile),
                  setTimeout(() => {
                    u(""), i("Copy email address");
                  }, 3e3);
              })
              .catch((e) => {
                console.error("Failed to copy text:", e);
              });
          },
          children: [
            t,
            (0, n.jsx)("div", {
              className: "".concat(l().tooltip, " ").concat(o),
              children: c,
            }),
          ],
        });
      }
    },
    13472: function (e, t, s) {
      "use strict";
      Object.defineProperty(t, "$", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
      let n = s(15355);
      function a(e) {
        let { createServerReference: t } = s(97355);
        return t(e, n.callServer);
      }
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
    71605: function (e) {
      e.exports = { grid: "AnimatedGrid_grid__otAMD" };
    },
    3568: function (e) {
      e.exports = { magnetic: "Magnetic_magnetic__LncOy" };
    },
    40343: function (e) {
      e.exports = {
        contactForm: "Form_contactForm__X6bdS",
        formOuter: "Form_formOuter__NHTHq",
        form: "Form_form___noC4",
        sent: "Form_sent__uX3U5",
        button: "Form_button__WKdUX",
        halfWidth: "Form_halfWidth__mwquS",
        uploads: "Form_uploads__8vsGL",
        budget: "Form_budget__0YVbL",
        inputBudget: "Form_inputBudget__lcmBw",
        budgetDescription: "Form_budgetDescription__Yaew0",
        email: "Form_email__utu1q",
        quarterWidth: "Form_quarterWidth__sYVWE",
        fullWidth: "Form_fullWidth__8_h_i",
        bottomRow: "Form_bottomRow__9ypJg",
        checkbox: "Form_checkbox__UtgyE",
        submit: "Form_submit__Dnq6N",
        "button-text": "Form_button-text__MCGRV",
        buttonArrow: "Form_buttonArrow__OCLQj",
        inputfile: "Form_inputfile__ZF6M3",
        successMessage: "Form_successMessage__nGL57",
        buttonWrap: "Form_buttonWrap__iVNPZ",
        successTitle: "Form_successTitle__gqNPY",
        successText: "Form_successText__oDeUM",
      };
    },
    59546: function (e) {
      e.exports = {
        copyText: "CopyText_copyText__OtWNq",
        tooltip: "CopyText_tooltip__HuxWa",
        mobile: "CopyText_mobile__rHEGN",
      };
    },
  },
]);
