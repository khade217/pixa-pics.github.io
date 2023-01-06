"use strict";
/*!
MIT License

Copyright (c) 2013 pieroxy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import UraniumJS from "../UraniumJS";

/*
  BASE 92 --- Encoding
*/
const AFunction = Object.getPrototypeOf( function(){}).constructor;
function fu(string, mode) {
    "use strict";

    if(mode.startsWith("COMPRESS")) {

        return UraniumJS.enrichString(string);
        
    }else if(mode.startsWith("DECOMPRESS")) {

        return UraniumJS.stringDeplete(string);

    }else {

        return null;
    }
}

module.exports = function (text, log, only_text){
    "use strict";
    log = log || false;
    only_text = only_text || false;
    if(log) {
        console.log(fu(text, "DECOMPRESS"));
        return null;
    }else {

        if(only_text){
            return fu(text, "DECOMPRESS");
        }else {

            return new AFunction(fu(text, "DECOMPRESS"))();
        }
    }
};