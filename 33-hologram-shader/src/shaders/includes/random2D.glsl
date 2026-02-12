float random2D(vec2 value) {
    return fract(sin(dot(value.xy, vec2(12.0909, 78.233))) * 43758.5453123);
}
