import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            external: [
                "./node_modules/three",
                './node_modules/three/examples/jsm/postprocessing/EffectComposer',
                './node_modules/three/examples/jsm/postprocessing/RenderPass',
                './node_modules/three/examples/jsm/postprocessing/GlitchPass',
                './node_modules/three/examples/jsm/postprocessing/RenderPixelatedPass',
                './node_modules/three/examples/jsm/postprocessing/AfterImagePass',
                './node_modules/three/examples/jsm/postprocessing/UnrealBloomPass',
                './node_modules/three/examples/jsm/postprocessing/OutputPass',
                './node_modules/three/examples/jsm/postprocessing/OutlinePass.js',
                './node_modules/three/examples/jsm/postprocessing/FilmPass.js'
                
            ]
        },
      },
})


