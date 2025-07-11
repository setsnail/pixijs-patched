/** @internal */
export const colorBit = {
    name: 'color-bit',
    vertex: {
        header: /* wgsl */ `
            @in aColor: vec4<f32>;
            @in aHardTintColor: vec4<f32>;
        `,
        main: /* wgsl */ `
            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
			vColor = vec4<f32>(mix(vColor.rgb, aHardTintColor.rgb * vColor.a, 0.0), vColor.a);
        `,
    },
    fragment: {
        header: /* wgsl */ `
            @in aHardTintColor: vec4<f32>;
        `,
        end: /* wgsl */ `
			finalColor = vec4<f32>(mix(finalColor.rgb, aHardTintColor.rgb * finalColor.a, aHardTintColor.a), finalColor.a);
        `,
    }
};

/** @internal */
export const colorBitGl = {
    name: 'color-bit',
    vertex: {
        header: /* glsl */ `
            in vec4 aColor;
            in vec4 aHardTintColor;

			out vec4 uHardTintColor;
        `,
        main: /* glsl */ `
            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
			uHardTintColor = aHardTintColor;
        `,
    },
    fragment: {
        header: /* glsl */ `
            in vec4 uHardTintColor;
        `,
        end: /* glsl */ `
			finalColor = vec4(mix(finalColor.rgb, uHardTintColor.rgb * finalColor.a, uHardTintColor.a), finalColor.a);
        `,
    },
};
