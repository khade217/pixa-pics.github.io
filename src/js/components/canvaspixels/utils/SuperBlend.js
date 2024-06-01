import {SIMDopeCreate, SIMDopeCreateConfAdd} from "simdope";
var MODE = SIMDopeCreateConfAdd({
    "create": {
        "new_of": true
    },
    "properties": {
        "buffer": true,
    },
    "methods": {
        "get_use_element": true,
        "set_tail": true,
        "set_from_simdope": true,
        "set_from_buffer": true,
        "get_tail": true,
        "get_tail_opacity": true,
        "reset_tail": true,
        "is_dark": true,
        "blend_first_with": true,
        "blend_first_with_tails": true,
        "is_not_fully_transparent": true,
        "copy": true
    }
});
const {simdops, Color, Colors} = SIMDopeCreate(MODE);
const {
    minus_int,
    int_not_equal,
    plus_int,
    plus_uint,
    minus_uint,
    multiply_int,
    multiply_uint,
    divide_uint,
    clamp_uint8,
    clamp_uint32,
    int_equal,
    uint_less,
    int_less,
    int_greater_equal,
    uint_not_equal,
    uint_less_equal,
    min_uint,
} = simdops;


function _build_state(layer_number, max_length, layers_opacity_255) {
    "use strict";
    layer_number = layer_number | 0;
    max_length = max_length | 0;
    var layer_o = new Uint8Array(layer_number);
    if(typeof layers_opacity_255 != "undefined") {
        layer_o.fill(255);
        layer_o.set(layers_opacity_255, 0);
    }else {
        layer_o.fill(255);
    }

    let state = {
        number_length_index_byte: Uint32Array.of(layer_number, max_length, 0, 0),
        hover_data_in_layer: new Uint8Array(max_length),
        indexes_data_for_layers: new Uint32Array(max_length),
        colors_data_in_layers_uint32: new Uint32Array(max_length*layer_number),
        layers_opacity_255: layer_o,
    };

    state.colors_data_in_layers_uint32_SIMDope = new Colors(state.colors_data_in_layers_uint32.buffer);
    return state;
}
function _build_shadow_state (old_shadow_state) {
    "use strict";
    // Create a shadow state for computation
    old_shadow_state = old_shadow_state || {
        base_rgba_colors_for_blending: new Uint32Array(0),
        color_less_uint8x4: Color.new_of(255, 255, 255, 255),
        color_full_uint8x4: Color.new_of(0, 0, 0, 255),
        layers_color: [],
        all_layers_length: 0,
        used_colors_length: 0,
    };

    old_shadow_state.base_rgba_colors_for_blending_SIMDope = new Colors(old_shadow_state.base_rgba_colors_for_blending.buffer);
    return old_shadow_state;
}
function _update_state(state, layer_number, max_length, layers_opacity_255) {
    "use strict";
    layer_number = layer_number | 0;
    max_length = max_length | 0;

    if(typeof state === "undefined") {

        return _build_state(layer_number, max_length, layers_opacity_255);
    } if(state === null){

        return _build_state(layer_number, max_length, layers_opacity_255);
    } else {

        let layer_number_difference = minus_int(layer_number, state.layer_number);

        // Flooding or recreate existing layers
        if (int_not_equal(layer_number_difference, 0) || uint_less(state.max_length, max_length)) {

            return _build_state(layer_number, max_length, layers_opacity_255);
        }else {

            state.number_length_index_byte[0] = layer_number | 0;
            state.number_length_index_byte[1] = max_length | 0;
            state.number_length_index_byte[2] = 0;
            state.number_length_index_byte[3] = 0;
            if(typeof layers_opacity_255 != "undefined") {
                state.layers_opacity_255.fill(255);
                state.layers_opacity_255.set(layers_opacity_255);
            }else {
                state.layers_opacity_255.fill(255);
            }
            return state;
        }
    }
}

var SuperBlend = function(opts) {
    "use strict";
    opts = opts || {};

    if (!(this instanceof SuperBlend)) {
        return new SuperBlend(opts);
    }

    this.state_ = _build_state(opts.layer_number || 1, opts.max_length || 1, opts.layers_opacity_255 || new Uint8Array(0));
    this.number_length_index_byte_ = this.state_.number_length_index_byte;
    this.hover_data_in_layer_ = this.state_.hover_data_in_layer;
    this.indexes_data_for_layers_ = this.state_.indexes_data_for_layers;
    this.colors_data_in_layers_uint32_ = this.state_.colors_data_in_layers_uint32;
    this.shadow_state_ = _build_shadow_state();
    this.data_array_= [];
    this.destination_rgba_colors_for_blending_;
    this.destination_rgba_colors_for_blending_SIMDope_;

    return this;
}

Object.defineProperty(SuperBlend.prototype, 'state', {
    get: function() { "use strict"; return this.state_;},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'set_state', {
    get: function() { "use strict"; return function (s) {
        "use strict";
        this.state_ = s;
        this.number_length_index_byte_ = this.state_.number_length_index_byte;
        this.hover_data_in_layer_ = this.state_.hover_data_in_layer;
        this.indexes_data_for_layers_ = this.state_.indexes_data_for_layers;
        this.colors_data_in_layers_uint32_ = this.state_.colors_data_in_layers_uint32;
        return this.state_;
    }},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'set_shadow_state', {
    get: function() { "use strict"; return function (ss) {
        "use strict";
        return  this.shadow_state_  = ss;
    }},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'get_updated_shadow_state', {
    get: function() { "use strict"; return function() {
        "use strict";
        // Create a shadow state for computation
        if(this.shadow_state_.layers_color.length < (this.number_length_index_byte_[0]+1)) {
            this.shadow_state_.layers_colors = new Array(this.number_length_index_byte_[0] + 1 | 0).fill(null).map(function (){return new Color(new ArrayBuffer(4))});
        }

        if(!this.destination_rgba_colors_for_blending_){
            if(this.shadow_state_.base_rgba_colors_for_blending.length >= this.number_length_index_byte_[2]) { // If we have enough space for what we use this time
                this.shadow_state_.base_rgba_colors_for_blending.fill(0, 0, this.shadow_state_.used_colors_length); // Only erase what we used the previous time, so it has no filthy data, always.
            }else { // else define a new blank color list (a typed array) with the length we use this time
                this.shadow_state_.base_rgba_colors_for_blending = new Uint32Array(this.number_length_index_byte_[2] | 0);
                this.shadow_state_.base_rgba_colors_for_blending_SIMDope = new Colors(this.shadow_state_.base_rgba_colors_for_blending.buffer);
            }
        }

        this.shadow_state_.all_layers_length = this.number_length_index_byte_[0] | 0;
        this.shadow_state_.max_used_colors_length = this.number_length_index_byte_[1] | 0;
        this.shadow_state_.used_colors_length = this.number_length_index_byte_[2] | 0;

        return this.shadow_state_;
    }},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'shadow_state', {
    get: function() { "use strict"; return this.shadow_state_;},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'set_bytes_index', {
    get: function() { "use strict"; return function (i) {
        "use strict";
        return  this.number_length_index_byte_[3]  = i | 0;
    }},
    enumerable: false,
    configurable: false
});
Object.defineProperty(SuperBlend.prototype, 'data_array', {
    get: function() { "use strict";
        "use strict";
        return this.data_array_;
    },
    enumerable: false,
    configurable: false
});
Object.defineProperty(SuperBlend.prototype, 'set_data_array', {
    get: function() { "use strict"; return function (da, dest) {
        "use strict";
        this.data_array_  = da;
        if(dest){
            this.destination_rgba_colors_for_blending_ = dest;
            this.destination_rgba_colors_for_blending_SIMDope_ = new Colors(this.destination_rgba_colors_for_blending_.buffer);
        }
    }},
    enumerable: false,
    configurable: false
});
Object.defineProperty(SuperBlend.prototype, 'bytes_index', {
    get: function() { "use strict"; return function () {
        "use strict";
        return  this.number_length_index_byte_[3] | 0;
    }},
    enumerable: false,
    configurable: false
});

SuperBlend.init = function (lay_n, pxl_len, layers_opacity_255) {
    "use strict";
    return new SuperBlend({layer_number: lay_n, max_length: pxl_len, layers_opacity_255: layers_opacity_255});
}

Object.defineProperty(SuperBlend.prototype, 'for', {
    get: function() { "use strict"; return function (pixel_index, amount_hover) {
        "use strict";
        this.indexes_data_for_layers_[this.number_length_index_byte_[2]] = clamp_uint32(pixel_index);
        this.hover_data_in_layer_[this.number_length_index_byte_[2]] = clamp_uint8(amount_hover);
        this.number_length_index_byte_[2] = plus_uint(this.number_length_index_byte_[2], 1);
    }},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'next', {
    get: function() { "use strict"; return function () {
        "use strict";
        this.number_length_index_byte_[3] = plus_uint(this.number_length_index_byte_[3],1);
    }},
    enumerable: false,
    configurable: false
});

Object.defineProperty(SuperBlend.prototype, 'stack', {
    get: function() { "use strict"; return function (for_layer_index, ui32color) {
        "use strict";
        this.colors_data_in_layers_uint32_[plus_uint(multiply_uint(this.number_length_index_byte_[0], this.number_length_index_byte_[3]), clamp_uint8(for_layer_index))] = clamp_uint32(ui32color);
    }},
    enumerable: false,
    configurable: false
});

SuperBlend.prototype.blend = function(should_return_transparent, alpha_addition) {
    "use strict";

    should_return_transparent = should_return_transparent | 0;
    alpha_addition = alpha_addition | 0;

    var {
        base_rgba_colors_for_blending,
        base_rgba_colors_for_blending_SIMDope,
        all_layers_length,
        used_colors_length,
        layers_colors,
        color_less_uint8x4,
        color_full_uint8x4
    } = this.get_updated_shadow_state();

    var {
        colors_data_in_layers_uint32_SIMDope,
        hover_data_in_layer,
        layers_opacity_255,
        indexes_data_for_layers
    } = this.state;

    var dest_simdope = this.destination_rgba_colors_for_blending_SIMDope_;
    var dasd = this.data_array.map(function (d){return new Colors(d.data.buffer);});
    var dasdl = dasd.length||0;
    var layers_color_0 = layers_colors[0];
    var transparent = new Color(new ArrayBuffer(4));

    return new Promise(function (resolve) {
        "use strict";

        var off = new Uint32Array(6);
            off[4] = used_colors_length|0;
            off[5] = dasdl|0;
        if(dest_simdope){

            for (off[3]  = 0; uint_less(off[3] , all_layers_length+1); off[3]  = plus_int(off[3] , 1)) {
                layers_colors[off[3]].set_tail(layers_colors[off[3]+1|0], layers_opacity_255[off[3]]);
            }

            for (; uint_less(off[2], off[4]); off[2] = plus_uint(off[2], 1)) {

                dest_simdope.get_use_element(indexes_data_for_layers[off[2]], layers_color_0);

                if(layers_color_0.is_not_fully_transparent()){
                    layers_color_0.set_from_simdope(transparent)
                }

                off[0] = multiply_uint(off[2], all_layers_length);
                // Sum up all colors above
                for (off[3]  = 0; uint_less(off[3] , off[5]); off[3]  = plus_uint(off[3] , 1)) {
                    dasd[off[3] ].get_use_element(indexes_data_for_layers[off[2]], layers_colors[off[3]+1|0]);
                }

                for (off[3]  = off[5]; uint_less(off[3] , all_layers_length); off[3]  = plus_uint(off[3] , 1)) {
                    off[1] = plus_uint(off[0], off[3] );
                    colors_data_in_layers_uint32_SIMDope.get_use_element(off[1], layers_colors[off[3]+1|0]);
                }

                if((hover_data_in_layer[off[2]]|0) > 0) {
                    layers_color_0.blend_first_with_tails(alpha_addition)
                    layers_color_0.blend_first_with(layers_color_0.is_dark() ? color_less_uint8x4 : color_full_uint8x4, hover_data_in_layer[off[2]], false, false);
                }else {
                    layers_color_0.blend_first_with_tails(alpha_addition);
                }
            }

            resolve(Array.of(indexes_data_for_layers.subarray(0, used_colors_length)));
        }else {

            for (off[3]  = 0; uint_less(off[3] , all_layers_length+1); off[3]  = plus_int(off[3] , 1)) {
                layers_colors[off[3]].set_tail(layers_colors[off[3]+1|0], layers_opacity_255[off[3]]);
            }

            for (; uint_less(off[2], off[4]); off[2] = plus_uint(off[2], 1)) {
                base_rgba_colors_for_blending_SIMDope.get_use_element(off[2], layers_color_0);
                if(layers_color_0.is_not_fully_transparent()){
                    layers_color_0.set_from_simdope(transparent)
                }
                off[0] = multiply_int(off[2], all_layers_length);


                // Sum up all colors above
                for (off[3]  = 0; uint_less(off[3] , off[5]); off[3]  = plus_int(off[3] , 1)) {
                    dasd[off[3] ].get_use_element(indexes_data_for_layers[off[2]], layers_colors[off[3] +1|0]);

                }
                for (off[3]  = off[5]; uint_less(off[3] , all_layers_length); off[3]  = plus_int(off[3] , 1)) {

                    off[1] = plus_int(off[0], off[3] );
                    colors_data_in_layers_uint32_SIMDope.get_use_element(off[1], layers_colors[off[3] +1|0]);
                }

                if((hover_data_in_layer[off[2]]|0) > 0) {
                    layers_color_0.blend_first_with_tails(alpha_addition)
                    layers_color_0.blend_first_with(layers_color_0.is_dark() ? color_less_uint8x4 : color_full_uint8x4, hover_data_in_layer[off[2]], false, false);
                }else {
                    layers_color_0.blend_first_with_tails(alpha_addition);
                }
            }
            resolve(Array.of(indexes_data_for_layers.subarray(0, off[4]), base_rgba_colors_for_blending.subarray(0, off[4])));
        }
    });
};

SuperBlend.prototype.build = function(layer_number, max_length, layers_opacity_255, layers, uint32Destination) {
    "use strict";
    layer_number = (layer_number | 0) >>> 0;
    max_length = (max_length | 0) >>> 0;
    layers = layers || [];

    this.set_bytes_index(0);
    this.set_state(_build_state(layer_number, max_length, layers_opacity_255));
    this.set_data_array(layers, uint32Destination);
}
SuperBlend.prototype.update = function(layer_number, max_length, layers_opacity_255, layers, uint32Destination) {
    "use strict";

    layer_number = (layer_number | 0) >>> 0;
    max_length = (max_length | 0) >>> 0;
    layers = layers || [];

    this.set_bytes_index(0);
    this.set_state(_update_state(this.state, layer_number, max_length, layers_opacity_255));
    this.set_data_array(layers, uint32Destination);
}
SuperBlend.prototype.clear = function() {
    "use strict";
    this.set_bytes_index(0);
    this.set_state(_update_state(this.state, 1, 1));
    this.set_data_array([], new Uint32Array(0));
}

module.exports = SuperBlend;