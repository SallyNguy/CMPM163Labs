varying vec2 vUv;

uniform sampler2D texture2;

void main() {
   
    gl_FragColor = texture2D(texture2, vUv* 2.0);
}