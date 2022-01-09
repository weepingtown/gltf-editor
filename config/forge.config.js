module.exports = {
    packagerConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {
                name: "gltf_editor"
            }
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: [
                "darwin"
            ]
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}
        }
    ],
    plugins: [
        [
            "@electron-forge/plugin-webpack",
            {
                mainConfig: "./config/webpack.main.config.js",
                renderer: {
                    config: "./config/webpack.renderer.config.js",
                    entryPoints: [
                        {
                            html: "./src/editor/index.html",
                            js: "./src/editor/renderer.js",
                            name: "main_window",
                            devContentSecurityPolicy: "default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline' data:"
                        }
                    ]
                }
            }
        ]
    ]
}