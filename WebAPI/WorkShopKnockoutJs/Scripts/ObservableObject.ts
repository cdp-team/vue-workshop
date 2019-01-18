/**
 * Abstract class used has base for observable version of business objects
 */
abstract class ObservableObject<T>{
    /**
     * defaultConfig for js validation
     */
    protected defaultConfig = {
        required: {
        },
    };

    /**
     * Constructor of class
     * @param {void} [dataObject=null] datas to used for preset class 
     */
    constructor() {
    }

    abstract DataObjectToObservable:
        /** 
         * Set class with a data object.
         * @param {T} datas Datas to used for set class
         * @return {void}
         */
        (datas: T) => void;

    abstract ObservableToDataObject:
        /** 
         * Get data object from class.
         * @return {T}
         */
        () => T;


    /**
     * Check la validité de tout les champs du formulaires
     */
    public isFormValid(notify: boolean = false, enableRecursivity: boolean = false): boolean {
        let isValid: boolean = true;
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                const property = this[key];
                if (
                    property &&
                    ko.isObservable(property) &&
                    property.isValid &&
                    !property.isValid()
                ) {
                    if (notify)
                        property.notifySubscribers();
                    isValid = false;
                }
                let currentProp: any = ko.isObservable(property) ? property() : property;
                if (enableRecursivity && currentProp instanceof ObservableObject && currentProp.isFormValid) {
                    let subElementValidity = currentProp.isFormValid(notify, enableRecursivity);
                    isValid = isValid && subElementValidity;
                }
                else if (enableRecursivity && currentProp instanceof Array && currentProp.length > 0) {
                    let firstElem: any = ko.isObservable(currentProp[0]) ? currentProp[0]() : currentProp[0];
                    if (firstElem instanceof ObservableObject && firstElem.isFormValid) {
                        currentProp.forEach(p => {
                            let subElementValidity = p.isFormValid(notify, enableRecursivity);
                            isValid = isValid && subElementValidity;
                        });
                    }
                }

            }
        }
        return isValid;
    }
}
