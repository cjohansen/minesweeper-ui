import formatio from 'formatio';
import referee from 'referee';
referee.format = formatio.ascii;
export const assert = referee.assert;
export const refute = referee.refute;
export const describe = global.describe;
export const it = global.it;
export const beforeEach = global.beforeEach;
export const afterEach = global.afterEach;
