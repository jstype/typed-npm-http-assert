/// <reference path="../out/index.d.ts" />
import test = require('blue-tape');

import httpAssert = require('http-assert');

test('simple test', t => {
    t.plan(4);

    let err;
    try {
        httpAssert(false, 401, 'fail');
    } catch (e) {
        err = e;
    }

    t.ok(err);
    t.ok(err.status === 401);
    t.ok(err.message === 'fail');
    t.ok(err.expose);
});
