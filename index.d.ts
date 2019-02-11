declare module 'react-native-flurry-sdk' {
    interface FlurryStatic {

        /**
         * There are two overloads,
         * e.g. Flurry.init('FLURRY_API_KEY'); Flurry.init('FLURRY_ANDROID_API_KEY', 'FLURRY_IOS_API_KEY');
         * - init(apikey)
         * - init(apikeyAndroid, apikeyIos)
         * @deprecated Please use Flurry.Builder instead.
         */
        init(apiKey1: string, apiKey2?: string): void;

        /**
         * Method must be called prior to invoking init, e.g. Flurry.withCrashReporting(true);
         * @deprecated Please use Flurry.Builder instead.
         */
        withCrashReporting(crashReporting?: boolean): void;

        /**
         * Method must be called prior to invoking init, e.g. Flurry.withContinueSessionMillis(6000);
         * @deprecated Please use Flurry.Builder instead.
         */
        withContinueSessionMillis(sessionMillis?: number): void;

        /**
         * Method must be called prior to invoking init, e.g. Flurry.withIncludeBackgroundSessionsInMetrics(true);
         * @deprecated Please use Flurry.Builder instead.
         */
        withIncludeBackgroundSessionsInMetrics(includeBackgroundSessionsInMetrics?: boolean): void;

        /**
         * Method must be called prior to invoking init, e.g. Flurry.withLogEnabled(true);
         * @deprecated Please use Flurry.Builder instead.
         */
        withLogEnabled(enableLog?: boolean): void;

        /**
         * Method must be called prior to invoking init, e.g. Flurry.withLogLevel(5);
         * @deprecated Please use Flurry.Builder instead.
         */
        withLogLevel(logLevel?: number): void;

        /**
         * e.g. Flurry.setAge(36);
         */
        setAge(age: number): void;

        /**
         * e.g. Flurry.setGender('f');
         */
        setGender(gender: string): void;

        /**
         * e.g. Flurry.setReportLocation('reportLocation');
         */
        setReportLocation(reportLocation: string): void;

        /**
         * e.g. Flurry.setSessionOrigin('originName', 'deepLink');
         */
        setSessionOrigin(originName: string, deepLink: string): void;

        /**
         * e.g. Flurry.setUserId(userId);
         */
        setUserId(userId: string): void;

        /**
         * e.g. Flurry.setVersionName('versionName');
         */
        setVersionName(versionName?: string): void;

        /**
         * e.g. Flurry.setIAPReportingEnabled(true);
         */
        setIAPReportingEnabled(enableIAP?: boolean): void;

        /**
         * There are two overloads,
         * e.g. Flurry.addOrigin('name', 'version'); Flurry.addOrigin('name', 'version'), {param: 'true'});
         * - addOrigin(originName, originVersion)
         * - addOrigin(originName, originVersion, originParameters)
         */
        addOrigin(originName: string, originVersion: string, originParameters?: any): void;

        /**
         * e.g. Flurry.addSessionProperty('name', 'value');
         */
        addSessionProperty(name: string, value: string): void;

        /**
         * e.g.
         * Flurry.getVersions(
         *     (msg) => {
         *         console.error(msg);
         *     },
         *     (agentVersion, releaseVersion, sessionId) => {
         *         console.log("Versions: " + agentVersion + " : " + releaseVersion + " : " + sessionId);
         *     }
         * );
         */
        getVersions(errorCallback: any, successCallback: any): void;

        /**
         * e.g. Flurry.logBreadcrumb('crashBreadcrumb');
         */
        logBreadcrumb(crashBreadcrumb: string): void;

        /**
         * There are four overloads,
         * e.g. Flurry.logEvent('eventId'); Flurry.logEvent('eventId', {param: 'true'}, true);
         * - logEvent(eventId)
         * - logEvent(eventId, timed)
         * - logEvent(eventId, parameters)
         * - logEvent(eventId, parameters, timed)
         */
        logEvent(eventName: string, params?: any, timed?: boolean): void;

        /**
         * e.g. Flurry.logPayment('productName', 'productId', 6, 36, 'currency', 'transactionId', {param: 'true'});
         */
        logPayment(productName: string, productId: string, quantity: number, price: number,
                   currency: string, transactionId: string, parameters: any): void;

        /**
         * There are two overloads,
         * e.g. Flurry.endTimedEvent('eventId'); Flurry.endTimedEvent('eventId', {param: 'true'});
         * - endTimedEvent(eventId)
         * - endTimedEvent(eventId, parameters)
         */
        endTimedEvent(eventId: string, parameters?: any): void;

        /**
         * There are two overloads,
         * e.g. Flurry.onError('errorId', 'message', 'errorClass', {param: 'true'});
         * - onError(errorId, message, errorClass)
         * - onError(errorId, message, errorClass, errorParams)
         */
        onError(errorId: string, message: string, errorClass: string, errorParams?: any): void;

        /**
         * e.g. Flurry.onPageView();
         */
        onPageView(): void;
    }

    const Flurry: FlurryStatic;
    export default Flurry;
}
