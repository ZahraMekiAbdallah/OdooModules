odoo.define('pos_password_protected.pos_custom',function(require){
    "use strict";
    var core = require('web.core');
    var models = require('point_of_sale.models');
    var screens = require('point_of_sale.screens');
    var gui = require('point_of_sale.gui');
    var popups = require('point_of_sale.popups');
    var _t  = require('web.core')._t;


    var _super_NumpadWidget = screens.NumpadWidget.prototype;

    screens.NumpadWidget.include({
        init: function(parent) {
            this._super(parent);
            this.numpadparent=parent;
        },
        clickChangeMode: function(event) {
            var config = this.pos.config;
            var price_pwd = (config.is_password_price) ? config.password_price : config.is_password_price;
            var discount_pwd = (config.is_password_discount) ? config.password_discount : config.is_password_discount;
            console.log(discount_pwd)

            console.log("current Target ===> " + event.currentTarget.attributes['data-mode'].value)
            var newMode = event.currentTarget.attributes['data-mode'].value;
            console.log("New Mode ===> " + newMode)

            //=========== Calling Super ((Parent)) ================
            var tmp = this._super.apply(this, arguments);
            //=====================================================

            if (newMode == "discount" && discount_pwd) {
                this.gui.ask_password(discount_pwd).then(function() {
                    console.log("Finally")
                    console.log("current Target ===> " + event.currentTarget.attributes['data-mode'].value)
                    return tmp;
                })
            }

            else if (newMode == "price" && price_pwd) {
                this.gui.ask_password(price_pwd).then(function() {
                    console.log("Finally PRICE")
                });
            }
            else
                _super_NumpadWidget
                console.log("Falseeeeeeee")
        }

        });
    });
