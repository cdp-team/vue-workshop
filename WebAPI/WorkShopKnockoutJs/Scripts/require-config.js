//require.config({
//    baseUrl: "/Scripts"
//});
require.config({
    baseUrl: "/Scripts",
    paths: {
        "knockout": "knockout-3.4.2",
        "knockout.validation": "knockout.validation"
    },
    shim: {
        "knockout.validation": ["knockout"]
    }
});
//# sourceMappingURL=require-config.js.map