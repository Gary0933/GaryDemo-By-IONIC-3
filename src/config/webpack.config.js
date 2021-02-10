var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
 
var env = process.env.IONIC_ENV;

var MODE_CORDOVA="cordova";
var MODE_BROWSER="browser";

/**
 * browser mode will only be supported when your ionic upgraded to latest.
 */
var cordovachecck=process.argv.slice(2,3);
if(cordovachecck=='serve'){
    useDefaultConfig.prod.resolve.alias = {
        "@env/environment": path.resolve(environmentPath('prod',MODE_BROWSER))
    };
    useDefaultConfig.dev.resolve.alias = {
        "@env/environment": path.resolve(environmentPath('dev',MODE_BROWSER))
    };
}else{
    useDefaultConfig.prod.resolve.alias = {
        "@env/environment": path.resolve(environmentPath('prod',MODE_CORDOVA))
    };
    useDefaultConfig.dev.resolve.alias = {
        "@env/environment": path.resolve(environmentPath('dev',MODE_CORDOVA))
    };
}
console.log('Current build environment:'+ env);
if(env!=='prod' && env!=='dev'){
    useDefaultConfig[env]=useDefaultConfig.dev;
    useDefaultConfig[env].resolve.alias={
        "@env/environment": path.resolve(environmentPath('dev'))
    }
}
console.log('######## If you are building cordova pacakges, make sure the "cordova_dependence" in environemt file is true. ##########');
function environmentPath(env,mode){
    var filePath='';
    if(mode==MODE_BROWSER){
        filePath='src/environments/environment.'+mode+'.ts';
    }else{
        filePath='src/environments/environment.'+env+'.ts';
    }
    console.log("Running in "+mode+" mode. Apply config file:"+filePath+" to "+env+" Environment");
    if(!fs.existsSync(filePath)){
        console.log(chalk.red('\n'+filePath+'does not exist!'));
    }else{
        return filePath;
    }
}
module.exports=function(){
    return useDefaultConfig;
}