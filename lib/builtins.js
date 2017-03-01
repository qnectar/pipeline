// Generated by CoffeeScript 1.11.1
(function() {
  var _, _inspect, bool, builtins, capitalize, combine, exists, fs, helpers, num, randint, randstr, reducer, umethods, util, valid;

  fs = require('fs');

  _ = require('underscore');

  util = require('util');

  _inspect = function(o) {
    return util.inspect(o, {
      depth: null
    });
  };

  helpers = require('./helpers');

  module.exports = builtins = {};

  valid = function(i) {
    if (_.isArray(i)) {
      return i.length > 0;
    }
    if (_.isObject(i)) {
      return _.keys(i).length > 0;
    }
    if (_.isString(i)) {
      return i.length > 0;
    }
    return i != null;
  };

  combine = function(inp, args) {
    return _.flatten([inp].concat(args)).filter(valid);
  };

  num = function(n) {
    return Number(n) || 0;
  };

  bool = function(v) {
    if (_.isString(v)) {
      if (v === 'false') {
        return false;
      }
      if (v === 'true') {
        return true;
      }
    } else {
      return !!v;
    }
  };

  exists = function(v) {
    return v != null;
  };

  reducer = function(f) {
    return function(inp, args, ctx, cb) {
      return cb(null, combine(inp, args).reduce(f));
    };
  };

  builtins['+'] = reducer(function(a, b) {
    return num(a) + num(b);
  });

  builtins['*'] = reducer(function(a, b) {
    return num(a) * num(b);
  });

  builtins['-'] = reducer(function(a, b) {
    return num(a) - num(b);
  });

  builtins['/'] = reducer(function(a, b) {
    return num(a) / num(b);
  });

  builtins['.'] = reducer(function(a, b) {
    return a + b;
  });

  builtins.id = function(inp, args, ctx, cb) {
    return cb(null, inp);
  };

  builtins.val = function(inp, args, ctx, cb) {
    return cb(null, args[0]);
  };

  builtins.or = function(inp, args, ctx, cb) {
    return cb(null, inp || args[0]);
  };

  builtins.echo = function(inp, args, ctx, cb) {
    return cb(null, args.join(' '));
  };

  builtins.key = function(inp, args, ctx, cb) {
    return cb(null, args.join(''));
  };

  builtins.num = function(inp, args, ctx, cb) {
    return cb(null, num(inp));
  };

  builtins.bool = function(inp, args, ctx, cb) {
    return cb(null, bool(inp));
  };

  builtins["null"] = function(inp, args, ctx, cb) {
    return cb(null, null);
  };

  builtins["if"] = function(inp, args, ctx, cb) {
    if (args[0]) {
      return cb(null, args[1]);
    } else {
      return cb();
    }
  };

  builtins["case"] = function(inp, args, ctx, cb) {
    var _case, cases;
    _case = args[0];
    cases = args[1];
    return cb(null, cases[_case]);
  };

  builtins.list = function(inp, args, ctx, cb) {
    return cb(null, args);
  };

  builtins.obj = function(inp, args, ctx, cb) {
    var abj, i;
    abj = {};
    if (args.length) {
      i = 0;
      while (i < args.length) {
        abj[args[i]] = args[i + 1];
        i += 2;
      }
    }
    return cb(null, abj);
  };

  builtins.range = function(inp, args, ctx, cb) {
    var i0, i1, j, results;
    if (args.length === 2) {
      i0 = num(args[0]);
      i1 = num(args[1]) - 1;
    } else {
      i0 = 0;
      i1 = num(args[0]) - 1;
    }
    return cb(null, (function() {
      results = [];
      for (var j = i0; i0 <= i1 ? j <= i1 : j >= i1; i0 <= i1 ? j++ : j--){ results.push(j); }
      return results;
    }).apply(this));
  };

  builtins.upper = function(inp, args, ctx, cb) {
    return cb(null, inp.toUpperCase());
  };

  builtins.lower = function(inp, args, ctx, cb) {
    return cb(null, inp.toLowerCase());
  };

  capitalize = function(s) {
    return s[0].toUpperCase() + s.slice(1);
  };

  builtins.capitalize = function(inp, args, ctx, cb) {
    return cb(null, capitalize(inp));
  };

  builtins.length = function(inp, args, ctx, cb) {
    return cb(null, inp.length);
  };

  builtins.reverse = function(inp, args, ctx, cb) {
    if (typeof inp === 'string') {
      return cb(null, inp.split('').reverse().join(''));
    } else {
      return cb(null, inp.reverse());
    }
  };

  builtins.head = function(inp, args, ctx, cb) {
    return cb(null, inp.slice(0, +((args[0] || 50) - 1) + 1 || 9e9));
  };

  builtins.tail = function(inp, args, ctx, cb) {
    var count;
    count = args[0];
    if (count == null) {
      count = 50;
    }
    if (count < 1) {
      return cb(null, []);
    } else {
      return cb(null, inp.slice(inp.length - count));
    }
  };

  builtins.join = function(inp, args, ctx, cb) {
    return cb(null, inp.join(args[0] || ' '));
  };

  builtins.split = function(inp, args, ctx, cb) {
    return cb(null, inp.split(args[0] || '\n'));
  };

  builtins.trim = function(inp, args, ctx, cb) {
    return cb(null, (args[0] || inp).trim());
  };

  builtins.sleep = function(inp, args, ctx, cb) {
    return setTimeout((function() {
      return cb(null, inp);
    }), Number(args[0]));
  };

  builtins.match = function(inp, args, ctx, cb) {
    var i, j, len1, match_with, matched;
    if (args.length === 2) {
      inp = args[0];
      match_with = args[1];
    } else {
      match_with = args[0];
    }
    matched = [];
    for (j = 0, len1 = inp.length; j < len1; j++) {
      i = inp[j];
      if (i.match(match_with)) {
        matched.push(i);
      }
    }
    return cb(null, matched);
  };

  builtins.grep = builtins.match;

  builtins.filter = function(inp, args, ctx, cb) {
    var filter_code, filter_func, filtered_inp, i, j, len1;
    filtered_inp = [];
    if (args.length > 0) {
      filter_code = 'return (' + args.join(' ') + ');';
      filter_func = new Function('i', filter_code);
      filtered_inp = inp.filter(filter_func);
    } else {
      for (j = 0, len1 = inp.length; j < len1; j++) {
        i = inp[j];
        if (i) {
          filtered_inp.push(i);
        }
      }
    }
    return cb(null, filtered_inp);
  };

  builtins.tee = function(inp, args, ctx, cb) {
    console.log(_inspect(inp));
    return cb(null, inp);
  };

  builtins.parse = function(inp, args, ctx, cb) {
    return cb(null, JSON.parse(inp));
  };

  builtins.log = function(inp, args, ctx, cb) {
    console.log(inp || args.join(' '));
    return cb(null, inp);
  };

  builtins.inspect = function(inp, args, ctx, cb) {
    console.log('inp: ' + _inspect(inp));
    console.log('args: ' + _inspect(args));
    return cb(null, inp);
  };

  builtins.stringify = function(inp, args, ctx, cb) {
    return cb(null, JSON.stringify(inp));
  };

  builtins.sort = function(inp, args, ctx, cb) {
    var sort_by;
    if (sort_by = args[0]) {
      if (sort_by[0] === '-') {
        sort_by = sort_by.slice(1);
        return cb(null, inp.sort(function(a, b) {
          return b[sort_by] - a[sort_by];
        }));
      } else {
        return cb(null, inp.sort(function(a, b) {
          return a[sort_by] - b[sort_by];
        }));
      }
    } else {
      return cb(null, inp.sort());
    }
  };

  builtins.count = function(inp, args, ctx, cb) {
    var counts, counts_list, i, ik, j, k, ki, len1, v;
    counts = {};
    ki = {};
    if (args[0] != null) {
      ik = function(i) {
        return i[args[0]];
      };
    } else {
      ik = function(i) {
        return i;
      };
    }
    for (j = 0, len1 = inp.length; j < len1; j++) {
      i = inp[j];
      if (counts[ik(i)] == null) {
        counts[ik(i)] = 0;
      }
      counts[ik(i)] += 1;
      ki[ik(i)] = i;
    }
    counts_list = [];
    for (k in counts) {
      v = counts[k];
      counts_list.push({
        item: ki[k],
        count: v
      });
    }
    counts_list.sort(function(a, b) {
      return a.count - b.count;
    });
    return cb(null, counts_list);
  };

  builtins.bin = function(inp, args, ctx, cb) {
    var bi, bins, count, i, ik, interval, item, j, k, key, ki, len1, len2, m, max, min, p, ref;
    count = Number(args[0]);
    key = args[1];
    ki = {};
    if (key != null) {
      ik = function(i) {
        return i[key];
      };
    } else {
      ik = function(i) {
        return i;
      };
    }
    min = null;
    max = null;
    bins = [];
    for (j = 0, len1 = inp.length; j < len1; j++) {
      item = inp[j];
      k = ik(item);
      if ((min == null) || k < min) {
        min = k;
      }
      if ((max == null) || k > max) {
        max = k + 0.000000001;
      }
    }
    interval = (max - min) / count;
    for (i = m = 0, ref = count - 1; 0 <= ref ? m <= ref : m >= ref; i = 0 <= ref ? ++m : --m) {
      bins.push({
        start: i * interval + min,
        end: (i + 1) * interval + min,
        count: 0,
        items: []
      });
    }
    for (p = 0, len2 = inp.length; p < len2; p++) {
      item = inp[p];
      bi = Math.floor(((ik(item)) - min) / interval);
      bins[bi].items.push(item);
      bins[bi].count += 1;
    }
    return cb(null, bins);
  };

  builtins.chunks = function(inp, args, ctx, cb) {
    var ci, cs, i, j, n, ref;
    n = args[0] || 10;
    cs = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 0, ref = n - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        results.push([]);
      }
      return results;
    })();
    for (i = j = 0, ref = inp.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      ci = Math.floor(i / n);
      cs[ci].push(inp[i]);
    }
    return cb(null, cs);
  };

  builtins.slice = function(inp, args, ctx, cb) {
    var a, b;
    a = args[0] || 0;
    b = args[1] || inp.length;
    return cb(null, inp.slice(a, b));
  };

  builtins.now = function(inp, args, ctx, cb) {
    return cb(null, new Date);
  };

  builtins.timestamp = function(inp, args, ctx, cb) {
    return cb(null, new Date().getTime());
  };

  builtins['oid-timestamp'] = function(inp, args, ctx, cb) {
    return cb(null, parseInt((args[0] || inp).toString().substring(0, 8), 16) * 1000);
  };

  randstr = function(len) {
    var s;
    if (len == null) {
      len = 5;
    }
    s = '';
    while (s.length < len) {
      s += Math.random().toString(36).slice(2, len - s.length + 2);
    }
    return s;
  };

  randint = function(max) {
    if (max == null) {
      max = 100;
    }
    return Math.floor(Math.random() * max);
  };

  builtins.randstr = function(inp, args, ctx, cb) {
    return cb(null, randstr(args[0]));
  };

  builtins.randint = function(inp, args, ctx, cb) {
    return cb(null, randint(args[0]));
  };

  builtins.choice = function(inp, args, ctx, cb) {
    return cb(null, _.sample(inp, 1)[0]);
  };

  builtins.sample = function(inp, args, ctx, cb) {
    return cb(null, _.sample(inp, args[0] || inp.length / 2));
  };

  builtins.zip = function(inp, args, ctx, cb) {
    var l1, l2;
    if (_.every(args, _.isArray)) {
      return cb(null, _.zip.apply(_, args));
    } else {
      if (args.length % 2 === 1) {
        args.push(null);
      }
      l1 = _.first(args, args.length / 2);
      l2 = _.last(args, args.length / 2);
      return cb(null, _.zip(l1, l2));
    }
  };

  builtins.zipobj = function(inp, args, ctx, cb) {
    return builtins.zip(inp, args, ctx, function(err, zipped) {
      return cb(null, _.object(zipped));
    });
  };

  umethods = _.pick(_, ['keys', 'values', 'pairs', 'pick', 'omit', 'extend', 'defaults', 'where', 'findWhere', 'sortBy', 'groupBy', 'indexBy', 'countBy', 'shuffle', 'uniq', 'flatten', 'without', 'union', 'intersection', 'difference']);

  _.extend(builtins, helpers.wrapall(umethods, '', true, true));

  builtins.set = function(inp, args, ctx, cb) {
    var data;
    data = args[1] || inp;
    ctx.set('vars', args[0], data);
    return cb(null, data);
  };

  builtins.setall = function(inp, args, ctx, cb) {
    var data, k, v;
    data = args[1] || inp;
    for (k in data) {
      v = data[k];
      ctx.set('vars', k, v);
    }
    return cb(null, data);
  };

  builtins.inc = function(inp, args, ctx, cb) {
    var inc_key;
    inc_key = args[0];
    if (ctx[inc_key] == null) {
      ctx[inc_key] = 0;
    }
    return cb(null, ++ctx[inc_key]);
  };

  builtins.push = function(inp, args, ctx, cb) {
    var data, l;
    data = args[1] || inp;
    l = ctx.get('vars', args[0]) || [];
    l.push(data);
    ctx.set('vars', args[0], l);
    return cb(null, l);
  };

  builtins.ginc = function(inp, args, ctx, cb) {
    var inc_key, obj_key, obj_val;
    inc_key = args[0];
    obj_key = args[1];
    if (ctx[inc_key] == null) {
      ctx[inc_key] = {
        val: 0,
        objs: {}
      };
    }
    if (ctx[inc_key].objs[obj_key] != null) {
      return cb(null, ctx[inc_key].objs[obj_key]);
    } else {
      obj_val = ++ctx[inc_key].val;
      ctx[inc_key].objs[obj_key] = obj_val;
      return cb(null, obj_val);
    }
  };

  builtins.use = function(inp, args, ctx, cb) {
    var arg, j, len1;
    for (j = 0, len1 = args.length; j < len1; j++) {
      arg = args[j];
      ctx.topScope().use(arg);
    }
    return cb(null, 'Using: ' + args.join(', '));
  };

  builtins.alias = function(inp, args, ctx, cb) {
    var alias, script;
    alias = args[0];
    script = args[1];
    if (!script) {
      return cb(null, ctx.get('aliases', alias));
    } else {
      ctx.alias(alias, script);
      return cb(null, {
        success: true,
        alias: alias,
        script: script
      });
    }
  };

  builtins.aliases = function(inp, args, ctx, cb) {
    var alias, script;
    if (!inp) {
      return cb(null, ctx.get('aliases'));
    } else {
      for (alias in inp) {
        script = inp[alias];
        ctx.alias(alias, script);
      }
      return cb(null, {
        success: true,
        aliases: inp
      });
    }
  };

}).call(this);