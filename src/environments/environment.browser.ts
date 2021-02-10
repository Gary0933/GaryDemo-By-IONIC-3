/**
 *Browser Environemnt files is not supported for all node veersions. If not work, please use dev/prod config files. 
 */
//Please do not commit this files unless add new values. Only modify on your local computer.
export class ENV {
  /*this config files will be read when you do normal development: E.g ionic cordova build android/ios --prod, npm run ionic:build --prod
    1, if you want to run in browser, you can make cordova_dependence false to load mock plugin.
    2, if you want to package a debug native package, please make it true to load native plugin.
    3, the browser cofig will be applied when you run ionic serve
  */
  public static cordova_dependence = false;
  public static vconsole = false;
  public static console_overwrite = false;
  
}