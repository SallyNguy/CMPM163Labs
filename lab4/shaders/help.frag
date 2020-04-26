varying vec2 vUv;

uniform sampler2D texture2;

void main() {
   if(vUv.x <= 0.5 && vUv.y <= 0.5){
   	gl_FragColor = texture2D(texture2, vUv/0.5);
   }

   else if (vUv.x > 0.5 && vUv.y <= 0.5){
   	gl_FragColor = texture2D(texture2, vec2(vUv.x - 0.5, vUv.y)/0.5);
   }

   else if (vUv.x > 0.5 && vUv.y > 0.5){
   	gl_FragColor = texture2D(texture2, vec2(vUv.x - 0.5, vUv.y - 0.5)/0.5);
   }

   else {
   	gl_FragColor = texture2D(texture2, vec2(vUv.x, vUv.y - 0.5)/0.5);
   }
    
}