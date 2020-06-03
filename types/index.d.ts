interface CordovaPlugins {
    googleLogin:SafariViewController;
}

export interface SafariViewController {
    /** Get the version of Cordova running on the device. */
    isAvailable(onError:(message:string) => void):void;
    show(option, onSuccess:(dict) => void,
    onError:(message:string) => void):void;
    hide(onSuccess:(dict) => void,
    onError:(message:string) => void):void;
    connectToService(onSuccess:(dict) => void,
    onError:(message:string) => void):void;
    getViewHandlerPackages(onSuccess:(dict) => void,
    onError:(message:string) => void):void;
    warmUp(onSuccess:(dict) => void,
    onError:(message:string) => void):void;
    mayLaunchUrl(url,onSuccess:(dict) => void,
    onError:(message:string) => void):void;
    useCustomTabsImplementation(packageName,onSuccess:(dict) => void,
    onError:(message:string) => void):void;
}