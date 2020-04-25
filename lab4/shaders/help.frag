uniform sampler2D texture2;
varying vec2 vUv;

void main() {
gl_FragColor = texture2D(texture2, vUv);
}
