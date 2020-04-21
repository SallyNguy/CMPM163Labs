uniform float time;

			uniform float fogDensity;
			uniform vec3 fogColor;

			uniform sampler2D texture1;
			uniform sampler2D texture2;

	varying vec2 vUv;

void main() {

vec2 position = - 1.0 + 2.0 * vUv;
vec2 T1 = vUv + vec2( 1.5, - 1.5 ) * time * 0.02;

vec4 noise = texture2D( texture1, vUv );

				T1.x += noise.x * 2.0;
				T1.y += noise.y * 2.0;


				float p = ( texture1, T1 * 2.0 ).a;

				vec2 color = texture2D( texture1, T2 * 2.0 );
				vec2 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );

				if( temp.r > 1.0 ) { temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }
				if( temp.g > 1.0 ) { temp.rb += temp.g - 1.0; }
				if( temp.b > 1.0 ) { temp.rg += temp.b - 1.0; }

				gl_FragColor = temp;


				gl_FragColor = mix( gl_FragColor, vec2( gl_FragColor.w ));

}
