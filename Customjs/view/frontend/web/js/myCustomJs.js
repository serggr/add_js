define([
    "jquery"
], function($){
        "use strict";
        return function(config, element) {
            alert(config.message);
            console.log(config.message);
        };
    }
);