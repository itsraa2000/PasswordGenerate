// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as JsxRuntime from "react/jsx-runtime";

function App(props) {
  var match = React.useState(function () {
        return "P4$5W0rD!!@";
      });
  var match$1 = React.useState(function () {
        return false;
      });
  var setUpperCase = match$1[1];
  var upperCase = match$1[0];
  var match$2 = React.useState(function () {
        return false;
      });
  var setLowerCase = match$2[1];
  var lowerCase = match$2[0];
  var match$3 = React.useState(function () {
        return false;
      });
  var setNumberCheck = match$3[1];
  var numberCheck = match$3[0];
  var match$4 = React.useState(function () {
        return false;
      });
  var setSymbolCheck = match$4[1];
  var symbolCheck = match$4[0];
  var match$5 = React.useState(function () {
        return 8;
      });
  var setPasswordLength = match$5[1];
  var passwordLength = match$5[0];
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseLetters = upperCaseLetters.toLowerCase();
  var onLengthChange = function (evt) {
    evt.preventDefault();
    var value = evt.target.value;
    setPasswordLength(function (_prev) {
          return value;
        });
  };
  var generatePassword = function (_evt) {
    var characterList = "";
    if (upperCase) {
      characterList = upperCaseLetters;
    }
    if (lowerCase) {
      characterList = lowerCaseLetters;
    }
    if (numberCheck) {
      characterList = "0123456789";
    }
    if (!symbolCheck) {
      return ;
    }
    characterList = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  };
  return JsxRuntime.jsx("div", {
              children: JsxRuntime.jsx("div", {
                    children: JsxRuntime.jsx("div", {
                          children: JsxRuntime.jsxs("div", {
                                children: [
                                  JsxRuntime.jsx("div", {
                                        children: JsxRuntime.jsx("h1", {
                                              children: "Passsword Generator",
                                              className: "text-mainlight text-3xl font-thin"
                                            }),
                                        className: "flex justify-center p-6"
                                      }),
                                  JsxRuntime.jsx("div", {
                                        children: JsxRuntime.jsxs("div", {
                                              children: [
                                                JsxRuntime.jsx("div", {
                                                      children: JsxRuntime.jsx("h2", {
                                                            children: match[0],
                                                            className: "text-2xl text-grey"
                                                          }),
                                                      className: "relative p-3"
                                                    }),
                                                JsxRuntime.jsx("div", {
                                                      children: JsxRuntime.jsxs("button", {
                                                            children: [
                                                              JsxRuntime.jsx("img", {
                                                                    className: "h-5 w-5",
                                                                    alt: "COPY Generate Password",
                                                                    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTQ1MS43ODMgMzM3LjU3NmgtMzIuNjMxdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik00NTEuNzgzIDMwNC45NDZoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXpNNDUxLjc4MyAyNzIuMzE1aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTQ1MS43ODMgMjM5LjY4NWgtMzIuNjMxdi0zMi42MzFoMzIuNjMxek00NTEuNzgzIDIwNy4wNTRoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNNDE5LjE1MyAxNzQuNDI0aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6TTE5MC43MzkgMTA5LjE2MmgtMzIuNjMxVjc2LjUzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTIyMy4zNjkgMTA5LjE2MmgtMzIuNjMxVjc2LjUzMWgzMi42MzF6TTI1NiAxMDkuMTYyaC0zMi42MzFWNzYuNTMxSDI1NnpNMjIzLjM2OSA0MDIuODM4SDI1NnYzMi42MzFoLTMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTkwLjczOSA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMTU4LjEwOCA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTI1LjQ3OCA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMzIxLjI2MSA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMjg4LjYzMSA0MDIuODM4aDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMzUzLjg5MiAxNDEuNzkzaDMyLjYzMXYzMi42MzFoLTMyLjYzMXpNMjU2IDQwMi44MzhoMzIuNjMxdjMyLjYzMUgyNTZ6TTEyNS40NzggNDM1LjQ2OEg5Mi44NDd2LTMyLjYzMWgzMi42MzF6TTkyLjg0NyA0MDIuODM3SDYwLjIxNnYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNOTIuODQ3IDM3MC4yMDdINjAuMjE2di0zMi42MzFoMzIuNjMxek05Mi44NDcgMzM3LjU3Nkg2MC4yMTZ2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTkyLjg0NyAzMDQuOTQ2SDYwLjIxNnYtMzIuNjMxaDMyLjYzMXpNOTIuODQ3IDI3Mi4zMTVINjAuMjE2di0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik05Mi44NDcgMjM5LjY4NUg2MC4yMTZ2LTMyLjYzMWgzMi42MzF6TTkyLjg0NyAyMDcuMDU0SDYwLjIxNnYtMzIuNjMxaDMyLjYzMXpNMTkwLjczOSAzNzAuMjA3aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTIyMy4zNjkgMzcwLjIwN2gtMzIuNjMxdi0zMi42MzFoMzIuNjMxek0yNTYgMzcwLjIwN2gtMzIuNjMxdi0zMi42MzFIMjU2ek0yODguNjMxIDM3MC4yMDdIMjU2di0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMjEuMjYxIDM3MC4yMDdIMjg4LjYzdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNTMuODkyIDM3MC4yMDdoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMzg2LjUyMiAzNzAuMjA3aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTM4Ni41MjIgNDAyLjgzN2gtMzIuNjMxdi0zMi42MzFoMzIuNjMxek00MTkuMTUzIDM3MC4yMDdoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXpNMTU4LjEwOCAzMzcuNTc2aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6IiBmaWxsPSIjMjIyODMxIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggZD0iTTE1OC4xMDggMzA0Ljk0NmgtMzIuNjMxdi0zMi42MzFoMzIuNjMxek0xNTguMTA4IDI3Mi4zMTVoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTU4LjEwOCAyMzkuNjg1aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6TTE1OC4xMDggMjA3LjA1NGgtMzIuNjMxdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNTguMTA4IDE3NC40MjRoLTMyLjYzMXYtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTI1LjQ3OCAxNzQuNDI0SDkyLjg0N3YtMzIuNjMxaDMyLjYzMXoiIGZpbGw9IiMyMjI4MzEiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJNMTU4LjEwOCAxNDEuNzk0aC0zMi42MzF2LTMyLjYzMWgzMi42MzF6TTI4OC42MzEgMTQxLjc5NEgyNTZ2LTMyLjYzMWgzMi42MzF6TTM1My44OTIgMTc0LjQyNGgtMzIuNjMxdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMjEuMjYxIDE3NC40MjRIMjg4LjYzdi0zMi42MzFoMzIuNjMxeiIgZmlsbD0iIzIyMjgzMSIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                                                                  }),
                                                              "COPY"
                                                            ],
                                                            className: " text-maindark flex items-center justify-center bg-maingreen hover:bg-subgreen font-medium text-sm px-4 py-2"
                                                          }),
                                                      className: "relative flex items-center justify-end p-3"
                                                    })
                                              ],
                                              className: "bg-subdark flex items-center justify-between"
                                            }),
                                        className: "flex flex-col"
                                      }),
                                  JsxRuntime.jsx("div", {
                                        children: JsxRuntime.jsxs("div", {
                                              children: [
                                                JsxRuntime.jsxs("div", {
                                                      children: [
                                                        JsxRuntime.jsxs("div", {
                                                              children: [
                                                                JsxRuntime.jsx("h3", {
                                                                      children: "Character Length",
                                                                      className: "text-mainlight text-xl font-thin"
                                                                    }),
                                                                JsxRuntime.jsx("h2", {
                                                                      children: String(passwordLength),
                                                                      className: "flex items-center text-maingreen text-2xl"
                                                                    })
                                                              ],
                                                              className: "flex justify-between items-center pb-3"
                                                            }),
                                                        JsxRuntime.jsx("div", {
                                                              children: JsxRuntime.jsx("input", {
                                                                    className: "w-full h-2 bg-maindark rounded-lg appearance-none cursor-pointer glow-1 accent-mainlight",
                                                                    id: "passwordLength",
                                                                    max: "36",
                                                                    min: "8",
                                                                    type: "range",
                                                                    value: String(passwordLength),
                                                                    onChange: onLengthChange
                                                                  }),
                                                              className: "flex"
                                                            })
                                                      ],
                                                      className: "flex flex-col pb-8"
                                                    }),
                                                JsxRuntime.jsxs("div", {
                                                      children: [
                                                        JsxRuntime.jsxs("div", {
                                                              children: [
                                                                JsxRuntime.jsx("input", {
                                                                      className: "h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]",
                                                                      checked: upperCase,
                                                                      type: "checkbox",
                                                                      onChange: (function (param) {
                                                                          setUpperCase(function (prev) {
                                                                                return !prev;
                                                                              });
                                                                        })
                                                                    }),
                                                                JsxRuntime.jsx("p", {
                                                                      children: "Include Uppercase Letters",
                                                                      className: "text-mainlight text-xl font-thin"
                                                                    })
                                                              ],
                                                              className: "flex flex-row space-x-4 items-center"
                                                            }),
                                                        JsxRuntime.jsxs("div", {
                                                              children: [
                                                                JsxRuntime.jsx("input", {
                                                                      className: "h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]",
                                                                      checked: lowerCase,
                                                                      type: "checkbox",
                                                                      onChange: (function (param) {
                                                                          setLowerCase(function (prev) {
                                                                                return !prev;
                                                                              });
                                                                        })
                                                                    }),
                                                                JsxRuntime.jsx("p", {
                                                                      children: "Include Lowercase Letters",
                                                                      className: "text-mainlight text-xl font-thin"
                                                                    })
                                                              ],
                                                              className: "flex flex-row space-x-4 items-center"
                                                            }),
                                                        JsxRuntime.jsxs("div", {
                                                              children: [
                                                                JsxRuntime.jsx("input", {
                                                                      className: "h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]",
                                                                      checked: numberCheck,
                                                                      type: "checkbox",
                                                                      onChange: (function (param) {
                                                                          setNumberCheck(function (prev) {
                                                                                return !prev;
                                                                              });
                                                                        })
                                                                    }),
                                                                JsxRuntime.jsx("p", {
                                                                      children: "Include Numbers",
                                                                      className: "text-mainlight text-xl font-thin"
                                                                    })
                                                              ],
                                                              className: "flex flex-row space-x-4 items-center"
                                                            }),
                                                        JsxRuntime.jsxs("div", {
                                                              children: [
                                                                JsxRuntime.jsx("input", {
                                                                      className: "h-5 w-5 bg-subdark border-sublight border-solid border-box border-[3px]",
                                                                      checked: symbolCheck,
                                                                      type: "checkbox",
                                                                      onChange: (function (param) {
                                                                          setSymbolCheck(function (prev) {
                                                                                return !prev;
                                                                              });
                                                                        })
                                                                    }),
                                                                JsxRuntime.jsx("p", {
                                                                      children: "Include Symbols",
                                                                      className: "text-mainlight text-xl font-thin"
                                                                    })
                                                              ],
                                                              className: "flex flex-row space-x-4 items-center"
                                                            })
                                                      ],
                                                      className: "flex flex-col space-y-4 pb-6"
                                                    }),
                                                JsxRuntime.jsx("div", {
                                                      children: JsxRuntime.jsx("div", {
                                                            children: JsxRuntime.jsxs("div", {
                                                                  children: [
                                                                    JsxRuntime.jsx("h2", {
                                                                          children: "STRENGTH",
                                                                          className: "p-3 text-xl text-grey"
                                                                        }),
                                                                    JsxRuntime.jsxs("div", {
                                                                          children: [
                                                                            JsxRuntime.jsx("div", {
                                                                                  className: "h-8 w-[10px] bg-maindark border-sublight border-solid border-box border-2"
                                                                                }),
                                                                            JsxRuntime.jsx("div", {
                                                                                  className: "h-8 w-[10px] bg-maindark border-sublight border-solid border-box border-2"
                                                                                }),
                                                                            JsxRuntime.jsx("div", {
                                                                                  className: "h-8 w-[10px] bg-maindark border-sublight border-solid border-box border-2"
                                                                                }),
                                                                            JsxRuntime.jsx("div", {
                                                                                  className: "h-8 w-[10px] bg-maindark border-sublight border-solid border-box border-2"
                                                                                })
                                                                          ],
                                                                          className: "flex space-x-2 p-3"
                                                                        })
                                                                  ],
                                                                  className: "flex justify-between items-center"
                                                                }),
                                                            className: "flex flex-col"
                                                          }),
                                                      className: "bg-maindark mb-6"
                                                    }),
                                                JsxRuntime.jsxs("button", {
                                                      children: [
                                                        JsxRuntime.jsx("span", {
                                                              children: "GENERATE"
                                                            }),
                                                        JsxRuntime.jsx("img", {
                                                              className: "h-6 w-6 ml-2",
                                                              alt: "Generate",
                                                              src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTAwMDAgMTAwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGZpbGw9IiMyMjI4MzEiIGQ9Ik05NjM1IDQ2NTBoLTcwMHYtNzAwaC03MDB2LTcwMGgtNzAwdi03MDBoLTcwMHYtNzAwaC03MDB2MTQwMGg3MDB2NzAwaDcwMHY3MDBIMzY1djcwMGg3MTcwdjcwMGgtNzAwdjcwMGgtNzAwdjE0MDBoNzAwdi03MDBoNzAwdi03MDBoNzAwdi03MDBoNzAwdi03MDBoNzAweiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
                                                            })
                                                      ],
                                                      className: "text-maindark w-full justify-center flex items-center bg-maingreen hover:bg-subgreen py-3 text-xl font-thin",
                                                      onClick: generatePassword
                                                    })
                                              ],
                                              className: "flex flex-col justify-between m-4"
                                            }),
                                        className: "mx-auto flex w-full max-w-[420px] flex-col bg-subdark m-4"
                                      })
                                ],
                                className: "mx-auto flex w-full max-w-[420px] flex-col"
                              }),
                          className: "mx-auto flex h-screen w-[1220px] max-w-full flex-col px-md py-[15svh]"
                        }),
                    className: "h-full w-full"
                  }),
              className: "screen-container"
            });
}

var make = App;

export {
  make ,
}
/* react Not a pure module */
