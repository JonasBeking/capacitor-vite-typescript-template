import {CapacitorConfig} from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.capacitorvitetypescript.template",
    appName: "capacitor-vite-typescript-template",
    bundledWebRuntime: false,
    webDir: "dist",
    plugins: {
        SplashScreen: {
            launchShowDuration: 0
        }
    },
}
if(process.argv.includes("--live")) {
    console.log("Utitlizing Live Reload")
    config.server = {
        url : `http://${process.env.npm_package_config_capacitor_live_server_address}:${process.env.npm_package_config_capacitor_live_server_port}`,
        cleartext : true
    }
}

export default config;
import "./trapeze.config"


