import {SIMDopeCreate} from "simdope";
const {Color, Colors, simdops} = SIMDopeCreate({
    "create": {
        "new_uint32": true,
        "new_zero": true
    },
    "properties": {},
    "methods": {
        "get_use_element": true,
        "blend_first_with": true,
        "blend_with": true
    }
});
var {abs_int, clamp_int, minus_int} = simdops;
var fr = Math.fround;
import {SetFixed} from "@asaitama/boolean-array";
import XXHashJS from "./xxhash";
import XXHashWASM from "xxhash-wasm";

const XXHash = {
    _get_64_js() {

        return {
            // Compute properties
            xxh_f: {hasher: XXHashJS, create: function(seed){return this.hasher.h64(seed); }},
            xxh_v: "64",
            xxh_t: "js",
            xxh_tt: Date.now()
        };
    },
    _get_64_wasm() {

        return new Promise(function(resolve, reject){

            try {

                XXHashWASM().then(function(hasher){

                    resolve({
                        xxh_f: {hasher: hasher, create: function(seed){return this.hasher.create64(BigInt(seed))}} ,
                        xxh_v: "64",
                        xxh_t: "wasm",
                        xxh_tt: Date.now()
                    });
                }).catch(function(e){

                    reject();
                });

            } catch (e) {

                reject();
            }
        });
    },
    new(){

        const alphabet_58 = Uint8Array.from("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(function(v){return v.charCodeAt(0)}));
        const base_58 = BigInt(alphabet_58.length); // base is the length of the alphabet (58 in this case)
        let encoded = new Uint8Array(14);

        let cs_64_js = this._get_64_js;
        let cs_64_wasm = this._get_64_wasm;

        let s = cs_64_js();
        cs_64_wasm().then(function(r){s = r;});

        return {
            // Methods
            get_info: function() {
                return {
                    version: s.xxh_v,
                    type: s.xxh_t,
                    timestamp: s.xxh_tt
                };
            },
            base58_that: function (array_buffers) {
                "use strict";
                let c = 0;
                let remainder = BigInt(0);
                let xxh = s.xxh_f.create(0xF4D3);
                if(array_buffers instanceof Uint8Array || array_buffers instanceof Uint8ClampedArray){
                    xxh.update(array_buffers)
                }else {
                    array_buffers.forEach(function(ab){
                       xxh.update(ab);
                    });
                }
                let num = BigInt(xxh.digest());

                while (num > 0) {
                    remainder = Number(num % base_58);
                    num = BigInt(num / base_58);
                    encoded[c|0] = (alphabet_58[remainder] | 0) & 0xFFFF;
                    c = (c + 1 | 0) & 0xF;
                }

                var str = String.fromCharCode.apply(null, encoded.slice(0, c|0));
                return str;
            }
        };
    }
};

var xxhash = Object.create(XXHash).new();

function uint_equal(a, b) {
    "use strict";
    a = (a | 0) >>> 0;
    b = (b | 0) >>> 0;
    return ((a | 0) >>> 0) == ((b | 0) >>> 0);
}
function uint_not_equal(a, b) {
    "use strict";
    a = (a | 0) >>> 0;
    b = (b | 0) >>> 0;
    return ((a | 0) >>> 0) != ((b | 0) >>> 0);
}

var Layer = function(image_data_or_colors_and_indexes, width, height, with_plain_data, bmp){
    "use strict";

    if (!(this instanceof Layer)) {
        return new Layer(image_data_or_colors_and_indexes, width, height, with_plain_data);
    }

    width = (parseInt(width || 0) | 0) >>> 0;
    height = (parseInt(height || 0) | 0) >>> 0;
    this.with_plain_data_ = typeof with_plain_data == "undefined" ? false: Boolean(with_plain_data) && true;

    if(image_data_or_colors_and_indexes.length === 2){

        // Initialize the matrix data width and height
        this.width_ = width | 0;
        this.height_ = height | 0;
        // Initialize the graphic bitmap image of the layer
        this.bitmap_ = typeof bmp == "undefined" ? {height: this.height_, width: this.width_, destroy: function (){}, hash: ""}: bmp;
        // Initialize the tracking of pixel change
        // Fill the dual data set (linear, matrix) from color and indexes
        this.force_update_data(image_data_or_colors_and_indexes[0], image_data_or_colors_and_indexes[1]);


    }else{
        if(image_data_or_colors_and_indexes.data8 instanceof Uint8ClampedArray) { // image_data

            this.width_ = image_data_or_colors_and_indexes.width | 0;
            this.height_ = image_data_or_colors_and_indexes.height | 0;
            this.populate_data(new Uint32Array(image_data_or_colors_and_indexes.data8.buffer));

        }else if(image_data_or_colors_and_indexes instanceof Uint8Array || image_data_or_colors_and_indexes instanceof Uint8ClampedArray){ // uint32 buffer

            this.width_ = width | 0;
            this.height_ = height | 0;
            this.populate_data(new Uint32Array(image_data_or_colors_and_indexes.buffer));
        }else {

            this.width_ = width | 0;
            this.height_ = height | 0;
            this.populate_data(Uint32Array.from(image_data_or_colors_and_indexes));
        }

        this.bitmap_ = typeof bmp == "undefined" ? {height: this.height_, width: this.width_, destroy: function (){}, hash: ""}: bmp;

        this.populate_colors(this.uint32_pixel_color_);
        this.populate_indexes();
        this.changes_.charge();
    }

    return this;
};

Layer.new_from_colors_and_indexes = function (colors, indexes, width, height, with_plain_data, bmp) {
    return new Layer(Array.of(colors, indexes), parseInt(width), parseInt(height), Boolean(with_plain_data), bmp);
};

Object.defineProperty(Layer.prototype, 'force_update_data', {
    get: function() {
        "use strict";
        return function (colors, indexes){
            "use strict";
            var is_new_colors = typeof colors != "undefined";
            var is_new_indexes = typeof indexes != "undefined";

            if(is_new_colors && is_new_indexes) {
                // Initialize and fill the matrix table
                this.populate_colors(colors);
                this.populate_indexes(indexes);
                this.populate_data();
            }else if(is_new_indexes){

                this.populate_indexes(indexes);
                this.compute_data();
            }else if(is_new_colors) {

                this.populate_colors(colors);
                this.compute_data();
            }
        };
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'populate_data', {
    get: function() {
        "use strict";
        return function(data){
            "use strict";
            if(typeof data == "undefined") {

                this.uint32_pixel_color_ =  new Uint32Array(this.width_ * this.height_);
                this.changes_ = new SetFixed(this.uint32_pixel_color_.length);
                this.uint8c_pixel_color_ =  new Uint8ClampedArray(this.uint32_pixel_color_.buffer);
                this.simdope_pixel_color_ =  new Colors(this.uint32_pixel_color_.buffer);

                for(var i = 0, l = this.uint32_pixel_color_.length | 0; (i|0) < (l|0); i = (i + 1 | 0) >>> 0) {
                    this.uint32_pixel_color_[i] = (this.colors[this.indexes[i]]|0) >>> 0;
                }
                this.changes_.charge();

            }else {
                this.uint32_pixel_color_ = data instanceof Uint32Array ? data: Uint32Array.from(data);
                this.changes_ = new SetFixed(this.uint32_pixel_color_.length);
                this.uint8c_pixel_color_ =  new Uint8ClampedArray(this.uint32_pixel_color_.buffer);
                this.simdope_pixel_color_ =  new Colors(this.uint32_pixel_color_.buffer);
                this.changes_.charge();
            }
        }
    }
});
Object.defineProperty(Layer.prototype, 'compute_data', {
    get: function() {
        "use strict";
        return function(){
            "use strict";
            for(var i = 0, l = this.uint32_pixel_color_.length | 0; (i|0) < (l|0); i = (i + 1 | 0) >>> 0) {

                if(uint_not_equal(this.uint32_pixel_color_[(i|0)>>>0], this.colors[this.indexes[(i|0)>>>0]])){
                    this.uint32_pixel_color_[(i|0)>>>0] = (this.colors[this.indexes[(i|0)>>>0]]|0) >>> 0;
                    this.changes_.add((i|0)>>>0);
                }
            }
        }
    }
});
Object.defineProperty(Layer.prototype, 'populate_colors', {
    get: function() {
        "use strict";
        return function(colors){
            "use strict";

            this.uint32_colors_ = colors instanceof Uint32Array ? colors.slice(0, colors.length|0): Uint32Array.from(colors);
            this.uint32_colors_length_ = this.uint32_colors_.length;
            this.uint32_colors_map_ = {};
            for(var i = 0; (i|0) < (this.uint32_colors_length_|0); i = (i + 1 | 0) >>> 0){
                this.uint32_colors_map_[this.uint32_colors_[i]] = i;
            }
        }
    }
});

Object.defineProperty(Layer.prototype, 'populate_indexes', {
    get: function() {
        "use strict";
        return function(indexes){
            "use strict";
            if(typeof indexes != "undefined"){

                this.color_indexes_length_ = indexes.length;
                this.color_indexes_constructor_ = this.uint32_colors_length_ < (1 << 8) ? Uint8Array : (this.uint32_colors_length_ + 1 | 0) < (1 << 16) ? Uint16Array : Uint32Array;
                this.color_indexes_ = indexes instanceof this.color_indexes_constructor_ ? indexes: this.color_indexes_constructor_.from(indexes);
            }else {
                this.color_indexes_length_ = this.uint32_pixel_color_.length;
                this.color_indexes_constructor_ = this.uint32_colors_length_ < (1 << 8) ? Uint8Array : (this.uint32_colors_length_ + 1 | 0) < (1 << 16) ? Uint16Array : Uint32Array;
                this.color_indexes_ = new this.color_indexes_constructor_(this.color_indexes_length_);

                for (var i = 0, l = this.color_indexes_length_ | 0; (i | 0) < (l | 0); i = (i + 1 | 0) >>> 0) {
                    this.color_indexes_[i | 0] = (this.get_color_index(this.uint32_pixel_color_[i | 0]) | 0) >>> 0;
                }
            }
        }
    }
});


Object.defineProperty(Layer.prototype, 'get_color_index', {
    get: function() {
        "use strict";
        return function (uint32) {
            "use strict";
            return this.uint32_colors_map_[(uint32 | 0) >>> 0];
        }
    }
});
Object.defineProperty(Layer.prototype, 'has_color', {
    get: function() {
        "use strict";
        return function (uint32) {
            "use strict";
            return typeof this.uint32_colors_map_[(uint32 | 0) >>> 0] != "undefined";
        }
    }
});

Object.defineProperty(Layer.prototype, 'data8', {
    get: function() {
        "use strict";
        return this.uint8c_pixel_color_;
    }
})
Object.defineProperty(Layer.prototype, 'image_data', {
    get: function() {
        "use strict";
        return new ImageData(this.data8, this.width_|0, this.height_|0);
    }
})
Object.defineProperty(Layer.prototype, 'width', {
    get: function() {
        "use strict";
        return this.width_|0;
    },
    enumerable: false,
    configurable: false
})
Object.defineProperty(Layer.prototype, 'height', {
    get: function() {
        "use strict";
        return this.height_|0;
    },
    enumerable: false,
    configurable: false
})

Object.defineProperty(Layer.prototype, 'set_bitmap', {
    get: function() {
        "use strict";
        return function (bmp){
            "use strict";
            if(this.bitmap_.hash !== bmp.hash) {
                this.bitmap_.destroy();
                this.bitmap_ = bmp;
            }
            return this.bitmap_;
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'get_bitmap', {
    get: function() {
        "use strict";
        return function (){
            "use strict";
            return this.bitmap_;
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'bitmap_async', {
    get: function() {
        "use strict";
        return function (maybe) {
            "use strict";
            maybe = typeof maybe == "undefined" ? false: Boolean(maybe) && true;
            var hash_hex_async = this.hash_hex_async.bind(this);
            var get_bitmap = this.get_bitmap.bind(this);
            var set_bitmap = this.set_bitmap.bind(this);
            var image_data = this.image_data;

            var compute = function (resolve, reject) {
                "use strict";
                Promise.all(
                    [
                        createImageBitmap(image_data),
                        hash_hex_async()
                    ]
                ).then(function (results) {

                    var bmp = results[0];
                        bmp.hash = ""+results[1];
                    resolve(set_bitmap(bmp));
                }).catch(reject);
            };

            if(maybe) {
                var b = get_bitmap();
                return hash_hex_async().then(function (h){
                    if(b.hash !== "" && (""+h) === (""+b.hash)){
                        return Promise.resolve(b);
                    }else {
                        return new Promise(compute);
                    }
                })
            }else {

                return new Promise(compute);
            }
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'hash_hex_async', {
    get: function() {
        "use strict";
        return function (data){
            "use strict";
            var h = xxhash.base58_that(data || this.data8);
            return Promise.resolve(h);
        }
    }
});

Object.defineProperty(Layer.prototype, 'data', {
    get: function() {
        "use strict";
        return this.uint32_pixel_color_;
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'get_index', {
    get: function() {
        "use strict";
        return function (index) {
            "use strict";
            index = (index | 0) >>> 0;
            return this.color_indexes_[index | 0];
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'indexes', {
    get: function() {
        "use strict";
        return this.color_indexes_;
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'indexes_copy', {
    get: function() {
        "use strict";
        var length = this.color_indexes_.length|0;
        return this.color_indexes_.slice(0, length|0);
    },
    enumerable: false,
    configurable: false
});


Object.defineProperty(Layer.prototype, 'set_indexes', {
    get: function() {
        "use strict";
        return function (indexes){
            "use strict";
            this.force_update_data(undefined, indexes);
        };
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'get_color', {
    get: function() {
        "use strict";
        return function (index) {
            "use strict";
            index = (index | 0) >>> 0;
            return this.uint32_colors_[index | 0];
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'colors', {
    get: function() {
        "use strict";
        return this.uint32_colors_;
    },
    enumerable: false,
    configurable: false
});


Object.defineProperty(Layer.prototype, 'colors_copy', {
    get: function() {
        "use strict";
        var length = this.uint32_colors_length_|0;
        return this.uint32_colors_.slice(0, length|0);
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'set_colors', {
    get: function() {
        "use strict";
        return function (colors){
            "use strict";
            this.force_update_data(colors, undefined);
        };
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'set_colors_and_indexes', {
    get: function() {
        "use strict";
        return function (colors, indexes){
            "use strict";
            this.force_update_data(colors, indexes);
        };
    },
    enumerable: false,
    configurable: false
});


Object.defineProperty(Layer.prototype, 'changes', {
    get: function() {
        "use strict";
        return this.changes_.indexes;
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'changes_has', {
    get: function() {
        "use strict";
        return function (index) {
            "use strict";
            return this.changes_.has((index|0)>>>0);
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'setFixed', {
    get: function() {
        "use strict";
        return this.changes_;
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'clear_changes', {
    get: function() {
        "use strict";
        return function () {
            "use strict";
            this.changes_.clear();
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'charge_changes', {
    get: function() {
        "use strict";
        return function () {
            "use strict";
            this.changes_.charge();
        }
    }
});

Object.defineProperty(Layer.prototype, 'get_uint32', {
    get: function() {
        "use strict";
        return function (index) {
            "use strict";
            index = (index|0)>>>0;
            return this.uint32_pixel_color_[index];
        }
    }
});

Object.defineProperty(Layer.prototype, 'set_uint32', {
    get: function() {
        "use strict";
        return function (index, uint32){
            "use strict";
            index = (index | 0) >>> 0;
            uint32 = typeof uint32 == "undefined" ? this.uint32_pixel_color_[index]: (uint32 | 0) >>> 0;

            // Register change
            this.changes_.add(index);

            // Change the color within data
            this.uint32_pixel_color_[index] = uint32;

            // Change the color within indexed color pixel matrix
            if(this.has_color(uint32)){// Color already exist
                // Edit the index of the color used by the pixel at a specific position
                this.color_indexes_[index] = this.get_color_index(uint32);
                return false; // Didn't add a color
            }else {
                // Increase the index capability (eventually)
                switch (this.uint32_colors_length_+1 | 0) {
                    case 0xFF:
                        this.color_indexes_ = Uint16Array.from(this.color_indexes_);
                        break;
                    case 0xFFFF:
                        this.color_indexes_ = Uint32Array.from(this.color_indexes_);
                        break;
                }
                // Add more space to the colors array
                var new_uint32_colors = new Uint32Array(this.uint32_colors_length_+1|0);
                    new_uint32_colors.set(this.uint32_colors_, 0);
                    new_uint32_colors[(this.uint32_colors_length_|0) >>> 0] = uint32;
                this.populate_colors(new_uint32_colors);
                this.color_indexes_[index] = this.get_color_index(uint32);
                return true; // Added a color
            }
        }
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Layer.prototype, 'paint_uint32a', {
    get: function() {
        "use strict";
        return function (pxl_indexes, color, opacity) {
            "use strict";
            color = (color | 0) >>> 0;
            opacity = Math.round(parseFloat(opacity) * 255);
            let indexes_length = pxl_indexes.length|0;

            if(indexes_length > 0) {

                let sd_color = Color.new_uint32(color),  a = new Color(new ArrayBuffer(4)), i = 0;
                for (; (i | 0) < (indexes_length | 0); i = (i + 1 | 0) >>> 0) {
                    this.simdope_pixel_color_.get_use_element(pxl_indexes[i], a).blend_first_with(sd_color, opacity, false, false);
                    this.set_uint32(pxl_indexes[i]);
                }
            }
        }
    },
    enumerable: false,
    configurable: false
});
/*
Layer.prototype.auto_adjust_contrast = function (intensity) {
    "use strict";
    let min_sat = 100;
    let max_sat = 0;

    intensity = Math.round(parseFloat(intensity) * 255) | 0;
    let saturation = 0;
    let color;
    let colors = this.simdope_pixel_color_;
    let length = colors.length;
    let hsla;
    let a = new Color(new ArrayBuffer(4));

    for(let i = 0; (i|0) < (length|0); i = (i+1|0)>>>0) {

        color = colors.get_use_element(i, a);
        saturation = color.hsla[1];
        if((color.a | 0) > 0) {
            if((saturation|0) > (max_sat|0)) {max_sat = saturation | 0;}
            if((saturation|0) < (min_sat|0)) {min_sat = saturation | 0;}
        }
    }

    const alpha = 100 / Math.max(1, max_sat - min_sat);
    const beta = -min_sat * alpha | 0;

    for(let i = 0; (i|0) < (length|0); i = (i+1|0)>>>0) {

        color = colors.get_use_element(i, a);
        hsla = color.hsla;
        color.blend_with(
            Color.new_hsla(
                hsla[0],
                hsla[1] * alpha + beta | 0,
                hsla[2],
                hsla[3]
            ), intensity, false, false);
    }

    this.force_update_data(true);
}
*/

var Layers = function(image_data_array, meta_data_array, width, height){
    "use strict";

    if (!(this instanceof Layers)) {
        return new Layers(image_data_array, meta_data_array, width, height);
    }

    width = (width | 0) >>> 0;
    height = (height | 0) >>> 0;

    this.layers_ = new Array(image_data_array.length);
    this.metadata_ = new Array(meta_data_array.length);
    for(var i = 0; i < image_data_array.length; i++) {
        this.layers_[i] = new Layer(image_data_array[i], width, height);
    }
    for(var i = 0; i < meta_data_array.length; i++) {
        this.metadata_[i] = meta_data_array[i];
    }
};

var DEFAULT_FILTERS = {
    "...none": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "g": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "b": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255)
    },
    ".1997": {
        "a": Uint8ClampedArray.of(0,1,3,4,6,7,9,10,12,13,14,16,17,19,20,22,23,25,26,28,29,31,32,34,35,37,38,39,41,42,44,45,46,48,49,50,52,53,54,55,57,58,59,60,61,62,64,65,66,67,68,69,70,72,73,74,75,76,77,78,79,80,81,82,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,125,126,127,128,129,130,131,132,133,134,135,136,137,137,138,139,140,141,142,143,144,145,146,146,147,148,149,150,151,152,153,153,154,155,156,157,158,159,160,160,161,162,163,164,165,166,166,167,168,169,170,171,172,172,173,174,175,176,177,178,178,179,180,181,182,183,183,184,185,186,187,188,188,189,190,191,192,193,193,194,195,196,197,198,199,199,200,201,202,203,204,204,205,206,207,208,209,209,210,211,212,213,214,215,215,216,217,218,219,220,221,221,222,223,224,225,226,227,227,228,229,230,231,232,233,233,234,235,236,237,238,239,240,241,241,242,243,244,245,246,247,248,249,250,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,58,59,60,60,61,62,62,63,63,64,64,65,66,66,67,67,68,69,69,70,70,71,72,72,73,74,74,75,76,77,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,102,103,104,105,106,108,109,110,111,112,113,114,116,117,118,119,120,121,122,123,125,126,127,128,129,130,131,133,134,135,136,137,138,140,141,142,143,144,146,147,148,149,151,152,153,154,156,157,158,160,161,162,164,165,166,168,169,170,172,173,175,176,177,179,180,182,183,185,186,188,189,191,192,193,194,196,197,198,199,200,201,202,203,204,204,205,206,206,207,208,208,209,209,210,210,211,211,212,212,212,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,215,214,214,214,214,214,214,214,214,214,214,213,213,213,213,213,213,213,212,212,212,212,212),
        "g": Uint8ClampedArray.of(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,47,47,48,48,48,49,49,50,50,51,52,52,53,54,54,55,56,57,58,59,60,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,153,154,155,156,157,158,160,161,162,163,164,166,167,168,169,171,172,173,174,175,176,178,179,180,181,182,183,185,186,187,188,189,190,191,192,193,195,196,197,198,199,200,201,202,203,205,206,207,208,209,210,211,212,214,215,216,217,218,220,221,222,223,225,226,227,228,230,231,232,233,235,236,237,239,240,241,242,244,245,246,247,249,250,251,252,254,255,255),
        "b": Uint8ClampedArray.of(45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,45,46,46,47,47,47,48,48,48,48,49,49,49,50,50,50,51,51,51,52,52,53,53,54,54,55,56,56,57,58,59,60,61,62,62,63,64,65,66,68,69,70,71,72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,89,90,91,92,93,94,96,97,98,99,100,102,103,104,105,107,108,109,110,112,113,114,115,117,118,119,120,122,123,124,126,127,128,130,131,133,134,135,137,138,140,141,143,144,145,147,148,149,151,152,153,155,156,157,159,160,161,162,164,165,166,167,168,170,171,172,173,174,175,176,177,178,179,180,181,182,184,185,186,187,188,188,189,190,191,192,193,193,194,195,195,196,196,196,197,197,197,197,198,198,198,198,198,198,198,198,198,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,199,198,198,198,198,198,198,197,197,197,197,197,197,197,197,197,197,197,197,197,197,198,198,198,198,198,198,198)
    },
    ".Brannan": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,52,53,54,55,56,57,59,60,62,63,64,66,67,68,69,70,71,71,72,73,73,74,75,75,76,76,77,77,78,78,79,79,80,80,81,81,82,83,83,84,85,86,87,88,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,111,112,113,114,115,116,118,119,120,121,122,124,125,126,128,129,130,132,133,134,136,137,139,140,141,143,144,146,147,149,150,152,153,154,156,157,159,160,162,163,164,166,167,169,170,171,173,174,175,177,178,179,181,182,183,185,186,187,189,190,192,193,195,196,198,199,201,203,204,206,207,209,210,212,213,215,216,217,219,220,221,223,224,225,226,227,228,229,230,231,232,233,234,235,236,236,237,238,239,239,240,241,241,242,243,243,244,244,245,246,246,247,247,248,248,249,249,249,250,250,251,251,251,252,252,252,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,254,254,254,254,254),
        "g": Uint8ClampedArray.of(0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,3,4,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,23,24,25,26,27,28,29,30,32,33,34,35,36,38,39,40,41,43,44,45,47,48,50,51,53,54,56,57,59,61,62,64,66,68,70,72,74,76,78,80,82,84,87,89,91,93,95,97,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,161,163,165,167,168,170,172,173,175,176,178,179,181,182,183,184,186,187,188,189,190,191,192,193,193,194,195,196,196,197,198,198,199,200,200,201,202,202,203,203,204,204,205,205,206,207,207,208,208,209,210,210,211,212,212,213,214,214,215,216,217,217,218,219,219,220,221,221,222,222,223,224,224,225,225,226,226,227,228,228,229,229,229,230,230,231,231,232,232,233,233,233,234,234,234,235,235,236,236,236,237,237,237,238,238,239,239,239,240,240,240,241,241,241,242,242,242,243,243,243,244,244,244,245,245,245,246,246,247,247,247,248,248,249,249,250,250,251,251,252,252,252),
        "b": Uint8ClampedArray.of(48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,50,50,50,51,51,51,52,52,53,53,54,54,54,55,55,56,56,57,57,58,58,59,60,60,61,61,62,62,63,64,64,65,66,66,67,68,68,69,70,71,71,72,73,74,75,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,94,95,96,98,99,100,101,102,103,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,132,133,134,135,136,137,138,139,140,141,141,142,143,144,145,146,146,147,148,148,149,150,151,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,168,169,170,171,172,173,174,175,176,177,178,178,179,180,181,181,182,183,183,184,184,185,185,185,186,186,187,187,187,188,188,188,189,189,190,190,191,191,192,193,193,194,195,195,196,197,198,199,200,200,201,202,203,204,205,206,206,207,208,209,210,211,211,212,213,214,214,215,216,216,217,218,218,219,219,220,220,221,222,222,222,223,223,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225)
    },
    ".Gotham": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(50,50,50,50,50,50,50,50,50,50,50,50,50,51,51,51,51,51,52,53,54,55,56,57,59,60,62,63,64,66,67,68,69,70,71,71,72,73,73,74,75,75,76,76,77,77,78,78,79,79,80,80,81,81,82,83,83,84,85,86,87,88,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,111,112,113,114,115,116,118,119,120,121,122,124,125,126,128,129,130,132,133,134,136,137,139,140,141,143,144,146,147,149,150,152,153,154,156,157,159,160,162,163,164,166,167,169,170,171,173,174,175,177,178,179,181,182,183,185,186,187,189,190,192,193,195,196,198,199,201,203,204,206,207,209,210,212,213,215,216,217,219,220,221,223,224,225,226,227,228,229,230,231,232,233,234,235,236,236,237,238,239,239,240,241,241,242,243,243,244,244,245,246,246,247,247,248,248,249,249,249,250,250,251,251,251,252,252,252,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,254,254,254,254,254,254),
        "g": Uint8ClampedArray.of(0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,3,4,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,21,23,24,25,26,27,28,29,30,32,33,34,35,36,38,39,40,41,43,44,45,47,48,50,51,53,54,56,57,59,61,62,64,66,68,70,72,74,76,78,80,82,84,87,89,91,93,95,97,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,161,163,165,167,168,170,172,173,175,176,178,179,181,182,183,184,186,187,188,189,190,191,192,193,193,194,195,196,196,197,198,198,199,200,200,201,202,202,203,203,204,204,205,205,206,207,207,208,208,209,210,210,211,212,212,213,214,214,215,216,217,217,218,219,219,220,221,221,222,222,223,224,224,225,225,226,226,227,228,228,229,229,229,230,230,231,231,232,232,233,233,233,234,234,234,235,235,236,236,236,237,237,237,238,238,239,239,239,240,240,240,241,241,241,242,242,242,243,243,243,244,244,244,245,245,245,246,246,247,247,247,248,248,249,249,250,250,251,251,252,252,252),
        "b": Uint8ClampedArray.of(48,48,48,48,48,48,48,48,49,49,49,49,49,49,49,50,50,50,51,51,51,52,52,53,53,54,54,54,55,55,56,56,57,57,58,58,59,60,60,61,61,62,62,63,64,64,65,66,66,67,68,68,69,70,71,71,72,73,74,75,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,92,93,94,95,96,98,99,100,101,102,103,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,132,133,134,135,136,137,138,139,140,141,141,142,143,144,145,146,146,147,148,148,149,150,151,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,168,169,170,171,172,173,174,175,176,177,178,178,179,180,181,181,182,183,183,184,184,185,185,185,186,186,187,187,187,188,188,188,189,189,190,190,191,191,192,193,193,194,195,195,196,197,198,199,200,200,201,202,203,204,205,206,206,207,208,209,210,211,211,212,213,214,214,215,216,216,217,218,218,219,219,220,220,221,222,222,222,223,223,224,224,224,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225,225)
    },
    ".Gingham": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
        "r": Uint8ClampedArray.of(44,44,44,44,45,45,45,45,45,45,46,46,46,46,46,47,47,47,47,48,48,48,49,49,49,50,50,51,51,52,52,53,54,54,55,56,57,57,58,59,60,61,62,63,64,65,67,68,69,70,71,72,74,75,76,78,79,81,82,83,85,86,88,89,90,92,93,95,96,98,99,101,102,104,105,107,109,110,112,113,115,116,118,119,121,122,124,125,127,128,130,131,133,134,136,137,138,140,141,142,143,145,146,147,148,149,150,151,152,153,154,155,156,156,157,158,159,160,160,161,162,163,163,164,165,165,166,167,168,168,169,170,170,171,171,172,173,173,174,175,175,176,176,177,177,178,179,179,180,180,181,181,182,182,183,183,184,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,192,192,192,193,193,194,194,195,195,195,196,196,197,197,197,198,198,199,199,199,200,200,201,201,201,202,202,203,203,203,204,204,205,205,205,206,206,207,207,207,208,208,209,209,209,210,210,210,211,211,211,212,212,212,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,213,213,213,213,213,213,213,213,213,213),
        "g": Uint8ClampedArray.of(44,44,44,44,44,44,44,44,44,44,44,44,44,45,45,45,45,45,45,46,46,46,47,47,47,48,48,49,49,50,51,51,52,53,54,54,55,56,57,58,59,61,62,63,64,65,66,68,69,70,71,73,74,75,77,78,79,81,82,84,85,87,88,89,91,92,94,95,97,98,100,101,103,104,106,107,109,110,112,113,115,116,118,119,121,122,124,125,127,128,130,131,133,134,135,137,138,139,141,142,143,145,146,147,148,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,168,169,170,171,171,172,173,173,174,175,176,176,177,177,178,179,179,180,181,181,182,182,183,183,184,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,191,192,192,193,193,193,194,194,195,195,195,196,196,196,197,197,198,198,198,199,199,199,200,200,200,201,201,201,202,202,202,203,203,203,204,204,204,205,205,205,206,206,206,207,207,207,208,208,208,209,209,209,210,210,210,211,211,211,212,212,212,212,213,213,213,213,213,213,213,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,214,213,213,213,213,213,213),
        "b": Uint8ClampedArray.of(45,45,45,45,45,45,46,46,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,50,50,51,51,52,52,53,53,54,54,55,56,57,57,58,59,60,61,62,63,64,65,66,67,68,70,71,72,73,75,76,77,79,80,82,83,84,86,87,89,90,91,93,94,96,97,98,100,101,102,104,104,106,107,108,109,111,112,113,115,116,117,119,120,121,123,124,125,127,128,129,131,132,134,135,136,138,139,140,142,143,144,146,147,148,150,151,152,153,155,156,157,158,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,179,180,181,181,182,183,183,184,185,185,186,186,187,187,188,188,189,189,190,190,191,191,192,192,193,193,193,194,194,194,195,195,196,196,196,197,197,197,198,198,198,198,199,199,199,200,200,200,200,201,201,201,201,202,202,202,203,203,203,203,203,204,204,204,204,205,205,205,205,206,206,206,206,207,207,207,208,208,208,208,209,209,209,209,209,210,210,210,210,211,211,211,211,211,211,211,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,212,213,213,213,213,213,213,213,213)
    },
    ".Hefe": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(32,32,32,32,32,32,32,32,32,32,32,32,32,33,33,33,33,33,34,35,36,38,39,41,43,45,48,50,52,54,56,58,60,62,64,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,96,98,100,102,104,106,108,110,112,114,116,117,119,121,123,125,126,128,130,132,133,135,137,139,140,142,144,146,147,149,151,152,154,155,157,158,160,161,163,164,166,167,168,170,171,172,173,175,176,177,178,179,180,181,182,184,185,186,187,188,189,190,190,191,192,193,194,195,196,197,197,198,199,200,201,201,202,203,204,204,205,205,206,206,207,207,208,208,209,209,210,210,211,211,212,212,213,213,214,214,215,215,216,216,217,217,218,218,219,219,220,220,221,221,221,222,222,223,223,224,224,225,225,225,226,226,227,227,228,228,228,229,229,230,230,231,231,231,232,232,233,233,233,234,234,235,235,235,236,236,236,237,237,238,238,238,239,239,239,240,240,240,241,241,242,242,242,243,243,243,244,244,245,245,245,246,246,247,248,248,249,249,250,250,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252),
        "g": Uint8ClampedArray.of(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17,19,20,21,23,24,25,27,28,30,31,33,34,36,37,39,40,42,44,45,47,49,50,52,54,56,57,59,61,63,65,67,69,71,73,75,78,80,82,85,87,89,92,94,97,99,102,104,106,109,111,114,116,118,121,123,125,127,129,131,133,135,137,139,141,143,145,146,148,150,152,154,156,157,159,161,163,164,166,168,169,171,173,174,176,178,179,181,182,184,185,187,188,190,191,192,194,195,196,197,198,199,200,201,202,203,204,205,205,206,207,207,208,209,209,210,210,211,211,211,212,212,213,213,213,214,214,215,215,216,216,216,217,217,218,218,219,219,220,220,220,221,221,222,222,222,223,223,224,224,225,225,225,226,226,227,227,228,228,228,229,229,230,230,231,231,232,232,232,233,233,234,234,235,235,236,236,237,237,238,238,239,239,239,240,240,241,241,242,242,243,244,244,245,246,246,247,248,249,249,250,250,251,251,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252,252),
        "b": Uint8ClampedArray.of(2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,6,6,6,6,6,7,7,7,8,8,9,9,9,10,10,11,12,12,13,13,14,15,15,16,17,17,18,19,19,20,21,22,23,24,24,25,26,27,28,29,30,32,33,34,35,36,38,39,40,42,43,45,47,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,87,89,91,93,95,96,98,100,101,103,105,107,108,110,112,113,115,117,118,120,122,123,125,127,128,130,131,133,135,136,138,140,141,143,145,146,148,149,151,153,154,156,158,159,161,163,164,166,167,169,170,171,173,174,175,177,178,179,180,182,183,184,185,186,187,189,190,191,192,193,194,195,195,196,197,198,198,199,200,200,201,201,202,202,203,203,204,204,204,205,205,205,206,206,206,207,207,207,207,208,208,209,209,209,210,210,211,211,211,212,212,213,213,214,214,214,215,215,216,216,216,217,217,218,218,218,219,219,220,220,220,221,221,222,222,222,223,223,224,224,225,225,226,226,227,227,227,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228,228)
    },
    ".Lordkelvin": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(43,44,46,47,49,50,52,53,55,56,58,59,61,62,64,65,67,69,70,72,73,75,77,78,80,81,83,85,86,88,90,91,93,95,96,98,100,102,103,105,107,109,111,112,114,116,118,120,121,123,125,127,129,130,132,134,136,137,139,141,142,144,146,147,149,151,152,154,155,157,158,160,162,163,165,166,168,169,171,172,174,175,176,178,179,180,182,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,201,202,203,204,204,205,206,207,207,208,209,210,210,211,212,212,213,214,214,215,216,217,217,218,219,219,220,221,222,222,223,224,224,225,225,226,227,227,228,228,229,229,229,230,230,231,231,232,232,232,233,233,233,234,234,235,235,235,236,236,236,237,237,237,238,238,239,239,239,240,240,240,241,241,241,242,242,242,243,243,243,243,244,244,244,245,245,245,245,245,246,246,246,246,246,247,247,247,247,247,248,248,248,248,248,248,249,249,249,249,249,249,249,250,250,250,250,250,250,250,250,251,251,251,251,251,251,251,251,251,252,252,252,252,252,252,252,252,252,253,253,253,253,253,253,253,253,254,254,254,254,254),
        "g": Uint8ClampedArray.of(36,36,36,36,36,36,36,36,36,36,36,36,36,37,37,37,37,37,37,38,38,38,39,39,40,40,41,41,42,43,43,44,45,46,47,47,48,49,50,51,52,53,54,55,56,57,59,60,61,62,63,64,65,67,68,69,70,71,72,73,75,76,77,78,79,80,81,82,83,84,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,155,156,157,158,158,159,160,160,161,161,162,163,163,164,164,165,165,166,166,167,167,168,168,168,169,169,170,171,171,172,172,173,173,174,174,175,175,176,177,177,178,178,179,179,180,180,181,181,182,182,182,183,183,184,184,184,185,185,185,186,186,186,186,187,187,187,187,188,188,188,188,188,189,189,189,189,189,190,190,190,190,190,190,190,191,191,191,191,191,191,191,191,192,192,192,192,192,192,192,192,193,193,193,193,193,193,193,193,194,194,194,194,194,194,194,195,195,195,195),
        "b": Uint8ClampedArray.of(69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,70,70,70,70,70,70,70,70,70,70,71,71,71,72,72,73,73,73,74,74,75,75,76,76,77,78,78,79,79,80,80,81,81,82,82,82,83,83,84,84,84,85,85,86,86,86,87,87,87,88,88,88,89,89,90,90,90,91,91,91,92,92,93,93,93,94,94,95,95,96,96,96,97,97,98,99,99,100,100,101,101,102,102,102,103,103,103,104,104,104,105,105,105,106,106,106,106,107,107,107,107,108,108,108,108,109,109,109,110,110,110,111,111,111,111,112,112,112,113,113,113,114,114,114,115,115,115,115,116,116,116,116,117,117,117,117,117,118,118,118,118,118,118,119,119,119,119,119,119,119,120,120,120,120,120,120,120,120,120,121,121,121,121,121,121,121,121,121,121,121,122,122,122,122,122,122,122,122,122,122,122,122,123,123,123,123,123,123,123,123,123,123,123,124,124,124,124,124,124)
    },
    ".Nashville": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,56,57,57,58,58,59,59,60,61,62,63,64,65,66,67,68,69,71,72,73,75,76,78,79,81,82,84,85,87,88,90,91,93,95,96,98,100,102,104,106,108,110,113,115,117,120,122,124,127,129,131,133,136,138,140,142,144,146,148,150,152,154,155,157,159,160,162,164,165,167,168,170,171,173,174,175,177,178,179,181,182,183,185,186,187,189,190,191,192,194,195,196,197,198,200,201,202,203,204,205,206,208,209,209,210,211,212,213,214,215,216,217,217,218,219,220,220,221,222,223,223,224,225,226,226,227,228,228,229,230,230,231,231,232,233,233,234,234,235,235,236,237,237,238,238,239,239,240,240,240,241,241,242,242,243,243,243,244,244,245,245,245,246,246,246,247,247,247,248,248,248,248,249,249,249,249,250,250,250,250,251,251,251,251,251,252,252,252,252,252,253,253,253,253,253,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255),
        "g": Uint8ClampedArray.of(38,39,39,40,41,41,42,42,43,44,44,45,46,46,47,48,49,50,51,52,53,55,56,57,59,60,61,63,64,65,67,68,69,71,72,73,74,76,77,78,80,81,82,84,85,86,87,89,90,91,93,94,95,97,98,99,101,102,103,104,106,107,108,110,111,112,114,115,116,118,119,121,122,123,125,126,128,129,130,132,133,134,136,137,138,140,141,142,143,145,146,147,148,149,150,151,152,153,154,155,156,157,158,158,159,160,161,162,163,163,164,165,166,166,167,168,169,169,170,171,172,172,173,174,175,176,176,177,178,179,180,181,181,182,183,184,185,186,187,187,188,189,189,190,191,191,192,193,193,194,194,195,195,196,197,197,198,198,199,199,200,200,201,201,202,202,202,203,203,204,204,205,205,205,206,206,207,207,207,208,208,208,209,209,209,210,210,210,211,211,211,212,212,212,213,213,213,213,214,214,214,214,215,215,215,215,216,216,216,216,216,217,217,217,217,217,218,218,218,218,218,218,219,219,219,219,219,220,220,220,220,220,220,220,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221,221),
        "b": Uint8ClampedArray.of(97,98,98,99,99,100,100,101,101,102,102,103,104,104,105,105,106,107,107,108,109,110,110,111,112,113,114,114,115,116,116,117,118,118,119,119,120,120,121,121,122,122,123,123,124,124,124,125,125,126,126,127,127,127,128,128,129,129,129,130,130,131,131,132,132,132,133,133,134,134,135,135,136,136,136,137,137,138,138,139,139,139,140,140,141,141,142,142,142,143,143,144,144,144,145,145,146,146,147,147,147,148,148,149,149,150,150,151,151,151,152,152,153,153,154,154,154,155,155,155,156,156,156,157,157,157,158,158,158,158,158,158,159,159,159,159,159,159,159,159,159,159,159,160,160,160,160,160,161,161,161,162,162,162,162,163,163,163,163,164,164,164,164,165,165,165,165,165,165,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,166,167,167,167,167,167,167,167,167,167,168,168,168,168,168,168,169,169,169,169,169,170,170,170,170,171,171,171,171,171,172,172,172,172,172,173,173,173,173,173,173,173,174,174,174,174,174,174,174,174,175,175,175,175,175,175,175,175,175,175,175,176,176,176,176,176,176,176,176,176,176)
    },
    ".Xpro": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,3,3,4,4,5,5,5,6,7,7,8,8,9,9,10,11,11,12,13,14,14,15,16,17,17,18,19,20,21,22,23,24,25,26,27,28,29,31,32,33,34,35,37,38,39,41,42,43,45,46,48,49,51,52,54,55,57,58,60,62,63,65,67,68,70,72,74,76,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,141,143,145,147,149,151,153,155,157,159,161,163,165,167,169,171,172,174,176,178,180,182,184,186,188,189,191,193,194,196,198,199,201,202,204,205,207,208,209,211,212,214,215,216,217,219,220,221,222,223,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,239,240,241,242,243,243,244,245,246,246,247,248,248,249,249,250,250,251,251,252,252,252,253,253,253,253,253,253,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255),
        "g": Uint8ClampedArray.of(0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,4,4,5,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,14,14,15,16,17,18,18,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,36,37,39,40,41,43,44,45,47,48,50,51,53,54,56,57,59,61,62,64,66,67,69,71,73,75,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,161,163,165,167,169,171,173,175,176,178,180,182,183,185,187,189,190,192,193,195,197,198,200,201,203,204,206,207,209,210,211,213,214,216,217,218,219,221,222,223,224,226,227,228,229,230,231,232,233,234,235,236,237,237,238,239,240,240,241,242,243,243,244,244,245,246,246,247,247,248,248,249,249,250,250,250,251,251,252,252,252,253,253,253,253,253,253,254,254,254,254,254,254,254,254,254,254,254,254,254,254,254,255,255,255,255,255,255,255,255,255,255),
        "b": Uint8ClampedArray.of(24,25,26,27,28,28,29,30,31,32,33,34,35,35,36,37,38,39,40,41,41,42,43,44,45,45,46,47,48,49,49,50,51,52,53,53,54,55,56,56,57,58,59,59,60,61,62,62,63,64,64,65,66,67,67,68,69,70,70,71,72,73,73,74,75,76,77,77,78,79,80,81,81,82,83,84,85,86,86,87,88,89,90,91,91,92,93,94,95,96,96,97,98,99,100,101,101,102,103,104,105,106,107,107,108,109,110,111,112,113,114,114,115,116,117,118,119,119,120,121,122,123,124,124,125,126,127,127,128,129,129,130,130,131,131,132,132,133,134,134,135,136,137,138,138,139,140,141,142,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,162,163,164,165,165,166,167,168,168,169,170,171,171,172,173,173,174,175,176,176,177,178,178,179,180,181,182,182,183,184,185,185,186,187,188,189,189,190,191,192,193,193,194,195,196,197,197,198,199,200,200,201,202,203,204,204,205,206,206,207,208,208,209,210,210,211,212,212,213,214,215,215,216,217,218,218,219,220,221,221,222,223,224,225,226,226,227,228,229)
    },
    "XMAT": {
        "a": Uint8ClampedArray.of(0,0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,11,11,12,13,13,14,15,15,16,17,18,18,19,20,21,21,22,23,24,24,25,26,27,27,28,29,30,31,31,32,33,34,35,36,36,37,38,39,40,41,42,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,68,69,70,71,72,73,75,76,77,78,80,81,82,84,85,87,88,90,91,93,94,96,97,99,100,102,104,105,107,109,110,112,114,115,117,119,121,122,124,126,127,129,131,133,134,136,138,139,141,143,145,146,148,150,151,153,155,156,158,160,161,163,164,166,167,169,170,172,173,175,176,178,179,180,182,183,184,186,187,188,189,190,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,207,208,209,210,211,212,213,213,214,215,216,217,217,218,219,220,220,221,222,223,223,224,225,225,226,227,228,228,229,229,230,231,231,232,233,233,234,234,235,236,236,237,237,238,239,239,240,240,241,241,242,242,243,243,244,245,245,246,246,247,247,248,248,249,249,250,250,251,251,252,252,253,253,254,254,255),
        "r": Uint8ClampedArray.of(0,0,1,2,3,4,5,6,7,8,9,10,11,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,78,79,80,81,82,83,84,85,86,87,89,90,91,92,94,95,96,97,98,100,101,102,103,105,106,107,108,110,111,112,114,115,116,118,119,120,122,123,125,126,127,129,130,131,133,134,136,137,138,140,141,143,144,145,147,148,150,151,152,154,155,156,158,159,161,162,163,165,166,167,169,170,171,173,174,175,176,178,179,180,181,183,184,185,186,188,189,190,191,192,193,194,195,197,198,199,200,201,202,203,204,205,206,207,207,208,209,210,211,212,213,214,215,215,216,217,218,219,219,220,221,222,222,223,224,225,225,226,227,228,228,229,230,230,231,232,232,233,234,234,235,235,236,237,237,238,239,239,240,240,241,241,242,243,243,244,244,245,245,246,247,247,248,248,249,249,250,250,251,251,252,253,253,254,254,255),
        "g": Uint8ClampedArray.of(0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,64,65,66,67,68,69,70,71,72,73,75,76,77,78,79,80,81,83,84,85,86,87,88,90,91,92,94,95,96,97,99,100,101,103,104,105,107,108,110,111,112,114,115,117,118,120,121,123,124,126,127,129,130,132,133,135,136,138,140,141,143,144,146,147,149,150,152,153,155,156,158,159,161,162,163,165,166,168,169,170,172,173,174,176,177,178,180,181,182,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198,198,199,200,201,202,203,204,205,206,206,207,208,209,210,210,211,212,213,214,214,215,216,217,217,218,219,219,220,221,222,222,223,224,224,225,226,226,227,228,228,229,229,230,231,231,232,233,233,234,234,235,235,236,237,237,238,238,239,239,240,240,241,242,242,243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,251,251,252,253,253,254,254,255),
        "b": Uint8ClampedArray.of(0,1,3,4,6,7,9,10,12,14,15,17,18,20,21,23,24,26,28,29,31,32,34,35,37,38,40,41,43,44,46,47,49,50,52,53,55,56,58,59,60,62,63,65,66,68,69,70,72,73,75,76,77,79,80,81,83,84,85,87,88,89,90,92,93,94,95,97,98,99,100,101,102,103,105,106,107,108,109,110,112,113,114,115,116,117,118,119,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,168,169,170,171,172,173,174,175,176,177,177,178,179,180,181,182,183,183,184,185,186,187,188,189,189,191,192,192,193,194,195,196,196,197,198,199,200,200,201,202,203,203,204,205,206,206,207,208,209,209,210,211,212,212,213,214,214,215,216,217,217,218,219,219,220,221,221,222,223,223,224,225,225,226,227,227,228,229,229,230,231,231,232,233,233,234,234,235,236,236,237,238,238,239,239,240,241,241,242,243,243,244,244,245,246,246,247,247,248,249,249,250,250,251,252,252,253,253,254,255)
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
    "Smart color": {
        "a": Uint8ClampedArray.of(0,1,1,3,3,5,5,7,8,8,10,10,12,12,14,15,15,17,17,19,19,21,22,22,24,24,26,26,28,28,29,31,31,33,33,35,35,36,38,38,40,40,42,42,43,45,45,47,47,49,49,51,52,52,54,54,56,56,58,59,59,61,61,63,63,65,66,66,68,68,70,70,72,73,73,75,75,77,77,79,79,80,82,82,84,84,86,86,87,89,89,91,91,93,93,94,96,96,98,98,100,100,102,103,103,105,105,107,107,109,110,110,112,112,114,114,116,117,117,119,119,121,121,123,124,124,126,126,128,128,130,130,131,133,133,135,135,137,137,138,140,140,142,142,144,144,145,147,147,149,149,151,151,153,154,154,156,156,158,158,160,161,161,163,163,165,165,167,168,168,170,170,172,172,174,175,175,177,177,179,179,181,181,182,184,184,186,186,188,188,189,191,191,193,193,195,195,196,198,198,200,200,202,202,204,205,205,207,207,209,209,211,212,212,214,214,216,216,218,219,219,221,221,223,223,225,226,226,228,228,230,230,232,232,233,235,235,237,237,239,239,240,242,242,244,244,246,246,247,249,249,251,251,253,253,255),
        "r": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,35,36,38,39,40,41,42,44,45,46,47,49,50,51,52,54,55,56,57,59,60,61,62,64,65,66,67,68,70,71,72,73,74,76,77,78,79,80,82,83,84,85,86,88,89,90,91,92,94,95,96,97,98,99,101,102,103,104,105,106,108,109,110,111,112,113,114,115,117,118,119,120,121,122,123,124,126,127,128,129,130,131,132,133,134,136,137,138,139,140,141,142,143,144,145,146,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,217,218,219,220,221,222,224,225,226,227,228,229,230,232,233,234,235,236,237,238,239,239,240,241,242,243,243,244,245,245,246,246,247,247,248,248,249,249,249,250,250,250,251,251,251,252,252,252,252,252,253,253,253,253,253,254,254,254),
        "g": Uint8ClampedArray.of(1,1,2,3,4,5,6,6,7,8,9,10,10,11,12,13,14,15,16,16,17,18,19,20,21,22,22,23,24,25,26,27,28,29,30,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,184,185,186,187,188,189,190,191,192,193,195,196,197,198,199,200,202,203,204,205,206,208,209,210,211,212,213,215,216,217,218,219,220,221,222,223,224,225,226,227,228,230,231,232,233,234,235,236,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254),
        "b": Uint8ClampedArray.of(0,0,0,1,1,2,2,3,3,4,4,5,5,5,6,6,7,7,8,8,9,9,10,10,11,12,12,13,13,14,14,15,16,16,17,17,18,19,19,20,20,21,22,22,23,24,24,25,26,26,27,28,29,29,30,31,32,32,33,34,35,35,36,37,38,39,39,40,41,42,43,44,44,45,46,47,48,49,50,51,52,53,54,55,55,56,57,58,59,60,61,62,63,64,65,66,68,69,70,71,72,73,74,75,76,77,79,80,81,82,83,84,86,87,88,89,90,91,93,94,95,96,97,99,100,101,102,104,105,106,107,109,110,111,112,114,115,116,118,119,120,121,123,124,125,127,128,129,131,132,133,134,136,137,138,139,140,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,168,169,170,172,173,174,175,176,177,178,179,180,182,183,184,185,186,188,189,190,191,193,194,195,197,198,199,200,202,203,204,206,207,208,209,211,212,213,214,216,217,218,219,220,222,223,224,225,227,228,229,230,231,233,234,235,236,237,239,240,241,242,243,245,246,247,248,249,251,252,253,254),
    },
    "Undeadify skin color": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,255),
        "r": Uint8ClampedArray.of(0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,6,6,6,7,7,7,8,8,9,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,20,20,21,22,22,23,24,24,25,26,26,27,28,29,30,30,31,32,33,34,35,36,37,37,38,39,40,41,43,44,45,46,47,48,49,50,52,53,54,56,57,59,60,62,63,65,66,68,70,72,74,75,77,79,81,83,85,87,89,91,93,95,98,100,102,104,106,108,111,113,115,117,120,122,124,126,128,131,133,135,137,139,141,144,146,148,150,152,154,156,158,160,162,164,166,168,169,171,173,175,176,178,180,181,183,184,185,187,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,213,214,215,216,217,218,218,219,220,221,221,222,223,224,224,225,226,226,227,228,228,229,230,230,231,231,232,233,233,234,234,235,235,236,237,237,238,238,239,239,240,240,241,241,242,242,242,243,243,244,244,245,245,246,246,246,247,247,248,248,249,249,249,250,250,251,251,251,252,252,253,253,253,254,254,255,255),
        "g": Uint8ClampedArray.of(0,1,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,12,13,13,14,14,15,16,16,17,17,18,19,19,20,21,21,22,23,23,24,25,25,26,27,28,28,29,30,31,31,32,33,34,34,35,36,37,38,39,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,65,66,67,68,70,71,72,74,75,77,78,79,81,82,84,85,87,88,90,91,93,95,96,98,99,101,103,104,106,108,109,111,112,114,116,117,119,121,122,124,126,127,129,130,132,134,135,137,138,140,142,143,145,146,148,149,151,152,154,155,156,158,159,160,162,163,164,166,167,168,169,170,171,172,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,203,204,205,206,207,208,209,210,210,211,212,213,214,215,216,216,217,218,219,220,220,221,222,223,224,224,225,226,227,228,228,229,230,231,231,232,233,234,234,235,236,237,237,238,239,240,240,241,242,243,243,244,245,245,246,247,248,248,249,250,250,251,252,253,253,254,255),
        "b": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,246,247,248,249,250,251,252,253,254,255)
    },
    "Vitality pro alpha": {
        "a": Uint8ClampedArray.of(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255),
        "r": Uint8ClampedArray.of(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,2,2,2,2,3,3,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,13,14,15,16,16,18,19,20,21,22,23,24,26,27,28,29,31,32,33,34,36,37,38,39,41,42,43,45,46,47,49,50,51,53,54,55,57,58,59,61,62,63,65,66,68,69,70,72,73,75,76,77,79,80,82,83,84,86,87,89,90,92,93,95,96,98,99,100,102,103,105,106,108,109,111,112,114,115,117,118,120,122,123,125,126,128,129,131,132,134,135,137,138,140,142,143,145,146,148,149,151,153,154,156,157,159,160,162,164,165,167,168,170,172,173,175,176,178,180,181,183,185,186,188,189,191,193,194,196,197,199,201,202,204,206,207,209,211,212,214,215,217,219,220,222,224,225,227,229,230,232,234,235,237,239,240,242,243,245,247,248,250,252,253,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255),
        "g": Uint8ClampedArray.of(0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,11,11,12,12,13,14,14,15,15,16,17,17,18,19,19,20,21,22,22,23,24,25,26,27,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,57,58,59,61,62,63,64,65,67,68,69,70,71,73,74,75,76,78,79,80,81,82,84,85,86,87,89,90,91,93,94,95,96,98,99,100,101,103,104,105,107,108,109,110,112,113,114,116,117,118,120,121,122,123,125,126,127,129,130,131,133,134,135,136,138,139,140,142,143,144,146,147,148,149,151,152,153,155,156,157,158,160,161,162,164,165,166,167,169,170,171,173,174,175,176,178,179,180,181,183,184,185,186,188,189,190,191,192,194,195,196,197,198,200,201,202,203,204,206,207,208,209,210,211,213,214,215,216,217,218,219,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,235,236,237,238,239,239,240,241,241,242,243,243,244,244,245,245,246,246,247,247,248,248,249,249,250,250,251,251,251,252,252,253,253,253,254,254,255,255),
        "b": Uint8ClampedArray.of(20,21,22,23,23,24,25,26,27,28,28,29,30,31,32,33,33,34,35,36,37,38,39,39,40,41,42,43,44,44,45,46,47,48,49,50,50,51,52,53,54,55,55,56,57,58,59,60,60,61,62,63,64,65,66,66,67,68,69,70,71,71,72,73,74,75,76,76,77,78,79,80,81,82,82,83,84,85,86,87,87,88,89,90,91,92,93,93,94,95,96,97,98,98,99,100,101,102,103,103,104,105,106,107,108,109,109,110,111,112,113,114,114,115,116,117,118,119,119,120,121,122,123,124,125,125,126,127,128,129,130,130,131,132,133,134,135,136,136,137,138,139,140,141,141,142,143,144,145,146,146,147,148,149,150,151,152,152,153,154,155,156,157,157,158,159,160,161,162,162,163,164,165,166,167,168,168,169,170,171,172,173,173,174,175,176,177,178,179,179,180,181,182,183,184,184,185,186,187,188,189,189,190,191,192,193,194,195,195,196,197,198,199,200,200,201,202,203,204,205,205,206,207,208,209,210,211,211,212,213,214,215,216,216,217,218,219,220,221,222,222,223,224,225,226,227,227,228,229,230,231,232,232,233,234,235)
    },
    "Film": {
        "a": Uint8ClampedArray.of(0,1,1,3,3,5,6,7,8,8,10,10,12,13,14,15,15,17,18,19,20,21,22,22,24,25,26,27,28,29,29,31,32,33,34,35,36,36,38,39,40,41,42,43,43,45,45,47,48,49,50,51,52,52,54,55,56,57,58,59,59,61,61,63,64,65,66,66,68,68,70,70,72,73,73,75,75,77,77,79,80,80,82,82,84,84,86,87,87,89,89,91,91,93,93,94,96,96,98,98,100,100,102,102,103,105,105,107,107,109,109,110,112,112,114,114,116,116,117,119,119,121,121,123,123,124,125,126,128,128,130,130,131,132,133,134,135,137,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,153,153,154,155,156,157,158,160,160,161,162,163,165,165,167,167,168,169,170,172,172,174,174,175,177,177,179,180,181,182,182,184,184,186,187,188,189,189,191,192,193,194,195,196,196,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,212,214,215,216,217,218,219,219,221,221,223,224,225,226,226,228,228,230,231,232,233,233,235,235,237,237,239,240,240,242,242,244,244,246,246,247,249,249,251,251,253,253,255),
        "r": Uint8ClampedArray.of(26,25,25,25,25,25,25,25,25,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,25,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,29,29,30,30,30,31,31,32,32,33,33,34,35,35,36,37,37,38,39,40,41,42,42,43,44,46,47,48,49,50,51,53,54,55,57,58,60,61,62,64,65,67,68,70,71,73,74,76,77,79,80,82,83,84,86,87,89,90,92,93,95,96,98,99,101,102,104,105,107,108,110,111,113,114,116,117,119,121,122,124,125,127,128,130,131,133,134,135,137,138,140,141,143,144,146,147,149,150,152,153,155,156,158,159,160,162,163,165,166,168,169,170,172,173,175,176,177,179,180,181,182,184,185,186,188,189,190,191,193,194,195,196,197,199,200,201,202,203,205,206,207,208,209,210,211,212,213,214,215,216,218,219,220,221,221,222,223,224,225,226,227,228,229,230,231,232,233,233,234,235,236,237,237,238,239,240,240,241,242,242,243,244,244,245,245,246,246,247,247,248,248,248,249,249,250,250,250,251,251,251,251,252,252,252,252,253,253,253,253,254,254,254,254,255),
        "g": Uint8ClampedArray.of(49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,48,48,48,48,48,48,48,48,48,47,47,47,47,47,46,46,46,46,46,46,46,46,46,46,46,46,47,47,47,48,48,49,49,50,50,51,52,53,54,54,55,56,57,58,60,61,62,63,64,65,67,68,69,70,72,73,74,76,77,78,80,81,82,84,85,86,88,89,90,92,93,95,96,98,99,101,102,104,105,107,108,110,112,113,115,116,118,119,121,122,124,126,127,129,130,131,133,134,136,137,139,140,142,143,145,146,148,149,151,152,154,155,157,158,159,161,162,164,165,167,168,169,171,172,173,175,176,177,179,180,181,183,184,185,187,188,189,191,192,193,194,196,197,198,199,201,202,203,204,205,207,208,209,210,211,212,213,214,215,216,218,219,220,221,222,223,224,224,225,226,227,228,229,230,231,232,233,233,234,235,236,237,237,238,239,240,240,241,242,242,243,244,244,245,245,246,246,247,247,248,248,248,249,249,250,250,250,251,251,251,251,252,252,252,252,253,253,253,253,254,254,254,254,255),
        "b": Uint8ClampedArray.of(68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,67,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,68,69,69,69,70,70,71,71,72,73,73,74,75,76,77,78,80,81,82,83,85,86,88,89,91,92,94,95,97,99,100,102,104,105,107,109,110,112,113,115,116,118,119,121,122,124,125,127,128,130,131,133,135,136,138,139,141,142,144,145,147,148,150,151,153,154,156,157,159,160,162,163,165,166,168,169,170,172,173,175,176,177,179,180,182,183,185,186,187,189,190,191,193,194,195,197,198,199,201,202,203,205,206,207,208,209,211,212,213,214,215,216,217,218,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,234,235,236,237,238,239,239,240,241,242,242,243,243,244,245,245,246,246,247,247,248,248,249,249,249,250,250,250,251,251,251,252,252,252,253,253,253,253,254,254,254,255),
    },
    "Imperial": {
        "a": Uint8ClampedArray.of(0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,79,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,99,100,101,102,103,104,105,107,108,109,110,111,112,114,115,116,117,118,120,121,122,123,124,126,127,128,129,131,132,134,135,137,138,140,142,144,146,148,149,151,153,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,189,191,193,194,196,197,198,200,201,202,203,204,205,206,206,207,208,209,210,211,212,212,213,214,215,216,216,217,218,218,219,220,221,221,222,223,223,224,225,225,226,227,227,228,228,229,230,230,231,231,232,232,233,234,234,235,235,236,236,237,237,238,238,239,239,240,240,241,241,241,242,242,243,243,244,244,245,245,245,246,246,247,247,247,248,248,249,249,249,250,250,251,251,251,252,252,253,253,253,254,254,255),
        "r": Uint8ClampedArray.of(0,0,1,1,2,2,3,4,4,5,5,6,6,7,8,8,9,9,10,11,11,12,12,13,14,14,15,15,16,17,17,18,18,19,20,20,21,21,22,23,23,24,25,25,26,27,27,28,29,29,30,31,31,32,33,33,34,35,35,36,37,38,38,39,40,40,41,42,43,43,44,45,46,46,47,48,49,50,50,51,52,53,54,54,55,56,57,58,59,60,60,61,62,63,64,65,66,67,68,69,70,71,72,73,73,74,75,76,77,78,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,97,98,100,103,105,107,109,112,115,117,120,123,125,128,131,134,137,140,142,145,148,151,153,156,158,161,163,165,167,169,171,173,174,176,177,179,180,181,182,183,184,185,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,208,209,210,211,212,213,214,214,215,216,217,218,218,219,220,221,222,222,223,224,225,225,226,227,228,228,229,230,230,231,232,232,233,234,234,235,236,236,237,238,238,239,240,240,241,242,242,243,243,244,245,245,246,247,247,248,248,249,250,250,251,251,252,253,253,254,255),
        "g": Uint8ClampedArray.of(0,1,1,3,3,5,5,7,8,8,10,10,12,12,14,15,15,17,17,19,19,21,22,22,24,24,26,26,28,28,29,31,31,33,33,35,35,36,38,38,40,40,42,42,43,45,45,47,47,49,49,51,52,52,54,54,56,56,58,59,59,61,61,63,63,65,66,66,68,68,70,70,72,73,73,75,75,77,77,79,79,80,82,82,84,84,86,86,87,89,89,91,91,93,93,94,96,96,98,98,100,100,102,103,103,105,105,107,107,109,110,110,112,112,114,114,116,117,117,119,119,121,121,123,124,124,126,126,128,128,130,130,131,133,133,135,135,137,137,138,140,140,142,142,144,144,145,147,147,149,149,151,151,153,154,154,156,156,158,158,160,161,161,163,163,165,165,167,168,168,170,170,172,172,174,175,175,177,177,179,179,181,181,182,184,184,186,186,188,188,189,191,191,193,193,195,195,196,198,198,200,200,202,202,204,205,205,207,207,209,209,211,212,212,214,214,216,216,218,219,219,221,221,223,223,225,226,226,228,228,230,230,232,232,233,235,235,237,237,239,239,240,242,242,244,244,246,246,247,249,249,251,251,253,253,255),
        "b": Uint8ClampedArray.of(0,1,1,3,3,5,5,7,8,8,10,10,12,12,14,15,15,17,17,19,19,21,22,22,24,24,26,26,28,28,29,31,31,33,33,35,35,36,38,38,40,40,42,42,43,45,45,47,47,49,49,51,52,52,54,54,56,56,58,59,59,61,61,63,63,65,66,66,68,68,70,70,72,73,73,75,75,77,77,79,79,80,82,82,84,84,86,86,87,89,89,91,91,93,93,94,96,96,98,98,100,100,102,103,103,105,105,107,107,109,110,110,112,112,114,114,116,117,117,119,119,121,121,123,124,124,126,126,128,128,130,130,131,133,133,135,135,137,137,138,140,140,142,142,144,144,145,147,147,149,149,151,151,153,154,154,156,156,158,158,160,161,161,163,163,165,165,167,168,168,170,170,172,172,174,175,175,177,177,179,179,181,181,182,184,184,186,186,188,188,189,191,191,193,193,195,195,196,198,198,200,200,202,202,204,205,205,207,207,209,209,211,212,212,214,214,216,216,218,219,219,221,221,223,223,225,226,226,228,228,230,230,232,232,233,235,235,237,237,239,239,240,242,242,244,244,246,246,247,249,249,251,251,253,253,255),
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

var Filter = function(data){
    "use strict";

    if (!(this instanceof Filter)) {
        return new Filter(data);
    }

    this.ar_ = new Uint8Array(256);
    this.ag_ = new Uint8Array(256);
    this.ab_ = new Uint8Array(256);

    for(var i = 0; (i|0) < 256; i = i+1|0){
        this.ar_[i|0] = data.a[data.r[i|0]];
        this.ag_[i|0] = data.a[data.g[i|0]];
        this.ab_[i|0] = data.a[data.b[i|0]];
    }
};

var FilterGreyscale = function(){
    "use strict";

    if (!(this instanceof FilterGreyscale)) {
        return new FilterGreyscale();
    }
};


Object.defineProperty(FilterGreyscale.prototype, 'filter_colors', {
    get: function() {
        "use strict";
        return function (colors, intensity){
            "use strict";
            intensity = Math.round(parseFloat(intensity) * 255) | 0;
            var uint8_colors = new Uint8Array(colors.buffer);
            var new_uint8_colors_length = uint8_colors.length|0;
            var new_uint8_colors = new Uint8Array(new_uint8_colors_length|0);
            var new_uint32_colors = new Uint32Array(new_uint8_colors.buffer);

            for(var i4 = 0; (i4|0) < (new_uint8_colors_length|0); i4 = (i4+4|0)>>>0){
                new_uint8_colors[i4|0] = new_uint8_colors[i4+1|0] = new_uint8_colors[i4+2|0] = ((uint8_colors[i4|0] + uint8_colors[i4+1|0] + uint8_colors[i4+2|0] | 0) / 3 | 0) >>> 0;
                new_uint8_colors[i4+3|0] = uint8_colors[i4+3|0];
            }

            var old_simdope_colors = new Colors(colors);
            var new_simdope_colors = new Colors(new_uint32_colors);
            var temp_simdope_colors_a = new Color(new ArrayBuffer(4));
            var temp_simdope_colors_b = new Color(new ArrayBuffer(4));
            var new_uint32_colors_length = new_uint32_colors.length|0;

            for(var i = 0; (i|0) < (new_uint32_colors_length|0); i = (i+1|0)>>>0){
                old_simdope_colors.get_use_element(i|0, temp_simdope_colors_a).blend_with(new_simdope_colors.get_use_element(i|0,temp_simdope_colors_b), intensity, false, false);
            }

            return colors;
        };
    },
    enumerable: false,
    configurable: false
});

var SEPIA_FLOATS = Float32Array.of(.393, .769, .189, .349, .686, .168, .272, .534, .131);
function CLAMP_UINT( x,min,max ) {
    "use strict";
    x = x|0; min = (min|0)>>>0; max = (max|0)>>>0;
    x = (x - ((x - max|0) & ((max - x|0) >> 31)) | 0) >>> 0;
    return (x - ((x - min|0) & ((x - min|0) >> 31)) | 0) >>> 0;
}

// Result Color = Top Color + Bottom Color − (Top Color × Bottom Color)
function SCREEN_COMP(uint8) {
    "use strict";
    var float32 = fr(uint8 / 255);
    return 255 - clamp_int(uint8 + uint8 - Math.round(float32 * float32 * 255 | 0) | 0, 0, 255);
}

// Result Color = absolute ( Top Color − Bottom Color )
function DIFFERENCE_COMP(uint8) {
    "use strict";
    return abs_int(minus_int(uint8, uint8));
}

var FilterScreen = function(){
    "use strict";

    if (!(this instanceof FilterScreen)) {
        return new FilterScreen();
    }
};


Object.defineProperty(FilterScreen.prototype, 'filter_colors', {
    get: function() {
        "use strict";
        return function (colors, intensity){
            "use strict";
            intensity = Math.round(parseFloat(intensity) / 4 * 255) | 0;
            var uint8_colors = new Uint8Array(colors.buffer);
            var new_uint8_colors_length = uint8_colors.length|0;
            var new_uint8_colors = new Uint8Array(new_uint8_colors_length|0);
            var new_uint32_colors = new Uint32Array(new_uint8_colors.buffer);

            for(var i4 = 0; (i4|0) < (new_uint8_colors_length|0); i4 = (i4+4|0)>>>0){
                new_uint8_colors[i4|0] = SCREEN_COMP(new_uint8_colors[i4|0]);
                new_uint8_colors[i4+1|0] = SCREEN_COMP(new_uint8_colors[i4+1|0]);
                new_uint8_colors[i4+2|0] = SCREEN_COMP(new_uint8_colors[i4+2|0]);
                new_uint8_colors[i4+3|0] = uint8_colors[i4+3|0];
            }

            var old_simdope_colors = new Colors(colors);
            var new_simdope_colors = new Colors(new_uint32_colors);
            var temp_simdope_colors_a = new Color(new ArrayBuffer(4));
            var temp_simdope_colors_b = new Color(new ArrayBuffer(4));
            var new_uint32_colors_length = new_uint32_colors.length|0;

            for(var i = 0; (i|0) < (new_uint32_colors_length|0); i = (i+1|0)>>>0){
                old_simdope_colors.get_use_element(i|0, temp_simdope_colors_a).blend_with(new_simdope_colors.get_use_element(i|0,temp_simdope_colors_b), intensity, false, false);
            }

            return colors;
        };
    },
    enumerable: false,
    configurable: false
});


var FilterDifference = function(){
    "use strict";

    if (!(this instanceof FilterDifference)) {
        return new FilterDifference();
    }
};


Object.defineProperty(FilterDifference.prototype, 'filter_colors', {
    get: function() {
        "use strict";
        return function (colors, intensity){
            "use strict";
            intensity = Math.round(parseFloat(intensity) / 2 * 255) | 0;
            var uint8_colors = new Uint8Array(colors.buffer);
            var new_uint8_colors_length = uint8_colors.length|0;
            var new_uint8_colors = new Uint8Array(new_uint8_colors_length|0);
            var new_uint32_colors = new Uint32Array(new_uint8_colors.buffer);

            for(var i4 = 0; (i4|0) < (new_uint8_colors_length|0); i4 = (i4+4|0)>>>0){
                new_uint8_colors[i4|0] = DIFFERENCE_COMP(new_uint8_colors[i4|0]);
                new_uint8_colors[i4+1|0] = DIFFERENCE_COMP(new_uint8_colors[i4+1|0]);
                new_uint8_colors[i4+2|0] = DIFFERENCE_COMP(new_uint8_colors[i4+2|0]);
                new_uint8_colors[i4+3|0] = uint8_colors[i4+3|0];
            }

            var old_simdope_colors = new Colors(colors);
            var new_simdope_colors = new Colors(new_uint32_colors);
            var temp_simdope_colors_a = new Color(new ArrayBuffer(4));
            var temp_simdope_colors_b = new Color(new ArrayBuffer(4));
            var new_uint32_colors_length = new_uint32_colors.length|0;

            for(var i = 0; (i|0) < (new_uint32_colors_length|0); i = (i+1|0)>>>0){
                old_simdope_colors.get_use_element(i|0, temp_simdope_colors_a).blend_with(new_simdope_colors.get_use_element(i|0,temp_simdope_colors_b), intensity, false, false);
            }

            return colors;
        };
    },
    enumerable: false,
    configurable: false
});

var FilterSepia = function(){
    "use strict";

    if (!(this instanceof FilterSepia)) {
        return new FilterSepia();
    }
};

Object.defineProperty(FilterSepia.prototype, 'filter_colors', {
    get: function() {
        "use strict";
        return function (colors, intensity){
            "use strict";
            intensity = Math.round(parseFloat(intensity) * 255) | 0;
            var uint8_colors = new Uint8Array(colors.buffer);
            var new_uint8_colors_length = uint8_colors.length|0;
            var new_uint8_colors = new Uint8Array(new_uint8_colors_length|0);
            var new_uint32_colors = new Uint32Array(new_uint8_colors.buffer);


            for(var i4 = 0; (i4|0) < (new_uint8_colors_length|0); i4 = (i4+4|0)>>>0){
                new_uint8_colors[i4+3|0] = uint8_colors[i4+3|0];
                new_uint8_colors[i4|0] = CLAMP_UINT(((uint8_colors[i4|0] * SEPIA_FLOATS[0]) + (uint8_colors[i4+1|0]  * SEPIA_FLOATS[1]) + (uint8_colors[i4+2|0] * SEPIA_FLOATS[2]))|0,0,255) & 0xFF;
                new_uint8_colors[i4+1|0] = CLAMP_UINT(((uint8_colors[i4|0] * SEPIA_FLOATS[3]) + (uint8_colors[i4+1|0] * SEPIA_FLOATS[4]) + (uint8_colors[i4+2|0] * SEPIA_FLOATS[5]))|0,0,255) & 0xFF;
                new_uint8_colors[i4+2|0] = CLAMP_UINT(((uint8_colors[i4|0] * SEPIA_FLOATS[6]) + (uint8_colors[i4+1|0] * SEPIA_FLOATS[7]) + (uint8_colors[i4+2|0] * SEPIA_FLOATS[8]))|0,0,255) & 0xFF;
            }

            var old_simdope_colors = new Colors(colors);
            var new_simdope_colors = new Colors(new_uint32_colors);
            var temp_simdope_colors_a = new Color(new ArrayBuffer(4));
            var temp_simdope_colors_b = new Color(new ArrayBuffer(4));
            var new_uint32_colors_length = new_uint32_colors.length|0;

            for(var i = 0; (i|0) < (new_uint32_colors_length|0); i = (i+1|0)>>>0){
                old_simdope_colors.get_use_element(i|0, temp_simdope_colors_a).blend_with(new_simdope_colors.get_use_element(i|0,temp_simdope_colors_b), intensity, false, false);
            }

            return colors;
        };
    },
    enumerable: false,
    configurable: false
});

Object.defineProperty(Filter.prototype, 'filter_colors', {
    get: function() {
        "use strict";
        return function (colors, intensity){
            "use strict";
            intensity = Math.round(parseFloat(intensity) * 255) | 0;
            var uint8_colors = new Uint8Array(colors.buffer);
            var new_uint8_colors_length = uint8_colors.length|0;
            var new_uint8_colors = new Uint8Array(new_uint8_colors_length|0);
            var new_uint32_colors = new Uint32Array(new_uint8_colors.buffer);

            for(var i4 = 0; (i4|0) < (new_uint8_colors_length|0); i4 = (i4+4|0)>>>0){
                new_uint8_colors[i4+3|0] = uint8_colors[i4+3|0];
                new_uint8_colors[i4|0] = this.ar_[uint8_colors[i4|0]];
                new_uint8_colors[i4+1|0] = this.ag_[uint8_colors[i4+1|0]];
                new_uint8_colors[i4+2|0] = this.ab_[uint8_colors[i4+2|0]];
            }

            var old_simdope_colors = new Colors(colors);
            var new_simdope_colors = new Colors(new_uint32_colors);
            var temp_simdope_colors_a = new Color(new ArrayBuffer(4));
            var temp_simdope_colors_b = new Color(new ArrayBuffer(4));
            var new_uint32_colors_length = new_uint32_colors.length|0;

            for(var i = 0; (i|0) < (new_uint32_colors_length|0); i = (i+1|0)>>>0){
                old_simdope_colors.get_use_element(i|0, temp_simdope_colors_a).blend_with(new_simdope_colors.get_use_element(i|0, temp_simdope_colors_b), intensity, false, false);
            }

            return colors;
        };
    },
    enumerable: false,
    configurable: false
});

var Filters = function(data){
    "use strict";

    if (!(this instanceof Filters)) {
        return new Filters(data);
    }

    data = data || DEFAULT_FILTERS;
    this.names_ = Object.keys(data);
    this.filters_ = Object.values(data).map(function (o){return Filter(o);});
    this.special_names_ = Array.of("Greyscale","Sepia", "Screen", "Difference");
    this.filter_sepia_ = new FilterSepia();
    this.filter_greyscale_ = new FilterGreyscale();
    this.filter_screen_ = new FilterScreen();
    this.filter_difference_ = new FilterDifference();
};
Object.defineProperty(Filters.prototype, 'names', {
    get: function() {
        "use strict";
        return this.names_.concat(this.special_names_);
    },
    enumerable: false,
    configurable: false
});
Object.defineProperty(Filters.prototype, 'use', {
    get: function() {
        "use strict";
        return function (name, layer, intensity, copy){
            "use strict";
            copy = typeof copy == "undefined" ? false: Boolean(copy);
            var index = this.names_.indexOf(name);
            if(typeof layer === "undefined"){ return; }
            if(index < 0){

                if(copy){
                    switch (name){
                        case "Sepia":
                            return Layer.new_from_colors_and_indexes(this.filter_sepia_.filter_colors(layer.colors_copy, intensity), layer.indexes, layer.width, layer.height);
                        case "Screen":
                            return Layer.new_from_colors_and_indexes(this.filter_screen_.filter_colors(layer.colors_copy, intensity), layer.indexes, layer.width, layer.height);
                        case "Difference":
                            return Layer.new_from_colors_and_indexes(this.filter_difference_.filter_colors(layer.colors_copy, intensity), layer.indexes, layer.width, layer.height);
                        default:
                            return Layer.new_from_colors_and_indexes(this.filter_greyscale_.filter_colors(layer.colors_copy, intensity), layer.indexes, layer.width, layer.height);
                    }
                }else {
                    switch (name){
                        case "Sepia":
                            layer.set_colors(this.filter_sepia_.filter_colors(layer.colors_copy, intensity));
                            return layer;
                        case "Screen":
                            layer.set_colors(this.filter_screen_.filter_colors(layer.colors_copy, intensity));
                            return layer;
                        case "Difference":
                            layer.set_colors(this.filter_difference_.filter_colors(layer.colors_copy, intensity));
                            return layer;
                        default:
                            layer.set_colors(this.filter_greyscale_.filter_colors(layer.colors_copy, intensity));
                            return layer;
                    }
                }

            }else {
                if(copy){
                    return Layer.new_from_colors_and_indexes(this.filters_[index].filter_colors(layer.colors_copy, intensity), layer.indexes, layer.width, layer.height);
                }else {

                    layer.set_colors(this.filters_[index].filter_colors(layer.colors_copy, intensity));
                    return layer;
                }
            }
        }
    },
    enumerable: false,
    configurable: false
});



module.exports = {
    Layer, Layers, Filters
}