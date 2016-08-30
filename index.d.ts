declare interface createAssert {
    (value: any, status: number, msg: string, opts?: any): void;
    equal(a: any, b: any, status: number, msg: string, opts?: any): void;
    notEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    strictEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    notStrictEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    deepEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
    notDeepEqual(a: any, b: any, status: number, msg: string, opts?: any): void;
}

declare const assert: createAssert;

export = assert;
