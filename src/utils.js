"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.convertToCSV = void 0;
function convertToCSV(jsonResponse) {
    var items = jsonResponse.items;
    var replacer = function (key, value) { return value === null ? '' : value; };
    var header = Object.keys(items[0]);
    var csv = __spreadArray([
        header.join(',')
    ], items.map(function (row) { return header.map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); }).join(','); }), true).join('\r\n');
    console.log(csv);
    return csv;
}
exports.convertToCSV = convertToCSV;
