/**
 * Abstract class used has base for observable version of business objects
 */
var ObservableObject = /** @class */ (function () {
    /**
     * Constructor of class
     * @param {void} [dataObject=null] datas to used for preset class
     */
    function ObservableObject() {
        /**
         * defaultConfig for js validation
         */
        this.defaultConfig = {
            required: {},
        };
    }
    /**
     * Check la validité de tout les champs du formulaires
     */
    ObservableObject.prototype.isFormValid = function (notify, enableRecursivity) {
        if (notify === void 0) { notify = false; }
        if (enableRecursivity === void 0) { enableRecursivity = false; }
        var isValid = true;
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                var property = this[key];
                if (property &&
                    ko.isObservable(property) &&
                    property.isValid &&
                    !property.isValid()) {
                    if (notify)
                        property.notifySubscribers();
                    isValid = false;
                }
                var currentProp = ko.isObservable(property) ? property() : property;
                if (enableRecursivity && currentProp instanceof ObservableObject && currentProp.isFormValid) {
                    var subElementValidity = currentProp.isFormValid(notify, enableRecursivity);
                    isValid = isValid && subElementValidity;
                }
                else if (enableRecursivity && currentProp instanceof Array && currentProp.length > 0) {
                    var firstElem = ko.isObservable(currentProp[0]) ? currentProp[0]() : currentProp[0];
                    if (firstElem instanceof ObservableObject && firstElem.isFormValid) {
                        currentProp.forEach(function (p) {
                            var subElementValidity = p.isFormValid(notify, enableRecursivity);
                            isValid = isValid && subElementValidity;
                        });
                    }
                }
            }
        }
        return isValid;
    };
    return ObservableObject;
}());
//# sourceMappingURL=ObservableObject.js.map