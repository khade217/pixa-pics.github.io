/*
The MIT License (MIT)

Copyright (c) 2021 - 2022 Vipertech
Copyright (c) 2021 - 2022 Crypto red

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

"use strict";
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

window.get_base64_png_data_url_process_function = new AsyncFunction(`var r=async function(r,e,n,t,a,f,i){return new Promise((function(o,l){"use strict";function c(r){return"#".concat("00000000".concat(r.toString(16)).slice(-8))}function u(r){return new Uint8ClampedArray(Uint32Array.of(r).buffer).reverse()}function s(r,e,n,t){return new Uint32Array(Uint8ClampedArray.of(t,n,e,r).buffer)[0]}function v(r,e=!1){if(r=void 0===r?0:r,e&&"number"==typeof r)return r;if(!e&&"number"==typeof r)return c(r);var n="",t=r,a=t.length;if(9===a)n=t;else if(7===a)n=t.concat("ff");else if(5===a){var f=t.charAt(1),i=t.charAt(2),o=t.charAt(3),l=t.charAt(4);n="#".concat(f,f,i,i,o,o,l,l)}else if(4===a){f=t.charAt(1),i=t.charAt(2),o=t.charAt(3);n="#".concat(f,f,i,i,o,o,"ff")}return e?function(r){return parseInt(r.slice(1),16)}(n):n}function h(r,e,n=1,t=!1,a=!1,f=!1){if(r=v(r,!0),0===n&&"hover"!==e&&t)return f?0:"#00000000";if("hover"===e){var i=u(r),o=function(r,e,n){r/=255,e/=255,n/=255;var t,a,f=Math.max(r,e,n),i=Math.min(r,e,n),o=(f+i)/2;if(f==i)t=a=0;else{var l=f-i;switch(a=o>.5?l/(2-f-i):l/(f+i),f){case r:t=(e-n)/l+(e<n?6:0);break;case e:t=(n-r)/l+2;break;case n:t=(r-e)/l+4}t/=6}return Array.of(parseInt(360*t),parseInt(100*a),parseInt(100*o))}(i[0],i[1],i[2],i[3]),l=function(r,e,n){var t,a,f;if(r/=360,n/=100,0==(e/=100))t=a=f=n;else{function l(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+6*(e-r)*n:n<.5?e:n<2/3?r+(e-r)*(2/3-n)*6:r}var i=n<.5?n*(1+e):n+e-n*e,o=2*n-i;t=l(o,i,r+1/3),a=l(o,i,r),f=l(o,i,r-1/3)}return Uint8ClampedArray.of(parseInt(255*t),parseInt(255*a),parseInt(255*f))}(o[0],o[1],parseInt(o[2]>=50?o[2]/2:2*o[2]));e=s(l[0],l[1],l[2],255)}else e=v(e,!0);if(t&&0===e&&1===n)return f?0:"#00000000";var h=u(r),p=u(e);if(255===p[3]&&1===n)return f?e:c(e);var m,y,d,A,g=h[3]/255,w=p[3]/255*n,I=new Uint8ClampedArray(4),b=0;if(g>0&&w>0){var C=w/(b=a?w+g:1-(1-w)*(1-g)),U=g*(1-w)/b;I[0]=parseInt(p[0]*C+h[0]*U),I[1]=parseInt(p[1]*C+h[1]*U),I[2]=parseInt(p[2]*C+h[2]*U)}else w>0?(b=p[3]/255,I[0]=p[0],I[1]=p[1],I[2]=p[2]):(b=h[3]/255,I[0]=h[0],I[1]=h[1],I[2]=h[2]);return a&&(b/=2),I[3]=parseInt(255*b),f?s(I[0],I[1],I[2],I[3]):(m=I[0],y=I[1],d=I[2],A=I[3],"#".concat("00000000".concat(new Uint32Array(Uint8ClampedArray.of(A,d,y,m).buffer)[0].toString(16)).slice(-8)))}try{if("undefined"==typeof OffscreenCanvas)throw new Error("Impossible to create OffscreenCanvas in this web environment.");var p=(d=new OffscreenCanvas(r*f,e*f)).getContext("2d"),m=new Set;n[0].forEach(((e,i)=>{var o=[],l=-1;l++;for(var s=t.length-1;s>=0;s--){var v=t[s][n[s][i]];if(o[s]=v,255===u(v)[3]){l=s;break}}var y=0;for(s=l;s<t.length;s++){if(!a[s].hidden)y=h(y,v=o[s],a[s].opacity,!1,!1,!0)}var d=i%r,A=(i-d)/r;m.add(y),p.fillStyle=c(y),p.fillRect(d*f,A*f,1*f,1*f)}));var y=p.getImageData(0,0,r*f,e*f);p=null,d=null,createImageBitmap(y).then((n=>{var t=new OffscreenCanvas(r*f,e*f),a=t.getContext("bitmaprenderer");a.transferFromImageBitmap(n),n.close(),t.convertToBlob({type:"image/png"}).then((r=>function(r){return new Promise(((e,n)=>{var t=new FileReader;t.onload=()=>e(t.result),t.readAsDataURL(r)}))}(r).then((r=>{i?(o(Array.of(r,Array.from(m).map((r=>v(r))))),r=null,m=null):(o(Array.of(r)),r=null,m=null)})))),a=null,t=null})),y=null}catch(A){var d;m=new Set;(d=document.createElement("canvas")).width=r*f,d.height=e*f;p=d.getContext("2d");n[0].forEach(((e,i)=>{var o=[],l=-1;l++;for(var s=t.length-1;s>=0;s--){var v=t[s][n[s][i]];if(o[s]=v,255===u(v)[3]){l=s;break}}var y=0;for(s=l;s<t.length;s++){if(!a[s].hidden)y=h(y,v=o[s],a[s].opacity,!1,!1,!0)}var d=i%r,A=(i-d)/r;m.add(y),p.fillStyle=c(y),p.fillRect(d*f,A*f,1*f,1*f)})),i?(o(Array.of(d.toDataURL(),Array.from(m).map((r=>v(r))))),p=null,d=null,m=null):(o(Array.of(d.toDataURL())),p=null,d=null)}}))};`
    + "return r;")();
/*
        var fu = async function(
            pxl_width,
            pxl_height,
            _s_pxls,
            _s_pxl_colors,
            _layers,
            scale,
            with_palette
        ) {return new Promise(function(resolve, reject){

            "use strict";
            function this_rgb_to_hsl(r, g, b) {

                r /= 255, g /= 255, b /= 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;

                if(max == min){
                    h = s = 0; // achromatic
                }else{
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch(max){
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }

                return Array.of(parseInt(h * 360), parseInt(s * 100), parseInt(l * 100));
            }

            function this_hsl_to_rgb(h, s, l) {

                h /= 360;
                s /= 100;
                l /= 100;

                var r, g, b;
                if (s === 0) {
                    r = g = b = l;
                } else {
                    function hue_to_rgb(p, q, t) {
                        if (t < 0) t += 1;
                        if (t > 1) t -= 1;
                        if (t < 1 / 6) return p + (q - p) * 6 * t;
                        if (t < 1 / 2) return q;
                        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                        return p;
                    }
                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue_to_rgb(p, q, h + 1 / 3);
                    g = hue_to_rgb(p, q, h);
                    b = hue_to_rgb(p, q, h - 1 / 3);
                }

                return Uint8ClampedArray.of(parseInt(r * 255), parseInt(g * 255), parseInt(b * 255));
            }

            function this_get_hex_color_from_rgba_values(r, g, b, a) {

                return "#".concat("00000000".concat(new Uint32Array(Uint8ClampedArray.of(a, b, g, r).buffer)[0].toString(16)).slice(-8));
            }

            function this_get_hex_from_Uint32(num) {

                return "#".concat("00000000".concat(num.toString(16)).slice(-8));
            }

            function this_get_uint32_from_hex(hex) {

                return parseInt(hex.slice(1), 16);
            }

            function this_get_rgba_from_Uint32(num) {

                return new Uint8ClampedArray(Uint32Array.of(num).buffer).reverse();
            }

            function this_get_Uint32_color_from_rgba_values (r, g , b, a) {

                return new Uint32Array(Uint8ClampedArray.of(a, b, g, r).buffer)[0];
            }

            function this_format_color(color, getUint32 = false) {

                color = typeof color === "undefined" ? 0: color;

                if(getUint32 && typeof color === "number"){

                    return color;
                }else {

                    if(!getUint32 && typeof color === "number"){

                        return this_get_hex_from_Uint32(color);
                    }

                    var formatted = "";
                    var hex = color;
                    var hex_length = hex.length;

                    if(hex_length === 9) {

                        formatted = hex;

                    } else if (hex_length === 7) {

                        formatted = hex.concat("ff");
                    } else if (hex_length === 5) {

                        var a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3), d = hex.charAt(4);
                        formatted =  "#".concat(a, a, b, b, c, c, d, d);
                    } else if (hex_length === 4) {

                        var a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3);
                        formatted = "#".concat(a, a, b, b, c, c, "ff");
                    }

                    if(getUint32){

                        return this_get_uint32_from_hex(formatted);
                    }else {

                        return formatted;
                    }
                }
            }

            function this_blend_colors (color_a, color_b, amount = 1, should_return_transparent = false, alpha_addition = false, in_uint_32 = false) {

                color_a = this_format_color(color_a, true);
                // If we blend the first color with the second with 0 "force", return transparent
                if(amount === 0 && color_b !== "hover" && should_return_transparent) {

                    return in_uint_32 ? 0: "#00000000";
                }

                // Make sure we have a color based on the 4*2 hex char format

                if(color_b === "hover") {

                    var rgba = this_get_rgba_from_Uint32(color_a);
                    var hsl = this_rgb_to_hsl(rgba[0], rgba[1], rgba[2], rgba[3]);
                    var rgb = this_hsl_to_rgb(hsl[0], hsl[1], parseInt(hsl[2] >= 50 ? hsl[2]/2: hsl[2]*2));
                    color_b = this_get_Uint32_color_from_rgba_values(rgb[0], rgb[1], rgb[2], 255);
                }else {

                    color_b = this_format_color(color_b, true);
                }
                // If the second color is transparent, return transparent
                if(should_return_transparent && color_b === 0 && amount === 1) { return in_uint_32 ? 0: "#00000000"; }

                // Extract RGBA from both colors
                var base = this_get_rgba_from_Uint32(color_a);
                var added = this_get_rgba_from_Uint32(color_b);

                if(added[3] === 255 && amount === 1) { return in_uint_32 ? color_b: this_get_hex_from_Uint32(color_b); }

                var ba3 = base[3] / 255;
                var ad3 = (added[3] / 255) * amount;

                var mix = new Uint8ClampedArray(4);
                var mi3 = 0;

                if (ba3 > 0 && ad3 > 0) {

                    if(alpha_addition) {

                        mi3 = ad3 + ba3;
                    }else {

                        mi3 = 1 - (1 - ad3) * (1 - ba3);
                    }

                    var ao = ad3 / mi3;
                    var bo = ba3 * (1 - ad3) / mi3;

                    mix[0] = parseInt(added[0] * ao + base[0] * bo); // red
                    mix[1] = parseInt(added[1] * ao + base[1] * bo); // green
                    mix[2] = parseInt(added[2] * ao + base[2] * bo); // blue
                }else if(ad3 > 0) {

                    mi3 = added[3] / 255;

                    mix[0] = added[0];
                    mix[1] = added[1];
                    mix[2] = added[2];
                }else {

                    mi3 = base[3] / 255;

                    mix[0] = base[0];
                    mix[1] = base[1];
                    mix[2] = base[2];
                }

                if(alpha_addition) {
                    mi3 /= 2;
                }

                mix[3] = parseInt(mi3 * 255);

                if(in_uint_32){

                    return this_get_Uint32_color_from_rgba_values(mix[0], mix[1], mix[2], mix[3]);
                }else {

                    return this_get_hex_color_from_rgba_values(mix[0], mix[1], mix[2], mix[3]);
                }
            }

            try {

                if (typeof OffscreenCanvas === "undefined") {
                    throw new Error("Impossible to create OffscreenCanvas in this web environment.");
                }

                var canvas = new OffscreenCanvas(pxl_width * scale, pxl_height * scale);
                var ctx = canvas.getContext('2d');
                var all_colors = new Set();

                _s_pxls[0].forEach((pxl, index) => {

                    var layer_pixel_colors = [];
                    var start_i = -1;
                    start_i++;

                    for (var i = _s_pxl_colors.length - 1; i >= 0; i--) {

                        var layer_pixel_color = _s_pxl_colors[i][_s_pxls[i][index]];
                        layer_pixel_colors[i] = layer_pixel_color;
                        var rgba = this_get_rgba_from_Uint32(layer_pixel_color);

                        if(rgba[3] === 255) {

                            start_i = i;
                            break;
                        }

                    }

                    var pixel_color_hex = 0;

                    for (var i = start_i; i < _s_pxl_colors.length ; i++) {

                        if(!_layers[i].hidden) {

                            var layer_pixel_color = layer_pixel_colors[i];

                            pixel_color_hex = this_blend_colors(pixel_color_hex, layer_pixel_color, _layers[i].opacity, false, false, true);
                        }
                    }

                    var pos_x = index % pxl_width;
                    var pos_y = (index - pos_x) / pxl_width;

                    all_colors.add(pixel_color_hex);
                    ctx.fillStyle = this_get_hex_from_Uint32(pixel_color_hex);
                    ctx.fillRect(pos_x * scale, pos_y * scale, 1 * scale, 1 * scale);
                });

                var image_data = ctx.getImageData(0, 0, pxl_width * scale, pxl_height * scale);
                ctx = null; canvas = null;

                createImageBitmap(image_data).then((btmp_i) => {

                    var canvas2 = new OffscreenCanvas(pxl_width * scale, pxl_height * scale);
                    var ctx2 = canvas2.getContext("bitmaprenderer");
                    ctx2.transferFromImageBitmap(btmp_i);
                    btmp_i.close();

                    canvas2.convertToBlob({type: "image/png"}).then((blob) => {

                        function blob_to_base64(blob) {
                          return new Promise((resolve, _) => {
                            var reader = new FileReader();
                            reader.onload = () => resolve(reader.result);
                            reader.readAsDataURL(blob);
                          })
                        }

                        return blob_to_base64(blob).then((data_url) => {

                            if(with_palette) {

                                resolve(Array.of(data_url, Array.from(all_colors).map((c) => this_format_color(c))));
                                data_url = null; all_colors = null;
                            }else {

                                resolve(Array.of(data_url));
                                data_url = null; all_colors = null;
                            }
                        });
                        blob = null;
                    });
                    ctx2 = null; canvas2 = null;
                });
                image_data = null;

            }catch (e) {

                var all_colors = new Set();
                var canvas = document.createElement("canvas");
                canvas.width = pxl_width * scale;
                canvas.height = pxl_height * scale;
                var ctx = canvas.getContext('2d');

                _s_pxls[0].forEach((pxl, index) => {

                    var layer_pixel_colors = [];
                    var start_i = -1;
                    start_i++;

                    for (var i = _s_pxl_colors.length - 1; i >= 0; i--) {

                        var layer_pixel_color = _s_pxl_colors[i][_s_pxls[i][index]];
                        layer_pixel_colors[i] = layer_pixel_color;
                        var rgba = this_get_rgba_from_Uint32(layer_pixel_color);

                        if(rgba[3] === 255) {

                            start_i = i;
                            break;
                        }

                    }

                    var pixel_color_hex = 0;
                    for (var i = start_i; i < _s_pxl_colors.length ; i++) {

                        if(!_layers[i].hidden) {

                            var layer_pixel_color = layer_pixel_colors[i];
                            pixel_color_hex = this_blend_colors(pixel_color_hex, layer_pixel_color, _layers[i].opacity, false, false, true);
                        }
                    }

                    var pos_x = index % pxl_width;
                    var pos_y = (index - pos_x) / pxl_width;
                    all_colors.add(pixel_color_hex);
                    ctx.fillStyle = this_get_hex_from_Uint32(pixel_color_hex);
                    ctx.fillRect(pos_x * scale, pos_y * scale, 1 * scale, 1 * scale);
                });

                if(with_palette) {

                    resolve(Array.of(canvas.toDataURL(), Array.from(all_colors).map((c) => this_format_color(c))));
                    ctx = null; canvas = null; all_colors = null;
                }else {

                    resolve(Array.of(canvas.toDataURL()));
                    ctx = null; canvas = null;
                }
            }
        })};
 */

window.get_layer_base64_png_data_url_process_function = new AsyncFunction(`var fu=async function(e,n,t,r,a,l){return new Promise((function(i,c){"use strict";function u(e,n=!1){if(e=void 0===e?0:e,n&&"number"==typeof e)return e;if(!n&&"number"==typeof e)return"#".concat("00000000".concat(e.toString(16)).slice(-8));var t="",r=e,a=r.length;if(9===a)t=r;else if(7===a)t=r.concat("ff");else if(5===a){var l=r.charAt(1),i=r.charAt(2),c=r.charAt(3),u=r.charAt(4);t="#".concat(l,l,i,i,c,c,u,u)}else if(4===a){l=r.charAt(1),i=r.charAt(2),c=r.charAt(3);t="#".concat(l,l,i,i,c,c,"ff")}return n?function(e){return parseInt(e.slice(1),16)}(t):t}try{if("undefined"==typeof OffscreenCanvas)throw new Error("Impossible to create OffscreenCanvas in this web environment.");var o=null;if(1===parseInt(a)){var f=r.map((function(e){return u(e,!0)})),s=t.map((function(e){return f[e]}));f=null;var m=new Uint8ClampedArray(Uint32Array.from(s.reverse()).buffer).reverse();s=null,o=new ImageData(m,e,n),m=null}else{var h=r.map((function(e){return u(e)})),g=new OffscreenCanvas(e*a,n*a);(I=g.getContext("2d")).imageSmoothingEnabled=!1,t.forEach(((n,t)=>{var r=h[n],l=t%e,i=(t-l)/e;I.fillStyle=r,I.fillRect(l*a,i*a,1*a,1*a)})),o=I.getImageData(0,0,e*a,n*a),I=null,g=null,h=null}var d=l/(e*a),v=parseInt(e*a*d),p=parseInt(n*a*d),w=new OffscreenCanvas(v,p);(y=w.getContext("bitmaprenderer")).imageSmoothingEnabled=!1,createImageBitmap(o,{resizeWidth:v,resizeHeight:p}).then((e=>{y.transferFromImageBitmap(e),e.close();w.convertToBlob({type:"image/png"}).then((e=>{y=null,w=null;try{i(FileReaderSync.readAsDataURL(e)),e=null}catch(n){function t(e){return new Promise(((n,t)=>{var r=new FileReader;r.onload=()=>n(r.result),r.readAsDataURL(e)}))}return t(e).then((e=>{i(e),e=null}))}}))})),o=null}catch(A){(g=document.createElement("canvas")).width=e*a,g.height=n*a;var I=g.getContext("2d");o=null;if(1===parseInt(a)){f=r.map((function(e){return u(e,!0)})),s=t.map((function(e){return f[e]}));f=null;m=new Uint8ClampedArray(Uint32Array.from(s.reverse()).buffer).reverse();o=new ImageData(m,e,n),m=null,I.putImageData(o,0,0),o=null}else{h=r.map((function(e){return u(e)}));(g=document.createElement("canvas")).width=e*a,g.height=n*a,(I=g.getContext("2d")).imageSmoothingEnabled=!1,t.forEach(((n,t)=>{var r=h[n],l=t%e,i=(t-l)/e;I.fillStyle=r,I.fillRect(l*a,i*a,1*a,1*a)})),h=null}var y;d=l/(e*a),v=parseInt(e*a*d),p=parseInt(n*a*d);(w=document.createElement("canvas")).width=v,w.height=p,(y=w.getContext("2d")).imageSmoothingEnabled=!1,y.drawImage(g,0,0,v,p),I=null,g=null,i(w.toDataURL("image/png")),y=null,w=null}}))};`
    + "return fu;")();

        /*var fu = async function(
            pxl_width,
            pxl_height,
            pxls,
            pxl_colors,
            scale,
            resize_width
        ) {return new Promise(function(resolve, reject){

            "use strict";

            function this_get_hex_from_Uint32(num) {

                return "#".concat("00000000".concat(num.toString(16)).slice(-8));
            }

            function this_get_uint32_from_hex(hex) {

                return parseInt(hex.slice(1), 16);
            }

            function this_get_rgba_from_Uint32(num) {

                return new Uint8ClampedArray(Uint32Array.of(num).buffer).reverse();
            }

            function this_format_color(color, getUint32 = false) {

                color = typeof color === "undefined" ? 0: color;

                if(getUint32 && typeof color === "number"){

                    return color;
                }else {

                    if(!getUint32 && typeof color === "number"){

                        return this_get_hex_from_Uint32(color);
                    }

                    var formatted = "";
                    var hex = color;
                    var hex_length = hex.length;

                    if(hex_length === 9) {

                        formatted = hex;

                    } else if (hex_length === 7) {

                        formatted = hex.concat("ff");
                    } else if (hex_length === 5) {

                        var a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3), d = hex.charAt(4);
                        formatted =  "#".concat(a, a, b, b, c, c, d, d);
                    } else if (hex_length === 4) {

                        var a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3);
                        formatted = "#".concat(a, a, b, b, c, c, "ff");
                    }

                    if(getUint32){

                        return this_get_uint32_from_hex(formatted);
                    }else {

                        return formatted;
                    }
                }
            }

            try {

                if (typeof OffscreenCanvas === "undefined") {
                   throw new Error("Impossible to create OffscreenCanvas in this web environment.");
                }

                var image_data = null;
                if(parseInt(scale) === 1){

                    var pxl_colors_uint32 = pxl_colors.map(function(c) { return this_format_color(c, true)});
                    var pxl_data_uint32 = pxls.map(function(pxl){ return pxl_colors_uint32[pxl]});
                    pxl_colors_uint32 = null;
                    var ui8ca = new Uint8ClampedArray(Uint32Array.from(pxl_data_uint32.reverse()).buffer).reverse();
                    pxl_data_uint32 = null;
                    image_data = new ImageData(ui8ca, pxl_width, pxl_height);
                    ui8ca = null;

                } else {

                    var pxl_colors_hex = pxl_colors.map(function(c) { return this_format_color(c)});
                    var canvas = new OffscreenCanvas(pxl_width * scale, pxl_height * scale);
                    var ctx = canvas.getContext('2d');
                    ctx.imageSmoothingEnabled = false;

                    pxls.forEach((pxl, index) => {

                        var pixel_color_hex = pxl_colors_hex[pxl];

                        var pos_x = index % pxl_width;
                        var pos_y = (index - pos_x) / pxl_width;

                        ctx.fillStyle = pixel_color_hex;
                        ctx.fillRect(pos_x * scale, pos_y * scale, 1 * scale, 1 * scale);
                    });

                    image_data = ctx.getImageData(0, 0, pxl_width * scale, pxl_height * scale);
                    ctx = null; canvas = null; pxl_colors_hex = null;
                }

                var resize_ratio = resize_width / (pxl_width * scale);
                var resizeWidth = parseInt((pxl_width * scale) * resize_ratio);
                var resizeHeight = parseInt((pxl_height * scale) * resize_ratio);

                var canvas2 = new OffscreenCanvas(resizeWidth, resizeHeight);
                var ctx2 = canvas2.getContext("bitmaprenderer");
                ctx2.imageSmoothingEnabled = false;

                createImageBitmap(image_data, {
                    resizeWidth: resizeWidth,
                    resizeHeight: resizeHeight
                }).then((btmp_i) => {

                    ctx2.transferFromImageBitmap(btmp_i);
                    btmp_i.close()

                    var blob_params = {type: "image/png"};
                    canvas2.convertToBlob(blob_params).then((blob) => {

                        ctx2 = null; canvas2 = null;
                        try {

                            resolve(FileReaderSync.readAsDataURL(blob));
                            blob = null;
                        } catch(e) {

                            function blob_to_base64(blob) {
                              return new Promise((resolve, _) => {
                                var reader = new FileReader();
                                reader.onload = () => resolve(reader.result);
                                reader.readAsDataURL(blob);
                              })
                            }

                            return blob_to_base64(blob).then((data_url) => {

                                 resolve(data_url);
                                 data_url = null;
                            });
                            blob = null;
                        }
                    });
                });
                image_data = null;

            }catch (e) {

                var canvas = document.createElement("canvas");
                canvas.width = pxl_width * scale;
                canvas.height = pxl_height * scale;
                var ctx = canvas.getContext('2d');

                var image_data = null;
                if(parseInt(scale) === 1){

                    var pxl_colors_uint32 = pxl_colors.map(function(c) { return this_format_color(c, true)});
                    var pxl_data_uint32 = pxls.map(function(pxl){ return pxl_colors_uint32[pxl]});
                    pxl_colors_uint32 = null;
                    var ui8ca = new Uint8ClampedArray(Uint32Array.from(pxl_data_uint32.reverse()).buffer).reverse();
                    image_data = new ImageData(ui8ca, pxl_width, pxl_height);
                    ui8ca = null;
                    ctx.putImageData(image_data, 0, 0);
                    image_data = null;

                } else {

                    var pxl_colors_hex = pxl_colors.map(function(c) { return this_format_color(c)});
                    var canvas = document.createElement("canvas");
                    canvas.width = pxl_width * scale;
                    canvas.height = pxl_height * scale;
                    var ctx = canvas.getContext('2d');
                    ctx.imageSmoothingEnabled = false;

                    pxls.forEach((pxl, index) => {

                        var pixel_color_hex = pxl_colors_hex[pxl];
                        var pos_x = index % pxl_width;
                        var pos_y = (index - pos_x) / pxl_width;

                        ctx.fillStyle = pixel_color_hex;
                        ctx.fillRect(pos_x * scale, pos_y * scale, 1 * scale, 1 * scale);
                    });
                    pxl_colors_hex = null;
                }

                var resize_ratio = resize_width / (pxl_width * scale);
                var resizeWidth = parseInt((pxl_width * scale) * resize_ratio);
                var resizeHeight = parseInt((pxl_height * scale) * resize_ratio);

                var canvas2 = document.createElement("canvas");
                canvas2.width = resizeWidth;
                canvas2.height = resizeHeight;
                var ctx2 = canvas2.getContext("2d");
                ctx2.imageSmoothingEnabled = false;
                ctx2.drawImage(canvas, 0, 0, resizeWidth, resizeHeight);
                ctx = null; canvas = null;

                resolve(canvas2.toDataURL("image/png"));
                ctx2 = null; canvas2 = null;
            }
        })}*/

window.remove_close_pxl_colors_process_function = new AsyncFunction(`var r=async function(r,n,a,t,e,f,i){"use strict";function o(r){return"#".concat("00000000".concat(r.toString(16)).slice(-8))}function c(r){return new Uint8ClampedArray(Uint32Array.of(r).buffer).reverse()}function u(r,n,a,t){return new Uint32Array(Uint8ClampedArray.of(t,a,n,r).buffer)[0]}function l(r,n=!1){if(r=void 0===r?0:r,n&&"number"==typeof r)return r;if(!n&&"number"==typeof r)return o(r);var a="",t=r,e=t.length;if(9===e)a=t;else if(7===e)a=t.concat("ff");else if(5===e){var f=t.charAt(1),i=t.charAt(2),c=t.charAt(3),u=t.charAt(4);a="#".concat(f,f,i,i,c,c,u,u)}else if(4===e){f=t.charAt(1),i=t.charAt(2),c=t.charAt(3);a="#".concat(f,f,i,i,c,c,"ff")}return n?function(r){return parseInt(r.slice(1),16)}(a):a}function s(r,n,a){if(1===(a=void 0===a?null:a))return!0;if(0===a)return r===n;var t=parseInt(255*a);r=l(r,!0),n=l(n,!0);var e=c(r),f=c(n),i=Math.abs(e[3]-f[3]),o=Math.abs(e[0]-f[0]),u=Math.abs(e[1]-f[1]),s=Math.abs(e[2]-f[2]),h=Math.abs(1-i/255);return null!==a?Boolean(o<t&&u<t&&s<t&&i<t):parseFloat(parseInt(o+u+s)/parseInt(765))*h}function h(r,n,a=1,t=!1,e=!1,f=!1){if(r=l(r,!0),0===a&&"hover"!==n&&t)return f?0:"#00000000";if("hover"===n){var i=c(r),s=function(r,n,a){r/=255,n/=255,a/=255;var t,e,f=Math.max(r,n,a),i=Math.min(r,n,a),o=(f+i)/2;if(f==i)t=e=0;else{var c=f-i;switch(e=o>.5?c/(2-f-i):c/(f+i),f){case r:t=(n-a)/c+(n<a?6:0);break;case n:t=(a-r)/c+2;break;case a:t=(r-n)/c+4}t/=6}return Array.of(parseInt(360*t),parseInt(100*e),parseInt(100*o))}(i[0],i[1],i[2],i[3]),h=function(r,n,a){var t,e,f;if(r/=360,a/=100,0==(n/=100))t=e=f=a;else{function c(r,n,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?r+6*(n-r)*a:a<.5?n:a<2/3?r+(n-r)*(2/3-a)*6:r}var i=a<.5?a*(1+n):a+n-a*n,o=2*a-i;t=c(o,i,r+1/3),e=c(o,i,r),f=c(o,i,r-1/3)}return Uint8ClampedArray.of(255*t,255*e,255*f)}(s[0],s[1],parseInt(s[2]>=50?s[2]/2:2*s[2]));n=u(h[0],h[1],h[2],255)}else n=l(n,!0);if(t&&0===n&&1===a)return f?0:"#00000000";var v=c(r),A=c(n);if(255===A[3]&&1===a)return f?n:o(n);var p,y,d,m,b=v[3]/255,w=A[3]/255*a,I=new Uint8ClampedArray(4),U=0;if(b>0&&w>0){var g=w/(U=e?w+b:1-(1-w)*(1-b)),M=b*(1-w)/U;I[0]=parseInt(A[0]*g+v[0]*M),I[1]=parseInt(A[1]*g+v[1]*M),I[2]=parseInt(A[2]*g+v[2]*M)}else w>0?(U=A[3]/255,I[0]=A[0],I[1]=A[1],I[2]=A[2]):(U=v[3]/255,I[0]=v[0],I[1]=v[1],I[2]=v[2]);return e&&(U/=2),I[3]=parseInt(255*U),f?u(I[0],I[1],I[2],I[3]):(p=I[0],y=I[1],d=I[2],m=I[3],"#".concat("00000000".concat(new Uint32Array(Uint8ClampedArray.of(m,d,y,p).buffer)[0].toString(16)).slice(-8)))}function v(r,n){var a=new Object,t=0,e=r.map((function(r){var e=n[r],f=void 0===a[e]?null:a[e];return null===f&&(f=t,a[e]=f,t++),f})),f=new Uint32Array(t);return Object.entries(a).forEach((r=>{f[r[1]]=r[0]})),Array.of(e,f)}return new Promise((function(o,c){var u="auto"===a,l=!u,A=15,p=new Set;((f=null!==f?f:Math.max(Math.sqrt(n.length)+e,100))<2||f+12>n.length)&&(l=!0);for(var y=1,d=new Array(r.length),m=new Uint32Array(n.length);!l||1===y;){y++,a=u?1/(A-2):a||i,t=t||parseInt(255*a),d=Array.from(r),m=Uint32Array.from(n);for(var b=1;b<=t;b+=1){var w=a*(b/t),I=b/t,U=new Set,g=new Array(m.length).fill(0);d.forEach((r=>{g[r]++})),m.forEach(((r,n)=>{if(!U.has(n)){var a=g[n];m.forEach(((t,e)=>{if(n!==e&&!U.has(e)){var f=g[e],i=a>f,o=i?a/f:f/a;if(s(r,t,(w+w*(1-1/o)*I)/(1+I))){var c=i?h(m[n],m[e],1/o,!0,!1,!0):h(m[e],m[n],1/o,!0,!1,!0);m[n]=c,m[e]=c,U.add(n),U.add(e)}}}))}})),g=null;var M=v(d,m);d=Array.from(M[0]),m=Uint32Array.from(M[1]),M=null}m.length+12>f&&m.length-12<f||!u||p.has(A)?l=!0:m.length>f?(p.add(A),A--):(p.add(A),A++)}o(v(d,m)),d=null,m=null}))};`
    + "return r;")();
/*
var fu = async function(
            pxls,
            pxl_colors,
            bucket_threshold,
            threshold_steps,
            color_number_bonus,
            best_color_number,
            this_state_bucket_threshold 
        ) {

            "use strict";
            function this_rgb_to_hsl(r, g, b) {

                r /= 255, g /= 255, b /= 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;

                if(max == min){
                    h = s = 0; // achromatic
                }else{
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch(max){
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }

                return Array.of(parseInt(h * 360), parseInt(s * 100), parseInt(l * 100));
            }

            function this_hsl_to_rgb(h, s, l) {

                h /= 360;
                s /= 100;
                l /= 100;

                var r, g, b;
                if (s === 0) {
                    r = g = b = l;
                } else {
                    function hue_to_rgb(p, q, t) {
                        if (t < 0) t += 1;
                        if (t > 1) t -= 1;
                        if (t < 1 / 6) return p + (q - p) * 6 * t;
                        if (t < 1 / 2) return q;
                        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                        return p;
                    }
                    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                    var p = 2 * l - q;
                    r = hue_to_rgb(p, q, h + 1 / 3);
                    g = hue_to_rgb(p, q, h);
                    b = hue_to_rgb(p, q, h - 1 / 3);
                }

                return Uint8ClampedArray.of(r * 255, g * 255, b * 255);
            }

            function this_get_hex_color_from_rgba_values(r, g, b, a) {

                return "#".concat("00000000".concat(new Uint32Array(Uint8ClampedArray.of(a, b, g, r).buffer)[0].toString(16)).slice(-8));
            }
            
            function this_get_hex_from_Uint32(num) {

                return "#".concat("00000000".concat(num.toString(16)).slice(-8));
            }
            
            function this_get_uint32_from_hex(hex) {
        
                return parseInt(hex.slice(1), 16);
            }
            
            function this_get_rgba_from_Uint32(num) {

                return new Uint8ClampedArray(Uint32Array.of(num).buffer).reverse();
            }
        
            function this_get_Uint32_color_from_rgba_values (r, g , b, a) {
        
                return new Uint32Array(Uint8ClampedArray.of(a, b, g, r).buffer)[0];
            }

            function this_format_color(color, getUint32 = false) {

                color = typeof color === "undefined" ? 0: color;

                if(getUint32 && typeof color === "number"){
        
                    return color;
                }else {
        
                    if(!getUint32 && typeof color === "number"){
        
                        return this_get_hex_from_Uint32(color);
                    }
        
                    var formatted = "";
                    var hex = color;
                    var hex_length = hex.length;
        
                    if(hex_length === 9) {
        
                        formatted = hex;
        
                    } else if (hex_length === 7) {
        
                        formatted = hex.concat("ff");
                    } else if (hex_length === 5) {
        
                        var a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3), d = hex.charAt(4);
                        formatted =  "#".concat(a, a, b, b, c, c, d, d);
                    } else if (hex_length === 4) {
        
                        var a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3);
                        formatted = "#".concat(a, a, b, b, c, c, "ff");
                    }
        
                    if(getUint32){
        
                        return this_get_uint32_from_hex(formatted);
                    }else {
        
                        return formatted;
                    }
                }
            }

            function this_match_color (color_a, color_b, threshold) {

                threshold = typeof threshold === "undefined" ? null: threshold;

                if(threshold === 1) {

                    return true;
                }else if(threshold === 0){

                    return color_a === color_b;
                }else {

                    var threshold_256 = parseInt(threshold * 255);

                    color_a = this_format_color(color_a, true);
                    color_b = this_format_color(color_b, true);

                    var c_a = this_get_rgba_from_Uint32(color_a);
                    var c_b = this_get_rgba_from_Uint32(color_b);

                    var a_diff = Math.abs(c_a[3] - c_b[3]);
                    var r_diff = Math.abs(c_a[0] - c_b[0]);
                    var g_diff = Math.abs(c_a[1] - c_b[1]);
                    var b_diff = Math.abs(c_a[2] - c_b[2]);

                    var a_diff_ratio = Math.abs(1 - a_diff / 255);

                    if(threshold !== null) {

                        return Boolean(r_diff < threshold_256 && g_diff < threshold_256 && b_diff < threshold_256 && a_diff < threshold_256);
                    }else {

                        return parseFloat(parseInt(r_diff + g_diff + b_diff) / parseInt(255 * 3)) * a_diff_ratio;
                    }
                }
            }

            function this_blend_colors (color_a, color_b, amount = 1, should_return_transparent = false, alpha_addition = false, in_uint_32 = false) {

                color_a = this_format_color(color_a, true);
                // If we blend the first color with the second with 0 "force", return transparent
                if(amount === 0 && color_b !== "hover" && should_return_transparent) {
        
                    return in_uint_32 ? 0: "#00000000";
                }
        
                // Make sure we have a color based on the 4*2 hex char format
        
                if(color_b === "hover") {
        
                    var rgba = this_get_rgba_from_Uint32(color_a);
                    var hsl = this_rgb_to_hsl(rgba[0], rgba[1], rgba[2], rgba[3]);
                    var rgb = this_hsl_to_rgb(hsl[0], hsl[1], parseInt(hsl[2] >= 50 ? hsl[2]/2: hsl[2]*2));
                    color_b = this_get_Uint32_color_from_rgba_values(rgb[0], rgb[1], rgb[2], 255);
                }else {
        
                    color_b = this_format_color(color_b, true);
                }
                // If the second color is transparent, return transparent
                if(should_return_transparent && color_b === 0 && amount === 1) { return in_uint_32 ? 0: "#00000000"; }
        
                // Extract RGBA from both colors
                var base = this_get_rgba_from_Uint32(color_a);
                var added = this_get_rgba_from_Uint32(color_b);
        
                if(added[3] === 255 && amount === 1) { return in_uint_32 ? color_b: this_get_hex_from_Uint32(color_b); }
        
                var ba3 = base[3] / 255;
                var ad3 = (added[3] / 255) * amount;
        
                var mix = new Uint8ClampedArray(4);
                var mi3 = 0;
        
                if (ba3 > 0 && ad3 > 0) {
        
                    if(alpha_addition) {
        
                        mi3 = ad3 + ba3;
                    }else {
        
                        mi3 = 1 - (1 - ad3) * (1 - ba3);
                    }
        
                    var ao = ad3 / mi3;
                    var bo = ba3 * (1 - ad3) / mi3;
        
                    mix[0] = parseInt(added[0] * ao + base[0] * bo); // red
                    mix[1] = parseInt(added[1] * ao + base[1] * bo); // green
                    mix[2] = parseInt(added[2] * ao + base[2] * bo); // blue
                }else if(ad3 > 0) {
        
                    mi3 = added[3] / 255;
        
                    mix[0] = added[0];
                    mix[1] = added[1];
                    mix[2] = added[2];
                }else {
        
                    mi3 = base[3] / 255;
        
                    mix[0] = base[0];
                    mix[1] = base[1];
                    mix[2] = base[2];
                }
        
                if(alpha_addition) {
                    mi3 /= 2;
                }
        
                mix[3] = parseInt(mi3 * 255);
        
                if(in_uint_32){
        
                    return this_get_Uint32_color_from_rgba_values(mix[0], mix[1], mix[2], mix[3]);
                }else {
        
                    return this_get_hex_color_from_rgba_values(mix[0], mix[1], mix[2], mix[3]);
                }
            }

            function this_remove_duplicate_pxl_colors(pxls, pxl_colors) {

                // Work with Hashtables and Typed Array so it is fast
                var new_pxl_colors_object = new Object();
                var new_pxl_colors_object_length = 0;
                var new_pxls = pxls.map(function (pxl){

                    var color = pxl_colors[pxl];
                    var index_of_color = typeof new_pxl_colors_object[color] === "undefined" ? null: new_pxl_colors_object[color];

                    if(index_of_color === null) {

                        index_of_color = new_pxl_colors_object_length;
                        new_pxl_colors_object[color] = index_of_color;
                        new_pxl_colors_object_length++;
                    }

                    return index_of_color;
                });
                var new_pxl_colors = new Uint32Array(new_pxl_colors_object_length);
                Object.entries(new_pxl_colors_object).forEach((entry) => {

                    new_pxl_colors[entry[1]] = entry[0];
                });

                return Array.of(new_pxls, new_pxl_colors);
            }

            return new Promise(function(resolve, reject){

                var is_bucket_threshold_auto = bucket_threshold === "auto";
                var is_bucket_threshold_auto_goal_reached = !is_bucket_threshold_auto;
                var bucket_threshold_auto_goal_target = 15;
                var bucket_threshold_auto_goal_attempt = new Set();
                best_color_number = best_color_number !== null ? best_color_number: Math.max(Math.sqrt(pxl_colors.length) + color_number_bonus, 100);

                if(best_color_number < 2 || best_color_number + 12 > pxl_colors.length) {

                    is_bucket_threshold_auto_goal_reached = true;
                }

                var attempt = 1;
                var new_pxls = new Array(pxls.length);
                var new_pxl_colors = new Uint32Array(pxl_colors.length);

            while (!is_bucket_threshold_auto_goal_reached || attempt === 1) {
                attempt++;
                
                bucket_threshold = is_bucket_threshold_auto ?
                    1/(bucket_threshold_auto_goal_target - 2):
                    bucket_threshold || this_state_bucket_threshold;
                threshold_steps = threshold_steps || parseInt(bucket_threshold * 255);

                new_pxls = Array.from(pxls);
                new_pxl_colors = Uint32Array.from(pxl_colors);

                for (var i = 1; i <= threshold_steps; i += 1) {

                    var threshold = bucket_threshold * (i / threshold_steps);
                    var weight_applied_to_color_usage_difference = i / threshold_steps;
                    var indexes_of_colors_proceed = new Set();
                    var pxl_colors_usage = new Array(new_pxl_colors.length).fill(0);
                    new_pxls.forEach((color_index) => {
                    
                        pxl_colors_usage[color_index]++;
                    });

                    new_pxl_colors.forEach((color_a, index_of_color_a) => {
                    
                        if(!indexes_of_colors_proceed.has(index_of_color_a)) {
                    
                            var color_a_usage = pxl_colors_usage[index_of_color_a];
                    
                            new_pxl_colors.forEach((color_b, index_of_color_b) => {
                    
                                if(index_of_color_a !== index_of_color_b && !indexes_of_colors_proceed.has(index_of_color_b)) {
                    
                                    var color_b_usage = pxl_colors_usage[index_of_color_b];
                                    var color_a_more_used = color_a_usage > color_b_usage;
                    
                                    var color_usage_difference = color_a_more_used ? color_a_usage / color_b_usage: color_b_usage / color_a_usage;
                                    var weighted_threshold = (threshold + (threshold * (1 - 1 / color_usage_difference) * weight_applied_to_color_usage_difference)) / (1 + weight_applied_to_color_usage_difference);
                    
                                    if(this_match_color(color_a, color_b, weighted_threshold)) {
                    
                                        var color = color_a_more_used ?
                                            this_blend_colors(new_pxl_colors[index_of_color_a], new_pxl_colors[index_of_color_b], 1 / (color_usage_difference), true, false, true):
                                            this_blend_colors(new_pxl_colors[index_of_color_b], new_pxl_colors[index_of_color_a], 1 / (color_usage_difference), true, false, true);

                                        new_pxl_colors[index_of_color_a] = color;
                                        new_pxl_colors[index_of_color_b] = color;
                                        indexes_of_colors_proceed.add(index_of_color_a);
                                        indexes_of_colors_proceed.add(index_of_color_b);
                                    }
                                }
                            });
                        }
                    });

                    pxl_colors_usage = null;
                    var r = this_remove_duplicate_pxl_colors(new_pxls, new_pxl_colors);
                    new_pxls = Array.from(r[0]);
                    new_pxl_colors = Uint32Array.from(r[1]);
                    r = null;
                }

                if((new_pxl_colors.length + 12 > best_color_number && new_pxl_colors.length - 12 < best_color_number) || !is_bucket_threshold_auto || bucket_threshold_auto_goal_attempt.has(bucket_threshold_auto_goal_target)) {

                    is_bucket_threshold_auto_goal_reached = true;
                }else if(new_pxl_colors.length > best_color_number){

                    bucket_threshold_auto_goal_attempt.add(bucket_threshold_auto_goal_target);
                    bucket_threshold_auto_goal_target --;
                }else {

                    bucket_threshold_auto_goal_attempt.add(bucket_threshold_auto_goal_target);
                    bucket_threshold_auto_goal_target ++;
                }
            }

            resolve(this_remove_duplicate_pxl_colors(new_pxls, new_pxl_colors));
            new_pxls = null;
            new_pxl_colors = null;
        })};*/


window.w_canvas_pixels = {
    _caf_id: null,
    _last_raf_time: Date.now(),
    _previous_cpaf_fps: 0,
    _cpaf_frames: 0,
    _is_mobile_or_tablet: Boolean((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent||navigator.vendor||window.opera.substr(0,4)))),
};

window._fps_interval = setInterval(() => {

    window.w_canvas_pixels._previous_cpaf_fps = window.w_canvas_pixels._cpaf_frames * 4;
    window.w_canvas_pixels._cpaf_frames = 0;
}, 250);

const _raf =
    window.requestAnimationFrame       ||
    window.oRequestAnimationFrame      ||
    window.mozRequestAnimationFrame    ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
const _caf =
    window.cancelAnimationFrame       ||
    window.oCancelAnimationFrame      ||
    window.mozCancelAnimationFrame    ||
    window.webkitCancelAnimationFrame ||
    window.msCancelAnimationFrame;

function _loop(render, do_not_cancel_animation, force_update, requested_at_t = Date.now()) {

    if(requested_at_t < window.w_canvas_pixels._last_raf_time && !do_not_cancel_animation) { return }

    try {

        let skip_frame_rate = window.w_canvas_pixels._is_mobile_or_tablet ? 27: 44;

        let now = Date.now();
        let running_smoothly = true;

        let deltaT = now - window.w_canvas_pixels._last_raf_time;
        // do not render frame when deltaT is too high
        if ( deltaT > 1000 / (skip_frame_rate * 2/3)) {
            running_smoothly = false;
        }

        if(force_update) {

            if(window.w_canvas_pixels._caf_id !== null) {

                _caf(window.w_canvas_pixels._caf_id);
            }
            window.w_canvas_pixels._caf_id = null;

            if(do_not_cancel_animation) {

                _raf(render);
            }else {

                window.w_canvas_pixels._caf_id = _raf(render);
            }

            window.w_canvas_pixels._cpaf_frames++;
            window.w_canvas_pixels._last_raf_time = now;

        }else if ( window.w_canvas_pixels._caf_id === null) { // Best

            if(do_not_cancel_animation) {

                _raf(render);
            }else {

                window.w_canvas_pixels._caf_id = _raf(render);
            }
            window.w_canvas_pixels._last_raf_time = now;
            window.w_canvas_pixels._cpaf_frames++;

        }else if(!running_smoothly && window.w_canvas_pixels._caf_id !== null && deltaT > 1000 / (skip_frame_rate * 6/3) ) { // Average

            if(window.w_canvas_pixels._caf_id !== null) {

                _caf(window.w_canvas_pixels._caf_id);
            }
            window.w_canvas_pixels._caf_id = null;
            window.w_canvas_pixels._last_raf_time = now;

            if(!do_not_cancel_animation) {

                window.w_canvas_pixels._caf_id = _raf(render);
                window.w_canvas_pixels._cpaf_frames++;

            }else {

                _raf(render);
            }

        }else if(!running_smoothly){ // Low

            if(window.w_canvas_pixels._caf_id !== null) {

                _caf(window.w_canvas_pixels._caf_id);
            }
            window.w_canvas_pixels._caf_id = null;

            if(do_not_cancel_animation) {

                _raf(render);
            }else {

                window.w_canvas_pixels._caf_id = _raf(render);
            }

            window.w_canvas_pixels._cpaf_frames++;
            window.w_canvas_pixels._last_raf_time = now;

        }else if(deltaT < 1000 / (skip_frame_rate * 2)){

            setTimeout(() => {_loop(render, do_not_cancel_animation, force_update, requested_at_t)}, 1000 / (skip_frame_rate * 8));
        }else if(force_update || do_not_cancel_animation) {

            setTimeout(() => {_loop(render, do_not_cancel_animation, force_update, requested_at_t)}, 1000 / (skip_frame_rate * 8));
        }else {

            //caf(caf_id);
        }
    }catch (e) {}
};

function _anim_loop ( render, do_not_cancel_animation = false, force_update = false ) {

    _loop(render, do_not_cancel_animation, force_update);
};

import React from "react";
import pool from "../utils/worker-pool";
import {xxHash32} from "js-xxhash";
import xxHash from "xxhash-wasm";

class CanvasPixels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: Date.now(),
            className: props.className || null,
            perspective: props.perspective || 0,
            shadow_size: props.shadow_size || 0,
            shadow_color: props.shadow_color || "#575757",
            light: props.light || 1,
            perspective_coordinate: [0, 0],
            perspective_coordinate_last_change: 0,
            perspective_coordinate_notify_after_ms: 1000 / 20,
            perspective_coordinate_last_notify: 0,
            animation: props.animation || true,
            animation_duration: props.animation_duration || 60,
            move_using_full_container: props.move_using_full_container,
            no_actions: props.no_actions || false,
            dont_compute_base64_original_image: props.dont_compute_base64_original_image || false,
            dont_change_img_size_onload: props.dont_change_img_size_onload || false,
            dont_show_canvas_until_img_set: props.dont_show_canvas_until_img_set || false,
            show_image_only_before_canvas_set: props.show_image_only_before_canvas_set || false,
            dont_show_canvas: props.dont_show_canvas || false,
            but_show_canvas_once: props.but_show_canvas_once || false,
            has_shown_canvas_once: false,
            tool: props.tool || "PENCIL",
            select_mode: props.select_mode || "REPLACE",
            pencil_mirror_mode: props.pencil_mirror_mode || "NONE",
            hue: props.hue || 0,
            pxl_width: 32,
            pxl_height: 32,
            pxl_current_color: props.pxl_current_color || "#00000000",
            pxl_current_opacity: props.pxl_current_opacity || 1,
            bucket_threshold: props.bucket_threshold || 0,
            color_loss: props.color_loss || 0.25,
            default_size: props.default_size || 96,
            ideal_size: props.ideal_size || props.default_size || 96,
            max_size: props.max_size || props.default_size * 2 || 192,
            px_per_px: props.px_per_px || 1,
            fast_drawing: props.fast_drawing || false,
            canvas_cursor: props.canvas_cursor || 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAFxJREFUSIntlkEKACEQw6b7/z/Hq7cdqeAcmrtJQRCrDACc824YZ8B3cU/iiSc+M27x7IULDqrq3Z0kdaVdnwA6XqA14Mh3svTXuA246QtzyB8u8cQTHx23cF+4BaK1P/6WF9EdAAAAAElFTkSuQmCC") 15 15, auto',
            canvas_border_radius: props.canvas_border_radius || 0,
            canvas_wrapper_background_color: props.canvas_wrapper_background_color || "#020529",
            canvas_wrapper_border_width: props.canvas_wrapper_border_width || 0,
            canvas_wrapper_border_radius: props.canvas_wrapper_border_radius || 4,
            canvas_wrapper_padding: props.canvas_wrapper_padding || 72,
            show_original_image_in_background: typeof props.show_original_image_in_background === "undefined" ? true: props.show_original_image_in_background,
            show_transparent_image_in_background: typeof props.show_transparent_image_in_background === "undefined" ? true: props.show_transparent_image_in_background,
            hide_canvas_content: props.hide_canvas_content || false,
            default_scale: props.default_scale || 0.9,
            scale: props.scale || props.default_scale || 0.9,
            scale_move_x: 0,
            scale_move_y: 0,
            _scale_move_speed_timestamp: 0,
            _moves_speeds: [],
            _moves_speed_average_now: -24,
            mine_player_direction: props.mine_player_direction || "UP",
            _mine_index: null,
            _previous_mine_player_index: null,
            _mine_player_index: null,
            _pencil_mirror_index: -1,
            _previous_pencil_mirror_axes_indexes: new Set(),
            _previous_pencil_mirror_axes_hover_indexes: new Set(),
            _is_there_new_dimension: false,
            _was_canvas_content_hidden: false,
            _base64_original_images: [],
            _original_image_index: -1,
            _old_layers: [{id: Date.now(), name: "Layer 0", hidden: false, opacity: 1}],
            _layers: [{id: Date.now(), name: "Layer 0", hidden: false, opacity: 1}],
            _layers_defined_at: Date.now(),
            _layer_index: 0,
            _s_pxl_colors: [Uint32Array.of(0)],
            _old_pxl_colors: Uint32Array.of(0),
            _s_pxls: [new Array((props.pxl_width || 32) * (props.pxl_height || 32)).fill(0)],
            _old_pxls: new Array((props.pxl_width || 32) * (props.pxl_height || 32)).fill(0),
            _json_state_history: {previous_history_position: 0, history_position: 0, state_history: []},
            _saved_json_state_history_timestamp_from_drawing: 0,
            _old_pxl_width: 0,
            _old_pxl_height: 0,
            _pxls_hovered: -1,
            _old_pxls_hovered: -1,
            _canvas: null,
            _canvas_container: null,
            _canvas_wrapper: null,
            _canvas_wrapper_overflow: null,
            _mouse_down: false,
            _state_history_length: 61 - parseInt(0.1 * parseInt(parseInt(props.pxl_width || 32) + parseInt(props.pxl_height || 32)) / 2),
            _last_action_timestamp: Date.now(),
            _last_paint_timestamp: Date.now(),
            _lazy_lazy_compute_time_ms: 10 * 1000,
            _undo_buffer_time_ms: parseInt(parseInt(props.pxl_width || 32) * 2 + parseInt(props.pxl_height || 32) * 2 + parseInt(window.w_canvas_pixels._is_mobile_or_tablet ? 3000: 1500)),
            _mouse_inside: false,
            _paint_hover_old_pxls_snapshot: new Array((props.pxl_width || 32) * (props.pxl_height || 32)).fill(0),
            _select_hover_old_pxls_snapshot: [],
            _paint_or_select_hover_actions_latest_index: -1,
            _paint_or_select_hover_pxl_indexes: new Set(),
            _shape_index_a: -1,
            _select_shape_index_a: -1,
            _shape_index_b: -1,
            _select_shape_index_b: -1,
            _pxl_indexes_of_old_shape: new Set(),
            _pxl_indexes_of_selection: new Set(),
            _previous_pxl_indexes_of_selection: new Set(),
            _pxl_indexes_of_selection_drawn: new Set(),
            _imported_image_previous_start_x: 0,
            _imported_image_previous_start_y: 0,
            _imported_image_start_x: 0,
            _imported_image_start_y: 0,
            _imported_image_pxls: [],
            _imported_image_width: 0,
            _imported_image_height: 0,
            _imported_image_scale_delta_x: 0,
            _imported_image_scale_delta_y: 0,
            _imported_image_previous_scale_delta_x: 0,
            _imported_image_previous_scale_delta_y: 0,
            _is_on_resize_element: false,
            _imported_image_pxl_colors: [],
            _is_image_import_mode: false,
            _previous_imported_image_pxls_positioned_keyset: new Set(),
            _previous_image_imported_resizer_index: -1,
            _pxls_explosion: [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,3,0,0,0,2,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,2,1,2,1,0,1,0,0,0,0,0,0,0,1,2,3,1,1,0,0,0,1,0,0,0,0,1,1,3,2,0,0,1,2,3,1,1,0,0,0,0,1,0,2,2,1,0,1,2,0,1,0,0,0,0,0,0,1,1,0,1,2,0,2,0,0,0,0,0,0,0,0,0,0,1,1,3,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,2,1,2,2,0,0,0,0,0,0,0,0,0,1,2,0,1,3,2,1,1,0,0,0,0,0,0,0,1,3,3,4,3,3,2,0,1,0,0,0,0,0,1,1,2,3,3,1,1,4,1,1,1,1,0,0,1,0,2,3,3,1,3,1,3,3,2,0,1,0,0,1,1,2,2,3,3,4,3,3,3,2,1,0,0,0,0,0,1,3,2,2,2,3,3,2,2,0,0,0,0,0,0,0,3,3,1,1,2,3,3,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,1,1,0,0,0,0,0,0,0,0,1,2,2,3,4,2,1,0,0,0,0,0,1,1,1,1,3,3,3,4,4,3,1,1,0,0,0,1,1,2,2,4,4,3,4,3,3,3,1,0,0,0,1,2,3,3,4,3,3,3,4,4,3,1,1,0,1,2,2,3,3,3,3,3,4,4,2,1,2,1,1,1,2,3,3,4,5,4,3,4,2,3,3,2,1,1,1,2,3,4,4,5,5,3,3,2,3,4,2,1,1,0,1,2,4,4,3,2,3,4,3,4,5,4,1,0,0,0,0,1,2,3,2,3,4,4,4,4,3,1,0,0,0,0,1,1,1,1,4,5,3,1,2,3,1,0,0,0,0,0,1,2,3,2,3,2,1,1,1,1,0,0,0,0,0,1,1,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,1,1,0,0,0,0,0,0,0,0,1,2,2,3,4,2,1,0,0,0,0,0,1,1,1,1,3,3,3,4,4,3,1,1,0,0,0,1,1,2,2,4,4,3,4,3,3,3,1,0,0,0,1,2,3,3,4,3,3,3,4,4,3,1,1,0,1,2,2,3,3,3,3,3,4,4,2,1,2,1,1,1,2,3,3,4,5,4,3,4,2,3,3,2,1,1,1,2,3,4,4,5,5,3,3,2,3,4,2,1,1,0,1,2,4,4,3,2,3,4,3,4,5,4,1,0,0,0,0,1,2,3,2,3,4,4,4,4,3,1,0,0,0,0,1,1,1,1,4,5,3,1,2,3,1,0,0,0,0,0,1,2,3,2,3,2,1,1,1,1,0,0,0,0,0,1,1,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,1,1,1,0,2,1,1,1,0,0,0,0,1,1,0,1,3,0,2,2,2,3,1,0,1,1,0,1,3,0,2,2,2,2,0,2,2,2,2,3,1,0,0,2,2,2,0,0,0,0,2,2,0,0,2,2,0,0,2,1,1,0,0,0,0,0,0,0,0,2,0,0,2,0,1,4,0,0,0,0,0,0,0,0,2,1,1,2,2,2,0,0,0,0,0,0,0,0,0,2,3,1,0,2,2,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,5,1,0,0,0,0,1,3,2,0,0,0,0,0,0,1,1,0,2,2,0,1,1,2,2,0,0,0,0,0,0,0,0,2,2,0,0,2,0,2,0,0,0,0,0,0,0,2,2,3,1,0,2,2,2,0,0,2,2,2,2,2,2,0,1,1,0,0,2,1,3,2,0,2,2,2,3,1,2,0,0,2,0,0,1,1,0,2,2,0,0,1,1,0,0,0],
                [0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,2,0,0,0,0,2,1,0,1,1,0,1,2,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1,0,0,0,0,1,2,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,2,0,0,0,0,0,2,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],
                [0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],            ],
            _pxl_colors_explosion: [
                ["#00000000","#ff0000ff","#ff3a00ff","#ff8200ff"],
                ["#00000000","#ff0000ff","#ff3a00ff","#ff8200ff"],
                ["#00000000","#ff0000ff","#ff3a00ff","#ff8200ff","#ffc900ff"],
                ["#00000000","#ff0000ff","#ff3a00ff","#ff8200ff","#ffc900ff","#ffe900ff"],
                ["#00000000","#8a0000ff","#1a1a1aff","#ff0000ff","#808080ff","#ff8200ff","#ff3a00ff"],
                ["#00000000","#8a0000ff","#1a1a1aff","#ff0000ff","#ff8200ff","#ff3a00ff"],
                ["#00000000","#8a0000ff","#ff0000ff","#ff8200ff","#ff3a0099"],
                ["#00000000","#8a000066"],
            ],
            _explosion_started_timestamp: 0,
            _explosion_width: 15,
            _explosion_height: 15,
            _previous_explosion_pxls_positioned_keyset: new Set(),
            _explosion_time: 750,
            _explosion_index: -1,
            _selection_pair_highlight: true,
            _old_selection_pair_highlight: true,
            _pointer_events: [],
            _latest_pointers_distance: 0,
            _latest_pointers_client_x_center: 0,
            _latest_pointers_client_y_center: 0,
            _previous_single_pointer_down_timestamp: 0,
            _previous_double_pointer_down_timestamp: 0,
            _previous_double_pointer_move_timestamp: 0,
            _previous_single_pointer_down_x_y: [-1, -1],
            _image_move_from: [-1, -1],
            _canvas_container_width: 0,
            _canvas_container_height: 0,
            _canvas_container_left: 0,
            _canvas_container_top: 0,
            _updated_at: Date.now(),
            _screen_zoom_ratio: 1,
            _notified_position_at: 0,
            _event_button: -1,
            _force_updated_timestamp: 0,
            _canvas_event_target: "CANVAS_WRAPPER_OVERFLOW",
            _loading_base64_img: "",
            _loading_base64_img_changed: 0,
            _hidden: true,
            _intervals: [],
            _kb: 0,
            _device_motion: true,
            export_state_every_ms: props.export_state_every_ms || 60 * 1000,
            _xxHash: function(array){return array.length;},
            _last_filters_hash: "",
        };
    };

    componentDidMount() {

        try {

            this.setState({_xxHash: xxHash32}, () => {

                xxHash().then(({h64Raw}) => {

                    const h = h64Raw(Uint8Array.from(Buffer.from(Array.of(3, 69, 777, 666))));
                    this.setState({_xxHash: h64Raw});
                });

            });

        } catch( e ) {

            console.log("xxhash is pure js can't use wasm");
            this.setState({_xxHash: xxHash32});
        }

        window.addEventListener("resize", this._updated_dimensions);
        this._updated_dimensions();
        if(window.w_canvas_pixels._is_mobile_or_tablet && this.state._device_motion === true){
            window.addEventListener("devicemotion", this._handle_motion_changes);
        }

        let _intervals = [];

        _intervals[0] = window._fps_interval;

        _intervals[1] = setInterval(() => {this._maybe_save_state()}, parseInt(this.state._undo_buffer_time_ms * 1.05));

        _intervals[2] = setInterval(() => {this._maybe_update_mine_player()}, 1000 / 30);

        _intervals[3] = setInterval(() => {this._maybe_update_selection_highlight()}, window.w_canvas_pixels._is_mobile_or_tablet ? 2500: 1250);

        _intervals[5] = setInterval(() => {this._notify_export_state()}, this.state.export_state_every_ms);

        _intervals[7] = setInterval(() => {this._update_canvas()}, parseInt(this.state._undo_buffer_time_ms * 1));

        if(!window.w_canvas_pixels._is_mobile_or_tablet) {

            _intervals[8] = setInterval(() => {this.set_move_speed_average_now()},  31);
        }

        const body_css =
            "body {" +
                "touch-action:none;" +
            "}";

        const pixelated_css =
            ".Canvas-Pixels, .Canvas-Wrapper-Overflow, .Canvas-Wrapper, .Canvas-Pixels-Cover {" +
                "image-rendering: optimizeSpeed;" +
                "image-rendering: -moz-crisp-edges;" +
                "image-rendering: -webkit-crisp-edges;" +
                "image-rendering: -webkit-optimize-contrast;" +
                "image-rendering: -o-pixelated;" +
                "image-rendering: crisp-edges;" +
                "-ms-interpolation-mode: nearest-neighbor;" +
                "image-rendering: pixelated;" +
                "touch-action: none;" +
                "pointer-events: none;" +
                "backface-visibility: hidden;" +
                "mix-blend-mode: normal;" +
                "background-blend-mode: normal;" +
                "transition: none;" +
            "}";

        const canvas_wrapper_css =
            `.Canvas-Wrapper-Overflow.Shown {
                animation-name: canvanimation;
                animation-fill-mode: both;
                animation-duration: 240ms;
                animation-delay: 0ms;
                animation-timing-function: linear;
                opacity: 1 !important,
            }
            .Canvas-Wrapper-Overflow {
                opacity: 0 !important,
                transform-origin: center center !important;
            }
            @keyframes canvanimation { 
                  0% { transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: .0; }
                  4.3% { transform: matrix3d(0.271, 0, 0, 0, 0, 0.271, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: .2; }
                  8.61% { transform: matrix3d(.818, 0, 0, 0, 0, .818, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: .8; }
                  12.91% { transform: matrix3d(1.078, 0, 0, 0, 0, 1.078, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: .9; }
                  17.22% { transform: matrix3d(1.11, 0, 0, 0, 0, 1.11, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; }
                  28.33% { transform: matrix3d(1.031, 0, 0, 0, 0, 1.031, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; }
                  39.44% { transform: matrix3d(.991, 0, 0, 0, 0, .991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; }
                  61.66% { transform: matrix3d(1.001, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; }
                  83.98% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; }
                  100% { transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); opacity: 1; } 
            }` +
            ".Canvas-Pixels-Cover::after {" +
                `top: 0;
                left: 0;
                width: calc(60% - 12px);
                content: ""attr(datatexttop)"";
                padding: 0px 0px 8px 12px;
                position: fixed;
                transform: translate(0px, -100%);
                line-height: 20px;
                font-size: 14px;
                font-family: "Jura";
                color: #FAFAFAAA;` +
            "}" +
            ".Canvas-Pixels-Cover::before {" +
                `bottom: 0;
                right: 0;
                width: calc(80% - 12px);
                text-align: right;
                content: ""attr(datatextbottom)"";
                padding: 8px 12px 0px 0px;
                position: fixed;
                transform: translate(0px, 100%);
                line-height: 20px;
                font-size: 14px;
                font-family: "Jura";
                color: #FAFAFAAA;` +
            "}" +
            ".Canvas-Wrapper.MOVE:not(.Canvas-Focused), .Canvas-Wrapper.PICKER:not(.Canvas-Focused) {" +
                "cursor: grab;" +
            "}" +
            ".Canvas-Wrapper.MOVE:active:not(.Canvas-Focused), .Canvas-Wrapper.PICKER:active:not(.Canvas-Focused) {" +
                "cursor: grabbing;" +
            "}";

        const canvas_style = document.createElement("style");
        canvas_style.innerHTML = body_css + pixelated_css + canvas_wrapper_css;
        document.head.appendChild(canvas_style);
        this.setState({_intervals}, () => {

            this._notify_size_change();
        });
    }

    _xxhashthat = (array) => {

        return String(this.state._xxHash(Uint8Array.from(Buffer.from(array))));
    };

    _set_size = (width = null, height = null) => {

        width = width || this.state.pxl_width;
        height = height || this.state.pxl_height;

        this.setState({
            id: Date.now(),
            pxl_width: width,
            pxl_height: height,
            _pxl_indexes_of_selection: new Set(),
            _layers: [{id: Date.now(), name: "Layer 0", hidden: false, opacity: 1}],
            _layer_index: 0,
            _s_pxls: Array.of(new Array((width || 32) * (height || 32)).fill(0)),
            _old_pxls: new Array((width || 32) * (height || 32)).fill(0),
            _s_pxl_colors: Array.of(Uint32Array.of(0)),
            _old_pxl_colors: ["#00000000"],
            _moves_speed_average_now: 8,
            _hidden: true,
            has_shown_canvas_once: false,
            _is_there_new_dimension: true,
        }, () => {

            this._update_screen_zoom_ratio(true);
        });
    }

    _notify_export_state = () => {

        if(this.props.on_export_state) {

            this.export_JS_state((state) => {

                this.props.on_export_state(state);
            });
        }
    }

    _updated_dimensions = () => {

        let documentElement = document.documentElement,
            body = document.getElementsByTagName('body')[0],
            _width = window.innerWidth || documentElement.clientWidth || body.clientWidth,
            _height = window.innerHeight|| documentElement.clientHeight || body.clientHeight;

        this._update_canvas_container_size();
    }

    _maybe_update_mine_player = () => {

        const { tool } = this.state;

        if(tool === "MINE") {

            const {pxl_width, pxl_height} = this.state;
            let {_mine_index, _mine_player_index, mine_player_direction} = this.state;

            if(_mine_player_index === null) {

                _mine_player_index = Math.floor(Math.random() * ((pxl_width * pxl_height)-1));
                _mine_index = -1;

            }else {

                let mine_player_x = _mine_player_index % pxl_width;
                let mine_player_y = (_mine_player_index - mine_player_x) / pxl_width;

                switch (mine_player_direction) {

                    case "UP":
                        mine_player_y--;
                        break;
                    case "RIGHT":
                        mine_player_x++;
                        break;
                    case "DOWN":
                        mine_player_y++;
                        break;
                    case "LEFT":
                        mine_player_x--;
                        break;
                }

                mine_player_x = mine_player_x % pxl_width;
                mine_player_x = mine_player_x < 0 ? pxl_width + mine_player_x: mine_player_x;
                mine_player_y = mine_player_y % pxl_height;
                mine_player_y = mine_player_y < 0 ? pxl_height + mine_player_y: mine_player_y;

                _mine_player_index = mine_player_x + mine_player_y * pxl_width;

                if(_mine_index === _mine_player_index) {

                    this.setState({_explosion_started_timestamp: Date.now(), _explosion_index: _mine_index});
                    this._notify_game_end();
                }
            }

            this.setState({
                _mine_player_index,
                _mine_index
            }, () => {

                this._update_canvas();
            });

        }

    };

    _maybe_update_selection_highlight = () => {

        const { tool, _is_image_import_mode } = this.state;

        if(tool.toUpperCase().includes("SELECT") || _is_image_import_mode || this.state._pxl_indexes_of_selection.size >= 1) {

            this.setState({_selection_pair_highlight: !this.state._selection_pair_highlight}, () => {

                this._update_canvas();
            });
        }

    };

    componentWillReceiveProps(new_props) {

        if(this.state.perspective !== new_props.perspective) {

            if(window.w_canvas_pixels._is_mobile_or_tablet && this.state._device_motion === true){

                if(new_props.perspective > 0) {

                    window.addEventListener("devicemotion", this._handle_motion_changes);
                }else {

                    window.removeEventListener("devicemotion", this._handle_motion_changes);
                }
            }
        }

        if(this.state.tool === "MINE" && new_props.tool !== "MINE") {

            this.setState({_mine_player_index: null, _mine_index: null});
        }

        if(this.state.pencil_mirror_mode !== "NONE" && new_props.pencil_mirror_mode === "NONE" || (this.state.tool.includes("PENCIL") && !new_props.tool.includes("PENCIL"))) {

            this.setState({_pencil_mirror_index: -1});
        }

        if(this.state.tool !== new_props.tool && !new_props.tool.includes("SELECT")) {

            this.setState({_pxl_indexes_of_selection: new Set(), _pxl_indexes_of_selection_drawn: new Set(this.state._pxl_indexes_of_selection)}, () => {

                this._request_force_update();
                this._notify_is_something_selected();
            });
        }

        if(
            this.state.hide_canvas_content !== new_props.hide_canvas_content ||
            this.state.show_original_image_in_background !== new_props.show_original_image_in_background ||
            this.state.show_transparent_image_in_background !== new_props.show_transparent_image_in_background ||
            this.state.pencil_mirror_mode !== new_props.pencil_mirror_mode ||
            this.state.tool !== new_props.tool ||
            this.state.select_mode !== new_props.select_mode
        ) {

            this.setState(new_props, () =>{

                    this._request_force_update(false, false, () => {

                        this._update_canvas();
                    });
            });

        }else {

            this.setState(new_props);
        }
    }

    _handle_motion_changes = (event) => {

        let screen = window.screen;
        let orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

        let x = event.accelerationIncludingGravity.x - event.acceleration.x;
        x = Math.max(-10, Math.min(10, x));
        let previous_x = x;

        let y = event.accelerationIncludingGravity.y - event.acceleration.y;
        y = Math.max(-10, Math.min(10, y));

        switch(orientation) {

            case "portrait-primary":
                x = x;
                y = y;
                break;
            case "portrait-secondary":
                x = -x;
                y = -y;
                break;
            case "landscape-primary":

                x = -y;
                y = previous_x;
                break;
            case "landscape-secondary":

                x = y;
                y = -previous_x;
                break;
        }

        if(window.w_canvas_pixels._is_mobile_or_tablet && this.state.perspective && this.state.has_shown_canvas_once) {

            this.setState({_device_motion: true, perspective_coordinate: [x, y], perspective_coordinate_last_change: Date.now()}, () => {

                if(this.state._moves_speed_average_now === -24) {

                    this._request_force_update(true, true, () => {

                        //this._notify_perspective_coordinate_changes([x, y, this.state.scale]);
                    });
                }
            });
        }
    };

    set_perspective_coordinate = (array) => {

        if((!window.w_canvas_pixels._is_mobile_or_tablet || !this.state._device_motion) && this.state.perspective && this.state.has_shown_canvas_once) {

            this.setState({perspective_coordinate: array, perspective_coordinate_last_change: Date.now()}, () => {

                this._request_force_update(true, true, () => {

                    if(!window.w_canvas_pixels._is_mobile_or_tablet) {

                        this._notify_perspective_coordinate_changes(array.concat([this.state.scale]));
                    }
                });
            });
        }
    };

    _notify_perspective_coordinate_changes = (array) => {

        if(this.props.onPerspectiveCoordinateChanges) {

            const {perspective_coordinate_last_notify, perspective_coordinate_notify_after_ms} = this.state;
            const now = Date.now();

            if(perspective_coordinate_last_notify + perspective_coordinate_notify_after_ms < now){

                this.setState({perspective_coordinate_last_notify: now})
                this.props.onPerspectiveCoordinateChanges(array);
            }
        }
    };

    shouldComponentUpdate() {

        return false;
    }

    zoom_of = (of = 1, page_x = null, page_y = null, move_x = 0, move_y = 0) => {

        let { scale, scale_move_x, scale_move_y } = this.state;

        let new_scale = scale * of;

        if(!(new_scale > 6) && !(new_scale < 1/6)) {

            let ratio = 1 - scale / new_scale;
            let ratio2 = new_scale / scale;

            let pos = this._get_canvas_pos();
            let pos_x_in_canvas_container, pos_y_in_canvas_container;

            if(page_x !== null && page_y !== null) {

                pos_x_in_canvas_container = (page_x - pos.canvas_container.left);
                pos_y_in_canvas_container = (page_y - pos.canvas_container.top);
            }else {

                pos_x_in_canvas_container = pos.canvas_container.width / 2;
                pos_y_in_canvas_container = pos.canvas_container.height / 2;
            }

            let new_scale_move_x = (scale_move_x - (pos_x_in_canvas_container * ratio)) * ratio2 + move_x;
            let new_scale_move_y = (scale_move_y - (pos_y_in_canvas_container * ratio)) * ratio2 + move_y;

            const for_middle_x = (pos.canvas_container.width - pos.canvas_wrapper.width) / 2;
            const for_middle_y = (pos.canvas_container.height - pos.canvas_wrapper.height) / 2;

            const scale_move_x_max = 3/4 * pos.canvas_wrapper.width + for_middle_x;
            const scale_move_y_max = 3/4 * pos.canvas_wrapper.height + for_middle_y;

            new_scale_move_y -= for_middle_y;
            new_scale_move_x -= for_middle_x;

            let new_scale_move_x_rigged = (Math.min(Math.abs(new_scale_move_x), scale_move_x_max)) * (new_scale_move_x < 0 ? -1: 1) + for_middle_x;
            let new_scale_move_y_rigged = (Math.min(Math.abs(new_scale_move_y), scale_move_y_max)) * (new_scale_move_y < 0 ? -1: 1) + for_middle_y;

            this._set_moves(new_scale_move_x_rigged, new_scale_move_y_rigged, new_scale);
        }
    };

    current_layer_up = () => {

        let { _layers, _layer_index, _s_pxl_colors, _s_pxls, pxl_width, pxl_height } = this.state;

        if(_layer_index < _layers.length-1) {

            _layers.splice(_layer_index+1, 0, _layers.splice(_layer_index, 1)[0]);
            _s_pxl_colors.splice(_layer_index+1, 0, _s_pxl_colors.splice(_layer_index, 1)[0]);
            _s_pxls.splice(_layer_index+1, 0, _s_pxls.splice(_layer_index, 1)[0]);


            this.setState({
                _layers,
                _layer_index: parseInt(_layer_index + 1),
                _s_pxl_colors,
                _old_pxl_colors: Uint32Array.of(0),
                _s_pxls,
                _old_pxls: new Array(pxl_width * pxl_height).fill(0),
                _last_action_timestamp: Date.now()
            }, () => {

                this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
            });
        }
    };

    current_layer_down = () => {

        let { _layers, _layer_index, _s_pxl_colors, _s_pxls, pxl_width, pxl_height } = this.state;

        if(_layer_index > 0) {

            _layers.splice(_layer_index-1, 0, _layers.splice(_layer_index, 1)[0]);
            _s_pxl_colors.splice(_layer_index-1, 0, _s_pxl_colors.splice(_layer_index, 1)[0]);
            _s_pxls.splice(_layer_index-1, 0, _s_pxls.splice(_layer_index, 1)[0]);


            this.setState({
                _layers,
                _layer_index: parseInt(_layer_index - 1),
                _s_pxl_colors,
                _old_pxl_colors: Uint32Array.of(0),
                _s_pxls,
                _old_pxls: new Array(pxl_width * pxl_height).fill(0),
                _last_action_timestamp: Date.now()
            }, () => {

                this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
            });
        }
    };

    new_layer = (at_index) => {

        const {pxl_width, pxl_height} = this.state;
        let { _layers, _s_pxl_colors, _s_pxls } = this.state;
        at_index = typeof at_index === "undefined" ? _s_pxl_colors.length: at_index;

        _s_pxl_colors.splice(at_index+1, 0, Uint32Array.of(0));
        _s_pxls.splice(at_index+1, 0, new Array(pxl_width * pxl_height).fill(0));
        _layers.splice(at_index+1, 0, {id: Date.now(), name: `Layer ${at_index}`, hidden: false, opacity: 1});

        this.setState({
            _layers,
            _layer_index: at_index,
            _s_pxl_colors,
            _old_pxl_colors: Uint32Array.of(0),
            _s_pxls,
            _old_pxls: new Array(pxl_width * pxl_height).fill(0),
            _last_action_timestamp: Date.now(),
        }, () => {

            this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
        });
    };

    duplicate_layer = (at_index) => {

        const {pxl_width, pxl_height} = this.state;
        let { _layers, _s_pxl_colors, _s_pxls } = this.state;
        at_index = typeof at_index === "undefined" ? _s_pxl_colors.length: at_index;

        _s_pxl_colors.splice(at_index + 1, 0, Uint32Array.from(_s_pxl_colors[at_index]));
        _s_pxls.splice(at_index + 1, 0, [..._s_pxls[at_index]]);
        _layers.splice(at_index + 1, 0, {
            id: Date.now(),
            hash: String(_layers[at_index].hash),
            name: `${_layers[at_index].name} (copy)`,
            hidden: Boolean(_layers[at_index].hidden),
            opacity: parseFloat(_layers[at_index].opacity),
            colors: Array.from(_layers[at_index].colors),
            number_of_colors: parseInt(_layers[at_index].number_of_colors),
            thumbnail: String(_layers[at_index].thumbnail),
        });

        this.setState({
            _layers,
            _layer_index: at_index + 1,
            _s_pxl_colors,
            _old_pxl_colors: Uint32Array.of(0),
            _s_pxls,
            _old_pxls: new Array(pxl_width * pxl_height).fill(0),
            _last_action_timestamp: Date.now(),
        }, () => {

            this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
        });

    };

    delete_layer = (at_index) => {

        let { _layers, _s_pxl_colors, _s_pxls, _layer_index } = this.state;

        if(_layers.length > 1) {

            _s_pxl_colors.splice(at_index, 1);
            _s_pxls.splice(at_index, 1);
            _layers.splice(at_index, 1);

            _layer_index = at_index-1;
            _layer_index = _layer_index < 0 ? 0: _layer_index;

            this.setState({
                _layers,
                _layer_index,
                _s_pxl_colors,
                _old_pxl_colors: _s_pxl_colors[_layer_index],
                _s_pxls,
                _old_pxls: _s_pxls[_layer_index],
                _last_action_timestamp: Date.now(),
            }, () => {

                this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
            });
        }

    };

    change_active_layer = (at_index) => {

        const {  _s_pxl_colors, _s_pxls } = this.state;

        if(this.state._s_pxls.length > at_index && 0 <= at_index) {

            this.setState({
                _layer_index: at_index,
                _old_pxl_colors: Uint32Array.from(_s_pxl_colors[at_index]),
                _old_pxls: Array.from(_s_pxls[at_index]),
                _last_action_timestamp: Date.now(),
            }, () => {

                this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
            });
        }else {

            this._notify_layers_and_compute_thumbnails_change();
        }
    };

    toggle_layer_visibility = (at_index) => {

        let _layers = Array.from(this.state._layers);
        _layers[at_index].hidden = !_layers[at_index].hidden;

        this.setState({
            _layers,
            _last_action_timestamp: Date.now(),
        }, () => {

            this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
        });
    };

    change_layer_opacity = (at_index, opacity) => {

        let _layers = Array.from(this.state._layers);
        _layers[at_index].opacity = parseFloat(opacity);

        this.setState({
            _layers,
            _last_action_timestamp: Date.now(),
        }, () => {

            this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
        });
    };

    merge_down_layer = (at_index) => {

        let { _layers, _s_pxls, _s_pxl_colors } = this.state;

        _layers = Array.from(_layers);
        _s_pxls = _s_pxls.map((a) => Array.from(a));
        _s_pxl_colors = _s_pxl_colors.map((a) => Uint32Array.from(a));

        const { pxl_width, pxl_height } = this.state;

        if(typeof _layers[at_index] !== "undefined" && typeof _layers[at_index - 1] !== "undefined") {

            let new_layer_pxls = new Array(pxl_width * pxl_height).fill(0);
            let new_layer_pxl_colors = new Array();

            const top_layer_pxls = _s_pxls[at_index];
            const bottom_layer_pxls = _s_pxls[at_index - 1];

            const top_layer_pxl_colors = _s_pxl_colors[at_index];
            const top_layer_opacity = parseFloat(_layers[at_index].opacity);
            const bottom_layer_pxl_colors = _s_pxl_colors[at_index - 1];
            const bottom_layer_opacity = parseFloat(_layers[at_index - 1].opacity);

            const new_layer = {
                id: Date.now(),
                name: `Merged layers ${at_index}+${at_index-1}`,
                hidden: Boolean(_layers[at_index].hidden &&  _layers[at_index-1].hidden),
                opacity: parseInt(bottom_layer_opacity),
            };

            bottom_layer_pxls.forEach((pxl, pxl_index) => {

                const top_layer_pxl_color = top_layer_pxl_colors[top_layer_pxls[pxl_index]];
                const bottom_layer_pxl_color = bottom_layer_pxl_colors[pxl];

                let new_layer_pxl_color = this._blend_colors(bottom_layer_pxl_color, top_layer_pxl_color, top_layer_opacity, false, false, true);
                let new_layer_pxl_color_index = null;

                if(!new_layer_pxl_colors.includes(new_layer_pxl_color)) {

                    new_layer_pxl_color_index = new_layer_pxl_colors.push(new_layer_pxl_color);
                }else {

                    new_layer_pxl_color_index = new_layer_pxl_colors.indexOf(new_layer_pxl_color);
                }
                new_layer_pxls[pxl_index] = new_layer_pxl_color_index;
            });

            _layers.splice(at_index-1, 2, new_layer);
            _s_pxls.splice(at_index-1, 2, Array.from(new_layer_pxls));
            _s_pxl_colors.splice(at_index-1, 2, Uint32Array.from(new_layer_pxl_colors));

            this.setState({
                _layer_index: at_index-1,
                _layers,
                _s_pxls,
                _old_pxls: new Array(pxl_width * pxl_height).fill(0),
                _s_pxl_colors,
                _old_pxl_colors: new Uint32Array(0),
                _last_action_timestamp: Date.now(),
            }, () => {

                this._notify_layers_and_compute_thumbnails_change(null, Date.now(), true);
            });

        }
    };

    _notify_game_end = () => {

        if(this.props.onGameEnd) {

            this.props.onGameEnd();
        }

    };

    _notify_backdrop_click = (event) => {

        if(this.props.onBackdropClick) {

            this.props.onBackdropClick(event);
        }
    };

    compute_filters_preview = () => {

        this._notify_filters_change(1);
    };

    _notify_filters_change = (force = 1) => {

        if(this.props.onFiltersThumbnailChange) {

            const { _layers, _layer_index, pxl_width, pxl_height, _s_pxls, _s_pxl_colors, _last_filters_hash } = this.state;

            const p = Array.from(_s_pxls[_layer_index]);
            const pc = Uint32Array.from(_s_pxl_colors[_layer_index]).map((c) => { return this._format_color(c, true)})
            const hash = String((_layers[_layer_index] || {}).hash);

            if(_last_filters_hash === hash) { return; }

            let thumbnails = [];
            let thumbnail_count = 0;

            this.setState({_last_filters_hash: hash}, () => {

                Array.from(this.get_filter_names()).map((name, index, array) => {

                    const [p2, pc2] = this._filter_pixels(name, force, p, pc, true);

                    this.get_layer_base64_png_data_url(pxl_width, pxl_height, p2, pc2, (result) => {

                        thumbnails[name] = result;
                        thumbnail_count++;
                        this.props.onFiltersThumbnailChange(Object.assign({}, thumbnails), hash, Math.round(parseFloat(thumbnail_count / array.length)*100));
                    });
                }, 80);

            });
        }
    };

    _notify_layers_and_compute_thumbnails_change = (callback_function = null, start = Date.now(), layers_index_changed = false) => {

        const maybe_set_layers = (lyrs, lyrs_length, lyrs_changed, lyrs_hash) => {

            if(callback_function !== null) {

                callback_function(lyrs, lyrs_length, lyrs_changed, lyrs_hash);
            }
            if(lyrs_changed) {

                this.setState({_layers: lyrs, _layers_defined_at: Date.now()}, () => {

                    if(this.props.onLayersChange) {

                        this.props.onLayersChange(this.state._layer_index, this.state._layers);
                    }

                });
            }
        }

        const { _layers, pxl_width, pxl_height, _s_pxls, _s_pxl_colors } = this.state;

        if(!Boolean(_s_pxls.length === _s_pxl_colors.length && _s_pxl_colors.length === _layers.length)) {

            setTimeout(() => {

                this._notify_layers_and_compute_thumbnails_change(callback_function, start, layers_index_changed);
            }, 20);
            return false;
        }

        let all_layers = [];
        let all_layers_length = 0;

        for(let index = 0; index < _layers.length; index++){

            const l = _layers[index];
            all_layers[index] = Object.assign({}, l);
            const p = Array.from(_s_pxls[index]);
            const pc = Uint32Array.from(_s_pxl_colors[index]).map((c) => { return this._format_color(c, true)})
            const hash = this._xxhashthat(p) + "-"+ this._xxhashthat(pc);

            if(hash !== all_layers[index].hash  || !Boolean(all_layers[index].thumbnail)) {

                this.get_layer_base64_png_data_url(pxl_width, pxl_height, p, pc, (result) => {

                    all_layers[index].hash = hash;
                    all_layers[index].colors = Array.from(pc.slice(0, 128) || []).map((c) => this._format_color(c));
                    all_layers[index].number_of_colors = pc.length;
                    all_layers[index].thumbnail = result;
                    all_layers_length++;

                    if(all_layers_length === _layers.length) {

                        const all_new_layers_hash = all_layers.map((l) => {return l.hash || ""}).join("+");
                        const has_changed = Boolean(layers_index_changed || String(_layers.map((l) => {return l.hash || ""}).join("+") + _layers.map((l) => {return l.id.toString() + String(l.hidden ? "hidden": "visible") + l.opacity.toString()}).join("-")) !== String(all_layers.map((l) => {return l.hash || ""}).join("+") + all_layers.map((l) => {return l.id.toString() + String(l.hidden ? "hidden": "visible") + l.opacity.toString()}).join("-")));
                        maybe_set_layers(all_layers, all_layers_length, has_changed, all_new_layers_hash);
                    }
                }, 80);

            }else {

                all_layers_length++;

                if(all_layers_length === _layers.length) {

                    const all_new_layers_hash = all_layers.map((l) => {return l.hash || ""}).join("+");
                    const has_changed = Boolean(layers_index_changed || String(_layers.map((l) => {return l.hash || ""}).join("+") + _layers.map((l) => {return l.id.toString() + String(l.hidden ? "hidden": "visible") + l.opacity.toString()}).join("-")) !== String(all_layers.map((l) => {return l.hash || ""}).join("+") + all_layers.map((l) => {return l.id.toString() + String(l.hidden ? "hidden": "visible") + l.opacity.toString()}).join("-")));
                    maybe_set_layers(all_layers, all_layers_length, has_changed, all_new_layers_hash);
                }
            }
        }
    };

    get_layer_base64_png_data_url = (pxl_width, pxl_height, pxls, pxl_colors, callback_function, resize_width = 0) => {

        const scale = 1;
        resize_width = resize_width === 0 ? pxl_width: resize_width;

        pool.exec(window.get_layer_base64_png_data_url_process_function, [
            pxl_width,
            pxl_height,
            pxls,
            pxl_colors,
            scale,
            resize_width
        ]).catch((e) => {

            return window.get_layer_base64_png_data_url_process_function(
                pxl_width,
                pxl_height,
                pxls,
                pxl_colors,
                scale,
                resize_width
            );

        }).timeout(5 * 1000).then((result) => {

            callback_function(result);
        });
    };

    get_base64_png_data_url = (scale = 1, callback_function = () => {}, with_palette = false, with_compression_speed = 0, with_compression_quality_min = 30, with_compression_quality_max = 35) => {

        this._get_base64_png_data_url(scale, callback_function, with_palette, with_compression_speed, with_compression_quality_min, with_compression_quality_max);
    };

    _get_base64_png_data_url = (scale = 1, callback_function = () => {}, with_palette = false, with_compression_speed = 0, with_compression_quality_min = 30, with_compression_quality_max = 35) => {

        const { pxl_width, pxl_height, _s_pxls, _s_pxl_colors, _layers } = this.state;

        pool.exec(window.get_base64_png_data_url_process_function, [
            pxl_width,
            pxl_height,
            _s_pxls,
            _s_pxl_colors,
            _layers,
            scale,
            with_palette
        ]).catch((e) => {

            return window.get_base64_png_data_url_process_function(
                pxl_width,
                pxl_height,
                _s_pxls,
                _s_pxl_colors,
                _layers,
                scale,
                with_palette
            );

        }).timeout(10 * 1000).then((result) => {

            result = Object.values(result);
            let base64_in = String(result[0] || "");
            let palette = Array.from(result[1] || []);
            result = null;

            if(with_compression_speed !== 0) {

                import("../utils/png_quant").then(({png_quant}) => {

                    png_quant(base64_in, with_compression_quality_min, with_compression_quality_max, with_compression_speed, pool).then((base_64_out) => {

                        base64_in = null;
                        callback_function(with_palette ? Array.of(base_64_out, palette): Array.of(base_64_out));
                    });
                });
            }else {

                callback_function(with_palette ? Array.of(base64_in, palette): Array.of(base64_in));
            }
        });
    };

    _get_pixels_palette_and_list_from_image_data = (image_data, force_full_compute = false) => {

        const { max_size, _lazy_lazy_compute_time_ms } = this.state;

        const too_much_pixel_cpu_would_go_brrrrr = image_data.data.length / 4 > (max_size * max_size); // Can be three time bigger than the default max convert size

        let new_pxl_colors = [];
        let new_pxl_colors_set = new Set();
        let new_pxls;

        if(!too_much_pixel_cpu_would_go_brrrrr || force_full_compute) { // We can parse all pixel

            new_pxls = new Uint32Array(image_data.width * image_data.height).fill(0);
            for (let i = 0; i < image_data.data.length; i += 4) {

                const color_hex = this._get_Uint32_color_from_rgba_values(image_data.data[i+0], image_data.data[i+1], image_data.data[i+2], image_data.data[i+3]);

                const deja_vu_color_hex = new_pxl_colors_set.has(color_hex);
                let color_hex_index = deja_vu_color_hex ? new_pxl_colors.indexOf(color_hex): -1;

                if (color_hex_index === -1) {

                    color_hex_index = new_pxl_colors.push(color_hex)-1;
                    new_pxl_colors_set.add(color_hex);
                }
                new_pxls[i / 4] = color_hex_index;
            }

        }else { // We will only compute n LEVEL lines of pixel

            let start = Date.now();
            new_pxls = [];

            let skip_lines = 0;

            for (let line = 0; line <= max_size; line++) {

                if(start + _lazy_lazy_compute_time_ms < Date.now()) { break }

                const first_pixel_in_this_row = Math.round(skip_lines) * image_data.width * 4;

                for (let i = 0; i < image_data.width * 4; i += 4) {

                    let x = i + first_pixel_in_this_row;
                    const color_hex = this._get_Uint32_color_from_rgba_values(image_data.data[x+0], image_data.data[x+1], image_data.data[x+2], image_data.data[x+3]);

                    // Push color hex in palette if necessary
                    if(!new_pxl_colors.includes(color_hex)) {

                        new_pxl_colors.push(color_hex);
                    }
                    const color_hex_index = new_pxl_colors.indexOf(color_hex);
                    new_pxls[(line * image_data.width) + (i / 4)] = color_hex_index;
                }

                skip_lines += image_data.height / max_size;
            }

        }

        return {
            too_much_pixel_cpu_would_go_brrrrr: too_much_pixel_cpu_would_go_brrrrr,
            ratio_pixel_per_color: new_pxls.length / new_pxl_colors.length,
            new_pxl_colors: Uint32Array.from(new_pxl_colors),
            new_pxls: Uint32Array.from(new_pxls),
        };
    }

    _get_new_ctx_from_canvas = (width, height, pixelated = true, image_smoothing = "high") => {

        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        let context = canvas.getContext('2d');
        //context.clearRect(0, 0, canvas.width, canvas.height);

        if(pixelated) {

            context.mozImageSmoothingEnabled = false;
            context.webkitImageSmoothingEnabled = false;
            context.msImageSmoothingEnabled = false;
            context.imageSmoothingEnabled = false;

        }else if(image_smoothing.length) {

            context.imageSmoothingQuality = image_smoothing;
        }

        return [context, canvas];
    }

    copy_selection = () => {

        this.import_image_on_canvas_from_selection();
    };

    cut_selection = () => {

        this.import_image_on_canvas_from_selection();
        this.erase_selection();
        this.to_selection_none();
    };

    erase_selection = () => {

        let { _s_pxls, _s_pxl_colors, _layer_index, _pxl_indexes_of_selection, pxl_width, pxl_height } = this.state;

        let pxl_colors = Array.from(_s_pxl_colors[_layer_index]);
        if(_pxl_indexes_of_selection.size > 0) {

            if(!pxl_colors.includes(0)) {

                pxl_colors.push(0);
                _s_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);
            }

            const transparent_color_index = _s_pxl_colors[_layer_index].indexOf(0);

            _pxl_indexes_of_selection.forEach((pxl_index) => {

                const x = pxl_index % pxl_width;
                const y = (pxl_index - x) / pxl_width;

                _s_pxls[_layer_index][pxl_index] = transparent_color_index;
            });

            this.setState({
                _s_pxls,
                _s_pxl_colors,
                _last_action_timestamp: Date.now()
            }, () => {

                this._update_canvas();
            });
        }
    };

    import_image_on_canvas_from_selection = () => {

        let { _s_pxls, _s_pxl_colors, _layer_index, _pxl_indexes_of_selection, pxl_width, pxl_height } = this.state;

        if(_pxl_indexes_of_selection.size > 0) {

            let top_left = [pxl_width, pxl_height];
            let bottom_right = [-1, -1];

            _pxl_indexes_of_selection.forEach((pxl_index) => {

                const x = pxl_index % pxl_width;
                const y = (pxl_index - x) / pxl_width;

                if(x < top_left[0]) { top_left[0] = x }
                if(y < top_left[1]) { top_left[1] = y }

                if(x > bottom_right[0]) { bottom_right[0] = x }
                if(y > bottom_right[1]) { bottom_right[1] = y }

            });

            const new_width = 1 + bottom_right[0] - top_left[0];
            const new_height = 1 + bottom_right[1] - top_left[1];

            let pxls = _s_pxls[_layer_index];
            let new_pxls =  new Uint32Array(new_width * new_height);
            let new_pxl_colors = Array.from(_s_pxl_colors[_layer_index]);

            for (let i = 0; i < new_width * new_height; i++) {

                let x = i % new_width;
                let y = (i - x) / new_width;

                x += top_left[0];
                y += top_left[1];

                const index = y * pxl_width + x;

                if(_pxl_indexes_of_selection.has(index)) {

                    new_pxls[i] = pxls[index];
                }else {

                    if(!new_pxl_colors.includes(0)) {

                        new_pxl_colors.push(0);
                    }

                    new_pxls[i] = new_pxl_colors.indexOf(0);
                }
            }

            [ new_pxls, new_pxl_colors ] = this._remove_duplicate_pxl_colors(new_pxls, new_pxl_colors);

            this.setState({
                _imported_image_start_x: top_left[0],
                _imported_image_start_y: top_left[1],
                _imported_image_scale_delta_x: 0,
                _imported_image_scale_delta_y: 0,
                _imported_image_pxls: new_pxls,
                _imported_image_width: new_width,
                _imported_image_height: new_height,
                _imported_image_pxl_colors: new_pxl_colors,

            }, () => {

                this._notify_image_import_complete();
                this._notify_is_image_import_mode();
                this._update_canvas();
            });
        }

    };

    import_image_on_canvas = (image_obj) => {

        if(this.props.onImageImport) {

            this.props.onImageImport();
        }

        setTimeout(() => {

            const { pxl_width, pxl_height } = this.state;

            // Draw the original image in an invisible canvas
            let width = image_obj.width;
            let height = image_obj.height;

            if(true || pxl_width > width && pxl_height > height) {

                let [canvas_ctx] = this._get_new_ctx_from_canvas(width, height, true);
                canvas_ctx.drawImage(image_obj, 0, 0, width, height);
                const image_data = canvas_ctx.getImageData(0, 0, width, height);
                const { new_pxl_colors, new_pxls } = this._get_pixels_palette_and_list_from_image_data(image_data, true);

                this.setState({
                    _imported_image_start_x: 0,
                    _imported_image_start_y: 0,
                    _imported_image_scale_delta_x: 0,
                    _imported_image_scale_delta_y: 0,
                    _imported_image_pxls: new_pxls,
                    _imported_image_width: width,
                    _imported_image_height: height,
                    _imported_image_pxl_colors: new_pxl_colors,

                }, () => {
                    this._notify_image_import_complete();
                    this._notify_is_image_import_mode();
                    this._update_canvas();
                });

            }

        }, 50);

    };

    _get_imported_image_scaled = (_imported_image_pxls, _imported_image_pxl_colors, _imported_image_width, _imported_image_height, _imported_image_scale_delta_x, _imported_image_scale_delta_y) => {


        if(_imported_image_pxls.length) {

            let [canvas_ctx, canvas] = this._get_new_ctx_from_canvas(_imported_image_width, _imported_image_height, true);


            _imported_image_pxls.forEach((pxl, index) => {

                const pos_x = index % _imported_image_width;
                const pos_y = (index - pos_x) / _imported_image_width;

                const color = this._get_hex_from_Uint32(_imported_image_pxl_colors[pxl]);
                canvas_ctx.fillStyle = color;
                canvas_ctx.fillRect(pos_x, pos_y, 1, 1);
            });

            const scaled_width = _imported_image_width + _imported_image_scale_delta_x;
            const scaled_height = _imported_image_height + _imported_image_scale_delta_y;

            let [canvas_resized_ctx] = this._get_new_ctx_from_canvas(scaled_width, scaled_height, true);
            canvas_resized_ctx.drawImage(canvas, 0, 0, _imported_image_width, _imported_image_height, 0, 0, scaled_width, scaled_height);
            const resized_image_data = canvas_resized_ctx.getImageData(0, 0, scaled_width, scaled_height);
            const { new_pxls, new_pxl_colors } = this._get_pixels_palette_and_list_from_image_data(resized_image_data, true);
            return [ new_pxls, new_pxl_colors, scaled_width, scaled_height ];

        }else {

            return [_imported_image_pxls, _imported_image_pxl_colors, _imported_image_width, _imported_image_height];
        }
    };

    set_canvas_hidden = () => {

        this.setState({_hidden: true}, () => {

            this._request_force_update();
        });

    };

    set_canvas_from_image = (image_obj = null, loading_base64_img = "", img_d = {}, dont_smart_resize = false) => {

        if(this.props.onLoad) {this.props.onLoad("image_load");}

        if(img_d.id) {

            const _layer_index = 0;
            const ns_pxl_colors = Array.of(Uint32Array.from(img_d.pxl_colors));
            const ns_pxls = Array.of(Array.from(img_d.pxls));

            this.setState({
                _id: Date.now(),
                pxl_width: img_d.width,
                pxl_height: img_d.height,
                _pxl_indexes_of_selection: new Set(),
                _base64_original_images: [],
                _s_pxl_colors: ns_pxl_colors,
                _s_pxls: ns_pxls,
                _layers: [{id: Date.now(), name: "Layer 0", hidden: false, opacity: 1}],
                _layer_index,
                _old_pxls_hovered: -1,
                _pxls_hovered: -1,
                _old_pxl_colors: Uint32Array.of(0),
                _old_pxls: new Array(img_d.pxls.length).fill(0),
                _hidden: true,
                has_shown_canvas_once: false,
                _is_there_new_dimension: true,
                _original_image_index: -1,
                _last_action_timestamp: Date.now(),
            }, () => {

                this._update_screen_zoom_ratio(true, () => {

                    this._notify_image_load_complete();
                    this._notify_export_state();
                });
            });

        }else {

            setTimeout( () => {

                const { default_size, max_size, ideal_size, _base64_original_images, dont_change_img_size_onload, dont_compute_base64_original_image } = this.state;

                // Draw the original image in an invisible canvas
                let width = image_obj.naturalWidth;
                let height = image_obj.naturalHeight;

                let [canvas_ctx, canvas] = this._get_new_ctx_from_canvas(width, height, true);
                canvas_ctx.drawImage(image_obj, 0, 0, width, height);
                const image_data = canvas_ctx.getImageData(0, 0, width, height);
                const base64_original_image = dont_compute_base64_original_image ? "": loading_base64_img.length > 0 ? loading_base64_img: canvas.toDataURL("image/jpeg");
                canvas = null;

                const merge_color_threshold = 4/16;
                let is_crop_necessary = false;
                let a_better_scale = 1;

                if(dont_change_img_size_onload === false) {

                    // From the result in colors and pixels color index find if the image is resized bigger but from a pixelart image
                    let {new_pxls, new_pxl_colors} = this._get_pixels_palette_and_list_from_image_data(image_data, true);
                    let ratio_pixel_per_color = new_pxls.length / new_pxl_colors.length;
                    let enough_sure = max_size * max_size > height * width;

                    if(!enough_sure) {

                        let best_min_occ = 1/0;
                        let occ_list = [];
                        let occ = 0;
                        let last_occ = -1;

                        occ_list[1] = 0;
                        Uint32Array.from(new_pxls).forEach((value, index) => {

                            // If like the last occurrence increment the min occurrence variable
                            if(last_occ === value || index === 0) {

                                occ++;
                            }else {

                                // If we found a smaller occurrence pattern that finished, the best one is this one
                                if(occ < best_min_occ) {

                                    best_min_occ = occ;
                                }

                                // Reset occurrence to zero since there is a new pattern
                                occ_list[occ] = typeof occ_list[occ] !== "undefined" ? occ_list[occ] + 1 : 1;

                                occ = 1;
                            }

                            // Set the last occurrence the new one
                            last_occ = value;
                        });

                        let most_frequent_following_repetition_number_in_px = 1;
                        let most_frequent_following_repetition_number_in_px_with_bonus = 1;
                        let most_frequent_following_occurrence = 1;
                        let most_frequent_following_repetition_number = 1;
                        const ideal_size_percent_of_than_real_size = Math.sqrt((width * height) / (ideal_size * ideal_size));
                        const occurrence_is_probably_lower_than = 32;

                        Object.entries(occ_list).forEach((value, index) => {

                            let [occurrence, repetition_number] = value;
                            occurrence = parseInt(occurrence);

                            if(occurrence > occurrence_is_probably_lower_than) { return; }
                            // The bonus is computed so it prefer larger occurrence (up to 128px following themselves) because we could have a table with small lines, faded angle or even noise above square representing pixel
                            // The bigger the image is based on one dimension, the bigger the bonus will be since it best encourage big occurrences in big images
                            const occurrence_position_evaluation_on_max_occurrence = occurrence > occurrence_is_probably_lower_than ? 1: (occurrence_is_probably_lower_than+10) / (occurrence+10);
                            const occurrence_position_on_ideal_size_times_smaller = occurrence > occurrence_is_probably_lower_than ? 1: occurrence_position_evaluation_on_max_occurrence * ideal_size_percent_of_than_real_size;
                            const bonus_for_longer_occurrence_in_px = occurrence > occurrence_is_probably_lower_than ? 0: occurrence_position_on_ideal_size_times_smaller * Math.pow(occurrence, 1 + (1 - 1 / occurrence_position_evaluation_on_max_occurrence));

                            const is_better_repetition_number_in_px = most_frequent_following_repetition_number_in_px_with_bonus < (repetition_number * occurrence + bonus_for_longer_occurrence_in_px);

                            if(occurrence !== 1 && is_better_repetition_number_in_px) {

                                most_frequent_following_occurrence = occurrence;
                                most_frequent_following_repetition_number = repetition_number;
                                most_frequent_following_repetition_number_in_px = repetition_number * occurrence;
                                most_frequent_following_repetition_number_in_px_with_bonus = repetition_number * occurrence + bonus_for_longer_occurrence_in_px;

                            }

                        });

                        // We can check if the occurrence of only 1px is less than the most frequent following occurrence in total pixel size.
                        // Yet the problem we face is that the X occurrence of Y pixel might be way smaller in a big image if there is 1px size line or annoying circle shape
                        // So the solution is to multiply the total amount of pixel repeated in the best occurrence by the decrease of size ideally

                        const most_frequent_following_occurrence_intelligent = most_frequent_following_repetition_number_in_px * ideal_size_percent_of_than_real_size * 4 > occ_list[1] ?
                            most_frequent_following_occurrence: 1;

                        // Find if there is a gape: occurrence nearly not existing from the occurrence 1 to the occurrence X of which X is greater than length of occurrence 1
                        let a_better_frequent_following_occurrence_intelligent = most_frequent_following_occurrence_intelligent;

                        // If there is less times occurrence of one pixel than the biggest occurrence
                        // We can deduce the gap if surpassing the number of 1px occurrence, the scale is so
                        if(occ_list[1] < occ_list.length) {

                            let counter = 0;
                            while(true) {

                                if (typeof occ_list[counter] === "undefined" || occ_list[counter] === 0) {

                                    counter++;
                                }else {

                                    if(counter > occ_list[1]) {

                                        a_better_frequent_following_occurrence_intelligent = counter;
                                        enough_sure = true;
                                    }

                                    break;
                                }
                            }
                        }

                        // We have cheated the selection of occurrence with a bonus, now we check if there isn't an occurrence smaller which correlate
                        let adjusted_following_occurrence = a_better_frequent_following_occurrence_intelligent;


                        Object.entries(occ_list).forEach((entry, index) => {

                            let [key, value] = entry; // Key is the occurrence series and value the number of occurrence
                            key = parseInt(key);

                            if(index > 1 && value > occ_list[adjusted_following_occurrence] && key < a_better_frequent_following_occurrence_intelligent) {

                                adjusted_following_occurrence = key;
                            }
                        });

                        // We'll check if there is a near occurrence that match image width
                        if(image_obj.naturalWidth % adjusted_following_occurrence !== 0) {

                            let difference = 1;
                            while(
                                image_obj.naturalWidth % (adjusted_following_occurrence + difference) !== 0 && image_obj.naturalWidth % (adjusted_following_occurrence - difference) !== 0 &&
                                image_obj.naturalHeight % (adjusted_following_occurrence + difference) !== 0 && image_obj.naturalHeight % (adjusted_following_occurrence - difference) !== 0 &&
                                difference < 16
                                ) {

                                if(
                                    image_obj.naturalWidth % (adjusted_following_occurrence - difference) === 0 &&
                                    image_obj.naturalHeight % (adjusted_following_occurrence - difference) === 0) {

                                    adjusted_following_occurrence -= difference;
                                }else if(
                                    image_obj.naturalWidth % (adjusted_following_occurrence + difference) === 0 &&
                                    image_obj.naturalHeight % (adjusted_following_occurrence + difference) === 0
                                ) {

                                    adjusted_following_occurrence += difference;
                                }

                                difference++;

                            }
                        }

                        a_better_scale =  1 / adjusted_following_occurrence;
                    }

                    const a_better_scale_size = (height * a_better_scale) * (width * a_better_scale);
                    const is_low_color_number_xor_small_enough = // Can be either 3 times less color and 3 times bigger or 2 times less color and 2 time bigger
                        (ratio_pixel_per_color > 4 * 4 * Math.sqrt(a_better_scale_size) && a_better_scale_size <= (default_size * default_size) * 4) ||
                        (ratio_pixel_per_color > 3 * 3 * Math.sqrt(a_better_scale_size) && a_better_scale_size <= (default_size * default_size) * 3) ||
                        (ratio_pixel_per_color > 2 * 2 * Math.sqrt(a_better_scale_size) && a_better_scale_size <= (default_size * default_size) * 2) ||
                        (ratio_pixel_per_color > 1 * 1 * Math.sqrt(a_better_scale_size) && a_better_scale_size <= (default_size * default_size) * 1);
                    const is_less_color_enough = a_better_scale_size > new_pxl_colors.length;
                    const is_small_enough = a_better_scale_size < max_size * max_size;

                    if((!is_low_color_number_xor_small_enough && !enough_sure || (!is_small_enough || !is_less_color_enough)) || dont_smart_resize === true) { // The image must be lowered

                        let scale = 1;

                        while (Math.round(width * scale) * Math.round(height * scale) > (default_size * default_size)) { // Decrement the scale until it fits the maximum size (limit)

                            scale -= 0.01;
                        }


                        width = width * scale;
                        height = height * scale;
                    }else {

                        if(height * width > default_size * default_size) {

                            width *= a_better_scale;
                            height *= a_better_scale;
                            is_crop_necessary = true;
                        }
                    }

                }

                let canvas_resized_ctx;
                let canvas_resized_image_data = null;

                if(is_crop_necessary && dont_change_img_size_onload === false) {

                    let adjusted_following_occurrence = 1 / a_better_scale;

                    const initial_width = width / a_better_scale;
                    const initial_height = height / a_better_scale;

                    const initial_width_cropped = initial_width - initial_width % adjusted_following_occurrence;
                    const initial_height_cropped = initial_height - initial_height % adjusted_following_occurrence;

                    const cropped_width = Math.floor(initial_width_cropped / adjusted_following_occurrence);
                    const cropped_height = Math.floor(initial_height_cropped / adjusted_following_occurrence);

                    const sw = initial_width_cropped;
                    const sh = initial_height_cropped;
                    const sx = Math.floor((initial_width - initial_width_cropped) / 2);
                    const sy = Math.floor((initial_height - initial_height_cropped) / 2);

                    width = Math.floor(cropped_width);
                    height = Math.floor(cropped_height);

                    [canvas_resized_ctx] = this._get_new_ctx_from_canvas(width, height, true);
                    canvas_resized_ctx.drawImage(image_obj, sx, sy, sw, sh, 0, 0, width, height);
                    canvas_resized_image_data = canvas_resized_ctx.getImageData(0, 0, width, height);

                }else if(dont_change_img_size_onload === false) {

                    width = Math.floor(width);
                    height = Math.floor(height);

                    [canvas_resized_ctx] = this._get_new_ctx_from_canvas(width, height, true);
                    canvas_resized_ctx.drawImage(image_obj, 0, 0, width, height);
                    canvas_resized_image_data = canvas_resized_ctx.getImageData(0, 0, width, height);

                }else {

                    canvas_resized_image_data = image_data;
                }

                const new_pxl_data = this._get_pixels_palette_and_list_from_image_data(canvas_resized_image_data, true);

                let new_base64_original_images = _base64_original_images;

                if(!new_base64_original_images.includes(base64_original_image)) {

                    new_base64_original_images.push(base64_original_image);
                }

                let ns_pxl_colors = Array.of(Uint32Array.from(new_pxl_data.new_pxl_colors));
                let ns_pxls = Array.of(Uint32Array.from(new_pxl_data.new_pxls));

                this.setState({
                    _id: Date.now(),
                    pxl_width: width,
                    pxl_height: height,
                    _pxl_indexes_of_selection: new Set(),
                    _base64_original_images: new_base64_original_images,
                    _layers: [{id: Date.now(), name: "Layer 0", hidden: false, opacity: 1}],
                    _json_state_history: {previous_history_position: 0, history_position: 0, state_history: []},
                    _saved_json_state_history_timestamp_from_drawing: 0,
                    _s_pxl_colors: ns_pxl_colors,
                    _s_pxls: ns_pxls,
                    _layer_index: 0,
                    _old_pxls_hovered: -1,
                    _pxls_hovered: -1,
                    _old_pxl_colors: Uint32Array.of(0),
                    _old_pxls: new Array(ns_pxls[0].length).fill(0),
                    _hidden: true,
                    has_shown_canvas_once: false,
                    _is_there_new_dimension: true,
                    _original_image_index: new_base64_original_images.indexOf(base64_original_image),
                    _last_action_timestamp: Date.now(),
                }, () => {

                    this._update_screen_zoom_ratio(true, () => {

                        this._notify_image_load_complete();
                        this._notify_export_state();
                    });
                });

            }, 50);
        }
    };

    _set_canvas_ref = (element) => {

        if(element === null) {return}
        const { pxl_width, pxl_height } = this.state;

        element.context2d = element.getContext('2d', {
            desynchronized: true
        });

        try {

            if (typeof OffscreenCanvas === "undefined") {
                throw new Error("Impossible to create OffscreenCanvas in this web environment.");
            }

            element.offscreenCanvas = new OffscreenCanvas(pxl_width, pxl_height);
            element.offscreenCanvas.context2d = element.offscreenCanvas.getContext("2d", {
                desynchronized: true
            });

        } catch (e) {

            element.offscreenCanvas = document.createElement("canvas");
            element.offscreenCanvas.width = pxl_width;
            element.offscreenCanvas.height = pxl_height;
            element.offscreenCanvas.context2d = element.offscreenCanvas.getContext("2d", {
                desynchronized: true
            });
        }


        element.offscreenCanvas.context2d.globalCompositeOperation = "source-over";
        element.offscreenCanvas.context2d.imageSmoothingEnabled = false;
        element.context2d.globalCompositeOperation = "copy";
        element.context2d.imageSmoothingEnabled = false;

        this.setState({_canvas: element, has_shown_canvas_once: false}, () => {

            this._request_force_update(false, false);
        });
    };

    _set_canvas_container_ref = (element) => {

        if(element === null) {return}

        this.setState({_canvas_container: element}, () => {

            this._update_canvas_container_size();
        });
    };

    _set_canvas_wrapper_ref = (element) => {

        if(element === null) {return}

        this.setState({_canvas_wrapper: element});
    };

    _set_canvas_wrapper_overflow_ref = (element) => {

        if(element === null) {return}

        element.addEventListener("wheel", this.handle_canvas_wrapper_overflow_wheel, {capture: true, passive: true});
        element.addEventListener("pointerdown", this._handle_canvas_wrapper_overflow_pointer_down, {capture: true, passive: true});
        element.addEventListener("pointermove", this._handle_canvas_wrapper_overflow_pointer_move, {capture: true, passive: true});
        element.addEventListener("pointerup", this._handle_canvas_wrapper_overflow_pointer_up, {capture: true, passive: true});
        element.addEventListener("pointercancel", this._handle_canvas_wrapper_overflow_pointer_up, {capture: true, passive: true});
        element.addEventListener("pointerout", this._handle_canvas_wrapper_overflow_pointer_up, {capture: true, passive: true});
        element.addEventListener("pointerleave", this._handle_canvas_wrapper_overflow_pointer_up, {capture: true, passive: true});

        this.setState({_canvas_wrapper_overflow: element});
    };

    _to_canvas_middle = (set_default_state = true, scale = null, callback_function = () => {}) => {

        const {_canvas_container, _canvas_wrapper, default_scale} = this.state;
        scale = scale !== null ? scale: set_default_state ? default_scale: this.state.scale;

        if(_canvas_container && _canvas_wrapper) {

            this.setState({scale}, () => {

                this._request_force_update(false, true,() => {

                    const rect = _canvas_wrapper.getBoundingClientRect();
                    const for_middle_x = (_canvas_container.clientWidth - rect.width) / 2;
                    const for_middle_y = (_canvas_container.clientHeight - rect.height) / 2;

                    this.setState({
                        scale_move_x: for_middle_x,
                        scale_move_y: for_middle_y,
                        _moves_speed_average_now: 8,
                        _hidden: false,
                        has_shown_canvas_once: false,
                    }, () => {

                        this._request_force_update(false, true, () => {

                            this._update_canvas();
                            this._notify_size_change();
                            callback_function();
                        });
                    });
                });
            });
        }else {

            setTimeout(() => {
                this._to_canvas_middle(set_default_state, scale);
            }, 50);
        }
    };

    componentWillUnmount() {

        const { _canvas_wrapper_overflow, _intervals } = this.state;

        try {

            window.removeEventListener("resize", this._updated_dimensions);
            if(window.w_canvas_pixels._is_mobile_or_tablet && this.state._device_motion === true){
                window.removeEventListener("devicemotion", this._handle_motion_changes);
            }
            _canvas_wrapper_overflow.removeEventListener("wheel", this.handle_canvas_wrapper_overflow_wheel);
            _canvas_wrapper_overflow.removeEventListener("pointerdown", this._handle_canvas_wrapper_overflow_pointer_down);
            _canvas_wrapper_overflow.removeEventListener("pointermove", this._handle_canvas_wrapper_overflow_pointer_move);
            _canvas_wrapper_overflow.removeEventListener("pointerup", this._handle_canvas_wrapper_overflow_pointer_up);
            _canvas_wrapper_overflow.removeEventListener("pointercancel", this._handle_canvas_wrapper_overflow_pointer_up);
            _canvas_wrapper_overflow.removeEventListener("pointerout", this._handle_canvas_wrapper_overflow_pointer_up);
            _canvas_wrapper_overflow.removeEventListener("pointerleave", this._handle_canvas_wrapper_overflow_pointer_up);
        }catch (e) {}

        _intervals.forEach((i) => {

            clearInterval(i);
        });

    }

    _get_canvas_pos_from_event = (event) => {

        let { pxl_width, pxl_height } = this.state;

        const rect = this._get_canvas_pos().canvas;

        const pos_x_in_canvas = event.pageX - rect.left;
        const pos_y_in_canvas = event.pageY - rect.top;

        let pos_x = Math.floor(pxl_width * (pos_x_in_canvas / rect.width));
        let pos_y = Math.floor(pxl_height * (pos_y_in_canvas / rect.height));

        pos_x = pos_x !== Math.max(Math.min(pos_x, pxl_width - 1), 0) ? -1: pos_x;
        pos_y = pos_y !== Math.max(Math.min(pos_y, pxl_height - 1), 0) ? -1: pos_y;

        if(pos_x === -1 || pos_y === -1) {

            pos_x = -1;
            pos_y = -1;
        }

        return [ pos_x, pos_y ];
    };

    _match_color = (color_a, color_b, threshold) => {

        threshold = typeof threshold === "undefined" ? null: threshold;

        if(threshold === 1) {

            return true;
        }else if(threshold === 0){

            return color_a === color_b;
        }else {

            const threshold_256 = Math.round(threshold * 255);

            color_a = this._format_color(color_a, true);
            color_b = this._format_color(color_b, true);

            const [r_a, g_a, b_a, a_a] = this._get_rgba_from_Uint32(color_a);
            const [r_b, g_b, b_b, a_b] = this._get_rgba_from_Uint32(color_b);

            const a_diff = Math.abs(a_a - a_b);
            const r_diff = Math.abs(r_a - r_b);
            const g_diff = Math.abs(g_a - g_b);
            const b_diff = Math.abs(b_a - b_b);

            const a_diff_ratio = Math.abs(1 - a_diff / 255);

            if(threshold !== null) {

                return Boolean(r_diff < threshold_256 && g_diff < threshold_256 && b_diff < threshold_256 && a_diff < threshold_256);
            }else {

                return parseFloat(parseInt(r_diff + g_diff + b_diff) / parseInt(255 * 3)) * a_diff_ratio;
            }
        }
    };

    exchange_pixel_color = (old_color, new_color) => {

        this._exchange_pixel_color(old_color, new_color);
    };

    _exchange_pixel_color = (old_color, new_color) => {

        const { _s_pxl_colors, _s_pxls, _layer_index } = this.state;


        let pxl_colors_copy = Array.from(_s_pxl_colors[_layer_index]);
        let pxls_copy = Array.from(_s_pxls[_layer_index]);

        const pxl_color_index = pxl_colors_copy.indexOf(this._format_color(old_color, true));

        const pxl_color = pxl_colors_copy[pxl_color_index];
        const pxl_color_new = this._blend_colors(pxl_color, new_color, 1, true, false, true);

        // Eventually add current color to color list
        if(!pxl_colors_copy.includes(pxl_color_new)){

            pxl_colors_copy.push(pxl_color_new);
        }

        const new_color_index = pxl_colors_copy.indexOf(pxl_color_new);

        pxls_copy = pxls_copy.map((pxl) => {

            return pxl === pxl_color_index ? new_color_index: pxl;
        });

        [pxls_copy, pxl_colors_copy] = this._remove_duplicate_pxl_colors(pxls_copy, pxl_colors_copy);

        let ns_pxl_colors = this.state._s_pxl_colors;
        ns_pxl_colors[_layer_index] = pxl_colors_copy;

        let ns_pxls = this.state._s_pxls;
        ns_pxls[_layer_index] = pxls_copy;

        this.setState({_s_pxls: ns_pxls, _s_pxl_colors: ns_pxl_colors, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });

    };

    _handle_canvas_mouse_down = (event, canvas_event_target) => {

        const { _previous_double_pointer_move_timestamp, _mouse_down, hide_canvas_content, tool, pxl_width, pxl_height, pxl_current_opacity, bucket_threshold, select_mode, _event_button } = this.state;
        const event_which = _event_button + 1;
        const pxl_current_color = this._format_color(this.state.pxl_current_color, true);

        let [ pos_x, pos_y ] = [ -1, -1 ];

        if(_previous_double_pointer_move_timestamp + 200 > Date.now()){

            return;

        }else if(this.state._pxls_hovered !== -1 && event === null) {

            const hover_pos_x = this.state._pxls_hovered % pxl_width;
            const hover_pos_y = (this.state._pxls_hovered - hover_pos_x) / pxl_width;
            [ pos_x, pos_y ] = [hover_pos_x, hover_pos_y];

        }else if(event) {

            [ pos_x, pos_y ] = this._get_canvas_pos_from_event(event);
        }

        if(pos_x === -1 || pos_y === -1) { return; }

        let { _shape_index_a, _select_shape_index_a, _shape_index_b, _select_shape_index_b } = this.state;
        let { _pxl_indexes_of_selection } = this.state;
        const pxl_index = (pos_y * pxl_width) + pos_x;
        const { _s_pxls, _s_pxl_colors, _layer_index, hue, _layers } = this.state;
        const pxl_color_index = _s_pxls[_layer_index][pxl_index];

        if (event_which === -1) {

            this.setState({_pxls_hovered: pxl_index}, () => {

                this._update_canvas();
            });
            return;
        }

        if (event_which === 1) {

            // Left mouse button was clicked
            this.setState({_mouse_down: true}, () => {

                if(_mouse_down !== true) {

                    if(this.state._moves_speed_average_now === -24) {

                        this._request_force_update(true, false);
                    }else {

                        this._request_force_update(true, true);
                    }
                }
            });
        }else if(event_which === 3) {

            _shape_index_a = -1;
            _select_shape_index_a = -1;
            _shape_index_b = -1;
            _select_shape_index_b = -1;
        }

        const { _imported_image_pxls, scale } = this.state;

        if(!hide_canvas_content) {

            const pxls_copy_immutable = Array.from(_s_pxls[_layer_index]);
            let pxls_copy = Array.from(_s_pxls[_layer_index]);
            let pxl_colors_copy = Array.from(_s_pxl_colors[_layer_index]);

            const pxl_color = pxl_colors_copy[pxl_color_index];
            const pxl_color_new = this._blend_colors(pxl_color, pxl_current_color, pxl_current_opacity, true, false, true);

            // Eventually add current color to color list
            if(!pxl_colors_copy.includes(pxl_color_new)){

                pxl_colors_copy.push(pxl_color_new);
            }

            const new_color_index = pxl_colors_copy.indexOf(pxl_color_new);

            if(_imported_image_pxls.length > 0 && event_which === 1){

                this.setState({_imported_image_move_from: [pos_x, pos_y]});

            }else if((event_which === 2) || (tool === "MOVE" && _imported_image_pxls.length <= 0 && (event_which === 1 || event_which === -1))){

                this.setState({_image_move_from: [event.x, event.y]});

            }else if(tool === "MINE" && event_which === 1){

                this.setState({_mine_index: pxl_index});

            }else if(tool === "PICKER" && event_which === 1) {

                const pixel_color_hex = this.get_pixel_color_from_pos(pos_x, pos_y);
                this._notify_current_color_change(pixel_color_hex);
                this._notify_relevant_action_event(event, pixel_color_hex, 1);
            }else if (tool === "EXCHANGE" && event_which === 1) {

                const pixel_color_hex = _s_pxl_colors[_layer_index][pxl_color_index];
                this._exchange_pixel_color(pixel_color_hex, pxl_current_color);
                this._notify_relevant_action_event(event, pxl_current_color, 1);

            }else if(tool === "LINE" || tool === "RECTANGLE" || tool === "ELLIPSE"){

                if(_shape_index_a === -1) {

                    if(event_which === 1) {

                        this.setState({_shape_index_a: pxl_index}, () => {

                            this._update_canvas();
                        });
                    }else {

                        this.setState({_shape_index_a}, () => {

                            this._update_canvas();
                        });
                    }
                }else {

                    const palette_and_list =
                        tool === "LINE" ?
                            this._get_pixels_palette_and_list_from_line(pxls_copy, _shape_index_a, pxl_index, pxl_colors_copy, pxl_current_color, pxl_current_opacity):
                            tool === "RECTANGLE" ?
                                this._get_pixels_palette_and_list_from_rectangle(pxls_copy, _shape_index_a, pxl_index, pxl_colors_copy, pxl_current_color, pxl_current_opacity):
                                tool === "ELLIPSE" ?
                                    this._get_pixels_palette_and_list_from_ellipse(pxls_copy, _shape_index_a, pxl_index, pxl_colors_copy, pxl_current_color, pxl_current_opacity):
                                    this._get_pixels_palette_and_list_from_ellipse(pxls_copy, _shape_index_a, pxl_index, pxl_colors_copy, pxl_current_color, pxl_current_opacity);


                    pxls_copy = palette_and_list[0];
                    pxl_colors_copy = palette_and_list[1];

                    let ns_pxl_colors = this.state._s_pxl_colors;
                    ns_pxl_colors[_layer_index] = pxl_colors_copy;

                    let ns_pxls = this.state._s_pxls;
                    ns_pxls[_layer_index] = pxls_copy;

                    this.setState({_s_pxls: ns_pxls, _s_pxl_colors: ns_pxl_colors, _shape_index_a: -1, _last_action_timestamp: Date.now()}, () => {

                        this._update_canvas();
                    });
                    this._notify_relevant_action_event(event, "#ffffffff", .6);
                }


            }else if(tool === "SELECT LINE" || tool === "SELECT RECTANGLE" || tool === "SELECT ELLIPSE"){

                if(_select_shape_index_a === -1) {

                    if(event_which === 1) {

                        this.setState({_select_shape_index_a: pxl_index}, () => {

                            this._update_canvas();
                        });
                    }else {

                        this.setState({_select_shape_index_a}, () => {

                            this._update_canvas();
                        });
                    }
                }else {

                    const pixel_indexes =
                        tool === "SELECT LINE" ?
                            this._get_pixels_palette_and_list_from_line(pxls_copy, _select_shape_index_a, pxl_index)[2]:
                            tool === "SELECT RECTANGLE" ?
                                this._get_pixels_palette_and_list_from_rectangle(pxls_copy, _select_shape_index_a, pxl_index)[2]:
                                tool === "SELECT ELLIPSE" ?
                                    this._get_pixels_palette_and_list_from_ellipse(pxls_copy, _select_shape_index_a, pxl_index)[2]:
                                    this._get_pixels_palette_and_list_from_ellipse(pxls_copy, _select_shape_index_a, pxl_index)[2];

                    if(select_mode === "REPLACE") {

                        _pxl_indexes_of_selection.clear();
                    }

                    pixel_indexes.forEach((pxl) => {

                        if(select_mode === "ADD" || select_mode === "REPLACE") {

                            _pxl_indexes_of_selection.add(pxl);
                        }else {

                            _pxl_indexes_of_selection.delete(pxl);
                        }
                    });

                    this.setState({_pxl_indexes_of_selection, _select_shape_index_a: -1, _last_action_timestamp: Date.now()}, () => {

                        this._update_canvas();
                        this._notify_is_something_selected();
                    });
                }


            }else if((tool === "SELECT PIXEL" || tool === "SELECT PATH") && event_which === 1) {


                if(select_mode === "REPLACE") {

                    _pxl_indexes_of_selection.clear();
                }

                if(select_mode === "ADD" || select_mode === "REPLACE") {

                    _pxl_indexes_of_selection.add(pxl_index);
                }else {

                    _pxl_indexes_of_selection.delete(pxl_index);
                }

                if(tool === "SELECT PIXEL") {

                    // Update pixels list and pixel colours
                    this.setState({ _pxl_indexes_of_selection, _paint_or_select_hover_actions_latest_index: pxl_index, _last_action_timestamp: Date.now()}, () => {

                        this._update_canvas();
                        this._notify_is_something_selected();
                    });
                }else if(tool === "SELECT PATH") {

                    // Update pixels list and pixel colours
                    this.setState({ _pxl_indexes_of_selection, _paint_or_select_hover_actions_latest_index: pxl_index, _last_action_timestamp: 1 / 0}, () => {

                        this._update_canvas();
                        this._notify_is_something_selected();
                    });
                }


            }else if((tool === "SET PENCIL MIRROR") && event_which === 1) {

                this.setState({ _pencil_mirror_index: pxl_index, _last_action_timestamp: Date.now()}, () => {

                    this._update_canvas();
                });

            }else if((tool === "PENCIL" || tool === "PENCIL PERFECT" || tool === "CONTOUR") && event_which === 1) {

                const { pencil_mirror_mode, _pencil_mirror_index } = this.state;

                const pencil_mirror_x = _pencil_mirror_index % pxl_width;
                const pencil_mirror_y = (_pencil_mirror_index - pencil_mirror_x) / pxl_width;

                let pixel_stack = new Set([[pos_x, pos_y]]);

                if(pencil_mirror_mode === "VERTICAL" || pencil_mirror_mode === "BOTH") {

                    const y = pos_y - (pos_y - pencil_mirror_y) * 2;
                    const x = pos_x;

                    if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                        pixel_stack.add([x, y]);
                        const index = y * pxl_width + x;

                        const v_pxl_color_index = _s_pxls[_layer_index][index];
                        const v_pxl_color = pxl_colors_copy[v_pxl_color_index];
                        const v_pxl_color_new = this._blend_colors(v_pxl_color, pxl_current_color, pxl_current_opacity, true, false, true);

                        // Eventually add current color to color list
                        if(!pxl_colors_copy.includes(v_pxl_color_new)){

                            pxl_colors_copy.push(v_pxl_color_new);
                        }

                        pxls_copy[index] = pxl_colors_copy.indexOf(v_pxl_color_new);
                    }
                }

                if(pencil_mirror_mode === "HORIZONTAL" || pencil_mirror_mode === "BOTH") {

                    pixel_stack.forEach((pixel_pos) => {

                        const y = pixel_pos[1];
                        const x = pixel_pos[0] - (pixel_pos[0] - pencil_mirror_x) * 2;

                        if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                            const index = y * pxl_width + x;

                            const v_pxl_color_index = _s_pxls[_layer_index][index];
                            const v_pxl_color = pxl_colors_copy[v_pxl_color_index];
                            const v_pxl_color_new = this._blend_colors(v_pxl_color, pxl_current_color, pxl_current_opacity, true, false, true);

                            // Eventually add current color to color list
                            if (!pxl_colors_copy.includes(v_pxl_color_new)) {

                                pxl_colors_copy.push(v_pxl_color_new);
                            }


                            pxls_copy[index] = pxl_colors_copy.indexOf(v_pxl_color_new);
                        }
                    });
                }

                // Pixel index Z is of the color index associated
                pxls_copy[pxl_index] = new_color_index;

                let ns_pxl_colors = this.state._s_pxl_colors;
                ns_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors_copy);

                let ns_pxls = this.state._s_pxls;
                ns_pxls[_layer_index] = pxls_copy;

                // Update pixels list and pixel colours
                this.setState({
                    _s_pxls: ns_pxls,
                    _s_pxl_colors: ns_pxl_colors,
                    _paint_or_select_hover_pxl_indexes: new Set([pxl_index]),
                    _paint_or_select_hover_actions_latest_index: pxl_index,
                    _paint_hover_old_pxls_snapshot: Array.from(this.state._s_pxls[_layer_index]),
                    _last_action_timestamp: Date.now()
                }, () => {

                    this._update_canvas();
                });

            }else if ((tool === "BUCKET" || tool === "HUE BUCKET" || tool === "SELECT COLOR THRESHOLD" || tool === "BORDER") && event_which === 1) {

                const { _old_pxls } = this.state;
                const old_pxls_copy = Array.from(_old_pxls);

                const pixel_start = [pos_x, pos_y];
                const index_color_start = old_pxls_copy[pxl_index];
                const pxl_color_start = pxl_colors_copy[index_color_start];

                let interpolated_colors_hue_bucket = [];

                const [c_s_r, c_s_g, c_s_b, c_s_a] = this._get_rgba_from_Uint32(pxl_color_start);
                const [c_s_h, c_s_s, c_s_l] = this._rgb_to_hsl(c_s_r, c_s_g, c_s_b);
                const hue_difference_with_color_start = c_s_h < hue ? hue - c_s_h: 360 - c_s_h + hue;

                let pixel_stack = [pixel_start];
                let colored_pxl_indexes = new Set();

                const match_color_start = (index) => {

                    if(bucket_threshold === 0) {

                        return index_color_start === old_pxls_copy[index];
                    }else {

                        if(!colored_pxl_indexes.has(index) && index >= 0 && index < pxl_width * pxl_height) {

                            const color_a = pxl_color_start || 0;
                            const color_b = pxl_colors_copy[old_pxls_copy[index]] || 0;

                            return this._match_color(color_a, color_b, bucket_threshold);
                        }else {

                            return false;
                        }
                    }
                }

                const color_pixel = (index, paint = true) => {

                    if((!colored_pxl_indexes.has(index) || paint) && index >= 0 && index < pxl_width * pxl_height) {

                        if(tool === "HUE BUCKET") {

                            if(paint) {

                                const hue_bucket_old_color = pxl_colors_copy[pxls_copy_immutable[index]];

                                if(typeof interpolated_colors_hue_bucket[hue_bucket_old_color] === "undefined") {

                                    let [r, g, b, a] = this._get_rgba_from_Uint32(hue_bucket_old_color);
                                    let [h, s, l] = this._rgb_to_hsl(r, g, b);

                                    h = (h + hue_difference_with_color_start) % 360;

                                    [r, g, b] = this._hsl_to_rgb(h, s, l);
                                    const hue_bucket_new_color = this._get_Uint32_color_from_rgba_values(r, g, b, a);

                                    // Eventually add current color to color list
                                    if(!pxl_colors_copy.includes(hue_bucket_new_color)){

                                        pxl_colors_copy.push(hue_bucket_new_color);
                                    }

                                    const hue_bucket_new_color_index = pxl_colors_copy.indexOf(hue_bucket_new_color);
                                    interpolated_colors_hue_bucket[hue_bucket_old_color] = hue_bucket_new_color_index;


                                    pxls_copy[index] = hue_bucket_new_color_index;

                                }else {

                                    pxls_copy[index] = interpolated_colors_hue_bucket[hue_bucket_old_color];
                                }
                            }

                            colored_pxl_indexes.add(index);

                        }else if(tool === "BUCKET" || tool === "BORDER"){

                            if(paint) {

                                const current_pxl_color_index = pxls_copy[index];
                                const current_pxl_color = pxl_colors_copy[current_pxl_color_index];
                                const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_current_color, pxl_current_opacity, false, false, true);

                                // Eventually add current color to color list
                                if(!pxl_colors_copy.includes(current_pxl_new_color)){

                                    pxl_colors_copy.push(current_pxl_new_color);
                                }

                                const current_pxl_new_color_index = pxl_colors_copy.indexOf(current_pxl_new_color);
                                pxls_copy[index] = current_pxl_new_color_index;
                            }

                            colored_pxl_indexes.add(index);

                        }else if(tool === "SELECT COLOR THRESHOLD"){

                            colored_pxl_indexes.add(index);
                        }
                    }
                };

                let reach_left = false;
                let reach_right = false;

                while(pixel_stack.length) {

                    // Get current pixel position
                    let [x, y] = pixel_stack.pop();

                    let current_pxl_index = (y * pxl_width) + x;

                    // Go up as long as the color matches and are inside the canvas
                    while (y >= 0 && match_color_start(current_pxl_index)) {

                        current_pxl_index -= pxl_width;
                        y--;
                    }

                    current_pxl_index += pxl_width;
                    y++;

                    reach_left = false;
                    reach_right = false;

                    // Go down as long as the color matches and in inside the canvas
                    while (y < pxl_height && match_color_start(current_pxl_index)) {

                        y++;
                        if(tool === "BORDER") {

                            color_pixel(current_pxl_index, false);
                        }else {

                            color_pixel(current_pxl_index, true);
                        }

                        if (x > 0) {

                            if (match_color_start(current_pxl_index - 1)) {

                                if (!reach_left) {

                                    // Add pixel to stack
                                    pixel_stack.push([x - 1, y - 1]);
                                    reach_left = true;
                                }

                            } else if (reach_left) {

                                reach_left = false;
                            }
                        }

                        if (x + 1 < pxl_width) {

                            if (match_color_start(current_pxl_index + 1)) {

                                if (!reach_right) {

                                    // Add pixel to stack
                                    pixel_stack.push([x + 1, y - 1]);
                                    reach_right = true;
                                }

                            } else if (reach_right) {

                                reach_right = false;
                            }
                        }

                        current_pxl_index += pxl_width;

                    }

                }

                if(tool === "BORDER") {

                    let pxls_of_the_border = this._get_border_from_selection(colored_pxl_indexes);

                    pxls_of_the_border.forEach((pxl_index) => {

                        color_pixel(pxl_index, true);
                    });

                    [pxls_copy, pxl_colors_copy] = this._remove_duplicate_pxl_colors(pxls_copy, pxl_colors_copy);

                    let ns_pxl_colors = this.state._s_pxl_colors;
                    ns_pxl_colors[_layer_index] = pxl_colors_copy;

                    let ns_pxls = this.state._s_pxls;
                    ns_pxls[_layer_index] = pxls_copy;

                    // Update pixels list and pixel colours
                    this.setState({_s_pxls: ns_pxls, _s_pxl_colors: ns_pxl_colors, _last_action_timestamp: Date.now()}, () => {

                        this._update_canvas();
                    });

                }else if(tool === "SELECT COLOR THRESHOLD") {

                    if(select_mode === "REPLACE") {

                        _pxl_indexes_of_selection.clear();
                    }

                    [...colored_pxl_indexes].forEach((pxl_index) => {

                        if(select_mode === "ADD" || select_mode === "REPLACE") {

                            _pxl_indexes_of_selection.add(pxl_index);
                        }else {

                            _pxl_indexes_of_selection.delete(pxl_index);
                        }
                    });

                    this.setState({_pxl_indexes_of_selection, _last_action_timestamp: Date.now()}, () => {

                        this._update_canvas();
                        this._notify_is_something_selected();
                    });

                }else if(tool === "BUCKET" || tool === "HUE BUCKET"){

                    [pxls_copy, pxl_colors_copy] = this._remove_duplicate_pxl_colors(pxls_copy, pxl_colors_copy);

                    let ns_pxl_colors = this.state._s_pxl_colors;
                    ns_pxl_colors[_layer_index] = pxl_colors_copy;

                    let ns_pxls = this.state._s_pxls;
                    ns_pxls[_layer_index] = pxls_copy;

                    // Update pixels list and pixel colours
                    this.setState({_s_pxls: ns_pxls, _s_pxl_colors: ns_pxl_colors, _last_action_timestamp: Date.now()}, () => {

                        this._update_canvas();
                    });
                    this._notify_relevant_action_event(event, pxl_current_color, 1);
                }

            }else if ((tool === "SELECT COLOR") && event_which === 1) {

                const { _s_pxls } = this.state;
                const _pxls_copy = Array.from(_s_pxls[_layer_index]);
                const index_color_start = _pxls_copy[pxl_index];

                if(select_mode === "REPLACE") {

                    _pxl_indexes_of_selection.clear();
                }

                Array.from(_pxls_copy).forEach((pxl, pxl_index) => {

                    if(pxl === index_color_start) {

                        if(select_mode === "ADD" || select_mode === "REPLACE") {

                            _pxl_indexes_of_selection.add(pxl_index);
                        }else {

                            _pxl_indexes_of_selection.delete(pxl_index);
                        }
                    }
                });

                this.setState({_pxl_indexes_of_selection, _last_action_timestamp: Date.now()}, () => {

                    this._update_canvas();
                    this._notify_is_something_selected();
                });

            }
        }
    };

    set_selection_by_colors = (color, threshold) => {

        const { _s_pxl_colors, _s_pxls, _layer_index } = this.state;
        let { _pxl_indexes_of_selection } = this.state;
        const _pxls_copy = Array.from(_s_pxls[_layer_index]);


        _pxl_indexes_of_selection.clear();

        _s_pxl_colors[_layer_index].forEach((c, c_i) => {

            if(this._match_color(color, c, threshold)) {

                _pxls_copy.forEach((pxl, pxl_i) => {

                    if(pxl === c_i) {

                        _pxl_indexes_of_selection.add(pxl_i);
                    }
                });
            }
        });

        this.setState({_pxl_indexes_of_selection, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
            this._notify_is_something_selected();
        });

    }

    _get_pixels_palette_and_list_from_line = (pxls, index_a, index_b, pxl_colors = [], pxl_color_new = null, pxl_current_opacity = null) => {

        pxls = Array.from(pxls);
        pxl_colors = Array.from(pxl_colors);
        let pxl_indexes = [];

        const { pxl_width } = this.state;

        let x_behind = index_a % pxl_width;
        let y_behind = (index_a - x_behind) / pxl_width;

        const last_x_after = index_b % pxl_width;
        const last_y_after = (index_b - last_x_after) / pxl_width;

        // PAINT HACK: compute the pixel between the previous and latest paint by hover pixel (Bresenham’s Line Algorithm)
        let dx = Math.abs(last_x_after - x_behind);
        let dy = Math.abs(last_y_after - y_behind);
        let sx = (x_behind < last_x_after) ? 1 : -1;
        let sy = (y_behind < last_y_after) ? 1 : -1;
        let err = dx - dy;

        while(true){

            const current_pxl_index = y_behind * pxl_width + x_behind;

            if(pxl_colors !== [] && pxl_color_new !== null && pxl_current_opacity !== null) { // We can compute pxls and pxl_colors

                const current_pxl_color_index = pxls[current_pxl_index];
                const current_pxl_color = pxl_colors[current_pxl_color_index];
                const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_color_new, pxl_current_opacity, false, false, true);

                // Eventually add current color to color list
                if(!pxl_colors.includes(current_pxl_new_color)){

                    pxl_colors.push(current_pxl_new_color);
                }

                pxls[current_pxl_index] = pxl_colors.indexOf(current_pxl_new_color);
            }

            pxl_indexes.push(current_pxl_index);

            if(x_behind === last_x_after && y_behind === last_y_after) { break; }

            const e2 = 2 * err;

            if (e2 > - dy) {

                err -= dy;
                x_behind  += sx;
            }
            if (e2 < dx) {

                err += dx;
                y_behind  += sy;
            }
        }

        return [ pxls, Uint32Array.from(pxl_colors), pxl_indexes ];
    }

    _get_pixels_palette_and_list_from_rectangle = (pxls, index_a, index_b, pxl_colors = [], pxl_color_new = null, pxl_current_opacity = null) => {

        pxls = Array.from(pxls);
        pxl_colors = Array.from(pxl_colors);
        let pxl_indexes = [];

        const { pxl_width } = this.state;

        const x_behind = index_a % pxl_width;
        const y_behind = (index_a - x_behind) / pxl_width;

        const x_after = index_b % pxl_width;
        const y_after = (index_b - x_after) / pxl_width;

        const rectangle_width = Math.abs(x_behind - x_after) + 1;
        const rectangle_height = Math.abs(y_behind - y_after) + 1;
        const pixel_number_in_rectangle = rectangle_width * rectangle_height;

        const rectangle_top_left_x = Math.max(x_behind, x_after) - (rectangle_width - 1);
        const rectangle_top_left_y = Math.max(y_behind, y_after) - (rectangle_height - 1);

        for(let i = 0; i < pixel_number_in_rectangle; i++){

            const inside_rectangle_x = i % rectangle_width;
            const inside_rectangle_y = (i - inside_rectangle_x) / rectangle_width;

            const current_pxl_index = (rectangle_top_left_y + inside_rectangle_y) * pxl_width + (rectangle_top_left_x + inside_rectangle_x);

            if(pxl_colors !== [] && pxl_color_new !== null && pxl_current_opacity !== null) { // We can compute pxls and pxl_colors

                const current_pxl_color_index = pxls[current_pxl_index];
                const current_pxl_color = pxl_colors[current_pxl_color_index];
                const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_color_new, pxl_current_opacity, false, false, true);

                // Eventually add current color to color list
                if(!pxl_colors.includes(current_pxl_new_color)){

                    pxl_colors.push(current_pxl_new_color);
                }

                pxls[current_pxl_index] = pxl_colors.indexOf(current_pxl_new_color);
            }

            pxl_indexes.push(current_pxl_index);

        }

        return [ pxls, Uint32Array.from(pxl_colors), pxl_indexes ];
    }

    _get_pixels_palette_and_list_from_path = (pxls, path_indexes, pxl_colors = [], pxl_color_new = null, pxl_current_opacity = null) => {

        const { pxl_width, pxl_height } = this.state;
        pxls = Array.from(pxls);
        pxl_colors = Array.from(pxl_colors);
        path_indexes = new Set(path_indexes);

        let pxl_indexes = new Set();

        let [ctx] = this._get_new_ctx_from_canvas(pxl_width, pxl_height);
        ctx.lineWidth = 0;
        ctx.beginPath();

        path_indexes.forEach((pxl_index, index) => {

            const x = pxl_index % pxl_width;
            const y = (pxl_index - x) / pxl_width

            if(index === 0) {

                ctx.moveTo(x, y);
            }else {

                ctx.lineTo(x, y);
            }

        });

        ctx.strokeStyle = "#ffffffff";
        ctx.fillStyle = "#ffffffff";
        ctx.stroke();
        ctx.fill();

        const canvas_image_data = ctx.getImageData(0, 0, pxl_width, pxl_height);
        const new_pxl_data = this._get_pixels_palette_and_list_from_image_data(canvas_image_data, true, 0);

        let full_new_pxl_colors = new_pxl_data.new_pxl_colors;
        let full_new_pxls = new_pxl_data.new_pxls;

        for(let i = 0; i < full_new_pxls.length; i++){

            const inside_shape_x = i % pxl_width;
            const inside_shape_y = (i - inside_shape_x) / pxl_width;

            const current_pxl_index = inside_shape_y * pxl_width + inside_shape_x;

            if(full_new_pxls[current_pxl_index] === full_new_pxl_colors.indexOf(this._get_uint32_from_hex("#ffffffff")) || path_indexes.has(i)) {

                pxl_indexes.add(current_pxl_index);
            }
        }

        for(let i = 0; i < full_new_pxls.length; i++){

            if(!path_indexes.has(i)) {

                let up, right, bottom, left;

                up = i - pxl_width; up = up < 0 ? -1: up;
                right = i + 1; right = right % pxl_width === 0 ? -1: right;
                bottom = i + pxl_width; bottom = bottom > (pxl_width * pxl_height) ? -1: bottom;
                left = i - 1; left = left % pxl_width === pxl_width - 1 ? -1: left;

                if(pxl_indexes.has(up) && pxl_indexes.has(right) && pxl_indexes.has(bottom) && pxl_indexes.has(left)) {

                    pxl_indexes.add(i);
                }
            }
        }

        //pxl_indexes = this._to_selection_size(-1, pxl_indexes);

        if( pxl_colors !== [] && pxl_color_new !== null && pxl_current_opacity !== null) {

            pxl_indexes.forEach((current_pxl_index) => {

                const current_pxl_color_index = pxls[current_pxl_index];
                const current_pxl_color = pxl_colors[current_pxl_color_index];
                const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_color_new, pxl_current_opacity, false, false, true);

                // Eventually add current color to color list
                if(!pxl_colors.includes(current_pxl_new_color)){

                    pxl_colors.push(current_pxl_new_color);
                }

                pxls[current_pxl_index] = pxl_colors.indexOf(current_pxl_new_color);

            });
        }

        return Array.of( pxls, Uint32Array.from(pxl_colors), Array.from(pxl_indexes) );
    }

    _get_pixels_palette_and_list_from_ellipse = (pxls, index_a, index_b, pxl_colors = [], pxl_color_new = null, pxl_current_opacity = null) => {

        const { pxl_width, pxl_height, px_per_px } = this.state;
        pxls = Array.from(pxls);
        pxl_colors = Array.from(pxl_colors);

        let pxl_indexes = [];

        let x_behind = index_a % pxl_width;
        let y_behind = (index_a - x_behind) / pxl_width;
        let x_after = (index_b % pxl_width);
        let y_after = (( index_b - x_after) / pxl_width);

        let ellipse_width = Math.abs(x_behind - x_after) + 1;
        let ellipse_height = Math.abs(y_behind - y_after) + 1;

        const ellipse_top_left_x = Math.max(x_behind, x_after) - (ellipse_width - 1);
        const ellipse_top_left_y = Math.max(y_behind, y_after) - (ellipse_height - 1);

        let ellipse_rayon_x = (ellipse_width) / 2.0;
        let ellipse_rayon_y = (ellipse_height) / 2.0;

        const ellipse_middle_x = ellipse_rayon_x + ellipse_top_left_x;
        const ellipse_middle_y = ellipse_rayon_y + ellipse_top_left_y;

        let [ellipse_context] = this._get_new_ctx_from_canvas(pxl_width, pxl_height);

        ellipse_context.save();
        ellipse_context.translate(ellipse_middle_x, ellipse_middle_y);
        ellipse_context.rotate(0);
        ellipse_context.scale(ellipse_rayon_x, ellipse_rayon_y);
        ellipse_context.arc(0, 0, 1, 0, 2 * Math.PI);
        ellipse_context.restore();

        ellipse_context.fillStyle = "#ffffffff";
        ellipse_context.fill();

        const canvas_image_data = ellipse_context.getImageData(0, 0, pxl_width, pxl_height);
        const new_pxl_data = this._get_pixels_palette_and_list_from_image_data(canvas_image_data, true, 0);

        let full_new_pxl_colors = new_pxl_data.new_pxl_colors;
        let full_new_pxls = new_pxl_data.new_pxls;

        for(let i = 0; i < full_new_pxls.length; i++){

            const inside_ellipse_x = i % ellipse_width;
            const inside_ellipse_y = (i - inside_ellipse_x) / ellipse_width;

            const current_pxl_index = (ellipse_top_left_y + inside_ellipse_y) * pxl_width + (ellipse_top_left_x + inside_ellipse_x);

            if(full_new_pxls[current_pxl_index] === full_new_pxl_colors.indexOf(this._get_uint32_from_hex("#ffffffff"))) {

                const current_pxl_color_index = pxls[current_pxl_index];

                if(pxl_colors !== [] && pxl_color_new !== null && pxl_current_opacity !== null) { // We can compute pxls and pxl_colors

                    const current_pxl_color = pxl_colors[current_pxl_color_index];
                    const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_color_new, pxl_current_opacity, false, false, true);

                    // Eventually add current color to color list
                    if(!pxl_colors.includes(current_pxl_new_color)){

                        pxl_colors.push(current_pxl_new_color);
                    }

                    const current_pxl_new_color_index = pxl_colors.indexOf(current_pxl_new_color);
                    pxls[current_pxl_index] = current_pxl_new_color_index;
                }
                pxl_indexes.push(current_pxl_index);
            }

        }

        return [ Array.from(pxls), Uint32Array.from(pxl_colors), pxl_indexes ];
    }

    _should_remove_not_perfect_second_latest_pixel_from_array = (array) => {

        const { pxl_width } = this.state;
        const _paint_or_select_hover_pxl_indexes = [...array];

        if(_paint_or_select_hover_pxl_indexes.length >= 3) {

            const first_latest_pixel = _paint_or_select_hover_pxl_indexes[_paint_or_select_hover_pxl_indexes.length - 1];
            const first_latest_pixel_x = first_latest_pixel % pxl_width;
            const first_latest_pixel_y = (first_latest_pixel - first_latest_pixel_x) / pxl_width;

            const second_latest_pixel = _paint_or_select_hover_pxl_indexes[_paint_or_select_hover_pxl_indexes.length - 2];
            const second_latest_pixel_x = second_latest_pixel % pxl_width;
            const second_latest_pixel_y = (second_latest_pixel - second_latest_pixel_x) / pxl_width;

            const third_latest_pixel = _paint_or_select_hover_pxl_indexes[_paint_or_select_hover_pxl_indexes.length - 3];
            const third_latest_pixel_x = third_latest_pixel % pxl_width;
            const third_latest_pixel_y = (third_latest_pixel - third_latest_pixel_x) / pxl_width;

            const first_third_absolute_difference_x = Math.abs(first_latest_pixel_x - third_latest_pixel_x);
            const first_third_absolute_difference_y = Math.abs(first_latest_pixel_y - third_latest_pixel_y);

            if(
                first_third_absolute_difference_x === 1 &&
                first_third_absolute_difference_y === 1) {

                if(
                    (first_latest_pixel_x === second_latest_pixel_x && second_latest_pixel_y === third_latest_pixel_y) ||
                    (first_latest_pixel_y === second_latest_pixel_y && second_latest_pixel_x === third_latest_pixel_x) ||
                    (third_latest_pixel_x ===  second_latest_pixel_x && second_latest_pixel_y === first_latest_pixel_y) ||
                    (third_latest_pixel_y ===  second_latest_pixel_y && second_latest_pixel_x === first_latest_pixel_x)
                ) {

                    return true;
                }
            }
        }

        return false;

    };

    get_pixel_color_from_pos = (x, y) => {

        const { pxl_height, pxl_width, _s_pxls, _s_pxl_colors, _layers } = this.state;

        const pxl_index = y * pxl_width + x;

        if(x > pxl_width || y > pxl_height || x < 0 || y < 0) {

            return "#00000000";
        }

        let layer_pixel_colors = [];
        let start_i = -1;
        start_i++;

        for (let i = _s_pxl_colors.length - 1; i >= 0; i--) {

            const layer_pixel_color = _s_pxl_colors[i][_s_pxls[i][pxl_index]];
            layer_pixel_colors[i] = layer_pixel_color;
            const [r, g, b, a] = this._get_rgba_from_Uint32(layer_pixel_color);

            if(a === 255) {

                start_i = i;
                break;
            }

        }

        let pixel_color_uint32 = 0;

        for (let i = start_i; i < _s_pxl_colors.length ; i++) {

            if(!_layers[i].hidden) {

                const layer_pixel_color = layer_pixel_colors[i];

                pixel_color_uint32 = this._blend_colors(pixel_color_uint32, layer_pixel_color, parseFloat(_layers[i].opacity), false, false, true);
            }
        }

        return this._get_hex_from_Uint32(pixel_color_uint32);
    };

    handle_canvas_wrapper_overflow_wheel = (event) => {

        let { scale, scale_move_x, scale_move_y, _canvas_container } = this.state;


        let delta = Math.max(Math.min(0.125, Math.abs(event.deltaY * -0.01)), 0.25);
        delta = event.deltaY * -0.01 > 0 ? delta: -delta;

        const scale_change_ratio_on_one = Math.pow(scale < 1 ? 1 / scale: scale, 1.6);
        let new_scale = scale + delta * scale * ( 0.9 / scale_change_ratio_on_one );

        if(!(new_scale > 6) && !(new_scale < 1/6)) {

            let ratio = 1 - scale / new_scale;
            let ratio2 = new_scale / scale;
            let pos = this._get_canvas_pos();
            let pos_x_in_canvas_container, pos_y_in_canvas_container;

            if(event.pageX !== null && event.pageY !== null) {

                pos_x_in_canvas_container = (event.pageX - pos.canvas_container.left);
                pos_y_in_canvas_container = (event.pageY - pos.canvas_container.top);
            }else {

                pos_x_in_canvas_container = pos.canvas_container.width / 2;
                pos_y_in_canvas_container = pos.canvas_container.height / 2;
            }

            let new_scale_move_x = (scale_move_x - (pos_x_in_canvas_container * ratio)) * ratio2 + event.movementX;
            let new_scale_move_y = (scale_move_y - (pos_y_in_canvas_container * ratio)) * ratio2 + event.movementY;

            const for_middle_x = (pos.canvas_container.width - pos.canvas_wrapper.width) / 2;
            const for_middle_y = (pos.canvas_container.height - pos.canvas_wrapper.height) / 2;

            const scale_move_x_max = 3/4 * pos.canvas_wrapper.width + for_middle_x;
            const scale_move_y_max = 3/4 * pos.canvas_wrapper.height + for_middle_y;

            new_scale_move_y -= for_middle_y;
            new_scale_move_x -= for_middle_x;

            let new_scale_move_x_rigged = (Math.min(Math.abs(new_scale_move_x), scale_move_x_max)) * (new_scale_move_x < 0 ? -1: 1) + for_middle_x;
            let new_scale_move_y_rigged = (Math.min(Math.abs(new_scale_move_y), scale_move_y_max)) * (new_scale_move_y < 0 ? -1: 1) + for_middle_y;

            if(event.ctrlKey === true && event.deltaY !== 0) {

                this._to_canvas_middle(false, new_scale);
            }else {

               this._set_moves(new_scale_move_x_rigged, new_scale_move_y_rigged, new_scale);
            }
        }
    };

    _handle_canvas_pointer_down = (event, canvas_event_target) => {

        let { _pointer_events, _previous_single_pointer_down_timestamp, _previous_double_pointer_down_timestamp, _previous_single_pointer_down_x_y } = this.state;
        const one_pointer = Boolean(_pointer_events.length === 1);
        const two_pointer = Boolean(_pointer_events.length === 2);
        const [x, y] = _previous_single_pointer_down_x_y;

        this.setState({
            _previous_single_pointer_down_timestamp: one_pointer ? Date.now(): 0,
            _previous_double_pointer_down_timestamp: two_pointer ? Date.now(): 0,
            _previous_single_pointer_down_x_y: one_pointer ? [event.pageX, event.pageY]: _previous_single_pointer_down_x_y
        }, () => {

            if(_previous_single_pointer_down_timestamp + 400 > Date.now() && _pointer_events.length === 1 && Math.abs(x - event.pageX) < 20 && Math.abs(y - event.pageY) < 20) {

                setTimeout(() => {

                    const [pos_x, pos_y] = this._get_canvas_pos_from_event(event);
                    const {_s_pxl_colors, _layer_index, _s_pxls, pxl_width} = this.state;
                    const pxl_index = (pos_y * pxl_width) + pos_x;
                    const pxl_color_index = pxl_index >= 0 ? _s_pxls[_layer_index][pxl_index]: null;

                    if(this.props.onRightClick) {

                        this.props.onRightClick(event, {
                            pos_x: pos_x,
                            pos_y: pos_y,
                            pxl_color: pxl_color_index === null ? null: this._format_color(_s_pxl_colors[_layer_index][pxl_color_index]),
                        });
                    }

                }, 250);

            }else if(one_pointer) {

                this._handle_canvas_mouse_down(event, null);
            }else if(two_pointer) {

                const time_between_way_from_one_to_multiple_pointers = _previous_single_pointer_down_timestamp - _previous_double_pointer_down_timestamp;
                if(time_between_way_from_one_to_multiple_pointers < 0 && time_between_way_from_one_to_multiple_pointers > -200){

                    this.nothing_happened_undo(Math.abs(time_between_way_from_one_to_multiple_pointers));
                }
            }

        });
    };

    _handle_canvas_pointer_move = (event, canvas_event_target, _pointer_events) => {

        const { _latest_pointers_distance, _latest_pointers_client_x_center, _latest_pointers_client_y_center, _previous_double_pointer_down_timestamp, _previous_double_pointer_move_timestamp } = this.state;

        if (_pointer_events.length === 2) {

            const x_diff = _pointer_events[0].clientX - _pointer_events[1].clientX;
            const y_diff = _pointer_events[0].clientY - _pointer_events[1].clientY;
            const anchor_diff = Math.sqrt((x_diff * x_diff) + (y_diff * y_diff));
            const page_x_center = (_pointer_events[0].pageX + _pointer_events[1].pageX) / 2;
            const page_y_center = (_pointer_events[0].pageY + _pointer_events[1].pageY) / 2;
            const client_x_center = (_pointer_events[0].clientX + _pointer_events[1].clientX) / 2;
            const client_y_center = (_pointer_events[0].clientY + _pointer_events[1].clientY) / 2;
            const move_x = _latest_pointers_client_x_center > 0 ? _latest_pointers_client_x_center - client_x_center: 0;
            const move_y = _latest_pointers_client_y_center > 0 ? _latest_pointers_client_y_center - client_y_center: 0;

            const of = _latest_pointers_distance > 0 ? anchor_diff / _latest_pointers_distance : 1;

            if(_previous_double_pointer_down_timestamp + 50 < Date.now()) {
                this.setState({
                    _previous_double_pointer_move_timestamp: Date.now(),
                    _latest_pointers_distance: anchor_diff,
                    _latest_pointers_client_x_center: client_x_center,
                    _latest_pointers_client_y_center: client_y_center,
                }, () => {

                    this.zoom_of(of, page_x_center, page_y_center, -move_x, -move_y);
                });
            }

            this._handle_position_change(event, client_x_center, client_y_center);

        }else if(_pointer_events.length === 1) {

            /*this._handle_canvas_move(event, canvas_event_target);*/ if(_previous_double_pointer_move_timestamp + 200 < Date.now()) {this._handle_canvas_mouse_move(event, canvas_event_target);}
            this._handle_position_change(event, _pointer_events[0].clientX, _pointer_events[0].clientY);
        }
    };

    _handle_canvas_wrapper_mouse_move = (event) => {

        if(this.state._mouse_inside === true) {

            this.setState({_mouse_inside: false});
        }

        const { _pxls_hovered, tool } = this.state;

        if((!_pxls_hovered || !_pxls_hovered <= 0) && event.which === 1 && (tool === "MOVE" || tool === "PICKER")) {

            this.zoom_of(1, null, null, event.movementX, event.movementY);
        }
    };

    _handle_position_change = (event, x, y) => {

        const { perspective, _device_motion } = this.state;

        if(perspective > 0 && (!window.w_canvas_pixels._is_mobile_or_tablet || !_device_motion)) {

            const pos = this._get_canvas_pos();
            const pos_x_in_canvas_container = ((event.pageX || x) - pos.canvas_container.left);
            const pos_y_in_canvas_container = ((event.pageY || y) - pos.canvas_container.top);


            const x = perspective * ((pos_x_in_canvas_container - pos.canvas_container.width / 2) / (pos.canvas_container.width / 2));
            const y = -perspective * ((pos_y_in_canvas_container - pos.canvas_container.height / 2) / (pos.canvas_container.height / 2));

            this.set_perspective_coordinate([x > 5 ? x : x * 2, y < 0 ? y : 2 * y]);
        }
    }

    _handle_canvas_wrapper_overflow_pointer_move = (event) => {

        if(this.state._hidden) {

            this._handle_canvas_wrapper_overflow_pointer_up(event);
            return;
        }

        const canvas_event_target = this._get_canvas_event_target(event);

        if(this.state._canvas_event_target !== canvas_event_target) {

            this.setState({_canvas_event_target: canvas_event_target});
        }

        let { _pointer_events } = this.state;

        if(event.pointerType === "mouse") {

            this._handle_position_change(event, event.pageX, event.pageY);
            this._handle_canvas_mouse_move(event, canvas_event_target);

        }else {

            for (let i = 0; i < _pointer_events.length; i++) {
                if (event.pointerId === _pointer_events[i].pointerId) {
                    _pointer_events[i] = event;
                    break;
                }
            }

            this.setState({_pointer_events: [..._pointer_events]});
            this._handle_canvas_pointer_move(event, canvas_event_target, [..._pointer_events]);
        }
    };

    _handle_canvas_wrapper_overflow_pointer_down = (event) => {




        const canvas_event_target = this._get_canvas_event_target(event);
        let { _pointer_events, _mouse_down } = this.state;
        _pointer_events.push(event);

        if(event.pointerType === "mouse") {

            const { scale_move_x, scale_move_y } = this.state;

            this.setState({
                _event_button: event.button,
                _mouse_down: true,
                _previous_initial_scale_move: [scale_move_x, scale_move_y],
                _pointer_events,
            }, ()  => {

                if(_mouse_down !== true) {

                    this.setState({_previous_single_pointer_down_x_y: [event.pageX, event.pageY]});
                }
                if(canvas_event_target === "CANVAS"){

                    this._handle_canvas_mouse_down(event, canvas_event_target);
                }

                if(event.button === 2) {

                    const [pos_x, pos_y] = this._get_canvas_pos_from_event(event);
                    const {_s_pxl_colors, _layer_index, _s_pxls, pxl_width} = this.state;
                    const pxl_index = (pos_y * pxl_width) + pos_x;
                    const pxl_color_index = pxl_index >= 0 ? _s_pxls[_layer_index][pxl_index] : null;

                    this._set_cursor_fuck_you();

                    if (this.props.onRightClick) {

                        this.props.onRightClick(event, {
                            pos_x: pos_x,
                            pos_y: pos_y,
                            pxl_color: pxl_color_index === null ? null : this._format_color(_s_pxl_colors[_layer_index][pxl_color_index]),
                        });
                    }

                    return false;
                }

            });

        }else {

            const { scale_move_x, scale_move_y } = this.state;

            this.setState({
                _event_button: event.button,
                _mouse_down: true,
                _previous_initial_scale_move: [scale_move_x, scale_move_y],
                _pointer_events
            }, ()  => {

                this._handle_canvas_pointer_down(event, canvas_event_target);
            });
        }
    };

    _set_cursor_fuck_you = () => {

        if(this.props.setCursorFuckYou) {

            this.props.setCursorFuckYou(true);
            setTimeout(() => {

                this.props.setCursorFuckYou(false);

            }, 2500);
        }
    }

    _get_canvas_event_target = (event) => {

        const pos = this._get_canvas_pos();

        if(event.pageX >= pos.canvas.left && event.pageY >= pos.canvas.top && event.pageX <= pos.canvas.right && event.pageY <= pos.canvas.bottom) { // Canvas

            return "CANVAS";
        }else if(event.pageX >= pos.canvas_wrapper.left && event.pageY >= pos.canvas_wrapper.top && event.pageX <= pos.canvas_wrapper.right && event.pageY <= pos.canvas_wrapper.bottom) { // Canvas wrapper

            return "CANVAS_WRAPPER";
        }else {

            return "CANVAS_WRAPPER_OVERFLOW"
        }

    }

    _handle_canvas_wrapper_overflow_pointer_up = (event) => {




        const canvas_event_target = this._get_canvas_event_target(event);

        let { _previous_initial_scale_move, _pointer_events, _latest_pointers_distance, _latest_pointers_client_x_center, _latest_pointers_client_y_center } = this.state;

        for (let i = 0; i < _pointer_events.length; i++) {
            if (_pointer_events[i].pointerId === event.pointerId) {
                _pointer_events.splice(i, 1);
                break;
            }
        }

        let pointer_down_again = false;

        if (_pointer_events.length < 2) {

            _latest_pointers_distance = 0;
            _latest_pointers_client_x_center = 0;
            _latest_pointers_client_y_center = 0;

            if(_pointer_events.length === 1) {

                _pointer_events = [];
                pointer_down_again = true;
            }
        }



        this.setState({
            _mouse_down: _pointer_events.length > 0,
            _pointer_events: [..._pointer_events],
            _latest_pointers_distance,
            _latest_pointers_client_x_center,
            _latest_pointers_client_y_center,
            _previous_initial_scale_move,
        }, () => {

            if(pointer_down_again){

                this._handle_canvas_wrapper_overflow_pointer_down(event);

            }else if(event.pointerType === "mouse") {

                if(canvas_event_target === "CANVAS") {

                    this._handle_canvas_mouse_up(event, canvas_event_target);
                }else if(canvas_event_target === "CANVAS_WRAPPER_OVERFLOW" && event.which === 1){

                    this._notify_backdrop_click(event);
                    this._handle_canvas_mouse_leave(event, canvas_event_target);
                }else {

                    this._handle_canvas_mouse_leave(event, canvas_event_target);
                }
            }

        });
    };

    _get_canvas_pos = (event) => {

        const {
            _canvas_container_left,
            _canvas_container_top,
            _canvas_container_width,
            _canvas_container_height,
            pxl_width, pxl_height,
            _screen_zoom_ratio, scale,
            canvas_wrapper_padding,
            canvas_wrapper_border_width,
            scale_move_x, scale_move_y
        } = this.state;

        let canvas_wrapper_border_box_extra_size = Math.round(canvas_wrapper_padding / window.devicePixelRatio * scale + canvas_wrapper_border_width) * 2
        let canvas_wrapper_width = Math.round(pxl_width * _screen_zoom_ratio * scale) + canvas_wrapper_border_box_extra_size;
        let canvas_wrapper_height = Math.round(pxl_height * _screen_zoom_ratio * scale) + canvas_wrapper_border_box_extra_size;
        let canvas_wrapper_offset_left = scale_move_x;
        let canvas_wrapper_offset_top = scale_move_y;
        let canvas_wrapper_left = _canvas_container_left + canvas_wrapper_offset_left;
        let canvas_wrapper_top = _canvas_container_top + canvas_wrapper_offset_top;
        let canvas_wrapper_right = canvas_wrapper_left + canvas_wrapper_width;
        let canvas_wrapper_bottom = canvas_wrapper_top + canvas_wrapper_height;

        let canvas_offset_left = canvas_wrapper_border_box_extra_size / 2;
        let canvas_offset_top = canvas_wrapper_border_box_extra_size / 2;
        let canvas_left = canvas_wrapper_left + canvas_offset_left;
        let canvas_top = canvas_wrapper_top + canvas_offset_top;
        let canvas_right = canvas_wrapper_right - canvas_wrapper_border_box_extra_size / 2;
        let canvas_bottom = canvas_wrapper_bottom - canvas_wrapper_border_box_extra_size / 2;

        return {
            canvas: {
                offset_left: canvas_offset_left,
                offset_top: canvas_offset_top,
                left: canvas_left,
                top: canvas_top,
                right: canvas_right,
                bottom: canvas_bottom,
                width: canvas_right - canvas_left,
                height: canvas_bottom - canvas_top,
            },
            canvas_wrapper: {
                offset_left: canvas_wrapper_offset_left,
                offset_top: canvas_wrapper_offset_top,
                left: canvas_wrapper_left,
                top: canvas_wrapper_top,
                right: canvas_wrapper_right,
                bottom: canvas_wrapper_bottom,
                width: canvas_wrapper_right - canvas_wrapper_left,
                height: canvas_wrapper_bottom - canvas_wrapper_top,
            },
            canvas_container: {
                offset_left: _canvas_container_left,
                offset_top: _canvas_container_top,
                left: _canvas_container_left,
                top: _canvas_container_top,
                right: _canvas_container_left + _canvas_container_width,
                bottom: _canvas_container_top + _canvas_container_height,
                width: _canvas_container_width,
                height: _canvas_container_height,
            },
        };
    }

    _handle_canvas_move = (event, canvas_event_target) => {

        const { _previous_single_pointer_down_x_y, _previous_initial_scale_move } = this.state;

        const [from_x, from_y] = _previous_single_pointer_down_x_y;
        if(from_x === -1 || from_y === -1) { return }
        const [init_x, init_y] = _previous_initial_scale_move;

        const pos = this._get_canvas_pos();

        const for_middle_x = (pos.canvas_container.width - pos.canvas_wrapper.width) / 2;
        const for_middle_y = (pos.canvas_container.height - pos.canvas_wrapper.height) / 2;

        const scale_move_x_max = 3/4 * pos.canvas_wrapper.width + for_middle_x;
        const scale_move_y_max = 3/4 * pos.canvas_wrapper.height + for_middle_y;

        let diff_scale_move_x = event.pageX - from_x;
        let diff_scale_move_y = event.pageY - from_y;

        let new_scale_move_x = init_x + diff_scale_move_x;
        let new_scale_move_y = init_y + diff_scale_move_y;

        new_scale_move_y -= for_middle_y;
        new_scale_move_x -= for_middle_x;

        let new_scale_move_x_rigged = (Math.min(Math.abs(new_scale_move_x), scale_move_x_max)) * (new_scale_move_x < 0 ? -1: 1) + for_middle_x;
        let new_scale_move_y_rigged = (Math.min(Math.abs(new_scale_move_y), scale_move_y_max)) * (new_scale_move_y < 0 ? -1: 1) + for_middle_y;

        if(new_scale_move_x_rigged < (new_scale_move_x + for_middle_x)) {

            this._notify_reach_border("RIGHT", canvas_event_target);

        }else if(new_scale_move_x_rigged > (new_scale_move_x + for_middle_x)) {

            this._notify_reach_border("LEFT", canvas_event_target);
        }

        if(new_scale_move_y_rigged < (new_scale_move_y + for_middle_y)) {

            this._notify_reach_border("BOTTOM", canvas_event_target);

        }else if(new_scale_move_y_rigged > (new_scale_move_y + for_middle_y)) {

            this._notify_reach_border("TOP", canvas_event_target);
        }

        this._set_moves(new_scale_move_x_rigged, new_scale_move_y_rigged);

        if(Math.abs(diff_scale_move_x) > 256) {

            if(diff_scale_move_x < 0) {

                if(new_scale_move_x - 256 < scale_move_x_max) {

                    this._notify_cross_middle("LEFT", canvas_event_target, pos.canvas_container.width, pos.canvas_container.height);
                }
            }else {

                if(new_scale_move_x + 256 > scale_move_x_max) {

                    this._notify_cross_middle("RIGHT", canvas_event_target, pos.canvas_container.width, pos.canvas_container.height);
                }
            }
        }

        if(Math.abs(diff_scale_move_y) > 256) {

            if(diff_scale_move_y < 0) {

                if(new_scale_move_y - 384 < scale_move_y_max) {

                    this._notify_cross_middle("TOP", canvas_event_target, pos.canvas_container.width, pos.canvas_container.height);
                }
            }else {

                if(new_scale_move_y + 384 > scale_move_y_max) {

                    this._notify_cross_middle("BOTTOM", canvas_event_target, pos.canvas_container.width, pos.canvas_container.height);
                }
            }
        }
    };

    _notify_reach_border = (direction, canvas_event_target) => {

        if(this.props.onBorderReach) {

            this.props.onBorderReach(direction, canvas_event_target);
        }
    };

    _notify_cross_middle = (direction, canvas_event_target, width, height) => {

        if(this.props.onCrossMiddle) {

            this.props.onCrossMiddle(direction, canvas_event_target);
        }
    };

    _handle_canvas_mouse_move = (event, canvas_event_target) => {

        const { tool, pxl_width, pxl_height, _pxls_hovered, hide_canvas_content, _mouse_down, _event_button, no_actions } = this.state;
        let { _pxl_indexes_of_selection, _imported_image_pxls } = this.state;

        const event_which = _event_button+1;

        if((event_which === 2 && _mouse_down) || (tool === "MOVE" && _imported_image_pxls.length <= 0 && event_which === 1 && _mouse_down) || (_mouse_down && canvas_event_target === "CANVAS_WRAPPER_OVERFLOW")) {

            this._handle_canvas_move(event, canvas_event_target);
            return;
        }

        const [ pos_x, pos_y ] = this._get_canvas_pos_from_event(event);

        if(pos_x === -1 || pos_y === -1) {
            this._notify_position_change(event, {x: pos_x, y: pos_y});
            return;
        }

        if(no_actions) {
            this._notify_position_change(event, {x: pos_x, y: pos_y});
            return;
        }

        const pxl_index = (pos_y * pxl_width) + pos_x;

        if(pxl_index !== _pxls_hovered && !hide_canvas_content) {

            if(_imported_image_pxls.length > 0){

                let { _imported_image_scale_delta_x, _imported_image_scale_delta_y, _imported_image_start_x, _imported_image_start_y, _imported_image_width, _imported_image_height } = this.state;
                const _imported_image_final_width = _imported_image_width + _imported_image_scale_delta_x;
                const _imported_image_final_height = _imported_image_height + _imported_image_scale_delta_y;

                const [from_x, from_y] = this.state._imported_image_move_from;
                const old_pxl_index = (from_y * pxl_width) + from_x;

                const image_imported_resizer_index = (_imported_image_start_x + _imported_image_final_width) + (_imported_image_start_y + _imported_image_final_height) * pxl_width;
                const _is_on_resize_element = pxl_index === image_imported_resizer_index || old_pxl_index === image_imported_resizer_index;

                if(event_which === 1 && _mouse_down) {

                    const x_difference = pos_x - from_x;
                    const y_difference = pos_y - from_y;
                    let _imported_image_move_from = [pos_x, pos_y];

                    if(!_is_on_resize_element) {

                        _imported_image_start_x += x_difference;
                        _imported_image_start_x = _imported_image_start_x < -_imported_image_final_width ? -_imported_image_final_width: _imported_image_start_x;
                        _imported_image_start_x = _imported_image_start_x >= pxl_width ? pxl_width: _imported_image_start_x;

                        _imported_image_start_y += y_difference;
                        _imported_image_start_y = _imported_image_start_y < -_imported_image_final_height ? -_imported_image_final_height: _imported_image_start_y;
                        _imported_image_start_y = _imported_image_start_y >= pxl_height ? pxl_height: _imported_image_start_y;
                    }else {

                        let _new_imported_image_scale_delta_x = _imported_image_scale_delta_x + x_difference;
                        let _new_imported_image_scale_delta_y = _imported_image_scale_delta_y + y_difference;

                        _new_imported_image_scale_delta_x = Math.max(_new_imported_image_scale_delta_x, -(_imported_image_width - 1));
                        _new_imported_image_scale_delta_y = Math.max(_new_imported_image_scale_delta_y, -(_imported_image_height - 1));

                        _imported_image_move_from = [
                            from_x + (_new_imported_image_scale_delta_x - _imported_image_scale_delta_x),
                            from_y + (_new_imported_image_scale_delta_y - _imported_image_scale_delta_y),
                        ];

                        _imported_image_scale_delta_x = _new_imported_image_scale_delta_x;
                        _imported_image_scale_delta_y = _new_imported_image_scale_delta_y;
                    }

                    this.setState({
                        _pxls_hovered: pxl_index,
                        _is_on_resize_element,
                        _mouse_inside: true,
                        _imported_image_start_x,
                        _imported_image_start_y,
                        _imported_image_scale_delta_x,
                        _imported_image_scale_delta_y,
                        _imported_image_move_from,
                    }, () => {

                        this._update_canvas();
                        this._notify_position_change(event, {x:pos_x, y: pos_y});
                    });
                }else {

                    this.setState({
                        _pxls_hovered: pxl_index,
                        _is_on_resize_element,
                        _mouse_inside: true
                    }, () => {

                        this._notify_position_change(event, {x:pos_x, y: pos_y});
                    });
                }

            }else if((tool === "PENCIL" || tool === "PENCIL PERFECT" || tool === "CONTOUR") && event_which === 1 && _mouse_down){

                let { _last_action_timestamp, _paint_or_select_hover_pxl_indexes, _paint_or_select_hover_actions_latest_index, _s_pxls, _s_pxl_colors, _layer_index, pxl_current_opacity } = this.state;
                const { _paint_hover_old_pxls_snapshot } = this.state;
                const _paint_or_select_hover_pxl_indexes_copy = [..._paint_or_select_hover_pxl_indexes];

                // PAINT HACK: compute the pixel between the previous and latest paint by hover pixel (Bresenham’s Line Algorithm)
                if(_paint_or_select_hover_actions_latest_index === -1) {

                    _paint_or_select_hover_actions_latest_index = pxl_index;
                }

                const pxl_current_color = this._format_color(this.state.pxl_current_color, true);
                let new_drawn_pxl_indexes;
                [_s_pxls[_layer_index], _s_pxl_colors[_layer_index], new_drawn_pxl_indexes]= this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], _paint_or_select_hover_actions_latest_index, pxl_index, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity);

                const { pencil_mirror_mode, _pencil_mirror_index } = this.state;

                const pencil_mirror_x = _pencil_mirror_index % pxl_width;
                const pencil_mirror_y = (_pencil_mirror_index - pencil_mirror_x) / pxl_width;

                if(tool === "CONTOUR") {

                    _last_action_timestamp = 1 / 0;

                    _paint_or_select_hover_pxl_indexes = new Set([..._paint_or_select_hover_pxl_indexes, ...new_drawn_pxl_indexes]);
                    _paint_or_select_hover_pxl_indexes = new Set(_paint_or_select_hover_pxl_indexes);


                }else if(tool === "PENCIL"){

                    _last_action_timestamp = Date.now();

                    _paint_or_select_hover_pxl_indexes = new Set([..._paint_or_select_hover_pxl_indexes, ...new_drawn_pxl_indexes]);
                    _paint_or_select_hover_pxl_indexes = new Set(_paint_or_select_hover_pxl_indexes);

                }else if(tool === "PENCIL PERFECT") {

                    _last_action_timestamp = Date.now();

                    _paint_or_select_hover_pxl_indexes = new Set([..._paint_or_select_hover_pxl_indexes, ...new_drawn_pxl_indexes]);

                    if(this._should_remove_not_perfect_second_latest_pixel_from_array(_paint_or_select_hover_pxl_indexes)) {

                        const second_latest_pixel_drawn = _paint_or_select_hover_pxl_indexes[_paint_or_select_hover_pxl_indexes.length - 2];
                        _paint_or_select_hover_pxl_indexes.splice(- 2, 1);

                        let pixel_index_stack = new Set(Array.of(second_latest_pixel_drawn));

                        Array.from(pixel_index_stack).forEach((pixel_stacked) => {

                            const [s_pos_x, s_pos_y] = pixel_stacked;

                            const y = s_pos_y - (s_pos_y - pencil_mirror_y) * 2;
                            const x = s_pos_x;

                            if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                                pixel_index_stack.add(y * pxl_width + x);

                            }
                        });

                        Array.from(pixel_index_stack).forEach((pixel_stacked) => {

                            const [s_pos_x, s_pos_y] = pixel_stacked;

                            const y = s_pos_y;
                            const x = s_pos_x - (s_pos_x - pencil_mirror_x) * 2;

                            if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                                pixel_index_stack.add(y * pxl_width + x);
                            }
                        });

                        pixel_index_stack.forEach((second_latest_pixel_drawn) => {

                            _s_pxls[_layer_index][second_latest_pixel_drawn] = _paint_hover_old_pxls_snapshot[second_latest_pixel_drawn];
                        });
                    }

                    _paint_or_select_hover_pxl_indexes = new Set(_paint_or_select_hover_pxl_indexes);
                }

                let pixel_stack = new Set(Array.of(_paint_or_select_hover_pxl_indexes)
                    .filter((index) => {

                        return !_paint_or_select_hover_pxl_indexes_copy.includes(index);
                    })
                    .map((index) => {

                        const x = index % pxl_width;
                        const y = (index - x) / pxl_width;
                        return [x, y];
                    }));

                if(pencil_mirror_mode === "VERTICAL" || pencil_mirror_mode === "BOTH") {

                    Array.from(pixel_stack).forEach((pixel_stacked) => {

                        const [s_pos_x, s_pos_y] = pixel_stacked;

                        const y = s_pos_y - (s_pos_y - pencil_mirror_y) * 2;
                        const x = s_pos_x;

                        if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                            pixel_stack.add([x, y]);
                        }
                    });
                }

                if(pencil_mirror_mode === "HORIZONTAL" || pencil_mirror_mode === "BOTH") {

                    Array.from(pixel_stack).forEach((pixel_pos) => {

                        const y = pixel_pos[1];
                        const x = pixel_pos[0] - (pixel_pos[0] - pencil_mirror_x) * 2;

                        if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                            pixel_stack.add([x, y]);
                        }
                    });
                }

                Array.from(pixel_stack).forEach((pixel_pos) => {

                    const y = pixel_pos[1];
                    const x = pixel_pos[0];

                    if(x >= 0 && x < pxl_width && y >= 0 && y <= pxl_height) {

                        const index = y * pxl_width + x;

                        const v_pxl_color_index = _s_pxls[_layer_index][index];
                        const v_pxl_color = _s_pxl_colors[_layer_index][v_pxl_color_index];
                        const v_pxl_color_new = this._blend_colors(v_pxl_color, pxl_current_color, pxl_current_opacity, true, false, true);

                        // Eventually add current color to color list
                        if (!_s_pxl_colors[_layer_index].includes(v_pxl_color_new)) {

                            let pxl_colors = Array.from(_s_pxl_colors[_layer_index]);
                            pxl_colors.push(v_pxl_color_new);

                            _s_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);
                        }


                        _s_pxls[_layer_index][index] = _s_pxl_colors[_layer_index].indexOf(v_pxl_color_new);
                    }
                });

                // Update pixels list and pixel colours
                this.setState({
                    _pxls_hovered: pxl_index,
                    _mouse_inside: true,
                    _paint_or_select_hover_pxl_indexes,
                    _s_pxls,
                    _s_pxl_colors,
                    _paint_or_select_hover_actions_latest_index: pxl_index,
                    _last_action_timestamp
                }, () =>{

                    this._update_canvas();
                    this._notify_position_change(event, {x:pos_x, y: pos_y});
                });

            }else if((tool === "SELECT PIXEL" || tool === "SELECT PIXEL PERFECT" || tool === "SELECT PATH") && event_which === 1 && _mouse_down) {

                let { _last_action_timestamp, _s_pxls, _paint_or_select_hover_actions_latest_index, _paint_or_select_hover_pxl_indexes, select_mode, _layer_index } = this.state;
                const { _select_hover_old_pxls_snapshot } = this.state;

                // PAINT HACK: compute the pixel between the previous and latest paint by hover pixel (Bresenham’s Line Algorithm)
                if(_paint_or_select_hover_actions_latest_index === -1) {

                    _paint_or_select_hover_actions_latest_index = pxl_index;
                }

                const palette_and_list = this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], _paint_or_select_hover_actions_latest_index, pxl_index);
                const new_drawn_pxl_indexes = palette_and_list[2];

                if(tool === "SELECT PATH") {

                    _last_action_timestamp = 1 / 0;

                    _paint_or_select_hover_pxl_indexes = new Set([..._paint_or_select_hover_pxl_indexes, ...new_drawn_pxl_indexes]);

                    /*if(this._should_remove_not_perfect_second_latest_pixel_from_array(_paint_or_select_hover_pxl_indexes)) {

                        const pixel_index_to_remove = _paint_or_select_hover_pxl_indexes[_paint_or_select_hover_pxl_indexes.length - 2];

                        if(!_select_hover_old_pxls_snapshot.includes(pixel_index_to_remove) && (select_mode === "ADD" || select_mode === "REPLACE")) {

                            _pxl_indexes_of_selection.delete(pixel_index_to_remove);
                        }

                        _paint_or_select_hover_pxl_indexes.splice(- 2, 1);
                    }*/

                    _paint_or_select_hover_pxl_indexes = new Set(_paint_or_select_hover_pxl_indexes);

                }else if(tool === "SELECT PIXEL"){

                    _last_action_timestamp = Date.now();

                    _paint_or_select_hover_pxl_indexes = new Set([..._paint_or_select_hover_pxl_indexes, ...new_drawn_pxl_indexes]);

                }else if(tool === "SELECT PIXEL PERFECT") {

                    _last_action_timestamp = Date.now();

                    _paint_or_select_hover_pxl_indexes = new Set([..._paint_or_select_hover_pxl_indexes, ...new_drawn_pxl_indexes]);

                    if(this._should_remove_not_perfect_second_latest_pixel_from_array(_paint_or_select_hover_pxl_indexes)) {

                        const pixel_index_to_remove = _paint_or_select_hover_pxl_indexes[_paint_or_select_hover_pxl_indexes.length - 2];

                        if(!_select_hover_old_pxls_snapshot.includes(pixel_index_to_remove) && (select_mode === "ADD" || select_mode === "REPLACE")) {

                            _pxl_indexes_of_selection.delete(pixel_index_to_remove);
                        }

                        _paint_or_select_hover_pxl_indexes.splice(- 2, 1);
                    }

                    _paint_or_select_hover_pxl_indexes = new Set(_paint_or_select_hover_pxl_indexes);

                }

                if(select_mode === "REPLACE") {

                    _pxl_indexes_of_selection.clear();
                }

                _paint_or_select_hover_pxl_indexes.forEach((new_drawn_index) => {

                    if(select_mode === "ADD" || select_mode === "REPLACE") {

                        _pxl_indexes_of_selection.add(new_drawn_index);
                    }else {

                        _pxl_indexes_of_selection.delete(new_drawn_index);
                    }

                });

                this.setState({
                    _pxls_hovered: pxl_index,
                    _mouse_inside: true,
                    _pxl_indexes_of_selection,
                    _paint_or_select_hover_pxl_indexes,
                    _paint_or_select_hover_actions_latest_index: pxl_index,
                    _last_action_timestamp}, () => {

                    this._update_canvas();
                    this._notify_is_something_selected();
                    this._notify_position_change(event, {x:pos_x, y: pos_y});
                });

            }else {

                const { _s_pxls, _layer_index } = this.state;

                this.setState({
                    _pxls_hovered: pxl_index,
                    _mouse_inside: true,
                    _paint_or_select_hover_actions_latest_index: -1,
                    _paint_hover_old_pxls_snapshot: Array.from(_s_pxls[_layer_index]),
                    _select_hover_old_pxls_snapshot: Uint32Array.from(_pxl_indexes_of_selection),
                    _paint_or_select_hover_pxl_indexes: new Set(),
                }, () => {

                    this._update_canvas();
                    this._notify_position_change(event, {x:pos_x, y: pos_y});
                });

            }
        }else if(_pxls_hovered !== pxl_index) {

            this.setState({
                _pxls_hovered: pxl_index,
                _mouse_inside: true
            }, () => {

                this._update_canvas();
                this._notify_position_change(event, {x:pos_x, y: pos_y});
            });

        }
    };

    _handle_canvas_mouse_leave = () => {

        this.setState({_mouse_inside: false, _pxls_hovered: -1}, () => {

            if(this.state._moves_speed_average_now === -24) {

                this._request_force_update(true, false);
            }else {

                this._request_force_update(true, true);
            }
        });

        this._notify_position_change(null, {x:-1, y: -1});
    }

    _handle_canvas_mouse_up = (event) => {

        const { scale_move_x, scale_move_y, _mouse_down } = this.state;

        this.setState({
            _event_button: -1,
            _mouse_down: false,
        }, () => {

            if(this.state._moves_speed_average_now === -24) {

                this._request_force_update(true, false);
            }else {

                this._request_force_update(true, true);
            }
        });

        let { _paint_or_select_hover_pxl_indexes, tool, _imported_image_pxls } = this.state;

        if(_imported_image_pxls.length > 0){

            this.setState({_imported_image_move_from: [-1, -1]});

        }else if(_paint_or_select_hover_pxl_indexes.size > 0 && tool === "CONTOUR") {

            let { _s_pxls, _s_pxl_colors, _layer_index, pxl_current_opacity, _paint_hover_old_pxls_snapshot } = this.state;
            let pxl_current_color = this._format_color(this.state.pxl_current_color, true);

            const first_drawn_pixel = [..._paint_or_select_hover_pxl_indexes][0];
            const last_drawn_pixel = [..._paint_or_select_hover_pxl_indexes][_paint_or_select_hover_pxl_indexes.size-1];

            const palette_and_list = this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], first_drawn_pixel, last_drawn_pixel, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity);
            const closing_path_line = palette_and_list[2];

            _paint_or_select_hover_pxl_indexes = [..._paint_or_select_hover_pxl_indexes, ...closing_path_line];

            [_s_pxls[_layer_index], _s_pxl_colors[_layer_index]] = this._get_pixels_palette_and_list_from_path(_paint_hover_old_pxls_snapshot, _paint_or_select_hover_pxl_indexes, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity);

            this.setState({
                _s_pxls,
                _s_pxl_colors,
                _paint_or_select_hover_pxl_indexes: new Set(),
                _paint_hover_old_pxls_snapshot: [],
                _last_action_timestamp: Date.now()
            }, () => {

                this._update_canvas();
            });

        }else if(_paint_or_select_hover_pxl_indexes.size > 0 && tool === "SELECT PATH") {

            let { _s_pxls, _pxl_indexes_of_selection, select_mode, _layer_index } = this.state;

            const first_drawn_pixel = [..._paint_or_select_hover_pxl_indexes][0];
            const last_drawn_pixel = [..._paint_or_select_hover_pxl_indexes][_paint_or_select_hover_pxl_indexes.size-1];

            const palette_and_list = this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], first_drawn_pixel, last_drawn_pixel);
            const closing_path_line = palette_and_list[2];

            _paint_or_select_hover_pxl_indexes = [..._paint_or_select_hover_pxl_indexes, ...closing_path_line];

            const palette_and_list_from_path = this._get_pixels_palette_and_list_from_path(_s_pxls[_layer_index], _paint_or_select_hover_pxl_indexes);


            if(select_mode === "REPLACE") {

                _pxl_indexes_of_selection.clear();
            }

            palette_and_list_from_path[2].forEach((pxl) => {

                if(select_mode === "ADD" || select_mode === "REPLACE") {

                    _pxl_indexes_of_selection.add(pxl);
                }else {

                    _pxl_indexes_of_selection.delete(pxl);
                }

            });

            this.setState({
                _pxl_indexes_of_selection,
                _paint_or_select_hover_pxl_indexes: new Set(),
                _last_action_timestamp: Date.now()
            }, () => {

                this._update_canvas();
                this._notify_is_something_selected();
            });


        }
    };

    _update_canvas = (force_update = false, do_not_cancel_animation = false, tried_rendering_at = Date.now()) => {

        // Potentially cancel the latest animation frame (Clear old) and then request a new one that will maybe be rendered
        const { _loading_base64_img, dont_show_canvas_until_img_set, dont_show_canvas, but_show_canvas_once, has_shown_canvas_once, _last_paint_timestamp, _hidden } = this.state;
        if(_last_paint_timestamp > tried_rendering_at || (_loading_base64_img.length === 0 && dont_show_canvas_until_img_set) || (dont_show_canvas && !(but_show_canvas_once && !has_shown_canvas_once)) || _hidden){return;}
        if(_last_paint_timestamp + 1000 / 60 > tried_rendering_at) { setTimeout(() => {this._update_canvas(force_update, do_not_cancel_animation, tried_rendering_at)}, 1000 / 90); return; }

        const { _layers } = this.state;
        let { _s_pxl_colors, _s_pxls } = this.state;

        if(!Boolean(_layers.length === _s_pxl_colors.length && _s_pxl_colors.length === _s_pxls.length)) {

            this._notify_layers_and_compute_thumbnails_change(() => {
                this._update_canvas(force_update, do_not_cancel_animation);
            });
            return;
        }

        _layers.forEach((l) => {
            if(!Boolean(l.hash)) {

                this._notify_layers_and_compute_thumbnails_change(() => {
                    this._update_canvas(force_update, do_not_cancel_animation);
                });
                return;
            }
        });

        // Importing state variables
        const { offscreenCanvas, context2d } = this.state._canvas;
        const {
            select_mode,
            pencil_mirror_mode,
            _pencil_mirror_index,
            _previous_pencil_mirror_axes_indexes,
            _previous_pencil_mirror_axes_hover_indexes,
            hide_canvas_content,
            _was_canvas_content_hidden,
            px_per_px,
            _old_pxls,
            _old_pxl_width,
            _old_pxl_height,
            pxl_width,
            pxl_height,
            _old_layers,
            _old_pxl_colors,
            _old_pxls_hovered,
            _pxls_hovered,
            _mouse_inside,
            tool,
            _is_there_new_dimension,
            _shape_index_a,
            _select_shape_index_a,
            pxl_current_color,
            pxl_current_opacity,
            _pxl_indexes_of_selection,
            _pxl_indexes_of_selection_drawn,
            _paint_or_select_hover_pxl_indexes,
            _previous_mine_player_index,
            _mine_player_index,
            _mine_index,
            _pxls_explosion,
            _pxl_colors_explosion,
            _explosion_started_timestamp,
            _explosion_index,
            _explosion_width,
            _explosion_height,
            _explosion_time,
            _selection_pair_highlight,
            _old_selection_pair_highlight,
            _pxl_indexes_of_old_shape
        } = this.state;


        let {
            _layer_index,
            _imported_image_start_x,
            _imported_image_start_y,
            _imported_image_scale_delta_x,
            _imported_image_scale_delta_y,
            _imported_image_pxls,
            _imported_image_width,
            _imported_image_height,
            _imported_image_pxl_colors,
            _previous_imported_image_pxls_positioned_keyset,
            _previous_image_imported_resizer_index,
            _previous_explosion_pxls_positioned_keyset
        } = this.state;

        [_imported_image_pxls, _imported_image_pxl_colors, _imported_image_width, _imported_image_height] = this._get_imported_image_scaled(_imported_image_pxls, _imported_image_pxl_colors, _imported_image_width, _imported_image_height, _imported_image_scale_delta_x, _imported_image_scale_delta_y);

        let imported_image_pxls_positioned = [];
        const has_an_image_imported = _imported_image_pxls.length > 0;
        const image_imported_resizer_index = (_imported_image_start_x + _imported_image_width) + (_imported_image_start_y + _imported_image_height) * pxl_width;

        if(has_an_image_imported) {

            _imported_image_pxls.forEach((pxl, index) => {

                const pos_x = index % _imported_image_width;
                const pos_y = (index - pos_x) / _imported_image_width;

                const current_pos_x_positioned = pos_x + _imported_image_start_x;
                const current_pos_y_positioned = pos_y + _imported_image_start_y;

                const imported_image_pxl_positioned_index = current_pos_y_positioned * pxl_width + current_pos_x_positioned;

                if(current_pos_x_positioned >= 0 && current_pos_x_positioned < pxl_width && current_pos_y_positioned >= 0 && current_pos_y_positioned < pxl_height) {

                    imported_image_pxls_positioned[imported_image_pxl_positioned_index] = pxl;
                }

            });
        }

        let explosion_pxls_positioned = [];
        const has_mine_explosion = _explosion_started_timestamp > Date.now() - _explosion_time;
        const mine_explosion_frame = has_mine_explosion ?
            Math.max(Math.floor(_pxls_explosion.length - Math.floor(_explosion_time / (Date.now() - _explosion_started_timestamp))), 0):
            0;

        if(has_mine_explosion) {

            const explosion_x = _explosion_index % pxl_width;
            const explosion_y = (_explosion_index - explosion_x) / pxl_width;

            const _explosion_start_x = Math.floor(explosion_x - _explosion_width / 2);
            const _explosion_start_y = Math.floor(explosion_y - _explosion_height / 2);

            _pxls_explosion[mine_explosion_frame].forEach((pxl, index) => {

                const pos_x = index % _explosion_width;
                const pos_y = (index - pos_x) / _explosion_width;

                const current_pos_x_positioned = pos_x + _explosion_start_x;
                const current_pos_y_positioned = pos_y + _explosion_start_y;

                const explosion_pxl_positioned_index = current_pos_y_positioned * pxl_width + current_pos_x_positioned;

                if(current_pos_x_positioned >= 0 && current_pos_x_positioned < pxl_width && current_pos_y_positioned >= 0 && current_pos_y_positioned < pxl_height) {

                    explosion_pxls_positioned[explosion_pxl_positioned_index] = pxl;
                }


            });
        }

        let pencil_mirror_axes_hover_indexes = new Set();
        let pencil_mirror_axes_indexes = new Set();

        const pencil_mirror_x = _pencil_mirror_index % pxl_width;
        const pencil_mirror_y = (_pencil_mirror_index - pencil_mirror_x) / pxl_width;

        const pencil_mirror_hover_x = _pxls_hovered % pxl_width;
        const pencil_mirror_hover_y = (_pxls_hovered - pencil_mirror_hover_x) / pxl_width;


        if((pencil_mirror_mode === "HORIZONTAL" || pencil_mirror_mode === "BOTH") && tool.includes("PENCIL")) {

            for(let i = 0; i < pxl_height; i++) {

                if(_pencil_mirror_index !== -1) {

                    pencil_mirror_axes_indexes.add(i * pxl_width + pencil_mirror_x);
                }
                if(tool === "SET PENCIL MIRROR" && _pxls_hovered !== -1) {

                    pencil_mirror_axes_hover_indexes.add(i * pxl_width + pencil_mirror_hover_x);
                }
            }

        }
        if((pencil_mirror_mode === "VERTICAL" || pencil_mirror_mode === "BOTH") && tool.includes("PENCIL")) {

            for(let i = 0; i < pxl_width; i++) {

                if(_pencil_mirror_index !== -1) {

                    pencil_mirror_axes_indexes.add(i + pencil_mirror_y * pxl_width);
                }
                if(tool === "SET PENCIL MIRROR" && _pxls_hovered !== -1) {

                    pencil_mirror_axes_hover_indexes.add(i + pencil_mirror_hover_y * pxl_width);
                }
            }

        }

        let pixel_updated = 0;
        const is_there_new_dimension = Boolean(_old_pxl_width !== pxl_width || _old_pxl_height !== pxl_height || _is_there_new_dimension);
        const has_new_pixel_hovered = Boolean(_old_pxls_hovered !== _pxls_hovered);
        const has_new_mine_player_index = Boolean(_previous_mine_player_index !== _mine_player_index);

        // Only operate on canvas context if existing
        if (offscreenCanvas.context2d) {

            let pxl_indexes_of_current_shape = new Set();

            if((tool === "LINE" || tool === "RECTANGLE" || tool === "ELLIPSE" || tool === "TRIANGLE") && _shape_index_a !== -1) {

                const palette_and_list_of_current_shape =
                    tool === "LINE" ?
                        this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], _shape_index_a, _pxls_hovered, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity):
                        tool === "RECTANGLE" ?
                            this._get_pixels_palette_and_list_from_rectangle(_s_pxls[_layer_index], _shape_index_a, _pxls_hovered, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity):
                            tool === "ELLIPSE" ?
                                this._get_pixels_palette_and_list_from_ellipse(_s_pxls[_layer_index], _shape_index_a, _pxls_hovered, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity):
                                this._get_pixels_palette_and_list_from_ellipse(_s_pxls[_layer_index], _shape_index_a, _pxls_hovered, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity);

                pxl_indexes_of_current_shape = new Set(palette_and_list_of_current_shape[2]);

            }else if ((tool === "SELECT LINE" || tool === "SELECT RECTANGLE" || tool === "SELECT ELLIPSE") && _select_shape_index_a !== -1) {

                const palette_and_list_of_current_selection_shape =
                    tool === "SELECT LINE" ?
                        this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], _select_shape_index_a, _pxls_hovered):
                        tool === "SELECT RECTANGLE" ?
                            this._get_pixels_palette_and_list_from_rectangle(_s_pxls[_layer_index], _select_shape_index_a, _pxls_hovered):
                            tool === "SELECT ELLIPSE" ?
                                this._get_pixels_palette_and_list_from_ellipse(_s_pxls[_layer_index], _select_shape_index_a, _pxls_hovered):
                                this._get_pixels_palette_and_list_from_ellipse(_s_pxls[_layer_index], _select_shape_index_a, _pxls_hovered);

                pxl_indexes_of_current_shape = new Set(palette_and_list_of_current_selection_shape[2]);
            }else if((tool === "SELECT PATH" || tool === "CONTOUR") && _paint_or_select_hover_pxl_indexes.size > 0) {

                const first_drawn_pixel = [..._paint_or_select_hover_pxl_indexes][0];
                const last_drawn_pixel = [..._paint_or_select_hover_pxl_indexes][_paint_or_select_hover_pxl_indexes.size-1];

                const palette_and_list = this._get_pixels_palette_and_list_from_line(_s_pxls[_layer_index], first_drawn_pixel, last_drawn_pixel, _s_pxl_colors[_layer_index], pxl_current_color, pxl_current_opacity);
                const closing_path_line = palette_and_list[2];

                if(select_mode === "REMOVE" && tool === "SELECT PATH") {

                    closing_path_line.forEach((pxl_index) => {

                        _pxl_indexes_of_selection.delete(pxl_index);


                    });
                }else {

                    closing_path_line.forEach((pxl_index) => {

                        if(tool === "SELECT PATH") {

                            _pxl_indexes_of_selection.add(pxl_index);
                        }else {

                            pxl_indexes_of_current_shape.add(pxl_index);
                        }
                    });
                }
            }

            const has_canvas_been_hidden = Boolean(_was_canvas_content_hidden && !hide_canvas_content);
            const has_layers_visibility_or_opacity_changed = Boolean(_layers.map((l) => {return l.id.toString() + String(l.hidden ? "hidden": "visible") + l.opacity.toString()}).join("-") !== _old_layers.map((l) => {return l.id.toString() + String(l.hidden ? "hidden": "visible") + l.opacity.toString()}).join("-"));

            const imported_image_pxls_positioned_keyset = new Set(Object.keys(imported_image_pxls_positioned).map(s => parseInt(s)));
            const explosion_pxls_positioned_keyset = new Set(Object.keys(explosion_pxls_positioned).map(s => parseInt(s)));

            // This is a list of color index that we explore
            const _s_pxls_layer_index = _s_pxls[_layer_index];
            const length = _s_pxls_layer_index.length;
            const _s_pxl_colors_uint32 = _s_pxl_colors;

            let indexed_changes = [];
            for(let index = 0; index < length; index++){

                const pxl = _s_pxls_layer_index[index];
                const is_in_image_imported = has_an_image_imported && imported_image_pxls_positioned_keyset.has(index);
                const was_in_image_imported = Boolean(_previous_imported_image_pxls_positioned_keyset.has(index));

                const is_in_image_imported_resizer = Boolean(has_an_image_imported && image_imported_resizer_index === index);
                const was_in_image_imported_resizer = Boolean(_previous_image_imported_resizer_index === index);

                const is_in_explosion = explosion_pxls_positioned_keyset.has(index);
                const was_in_explosion = _previous_explosion_pxls_positioned_keyset.has(index);

                const is_pixel_hovered = Boolean(_pxls_hovered === index && index !== -1);
                const is_the_old_pixel_hovered_to_paint = Boolean(Boolean(index === _old_pxls_hovered && has_new_pixel_hovered && index !== -1) || Boolean(index === _pxls_hovered && index !== -1));

                const is_mine_player_index = Boolean(_mine_player_index === index);
                const is_the_old_mine_player_index_to_paint = Boolean(index === _previous_mine_player_index && has_new_mine_player_index);

                const is_in_the_old_shape = _pxl_indexes_of_old_shape.has(index);
                const is_in_the_current_shape = pxl_indexes_of_current_shape.has(index);
                const is_in_the_current_selection = _pxl_indexes_of_selection.has(index);
                const is_current_selection_hovered = _pxl_indexes_of_selection.has(_pxls_hovered);
                const was_current_selection_hovered = _pxl_indexes_of_selection.has(_old_pxls_hovered);
                const is_current_selection_hovered_changes = Boolean(is_current_selection_hovered !== was_current_selection_hovered);
                const is_in_the_old_selection_drawn = _pxl_indexes_of_selection_drawn.has(index);
                const is_selected_and_hovered_recently = Boolean(is_in_the_current_selection && Boolean(is_pixel_hovered || is_the_old_pixel_hovered_to_paint));
                const is_selected_and_to_paint_again = Boolean(is_in_the_current_selection && _selection_pair_highlight !== _old_selection_pair_highlight);
                const is_ancient_selected_pixel_waiting_to_update = Boolean(is_in_the_old_selection_drawn && !is_in_the_current_selection);
                const is_in_pencil_mirror_axes_hover_indexes = pencil_mirror_axes_hover_indexes.has(index);
                const was_in_pencil_mirror_axes_hover_indexes = _previous_pencil_mirror_axes_hover_indexes.has(index);
                const is_in_pencil_mirror_axes_indexes = pencil_mirror_axes_indexes.has(index);
                const is_an_old_pencil_mirror_axes_pixel_to_paint = Boolean(_previous_pencil_mirror_axes_indexes.has(index) && _previous_pencil_mirror_axes_indexes !== pencil_mirror_axes_indexes);
                const is_a_new_pixel_to_paint = Boolean( is_there_new_dimension || has_canvas_been_hidden || Boolean(was_in_pencil_mirror_axes_hover_indexes && !is_in_pencil_mirror_axes_hover_indexes) || is_an_old_pencil_mirror_axes_pixel_to_paint || was_in_explosion !== is_in_explosion || is_in_explosion || was_in_image_imported || is_in_image_imported || Boolean(was_in_image_imported_resizer && !is_in_image_imported_resizer) || pxl !== _old_pxls[index] || _old_pxl_colors[pxl] !== _s_pxl_colors[_layer_index][pxl]);
                const pixel_hover_exception = tool === "ELLIPSE" && pxl_indexes_of_current_shape.size > 0;

                if (
                    !Boolean(hide_canvas_content && !_was_canvas_content_hidden) &&
                    Boolean(
                        has_layers_visibility_or_opacity_changed ||
                        is_there_new_dimension ||
                        !has_shown_canvas_once ||
                        has_canvas_been_hidden ||
                        is_in_pencil_mirror_axes_hover_indexes ||
                        is_in_pencil_mirror_axes_indexes ||
                        (is_current_selection_hovered_changes && is_in_the_current_selection) ||
                        is_selected_and_to_paint_again ||
                        is_ancient_selected_pixel_waiting_to_update ||
                        is_the_old_pixel_hovered_to_paint ||
                        is_a_new_pixel_to_paint ||
                        Boolean(is_pixel_hovered && !pixel_hover_exception) ||
                        is_mine_player_index ||
                        is_in_the_old_shape ||
                        is_in_the_current_shape ||
                        Boolean(is_in_the_current_selection && !is_in_the_old_selection_drawn) ||
                        is_selected_and_hovered_recently ||
                        is_the_old_mine_player_index_to_paint ||
                        is_in_image_imported_resizer && Boolean(_selection_pair_highlight !== _old_selection_pair_highlight)
                    )) {

                    let layer_pixel_colors = [];
                    let start_i = 0;

                    for (let i = _layers.length - 1; i >= 0; i--) {

                        const layer_pixel_color = _s_pxl_colors_uint32[i][_s_pxls[i][index]];
                        layer_pixel_colors[i] = layer_pixel_color;

                        if(this._get_rgba_from_Uint32(layer_pixel_color)[3] === 255 && parseFloat(_layers[i].opacity) === parseFloat(1) && !_layers[i].hidden) {

                            start_i = i;
                            break;
                        }

                    }

                    let pixel_color_Uint32 = 0;

                    for (let i = start_i; i < _layers.length; i++) {

                        if(!_layers[i].hidden) {

                            const layer_pixel_color = layer_pixel_colors[i];

                            pixel_color_Uint32 = this._blend_colors(pixel_color_Uint32, layer_pixel_color, parseFloat(_layers[i].opacity), false, false, true);

                            if(is_in_image_imported && i === _layer_index) {

                                pixel_color_Uint32 = this._blend_colors(pixel_color_Uint32, _imported_image_pxl_colors[imported_image_pxls_positioned[index]], 1, false, false, true);
                            }
                        }

                        if(is_in_explosion && i === _layers.length -1) {

                            pixel_color_Uint32 = this._blend_colors(pixel_color_Uint32, _pxl_colors_explosion[mine_explosion_frame][explosion_pxls_positioned[index]], 1, false, false, true);
                        }
                    }

                    let color =
                        is_in_pencil_mirror_axes_hover_indexes ||
                        is_in_pencil_mirror_axes_indexes ||
                        (is_pixel_hovered || is_mine_player_index) ||
                        (_mouse_inside && is_in_the_current_shape) ||
                        (is_in_the_current_selection && !is_in_the_old_selection_drawn) ||
                        (is_a_new_pixel_to_paint && is_in_the_current_selection) ||
                        is_selected_and_hovered_recently ?
                            is_pixel_hovered || is_mine_player_index || is_in_pencil_mirror_axes_indexes ?
                                this._blend_colors(pixel_color_Uint32, "hover", 2/3, false, false, true):
                                this._blend_colors(pixel_color_Uint32, "hover", 1/3, false, false, true)
                            : pixel_color_Uint32;

                    if(is_the_old_mine_player_index_to_paint || is_ancient_selected_pixel_waiting_to_update || (is_a_new_pixel_to_paint && !is_in_the_current_selection && !is_pixel_hovered && !is_in_pencil_mirror_axes_indexes)) {

                        color = pixel_color_Uint32;
                    }

                    if(is_in_image_imported_resizer || (is_in_the_current_selection && !is_in_the_current_shape && !is_pixel_hovered)) {

                        const pos_x = index % pxl_width;
                        const pos_y = (index - pos_x) / pxl_width;

                        if(is_in_image_imported_resizer) {

                            const opacity = is_pixel_hovered ?
                                2/3 + (0 + ((pos_x + pos_y + (_selection_pair_highlight ? 1: 0)) % 2)) / 3:
                                1/3 + (0 + ((pos_x + pos_y + (_selection_pair_highlight ? 1: 0)) % 2)) / 3;
                            color = this._blend_colors(pixel_color_Uint32, "hover", opacity, false, false, true);
                        }

                        if(is_in_the_current_selection && !is_in_the_current_shape && !is_pixel_hovered) {

                            const opacity = 1/3 + (0 + ((pos_x + pos_y + (_selection_pair_highlight ? 1: 0)) % 2)) / 3;
                            color = this._blend_colors(pixel_color_Uint32, "hover", opacity, false, false, true);
                        }
                    }

                    // We need to clear the pixel that won't totally be opaque because it can merge colors accidentally
                    indexed_changes[index] = color;

                    pixel_updated++;
                }
            }

            if(has_layers_visibility_or_opacity_changed || pixel_updated > 0 || Boolean(hide_canvas_content && !_was_canvas_content_hidden)) {

                let image_data = null;

                if(Boolean(has_layers_visibility_or_opacity_changed || Boolean(hide_canvas_content && !_was_canvas_content_hidden) || Boolean(pixel_updated * 2 > pxl_width * pxl_height))){

                    image_data = Boolean(has_layers_visibility_or_opacity_changed || Boolean(hide_canvas_content && !_was_canvas_content_hidden)) ?
                        new ImageData(new Uint8ClampedArray(pxl_width * pxl_height * 4).fill(0), pxl_width, pxl_height):
                        offscreenCanvas.context2d.getImageData(0, 0, pxl_width, pxl_height);

                    Object.entries(indexed_changes).forEach(([index, colorUint32]) => {

                        const rgba = this._get_rgba_from_Uint32(colorUint32);
                        const index_by_4 = index * 4;

                        image_data.data[index_by_4 + 0] = rgba[0];
                        image_data.data[index_by_4 + 1] = rgba[1];
                        image_data.data[index_by_4 + 2] = rgba[2];
                        image_data.data[index_by_4 + 3] = rgba[3];
                    });

                    offscreenCanvas.context2d.putImageData(image_data, 0, 0);
                }else {

                    Object.entries(indexed_changes).forEach(([index, colorUint32]) => {

                        const x = index % pxl_width;
                        const y = (index - x) / pxl_width;

                        offscreenCanvas.context2d.fillStyle = this._get_hex_from_Uint32(colorUint32);
                        offscreenCanvas.context2d.clearRect(x, y, 1, 1);
                        offscreenCanvas.context2d.fillRect(x, y, 1, 1);
                    });
                }

                this.setState({
                    _pxl_indexes_of_selection_drawn: new Set(_pxl_indexes_of_selection),
                    _pxl_indexes_of_old_shape: new Set(pxl_indexes_of_current_shape),
                    _is_there_new_dimension: false,
                    _imported_image_previous_start_x: parseInt(_imported_image_start_x),
                    _imported_image_previous_start_y: parseInt(_imported_image_start_y),
                    _imported_image_previous_scale_delta_x: parseInt(_imported_image_scale_delta_x),
                    _imported_image_previous_scale_delta_y: parseInt(_imported_image_scale_delta_y),
                    _previous_pencil_mirror_axes_indexes: new Set(pencil_mirror_axes_indexes),
                    _previous_pencil_mirror_axes_hover_indexes: new Set(pencil_mirror_axes_hover_indexes),
                    _previous_explosion_pxls_positioned_keyset: new Set(explosion_pxls_positioned_keyset),
                    _previous_imported_image_pxls_positioned_keyset: new Set(imported_image_pxls_positioned_keyset),
                    _previous_image_imported_resizer_index: parseInt(image_imported_resizer_index),
                    _old_selection_pair_highlight: Boolean(_selection_pair_highlight),
                    _old_layers: _layers.map((l) => {
                        return {
                            id: parseInt(l.id),
                            hash: String(l.hash),
                            name: String(l.name),
                            hidden: Boolean(l.hidden),
                            opacity: parseInt(l.opacity),
                        }
                    }),
                    _old_pxls: _s_pxls[_layer_index],
                    _old_pxl_colors: _s_pxl_colors[_layer_index],
                    _old_pxl_width: parseInt(pxl_width),
                    _old_pxl_height: parseInt(pxl_height),
                    _previous_mine_player_index: parseInt(_mine_player_index),
                    _old_pxls_hovered: parseInt(_pxls_hovered),
                    _was_canvas_content_hidden: Boolean(hide_canvas_content),
                    _last_paint_timestamp: Date.now(),
                    has_shown_canvas_once: true
                }, () => {

                    _anim_loop(() => {

                        context2d.drawImage(offscreenCanvas, 0, 0);
                    }, !has_shown_canvas_once, !has_shown_canvas_once); // Enable to cancel in order to know that a frame has not been drawn
                });
            }
        }
    };

    _maybe_save_state = (set_anyway_if_changes_callback = null) => {

        let {_layers, _last_action_timestamp, _undo_buffer_time_ms, _state_history_length, _id, pxl_width, pxl_height, _original_image_index, _layer_index, _s_pxls, _s_pxl_colors, _pxl_indexes_of_selection, _pencil_mirror_index } = this.state;

        if(_layers.length !== _s_pxls.length || pxl_width * pxl_height !== (_s_pxls[0] || []).length || (_s_pxls[0] || []).length === 0 || parseInt(_last_action_timestamp + _undo_buffer_time_ms) > Date.now()) {

            if(set_anyway_if_changes_callback) {

                set_anyway_if_changes_callback(this.state._json_state_history, false);
            }
            return false;
        }

        this._notify_layers_and_compute_thumbnails_change((layers, layers_length, layers_changed, layers_hash) => {

            function _get_current_state(_id, pxl_width, pxl_height, _original_image_index, layers, _layer_index, _s_pxls, _s_pxl_colors, _pxl_indexes_of_selection, _pencil_mirror_index) {

                return Object.assign({}, {
                    _id: parseInt(_id),
                    pxl_width: parseInt(pxl_width),
                    pxl_height: parseInt(pxl_height),
                    _original_image_index: parseInt(_original_image_index),
                    _layers: layers.map(function(l) {
                        return {
                            id: parseInt(l.id),
                            hash: String(l.hash),
                            name: String(l.name),
                            hidden: Boolean(l.hidden),
                            opacity: parseInt(l.opacity),
                        };
                    }),
                    _layer_index: parseInt(_layer_index),
                    _s_pxls: _s_pxls.map((a) => Array.from(a)),
                    _s_pxl_colors: _s_pxl_colors.map((a) => Uint32Array.from(a)),
                    _pxl_indexes_of_selection: new Set(_pxl_indexes_of_selection),
                    _pencil_mirror_index: parseInt(_pencil_mirror_index),
                });
            }

            let _json_state_history = this.state._json_state_history;
            if(_json_state_history.state_history.length === 0) { // Fist state

                const current_state = _get_current_state(_id, pxl_width, pxl_height, _original_image_index, layers, _layer_index, _s_pxls, _s_pxl_colors, _pxl_indexes_of_selection, _pencil_mirror_index);
                _json_state_history.state_history = [current_state];
                _json_state_history.previous_history_position = 0;
                _json_state_history.history_position = 1;

                this._notify_can_undo_redo_change(_json_state_history);
                this.setState({_json_state_history, _saved_json_state_history_timestamp_from_drawing: Date.now()});
                if(set_anyway_if_changes_callback !== null) {
                    set_anyway_if_changes_callback(_json_state_history, true);
                }
                return true;

            }else if(layers_changed){

                const current_state = _get_current_state(_id, pxl_width, pxl_height, _original_image_index, layers, _layer_index, _s_pxls, _s_pxl_colors, _pxl_indexes_of_selection, _pencil_mirror_index);
                const current_state_length = parseInt(_json_state_history.state_history.length);
                const back_in_history_of = parseInt(current_state_length - _json_state_history.history_position);
                const previous_state = _json_state_history.state_history[_json_state_history.history_position-1] || _json_state_history.state_history[0];

                if(previous_state._layers.map((l) => l.hash).join("+") !== current_state._layers.map((l) => l.hash).join("+")) {

                    // An action must have been performed and the last action must be older of 1 sec
                    if(back_in_history_of) {

                        _json_state_history.state_history.splice(parseInt(_json_state_history.history_position));
                    }

                    _json_state_history.previous_history_position = parseInt(_json_state_history.history_position);
                    if(_json_state_history.state_history.length >= _state_history_length) {

                        _json_state_history.state_history.shift();
                        _json_state_history.state_history.push(current_state);
                    }else {

                        _json_state_history.state_history.push(current_state);
                        _json_state_history.history_position = parseInt(_json_state_history.state_history.length);
                    }

                    this._notify_can_undo_redo_change(_json_state_history);
                    this.setState({_json_state_history, _saved_json_state_history_timestamp_from_drawing: Date.now()});
                    if(set_anyway_if_changes_callback !== null) {
                        set_anyway_if_changes_callback(_json_state_history, true);
                    }
                    return true;
                }else  {

                    this._notify_can_undo_redo_change();
                    if(set_anyway_if_changes_callback !== null) {
                        set_anyway_if_changes_callback(_json_state_history, false);
                    }
                    return false;
                }
            }else {

                if(set_anyway_if_changes_callback !== null) {

                    set_anyway_if_changes_callback(_json_state_history, false);
                }
                return false;
            }
        }, Date.now(), true);
    };

    _notify_relevant_action_event = (event, color = "#ffffffff", opacity = 1) => {

        if(this.props.onRelevantActionEvent) {

            this.props.onRelevantActionEvent(event, this._format_color(color), opacity);
        }
    };

    _notify_position_change = (event, position, date = null) => {

        if(this.props.onPositionChange) {

            const { _notified_position_at } = this.state;
            const now = Date.now();

            if((now - _notified_position_at >= 150 && date === null) || date > _notified_position_at && now - date >= 150) {

                position = {
                    x: typeof position.x === "undefined" ? -1: position.x,
                    y: typeof position.y === "undefined" ? -1: position.y,
                };


                this.setState({_notified_position_at: now}, () => {

                    this.props.onPositionChange(position, window.w_canvas_pixels._previous_cpaf_fps);
                });
            }else if(now < date + 150){

                setTimeout(() => {

                    this._notify_position_change(null, {x: position.x, y: position.y}, now);
                }, 50);
            }
        }
    };

    _notify_current_color_change = (color, event = null) => {

        color = this._format_color(color);
        if(this.props.onCurrentColorChange) {

            this.props.onCurrentColorChange(color, event);
        } else {

            this.setState({pxl_current_color: color});
        }
    };

    _notify_is_something_selected = () => {

        const { _pxl_indexes_of_selection } = this.state;

        if(Boolean(this.state._previous_pxl_indexes_of_selection.size) !== Boolean(_pxl_indexes_of_selection.size)) {

            this.setState({
                _is_something_selected: Boolean(_pxl_indexes_of_selection.size),
                _previous_pxl_indexes_of_selection: new Set(_pxl_indexes_of_selection)
            }, () => {

                if(this.props.onSomethingSelectedChange) {

                    this.props.onSomethingSelectedChange(Boolean(_pxl_indexes_of_selection.size));
                }
            });
        }
    };

    _notify_image_load_complete = () => {

        const { _s_pxl_colors, pxl_width, pxl_height } = this.state;

        let image_details = {
            width: pxl_width,
            height: pxl_height,
            number_of_colors: _s_pxl_colors[0].length,
        };

        if(this.props.onLoadComplete) { this.props.onLoadComplete("image_load", image_details); }
    };

    _notify_image_import_complete = () => {

        if(this.props.onImageImportComplete) { this.props.onImageImportComplete(); }
    };

    _notify_can_undo_redo_change = (_json_state_history) => {

        const can_undo = this._can_undo(_json_state_history);
        const can_redo = this._can_redo(_json_state_history);

        if(this.props.onCanUndoRedoChange) { this.props.onCanUndoRedoChange(can_undo, can_redo); }
    };

    _notify_size_change = () => {

        const { pxl_width, pxl_height, _canvas } = this.state;
        this._set_canvas_ref(_canvas);
        if(this.props.onSizeChange) { this.props.onSizeChange(pxl_width, pxl_height); }
    };

    import_JSON_state = (json) => {

        this.import_JS_state(JSON.parse(json));
    };

    import_JS_state = (js, callback_function) => {

        let _json_state_history = Object.assign({}, {
            history_position: parseInt(js._json_state_history.history_position),
            previous_history_position: parseInt(js._json_state_history.previous_history_position),
            state_history: js._json_state_history.state_history.map((state) => Object.assign({}, {
                _original_image_index: parseInt(state._original_image_index),
                pxl_width: parseInt(state.pxl_width),
                pxl_height: parseInt(state.pxl_height),
                _pxl_indexes_of_selection: new Set(Boolean(state._pxl_indexes_of_selection.length) ? state._pxl_indexes_of_selection : []),
                _s_pxl_colors: state._s_pxl_colors.map((a) => Uint32Array.from(Object.values(a).map((i) => this._format_color(i, true)))),
                _s_pxls: state._s_pxls.map((a) => Array.from(Object.values(a).map((i) => parseInt(i)))),
                _layers: state._layers.map((l) => {
                    return {
                        id: parseInt(l.id),
                        hash: String(l.hash),
                        name: String(l.name),
                        hidden: Boolean(l.hidden),
                        opacity: parseInt(l.opacity),
                    };
                }),
                _layer_index: parseInt(state._layer_index),
                _pencil_mirror_index: parseInt(state._pencil_mirror_index),
                _id: parseInt(state._pencil_mirror_index)
            }))
        });

        let { _original_image_index, pxl_width, pxl_height, _pxl_indexes_of_selection, _s_pxl_colors, _s_pxls, _layers, _layer_index, _pencil_mirror_index, _id } = _json_state_history.state_history[_json_state_history.history_position-1];

        this.setState({
            _id: parseInt(_id),
            pxl_width: parseInt(pxl_width),
            pxl_height: parseInt(pxl_height),
            _base64_original_images: Array.from(js._base64_original_images),
            _original_image_index: parseInt(_original_image_index),
            _saved_json_state_history_timestamp_from_drawing: 0,
            _layers: _layers.map((l) => {
                return {
                    id: parseInt(l.id),
                    hash: String(l.hash),
                    name: String(l.name),
                    hidden: Boolean(l.hidden),
                    opacity: parseInt(l.opacity),
                }
            }),
            _layer_index: parseInt(_layer_index),
            _s_pxls: _s_pxls.map((a) => Array.from(Object.values(a).map((i) => parseInt(i)))),
            _s_pxl_colors: _s_pxl_colors.map((a) => Uint32Array.from(Object.values(a).map((i) => this._format_color(i, true)))),
            _pxl_indexes_of_selection: new Set(_pxl_indexes_of_selection),
            _pencil_mirror_index: parseInt(_pencil_mirror_index),
            _json_state_history: _json_state_history,
            _is_there_new_dimension: true,
        }, () => {

            this._notify_layers_and_compute_thumbnails_change( () => {

                this._update_screen_zoom_ratio(true, () => {

                    this._notify_image_load_complete();
                    this._notify_is_something_selected();
                    this._notify_can_undo_redo_change();
                    callback_function();
                });
            }, Date.now(), true);
        });
    };

    export_JS_state = (callback_function) => {

        this._maybe_save_state((_json_state_history, saved) => {

            if(!_json_state_history.state_history.length){

                setTimeout(() => {

                    this.export_JS_state(callback_function);
                }, this.state._undo_buffer_time_ms)

            } else {

                const {_base64_original_images, _id} = this.state;

                this.get_base64_png_data_url(1, ([base_64]) => {

                    const bytes = 3 * Math.ceil((base_64.length/4));
                    callback_function({
                        id: _id,
                        kb: bytes / 1024,
                        preview: base_64,
                        timestamp: Date.now(),
                        _base64_original_images: _base64_original_images,
                        _json_state_history
                    });
                }, false, 0, 60, 75);
            }
        });
    };

    _can_undo = (_json_state_history) => {

        if(typeof _json_state_history === "undefined") {

            _json_state_history = this.state._json_state_history;
        }

        return Boolean(_json_state_history.history_position > 1);
    };

    nothing_happened_undo = () => {

        this._maybe_save_state((data) => {

            if(data) {

                this.undo();
            }
        });
    }

    undo = () => {

        this._maybe_save_state((_json_state_history, saved) => {

            if(this._can_undo(_json_state_history)){

                _json_state_history.previous_history_position = parseInt(_json_state_history.history_position);
                _json_state_history.history_position -= 1;

                const { _original_image_index, pxl_width, pxl_height, _pxl_indexes_of_selection, _s_pxl_colors, _s_pxls, _layers, _layer_index, _pencil_mirror_index, _id } = _json_state_history.state_history[_json_state_history.history_position-1];
                const has_new_dimension = Boolean(pxl_width !== this.state.pxl_width || pxl_height !== this.state.pxl_height);

                this.setState(Object.assign({}, {
                    _id: parseInt(_id),
                    pxl_width: parseInt(pxl_width),
                    pxl_height: parseInt(pxl_height),
                    _original_image_index: parseInt(_original_image_index),
                    _layers: _layers.map(function(l) {
                        return {
                            id: parseInt(l.id),
                            hash: String(l.hash),
                            name: String(l.name),
                            hidden: Boolean(l.hidden),
                            opacity: parseInt(l.opacity),
                        };
                    }),
                    _layer_index: parseInt(_layer_index),
                    _s_pxls: _s_pxls.map((a) => Array.from(a)),
                    _s_pxl_colors: _s_pxl_colors.map((a) => Uint32Array.from(a)),
                    _pxl_indexes_of_selection: new Set(_pxl_indexes_of_selection),
                    _pencil_mirror_index: parseInt(_pencil_mirror_index),
                    _json_state_history: _json_state_history,
                    _is_there_new_dimension: has_new_dimension,
                }), () => {

                    if (has_new_dimension) {

                        this._notify_layers_and_compute_thumbnails_change( () => {

                            this._update_screen_zoom_ratio(true,() => {

                                this._notify_image_load_complete();
                                this._notify_is_something_selected();
                                this._notify_can_undo_redo_change();
                            });
                        });
                    }else {

                        this._notify_layers_and_compute_thumbnails_change(() => {

                            this._update_canvas();
                            this._notify_is_something_selected();
                            this._notify_can_undo_redo_change();
                        });
                    }
                });
            }
        });
    };

    _can_redo = (_json_state_history) => {

        if(typeof _json_state_history === "undefined") {

            _json_state_history = this.state._json_state_history;
        }

        return Boolean(_json_state_history.state_history.length > _json_state_history.history_position);
    }

    redo = () => {

        this._maybe_save_state((_json_state_history, saved) => {

            if (this._can_redo(_json_state_history)) {

                _json_state_history.previous_history_position = parseInt(_json_state_history.history_position);
                _json_state_history.history_position += 1;
                const {
                    _original_image_index,
                    pxl_width,
                    pxl_height,
                    _pxl_indexes_of_selection,
                    _s_pxl_colors,
                    _s_pxls,
                    _layers,
                    _layer_index,
                    _pencil_mirror_index,
                    _id
                } = _json_state_history.state_history[_json_state_history.history_position - 1];

                const has_new_dimension = Boolean(pxl_width !== this.state.pxl_width || pxl_height !== this.state.pxl_height);

                this.setState(Object.assign({}, {
                    _id: parseInt(_id),
                    pxl_width: parseInt(pxl_width),
                    pxl_height: parseInt(pxl_height),
                    _original_image_index: parseInt(_original_image_index),
                    _layers: _layers.map(function(l) {
                        return {
                            id: parseInt(l.id),
                            hash: String(l.hash),
                            name: String(l.name),
                            hidden: Boolean(l.hidden),
                            opacity: parseInt(l.opacity),
                        };
                    }),
                    _layer_index: parseInt(_layer_index),
                    _s_pxls: _s_pxls.map((a) => Array.from(a)),
                    _s_pxl_colors: _s_pxl_colors.map((a) => Uint32Array.from(a)),
                    _pxl_indexes_of_selection: new Set(_pxl_indexes_of_selection),
                    _pencil_mirror_index: parseInt(_pencil_mirror_index),
                    _json_state_history: _json_state_history,
                    _is_there_new_dimension: has_new_dimension,
                }), () => {

                    if (has_new_dimension) {

                        this._notify_layers_and_compute_thumbnails_change(() => {

                            this._update_screen_zoom_ratio(true,() => {

                                this._notify_image_load_complete();
                                this._notify_is_something_selected();
                                this._notify_can_undo_redo_change();
                            });
                        });
                    }else {

                        this._notify_layers_and_compute_thumbnails_change(() => {

                            this._update_canvas();
                            this._notify_is_something_selected();
                            this._notify_can_undo_redo_change();
                        });
                    }
                });
            }
        });
    }

    to_selection_border = () => {

        const { _s_pxls, pxl_width, pxl_height, _pxl_indexes_of_selection, _s_pxl_colors, _layer_index, pxl_current_opacity } = this.state;
        const pxl_current_color = this._format_color(this.state.pxl_current_color, true);

        let pxls = Array.from(_s_pxls[_layer_index]);
        let pxl_colors = Array.from(_s_pxl_colors[_layer_index]);
        let pxls_of_the_border = this._get_border_from_selection(_pxl_indexes_of_selection);

        pxls_of_the_border.forEach((pxl_index) => {

            const current_pxl_color_index = pxls[pxl_index];
            const current_pxl_color = pxl_colors[current_pxl_color_index];
            const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_current_color, pxl_current_opacity, false, false, true);

            // Eventually add current color to color list
            if(!pxl_colors.includes(current_pxl_new_color)){

                pxl_colors.push(current_pxl_new_color);
            }

            const current_pxl_new_color_index = pxl_colors.indexOf(current_pxl_new_color);
            pxls[pxl_index] = current_pxl_new_color_index;
        });

        let ns_pxl_colors = this.state._s_pxl_colors;
        ns_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);

        let ns_pxls = this.state._s_pxls;
        ns_pxls[_layer_index] = pxls;

        this.setState({_s_pxl_colors: ns_pxl_colors, _s_pxls: ns_pxls, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    }

    to_selection_bucket = () => {

        const { _s_pxls, pxl_width, pxl_height, _pxl_indexes_of_selection, _s_pxl_colors, _layer_index, pxl_current_color, pxl_current_opacity } = this.state;

        let pxls = Array.from(_s_pxls[_layer_index]);
        let pxl_colors = Array.from(_s_pxl_colors[_layer_index])

        let pxl_indexes_of_selection = [..._pxl_indexes_of_selection];
        pxl_indexes_of_selection.forEach((pxl_index) => {

            const current_pxl_color_index = pxls[pxl_index];
            const current_pxl_color = pxl_colors[current_pxl_color_index];
            const current_pxl_new_color = this._blend_colors(current_pxl_color, pxl_current_color, pxl_current_opacity, false, false, true);

            // Eventually add current color to color list
            if(!pxl_colors.includes(current_pxl_new_color)){

                pxl_colors.push(current_pxl_new_color);
            }

            const current_pxl_new_color_index = pxl_colors.indexOf(current_pxl_new_color);
            pxls[pxl_index] = current_pxl_new_color_index;
        });

        let ns_pxl_colors = this.state._s_pxl_colors;
        ns_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);

        let ns_pxls = this.state._s_pxls;
        ns_pxls[_layer_index] = pxls;

        this.setState({_s_pxl_colors: ns_pxl_colors, _s_pxls: ns_pxls, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    }

    to_selection_invert = () => {

        const { _s_pxls, _pxl_indexes_of_selection, _layer_index } = this.state;

        const pxl_indexes_of_selection_set = new Set(_pxl_indexes_of_selection);
        let pxl_indexes_of_selection = new Set();

        for (let i = 0; i < _s_pxls[_layer_index].length; i++) {

            if(!pxl_indexes_of_selection_set.has(i)) {
                pxl_indexes_of_selection.add(i);
            }
        }

        this.setState({_pxl_indexes_of_selection: pxl_indexes_of_selection, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    }

    get_average_color_of_selection = () => {

        return this._get_average_color_of_selection();
    };

    _get_average_color_of_selection = (_pxl_indexes_of_selection, pxls, pxl_colors ) => {

        const { _s_pxls, _s_pxl_colors, _layer_index } = this.state;

        pxls = pxls || Array.from(_s_pxls[_layer_index]);
        pxl_colors = pxl_colors || Uint32Array.from(_s_pxl_colors[_layer_index]);

        const colors_index = [...new Set(pxls)];
        let colors_in_selection_with_occurrence = [];

        colors_index.forEach((ci) => {

            colors_in_selection_with_occurrence[ci] = 1;
        });

        _pxl_indexes_of_selection = _pxl_indexes_of_selection || this.state._pxl_indexes_of_selection;

        [..._pxl_indexes_of_selection].forEach((pxl_index) => {

            const current_pxl_color_index = pxls[pxl_index];
            colors_in_selection_with_occurrence[current_pxl_color_index] ++;
        });

        let colors_total_occurrence = 0;
        Object.entries(colors_in_selection_with_occurrence).forEach((entry) => {

            colors_total_occurrence += entry[1];
        });

        let average_color = 0;
        Object.entries(colors_in_selection_with_occurrence).forEach((entry) => {

            const [current_color_index, occurrence] = entry;
            average_color = this._blend_colors(average_color, pxl_colors[current_color_index], occurrence / colors_total_occurrence, true, true, true);
        });

        return average_color;
    };

    to_selection_changes = (color, change_not_only_hue = false) => {

        const [o_r, o_g, o_b] = this._get_rgba_from_Uint32(this._format_color(color, true));
        let [hue, saturation, luminosity] = this._rgb_to_hsl(o_r, o_g, o_b);

        const { _s_pxls, _pxl_indexes_of_selection, _s_pxl_colors, _layer_index } = this.state;

        let pxls = Array.from(_s_pxls[_layer_index]);
        let pxl_colors = Array.from(_s_pxl_colors[_layer_index]);

        const average_color = this._get_average_color_of_selection();
        const [ac_r, ac_g, ac_b, ac_a] = this._get_rgba_from_Uint32(average_color)
        const [ac_h, ac_s, ac_l] = this._rgb_to_hsl(ac_r, ac_g, ac_b);
        const global_hue_diff = hue - ac_h;

        [..._pxl_indexes_of_selection].forEach((pxl_index, iteration, array) => {

            const current_pxl_color_index = pxls[pxl_index];
            const current_pxl_color = pxl_colors[current_pxl_color_index];

            const [c_r, c_g, c_b, c_a] = this._get_rgba_from_Uint32(current_pxl_color);
            let [c_hue, c_saturation, c_luminosity] = this._rgb_to_hsl(c_r, c_g, c_b);
            const c_new_hue = c_hue + global_hue_diff < 0 ? 360 + (c_hue + global_hue_diff) % 360: (c_hue + global_hue_diff) % 360;

            let added = [saturation, luminosity, 1];
            let base = [c_saturation, c_luminosity, 1];
            let mix = [];

            if (c_a !== 0 && change_not_only_hue) {

                mix[2] = 1 - (1 - added[2]) * (1 - base[2]); // alpha
                mix[0] = Math.round((added[0] * added[2] / mix[2]) + (base[0] * base[2] * (1 - added[2]) / mix[2])); // red
                mix[1] = Math.round((added[1] * added[2] / mix[2]) + (base[1] * base[2] * (1 - added[2]) / mix[2])); // green
            }else {

                mix = [c_saturation, c_luminosity];
            }

            const [h_r, h_g, h_b] = this._hsl_to_rgb(c_new_hue, mix[0], mix[1]);
            let current_pxl_color_new = 0;

            if (c_a !== 0) {

                current_pxl_color_new = this._get_Uint32_color_from_rgba_values(h_r, h_g, h_b, c_a);
            }

            // Eventually add current color to color list
            if(!pxl_colors.includes(current_pxl_color_new)){

                pxl_colors.push(current_pxl_color_new);
            }

            pxls[pxl_index] = pxl_colors.indexOf(current_pxl_color_new);

        });

        let ns_pxl_colors = this.state._s_pxl_colors;
        ns_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);

        let ns_pxls = this.state._s_pxls;
        ns_pxls[_layer_index] = pxls;

        this.setState({_s_pxl_colors: ns_pxl_colors, _s_pxls: ns_pxls}, () => {

            this.setState(() => {
                _last_action_timestamp: Date.now()
            }, () => {

                this._update_canvas();
            });
        });
    };

    _get_border_from_selection = (selection, inside = true, bold = false) => {

        const { pxl_width, pxl_height } = this.state;

        let pxls_of_the_border = [];

        Array.from(selection).forEach((pxl_index, iteration, array) => {

            let up, right, bottom, left;

            up = pxl_index - pxl_width; up = up < 0 ? -1: up;
            right = pxl_index + 1; right = right % pxl_width === 0 ? -1: right;
            bottom = pxl_index + pxl_width; bottom = bottom > (pxl_width * pxl_height) ? -1: bottom;
            left = pxl_index - 1; left = left % pxl_width === pxl_width - 1 ? -1: left;

            let up_left, up_right, bottom_left, bottom_right;

            up_left = up - 1; up_left = up === -1 || left === -1 ? -1: up_left;
            up_right = up + 1; up_right = up === -1 || right === -1 ? -1: up_right;
            bottom_left = bottom - 1; bottom_left = bottom === -1 || left === -1 ? -1: bottom_left;
            bottom_right = bottom + 1; bottom_right = bottom === -1 || right === -1 ? -1: bottom_right;

            if(!inside) {

                if(-1 === array.indexOf(up)){
                    pxls_of_the_border.push(up)
                }
                if(-1 === array.indexOf(right)){
                    pxls_of_the_border.push(right)
                }
                if(-1 === array.indexOf(bottom)){
                    pxls_of_the_border.push(bottom)
                }
                if(-1 === array.indexOf(left)){
                    pxls_of_the_border.push(left)
                }

                if(bold) {

                    if(-1 === array.indexOf(up_left)){

                        pxls_of_the_border.push(up_left)
                    }
                    if(-1 === array.indexOf(up_right)){
                        pxls_of_the_border.push(up_right)
                    }
                    if(-1 === array.indexOf(bottom_left)){
                        pxls_of_the_border.push(bottom_left)
                    }
                    if(-1 === array.indexOf(bottom_right)){
                        pxls_of_the_border.push(bottom_right)
                    }
                }

            }else {
                if(
                    -1 === array.indexOf(up) || -1 === up ||
                    -1 === array.indexOf(right) || -1 === right ||
                    -1 === array.indexOf(bottom) || -1 === bottom ||
                    -1 === array.indexOf(left) || -1 === left
                ) {

                    pxls_of_the_border.push(pxl_index);
                }

                if(bold) {

                    if(
                        -1 === array.indexOf(up_left) || -1 === up_left ||
                        -1 === array.indexOf(up_right) || -1 === up_right ||
                        -1 === array.indexOf(bottom_left) || -1 === bottom_left ||
                        -1 === array.indexOf(bottom_right) || -1 === bottom_right
                    ) {

                        pxls_of_the_border.push(pxl_index);
                    }

                }
            }

        });

        return pxls_of_the_border;
    };

    _to_selection_crop = () => {

        let { _s_pxls, _s_pxl_colors, _layer_index, _pxl_indexes_of_selection, pxl_width, pxl_height, _base64_original_images, _original_image_index } = this.state;

        if(_pxl_indexes_of_selection.size > 0) {

            let ns_pxls = Array.from(_s_pxls);
            let ns_pxl_colors = Array.from(_s_pxl_colors);

            let top_left = [pxl_width, pxl_height];
            let bottom_right = [-1, -1];

            _pxl_indexes_of_selection.forEach((pxl_index) => {

                const x = pxl_index % pxl_width;
                const y = (pxl_index - x) / pxl_width;

                if (x < top_left[0]) {
                    top_left[0] = x
                }
                if (y < top_left[1]) {
                    top_left[1] = y
                }

                if (x > bottom_right[0]) {
                    bottom_right[0] = x
                }
                if (y > bottom_right[1]) {
                    bottom_right[1] = y
                }

            });

            const new_width = 1 + bottom_right[0] - top_left[0];
            const new_height = 1 + bottom_right[1] - top_left[1];

            for (let l = 0; l < _s_pxls.length; l++) {

                let pxls = _s_pxls[l];
                let new_pxls = new Array(new_width * new_height).fill(0);
                let new_pxl_colors = [];

                for (let i = 0; i < new_width * new_height; i++) {

                    let x = i % new_width;
                    let y = (i - x) / new_width;

                    x += top_left[0];
                    y += top_left[1];

                    const index = y * pxl_width + x;

                    new_pxls[i] = pxls[index];
                }

                [new_pxls, new_pxl_colors] = this._remove_duplicate_pxl_colors(new_pxls, _s_pxl_colors[l]);
                ns_pxls[l] = new_pxls;
                ns_pxl_colors[l] = new_pxl_colors;
            }

            if (typeof _base64_original_images[_original_image_index] !== "undefined") {


                let image = new Image();
                image.onload = () => {

                    const s_width = image.width * (new_width / pxl_width);
                    const s_height = image.height * (new_height / pxl_height);

                    let [ctx, canvas] = this._get_new_ctx_from_canvas(s_width, s_height);

                    ctx.save();
                    ctx.drawImage(
                        image,
                        image.width * (top_left[0] / pxl_width),
                        image.height * (top_left[1] / pxl_height),
                        s_width,
                        s_height,
                        0,
                        0,
                        s_width,
                        s_height
                    );
                    ctx.restore();

                    const base64_original_image = image.src.includes("image/png") ?
                        canvas.toDataURL("image/png") :
                        canvas.toDataURL("image/jpeg");

                    const new_base64_original_images = !_base64_original_images.includes(base64_original_image) ?
                        _base64_original_images.concat([base64_original_image]) :
                        _base64_original_images;


                    this.setState({
                        _s_pxls: ns_pxls,
                        _s_pxl_colors: ns_pxl_colors,
                        pxl_width: new_width,
                        pxl_height: new_height,
                        _pxl_indexes_of_selection: new Set(),
                        _base64_original_images: new_base64_original_images,
                        _original_image_index: -1,
                        _is_there_new_dimension: true,
                    }, () => {

                        this.setState({
                            _original_image_index: new_base64_original_images.indexOf(base64_original_image),
                            _last_action_timestamp: Date.now()
                        }, () => {

                            this._notify_size_change();
                            this._request_force_update();
                        });
                    })
                };
                image.src = _base64_original_images[_original_image_index];

            }else {

                this.setState({
                    _s_pxls: ns_pxls,
                    _s_pxl_colors: ns_pxl_colors,
                    pxl_width: new_width,
                    pxl_height: new_height,
                    _pxl_indexes_of_selection: new Set(),
                    _last_action_timestamp: Date.now(),
                }, () => {

                    this._notify_size_change();
                    this._request_force_update();
                });

            }
        }

    };

    to_selection_size = (grow) => {

        let { _pxl_indexes_of_selection } = this.state;

        _pxl_indexes_of_selection = this._to_selection_size(grow, _pxl_indexes_of_selection);

        this.setState({_pxl_indexes_of_selection}, () => {

            this._update_canvas();
        });

    };

    _to_selection_size = (grow, _pxl_indexes_of_selection) => {

        _pxl_indexes_of_selection = new Set(_pxl_indexes_of_selection);

        for (let si = 1; si <= Math.abs(grow); si++) {

            const pxls_of_the_border = new Set(this._get_border_from_selection(_pxl_indexes_of_selection, grow < 0, false));

            for (let pxl of pxls_of_the_border) {

                if(grow < 0) {

                    _pxl_indexes_of_selection.delete(pxl);
                }else {

                    _pxl_indexes_of_selection.add(pxl);
                }
            }
        }

        return _pxl_indexes_of_selection;

    }

    to_selection_none = () => {

        this.setState({_pxl_indexes_of_selection: new Set()}, () => {

            this._update_canvas();
        });
    };

    confirm_import = () => {

        this._merge_import();
    };

    _merge_import = () => {

        let {
            pxl_width,
            pxl_height,
            _imported_image_start_x,
            _imported_image_start_y,
            _imported_image_pxls,
            _imported_image_width,
            _imported_image_height,
            _imported_image_pxl_colors,
            _imported_image_scale_delta_x,
            _imported_image_scale_delta_y,
        } = this.state;

        [_imported_image_pxls, _imported_image_pxl_colors, _imported_image_width, _imported_image_height] = this._get_imported_image_scaled(_imported_image_pxls, _imported_image_pxl_colors, _imported_image_width, _imported_image_height, _imported_image_scale_delta_x, _imported_image_scale_delta_y);

        let imported_image_pxls_positioned = [];
        const has_an_image_imported = _imported_image_pxls.length > 0;

        if(has_an_image_imported) {

            _imported_image_pxls.forEach((pxl, index) => {

                const pos_x = index % _imported_image_width;
                const pos_y = (index - pos_x) / _imported_image_width;

                const current_pos_x_positioned = pos_x + _imported_image_start_x;
                const current_pos_y_positioned = pos_y + _imported_image_start_y;

                const imported_image_pxl_positioned_index = current_pos_y_positioned * pxl_width + current_pos_x_positioned;

                if(current_pos_x_positioned >= 0 && current_pos_x_positioned < pxl_width && current_pos_y_positioned >= 0 && current_pos_y_positioned < pxl_height) {

                    imported_image_pxls_positioned[imported_image_pxl_positioned_index] = pxl;
                }

            });

            let { _s_pxls, _s_pxl_colors, _layer_index } = this.state;

            Object.entries(imported_image_pxls_positioned).forEach((entry) => {

                const [pixel_index, color_index] = entry;

                const old_pixel_color_index = _s_pxls[_layer_index][pixel_index];
                const old_pixel_color_hex = _s_pxl_colors[_layer_index][old_pixel_color_index];
                const top_pixel_color_hex = _imported_image_pxl_colors[color_index];
                const new_pixel_color_hex = this._blend_colors(old_pixel_color_hex, top_pixel_color_hex, 1, false, false, true);

                if(!_s_pxl_colors[_layer_index].includes(new_pixel_color_hex)) {

                    let pxl_colors = Array.from(_s_pxl_colors[_layer_index]);
                    pxl_colors.push(new_pixel_color_hex);

                    _s_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);
                }

                const new_pixel_color_index = _s_pxl_colors[_layer_index].indexOf(new_pixel_color_hex);
                _s_pxls[_layer_index][pixel_index] = new_pixel_color_index;

            });

            [_s_pxls[_layer_index], _s_pxl_colors[_layer_index]] = this._remove_duplicate_pxl_colors(_s_pxls[_layer_index], _s_pxl_colors[_layer_index]);

            this.setState({
                _s_pxls,
                _s_pxl_colors,
                _imported_image_start_x: 0,
                _imported_image_start_y: 0,
                _imported_image_scale_delta_x: 0,
                _imported_image_scale_delta_y: 0,
                _imported_image_pxls: [],
                _imported_image_width: 0,
                _imported_image_height: 0,
                _imported_image_pxl_colors: [],
                _imported_image_move_from: [0, 0],
                _last_action_timestamp: Date.now(),
            }, () => {

                this._update_canvas();
                this._notify_is_image_import_mode();
            });
        }
    };

    _notify_is_image_import_mode = () => {

        const { _imported_image_pxls } = this.state
        const is_image_import_mode = _imported_image_pxls.length > 0;

        this.setState({_is_image_import_mode: is_image_import_mode});

        if(this.props.onImageImportModeChange) {

            this.props.onImageImportModeChange(is_image_import_mode);
        }
    }

    to_selection_crop = () => {

        this._to_selection_crop();
    };

    to_rotation = (right = true) => {

        this._to_rotation(right);
    }

    to_greyscale = () => {

        this._to_colorized("greyscale");
    };

    to_sepia = () => {

        this._to_colorized("sepia");
    };

    to_opacity = (opacity = 0) => {

        this._to_colorized(null, opacity);
    }

    to_color = (hue = 0, strength, blend_with_a_saturation_of = null, blend_with_a_luminosity_of = null) => {

        this._to_colorized(hue, strength, blend_with_a_saturation_of, blend_with_a_luminosity_of);
    }

    to_vignette = (color = "#000000ff", intensity = 0) => {

        this._to_vignette(color, intensity);
    }

    less_colors_stepped = (increase = 1, callback_function = () => {}) => {

        let colors_removed = 0;
        let less_color_step = increase;
        const try_another = () => {

            this.to_less_color(less_color_step / 64, (result) => {

                colors_removed = result.colors_removed;
                less_color_step += increase;
                increase -= colors_removed > 0 ? 1: 0;
                if(colors_removed < 1) {
                    try_another();
                }else {

                    callback_function(result);
                }
            });
        };

        try_another();
    };

    to_less_color = (threshold = 1/16, callback_function = () => {}) => {


        if(this.props.onLoad) {

            if(threshold === "auto") {

                this.props.onLoad("less_color_auto");
            }else {

                this.props.onLoad("less_color_auto");
            }
        }

        this._to_less_color(threshold, (results) => {

            if(this.props.onLoadComplete) {

                if(threshold === "auto") {

                    if(this.props.onLoadComplete) { this.props.onLoadComplete("less_color_auto", results); }
                }else {

                    if(this.props.onLoadComplete) { this.props.onLoadComplete("less_color_auto", results); }
                }
            }
            callback_function(results);
        });
    }

    auto_adjust_contrast = (intensity = 1) => {

        this._auto_adjust_contrast(intensity);
    }

    auto_adjust_saturation = (intensity = 1.5) => {

        this._auto_adjust_saturation(intensity);
    }

    smooth_adjust = (intensity = 1) => {

        this._auto_adjust_smoothness();
    }

    to_alpha = (color = "#00000000", intensity = 1) => {

        this._to_alpha(this._format_color(color, true), intensity);
    }

    to_filter = (name = "1997", intensity = 1) => {

        this._to_filter(name, intensity);
    }

    to_mirror = (horizontal = true) => {

        this._invert_pixel(horizontal ? "HORIZONTAL": "VERTICAL");
    };

    to_dutone = (contrast = 0.8, color_a = "#ffffffff", color_b = "#000000ff") => {

        this._to_dutone(contrast, this._format_color(color_a, true), this._format_color(color_b, true));
    };

    rgb_to_hsl = (r, g, b) => {

        return this._rgb_to_hsl(r, g, b);
    };

    get_rgba_from_hex = (color) => {

        return this._get_rgba_from_hex(color);
    };

    _get_hex_value_from_rgb_value = (v) => {

        return parseInt(v).toString(16).padStart(2, "0").toString(16);
    };

    _hsl_to_hex = (h, s, l) => {

        const rgb = this._hsl_to_rgb(h, s, l);
        return this._get_hex_color_from_rgba_values(rgb[0], rgb[1], rgb[2], 255);
    };

    _hsla_to_hex = (h, s, l, a) => {

        const rgb = this._hsl_to_rgb(h, s, l);
        return this._get_hex_color_from_rgba_values(rgb[0], rgb[1], rgb[2], parseInt(255 * a / 100));
    };

    _get_hex_values_from_rgba_values = (...rgba) => {

        return rgba.map((v) => this._get_hex_value_from_rgb_value(v));
    };

    _format_color = (color, getUint32 = false) => { // Supports #fff (short rgb), #fff0 (short rgba), #e2e2e2 (full rgb) and #e2e2e2ff (full rgba)

        color = typeof color === "undefined" ? 0: color;

        if(getUint32 && typeof color === "number"){

            return color;
        }else {

            if(!getUint32 && typeof color === "number"){

                return this._get_hex_from_Uint32(color);
            }

            let formatted = "";
            const hex = color;
            const hex_length = hex.length;

            if(hex_length === 9) {

                formatted = hex;

            } else if (hex_length === 7) {

                formatted = hex.concat("ff");
            } else if (hex_length === 5) {

                const a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3), d = hex.charAt(4);
                formatted =  "#".concat(a, a, b, b, c, c, d, d);
            } else if (hex_length === 4) {

                const a = hex.charAt(1), b = hex.charAt(2), c = hex.charAt(3);
                formatted = "#".concat(a, a, b, b, c, c, "ff");
            }

            if(getUint32){

                return this._get_uint32_from_hex(formatted);
            }else {

                return formatted;
            }
        }
    };

    _get_rgba_from_hex = (hex) => {

        return new Uint8ClampedArray(Uint32Array.of(parseInt(hex.slice(1), 16)).buffer).reverse();
    };

    _get_hex_color_from_rgba_values = (r, g , b, a) => {

        return "#".concat("00000000".concat(new Uint32Array(Uint8ClampedArray.of(a, b, g, r).buffer)[0].toString(16)).slice(-8));
    };

    _get_rgba_from_Uint32 = (num) => {

        return new Uint8ClampedArray(Uint32Array.of(num).buffer).reverse();
    };

    _get_Uint32_color_from_rgba_values = (r, g , b, a) => {

        return new Uint32Array(Uint8ClampedArray.of(a, b, g, r).buffer)[0];
    };

    _get_uint32_from_hex = (hex) => {

        return parseInt(hex.slice(1), 16);
    };

    _get_hex_from_Uint32 = (num) => {

        return "#".concat("00000000".concat(num.toString(16)).slice(-8));
    };

    _rgb_to_hsl = (r = 0, g = 0, b = 0) => {

        r /= 255, g /= 255, b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if(max === min){
            h = s = 0; // achromatic
        }else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max){
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return Array.of(parseInt(h * 360), parseInt(s * 100), parseInt(l * 100));
    }


    _hsl_to_rgb = (h, s, l) => {

        h /= 360, s /= 100, l /= 100;

        let r, g, b;
        if (s === 0) {
            r = g = b = l;
        } else {
            const hue_to_rgb = function(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue_to_rgb(p, q, h + 1 / 3);
            g = hue_to_rgb(p, q, h);
            b = hue_to_rgb(p, q, h - 1 / 3);
        }

        return Uint8ClampedArray.of(r * 255, g * 255, b * 255);
    };

    _blend_colors = (color_a, color_b, amount = 1, should_return_transparent = false, alpha_addition = false, in_uint_32 = false) => {

        color_a = this._format_color(color_a, true);
        // If we blend the first color with the second with 0 "force", return transparent
        if(amount === 0 && color_b !== "hover" && should_return_transparent) {

            return in_uint_32 ? 0: "#00000000";
        }

        // Make sure we have a color based on the 4*2 hex char format

        if(color_b === "hover") {

            const rgba = this._get_rgba_from_Uint32(color_a);
            const hsl = this._rgb_to_hsl(rgba[0], rgba[1], rgba[2], rgba[3]);
            const rgb = this._hsl_to_rgb(hsl[0], hsl[1], parseInt(hsl[2] >= 50 ? hsl[2]/2: hsl[2]*2));
            color_b = this._get_Uint32_color_from_rgba_values(rgb[0], rgb[1], rgb[2], 255);
        }else {

            color_b = this._format_color(color_b, true);
        }
        // If the second color is transparent, return transparent
        if(should_return_transparent && color_b === 0 && amount === 1) { return in_uint_32 ? 0: "#00000000"; }

        // Extract RGBA from both colors
        const base = this._get_rgba_from_Uint32(color_a);
        const added = this._get_rgba_from_Uint32(color_b);

        if(added[3] === 255 && amount === 1) { return in_uint_32 ? color_b: this._get_hex_from_Uint32(color_b); }

        const ba3 = base[3] / 255;
        const ad3 = (added[3] / 255) * amount;

        let mix = new Uint8ClampedArray(4);
        let mi3 = 0;

        if (ba3 > 0 && ad3 > 0) {

            if(alpha_addition) {

                mi3 = ad3 + ba3;
            }else {

                mi3 = 1 - (1 - ad3) * (1 - ba3);
            }

            const ao = ad3 / mi3;
            const bo = ba3 * (1 - ad3) / mi3;

            mix[0] = parseInt(added[0] * ao + base[0] * bo); // red
            mix[1] = parseInt(added[1] * ao + base[1] * bo); // green
            mix[2] = parseInt(added[2] * ao + base[2] * bo); // blue
        }else if(ad3 > 0) {

            mi3 = added[3] / 255;

            mix[0] = added[0];
            mix[1] = added[1];
            mix[2] = added[2];
        }else {

            mi3 = base[3] / 255;

            mix[0] = base[0];
            mix[1] = base[1];
            mix[2] = base[2];
        }

        if(alpha_addition) {
            mi3 /= 2;
        }

        mix[3] = parseInt(mi3 * 255);

        if(in_uint_32){

            return this._get_Uint32_color_from_rgba_values(mix[0], mix[1], mix[2], mix[3]);
        }else {

            return this._get_hex_color_from_rgba_values(mix[0], mix[1], mix[2], mix[3]);
        }
    }

    _invert_hex_color = (color) => {

        const [r, g, b, a] = this._get_rgba_from_Uint32(this._format_color(color, true));
        return this._get_hex_color_from_rgba_values(255 - r, 255 - g, 255 - b, a);
    };

    _hex_sum = (hex_values) => {

        let sum = 0;
        hex_values.forEach((value) => {

            sum += parseInt(value, 16);
        });

        return sum.toString(16).padStart(2, "0");
    };

    _invert_pixel = (direction) => {

        const { _s_pxls, pxl_width, pxl_height, _base64_original_images, _original_image_index, _pxl_indexes_of_selection, _shape_index_a, _select_shape_index_a, _layer_index } = this.state;
        let {_imported_image_pxls, _imported_image_width, _imported_image_height} = this.state;

        let pxls = Array.from(_s_pxls[_layer_index]);

        let new_pxl_indexes_of_selection = new Set();

        let new_shape_index_a = _shape_index_a;
        let new_select_shape_index_a = _select_shape_index_a;

        let ns_pxls = [..._s_pxls];
        let x_scale = 1;
        let y_scale = 1;

        if(direction === "HORIZONTAL") {

            if(_imported_image_pxls.length) {

                let n_imported_image_pxls = new Array(_imported_image_pxls.length);

                _imported_image_pxls.forEach((pxl, index) => {

                    let x = index % _imported_image_width;
                    let y = (index - x) / _imported_image_width;
                    x = (_imported_image_width - 1) - x;
                    let new_index = y * _imported_image_width + x;

                    n_imported_image_pxls[new_index] = pxl;
                });

                _imported_image_pxls = n_imported_image_pxls;
            }else {

                _s_pxls[_layer_index].forEach((pxl, index) => {

                    let x = index % pxl_width;
                    let y = (index - x) / pxl_width;
                    x = (pxl_width - 1) - x;
                    let new_index = y * pxl_width + x;

                    pxls[new_index] = pxl;

                    if(_pxl_indexes_of_selection.has(index)) {

                        new_pxl_indexes_of_selection.add(new_index);
                    }

                    if(_shape_index_a === index) {

                        new_shape_index_a = new_index;
                    }

                    if(_select_shape_index_a === index) {

                        new_select_shape_index_a = new_index;
                    }

                });


                x_scale = -1;
                ns_pxls[_layer_index] = pxls;

            }

        }else {

            if(_imported_image_pxls.length) {

                let n_imported_image_pxls = new Array(_imported_image_pxls.length);

                _imported_image_pxls.forEach((pxl, index) => {

                    let x = index % _imported_image_width;
                    let y = (index - x) / _imported_image_width;
                    y = (_imported_image_height - 1) - y;
                    let new_index = y * _imported_image_width + x;

                    n_imported_image_pxls[new_index] = pxl;
                });

                _imported_image_pxls = n_imported_image_pxls;
            }else {

                _s_pxls[_layer_index].forEach((pxl, index) => {

                    let x = index % pxl_width;
                    let y = (index - x) / pxl_width;
                    y = (pxl_height - 1) - y;
                    let new_index = y * pxl_width + x;

                    pxls[new_index] = pxl;

                    if(_pxl_indexes_of_selection.has(index)) {

                        new_pxl_indexes_of_selection.add(new_index);
                    }

                    if(_shape_index_a === index) {

                        new_shape_index_a = new_index;
                    }

                    if(_select_shape_index_a === index) {

                        new_select_shape_index_a = new_index;
                    }
                });

                y_scale = -1;
                ns_pxls[_layer_index] = pxls;

            }

        }

        if(typeof _base64_original_images[_original_image_index] !== "undefined" && _layer_index === 0 && !_imported_image_pxls.length) {


            let image = new Image();
            image.onload = () => {

                let [ ctx, canvas ] = this._get_new_ctx_from_canvas(image.naturalWidth, image.naturalHeight);

                ctx.save();
                ctx.scale(x_scale, y_scale);
                ctx.drawImage(image, 0, 0, image.naturalWidth * x_scale, image.naturalHeight * y_scale);
                ctx.restore();

                const base64_original_image = image.src.includes("image/png") ?
                    canvas.toDataURL("image/png"):
                    canvas.toDataURL("image/jpeg");

                const new_base64_original_images = !_base64_original_images.includes(base64_original_image) ?
                    _base64_original_images.concat([base64_original_image]):
                    _base64_original_images;


                this.setState({
                    _shape_index_a: new_shape_index_a,
                    _select_shape_index_a: new_select_shape_index_a,
                    _pxl_indexes_of_selection: new_pxl_indexes_of_selection,
                    _s_pxls: ns_pxls,
                    _base64_original_images: new_base64_original_images,
                    _original_image_index: -1,
                    _is_there_new_dimension: true,
                    _imported_image_pxls
                }, () => {

                    this.setState({_original_image_index: new_base64_original_images.indexOf(base64_original_image), _last_action_timestamp: Date.now()});
                    this._update_canvas();
                })

            };
            image.src = _base64_original_images[_original_image_index];

        }else {


            this.setState({
                _shape_index_a: new_shape_index_a,
                _select_shape_index_a: new_select_shape_index_a,
                _pxl_indexes_of_selection: new_pxl_indexes_of_selection,
                _s_pxls: ns_pxls,
                _last_action_timestamp: Date.now(),
                _imported_image_pxls
            }, () => {

                this._update_canvas();
            });
        }
    };

    _get_darkest_color = (pxl_colors) => {

        let darkest_r_g_b_a = this._get_rgba_from_hex(pxl_colors[0]);

        pxl_colors.forEach((pxl_color) => {

            const current_rgba = this._get_rgba_from_hex(pxl_color);
            const current_rgb_sum = current_rgba[0] + current_rgba[1] + current_rgba[2];
            const darkest_rgb_sum = darkest_r_g_b_a[0] + darkest_r_g_b_a[1] + darkest_r_g_b_a[2];

            if(current_rgb_sum < darkest_rgb_sum) {

                darkest_r_g_b_a = current_rgba;
            }
        });

        return this._get_hex_color_from_rgba_values(darkest_r_g_b_a[0], darkest_r_g_b_a[1], darkest_r_g_b_a[2], 255);
    };

    _to_alpha = (color = "#000000ff", intensity = 1) => {

        const { _s_pxls, _s_pxl_colors, _layer_index } = this.state;
        const [ new_pxls, new_pxl_colors ] = this._pxl_colors_to_alpha(_s_pxls[_layer_index], _s_pxl_colors[_layer_index], color, intensity);

        let ns_pxl_colors = this.state._s_pxl_colors;
        ns_pxl_colors[_layer_index] = new_pxl_colors;

        let ns_pxls = this.state._s_pxls;
        ns_pxls[_layer_index] = new_pxls;

        this.setState({_s_pxls: ns_pxls, _s_pxl_colors: ns_pxl_colors, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    }

    _to_less_color = (threshold, callback_function = () => {}) => {

        const { _layer_index } = this.state;
        let { _s_pxls, _s_pxl_colors } = this.state;

        const color_number = _s_pxl_colors[_layer_index].length;
        this._remove_close_pxl_colors(Array.from(_s_pxls[_layer_index]), Uint32Array.from(_s_pxl_colors[_layer_index]), threshold).then(([pxls, pxl_colors]) => {

            _s_pxls[_layer_index] = Array.from(pxls);
            _s_pxl_colors[_layer_index] = Uint32Array.from(pxl_colors);

            const color_remaining_number = _s_pxl_colors[_layer_index].length;
            let results = {
                colors_removed: color_number - color_remaining_number,
                colors_remaining: color_remaining_number,
            };

            this.setState({_s_pxls, _s_pxl_colors, _last_action_timestamp: Date.now()}, () => {

                this._update_canvas();
                callback_function(results);
            });
        });
    };

    _auto_adjust_contrast = (intensity = 1) => {

        const { _layer_index } = this.state;
        let { _s_pxls, _s_pxl_colors } = this.state;

        [ _s_pxls[_layer_index], _s_pxl_colors[_layer_index] ] = this._pxl_adjust_contrast(_s_pxls[_layer_index], _s_pxl_colors[_layer_index], intensity);


        this.setState({_s_pxls, _s_pxl_colors, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    };

    _auto_adjust_saturation = (intensity = 1) => {

        const { _layer_index } = this.state;
        let { _s_pxls, _s_pxl_colors } = this.state;

        [ _s_pxls[_layer_index], _s_pxl_colors[_layer_index] ] = this._pxl_adjust_saturation(_s_pxls[_layer_index], _s_pxl_colors[_layer_index], intensity);

        this.setState({_s_pxls, _s_pxl_colors, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    };

    _pxl_adjust_saturation = (pxls, pxl_colors, intensity) => {

        let min_s = 100;
        let max_s = 0;

        pxl_colors.forEach((color_hex) => {

            const [r, g, b, a] = this._get_rgba_from_Uint32(color_hex);
            const [h, s, l] = this._rgb_to_hsl(r, g, b);

            if(s > max_s) {

                max_s = s;
            }
            if(s < min_s) {

                min_s = s;
            }
        });

        const alpha = 100 / Math.max(1, max_s - min_s);
        const beta = -min_s * alpha;

        pxl_colors = Array.from(pxl_colors).map((color_hex) => {

            const [r, g, b, a] = this._get_rgba_from_Uint32(color_hex);
            const [h, s, l] = this._rgb_to_hsl(r, g, b);
            const saturation = Math.min(100, Math.max(0, s * alpha + beta));
            const new_saturation = intensity * saturation + (1-intensity) * s;
            const [r1, g1, b1] = this._hsl_to_rgb(h, new_saturation, l);
            return this._get_Uint32_color_from_rgba_values(r1, g1, b1, a);
        });

        return [pxls, pxl_colors];
    };

    _auto_adjust_smoothness = () => {

        const { _layer_index } = this.state;
        let { _s_pxls, _s_pxl_colors } = this.state;

        [ _s_pxls[_layer_index], _s_pxl_colors[_layer_index] ] = this._pxl_adjust_smoothness(_s_pxls[_layer_index], _s_pxl_colors[_layer_index]);


        this.setState({_s_pxls, _s_pxl_colors, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });
    };

    _pxl_to_vignette = (pxls, pxl_colors, color, intensity, callback_function) => {

        color = this._format_color(color, true);

        const {pxl_width, pxl_height } = this.state;

        const [ctx] = this._get_new_ctx_from_canvas(pxl_width, pxl_height);

        // Create a radial gradient
        // The inner circle is at x=110, y=90, with radius=30
        // The outer circle is at x=100, y=100, with radius=70
        const max_width_height = Math.max(pxl_width, pxl_height);
        const inverted_color = this._invert_hex_color(color);

        let gradient = ctx.createRadialGradient(pxl_width / 2,pxl_height / 2,0, pxl_width / 2,pxl_height / 2, max_width_height / 2);

        gradient.addColorStop(1, color);
        gradient.addColorStop(0.85, this._blend_colors(color, inverted_color, 0.75));
        gradient.addColorStop(0, inverted_color);

        // Fill with gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, pxl_width, pxl_height);

        const canvas_image_data = ctx.getImageData(0, 0, pxl_width, pxl_height);
        let {new_pxls, new_pxl_colors} = this._get_pixels_palette_and_list_from_image_data(canvas_image_data, true, 0);

        this._remove_close_pxl_colors(new_pxls, new_pxl_colors, 255/6/255, null, 18).then( ([new_pxls, new_pxl_colors]) => {

            [new_pxls, new_pxl_colors] = this._pxl_colors_to_alpha(new_pxls, new_pxl_colors, inverted_color, 1);

            const [r, g, b, a] = this._get_rgba_from_Uint32(color);
            new_pxl_colors = new_pxl_colors.map((pxl_color, color_index) => {

                const [p_r, p_g, p_b, p_a] = this._get_rgba_from_Uint32(pxl_color);
                return this._get_Uint32_color_from_rgba_values(r, g, b, p_a);
            });

            let brand_new_pxl_colors = [];
            new_pxls = new_pxls.map((pxl, index) => {

                const pxl_color = new_pxl_colors[pxl];
                const old_pxl_color = pxl_colors[pxls[index]];

                const new_color = this._blend_colors(old_pxl_color, pxl_color, intensity, false, false, true);

                if (brand_new_pxl_colors.indexOf(new_color) === -1) {

                    brand_new_pxl_colors.push(new_color);
                }

                const new_color_index = brand_new_pxl_colors.indexOf(new_color);

                return new_color_index;
            });

            new_pxl_colors = brand_new_pxl_colors;

            callback_function(Array.of(Array.from(new_pxls), Uint32Array.from(new_pxl_colors)));
        });
    };

    _to_vignette = (color, intensity) => {

        if(intensity > 0) {

            const {_layer_index} = this.state;
            let {_s_pxls, _s_pxl_colors} = this.state;

            this._pxl_to_vignette(_s_pxls[_layer_index], _s_pxl_colors[_layer_index], color, intensity, (result) => {

                [_s_pxls[_layer_index], _s_pxl_colors[_layer_index]] = result;

                this.setState({_s_pxls, _s_pxl_colors, _last_action_timestamp: Date.now()}, () => {

                    this._update_canvas();
                });

            });
        }
    };


    _to_colorized = (hue_or_mode = null, opacity = null, blend_with_a_saturation_of = null, blend_with_a_luminosity_of = null) => {

        const { _s_pxl_colors, _layer_index } = this.state;
        let mode = hue_or_mode !== null && hue_or_mode >= 0 && hue_or_mode <= 360 ? "hue": hue_or_mode === "sepia" ? "sepia": "greyscale";
        opacity = opacity === null ? 1: opacity;

        const _new_pxl_colors = _s_pxl_colors[_layer_index].map((color) => {

            color = this._format_color(color, true);

            let [r, g, b, a] = this._get_rgba_from_Uint32(color);

            if(mode === "greyscale") {

                const average = (r + g + b) / 3;
                color = this._get_Uint32_color_from_rgba_values(average, average, average,a * opacity);
            }else if(mode === "sepia"){

                function limit_to(n, l) {

                    return n > l ? l: n;
                }

                const s_r = limit_to((r * .393) + (g *.769) + (b * .189), 255);
                const s_g = limit_to((r * .349) + (g *.686) + (b * .168), 255);
                const s_b = limit_to((r * .272) + (g *.534) + (b * .131), 255);

                color = this._get_Uint32_color_from_rgba_values(s_r, s_g, s_b, parseInt(a * opacity));
            }else if(mode === "hue") {

                const [r, g, b, a] = this._get_rgba_from_Uint32(color);
                let [hue, saturation, luminosity] = this._rgb_to_hsl(r, g, b);

                let added = [blend_with_a_saturation_of, blend_with_a_luminosity_of, opacity];
                let base = [saturation, luminosity, 1];
                let mix = [];

                if (opacity !== 0) {

                    mix[2] = 1 - (1 - added[2]) * (1 - base[2]); // alpha
                    mix[0] = Math.round((added[0] * added[2] / mix[2]) + (base[0] * base[2] * (1 - added[2]) / mix[2])); // red
                    mix[1] = Math.round((added[1] * added[2] / mix[2]) + (base[1] * base[2] * (1 - added[2]) / mix[2])); // green
                }else {

                    mix = [saturation, luminosity];
                }

                const [h_r, h_g, h_b] = this._hsl_to_rgb(hue_or_mode, mix[0], mix[1]);

                if (a === 0) {

                    color = 0;
                }else {

                    color = this._get_Uint32_color_from_rgba_values(h_r, h_g, h_b, a);
                }

            }

            return this._format_color(color);
        });

        let ns_pxl_colors = this.state._s_pxl_colors;
        ns_pxl_colors[_layer_index] = _new_pxl_colors;

        this.setState({_s_pxl_colors: ns_pxl_colors, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
            //this._remove_duplicate_pxl_colors();
        });
    };

    _get_filters = () => {

        return {
            "...none": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "g": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "b": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255)
            },
            ".1997": {
                "a": Uint8ClampedArray.of(0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31, 32, 34, 35, 37, 38, 39, 41, 42, 44, 45, 46, 48, 49, 50, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 146, 147, 148, 149, 150, 151, 152, 153, 153, 154, 155, 156, 157, 158, 159, 160, 160, 161, 162, 163, 164, 165, 166, 166, 167, 168, 169, 170, 171, 172, 172, 173, 174, 175, 176, 177, 178, 178, 179, 180, 181, 182, 183, 183, 184, 185, 186, 187, 188, 188, 189, 190, 191, 192, 193, 193, 194, 195, 196, 197, 198, 199, 199, 200, 201, 202, 203, 204, 204, 205, 206, 207, 208, 209, 209, 210, 211, 212, 213, 214, 215, 215, 216, 217, 218, 219, 220, 221, 221, 222, 223, 224, 225, 226, 227, 227, 228, 229, 230, 231, 232, 233, 233, 234, 235, 236, 237, 238, 239, 240, 241, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 59, 60, 60, 61, 62, 62, 63, 63, 64, 64, 65, 66, 66, 67, 67, 68, 69, 69, 70, 70, 71, 72, 72, 73, 74, 74, 75, 76, 77, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 102, 103, 104, 105, 106, 108, 109, 110, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 133, 134, 135, 136, 137, 138, 140, 141, 142, 143, 144, 146, 147, 148, 149, 151, 152, 153, 154, 156, 157, 158, 160, 161, 162, 164, 165, 166, 168, 169, 170, 172, 173, 175, 176, 177, 179, 180, 182, 183, 185, 186, 188, 189, 191, 192, 193, 194, 196, 197, 198, 199, 200, 201, 202, 203, 204, 204, 205, 206, 206, 207, 208, 208, 209, 209, 210, 210, 211, 211, 212, 212, 212, 213, 213, 213, 213, 213, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 215, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 213, 213, 213, 213, 213, 213, 213, 212, 212, 212, 212, 212),
                "g": Uint8ClampedArray.of(40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43, 44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 47, 47, 48, 48, 48, 49, 49, 50, 50, 51, 52, 52, 53, 54, 54, 55, 56, 57, 58, 59, 60, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158, 160, 161, 162, 163, 164, 166, 167, 168, 169, 171, 172, 173, 174, 175, 176, 178, 179, 180, 181, 182, 183, 185, 186, 187, 188, 189, 190, 191, 192, 193, 195, 196, 197, 198, 199, 200, 201, 202, 203, 205, 206, 207, 208, 209, 210, 211, 212, 214, 215, 216, 217, 218, 220, 221, 222, 223, 225, 226, 227, 228, 230, 231, 232, 233, 235, 236, 237, 239, 240, 241, 242, 244, 245, 246, 247, 249, 250, 251, 252, 254, 255, 255),
                "b": Uint8ClampedArray.of(45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 46, 46, 47, 47, 47, 48, 48, 48, 48, 49, 49, 49, 50, 50, 50, 51, 51, 51, 52, 52, 53, 53, 54, 54, 55, 56, 56, 57, 58, 59, 60, 61, 62, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 96, 97, 98, 99, 100, 102, 103, 104, 105, 107, 108, 109, 110, 112, 113, 114, 115, 117, 118, 119, 120, 122, 123, 124, 126, 127, 128, 130, 131, 133, 134, 135, 137, 138, 140, 141, 143, 144, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 159, 160, 161, 162, 164, 165, 166, 167, 168, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 184, 185, 186, 187, 188, 188, 189, 190, 191, 192, 193, 193, 194, 195, 195, 196, 196, 196, 197, 197, 197, 197, 198, 198, 198, 198, 198, 198, 198, 198, 198, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 198, 198, 198, 198, 198, 198, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 197, 198, 198, 198, 198, 198, 198, 198)
            },
            ".Brannan": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 52, 53, 54, 55, 56, 57, 59, 60, 62, 63, 64, 66, 67, 68, 69, 70, 71, 71, 72, 73, 73, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 83, 83, 84, 85, 86, 87, 88, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 124, 125, 126, 128, 129, 130, 132, 133, 134, 136, 137, 139, 140, 141, 143, 144, 146, 147, 149, 150, 152, 153, 154, 156, 157, 159, 160, 162, 163, 164, 166, 167, 169, 170, 171, 173, 174, 175, 177, 178, 179, 181, 182, 183, 185, 186, 187, 189, 190, 192, 193, 195, 196, 198, 199, 201, 203, 204, 206, 207, 209, 210, 212, 213, 215, 216, 217, 219, 220, 221, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 236, 237, 238, 239, 239, 240, 241, 241, 242, 243, 243, 244, 244, 245, 246, 246, 247, 247, 248, 248, 249, 249, 249, 250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 254, 254),
                "g": Uint8ClampedArray.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 38, 39, 40, 41, 43, 44, 45, 47, 48, 50, 51, 53, 54, 56, 57, 59, 61, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 87, 89, 91, 93, 95, 97, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 161, 163, 165, 167, 168, 170, 172, 173, 175, 176, 178, 179, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 193, 194, 195, 196, 196, 197, 198, 198, 199, 200, 200, 201, 202, 202, 203, 203, 204, 204, 205, 205, 206, 207, 207, 208, 208, 209, 210, 210, 211, 212, 212, 213, 214, 214, 215, 216, 217, 217, 218, 219, 219, 220, 221, 221, 222, 222, 223, 224, 224, 225, 225, 226, 226, 227, 228, 228, 229, 229, 229, 230, 230, 231, 231, 232, 232, 233, 233, 233, 234, 234, 234, 235, 235, 236, 236, 236, 237, 237, 237, 238, 238, 239, 239, 239, 240, 240, 240, 241, 241, 241, 242, 242, 242, 243, 243, 243, 244, 244, 244, 245, 245, 245, 246, 246, 247, 247, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 252, 252),
                "b": Uint8ClampedArray.of(48, 48, 48, 48, 48, 48, 48, 48, 49, 49, 49, 49, 49, 49, 49, 50, 50, 50, 51, 51, 51, 52, 52, 53, 53, 54, 54, 54, 55, 55, 56, 56, 57, 57, 58, 58, 59, 60, 60, 61, 61, 62, 62, 63, 64, 64, 65, 66, 66, 67, 68, 68, 69, 70, 71, 71, 72, 73, 74, 75, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 141, 142, 143, 144, 145, 146, 146, 147, 148, 148, 149, 150, 151, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 178, 179, 180, 181, 181, 182, 183, 183, 184, 184, 185, 185, 185, 186, 186, 187, 187, 187, 188, 188, 188, 189, 189, 190, 190, 191, 191, 192, 193, 193, 194, 195, 195, 196, 197, 198, 199, 200, 200, 201, 202, 203, 204, 205, 206, 206, 207, 208, 209, 210, 211, 211, 212, 213, 214, 214, 215, 216, 216, 217, 218, 218, 219, 219, 220, 220, 221, 222, 222, 222, 223, 223, 224, 224, 224, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225)
            },
            ".Gotham": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 51, 52, 53, 54, 55, 56, 57, 59, 60, 62, 63, 64, 66, 67, 68, 69, 70, 71, 71, 72, 73, 73, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 83, 83, 84, 85, 86, 87, 88, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 124, 125, 126, 128, 129, 130, 132, 133, 134, 136, 137, 139, 140, 141, 143, 144, 146, 147, 149, 150, 152, 153, 154, 156, 157, 159, 160, 162, 163, 164, 166, 167, 169, 170, 171, 173, 174, 175, 177, 178, 179, 181, 182, 183, 185, 186, 187, 189, 190, 192, 193, 195, 196, 198, 199, 201, 203, 204, 206, 207, 209, 210, 212, 213, 215, 216, 217, 219, 220, 221, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 236, 237, 238, 239, 239, 240, 241, 241, 242, 243, 243, 244, 244, 245, 246, 246, 247, 247, 248, 248, 249, 249, 249, 250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 254, 254, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 254, 254, 254, 254, 254),
                "g": Uint8ClampedArray.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 38, 39, 40, 41, 43, 44, 45, 47, 48, 50, 51, 53, 54, 56, 57, 59, 61, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 87, 89, 91, 93, 95, 97, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 161, 163, 165, 167, 168, 170, 172, 173, 175, 176, 178, 179, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 193, 194, 195, 196, 196, 197, 198, 198, 199, 200, 200, 201, 202, 202, 203, 203, 204, 204, 205, 205, 206, 207, 207, 208, 208, 209, 210, 210, 211, 212, 212, 213, 214, 214, 215, 216, 217, 217, 218, 219, 219, 220, 221, 221, 222, 222, 223, 224, 224, 225, 225, 226, 226, 227, 228, 228, 229, 229, 229, 230, 230, 231, 231, 232, 232, 233, 233, 233, 234, 234, 234, 235, 235, 236, 236, 236, 237, 237, 237, 238, 238, 239, 239, 239, 240, 240, 240, 241, 241, 241, 242, 242, 242, 243, 243, 243, 244, 244, 244, 245, 245, 245, 246, 246, 247, 247, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 252, 252),
                "b": Uint8ClampedArray.of(48, 48, 48, 48, 48, 48, 48, 48, 49, 49, 49, 49, 49, 49, 49, 50, 50, 50, 51, 51, 51, 52, 52, 53, 53, 54, 54, 54, 55, 55, 56, 56, 57, 57, 58, 58, 59, 60, 60, 61, 61, 62, 62, 63, 64, 64, 65, 66, 66, 67, 68, 68, 69, 70, 71, 71, 72, 73, 74, 75, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 141, 142, 143, 144, 145, 146, 146, 147, 148, 148, 149, 150, 151, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 178, 179, 180, 181, 181, 182, 183, 183, 184, 184, 185, 185, 185, 186, 186, 187, 187, 187, 188, 188, 188, 189, 189, 190, 190, 191, 191, 192, 193, 193, 194, 195, 195, 196, 197, 198, 199, 200, 200, 201, 202, 203, 204, 205, 206, 206, 207, 208, 209, 210, 211, 211, 212, 213, 214, 214, 215, 216, 216, 217, 218, 218, 219, 219, 220, 220, 221, 222, 222, 222, 223, 223, 224, 224, 224, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225, 225)
            },
            ".Gingham": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(44,44,44,44,45,45,45,45,45,45,46,46,46,46,46,47,47,47,47,48,48,48,49,49,49,50,50,51,51,52,52,53,54,54,55,56,57,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,74,75,76,78,79,81,82,83,85,86,88,89,90,92,93,95,96,98,99,101,102,104,105,107,109,110,112,113,115,116,118,119,121,122,124,125,127,128,130,131,133,134,136,137,138,140,141,142,143,145,146,147,148,149,150,151,152,153,154,155,156,156,157,158,159,160,160,161,162,163,163,164,165,165,166,167,168,168,169,170,170,171,171,172,173,173,174,175,175,176,176,177,177,178,179,179,180,180,181,181,182,182,183,183,184,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,192,192,192,193,193,194,194,195,195,195,196,196,197,197,197,198,198,199,199,199,200,200,201,201,201,202,202,203,203,203,204,204,205,205,205,206,206,207,207,207,208,208,209,209,209,210,210,210,211,211,211,212,212,212,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,213,213,213,213,213,213,213,213,213,213),
                "g": Uint8ClampedArray.of(44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,46,46,46,47,47,47,48,48,49,49,50,51,51,52,53,54,54,55,56,57,58,59,61,62,63,64,65,66,68,69,70,71,73,74,75,77,78,79,81,82,84,85,87,88,89,91,92,94,95,97,98,100,101,103,104,106,107,109,110,112,113,115,116,118,119,121,122,124,125,127,128,130,131,133,134,135,137,138,139,141,142,143,145,146,147,148,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,168,169,170,171,171,172,173,173,174,175,176,176,177,177,178,179,179,180,181,181,182,182,183,183,184,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,191,192,192,193,193,193,194,194,195,195,195,196,196,196,197,197,198,198,198,199,199,199,200,200,200,201,201,201,202,202,202,203,203,203,204,204,204,205,205,205,206,206,206,207,207,207,208,208,208,209,209,209,210,210,210,211,211,211,212,212,212,212,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,213,213,213,213,213,213),
                "b": Uint8ClampedArray.of(45,45,45,45,45,45,46,46,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,50,50,51,51,52,52,53,53,54,54,55,56,57,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,75,76,77,79,80,82,83,84,86,87,89,90,91,93,94,96,97,98,100,101,102,104,104,106,107,108,109,111,112,113,115,116,117,119,120,121,123,124,125,127,128,129,131,132,134,135,136,138,139,140,142,143,144,146,147,148,150,151,152,153,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,179,180,181,181,182,183,183,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,192,192,193,193,193,194,194,194,195,195,196,196,196,197,197,197,198,198,198,198,199,199,199,200,200,200,200,201,201,201,201,202,202,202,203,203,203,203,203,204,204,204,204,205,205,205,205,206,206,206,206,207,207,207,208,208,208,208,209,209,209,209,209,210,210,210,210,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213)
            },
            ".Hefe": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 34, 35, 36, 38, 39, 41, 43, 45, 48, 50, 52, 54, 56, 58, 60, 62, 64, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 117, 119, 121, 123, 125, 126, 128, 130, 132, 133, 135, 137, 139, 140, 142, 144, 146, 147, 149, 151, 152, 154, 155, 157, 158, 160, 161, 163, 164, 166, 167, 168, 170, 171, 172, 173, 175, 176, 177, 178, 179, 180, 181, 182, 184, 185, 186, 187, 188, 189, 190, 190, 191, 192, 193, 194, 195, 196, 197, 197, 198, 199, 200, 201, 201, 202, 203, 204, 204, 205, 205, 206, 206, 207, 207, 208, 208, 209, 209, 210, 210, 211, 211, 212, 212, 213, 213, 214, 214, 215, 215, 216, 216, 217, 217, 218, 218, 219, 219, 220, 220, 221, 221, 221, 222, 222, 223, 223, 224, 224, 225, 225, 225, 226, 226, 227, 227, 228, 228, 228, 229, 229, 230, 230, 231, 231, 231, 232, 232, 233, 233, 233, 234, 234, 235, 235, 235, 236, 236, 236, 237, 237, 238, 238, 238, 239, 239, 239, 240, 240, 240, 241, 241, 242, 242, 242, 243, 243, 243, 244, 244, 245, 245, 245, 246, 246, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252),
                "g": Uint8ClampedArray.of(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 30, 31, 33, 34, 36, 37, 39, 40, 42, 44, 45, 47, 49, 50, 52, 54, 56, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 78, 80, 82, 85, 87, 89, 92, 94, 97, 99, 102, 104, 106, 109, 111, 114, 116, 118, 121, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 146, 148, 150, 152, 154, 156, 157, 159, 161, 163, 164, 166, 168, 169, 171, 173, 174, 176, 178, 179, 181, 182, 184, 185, 187, 188, 190, 191, 192, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 205, 206, 207, 207, 208, 209, 209, 210, 210, 211, 211, 211, 212, 212, 213, 213, 213, 214, 214, 215, 215, 216, 216, 216, 217, 217, 218, 218, 219, 219, 220, 220, 220, 221, 221, 222, 222, 222, 223, 223, 224, 224, 225, 225, 225, 226, 226, 227, 227, 228, 228, 228, 229, 229, 230, 230, 231, 231, 232, 232, 232, 233, 233, 234, 234, 235, 235, 236, 236, 237, 237, 238, 238, 239, 239, 239, 240, 240, 241, 241, 242, 242, 243, 244, 244, 245, 246, 246, 247, 248, 249, 249, 250, 250, 251, 251, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252, 252),
                "b": Uint8ClampedArray.of(2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 12, 12, 13, 13, 14, 15, 15, 16, 17, 17, 18, 19, 19, 20, 21, 22, 23, 24, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 43, 45, 47, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 87, 89, 91, 93, 95, 96, 98, 100, 101, 103, 105, 107, 108, 110, 112, 113, 115, 117, 118, 120, 122, 123, 125, 127, 128, 130, 131, 133, 135, 136, 138, 140, 141, 143, 145, 146, 148, 149, 151, 153, 154, 156, 158, 159, 161, 163, 164, 166, 167, 169, 170, 171, 173, 174, 175, 177, 178, 179, 180, 182, 183, 184, 185, 186, 187, 189, 190, 191, 192, 193, 194, 195, 195, 196, 197, 198, 198, 199, 200, 200, 201, 201, 202, 202, 203, 203, 204, 204, 204, 205, 205, 205, 206, 206, 206, 207, 207, 207, 207, 208, 208, 209, 209, 209, 210, 210, 211, 211, 211, 212, 212, 213, 213, 214, 214, 214, 215, 215, 216, 216, 216, 217, 217, 218, 218, 218, 219, 219, 220, 220, 220, 221, 221, 222, 222, 222, 223, 223, 224, 224, 225, 225, 226, 226, 227, 227, 227, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228, 228)
            },
            ".Lordkelvin": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(43, 44, 46, 47, 49, 50, 52, 53, 55, 56, 58, 59, 61, 62, 64, 65, 67, 69, 70, 72, 73, 75, 77, 78, 80, 81, 83, 85, 86, 88, 90, 91, 93, 95, 96, 98, 100, 102, 103, 105, 107, 109, 111, 112, 114, 116, 118, 120, 121, 123, 125, 127, 129, 130, 132, 134, 136, 137, 139, 141, 142, 144, 146, 147, 149, 151, 152, 154, 155, 157, 158, 160, 162, 163, 165, 166, 168, 169, 171, 172, 174, 175, 176, 178, 179, 180, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 201, 202, 203, 204, 204, 205, 206, 207, 207, 208, 209, 210, 210, 211, 212, 212, 213, 214, 214, 215, 216, 217, 217, 218, 219, 219, 220, 221, 222, 222, 223, 224, 224, 225, 225, 226, 227, 227, 228, 228, 229, 229, 229, 230, 230, 231, 231, 232, 232, 232, 233, 233, 233, 234, 234, 235, 235, 235, 236, 236, 236, 237, 237, 237, 238, 238, 239, 239, 239, 240, 240, 240, 241, 241, 241, 242, 242, 242, 243, 243, 243, 243, 244, 244, 244, 245, 245, 245, 245, 245, 246, 246, 246, 246, 246, 247, 247, 247, 247, 247, 248, 248, 248, 248, 248, 248, 249, 249, 249, 249, 249, 249, 249, 250, 250, 250, 250, 250, 250, 250, 250, 251, 251, 251, 251, 251, 251, 251, 251, 251, 252, 252, 252, 252, 252, 252, 252, 252, 252, 253, 253, 253, 253, 253, 253, 253, 253, 254, 254, 254, 254, 254),
                "g": Uint8ClampedArray.of(36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 38, 38, 38, 39, 39, 40, 40, 41, 41, 42, 43, 43, 44, 45, 46, 47, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 155, 156, 157, 158, 158, 159, 160, 160, 161, 161, 162, 163, 163, 164, 164, 165, 165, 166, 166, 167, 167, 168, 168, 168, 169, 169, 170, 171, 171, 172, 172, 173, 173, 174, 174, 175, 175, 176, 177, 177, 178, 178, 179, 179, 180, 180, 181, 181, 182, 182, 182, 183, 183, 184, 184, 184, 185, 185, 185, 186, 186, 186, 186, 187, 187, 187, 187, 188, 188, 188, 188, 188, 189, 189, 189, 189, 189, 190, 190, 190, 190, 190, 190, 190, 191, 191, 191, 191, 191, 191, 191, 191, 192, 192, 192, 192, 192, 192, 192, 192, 193, 193, 193, 193, 193, 193, 193, 193, 194, 194, 194, 194, 194, 194, 194, 195, 195, 195, 195),
                "b": Uint8ClampedArray.of(69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71, 71, 71, 72, 72, 73, 73, 73, 74, 74, 75, 75, 76, 76, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 82, 82, 83, 83, 84, 84, 84, 85, 85, 86, 86, 86, 87, 87, 87, 88, 88, 88, 89, 89, 90, 90, 90, 91, 91, 91, 92, 92, 93, 93, 93, 94, 94, 95, 95, 96, 96, 96, 97, 97, 98, 99, 99, 100, 100, 101, 101, 102, 102, 102, 103, 103, 103, 104, 104, 104, 105, 105, 105, 106, 106, 106, 106, 107, 107, 107, 107, 108, 108, 108, 108, 109, 109, 109, 110, 110, 110, 111, 111, 111, 111, 112, 112, 112, 113, 113, 113, 114, 114, 114, 115, 115, 115, 115, 116, 116, 116, 116, 117, 117, 117, 117, 117, 118, 118, 118, 118, 118, 118, 119, 119, 119, 119, 119, 119, 119, 120, 120, 120, 120, 120, 120, 120, 120, 120, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 122, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123, 124, 124, 124, 124, 124, 124)
            },
            ".Nashville": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 57, 57, 58, 58, 59, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 95, 96, 98, 100, 102, 104, 106, 108, 110, 113, 115, 117, 120, 122, 124, 127, 129, 131, 133, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 155, 157, 159, 160, 162, 164, 165, 167, 168, 170, 171, 173, 174, 175, 177, 178, 179, 181, 182, 183, 185, 186, 187, 189, 190, 191, 192, 194, 195, 196, 197, 198, 200, 201, 202, 203, 204, 205, 206, 208, 209, 209, 210, 211, 212, 213, 214, 215, 216, 217, 217, 218, 219, 220, 220, 221, 222, 223, 223, 224, 225, 226, 226, 227, 228, 228, 229, 230, 230, 231, 231, 232, 233, 233, 234, 234, 235, 235, 236, 237, 237, 238, 238, 239, 239, 240, 240, 240, 241, 241, 242, 242, 243, 243, 243, 244, 244, 245, 245, 245, 246, 246, 246, 247, 247, 247, 248, 248, 248, 248, 249, 249, 249, 249, 250, 250, 250, 250, 251, 251, 251, 251, 251, 252, 252, 252, 252, 252, 253, 253, 253, 253, 253, 254, 254, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255),
                "g": Uint8ClampedArray.of(38, 39, 39, 40, 41, 41, 42, 42, 43, 44, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 55, 56, 57, 59, 60, 61, 63, 64, 65, 67, 68, 69, 71, 72, 73, 74, 76, 77, 78, 80, 81, 82, 84, 85, 86, 87, 89, 90, 91, 93, 94, 95, 97, 98, 99, 101, 102, 103, 104, 106, 107, 108, 110, 111, 112, 114, 115, 116, 118, 119, 121, 122, 123, 125, 126, 128, 129, 130, 132, 133, 134, 136, 137, 138, 140, 141, 142, 143, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 158, 159, 160, 161, 162, 163, 163, 164, 165, 166, 166, 167, 168, 169, 169, 170, 171, 172, 172, 173, 174, 175, 176, 176, 177, 178, 179, 180, 181, 181, 182, 183, 184, 185, 186, 187, 187, 188, 189, 189, 190, 191, 191, 192, 193, 193, 194, 194, 195, 195, 196, 197, 197, 198, 198, 199, 199, 200, 200, 201, 201, 202, 202, 202, 203, 203, 204, 204, 205, 205, 205, 206, 206, 207, 207, 207, 208, 208, 208, 209, 209, 209, 210, 210, 210, 211, 211, 211, 212, 212, 212, 213, 213, 213, 213, 214, 214, 214, 214, 215, 215, 215, 215, 216, 216, 216, 216, 216, 217, 217, 217, 217, 217, 218, 218, 218, 218, 218, 218, 219, 219, 219, 219, 219, 220, 220, 220, 220, 220, 220, 220, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221, 221),
                "b": Uint8ClampedArray.of(97, 98, 98, 99, 99, 100, 100, 101, 101, 102, 102, 103, 104, 104, 105, 105, 106, 107, 107, 108, 109, 110, 110, 111, 112, 113, 114, 114, 115, 116, 116, 117, 118, 118, 119, 119, 120, 120, 121, 121, 122, 122, 123, 123, 124, 124, 124, 125, 125, 126, 126, 127, 127, 127, 128, 128, 129, 129, 129, 130, 130, 131, 131, 132, 132, 132, 133, 133, 134, 134, 135, 135, 136, 136, 136, 137, 137, 138, 138, 139, 139, 139, 140, 140, 141, 141, 142, 142, 142, 143, 143, 144, 144, 144, 145, 145, 146, 146, 147, 147, 147, 148, 148, 149, 149, 150, 150, 151, 151, 151, 152, 152, 153, 153, 154, 154, 154, 155, 155, 155, 156, 156, 156, 157, 157, 157, 158, 158, 158, 158, 158, 158, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 160, 160, 160, 160, 160, 161, 161, 161, 162, 162, 162, 162, 163, 163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 165, 165, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 169, 169, 169, 169, 169, 170, 170, 170, 170, 171, 171, 171, 171, 171, 172, 172, 172, 172, 172, 173, 173, 173, 173, 173, 173, 173, 174, 174, 174, 174, 174, 174, 174, 174, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 176, 176, 176, 176, 176, 176, 176, 176, 176, 176)
            },
            ".Xpro": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7, 7, 8, 8, 9, 9, 10, 11, 11, 12, 13, 14, 14, 15, 16, 17, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 37, 38, 39, 41, 42, 43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 58, 60, 62, 63, 65, 67, 68, 70, 72, 74, 76, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 172, 174, 176, 178, 180, 182, 184, 186, 188, 189, 191, 193, 194, 196, 198, 199, 201, 202, 204, 205, 207, 208, 209, 211, 212, 214, 215, 216, 217, 219, 220, 221, 222, 223, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 239, 240, 241, 242, 243, 243, 244, 245, 246, 246, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 252, 252, 253, 253, 253, 253, 253, 253, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255),
                "g": Uint8ClampedArray.of(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 12, 12, 13, 14, 14, 15, 16, 17, 18, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 39, 40, 41, 43, 44, 45, 47, 48, 50, 51, 53, 54, 56, 57, 59, 61, 62, 64, 66, 67, 69, 71, 73, 75, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 161, 163, 165, 167, 169, 171, 173, 175, 176, 178, 180, 182, 183, 185, 187, 189, 190, 192, 193, 195, 197, 198, 200, 201, 203, 204, 206, 207, 209, 210, 211, 213, 214, 216, 217, 218, 219, 221, 222, 223, 224, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 237, 238, 239, 240, 240, 241, 242, 243, 243, 244, 244, 245, 246, 246, 247, 247, 248, 248, 249, 249, 250, 250, 250, 251, 251, 252, 252, 252, 253, 253, 253, 253, 253, 253, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255),
                "b": Uint8ClampedArray.of(24, 25, 26, 27, 28, 28, 29, 30, 31, 32, 33, 34, 35, 35, 36, 37, 38, 39, 40, 41, 41, 42, 43, 44, 45, 45, 46, 47, 48, 49, 49, 50, 51, 52, 53, 53, 54, 55, 56, 56, 57, 58, 59, 59, 60, 61, 62, 62, 63, 64, 64, 65, 66, 67, 67, 68, 69, 70, 70, 71, 72, 73, 73, 74, 75, 76, 77, 77, 78, 79, 80, 81, 81, 82, 83, 84, 85, 86, 86, 87, 88, 89, 90, 91, 91, 92, 93, 94, 95, 96, 96, 97, 98, 99, 100, 101, 101, 102, 103, 104, 105, 106, 107, 107, 108, 109, 110, 111, 112, 113, 114, 114, 115, 116, 117, 118, 119, 119, 120, 121, 122, 123, 124, 124, 125, 126, 127, 127, 128, 129, 129, 130, 130, 131, 131, 132, 132, 133, 134, 134, 135, 136, 137, 138, 138, 139, 140, 141, 142, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 162, 163, 164, 165, 165, 166, 167, 168, 168, 169, 170, 171, 171, 172, 173, 173, 174, 175, 176, 176, 177, 178, 178, 179, 180, 181, 182, 182, 183, 184, 185, 185, 186, 187, 188, 189, 189, 190, 191, 192, 193, 193, 194, 195, 196, 197, 197, 198, 199, 200, 200, 201, 202, 203, 204, 204, 205, 206, 206, 207, 208, 208, 209, 210, 210, 211, 212, 212, 213, 214, 215, 215, 216, 217, 218, 218, 219, 220, 221, 221, 222, 223, 224, 225, 226, 226, 227, 228, 229)
            },
            "XMAT": {
                "a": Uint8ClampedArray.of(0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11, 11, 12, 13, 13, 14, 15, 15, 16, 17, 18, 18, 19, 20, 21, 21, 22, 23, 24, 24, 25, 26, 27, 27, 28, 29, 30, 31, 31, 32, 33, 34, 35, 36, 36, 37, 38, 39, 40, 41, 42, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 80, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 104, 105, 107, 109, 110, 112, 114, 115, 117, 119, 121, 122, 124, 126, 127, 129, 131, 133, 134, 136, 138, 139, 141, 143, 145, 146, 148, 150, 151, 153, 155, 156, 158, 160, 161, 163, 164, 166, 167, 169, 170, 172, 173, 175, 176, 178, 179, 180, 182, 183, 184, 186, 187, 188, 189, 190, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 207, 208, 209, 210, 211, 212, 213, 213, 214, 215, 216, 217, 217, 218, 219, 220, 220, 221, 222, 223, 223, 224, 225, 225, 226, 227, 228, 228, 229, 229, 230, 231, 231, 232, 233, 233, 234, 234, 235, 236, 236, 237, 237, 238, 239, 239, 240, 240, 241, 241, 242, 242, 243, 243, 244, 245, 245, 246, 246, 247, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 252, 253, 253, 254, 254, 255),
                "r": Uint8ClampedArray.of(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 94, 95, 96, 97, 98, 100, 101, 102, 103, 105, 106, 107, 108, 110, 111, 112, 114, 115, 116, 118, 119, 120, 122, 123, 125, 126, 127, 129, 130, 131, 133, 134, 136, 137, 138, 140, 141, 143, 144, 145, 147, 148, 150, 151, 152, 154, 155, 156, 158, 159, 161, 162, 163, 165, 166, 167, 169, 170, 171, 173, 174, 175, 176, 178, 179, 180, 181, 183, 184, 185, 186, 188, 189, 190, 191, 192, 193, 194, 195, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 207, 208, 209, 210, 211, 212, 213, 214, 215, 215, 216, 217, 218, 219, 219, 220, 221, 222, 222, 223, 224, 225, 225, 226, 227, 228, 228, 229, 230, 230, 231, 232, 232, 233, 234, 234, 235, 235, 236, 237, 237, 238, 239, 239, 240, 240, 241, 241, 242, 243, 243, 244, 244, 245, 245, 246, 247, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 253, 253, 254, 254, 255),
                "g": Uint8ClampedArray.of(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 90, 91, 92, 94, 95, 96, 97, 99, 100, 101, 103, 104, 105, 107, 108, 110, 111, 112, 114, 115, 117, 118, 120, 121, 123, 124, 126, 127, 129, 130, 132, 133, 135, 136, 138, 140, 141, 143, 144, 146, 147, 149, 150, 152, 153, 155, 156, 158, 159, 161, 162, 163, 165, 166, 168, 169, 170, 172, 173, 174, 176, 177, 178, 180, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 198, 199, 200, 201, 202, 203, 204, 205, 206, 206, 207, 208, 209, 210, 210, 211, 212, 213, 214, 214, 215, 216, 217, 217, 218, 219, 219, 220, 221, 222, 222, 223, 224, 224, 225, 226, 226, 227, 228, 228, 229, 229, 230, 231, 231, 232, 233, 233, 234, 234, 235, 235, 236, 237, 237, 238, 238, 239, 239, 240, 240, 241, 242, 242, 243, 243, 244, 244, 245, 245, 246, 246, 247, 247, 248, 248, 249, 249, 250, 250, 251, 251, 252, 253, 253, 254, 254, 255),
                "b": Uint8ClampedArray.of(0, 1, 3, 4, 6, 7, 9, 10, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 28, 29, 31, 32, 34, 35, 37, 38, 40, 41, 43, 44, 46, 47, 49, 50, 52, 53, 55, 56, 58, 59, 60, 62, 63, 65, 66, 68, 69, 70, 72, 73, 75, 76, 77, 79, 80, 81, 83, 84, 85, 87, 88, 89, 90, 92, 93, 94, 95, 97, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 177, 178, 179, 180, 181, 182, 183, 183, 184, 185, 186, 187, 188, 189, 189, 191, 192, 192, 193, 194, 195, 196, 196, 197, 198, 199, 200, 200, 201, 202, 203, 203, 204, 205, 206, 206, 207, 208, 209, 209, 210, 211, 212, 212, 213, 214, 214, 215, 216, 217, 217, 218, 219, 219, 220, 221, 221, 222, 223, 223, 224, 225, 225, 226, 227, 227, 228, 229, 229, 230, 231, 231, 232, 233, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 239, 240, 241, 241, 242, 243, 243, 244, 244, 245, 246, 246, 247, 247, 248, 249, 249, 250, 250, 251, 252, 252, 253, 253, 254, 255)
            },
            "Contrast megaX": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,7,7,7,8,8,8,9,9,10,10,10,11,11,12,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,23,23,24,25,25,26,27,28,29,29,30,31,32,32,33,34,35,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,54,55,57,58,60,62,64,66,68,70,72,74,77,79,81,84,86,89,92,94,97,100,102,105,108,110,113,115,118,121,123,126,128,130,133,135,137,139,141,143,145,148,150,152,154,156,158,160,162,164,166,168,170,172,174,175,177,179,181,183,184,186,187,189,190,192,193,195,196,197,198,200,201,202,203,204,204,205,206,207,207,208,209,209,210,211,211,212,212,213,213,214,214,215,216,216,217,217,218,218,219,220,220,221,221,222,223,223,224,224,225,226,226,227,227,228,228,229,229,230,230,231,232,232,233,233,234,234,235,235,236,236,237,238,238,239,239,240,240,241,242,242,243,243,244,244,245,245,246,247,247,248,248,249,249,250,251,251,252,252,253,253,254,254,255),
                "g": Uint8ClampedArray.of(1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,6,6,7,7,7,8,8,9,9,10,11,11,12,12,13,14,14,15,16,16,17,18,18,19,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,48,50,51,52,54,55,57,58,60,61,63,64,66,68,69,71,73,75,77,79,81,83,85,88,90,92,95,97,99,102,104,107,109,112,114,117,119,122,124,127,129,132,134,136,139,141,143,145,147,149,151,153,155,157,158,160,162,164,166,167,169,171,173,174,176,177,179,181,182,184,185,187,188,190,191,192,194,195,196,198,199,200,201,203,204,205,206,207,208,209,210,211,212,213,214,214,215,216,217,218,218,219,220,221,221,222,223,224,224,225,226,226,227,228,228,229,230,230,231,231,232,232,233,234,234,235,235,236,236,236,237,237,238,238,239,239,240,240,240,241,241,242,242,243,243,243,244,244,245,245,246,246,246,247,247,247,248,248,249,249,249,250,250,250,251,251,252,252,252,253,253,253,254,254,254,255,255),
                "b": Uint8ClampedArray.of(1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,17,17,18,18,19,19,20,21,21,22,22,23,24,24,25,26,26,27,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,47,48,49,50,51,53,54,55,57,58,59,61,62,64,65,67,68,70,72,73,75,77,79,81,82,85,87,89,91,93,95,98,100,102,105,107,109,112,114,116,119,121,123,126,128,130,133,135,137,139,141,143,145,147,149,151,153,154,156,158,160,162,163,165,167,169,170,172,174,175,177,179,180,182,183,185,186,188,189,191,192,193,194,196,197,198,199,200,202,203,204,205,206,206,207,208,209,210,211,211,212,213,214,214,215,216,216,217,218,218,219,220,220,221,222,222,223,224,224,225,226,226,227,227,228,228,229,230,230,231,231,232,232,233,233,234,234,235,235,236,236,237,237,238,238,239,239,240,240,240,241,241,242,242,243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,250,251,251,252,252,253,253,254,254,255,255)
            },
            "Drawing life 1up": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(19,19,19,19,20,20,20,20,20,20,20,21,21,21,21,21,22,22,22,22,23,23,23,24,24,24,25,25,26,26,26,27,28,28,29,29,30,31,31,32,33,33,34,35,36,36,37,38,39,40,41,41,42,43,44,45,46,47,47,48,49,50,51,52,53,54,55,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,151,152,153,154,155,156,157,158,159,160,161,162,163,164,166,167,168,169,170,171,172,173,174,175,176,177,178,180,181,182,183,184,185,186,187,188,189,190,192,193,194,195,196,197,198,199,200,201,203,204,205,206,207,208,209,210,211,213,214,215,216,217,218,219,220,221,223,224,225,226,227,228,229,230,232,233,234,235,236,237,238,239,240,242,243,244,245,246,247,248,249,251,252,253,254),
                "g": Uint8ClampedArray.of(18,18,18,18,19,19,19,19,19,19,19,20,20,20,20,20,21,21,21,21,22,22,22,23,23,23,24,24,25,25,26,26,27,27,28,29,29,30,31,31,32,33,34,35,35,36,37,38,39,40,41,41,42,43,44,45,46,47,48,49,50,51,52,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,132,133,134,135,136,137,138,139,140,141,142,143,144,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,183,184,185,186,187,188,189,190,191,192,193,194,195,196,198,199,200,201,202,203,204,205,206,207,208,209,211,212,213,214,215,216,217,218,219,220,221,222,224,225,226,227,228,229,230,231,232,233,234,235,237,238,239,240,241,242,243,244,245,246,247,249,250,251,252,253,254),
                "b": Uint8ClampedArray.of(16,16,17,17,17,17,18,18,18,18,19,19,19,20,20,20,21,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,29,29,30,31,32,32,33,34,35,36,37,38,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99,100,101,102,103,105,106,107,108,109,110,111,112,113,114,115,116,118,119,120,121,122,123,124,125,126,127,128,129,131,132,133,134,135,136,137,138,139,140,141,143,144,145,146,147,148,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,247,248,249,250,251,252,253,254)
            },
            "Undeadify skin color": {
                "a": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 255),
                "r": Uint8ClampedArray.of(0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 20, 20, 21, 22, 22, 23, 24, 24, 25, 26, 26, 27, 28, 29, 30, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 56, 57, 59, 60, 62, 63, 65, 66, 68, 70, 72, 74, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 98, 100, 102, 104, 106, 108, 111, 113, 115, 117, 120, 122, 124, 126, 128, 131, 133, 135, 137, 139, 141, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 169, 171, 173, 175, 176, 178, 180, 181, 183, 184, 185, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 213, 214, 215, 216, 217, 218, 218, 219, 220, 221, 221, 222, 223, 224, 224, 225, 226, 226, 227, 228, 228, 229, 230, 230, 231, 231, 232, 233, 233, 234, 234, 235, 235, 236, 237, 237, 238, 238, 239, 239, 240, 240, 241, 241, 242, 242, 242, 243, 243, 244, 244, 245, 245, 246, 246, 246, 247, 247, 248, 248, 249, 249, 249, 250, 250, 251, 251, 251, 252, 252, 253, 253, 253, 254, 254, 255, 255),
                "g": Uint8ClampedArray.of(0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 13, 13, 14, 14, 15, 16, 16, 17, 17, 18, 19, 19, 20, 21, 21, 22, 23, 23, 24, 25, 25, 26, 27, 28, 28, 29, 30, 31, 31, 32, 33, 34, 34, 35, 36, 37, 38, 39, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 65, 66, 67, 68, 70, 71, 72, 74, 75, 77, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 95, 96, 98, 99, 101, 103, 104, 106, 108, 109, 111, 112, 114, 116, 117, 119, 121, 122, 124, 126, 127, 129, 130, 132, 134, 135, 137, 138, 140, 142, 143, 145, 146, 148, 149, 151, 152, 154, 155, 156, 158, 159, 160, 162, 163, 164, 166, 167, 168, 169, 170, 171, 172, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 203, 204, 205, 206, 207, 208, 209, 210, 210, 211, 212, 213, 214, 215, 216, 216, 217, 218, 219, 220, 220, 221, 222, 223, 224, 224, 225, 226, 227, 228, 228, 229, 230, 231, 231, 232, 233, 234, 234, 235, 236, 237, 237, 238, 239, 240, 240, 241, 242, 243, 243, 244, 245, 245, 246, 247, 248, 248, 249, 250, 250, 251, 252, 253, 253, 254, 255),
                "b": Uint8ClampedArray.of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255)
            },
            "Vitality pro alpha": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,13,14,15,16,16,18,19,20,21,22,23,24,26,27,28,29,31,32,33,34,36,37,38,39,41,42,43,45,46,47,49,50,51,53,54,55,57,58,59,61,62,63,65,66,68,69,70,72,73,75,76,77,79,80,82,83,84,86,87,89,90,92,93,95,96,98,99,100,102,103,105,106,108,109,111,112,114,115,117,118,120,122,123,125,126,128,129,131,132,134,135,137,138,140,142,143,145,146,148,149,151,153,154,156,157,159,160,162,164,165,167,168,170,172,173,175,176,178,180,181,183,185,186,188,189,191,193,194,196,197,199,201,202,204,206,207,209,211,212,214,215,217,219,220,222,224,225,227,229,230,232,234,235,237,239,240,242,243,245,247,248,250,252,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255),
                "g": Uint8ClampedArray.of(0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,11,11,12,12,13,14,14,15,15,16,17,17,18,19,19,20,21,22,22,23,24,25,26,27,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,57,58,59,61,62,63,64,65,67,68,69,70,71,73,74,75,76,78,79,80,81,82,84,85,86,87,89,90,91,93,94,95,96,98,99,100,101,103,104,105,107,108,109,110,112,113,114,116,117,118,120,121,122,123,125,126,127,129,130,131,133,134,135,136,138,139,140,142,143,144,146,147,148,149,151,152,153,155,156,157,158,160,161,162,164,165,166,167,169,170,171,173,174,175,176,178,179,180,181,183,184,185,186,188,189,190,191,192,194,195,196,197,198,200,201,202,203,204,206,207,208,209,210,211,213,214,215,216,217,218,219,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,235,236,237,238,239,239,240,241,241,242,243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,251,251,251,252,252,253,253,253,254,254,255,255),
                "b": Uint8ClampedArray.of(20,21,22,23,23,24,25,26,27,28,28,29,30,31,32,33,33,34,35,36,37,38,39,39,40,41,42,43,44,44,45,46,47,48,49,50,50,51,52,53,54,55,55,56,57,58,59,60,60,61,62,63,64,65,66,66,67,68,69,70,71,71,72,73,74,75,76,76,77,78,79,80,81,82,82,83,84,85,86,87,87,88,89,90,91,92,93,93,94,95,96,97,98,98,99,100,101,102,103,103,104,105,106,107,108,109,109,110,111,112,113,114,114,115,116,117,118,119,119,120,121,122,123,124,125,125,126,127,128,129,130,130,131,132,133,134,135,136,136,137,138,139,140,141,141,142,143,144,145,146,146,147,148,149,150,151,152,152,153,154,155,156,157,157,158,159,160,161,162,162,163,164,165,166,167,168,168,169,170,171,172,173,173,174,175,176,177,178,179,179,180,181,182,183,184,184,185,186,187,188,189,189,190,191,192,193,194,195,195,196,197,198,199,200,200,201,202,203,204,205,205,206,207,208,209,210,211,211,212,213,214,215,216,216,217,218,219,220,221,222,222,223,224,225,226,227,227,228,229,230,231,232,232,233,234,235)
            },
            "Film": {
                "a": Uint8ClampedArray.of(0, 1, 1, 3, 3, 5, 6, 7, 8, 8, 10, 10, 12, 13, 14, 15, 15, 17, 18, 19, 20, 21, 22, 22, 24, 25, 26, 27, 28, 29, 29, 31, 32, 33, 34, 35, 36, 36, 38, 39, 40, 41, 42, 43, 43, 45, 45, 47, 48, 49, 50, 51, 52, 52, 54, 55, 56, 57, 58, 59, 59, 61, 61, 63, 64, 65, 66, 66, 68, 68, 70, 70, 72, 73, 73, 75, 75, 77, 77, 79, 80, 80, 82, 82, 84, 84, 86, 87, 87, 89, 89, 91, 91, 93, 93, 94, 96, 96, 98, 98, 100, 100, 102, 102, 103, 105, 105, 107, 107, 109, 109, 110, 112, 112, 114, 114, 116, 116, 117, 119, 119, 121, 121, 123, 123, 124, 125, 126, 128, 128, 130, 130, 131, 132, 133, 134, 135, 137, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 153, 153, 154, 155, 156, 157, 158, 160, 160, 161, 162, 163, 165, 165, 167, 167, 168, 169, 170, 172, 172, 174, 174, 175, 177, 177, 179, 180, 181, 182, 182, 184, 184, 186, 187, 188, 189, 189, 191, 192, 193, 194, 195, 196, 196, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 212, 214, 215, 216, 217, 218, 219, 219, 221, 221, 223, 224, 225, 226, 226, 228, 228, 230, 231, 232, 233, 233, 235, 235, 237, 237, 239, 240, 240, 242, 242, 244, 244, 246, 246, 247, 249, 249, 251, 251, 253, 253, 255),
                "r": Uint8ClampedArray.of(26, 25, 25, 25, 25, 25, 25, 25, 25, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 27, 27, 27, 27, 28, 28, 28, 29, 29, 30, 30, 30, 31, 31, 32, 32, 33, 33, 34, 35, 35, 36, 37, 37, 38, 39, 40, 41, 42, 42, 43, 44, 46, 47, 48, 49, 50, 51, 53, 54, 55, 57, 58, 60, 61, 62, 64, 65, 67, 68, 70, 71, 73, 74, 76, 77, 79, 80, 82, 83, 84, 86, 87, 89, 90, 92, 93, 95, 96, 98, 99, 101, 102, 104, 105, 107, 108, 110, 111, 113, 114, 116, 117, 119, 121, 122, 124, 125, 127, 128, 130, 131, 133, 134, 135, 137, 138, 140, 141, 143, 144, 146, 147, 149, 150, 152, 153, 155, 156, 158, 159, 160, 162, 163, 165, 166, 168, 169, 170, 172, 173, 175, 176, 177, 179, 180, 181, 182, 184, 185, 186, 188, 189, 190, 191, 193, 194, 195, 196, 197, 199, 200, 201, 202, 203, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 233, 234, 235, 236, 237, 237, 238, 239, 240, 240, 241, 242, 242, 243, 244, 244, 245, 245, 246, 246, 247, 247, 248, 248, 248, 249, 249, 250, 250, 250, 251, 251, 251, 251, 252, 252, 252, 252, 253, 253, 253, 253, 254, 254, 254, 254, 255),
                "g": Uint8ClampedArray.of(49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 49, 48, 48, 48, 48, 48, 48, 48, 48, 48, 47, 47, 47, 47, 47, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 47, 47, 47, 48, 48, 49, 49, 50, 50, 51, 52, 53, 54, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 72, 73, 74, 76, 77, 78, 80, 81, 82, 84, 85, 86, 88, 89, 90, 92, 93, 95, 96, 98, 99, 101, 102, 104, 105, 107, 108, 110, 112, 113, 115, 116, 118, 119, 121, 122, 124, 126, 127, 129, 130, 131, 133, 134, 136, 137, 139, 140, 142, 143, 145, 146, 148, 149, 151, 152, 154, 155, 157, 158, 159, 161, 162, 164, 165, 167, 168, 169, 171, 172, 173, 175, 176, 177, 179, 180, 181, 183, 184, 185, 187, 188, 189, 191, 192, 193, 194, 196, 197, 198, 199, 201, 202, 203, 204, 205, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 218, 219, 220, 221, 222, 223, 224, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 233, 234, 235, 236, 237, 237, 238, 239, 240, 240, 241, 242, 242, 243, 244, 244, 245, 245, 246, 246, 247, 247, 248, 248, 248, 249, 249, 250, 250, 250, 251, 251, 251, 251, 252, 252, 252, 252, 253, 253, 253, 253, 254, 254, 254, 254, 255),
                "b": Uint8ClampedArray.of(68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 67, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 69, 69, 69, 70, 70, 71, 71, 72, 73, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 85, 86, 88, 89, 91, 92, 94, 95, 97, 99, 100, 102, 104, 105, 107, 109, 110, 112, 113, 115, 116, 118, 119, 121, 122, 124, 125, 127, 128, 130, 131, 133, 135, 136, 138, 139, 141, 142, 144, 145, 147, 148, 150, 151, 153, 154, 156, 157, 159, 160, 162, 163, 165, 166, 168, 169, 170, 172, 173, 175, 176, 177, 179, 180, 182, 183, 185, 186, 187, 189, 190, 191, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207, 208, 209, 211, 212, 213, 214, 215, 216, 217, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 234, 235, 236, 237, 238, 239, 239, 240, 241, 242, 242, 243, 243, 244, 245, 245, 246, 246, 247, 247, 248, 248, 249, 249, 249, 250, 250, 250, 251, 251, 251, 252, 252, 252, 253, 253, 253, 253, 254, 254, 254, 255),
            },
            "Imperial": {
                "a": Uint8ClampedArray.of(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103, 104, 105, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 120, 121, 122, 123, 124, 126, 127, 128, 129, 131, 132, 134, 135, 137, 138, 140, 142, 144, 146, 148, 149, 151, 153, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 189, 191, 193, 194, 196, 197, 198, 200, 201, 202, 203, 204, 205, 206, 206, 207, 208, 209, 210, 211, 212, 212, 213, 214, 215, 216, 216, 217, 218, 218, 219, 220, 221, 221, 222, 223, 223, 224, 225, 225, 226, 227, 227, 228, 228, 229, 230, 230, 231, 231, 232, 232, 233, 234, 234, 235, 235, 236, 236, 237, 237, 238, 238, 239, 239, 240, 240, 241, 241, 241, 242, 242, 243, 243, 244, 244, 245, 245, 245, 246, 246, 247, 247, 247, 248, 248, 249, 249, 249, 250, 250, 251, 251, 251, 252, 252, 253, 253, 253, 254, 254, 255),
                "r": Uint8ClampedArray.of(0, 0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 11, 11, 12, 12, 13, 14, 14, 15, 15, 16, 17, 17, 18, 18, 19, 20, 20, 21, 21, 22, 23, 23, 24, 25, 25, 26, 27, 27, 28, 29, 29, 30, 31, 31, 32, 33, 33, 34, 35, 35, 36, 37, 38, 38, 39, 40, 40, 41, 42, 43, 43, 44, 45, 46, 46, 47, 48, 49, 50, 50, 51, 52, 53, 54, 54, 55, 56, 57, 58, 59, 60, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 97, 98, 100, 103, 105, 107, 109, 112, 115, 117, 120, 123, 125, 128, 131, 134, 137, 140, 142, 145, 148, 151, 153, 156, 158, 161, 163, 165, 167, 169, 171, 173, 174, 176, 177, 179, 180, 181, 182, 183, 184, 185, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 208, 209, 210, 211, 212, 213, 214, 214, 215, 216, 217, 218, 218, 219, 220, 221, 222, 222, 223, 224, 225, 225, 226, 227, 228, 228, 229, 230, 230, 231, 232, 232, 233, 234, 234, 235, 236, 236, 237, 238, 238, 239, 240, 240, 241, 242, 242, 243, 243, 244, 245, 245, 246, 247, 247, 248, 248, 249, 250, 250, 251, 251, 252, 253, 253, 254, 255),
                "g": Uint8ClampedArray.of(0, 1, 1, 3, 3, 5, 5, 7, 8, 8, 10, 10, 12, 12, 14, 15, 15, 17, 17, 19, 19, 21, 22, 22, 24, 24, 26, 26, 28, 28, 29, 31, 31, 33, 33, 35, 35, 36, 38, 38, 40, 40, 42, 42, 43, 45, 45, 47, 47, 49, 49, 51, 52, 52, 54, 54, 56, 56, 58, 59, 59, 61, 61, 63, 63, 65, 66, 66, 68, 68, 70, 70, 72, 73, 73, 75, 75, 77, 77, 79, 79, 80, 82, 82, 84, 84, 86, 86, 87, 89, 89, 91, 91, 93, 93, 94, 96, 96, 98, 98, 100, 100, 102, 103, 103, 105, 105, 107, 107, 109, 110, 110, 112, 112, 114, 114, 116, 117, 117, 119, 119, 121, 121, 123, 124, 124, 126, 126, 128, 128, 130, 130, 131, 133, 133, 135, 135, 137, 137, 138, 140, 140, 142, 142, 144, 144, 145, 147, 147, 149, 149, 151, 151, 153, 154, 154, 156, 156, 158, 158, 160, 161, 161, 163, 163, 165, 165, 167, 168, 168, 170, 170, 172, 172, 174, 175, 175, 177, 177, 179, 179, 181, 181, 182, 184, 184, 186, 186, 188, 188, 189, 191, 191, 193, 193, 195, 195, 196, 198, 198, 200, 200, 202, 202, 204, 205, 205, 207, 207, 209, 209, 211, 212, 212, 214, 214, 216, 216, 218, 219, 219, 221, 221, 223, 223, 225, 226, 226, 228, 228, 230, 230, 232, 232, 233, 235, 235, 237, 237, 239, 239, 240, 242, 242, 244, 244, 246, 246, 247, 249, 249, 251, 251, 253, 253, 255),
                "b": Uint8ClampedArray.of(0, 1, 1, 3, 3, 5, 5, 7, 8, 8, 10, 10, 12, 12, 14, 15, 15, 17, 17, 19, 19, 21, 22, 22, 24, 24, 26, 26, 28, 28, 29, 31, 31, 33, 33, 35, 35, 36, 38, 38, 40, 40, 42, 42, 43, 45, 45, 47, 47, 49, 49, 51, 52, 52, 54, 54, 56, 56, 58, 59, 59, 61, 61, 63, 63, 65, 66, 66, 68, 68, 70, 70, 72, 73, 73, 75, 75, 77, 77, 79, 79, 80, 82, 82, 84, 84, 86, 86, 87, 89, 89, 91, 91, 93, 93, 94, 96, 96, 98, 98, 100, 100, 102, 103, 103, 105, 105, 107, 107, 109, 110, 110, 112, 112, 114, 114, 116, 117, 117, 119, 119, 121, 121, 123, 124, 124, 126, 126, 128, 128, 130, 130, 131, 133, 133, 135, 135, 137, 137, 138, 140, 140, 142, 142, 144, 144, 145, 147, 147, 149, 149, 151, 151, 153, 154, 154, 156, 156, 158, 158, 160, 161, 161, 163, 163, 165, 165, 167, 168, 168, 170, 170, 172, 172, 174, 175, 175, 177, 177, 179, 179, 181, 181, 182, 184, 184, 186, 186, 188, 188, 189, 191, 191, 193, 193, 195, 195, 196, 198, 198, 200, 200, 202, 202, 204, 205, 205, 207, 207, 209, 209, 211, 212, 212, 214, 214, 216, 216, 218, 219, 219, 221, 221, 223, 223, 225, 226, 226, 228, 228, 230, 230, 232, 232, 233, 235, 235, 237, 237, 239, 239, 240, 242, 242, 244, 244, 246, 246, 247, 249, 249, 251, 251, 253, 253, 255),
            },
            "Inversion": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(255,254,253,252,251,250,249,248,247,246,245,244,243,242,241,240,239,238,237,236,235,234,233,232,231,230,229,228,227,226,225,224,223,222,221,220,219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,194,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0),
                "g": Uint8ClampedArray.of(255,254,253,252,251,250,249,248,247,246,245,244,243,242,241,240,239,238,237,236,235,234,233,232,231,230,229,228,227,226,225,224,223,222,221,220,219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,194,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0),
                "b": Uint8ClampedArray.of(255,254,253,252,251,250,249,248,247,246,245,244,243,242,241,240,239,238,237,236,235,234,233,232,231,230,229,228,227,226,225,224,223,222,221,220,219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,194,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0),
            },
            "Ancient warmth": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(0,1,3,4,5,6,8,9,10,12,13,14,15,17,18,19,21,22,23,24,26,27,28,29,31,32,33,35,36,37,38,40,41,42,43,45,46,47,48,50,51,52,53,55,56,57,58,60,61,62,63,64,66,67,68,69,70,72,73,74,75,76,78,79,80,81,82,84,85,86,87,88,89,90,92,93,94,95,96,97,98,99,101,102,103,104,105,106,107,108,109,110,111,112,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,146,147,148,149,150,151,152,153,154,155,156,157,158,159,159,160,161,162,163,164,165,166,167,168,169,169,170,171,172,173,174,175,176,177,177,178,179,180,181,182,183,183,184,185,186,187,188,189,190,190,191,192,193,194,195,196,196,197,198,199,200,201,201,202,203,204,205,206,206,207,208,209,210,211,211,212,213,214,215,216,216,217,218,219,220,221,221,222,223,224,225,225,226,227,228,229,229,230,231,232,233,234,234,235,236,237,238,238,239,240,241,242,242,243,244,245,246,246,247,248,249,250,250,251,252,253,254,255,255),
                "g": Uint8ClampedArray.of(0,1,2,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,22,23,24,25,26,28,29,30,31,32,34,35,36,37,38,39,41,42,43,44,45,46,48,49,50,51,52,53,55,56,57,58,59,60,61,63,64,65,66,67,68,69,71,72,73,74,75,76,77,78,79,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,164,165,166,167,168,169,170,171,172,173,174,175,176,176,177,178,179,180,181,182,183,184,185,186,187,187,188,189,190,191,192,193,194,195,196,196,197,198,199,200,201,202,203,204,205,205,206,207,208,209,210,211,212,213,213,214,215,216,217,218,219,220,221,221,222,223,224,225,226,227,228,229,229,230,231,232,233,234,235,236,237,237,238,239,240,241,242,243,244,244,245,246,247,248,249,250,251,252,252,253,254,255),
                "b": Uint8ClampedArray.of(0,1,2,2,3,4,5,5,6,7,8,8,9,10,11,11,12,13,14,14,15,16,17,17,18,19,20,20,21,22,23,23,24,25,26,27,27,28,29,30,30,31,32,33,34,34,35,36,37,37,38,39,40,41,41,42,43,44,45,45,46,47,48,49,49,50,51,52,53,53,54,55,56,57,58,58,59,60,61,62,63,63,64,65,66,67,68,69,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,100,101,102,103,104,105,106,107,108,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,131,132,133,134,135,136,137,138,139,140,141,143,144,145,146,147,148,149,150,152,153,154,155,156,157,158,160,161,162,163,164,165,167,168,169,170,171,173,174,175,176,177,179,180,181,182,183,185,186,187,188,189,191,192,193,194,195,197,198,199,200,202,203,204,205,207,208,209,210,212,213,214,215,216,218,219,220,221,223,224,225,227,228,229,230,232,233,234,235,237,238,239,240,242,243,244,245,247,248,249,250,252,253,254,255)
            },
            "Beam gradient": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(1,1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,5,5,5,5,6,6,7,7,7,8,8,9,10,10,11,11,12,13,13,14,15,16,16,17,18,19,20,21,22,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,43,44,46,47,48,49,50,52,53,54,55,57,58,59,61,62,63,65,66,67,69,70,71,73,74,75,77,78,80,81,82,84,85,87,88,89,91,92,94,95,97,98,99,101,102,104,105,107,108,110,111,113,114,116,117,119,120,122,123,124,126,127,129,130,132,133,135,136,138,139,141,142,144,145,147,148,150,151,153,154,156,157,159,160,162,163,165,166,168,169,170,172,173,175,176,177,179,180,181,183,184,186,187,188,190,191,192,194,195,196,198,199,200,201,203,204,205,206,208,209,210,211,212,213,214,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,234,235,236,237,238,239,239,240,241,242,242,243,244,244,245,245,246,247,247,248,248,248,249,249,250,250,250,251,251,251,252,252,252,252,253,253,253,253,254,254,254,254,254,255,255,255),
                "g": Uint8ClampedArray.of(1,2,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,10,10,11,11,12,13,13,14,15,16,16,17,18,19,20,21,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,43,44,46,47,48,49,50,52,53,54,55,57,58,59,61,62,63,65,66,67,69,70,71,73,74,75,77,78,79,81,82,84,85,86,88,89,91,92,94,95,96,98,99,101,102,104,105,107,108,110,111,113,114,116,117,119,120,122,123,125,126,127,129,130,132,133,135,136,138,139,141,142,144,145,147,148,150,151,153,154,156,157,159,160,162,163,165,166,168,169,170,172,173,175,176,177,179,180,181,183,184,185,187,188,189,191,192,193,195,196,197,199,200,201,202,204,205,206,207,208,210,211,212,213,214,215,216,217,218,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,234,235,236,237,238,239,239,240,241,242,242,243,244,244,245,246,246,247,247,248,248,249,249,249,250,250,250,251,251,251,252,252,252,252,253,253,253,253,254,254,254,254,254,255,255,255),
                "b": Uint8ClampedArray.of(1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,6,6,6,7,7,7,8,8,9,9,10,11,11,12,12,13,14,15,15,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,51,52,53,54,56,57,58,60,61,62,64,65,66,68,69,70,72,73,74,76,77,78,80,81,83,84,85,87,88,89,91,92,94,95,97,98,100,101,102,104,105,107,108,110,111,113,114,116,117,119,120,121,123,124,126,127,129,130,132,133,135,136,138,139,141,142,144,145,147,148,150,151,153,154,156,157,159,160,162,163,164,166,167,169,170,172,173,174,176,177,179,180,181,183,184,185,187,188,189,191,192,193,195,196,197,199,200,201,202,204,205,206,207,209,210,211,212,213,214,215,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,234,235,236,237,238,239,239,240,241,242,242,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,250,251,251,251,252,252,252,252,253,253,253,253,254,254,254,254,254,255,255,255)
            },
            "Bright tea party": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(0,1,3,4,5,7,8,9,11,12,13,15,16,17,19,20,21,22,24,25,26,28,29,30,31,33,34,35,37,38,39,40,41,43,44,45,46,48,49,50,51,52,53,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,72,73,74,74,75,76,76,77,77,78,78,79,79,80,80,81,81,82,82,83,83,84,85,85,86,87,88,89,90,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,255),
                "g": Uint8ClampedArray.of(0,1,2,2,3,4,5,6,7,7,8,9,10,11,12,12,13,14,15,16,17,17,18,19,20,21,22,23,23,24,25,26,27,28,29,30,30,31,32,33,34,35,36,37,38,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,75,77,78,79,80,82,83,84,85,87,88,89,90,92,93,94,96,97,98,100,101,103,104,105,107,108,109,111,112,114,116,117,119,121,122,124,126,127,129,131,132,134,136,138,139,141,143,145,146,148,150,151,153,155,156,158,159,161,162,164,165,167,168,169,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,189,190,191,192,193,194,195,196,196,197,198,199,200,201,201,202,203,204,205,205,206,207,208,209,209,210,211,212,213,213,214,215,216,216,217,218,218,219,220,221,221,222,223,224,224,225,226,226,227,228,228,229,230,230,231,232,232,233,234,234,235,236,236,237,238,238,239,240,240,241,242,242,243,244,244,245,246,246,247,248,248,249,249,250,251,251,252,253,253,254,255,255),
                "b": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255)
            },
            "Bronze": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,12,12,13,14,14,15,16,16,17,18,18,19,20,21,22,22,23,24,25,26,27,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,66,67,68,69,70,71,73,74,75,76,77,79,80,81,82,83,85,86,87,88,89,91,92,93,94,95,97,98,99,100,101,103,104,105,106,108,109,110,111,112,114,115,116,117,119,120,121,122,124,125,126,127,129,130,131,132,134,135,136,138,139,140,142,143,145,146,147,149,150,151,152,154,155,156,157,159,160,161,162,163,164,165,166,167,168,169,170,170,171,172,173,174,174,175,176,177,177,178,179,179,180,180,181,181,182,182,183,183,184,184,185,185,185,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,187,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186),
                "g": Uint8ClampedArray.of(1,2,2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,12,12,13,14,14,15,16,16,17,18,18,19,20,21,22,22,23,24,25,26,27,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,66,67,68,69,70,71,73,74,75,76,77,79,80,81,82,83,85,86,87,88,89,91,92,93,94,95,97,98,99,100,101,103,104,105,106,108,109,110,111,112,114,115,116,117,119,120,121,122,124,125,126,127,128,130,131,132,133,135,136,137,139,140,141,142,144,145,146,147,149,150,151,153,154,155,156,157,159,160,161,162,164,165,166,167,168,170,171,172,173,174,175,177,178,179,180,181,182,183,185,186,187,188,189,190,191,192,193,195,196,197,198,199,200,201,202,203,204,205,206,207,209,210,211,212,213,214,215,216,217,218,220,221,222,223,224,225,226,226,227,228,229,230,230,231,232,232,233,234,234,234,235,235,235,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,236,236,236,236,236),
                "b": Uint8ClampedArray.of(115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,115,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,114,115,115,115,115,115,115,115,116,116,116,116,116,116,117,117,117,117,117,118,118,118,119,119,119,120,120,120,121,121,122,123,123,124,124,125,126,127,128,129,130,131,132,133,134,135,136,138,139,140,142,143,144,146,147,149,150,151,153,154,156,157,158,160,161,162,164,165,166,167,168,170,171,172,173,174,175,177,178,179,180,181,182,183,185,186,187,188,189,190,191,192,193,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,230,231,232,233,234,235,235,236,237,238,238,239,240,241,241,242,243,243,244,245,246,246,247,247,248,249,249,250,251,251,252,253,253,254,254,255)
            },
            "Classic HDR": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(14,14,14,13,13,13,13,13,13,13,12,12,12,12,12,12,12,12,13,13,13,13,13,14,14,14,15,15,16,17,17,18,19,20,21,22,23,24,25,26,28,29,30,32,33,35,36,38,39,41,42,44,46,47,49,50,52,53,55,56,58,59,61,62,63,65,66,67,69,70,71,73,74,75,77,78,79,81,82,83,85,86,87,89,90,91,93,94,95,96,98,99,100,102,103,104,105,106,108,109,110,111,113,114,115,116,117,118,120,121,122,123,124,125,127,128,129,130,131,132,133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,166,167,168,169,170,171,172,173,174,175,176,177,177,178,179,180,181,182,183,183,184,185,186,187,187,188,189,190,191,191,192,193,194,194,195,196,197,197,198,199,200,200,201,202,203,203,204,205,206,206,207,208,208,209,210,210,211,212,212,213,214,214,215,216,216,217,218,218,219,220,220,221,222,222,223,224,224,225,226,226,227,228,228,229,230,230,231,232,232,233,234,234,235,236,236,237,237,238,239,239,240,241,241,242),
                "g": Uint8ClampedArray.of(2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,3,3,4,5,5,6,7,8,9,10,11,12,13,15,16,18,19,21,22,24,25,27,29,30,32,34,35,37,39,40,42,44,45,47,48,50,52,53,54,56,57,59,60,62,63,65,66,68,69,71,72,74,75,77,78,79,81,82,84,85,87,88,89,91,92,94,95,96,98,99,100,102,103,104,106,107,108,109,111,112,113,114,115,117,118,119,120,122,123,124,125,126,127,129,130,131,132,133,134,136,137,138,139,140,142,143,144,145,146,147,149,150,151,152,153,154,155,157,158,159,160,161,162,163,164,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,186,187,188,189,190,191,192,193,194,194,195,196,197,198,199,200,200,201,202,203,204,205,206,206,207,208,209,210,211,211,212,213,214,215,215,216,217,218,219,219,220,221,222,223,223,224,225,226,227,227,228,229,230,231,231,232,233,234,235,235,236,237,238,238,239,240,241,242,242,243,244,245,245,246,247,248,249,249,250,251,252,252,253,254),
                "b": Uint8ClampedArray.of(66,66,66,67,67,67,67,67,68,68,68,68,69,69,69,69,70,70,70,71,71,71,71,72,72,73,73,73,74,74,75,75,75,76,76,77,78,78,79,79,80,80,81,82,82,83,84,84,85,86,86,87,88,88,89,90,90,91,92,92,93,94,94,95,96,96,97,98,98,99,99,100,101,101,102,103,103,104,104,105,106,106,107,108,108,109,110,110,111,111,112,113,113,114,114,115,116,116,117,117,118,118,119,120,120,121,121,122,122,123,124,124,125,125,126,126,127,127,128,129,129,130,130,131,131,132,132,133,134,134,135,135,136,136,137,138,138,139,139,140,140,141,142,142,143,143,144,144,145,146,146,147,147,148,148,149,149,150,150,151,152,152,153,153,154,154,155,155,156,156,157,157,158,158,159,159,160,160,161,161,162,162,163,163,164,164,165,165,166,166,167,167,168,168,169,169,170,170,171,171,172,172,173,173,174,174,175,175,176,176,177,177,178,178,179,179,180,180,181,181,182,182,183,183,183,184,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,192,192,192,193,193,194,194,195,195,196,196,197,197,198,198)
            },
            "Gothic style": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,14,14,15,15,16,17,18,18,19,20,21,21,22,23,24,25,26,26,27,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,49,50,51,52,53,55,56,57,59,60,61,63,64,66,67,68,70,71,73,74,76,77,79,80,82,83,85,86,88,89,91,92,94,95,97,99,100,102,103,105,106,108,110,111,113,114,116,118,119,121,123,124,126,128,129,131,133,134,136,138,139,141,143,144,146,147,149,151,152,154,156,157,159,160,162,164,165,167,169,170,172,174,175,177,179,180,182,183,185,187,188,190,191,193,194,196,197,199,200,201,203,204,206,207,208,210,211,212,214,215,216,217,219,220,221,222,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,240,241,242,243,243,244,245,245,246,246,247,247,248,248,249,249,250,250,251,251,252,252,252,253,253,254,254,254,255,255),
                "g": Uint8ClampedArray.of(1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3,4,4,4,4,5,5,6,6,6,7,7,8,8,9,9,10,11,11,12,13,14,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,46,47,48,49,50,51,53,54,55,56,58,59,60,61,63,64,65,66,68,69,70,72,73,74,76,77,78,80,81,82,84,85,87,88,89,91,92,94,95,97,98,100,101,103,104,106,107,109,110,112,113,115,116,118,119,121,122,124,125,127,128,129,131,132,134,135,137,138,140,141,143,144,146,147,148,150,151,153,154,156,157,159,160,161,163,164,166,167,168,170,171,173,174,175,177,178,179,181,182,184,185,186,188,189,190,192,193,194,196,197,198,200,201,202,203,205,206,207,208,209,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,233,234,235,236,237,237,238,239,240,240,241,242,242,243,244,244,245,245,246,246,247,247,248,248,249,249,249,250,250,251,251,251,251,252,252,252,253,253,253,253,254,254,254,254,255,255),
                "b": Uint8ClampedArray.of(1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,6,7,7,8,8,8,9,9,10,10,11,11,12,13,13,14,14,15,16,16,17,18,18,19,20,21,22,22,23,24,25,26,27,27,28,29,30,31,32,33,34,35,36,37,38,40,41,42,43,44,45,46,48,49,50,51,53,54,55,57,58,59,61,62,64,65,66,68,69,71,72,74,75,77,78,80,81,83,84,86,87,89,91,92,94,95,97,98,100,102,103,105,107,108,110,112,113,115,117,118,120,122,123,125,127,128,130,132,134,135,137,139,140,142,144,145,147,149,151,152,154,156,157,159,161,163,165,166,168,170,171,173,175,177,178,180,182,183,185,187,188,190,191,193,195,196,197,199,200,202,203,205,206,208,209,211,212,213,215,216,217,219,220,221,223,224,225,226,228,229,230,231,232,233,234,235,236,237,238,239,240,240,241,242,243,243,244,245,245,246,247,247,248,248,249,249,250,250,251,251,251,252,252,253,253,253,254,254,255,255)
            },
            "Old photo": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(8,8,9,9,9,10,10,11,11,12,12,13,13,13,14,14,15,15,16,16,17,18,18,19,19,20,21,21,22,23,23,24,25,26,26,27,28,29,29,30,31,32,33,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,54,55,56,58,59,61,62,64,66,67,69,71,72,74,76,78,80,82,84,85,87,89,91,93,95,97,99,101,103,106,108,110,112,114,116,118,121,123,125,128,130,133,135,138,141,143,146,149,151,154,156,159,162,164,167,169,172,174,176,178,180,183,185,186,188,190,191,193,194,196,197,198,199,201,202,203,204,205,205,206,207,208,208,209,210,211,211,212,212,213,214,214,215,215,216,217,217,218,219,219,220,220,221,221,222,222,223,223,224,224,225,225,226,226,226,227,227,228,228,228,229,229,229,230,230,230,231,231,232,232,232,233,233,233,234,234,234,235,235,235,236,236,236,237,237,237,238,238,238,239,239,239,239,240,240,240,241,241,241,241,242,242,242,242,243,243,243,243,244,244,244,244,245,245,245,245,245,246,246,246,246,246,247,247,247,247,247,248,248,248,248,248,249,249),
                "g": Uint8ClampedArray.of(28,29,29,29,30,30,31,31,31,32,32,33,33,33,34,34,35,35,36,36,37,37,38,39,39,40,40,41,42,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,75,76,77,78,79,80,82,83,84,85,87,88,89,91,92,93,94,96,97,98,100,101,102,104,105,106,108,109,110,112,113,114,116,117,118,119,121,122,123,124,126,127,128,129,131,132,133,134,136,137,138,139,141,142,143,144,145,147,148,149,150,151,152,154,155,156,157,158,159,160,161,162,163,164,165,167,168,169,170,171,172,173,174,175,176,177,178,178,179,180,181,182,183,184,185,185,186,187,188,189,189,190,191,191,192,193,193,194,194,195,196,196,197,197,198,198,199,199,200,200,201,201,202,202,203,203,204,204,205,205,206,206,207,208,208,209,209,210,211,211,212,212,213,214,214,215,215,216,216,217,217,218,219,219,220,220,221,221,221,222,222,223,223,223,224,224,224,224,225,225,225,225,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228),
                "b": Uint8ClampedArray.of(28,29,29,29,30,30,31,31,31,32,32,33,33,33,34,34,35,35,36,36,37,37,38,39,39,40,40,41,42,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,73,75,76,77,78,79,80,82,83,84,85,87,88,89,91,92,93,94,96,97,98,100,101,102,104,105,106,108,109,110,112,113,114,116,117,118,119,121,122,123,124,126,127,128,129,131,132,133,134,136,137,138,139,141,142,143,144,145,147,148,149,150,151,152,154,155,156,157,158,159,160,161,162,163,164,165,167,168,169,170,171,172,173,174,175,176,177,178,178,179,180,181,182,183,184,185,185,186,187,188,189,189,190,191,191,192,193,193,194,194,195,196,196,197,197,198,198,199,199,200,200,201,201,202,202,203,203,204,204,205,205,206,206,207,208,208,209,209,210,211,211,212,212,213,214,214,215,215,216,216,217,217,218,219,219,220,220,221,221,221,222,222,223,223,223,224,224,224,224,225,225,225,225,226,226,226,226,226,226,226,227,227,227,227,227,227,227,227,227,227,227,227,228,228,228,228)
            },
            "Pink/blue gradient": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(0,0,0,1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,4,4,5,5,6,6,6,7,8,8,9,9,10,11,11,12,13,14,14,15,16,17,18,19,20,21,22,23,24,25,26,27,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,99,100,101,102,103,104,106,107,108,109,111,112,113,114,115,117,118,119,121,122,123,125,126,127,129,130,131,133,134,135,137,138,140,141,142,144,145,146,148,149,151,152,153,155,156,158,159,160,162,163,165,166,168,169,170,172,173,175,176,178,179,181,182,184,185,186,188,189,191,192,193,195,196,198,199,200,202,203,204,206,207,208,209,211,212,213,215,216,217,219,220,221,222,224,225,226,227,228,230,231,232,233,234,235,236,237,238,239,240,240,241,242,243,243,244,245,245,246,246,247,248,248,249,249,249,250,250,251,251,251,252,252,252,253,253,253,254,254,254,255,255),
                "g": Uint8ClampedArray.of(0,1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,5,5,5,6,6,7,7,7,8,8,9,10,10,11,11,12,13,13,14,15,16,17,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,54,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,72,73,74,75,77,78,79,80,82,83,84,86,87,89,90,91,93,94,96,97,99,100,101,103,104,106,107,109,110,112,113,115,116,118,119,121,122,123,125,126,128,129,131,132,134,135,137,138,140,141,143,144,146,147,149,151,152,154,155,156,158,159,161,162,164,165,167,168,169,171,172,174,175,176,178,179,181,182,183,185,186,187,189,190,191,193,194,195,197,198,199,200,202,203,204,205,207,208,209,210,211,212,214,215,216,217,218,219,220,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,240,241,242,243,243,244,245,245,246,246,247,247,248,248,249,249,250,250,250,251,251,251,252,252,252,253,253,253,253,254,254,254,254,254,255,255,255),
                "b": Uint8ClampedArray.of(66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,66,65,65,65,65,65,65,65,65,65,65,65,66,66,66,66,66,66,67,67,67,68,68,68,69,69,70,70,71,71,71,72,72,73,74,74,75,75,76,77,77,78,78,79,80,81,81,82,83,83,84,85,86,87,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,123,124,125,126,127,128,129,130,131,132,133,135,136,137,138,139,140,142,143,144,145,146,148,149,150,152,153,154,156,157,159,160,162,163,165,166,168,169,171,172,174,175,177,178,180,182,183,185,186,188,189,191,192,194,195,197,198,199,201,202,204,205,207,208,209,211,212,214,215,217,218,219,221,222,223,225,226,227,229,230,231,232,233,235,236,237,238,239,240,240,241,242,243,244,244,245,246,246,247,247,248,248,249,249,250,250,251,251,251,252,252,252,253,253,253,254,254,254,254,255,255)
            },
            "Retro": {
                "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
                "r": Uint8ClampedArray.of(3,3,3,4,4,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,10,10,11,11,12,12,13,13,14,15,15,16,17,18,19,19,20,21,22,23,24,25,26,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47,48,50,51,52,53,54,55,57,58,59,60,62,63,64,65,67,68,69,70,72,73,74,76,77,78,80,81,82,83,85,86,88,89,90,92,93,94,96,97,99,100,101,103,104,106,107,109,110,111,113,114,116,117,119,120,121,123,124,126,127,129,130,131,133,134,136,137,139,140,142,143,144,146,147,149,150,152,153,154,156,157,159,160,162,163,164,166,167,168,170,171,172,174,175,177,178,179,181,182,183,185,186,187,189,190,191,192,194,195,196,198,199,200,201,202,204,205,206,207,208,209,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,229,230,231,232,233,234,235,235,236,237,238,238,239,240,240,241,241,242,243,243,244,244,245,245,245,246,246,247,247,247,248,248,248,249,249,249,250,250,250,250,251,251,251,251,252,252,252),
                "g": Uint8ClampedArray.of(11,11,12,12,12,12,12,13,13,13,13,13,14,14,14,14,15,15,15,16,16,16,17,17,17,18,18,19,19,20,20,21,21,22,22,23,24,24,25,26,26,27,28,29,29,30,31,32,33,33,34,35,36,37,38,39,40,40,41,42,43,44,45,46,47,48,49,50,51,52,53,55,56,57,58,59,60,61,63,64,65,66,67,69,70,71,72,74,75,76,77,79,80,81,82,83,85,86,87,89,90,91,92,94,95,96,98,99,100,102,103,104,106,107,108,110,111,112,114,115,117,118,119,121,122,123,125,126,127,129,130,131,133,134,135,137,138,139,141,142,143,145,146,147,149,150,151,152,154,155,156,158,159,160,162,163,164,165,167,168,169,171,172,173,174,176,177,178,180,181,182,183,185,186,187,188,190,191,192,193,195,196,197,198,199,200,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,219,220,221,222,223,224,224,225,226,227,228,228,229,230,230,231,232,232,233,233,234,235,235,236,236,237,237,237,238,238,239,239,239,240,240,240,240,241,241,241,242,242,242,242,242,243,243,243,243,243,244,244),
                "b": Uint8ClampedArray.of(63,63,63,63,64,64,64,64,64,64,64,64,64,65,65,65,65,65,65,66,66,66,66,66,67,67,67,67,68,68,68,68,69,69,69,70,70,71,71,71,72,72,73,73,73,74,74,75,75,76,76,77,77,78,78,79,79,80,80,81,81,82,82,83,83,84,85,85,86,86,87,88,88,89,89,90,91,91,92,93,93,94,95,95,96,97,97,98,99,99,100,101,101,102,103,103,104,105,105,106,107,108,108,109,110,110,111,112,113,113,114,115,116,116,117,118,119,119,120,121,122,122,123,124,125,125,126,127,128,128,129,130,131,131,132,133,134,134,135,136,136,137,138,139,139,140,141,142,142,143,144,144,145,146,147,147,148,149,149,150,151,152,152,153,154,154,155,156,157,157,158,159,160,160,161,162,162,163,164,165,165,166,167,167,168,169,169,170,170,171,172,172,173,173,174,174,175,175,176,177,177,178,178,179,179,179,180,180,181,181,182,182,183,183,183,184,184,185,185,185,186,186,186,187,187,187,187,188,188,188,188,189,189,189,189,189,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,191,192,192,192,192)
            }
        };
    };

    get_filter_names = () => {

        const filters = this._get_filters();
        const names = Object.entries(filters).map((entry) => {

            const [key, value] = entry;
            return key;
        });

        return names;
    };

    _dutone_pixels = (contrast, color_a, color_b, pxls, pxl_colors) => {

        pxls = Array.from(pxls);
        pxl_colors = Uint32Array.from(pxl_colors);

        pxl_colors = pxl_colors.map((pxl_color) => {

            const [r, g, b, a] = this._get_rgba_from_Uint32(pxl_color);
            const [h, s, l] = this.rgb_to_hsl(r, g, b);

            return this._blend_colors(color_a, color_b, (l/100) / contrast, false, false, true);

        });

        return this._remove_duplicate_pxl_colors(pxls, pxl_colors);
    };

    _filter_pixels = (name, intensity = 1, pxls, pxl_colors, remove_duplicate_pxl_colors = true) => {

        pxls = Array.from(pxls);
        pxl_colors = Uint32Array.from(pxl_colors).map((c) => { return this._format_color(c, true)});

        const filters = this._get_filters();
        const filter = filters[name] || filters["1997"];
        const pxl_colors_copy = Uint32Array.from(pxl_colors);

        if(intensity !== 0) {

            pxl_colors = pxl_colors.map((hex) => {

                const rgba = this._get_rgba_from_Uint32(hex);
                return this._get_Uint32_color_from_rgba_values(
                    filter["a"][
                        filter["r"][rgba[0]]],
                    filter["a"][
                        filter["g"][rgba[1]]],
                    filter["a"][
                        filter["b"][rgba[2]]],
                    rgba[3]
                );
            });

            if(intensity !== 1) {

                pxl_colors = pxl_colors.map((hex, index) => {

                    return this._blend_colors(pxl_colors_copy[index], hex, intensity, false, false, true);
                });
            }
        }

        return remove_duplicate_pxl_colors ? this._remove_duplicate_pxl_colors(pxls, pxl_colors): [pxls, pxl_colors];
    };

    _to_dutone = (contrast = 0.8, color_a = "#ffffffff", color_b = "#000000ff") => {

        const { _s_pxls, _s_pxl_colors, _layer_index } = this.state;

        [_s_pxls[_layer_index], _s_pxl_colors[_layer_index]] = this._dutone_pixels(contrast, color_a, color_b, _s_pxls[_layer_index], _s_pxl_colors[_layer_index]);

        this.setState({_s_pxls, _s_pxl_colors, _old_pxls_hovered: -1, _pxls_hovered: -1}, () => {

            this._update_canvas();
        });

    };

    _to_filter = (name, intensity = 1) => {

        const { _s_pxls, _s_pxl_colors, _layer_index } = this.state;

        [_s_pxls[_layer_index], _s_pxl_colors[_layer_index]] = this._filter_pixels(name, intensity, _s_pxls[_layer_index], _s_pxl_colors[_layer_index]);

        this.setState({_s_pxls, _s_pxl_colors, _old_pxls_hovered: -1, _pxls_hovered: -1, _last_action_timestamp: Date.now()}, () => {

            this._update_canvas();
        });

    }

    _to_rotation = (right = true) => {

        const { pxl_width, pxl_height, _s_pxls, _pxl_indexes_of_selection, _select_shape_index_a, _shape_index_a, _base64_original_images, _original_image_index, _layer_index } = this.state;
        const {_imported_image_pxls, _imported_image_width, _imported_image_height} = this.state;
        let { _is_there_new_dimension } = this.state;

        const new_imported_image_width = _imported_image_height;
        const new_imported_image_height = _imported_image_width;
        let n_imported_image_pxls =  new Array(new_imported_image_width * new_imported_image_height);

        const new_pxl_width = pxl_height;
        const new_pxl_height = pxl_width;
        let ns_pxls = this.state._s_pxls;

        let new_pxl_indexes_of_selection = new Set();
        let new_select_shape_index_a = _select_shape_index_a;
        let new_shape_index_a = _shape_index_a;

        if(_imported_image_pxls.length) {

            _imported_image_pxls.forEach((pxl, index) => {

                const x = index % _imported_image_width;
                const y = (index - x) / _imported_image_width;

                const new_y = right ? x: (new_imported_image_height - 1) - x;
                const new_x = right ? (new_imported_image_width - 1) - y: y;
                const new_index = new_x + new_y * new_imported_image_width;

                n_imported_image_pxls[new_index] = pxl;

            });

        }else {

            _is_there_new_dimension = true;

            for (let i = 0; i < _s_pxls.length; i++) {

                let new_pxls = new Array(new_pxl_width * new_pxl_height).fill(0);

                _s_pxls[i].forEach((pxl, index) => {

                    const x = index % pxl_width;
                    const y = (index - x) / pxl_width;

                    const new_y = right ? x: (new_pxl_height - 1) - x;
                    const new_x = right ? (new_pxl_width - 1) - y: y;
                    const new_index = new_x + new_y * new_pxl_width;


                    new_pxls[new_index] = pxl;

                    if(i === _layer_index) {

                        if(_pxl_indexes_of_selection.has(index)) {

                            new_pxl_indexes_of_selection.add(new_index);
                        }

                        if(_select_shape_index_a === index){

                            new_select_shape_index_a = new_index;
                        }

                        if(_shape_index_a === index) {

                            new_shape_index_a = new_index;
                        }
                    }

                });
                ns_pxls[i] = new_pxls;
            }

        }

        //
        if(typeof _base64_original_images[_original_image_index] !== "undefined" && !_imported_image_pxls.length) {

            const degrees = right ? 90: -90;

            let image = new Image();
            image.onload = () => {

                let [ ctx, canvas ] = this._get_new_ctx_from_canvas(image.naturalHeight, image.naturalWidth);

                ctx.clearRect(0,0, canvas.width, canvas.height);
                ctx.save();
                ctx.translate(canvas.width / 2,canvas.height / 2);
                ctx.rotate(degrees * Math.PI / 180);
                ctx.drawImage(image,-image.naturalWidth / 2, -image.naturalHeight / 2);
                ctx.restore();

                const base64_original_image = image.src.includes("image/png") ?
                    canvas.toDataURL("image/png"):
                    canvas.toDataURL("image/jpeg");

                const new_base64_original_images = !_base64_original_images.includes(base64_original_image) ?
                    _base64_original_images.concat([base64_original_image]):
                    _base64_original_images;

                this.setState({
                    pxl_width: new_pxl_width,
                    pxl_height: new_pxl_height,
                    _s_pxls: ns_pxls,
                    _pxl_indexes_of_selection: new_pxl_indexes_of_selection,
                    _is_there_new_dimension,
                    _select_shape_index_a: new_select_shape_index_a,
                    _shape_index_a: new_shape_index_a,
                    _base64_original_images: new_base64_original_images,
                    _original_image_index: -1,
                }, () => {

                    this.setState({
                        _original_image_index: new_base64_original_images.indexOf(base64_original_image),
                        _last_action_timestamp: Date.now()
                    }, () => {

                        this._notify_size_change();
                        this._request_force_update();
                    });
                });

            };
            image.src = _base64_original_images[_original_image_index];

        }else {

            this.setState({
                pxl_width: new_pxl_width,
                pxl_height: new_pxl_height,
                _s_pxls: ns_pxls,
                _imported_image_width: new_imported_image_width,
                _imported_image_height: new_imported_image_height,
                _imported_image_pxls: n_imported_image_pxls,
                _pxl_indexes_of_selection: new_pxl_indexes_of_selection,
                _is_there_new_dimension,
                _select_shape_index_a: new_select_shape_index_a,
                _shape_index_a: new_shape_index_a,
                _last_action_timestamp: Date.now()
            }, () => {

                this._notify_size_change();
                this._request_force_update();
            });
        }
    };

    _pxl_colors_to_alpha = (pxls, pxl_colors, color, intensity) => {

        pxls = Array.from(pxls);
        pxl_colors = Uint32Array.from(pxl_colors);

        pxl_colors = pxl_colors.map((pxl_color) => {

            const difference = this._match_color(color, pxl_color);
            let [r, g, b, a] = this._get_rgba_from_Uint32(pxl_color);
            a -= a * (1 - difference) * intensity;

            return this._get_Uint32_color_from_rgba_values(r, g, b, a);
        });

        return [pxls, pxl_colors];
    };

    _pxl_adjust_contrast = (pxls, pxl_colors, intensity = 1) => {

        let min_grey = 255;
        let max_grey = 0;

        pxl_colors = pxl_colors.map((c) => {return this._format_color(c, true)})
        pxl_colors.forEach((pxl_color, index) => {

            if(pxls.includes(index)) {

                const [r, g, b, a] = this._get_rgba_from_Uint32(pxl_color);
                const greyscale = (r + g + b) / 3 * (a / 255);

                if(a > 0) {

                    if(greyscale > max_grey) {

                        max_grey = greyscale;
                    }
                    if(greyscale < min_grey) {

                        min_grey = greyscale;
                    }
                }
            }
        });

        const alpha = 255 / Math.max(1, max_grey - min_grey);
        const beta = -min_grey * alpha;

        pxl_colors = pxl_colors.map((pxl_color) => {

            let [r, g, b, a] = this._get_rgba_from_Uint32(pxl_color);

            r = r * alpha + beta;
            g = g * alpha + beta;
            b = b * alpha + beta;

            r = parseInt(Math.min(255, Math.max(0, r)));
            g = parseInt(Math.min(255, Math.max(0, g)));
            b = parseInt(Math.min(255, Math.max(0, b)));

            return this._blend_colors(pxl_color, this._get_Uint32_color_from_rgba_values(r, g, b, a), intensity, false, false, true);

        });

        return [pxls, pxl_colors, alpha, beta];

    };

    _pxl_adjust_smoothness = (pxls, pxl_colors, rounds = 1) => {

        const {pxl_width, pxl_height} = this.state;

        for(let round = 0; round < rounds; round++) {

            pxls.forEach((pxl, i) => {

                let up, right, bottom, left;

                up = i - pxl_width; up = up < 0 ? -1: up;
                right = i + 1; right = right % pxl_width === 0 ? -1: right;
                bottom = i + pxl_width; bottom = bottom > (pxl_width * pxl_height) ? -1: bottom;
                left = i - 1; left = left % pxl_width === pxl_width - 1 ? -1: left;

                let up_left, up_right, bottom_left, bottom_right;

                up_left = up - 1; up_left = up === -1 || left === -1 ? -1: up_left;
                up_right = up + 1; up_right = up === -1 || right === -1 ? -1: up_right;
                bottom_left = bottom - 1; bottom_left = bottom === -1 || left === -1 ? -1: bottom_left;
                bottom_right = bottom + 1; bottom_right = bottom === -1 || right === -1 ? -1: bottom_right;

                const pxl_around = [
                    pxls[up],
                    pxls[right],
                    pxls[bottom],
                    pxls[left],
                    pxls[up_left],
                    pxls[up_right],
                    pxls[bottom_left],
                    pxls[bottom_right],
                ];

                let pxl_around_occurrences = [];
                pxl_around.forEach((pxl_around) => {

                    pxl_around_occurrences[pxl_around] = typeof pxl_around_occurrences[pxl_around] === "undefined" ? 1: pxl_around_occurrences[pxl_around] + 1;
                });

                let bigger_pxl_around_occurrence_color_index = -1;
                let bigger_pxl_around_occurrence_occurrence = -1;

                Object.entries(pxl_around_occurrences).forEach((pxl_around_occurrence) => {

                    const [key, value] = pxl_around_occurrence;

                    if(bigger_pxl_around_occurrence_occurrence < value) {

                        bigger_pxl_around_occurrence_occurrence = value;
                        bigger_pxl_around_occurrence_color_index = key;
                    }

                });

                if(bigger_pxl_around_occurrence_occurrence >= 6 && bigger_pxl_around_occurrence_color_index !== -1) {

                    pxls[i] = bigger_pxl_around_occurrence_color_index;
                }

            });

        }

        return this._remove_duplicate_pxl_colors(pxls, pxl_colors);

    };

    _remove_close_pxl_colors = async(pxls = [], pxl_colors  = [], bucket_threshold = null, threshold_steps = null, color_number_bonus = 54, best_color_number = null) => {

        const this_state_bucket_threshold = this.state.bucket_threshold;
        return pool.exec(window.remove_close_pxl_colors_process_function, [
            pxls,
            pxl_colors,
            bucket_threshold,
            threshold_steps,
            color_number_bonus,
            best_color_number,
            this_state_bucket_threshold,
        ]).catch((e) => {

            return window.remove_close_pxl_colors_process_function(
                pxls,
                pxl_colors,
                bucket_threshold,
                threshold_steps,
                color_number_bonus,
                best_color_number,
                this_state_bucket_threshold
            );

        }).timeout(120 * 1000);
    };

    _remove_duplicate_pxl_colors = (_pxls, _pxl_colors) => {

        _pxls = Uint32Array.from(_pxls);
        _pxl_colors = Uint32Array.from(_pxl_colors);

        // Work with Hashtables and Typed Array so it is fast
        let new_pxl_colors_object = {};
        let new_pxl_colors_object_length = 0;
        let new_pxls = new Array(_pxls.length).fill(0);

        _pxls.forEach((pxl, iteration) => {

            const color = _pxl_colors[pxl];
            let index_of_color = typeof new_pxl_colors_object[color] === "undefined" ? null: new_pxl_colors_object[color];

            if(index_of_color === null) {

                index_of_color = new_pxl_colors_object_length;
                new_pxl_colors_object[color] = index_of_color;
                new_pxl_colors_object_length++;
            }

            new_pxls[iteration] = index_of_color;
        });

        let new_pxl_colors = new Uint32Array(new_pxl_colors_object_length);
        Object.entries(new_pxl_colors_object).forEach((entry) => {

            const [key, value] = entry;
            new_pxl_colors[value] = key;
        })

        return [new_pxls, new_pxl_colors];
    };
    
    _get_shadow = (elevation) => {

        function create_shadow(...px) {

            return [
                `${px[0]}px ${px[3]}px ${px[6]}px ${px[9]}px rgba(0,0,0,${shadow_key_umbra_opacity})`,
            ].join(',');

            /*return [
                `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(126,126,126,${shadow_key_umbra_opacity})`,
                `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(126,126,126,${shadow_key_penumbra_opacity})`,
                `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(126,126,126,${shadow_ambient_shadow_opacity})`,
            ].join(',');*/
        }

        const shadow_key_umbra_opacity = 0.2;
        const shadow_key_penumbra_opacity = 0.14;
        const shadow_ambient_shadow_opacity = 0.12;

        // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
        const shadows = [
            'none',
            create_shadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
            create_shadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
            create_shadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
            create_shadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
            create_shadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
            create_shadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
            create_shadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
            create_shadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
            create_shadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
            create_shadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
            create_shadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
            create_shadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
            create_shadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
            create_shadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
            create_shadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
            create_shadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
            create_shadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
            create_shadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
            create_shadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
            create_shadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
            create_shadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
            create_shadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
            create_shadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
            create_shadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ];

        return shadows[elevation];
    }

    _get_cursor = (_is_on_resize_element, _is_image_import_mode, _mouse_down, tool, select_mode, _canvas_event_target) => {

        let cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAq0lEQVRYR+1WQQrAIAxb///oDmUOkc3W2kEG2XHQGpPURg6wTzLwqKr2fUQk3Ddc2AMogBqGgo2ARpkhGaKHZtMIKRmnjJLtrBBIU0O9QzvsjrUpyzUd0BgfvAdYWz3StzLUm7KBuWLEKzZPzHjqO8SWElXuX7UnLCCvTCvTFJYsAuarGswp270tQ77FIOQuY0BjQLOM+zuGVlbK7HIpLzXH3vIXGfIwlGXqE9034xUtxdxDAAAAAElFTkSuQmCC") 18 18, auto';

        if(_is_image_import_mode) {

            if(!_mouse_down) {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABFUlEQVRYR+2Y2w6EIAxEl///aDYYa7C2dFqryyb4qsBhOr3E8kl4aq2Vb1NKKZGtQ4v4QQ2oP7/xTQckqYNAuhTSQiMp1IAiqrmBpEMWEPlBMy+qEOKrV0OG+GoBWZm3FFoKtUyiXsvV+P8sk3rVfqvN/BmF0eUhfiDJT136J0BSnEklrUUM1hzdQvMVH0kudWikkvQuMhV2vfEyyMFAtElwMhW5pclSBOIhYDe6I8ppLQQkZdMUQJpKafLsBdQ0tTaMZYK4TD010NNhg039lkohoKdU6ir3qfSYE2N2dR4Zeru8lT1TAmWHTQsXpBBV7iyoEQwMlAVlwbiA7kIhMG6gHsoTQhQmBNQXTStD+/fIz6r2/RftLsg0XDwDiAAAAABJRU5ErkJggg==") 20 18, auto';
            }else {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA80lEQVRYR+3X4Q6DIAwEYHn/h2bBQIJNoXcVHEb2c3PZx11hGo7FXmExz7FBViM7oe8lFGOMctUhBPcouL4oEfXvK77TiyJpUMEURALIQOR7DJICSUxaOQLSritImRwNstJwIC+G94K0uhxpXDZkrptPqIX5C6iHsU7d+vPO8OMJjcK04FRlszFV3XZCT2Bo0I2/I3i04MpSQhuUc1VP6uVmKA/c9NrgGVoWlG+s4F3DXkgl9ERKLtCslNw3aLPOJC2dc/FW70uCRtfWqgtKqAz3KFQPA4NGoSwMBbqLQjA0qEYxFaIYF6jsSu2Zvrdj0UfpHwMA+yX+QNKuAAAAAElFTkSuQmCC") 20 24, auto';
            }

            if(_is_on_resize_element) {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA9ElEQVRYR+3X0Q6FIAgGYDjn/R/5xBmtmjMTmIBd2G3WvsE/VISXPfgyDyyQ1JFbhYiIpI/q94joVukmyPJ/9i+Q1MUpFTpa8wWAzZoxy/puhg7E9b8MlAhiTRnyaJQIQsQPEW1ZKA2I12AWSgvaO5eBsoBSUFZQOErcyx6GHgf9FxH0kU0xJFMjoJD2jYIYZWpffbypI+EBMlWKQWf2WkcXL5AalQlSobJBImoGqIsq51d0hm5n/9beVx5nskG9kbDjZ4Ca7TtLGQ6S7nT19SoFNHqn8xyMnIlrCmtuGikV0kDKNVF7mdXxuN61ZR6qBZKq+Aeqdig0aelV6gAAAABJRU5ErkJggg==") 18 18, auto'
            }

        }else if ((tool === "MOVE" || _canvas_event_target.includes("CANVAS_WRAPPER")) && !_mouse_down) {

            cursor = "grab";
        }else if((tool === "MOVE" || _canvas_event_target.includes("CANVAS_WRAPPER")) && _mouse_down){

            cursor = "grabbing";
        }else if (tool === "RECTANGLE") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAv0lEQVRYR+2X3Q6AIAiF5f0fmuaFG6OSH9F00a0IX+dAKZTNHtiMpySQ5Mg/FUJEpMoAwKsQSxSqQI2hsiUQb9whhbjf0lS0dWrDUw5qGc9J9956iL6NFob3hSUH33sWEJvWrmBLLJNG1GCpf+wtE5FAkZa5fx0zLNNaW+O6Yx+lUAJJCgwdP2b0kCXnkh5KIE0PuU+MXF6pmHY9BEhbzBInfdtCzkPTgSwFPLGf3zos0EvuZQlkUUCKTcuOU+gCTnb3JcS3RYIAAAAASUVORK5CYII=") 27 12, auto';
        }else if (tool === "ELLIPSE") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABH0lEQVRYR+2X4Q7CIAyEy0x8//c1WoNhCWOFawvo1PnTAf24HqUEOtgvzORhZs7XDyHAeHBAD3AEWhki2wlUqvmfCpVGRR7LPSSNLX1lMnWeAiE90bSIb/NdMrp6hRZMjJIWfw+QBFOUmCrI8JTVYDQ1Zfgp64FJaRxbGEsgbbVd8zdaoYWZ79bSn5tpKJCw2JWIbpZjNPRy9ezOAlsbW61DPwl0uJR5VJ6ashMInapToY8plPU77v5Jew+2AnTdZYJ/ltjHIVWbO/be9t55ERYCvQalXjnJfiGiR22nvT0U9IS02wS5m9sLAxWSGq3sv51I5atDa+TN+x+ZrAXVmuuBUStkhfLCmIHWxh2pqnmRmBs0FHTWd3jKZgX+GoWe1olaNCjYBWEAAAAASUVORK5CYII=") 25 9, auto';
        }else if (tool === "LINE") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA+klEQVRYR+3Y0Q6DIAwFUOr+/5NdTY1dkJS1YIsmstexcLhArYP0sA88zJN+IERECw4AQhdxAmlzkXmCaNvK3ePkbkson5jO1gQd23RKIr9xtydUu/7HVn5SSl9LiegZ03Tt+cADwEJnv2dC7TfmwpjXqMikrFV3QcRVQLknZQVR0kNQLaAhqFZQOKoHFIrqBYWhroBCUFdB7igPUBX1ryrXGj0vkIhSnoni3J4gM4r7rbKPp9S8QdRtmtsYqfkLB/GipcknSHtZGJ6QdsveC9LaVPqeDvuQhCwYHjMU1PDnxe7jYuleh6TVW1J7J8iSTPGG7P8sa0WU4zdwA0Y04iTpEgAAAABJRU5ErkJggg==") 32 32, auto';
        }else if (tool === "PENCIL") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA7UlEQVRYR+3X2w6EIAwEUPv/H82GRDYE6dUO8KCvEntSBgG6DnvoMM/1gbQZWdKhUkppECISa8JBFdMbqk1CQUEjpnVJQsFAHEZDwUC1cASVDmoBbjmRULOpSwX1xftiniylgWZFJRQX7BSQdVraOOgq04J7h/v/77nHs4141SELRlvm41YSBnkwY5ek/SwEQmEq1A1CYtwgNMYFWoExg1ZhTKCVGBW0GiOCdmBY0C7MFLQT8xqkHdi1K8/s/eNPbe0QAhPuEAoTAiExbhAaw4K4MGrX4EiI0w5oGcVNqwxVyPpd9wHN+uHouONAP0LJ2yWtxGVEAAAAAElFTkSuQmCC") 5 32, auto';
        }else if (tool === "PENCIL PERFECT") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA/0lEQVRYR+3XSw7DIAwE0Pj+h6ZCqiNE/cHAGBbttg1+GagBei770GWe5w/yZiQloVJKYQgRmTXhoIppDdVmoaCgHsMpWSgYSMN4KBioFp5BbQfxAuZ1YqGkqdsKaou3xSJraRtIKmqhtIW9BTQ6Lfw76L/MSOZtykJSahBLCVnTFG2Ibyf39hbt+wjm2wLMDr0EQmEqKjxlSEwYhMaEQBmYYVAWZgiUiXFB2RgTdAKjgk5hRNBJzBCIN0bveDG7BfXP/XRq6ZCVhXET4utUf5XyrjIraZkJSQMjMW5CPQiNUUFa5N41eGWqls5DOwqrL40cfGbs8AFtpkjkmetAH9mVQzQQt8P4AAAAAElFTkSuQmCC") 5 32, auto';
        }else if (tool === "PICKER") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABTUlEQVRYR+2W4RKEIAiEpd7/kS9ubLQxFCGUq5upv5X7uYsghIc98DCe8AJJifzEIUTEDAIAXU13oAhTMkS2HtQUoCS6hhC2MhIKk9/1oIaBsmgSOaA4GAlqCIiJY0XEj1AqO1fLqSGgEMJCxZOIdJjcgOLCFZSKxsmhqA2IuGkiIgXfPG2jkU2F2Xentbfxnal+vPpQ5UwSipBsfBKM1SHOmSXWaTrOp+5cHPGqeVLnr0YmwiSBZm3R5tkqlytAXEx0191Cl6C0QGZn8qDXDlgNkNmZwo04ZfZilwpbAhpyBgDKOPNa5vvQDGdO1xFNz+Nob4Hh+tBtME0g7o5DboNcbYmNT4qtiqwEYnqGG8wVhzK4Nk7JCPZ91yFy/60Gp9R1LVQqoGI4HhoeMKrIWrv0gjEBecKwQL3syTiwlEn3H2mWTReUFnyB/s6hL1JSZjT7s1UhAAAAAElFTkSuQmCC") 5 32, auto';
        }else if (tool === "EXCHANGE") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABoklEQVRYR+2Y61IDMQiFoa2+//tqxdmdJAMJ5JBMR6tTf7ob9gMOl5Tpyf74yXjoXwBdReQzG1lm1k5fiOhrdjYdIRGRash+Y46mjg0vdrDn8xTQAbMCkY3eAdtDIaCLiNx7mJnXGgY5sQoUwjDzjYjuIBI3EfnQUAWgHVsC6tNUo+LlPQLTNurHnf+9EVErEjdlHgwzX1GF9GCBnbUIPQrm+CoqhlTKAiAk/ihrg470ixmgs+lVIXoHqkHdlzwapbUTCrzTHhvPHcG51YRSUdI19JhMf0JAQ6oyMCqKy1AvoBI9oyvd234lQl7DbIO7K8NziJbqeieioToeoaElILVimJauyx0NTSTqNFCmLH80Qn8SKDOjQGM046SfBuG0D1p909XC6DCmHP2YLWKpExdvXLHvpDszXLdWhgwMEQ0b6BZQZu1MAKVgDjt9ylzBzfoGgqlac3ZrV79QQ0GEMjpyl7NiL1yHIZAXgd1rEILxUgZFjVIUPZ9tn/rMUh86PTBX9TmejmT2+pRZ3s0PBKghGm83rk4ZoN0sbZ17AaGwfQNzJa40/U9w+QAAAABJRU5ErkJggg==") 18 18, auto';
        }else if (tool === "BUCKET") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABMklEQVRYR+2XwRLDIAhEpen/f3FTOmaajrUgC5jpxVyD+lwXUCoXfszM5/RERMhSUBAyUR9TYVqGyoZAXQLUw1TYvwFlYCr4VIWyMFOBZsBMA5JgTpOj3vlkYySD2jEjmAhUykPaMR3Sd2UHVSoMZHnG+q+dTAgIXQyNa+HcQN5FvPEuIO/kjam/2siocsNAURgvFAQ0yiZv2bCyLwzkBdHi+3IAAb3P/McHWSipNo2Absy8E9FWSnnOhtIKpQp0+qYfiLQKS7lR1RaBrNteBspqIRLQxswP4fp5L6XsozTOKKN2e2330s48SlnKTAFCjY7CiBc0j0LI8Xlg1BujZWrJK9nWYt4YI4+8FsqrjAlkZcygFRyvVeRRKM0Bt44ooHfcArIUWwothSwFrP/LQ5ZCL65vGzRTMXdZAAAAAElFTkSuQmCC") 6 25, auto';
        }else if (tool === "HUE BUCKET") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABMklEQVRYR+2XwRLDIAhEpen/f3FTOmaajrUgC5jpxVyD+lwXUCoXfszM5/RERMhSUBAyUR9TYVqGyoZAXQLUw1TYvwFlYCr4VIWyMFOBZsBMA5JgTpOj3vlkYySD2jEjmAhUykPaMR3Sd2UHVSoMZHnG+q+dTAgIXQyNa+HcQN5FvPEuIO/kjam/2siocsNAURgvFAQ0yiZv2bCyLwzkBdHi+3IAAb3P/McHWSipNo2Absy8E9FWSnnOhtIKpQp0+qYfiLQKS7lR1RaBrNteBspqIRLQxswP4fp5L6XsozTOKKN2e2330s48SlnKTAFCjY7CiBc0j0LI8Xlg1BujZWrJK9nWYt4YI4+8FsqrjAlkZcygFRyvVeRRKM0Bt44ooHfcArIUWwothSwFrP/LQ5ZCL65vGzRTMXdZAAAAAElFTkSuQmCC") 6 25, auto';
        }else if (tool === "CONTOUR") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA/klEQVRYR+XX7Q6FIAgG4Lz/i/bMlo2ZIB++zO30t1xPgEjlOuwqh3mu/wPVWuuYhVIKGwhohBpm9u5m5FAwEIfp0eJQENAM0zNHIzZDbQdxmJ4ieh8O0tRMGkiqGbrRUlK2KmCu+UJSthPT4KGi3o0JgRAYNwiFcYGQGDMIjTGBMjBqUBbGBLof5seYT++TRgxpSjX1oT5srWBejCpCBPHiJVgEswSNJ3MPNR0laCqjGBOI5p0MW3fUZlH0/s2INbTaXSPMi6DrwiDpD8IDdIN21MsM7AKhMK6iRmLMIDTGBMrAqEFZGBXo6cSmM8+z3d9TILIYsTbty7X440A/uhPvJTjQhwcAAAAASUVORK5CYII=") 8 33, auto';
        }else if (tool === "BORDER") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAk0lEQVRYR+2YwQ6AIAxD2f9/9AgHDyixrs5kxHotHeVtB9Basc+K5WkKhDpyIeTujkyZuplNGZaBTmsy959qjbPvHeir7h0dCBNaGd72b8yoAt1RFCE0YyIkQogA0jVDIoQIIF0zJEKIANI1Q/8jhE7M6PSdmtks4gm/OiLFmbWPAzHFWQ98ubKFs3z6HYNIliPUAQ/FUDSiymd+AAAAAElFTkSuQmCC") 18 18, auto';
        }else if (tool === "SET PENCIL MIRROR") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABR0lEQVRYR+3X3Q6CMAwF4DUY3v91NeIxEGYGbv1jXbzQW2R8nI5uo/RjP/J4AEBzHxGZxzffsGK0z1ndVpQJZMHkBK0oNeiMkapWpmhBqUA1jFCKGcDdgxJBDkyulgvFgi5g3KgmqAPGhVKBLJOy0Z8O5ePG6wGaADylflMmHgnKmAeAmUONAGXMViWprNEgFrM/fEopvYqO/VlyepdMg8mJfVBhCXEDV67Fg/b5sm0/yknMYfI9eSnpXbKvViNhhoI0mGGgCuaWUlpq3TpsUjOfcRMTnpC2TGVSoQntgy8AJiJikxnRGPNSsXZeFSa8ZJoj0Pk/oSX7g84112wvuNQs2+HoTf666h9OutK+KfIYZMZsC7Zmglrf8krJVaDWA7iX8Zxa1QnVuq0mWc/HoE7Ig5ImcO2lzKByxyilJJ3VuoEkyJXrb6IrI0OmlalfAAAAAElFTkSuQmCC") 18 18, auto';
        }else if (tool === "SELECT COLOR THRESHOLD") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABeklEQVRYR82W2w7DIAxDQfv/P57GREWqNM3FlAh1j2trDokdqOVlv/oynnICtdZah6u13iC9Z3JDqzoXoM7SuThUX0D736qs9T6qc6kG/4gWnIGhbyyd/lxuWG5MbY/sWiSiVYug+DNEJwRCRBAgVAcF+pRSfjOJlBUaQKGO6iHq9Uhd2HctadT2Ed4eFEhHTRmL/6e19rXERhXMKrM2uTp8Q/AcklBejK1ZhMwzeFJzMcMfsJbnxWkRDjNacuijKYqCMQWkwFTtv2jRlAp5C2dCQRVCFkTeQSoHAQ2PHIes5Zcso8NAHpR2bj01+hSQBkXT3LmOqHcs6/1pIAmF+GJmJMCTmh0n5KPTU5lQSzdGyzsr7YNujJ5Bs6HC+xCSlkyoEAg1ZBYUChTe9LLSl35jXK3ULWXCM/BNjydrBSqMPW8F6qeV9kGDkRaQwzEaiI8qFYmuPkehqPqPzrJZyAiKW2ELkOcp6cttQBqUFpKtQEhitwMxKHXtP/Eo9zDGipjdAAAAAElFTkSuQmCC") 7 7, auto';
        }else if (tool === "SELECT PATH") {

            cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA/klEQVRYR+XX7Q6FIAgG4Lz/i/bMlo2ZIB++zO30t1xPgEjlOuwqh3mu/wPVWuuYhVIKGwhohBpm9u5m5FAwEIfp0eJQENAM0zNHIzZDbQdxmJ4ieh8O0tRMGkiqGbrRUlK2KmCu+UJSthPT4KGi3o0JgRAYNwiFcYGQGDMIjTGBMjBqUBbGBLof5seYT++TRgxpSjX1oT5srWBejCpCBPHiJVgEswSNJ3MPNR0laCqjGBOI5p0MW3fUZlH0/s2INbTaXSPMi6DrwiDpD8IDdIN21MsM7AKhMK6iRmLMIDTGBMrAqEFZGBXo6cSmM8+z3d9TILIYsTbty7X440A/uhPvJTjQhwcAAAAASUVORK5CYII=") 8 33, auto';
        }else if (tool === "SELECT PIXEL") {

            if(select_mode === "ADD" || select_mode === "REPLACE") {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABBElEQVRYR+3XyxLCIAwF0PL/H43DIk7EvG5KoOPoGuVwk1jarod92sM8lwnqvXcObq2VH8AFkWHYfgbEk/YOVZ7QwPBKe0mXgmYM9aOFeoPmBqYv8x6SJlIrgYbxUB8gdIi8+DOo5SBKmpKzUNKBlpaMb843Q3ppWVNLm1oordxLQNGy0LrQlEkTpJWAr/Uad6wVklKDuJVQBOON+RyEC9IerghmTsm6YaSe3lWYAYVBlRgYVI2BQDswYdAuTAi0E+OCdmNM0AmMCjqFEUEnMbdB3o0x8xL69U8dTagCk06oCpMCVWJgUDVGBWnN6L0GZ5oYuqCt2AD9Dfg+hG6Arv+DvMReyBw3NCzTf+YAAAAASUVORK5CYII=") 5 32, auto';
            }else if(select_mode === "REMOVE"){

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA9klEQVRYR+3XQRKDMAgFUHP/Q6eTBR2MgQ8I0YXdmpHnh2jajpf92ss8xwdCHdmSUO+9E6S1ptYsBw0MNwybhioFzRhKSUP9QTxW1Gd+XXpaCYNQJxBo78WJ4o+g0kGUNCWnoVYPlNoyXpwX88xS2lCvimooqd0pIGtbaJ1pl3l2Fl+LBnesXSQlBnErIQsGbfM5iDDIg5lT0roRAlVhBtQNqsS4QdUYF2gHxgzahTGBdmIgaDdGBT2BEUFPYZagJzG3QejEGPlgX97U1oQqMOGEqjAhUCXGDarGiCBpGNHf4MgQpx3QMoqv7uE+D1VB6L4fCCX8A+VV8SWc4ctzAAAAAElFTkSuQmCC") 5 32, auto';
            }else if(select_mode === "REPLACE") {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABNUlEQVRYR+3X4Q6EIAgAYLn3f+a42aIZgYCFddv165aXfiKYQXnZBS/zlN8AISICwKeUgiyCgIgLAKRN5NTxhimIWBiKMNTmRtU+aWLWZA6dEoYeblAVUSOzB2xrM1FKn+pzvGGPQouqvwWMtKSHFeYYNlERJd08odpRhKUUC1XDWCgtdCLKi2kGrcWh7izSst8OogSm5O1FygsaXrJ28HawSC7dltTSoD2UVqW3lL13Wdge56uy6MZoVVPNaCFS7n1orQjvq8ODscqcl6C502o1G8HwKPVOGEOgLMz6RoiehzIxYVA2JgSagXGDZmFcoJkYEzQb0wU9gVFBT2FE0JOYyyDvQT+y+aqfQVYnGZjhCGVhhkCZmDAoG6OCtPyxPoOtvPO0h48fnk6v/OcPsqL3ugh9ATjCXTQqEhJmAAAAAElFTkSuQmCC") 18 18, auto';
            }
        }else if (tool === "SELECT PIXEL PERFECT") {

            if(select_mode === "ADD") {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABFUlEQVRYR+3XWQ7DIAwE0HD/QxNRycil3oZigqrmm4jHmLVch33lMM9lgmqtlYNLKekDcEFkaLafAfGkvUGlJ9QwvNJe0qmgEUPz0UJ10DiB6Wc+h6QVqZVAw3ioNxC6iLz4Z1DLQZQ0JWehpAEtLRnvnHeGzKVlk1rq1EJp5V4CipaF2oVWmbSCtBLwtkYyvZmQlBrEVwlZZUI3xL7NWKe9dbgimNaHt0WEQBo2C9P6g68TmRgYlI2BQDswYdAuTAi0E+OCdmNM0BMYFfQURgQ9iQmBaMv3rherHpwfO7V0wu/CuAnRw3W8a0cPypnUzISUO1LqCxYCZSajXj+099mrvug7aaJm8PVjog/olz/Ii+u4hG5e9580PRb9NQAAAABJRU5ErkJggg==") 5 32, auto';
            }else if(select_mode === "REMOVE"){

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABBklEQVRYR+3Xyw6EMAgFUPn/j+6kCwwqj14t1Emc7TRyvFSqtL3sRy/zbB8o6khJQq21xhAicmumgzpGGrrNQ6WCzhhOyUPtIBlr1Gf5v3W3FiZCHUBBey/OKP47qOkgTpqT81DaDU1tmSwuiyF7adqm1op6KKvdU0CjbeF1Q08Z8mTJtU4y+zIlKTOIRwl5bUIH4j7JE5KhaD95NW8lhCTTi0fz6jBo0YQyMd0CJZSNgUAVmGFQFWYIVIkJQdUYF7QCY4JWYVTQSswQiKfsk+MAGb6Xwai9ZFVhwoT4c+r8ro2cTUg6IUi7WCYGBmVjTJAVc/QZjLZHWw+d9jMKRtf4QH+X0A98MFk0IsucOwAAAABJRU5ErkJggg==") 5 32, auto';
            }else if(select_mode === "REPLACE"){

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABUklEQVRYR9WX7RKEIAhFZd//mZcdG2mIQMDS2v3VbAbHi3wI5WU/eBlP+Q8gREQA+JRSUCgIiPgFgGkbORluMAURi4AiGHoXhqo2aWPeZg5GCYY+ZlAVoiqzC9beuVCGTfM7+WJXgUPVZwVGC+khwhJGbFSF0v48QXEvSijVRLVgPChLOhUqCsOc1uQwK4sW9tuB6ADT4e0pFQUaDhl3zp1lztJth1pz2oOysvSWtI+GRdS4WJZlC2NHGbVmtfXhOrQZibaOXpiyBXGv5KPdPgPTNlmLq1vZ3QUa8CyYrSNkFZoJkwaaDZMCWgETBloFEwJaCeMCrYbpAj0BYwI9BaMCPQkTAqIxwRsvsgXWWm9eg3j/WQXjKkTXKdkTo1egEdW6ChmNNdS1R2BchaTRmcqY8xC/9kqgyDwzqszlAe2q43CWzXIUtZse0KKGR9e9DugHz47FNAGTbH0AAAAASUVORK5CYII=") 5 32, auto';
            }
        }else if(tool.includes("SELECT")) {

            if(select_mode === "ADD") {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAkElEQVRYR+2XQQqAMAwEm/8/OpKDUApmUwoScbwmpdNpXNRGs8ea8QyA1I1g6H+G3N3nU5vZ0RgcLQ6QALoZgg2gdSgxpF5TDGEoM7CG3lPvnEPKaNSzrEqDcR7YykaVHhWe3wOqnPq1K6vAkEPKEoYwpAyoOjNUMdTqI18B79aP/zp2N1T9AGFIGVD1djN0AfXGlCWHImsNAAAAAElFTkSuQmCC") 18 18, auto';
            }else if(select_mode === "REMOVE") {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAb0lEQVRYR+2UQQrAIBDEdv7/6C0+oAYWClriNbiOcTB12MphecpA9CIa0hAZIG6HNEQGiNshDZEB4tsOdXfTgAlP8nouBtrsnWSpdcd/BRppgE1jQ1+EoZl+jBoiA8TtkIbIAHE7pCEyQNwOXWfoAYpLFiWYvOCxAAAAAElFTkSuQmCC") 18 18, auto';
            }else if(select_mode === "REPLACE") {

                cursor = 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABCElEQVRYR+2X3Q6DMAiFwb3/I8+zYFbj5ixwmixsqTdeWNqPw09RpdijxXhkAnkRmQr9p0IAoKo3EVk9Dy++LwDuquqmiLvgCbMCWEgoBbCq2sv86kN1gRqMiCzmOQBJQjVlmnDNsctzPYWad3skElCUrQdkIMzGjM3mdAQoC0XDZICiUEMwWSAPymrAqonJt90mGrJje3mvnK36NtpBGEahBnYKzZE4UYmnPsoo1IUagRlR6GM+kc3zRSVWoVIhK5XUvT7z9bKPNL3Imu4EE82hzEGZtVTZMwcwNqHLld6YnBL6t33FAc3uKZs7a4ywLeNKDfnkXwZtFi17+oCs4QTyFJsK/ZxCD73aLDSws54nAAAAAElFTkSuQmCC") 18 18, auto';
            }
        }

        return cursor;
    };

    _set_moves = (new_scale_move_x, new_scale_move_y,  new_scale = null) => {

        let new_scale_move_speed_timestamp = Date.now();

        const {
            scale_move_x,
            scale_move_y,
            _scale_move_speed_timestamp,
            scale
        } = this.state;

        const time_difference_moves = new_scale_move_speed_timestamp - _scale_move_speed_timestamp;
        const x_diff = scale_move_x - new_scale_move_x;
        const y_diff = scale_move_y - new_scale_move_y;
        const space_difference_moves = Math.sqrt((x_diff * x_diff) + (y_diff * y_diff));
        const moves_speed = Math.min(Math.round((space_difference_moves / time_difference_moves) * 200), 200);

        let { _moves_speeds } = this.state;
        _moves_speeds.push(moves_speed);

        if(_moves_speeds.length >= 15) {

            _moves_speeds.shift();
        }

        let _moves_speed_average =  [..._moves_speeds].slice(-15).reduce((p,c,i,a) => p+(c/a.length), 0);
        _moves_speed_average = Math.max(1, Math.round(Math.floor(_moves_speed_average * 24/200 )))

        const now = Date.now();

        this.setState({
            scale: new_scale === null ? scale: new_scale,
            scale_move_x: new_scale_move_x,
            scale_move_y: new_scale_move_y,
            _scale_move_speed_timestamp: now,
            _moves_speeds: [..._moves_speeds],
            _moves_speed_average_now: (new_scale !== null && new_scale > scale) ? 24: (new_scale !== null && new_scale < scale) ? 0: _moves_speed_average,
        }, () => {

            if(this.props.on_elevation_change) {

                this.props.on_elevation_change(this.state._moves_speed_average_now);
            }

            if(this.state.has_shown_canvas_once) {

                this._request_force_update(true, true);
            }
        });
    };

    _request_force_update = (can_be_cancelable = false, especially_dont_force = false, callback_function = () => {}) => {

        const {_force_updated_timestamp } = this.state;
        const now = Date.now();

        const min_fps = window.w_canvas_pixels._is_mobile_or_tablet ? 25: 75;
        const nevertheless_force = Boolean((_force_updated_timestamp + 1000 / min_fps) < now);
        const nevertheless_for_sure_force = Boolean((_force_updated_timestamp + 1000 / (min_fps / 10)) < now);

        if(can_be_cancelable && !nevertheless_force && !nevertheless_for_sure_force) {

            return;
        }

        _anim_loop(() => {

            this.forceUpdate(() => {

                this.setState({_force_updated_timestamp: now});
                callback_function();
            });
        }, Boolean(!can_be_cancelable || nevertheless_force), Boolean(!especially_dont_force || nevertheless_force));
    }

    set_move_speed_average_now = () => {

        let { _moves_speed_average_now, _scale_move_speed_timestamp, shadow_size } = this.state
        const now = Date.now();

        if(now - _scale_move_speed_timestamp >= 30 && _moves_speed_average_now !== -24)  {

            const new_moves_speed_average_now = Math.max(_moves_speed_average_now - 1, -24);

            this.setState({
                _moves_speed_average_now: new_moves_speed_average_now,
                _scale_move_speed_timestamp: now,
            }, () => {

                if(this.props.on_elevation_change) {

                    this.props.on_elevation_change(this.state._moves_speed_average_now);
                }

                if(new_moves_speed_average_now !== _moves_speed_average_now && this.state._scale_move_speed_timestamp === now && shadow_size > 0) {

                    this._request_force_update(true, true);
                }
            });
        }
    }

    _update_canvas_container_size = () => {

        const rect = this.state._canvas_container ? this.state._canvas_container.getBoundingClientRect(): null;

        if(!rect){

            setTimeout(() => {

                this._update_canvas_container_size();
            }, 50);
        }else {

            const _canvas_container_width = rect.width || 0;
            const _canvas_container_height = rect.height || 0;
            const _canvas_container_left = rect.left || 0;
            const _canvas_container_top = rect.top || 0;

            this.setState({_canvas_container_width, _canvas_container_height, _canvas_container_left, _canvas_container_top}, () => {

                this._update_screen_zoom_ratio(true);
            });
        }

    };

    _update_screen_zoom_ratio = (align_center_middle, callback_function = () => {}) => {

        const { _canvas_container_width, _canvas_container_height, pxl_width, pxl_height } = this.state;

        const _screen_zoom_ratio = _canvas_container_width > _canvas_container_height ?
            (_canvas_container_height - this.state.canvas_wrapper_padding / window.devicePixelRatio * 2) / pxl_height:
            (_canvas_container_width - this.state.canvas_wrapper_padding / window.devicePixelRatio * 2) / pxl_width;

        this.setState({_screen_zoom_ratio}, () => {

            this._request_force_update(false, true,() => {

                if(align_center_middle) {

                    this._to_canvas_middle(true, 1, callback_function);
                }
            });
        });
    };

    render() {

        const {
            pxl_width,
            pxl_height,
            show_original_image_in_background,
            show_transparent_image_in_background,
            className,
            _original_image_index,
            scale,
            scale_move_x,
            scale_move_y,
            canvas_wrapper_background_color,
            canvas_wrapper_border_radius,
            canvas_wrapper_padding,
            canvas_wrapper_border_width,
            _moves_speed_average_now,
            _is_on_resize_element,
            _is_image_import_mode,
            _mouse_down,
            tool,
            select_mode,
            _screen_zoom_ratio,
            _mouse_inside,
            _canvas_event_target,
            _loading_base64_img,
            _hidden,
            show_image_only_before_canvas_set,
            has_shown_canvas_once,
            perspective,
            light,
            shadow_size,
            shadow_color,
            _kb,
        } = this.state;

        let { perspective_coordinate } = this.state;

        const p = window.w_canvas_pixels._is_mobile_or_tablet ? 0: perspective / 4;

        let background_image_style_props = show_original_image_in_background && typeof this.state._base64_original_images[_original_image_index] !== "undefined" ?
            {
                background: `center / cover no-repeat url("${this.state._base64_original_images[_original_image_index]}")`,
            }:
            show_transparent_image_in_background ?
                {
                    background: `repeating-conic-gradient(rgb(248 248 248 / 100%) 0% 25%, rgb(235 235 235 / 100%) 0% 50%) left top 50% / calc(200% / ${pxl_width}) calc(200% / ${pxl_height})`,
                }: {};

        background_image_style_props = show_original_image_in_background && _loading_base64_img.length ?
            {
                background: `center / cover no-repeat url("${_loading_base64_img}")`
            }: background_image_style_props;

        background_image_style_props = (show_image_only_before_canvas_set && !has_shown_canvas_once) || !show_image_only_before_canvas_set ?
            background_image_style_props: {};

        const canvas_wrapper_width = Math.round(pxl_width * _screen_zoom_ratio * scale);
        const canvas_wrapper_height = Math.round(pxl_height * _screen_zoom_ratio * scale);

        const l = window.w_canvas_pixels._is_mobile_or_tablet ? 0: light * p * 2;

        const filter_force = (1 - (p/200) * l) + (
                                    (
                                        l * (3*p - Math.floor((perspective_coordinate[0]+p)*10) / (p*3*10)) / 2 +
                                        l * (Math.floor((perspective_coordinate[1]+p)*10) / (p*3*10)) / 2
                                    ) / (3*p) * (p/100));

        const padding = Math.floor(canvas_wrapper_padding / window.devicePixelRatio * scale);

        const rotate_x = Math.round((perspective_coordinate[1] * p / scale) * 1000) / 1000;
        const rotate_y = Math.round((perspective_coordinate[0] * p / scale) * 1000) / 1000;

        const shadow_depth = _moves_speed_average_now < 0 ? Math.abs(_moves_speed_average_now) / 4: _moves_speed_average_now / 2;

        const cursor = this._get_cursor(_is_on_resize_element, _is_image_import_mode, _mouse_down, tool, select_mode, _canvas_event_target);


        return (
            <div ref={this._set_canvas_container_ref} draggable={"false"} style={{zIndex: 11, boxSizing: "border-box", position: "relative", overflow: "visible", touchAction: "none", userSelect: "none", contain: "paint"}} className={className}>
                <div ref={this._set_canvas_wrapper_overflow_ref}
                     className={"Canvas-Wrapper-Overflow" + (has_shown_canvas_once && !_hidden ? " Shown ": " Not-Shown ")}
                     draggable={"false"}
                     style={{
                         height: "100%",
                         width: "100%",
                         contain: "layout style size paint",
                         position: "absolute",
                         boxSizing: "border-box",
                         touchAction: "manipulation",
                         pointerEvents: "auto",
                         userSelect: "none",
                         perspective: `${Math.round(Math.max(canvas_wrapper_width, canvas_wrapper_height))}px`,
                         zIndex: 9,

                     }}>
                    <div ref={this._set_canvas_wrapper_ref}
                         className={"Canvas-Wrapper " + (_mouse_inside ? " Canvas-Focused ": " " + (tool))}
                         draggable={"false"}
                         style={{
                             contain: "layout style size paint",
                             left: 0,
                             top: 0,
                             borderWidth: canvas_wrapper_border_width,
                             borderStyle: "solid",
                             borderColor: "#fff",
                             backgroundColor: canvas_wrapper_background_color,
                             //backgroundImage: `linear-gradient(to top, ${canvas_wrapper_background_color} ${padding/2.5}px, ${this._blend_colors(canvas_wrapper_background_color, "#00000000", .6)} ${padding/2.5}px, #ffffff00 150%)`, //, repeating-linear-gradient(-45deg, rgba(255, 255, 255, .75) 0px, rgba(255, 255, 255, .75) ${padding}px, rgba(255, 255, 255, 0.5) ${padding}px, rgba(255, 255, 255, 0.5) ${padding*2}px)`,*/
                             margin: 0,
                             borderRadius: canvas_wrapper_border_radius,
                             padding: padding,
                             width: Math.floor(canvas_wrapper_width),
                             height: Math.floor(canvas_wrapper_height),
                             filter: `drop-shadow(0 0 ${shadow_depth*shadow_size}px ${shadow_color}) opacity(${has_shown_canvas_once && !_hidden ? "1": "0"})`,
                             transform: `translate(${Math.round(scale_move_x * 100) / 100}px, ${Math.round(scale_move_y * 100) / 100}px) ${(rotate_x || rotate_y) ? `rotateX(${rotate_x}deg) rotateY(${rotate_y}deg)`: ``}`,
                             willChange: "transform",
                             transformOrigin: "center middle",
                             boxSizing: "content-box",
                             touchAction: "none",
                             pointerEvents: "none",
                             userSelect: "none",
                             zIndex: 4,
                         }}>
                        <canvas
                            draggable={"false"}
                            style={{
                                zIndex: 2,
                                position: "absolute",
                                contain: "layout style size paint",
                                touchAction: "none",
                                pointerEvents: "none",
                                userSelect: "none",
                                width: Math.floor(pxl_width),
                                height: Math.floor(pxl_height),
                                transform: `scale(${(_screen_zoom_ratio * scale).toFixed(3)})`,
                                transformOrigin: "left top",
                                boxSizing: "content-box",
                                borderWidth: 0,
                                ...background_image_style_props,
                            }}
                            className={"Canvas-Pixels"}
                            ref={this._set_canvas_ref}
                            width={Math.floor(pxl_width)}
                            height={Math.floor(pxl_height)}/>
                        {
                            Boolean(p) &&
                            <div className={"Canvas-Pixels-Cover"}
                                 datatexttop={`D[${pxl_width}, ${pxl_height}]px // S[${_kb.toFixed(2)}]Kb`}
                                 datatextbottom={`ΔZ[${_screen_zoom_ratio.toFixed(2)}, ${scale.toFixed(2)}]x // ΔR[${(perspective_coordinate[1] * p / scale).toFixed(2)}, ${(perspective_coordinate[0] * p / scale).toFixed(2)}]°`}
                                 draggable={"false"}
                                 style={{
                                     backgroundImage: p ? `linear-gradient(to left, rgba(
                            ${255 - Math.floor((perspective_coordinate[0]+p) / (p*2) * 255)},
                            ${255 - Math.floor((perspective_coordinate[0]+p) / (p*2) * 255)},
                            ${255 - Math.floor((perspective_coordinate[0]+p) / (p*2) * 255)}, 
                            ${(Math.abs(perspective_coordinate[0]) / p / 6 * 0.3 * (p*l/100)).toFixed(2)}
                            ), rgba(
                            ${255 - Math.floor((perspective_coordinate[0]+p) / (p*2) * 255)},
                            ${255 - Math.floor((perspective_coordinate[0]+p) / (p*2) * 255)},
                            ${255 - Math.floor((perspective_coordinate[0]+p) / (p*2) * 255)}, 
                            ${(Math.abs(perspective_coordinate[0]) / p / 6 * 3 * (p*l/100)).toFixed(2)}
                            )), linear-gradient(to top, rgba(
                            ${Math.floor((perspective_coordinate[1]+p) / (p*2) * 255)},
                            ${Math.floor((perspective_coordinate[1]+p) / (p*2) * 255)},
                            ${Math.floor((perspective_coordinate[1]+p) / (p*2) * 255)}, 
                            ${(Math.abs(perspective_coordinate[1]) / p / 6 * 2 * (p*l/100)).toFixed(2)}
                            ), rgba(
                            ${Math.floor((perspective_coordinate[1]+p) / (p*2) * 255)},
                            ${Math.floor((perspective_coordinate[1]+p) / (p*2) * 255)},
                            ${Math.floor((perspective_coordinate[1]+p) / (p*2) * 255)}, 
                            ${(Math.abs(perspective_coordinate[1]) / p / 6 * 1 * (p*l/100)).toFixed(2)}
                            ))`: "none",
                                     zIndex: 3,
                                     borderRadius: canvas_wrapper_border_radius,
                                     padding: 0,
                                     left: 0,
                                     top: 0,
                                     borderWidth: 0,
                                     position: "absolute",
                                     width: Math.ceil(canvas_wrapper_width + 2 * (canvas_wrapper_padding / window.devicePixelRatio * scale)),
                                     height: Math.ceil(canvas_wrapper_height + 2 * (canvas_wrapper_padding / window.devicePixelRatio * scale)),
                                     boxSizing: "content-box",
                                     touchAction: "none",
                                     pointerEvents: "none",
                                     userSelect: "none",
                                     willChange: (perspective && (rotate_x || rotate_y)) ? "filter, background-image": "",
                                     filter: Boolean(p) && `brightness(${filter_force}) contrast(${filter_force})`,
                                 }}/>
                        }
                    </div>
                    <div style={{
                        left: 0,
                        top: 0,
                        position: "absolute",
                        cursor: cursor,
                        height: "100%",
                        width: "100%",
                        boxSizing: "border-box",
                        touchAction: "none",
                        pointerEvents: "auto",
                        userSelect: "none",
                        contain: "layout size style paint",
                        zIndex: 10,
                    }}></div>
                    {!window.w_canvas_pixels._is_mobile_or_tablet && <div style={{
                        zIndex: 1,
                        color: canvas_wrapper_background_color,
                        textAlign: "center",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "100px",
                        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzU4LjY2NyAyNDAiIHdpZHRoPSI3Njc4LjIyMyIgaGVpZ2h0PSIzMjAiPjxkZWZzPjxjbGlwUGF0aCBpZD0iQSI+PHBhdGggZD0iTTAgMGg1NzU4LjY2N3YyNDBIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyBjbGlwLXBhdGg9InVybCgjQSkiIGZpbGw9IiM3NzciPjxwYXRoIGQ9Ik05MjEgMTgwaDMwdjYwaC0zMHptLTIzMiAwaDMwdjYwaC0zMHptLTIyOSAwaDMwdjYwaC0zMHptLTIyOSAwaDMwdjYwaC0zMHpNMCAwaDMwdjI0MEgwem0yMDczIDE4MGgzMHY2MGgtMzB6bS0yMzIgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6TTExNTIgMGgzMHYyNDBoLTMwem0yMDczIDE4MGgzMHY2MGgtMzB6bS0yMzIgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6TTIzMDQgMGgzMHYyNDBoLTMwem0yMDczIDE4MGgzMHY2MGgtMzB6bS0yMzIgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6TTM0NTYgMGgzMHYyNDBoLTMwem0yMDczIDE4MGgzMHY2MGgtMzB6bS0yMzIgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6bS0yMjkgMGgzMHY2MGgtMzB6TTQ2MDggMGgzMHYyNDBoLTMweiIvPjwvZz48L3N2Zz4K")`,
                        backgroundPosition: "bottom",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: `${Math.round(scale * _screen_zoom_ratio * 5 * 5)}px`,
                        pointerEvents: "none",
                        touchAction: "none",
                    }}><span>[{Math.round(scale * _screen_zoom_ratio * 100) / 100}x]</span></div>}
                </div>
            </div>
        );
    }
}

export default CanvasPixels;
