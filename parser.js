module.exports = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { start: peg$parsestart },
        peg$startRuleFunction  = peg$parsestart,

        peg$c0 = /^[a-zA-Z0-9_]/,
        peg$c1 = { type: "class", value: "[a-zA-Z0-9_]", description: "[a-zA-Z0-9_]" },
        peg$c2 = [],
        peg$c3 = /^[ \n\t\r]/,
        peg$c4 = { type: "class", value: "[ \\n\\t\\r]", description: "[ \\n\\t\\r]" },
        peg$c5 = peg$FAILED,
        peg$c6 = ",",
        peg$c7 = { type: "literal", value: ",", description: "\",\"" },
        peg$c8 = ".",
        peg$c9 = { type: "literal", value: ".", description: "\".\"" },
        peg$c10 = function() { return 'get'; },
        peg$c11 = ":",
        peg$c12 = { type: "literal", value: ":", description: "\":\"" },
        peg$c13 = function() { return 'map'; },
        peg$c14 = "[",
        peg$c15 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c16 = "]",
        peg$c17 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c18 = "@",
        peg$c19 = { type: "literal", value: "@", description: "\"@\"" },
        peg$c20 = function(ls) { return ls.join(''); },
        peg$c21 = function(t) { return t; },
        peg$c22 = function(head, tail) { return [head].concat(tail); },
        peg$c23 = function(values) { return values; },
        peg$c24 = function(k, v) { var o = {}; o[k] = v; return o; },
        peg$c25 = function(k) { var o = {}; o[k] = [{get: k}]; return o; },
        peg$c26 = "{",
        peg$c27 = { type: "literal", value: "{", description: "\"{\"" },
        peg$c28 = null,
        peg$c29 = "}",
        peg$c30 = { type: "literal", value: "}", description: "\"}\"" },
        peg$c31 = function(ss) {
            ss = ss.map(function(sp) { return sp[0]; });
            oss = {}
            for (si in ss) {
                var s = ss[si];
                for (var k in s) {
                    oss[k] = s[k];
                }
            }
            return oss;
        },
        peg$c32 = function(s, t) { return t; },
        peg$c33 = function(s, t) { return {get: t}; },
        peg$c34 = function(s) { return {get: '.'}; },
        peg$c35 = function(s, t) { return {map: t, depth:s.length}; },
        peg$c36 = function(head, tail) {
                return [head].concat(tail);
            },
        peg$c37 = "|",
        peg$c38 = { type: "literal", value: "|", description: "\"|\"" },
        peg$c39 = "||",
        peg$c40 = { type: "literal", value: "||", description: "\"||\"" },
        peg$c41 = "\\@",
        peg$c42 = { type: "literal", value: "\\@", description: "\"\\\\@\"" },
        peg$c43 = /^[a-zA-Z0-9\-_:\/.,#%=?"'+*%{}[\]]/,
        peg$c44 = { type: "class", value: "[a-zA-Z0-9\\-_:\\/.,#%=?\"'+*%{}[\\]]", description: "[a-zA-Z0-9\\-_:\\/.,#%=?\"'+*%{}[\\]]" },
        peg$c45 = function(cs) { return cs.join('').trim(); },
        peg$c46 = function(c) { return c; },
        peg$c47 = function(atexp) { return atexp; },
        peg$c48 = function(cmd, atexp) { return {type: 'pipe', cmd: cmd, at: atexp}; },
        peg$c49 = function(cmd, atexp) { return {type: 'ppipe', cmd: cmd, at: atexp}; },
        peg$c50 = "$(",
        peg$c51 = { type: "literal", value: "$(", description: "\"$(\"" },
        peg$c52 = function(atexp) {return atexp;},
        peg$c53 = ")",
        peg$c54 = { type: "literal", value: ")", description: "\")\"" },
        peg$c55 = function(head, tail) {
                if (head != null) {
                    tail.unshift({type: 'id', at: head});
                }
                return {sub: tail};
            },
        peg$c56 = function(cmds) { return cmds; },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parsestart() {
      var s0;

      s0 = peg$parsepipeline();

      return s0;
    }

    function peg$parseletter() {
      var s0;

      if (peg$c0.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c1); }
      }

      return s0;
    }

    function peg$parsespace() {
      var s0, s1;

      s0 = [];
      if (peg$c3.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        if (peg$c3.test(input.charAt(peg$currPos))) {
          s1 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s1 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c4); }
        }
      }

      return s0;
    }

    function peg$parsecomma() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 44) {
          s2 = peg$c6;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c7); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsedot() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 46) {
          s2 = peg$c8;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c9); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c10();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsecol() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 58) {
          s2 = peg$c11;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c12); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c13();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseopen_bracket() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 91) {
          s2 = peg$c14;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c15); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseclose_bracket() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s2 = peg$c16;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c17); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseat() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 64) {
          s2 = peg$c18;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseword() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parseletter();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parseletter();
        }
      } else {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c20(s1);
      }
      s0 = s1;

      return s0;
    }

    function peg$parsearray() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parseopen_bracket();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseat_expression();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$currPos;
          s6 = peg$parsecomma();
          if (s6 !== peg$FAILED) {
            s7 = peg$parseat_expression();
            if (s7 !== peg$FAILED) {
              peg$reportedPos = s5;
              s6 = peg$c21(s7);
              s5 = s6;
            } else {
              peg$currPos = s5;
              s5 = peg$c5;
            }
          } else {
            peg$currPos = s5;
            s5 = peg$c5;
          }
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$currPos;
            s6 = peg$parsecomma();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseat_expression();
              if (s7 !== peg$FAILED) {
                peg$reportedPos = s5;
                s6 = peg$c21(s7);
                s5 = s6;
              } else {
                peg$currPos = s5;
                s5 = peg$c5;
              }
            } else {
              peg$currPos = s5;
              s5 = peg$c5;
            }
          }
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s2;
            s3 = peg$c22(s3, s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c5;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c5;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parseclose_bracket();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c23(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseset() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseword();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecol();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseat_expression();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c24(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseword();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c25(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parseobj() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 123) {
        s1 = peg$c26;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c27); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsespace();
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$currPos;
          s5 = peg$parseset();
          if (s5 !== peg$FAILED) {
            s6 = peg$parsecomma();
            if (s6 === peg$FAILED) {
              s6 = peg$c28;
            }
            if (s6 !== peg$FAILED) {
              s5 = [s5, s6];
              s4 = s5;
            } else {
              peg$currPos = s4;
              s4 = peg$c5;
            }
          } else {
            peg$currPos = s4;
            s4 = peg$c5;
          }
          if (s4 !== peg$FAILED) {
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$currPos;
              s5 = peg$parseset();
              if (s5 !== peg$FAILED) {
                s6 = peg$parsecomma();
                if (s6 === peg$FAILED) {
                  s6 = peg$c28;
                }
                if (s6 !== peg$FAILED) {
                  s5 = [s5, s6];
                  s4 = s5;
                } else {
                  peg$currPos = s4;
                  s4 = peg$c5;
                }
              } else {
                peg$currPos = s4;
                s4 = peg$c5;
              }
            }
          } else {
            s3 = peg$c5;
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 125) {
                s5 = peg$c29;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c30); }
              }
              if (s5 !== peg$FAILED) {
                peg$reportedPos = s0;
                s1 = peg$c31(s3);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$c5;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsesection() {
      var s0;

      s0 = peg$parseobj();
      if (s0 === peg$FAILED) {
        s0 = peg$parsearray();
        if (s0 === peg$FAILED) {
          s0 = peg$parseword();
        }
      }

      return s0;
    }

    function peg$parsedo_sub() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsedot();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsesub_cmd();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c32(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsedo_sub_() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsedot();
      if (s1 === peg$FAILED) {
        s1 = peg$c28;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsesub_cmd();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c32(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsedo_get() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsedot();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsesection();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c33(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsedo_get_() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = peg$parsedot();
      if (s1 === peg$FAILED) {
        s1 = peg$c28;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsesection();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c33(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parsedot();
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c34(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parsedo_map() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsecol();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parsecol();
        }
      } else {
        s1 = peg$c5;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parsesection();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c35(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsedo_section() {
      var s0;

      s0 = peg$parsedo_get();
      if (s0 === peg$FAILED) {
        s0 = peg$parsedo_map();
      }

      return s0;
    }

    function peg$parseat_expression() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsedo_get_();
        if (s2 === peg$FAILED) {
          s2 = peg$parsedo_sub_();
          if (s2 === peg$FAILED) {
            s2 = peg$parsedo_map();
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsedo_section();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsedo_section();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsespace();
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c36(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsepipe() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 124) {
          s2 = peg$c37;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c38); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseppipe() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c39) {
          s2 = peg$c39;
          peg$currPos += 2;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c40); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseescd_at() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parseletter();
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 64) {
          s2 = peg$c18;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsecmd_char();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c41) {
          s0 = peg$c41;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c42); }
        }
      }

      return s0;
    }

    function peg$parsecmd_char() {
      var s0;

      if (peg$c43.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c44); }
      }
      if (s0 === peg$FAILED) {
        s0 = peg$parseescd_at();
      }

      return s0;
    }

    function peg$parsecmd_word() {
      var s0, s1, s2;

      s0 = peg$parsesub_cmd();
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = [];
        s2 = peg$parsecmd_char();
        if (s2 !== peg$FAILED) {
          while (s2 !== peg$FAILED) {
            s1.push(s2);
            s2 = peg$parsecmd_char();
          }
        } else {
          s1 = peg$c5;
        }
        if (s1 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c45(s1);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parsecmd() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsecmd_word();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = peg$parsespace();
        if (s4 !== peg$FAILED) {
          s5 = peg$parsecmd_word();
          if (s5 !== peg$FAILED) {
            peg$reportedPos = s3;
            s4 = peg$c46(s5);
            s3 = s4;
          } else {
            peg$currPos = s3;
            s3 = peg$c5;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c5;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = peg$parsespace();
          if (s4 !== peg$FAILED) {
            s5 = peg$parsecmd_word();
            if (s5 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c46(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c5;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c5;
          }
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c22(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsestart_cmd() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parsecmd();
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseat();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseat_expression();
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s2;
            s3 = peg$c47(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c5;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c5;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c28;
        }
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c48(s1, s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsespiped_cmd() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parsepipe();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecmd();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseat();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseat_expression();
            if (s5 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c47(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c5;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c5;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c28;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c48(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parseppiped_cmd() {
      var s0, s1, s2, s3, s4, s5;

      s0 = peg$currPos;
      s1 = peg$parseppipe();
      if (s1 !== peg$FAILED) {
        s2 = peg$parsecmd();
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          s4 = peg$parseat();
          if (s4 !== peg$FAILED) {
            s5 = peg$parseat_expression();
            if (s5 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c47(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c5;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c5;
          }
          if (s3 === peg$FAILED) {
            s3 = peg$c28;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c49(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsepiped_cmd() {
      var s0;

      s0 = peg$parsestart_cmd();
      if (s0 === peg$FAILED) {
        s0 = peg$parsespiped_cmd();
        if (s0 === peg$FAILED) {
          s0 = peg$parseppiped_cmd();
        }
      }

      return s0;
    }

    function peg$parsesub_cmd() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      if (input.substr(peg$currPos, 2) === peg$c50) {
        s1 = peg$c50;
        peg$currPos += 2;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c51); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$parseat();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseat_expression();
          if (s4 !== peg$FAILED) {
            peg$reportedPos = s2;
            s3 = peg$c52(s4);
            s2 = s3;
          } else {
            peg$currPos = s2;
            s2 = peg$c5;
          }
        } else {
          peg$currPos = s2;
          s2 = peg$c5;
        }
        if (s2 === peg$FAILED) {
          s2 = peg$c28;
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsepipeline();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 41) {
              s4 = peg$c53;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c54); }
            }
            if (s4 !== peg$FAILED) {
              peg$reportedPos = s0;
              s1 = peg$c55(s2, s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$c5;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    function peg$parsepipeline() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      s1 = peg$parsespace();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsepiped_cmd();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsepiped_cmd();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsespace();
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c56(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c5;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c5;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c5;
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
