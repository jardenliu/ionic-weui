(function (doc, cssText) {
    var styleEl = doc.createElement("style");
    doc.getElementsByTagName("head")[0].appendChild(styleEl);
    if (styleEl.styleSheet) {
        if (!styleEl.styleSheet.disabled) {
            styleEl.styleSheet.cssText = cssText;
        }
    } else {
        try {
            styleEl.innerHTML = cssText;
        } catch (ignore) {
            styleEl.innerText = cssText;
        }
    }
}(document, "/*!\n" +
" * WeUI v1.1.0 (https://github.com/weui/weui)\n" +
" * Copyright 2016 Tencent, Inc.\n" +
" * Licensed under the MIT license\n" +
" */\n" +
"/*针对Ionic做了部分修正*/\n" +
"@font-face {\n" +
"  font-weight: normal;\n" +
"  font-style: normal;\n" +
"  font-family: \"weui\";\n" +
"  src: url('data:application/octet-stream;base64,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') format('truetype');\n" +
"}\n" +
"[class^=\"weui-icon-\"],\n" +
"[class*=\" weui-icon-\"] {\n" +
"  display: inline-block;\n" +
"  vertical-align: middle;\n" +
"  font: normal normal normal 14px/1 \"weui\";\n" +
"  font-size: inherit;\n" +
"  text-rendering: auto;\n" +
"  -webkit-font-smoothing: antialiased;\n" +
"}\n" +
"[class^=\"weui-icon-\"]:before,\n" +
"[class*=\" weui-icon-\"]:before {\n" +
"  display: inline-block;\n" +
"  margin-left: .2em;\n" +
"  margin-right: .2em;\n" +
"}\n" +
".weui-icon-circle:before {\n" +
"  content: \"\\EA01\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-download:before {\n" +
"  content: \"\\EA02\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-info:before {\n" +
"  content: \"\\EA03\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-safe_success:before {\n" +
"  content: \"\\EA04\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-safe_warn:before {\n" +
"  content: \"\\EA05\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-success:before {\n" +
"  content: \"\\EA06\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-success-circle:before {\n" +
"  content: \"\\EA07\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-success-no-circle:before {\n" +
"  content: \"\\EA08\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-waiting:before {\n" +
"  content: \"\\EA09\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-waiting-circle:before {\n" +
"  content: \"\\EA0A\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-warn:before {\n" +
"  content: \"\\EA0B\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-info-circle:before {\n" +
"  content: \"\\EA0C\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-cancel:before {\n" +
"  content: \"\\EA0D\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-search:before {\n" +
"  content: \"\\EA0E\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-clear:before {\n" +
"  content: \"\\EA0F\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-back:before {\n" +
"  content: \"\\EA10\";\n" +
"}\n" +
"/* '' */\n" +
".weui-icon-delete:before {\n" +
"  content: \"\\EA11\";\n" +
"}\n" +
"/* '' */\n" +
"[class^=\"weui-icon_\"]:before,\n" +
"[class*=\" weui-icon_\"]:before {\n" +
"  margin: 0;\n" +
"}\n" +
".weui-icon-success {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-icon-waiting {\n" +
"  font-size: 23px;\n" +
"  color: #10AEFF;\n" +
"}\n" +
".weui-icon-warn {\n" +
"  font-size: 23px;\n" +
"  color: #F43530;\n" +
"}\n" +
".weui-icon-info {\n" +
"  font-size: 23px;\n" +
"  color: #10AEFF;\n" +
"}\n" +
".weui-icon-success-circle {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-icon-success-no-circle {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-icon-waiting-circle {\n" +
"  font-size: 23px;\n" +
"  color: #10AEFF;\n" +
"}\n" +
".weui-icon-circle {\n" +
"  font-size: 23px;\n" +
"  color: #C9C9C9;\n" +
"}\n" +
".weui-icon-download {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-icon-info-circle {\n" +
"  font-size: 23px;\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-icon-safe-success {\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-icon-safe-warn {\n" +
"  color: #FFBE00;\n" +
"}\n" +
".weui-icon-cancel {\n" +
"  color: #F43530;\n" +
"  font-size: 22px;\n" +
"}\n" +
".weui-icon-search {\n" +
"  color: #B2B2B2;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui-icon-clear {\n" +
"  color: #B2B2B2;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui-icon-delete.weui-icon_gallery-delete {\n" +
"  color: #FFFFFF;\n" +
"  font-size: 22px;\n" +
"}\n" +
".weui-icon_msg {\n" +
"  font-size: 93px;\n" +
"}\n" +
".weui-icon_msg.weui-icon-warn {\n" +
"  color: #F76260;\n" +
"}\n" +
".weui-icon_msg-primary {\n" +
"  font-size: 93px;\n" +
"}\n" +
".weui-icon_msg-primary.weui-icon-warn {\n" +
"  color: #C9C9C9;\n" +
"}\n" +
".weui-btn {\n" +
"  position: relative;\n" +
"  display: block;\n" +
"  margin-left: auto;\n" +
"  margin-right: auto;\n" +
"  padding-left: 14px;\n" +
"  padding-right: 14px;\n" +
"  box-sizing: border-box;\n" +
"  font-size: 18px;\n" +
"  text-align: center;\n" +
"  text-decoration: none;\n" +
"  color: #FFFFFF;\n" +
"  line-height: 2.55555556;\n" +
"  border-radius: 5px;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-btn:after {\n" +
"  content: \" \";\n" +
"  width: 200%;\n" +
"  height: 200%;\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  border: 1px solid rgba(0, 0, 0, 0.2);\n" +
"  -webkit-transform: scale(0.5);\n" +
"          transform: scale(0.5);\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  box-sizing: border-box;\n" +
"  border-radius: 10px;\n" +
"}\n" +
".weui-btn_inline {\n" +
"  display: inline-block;\n" +
"}\n" +
".weui-btn_default {\n" +
"  color: #000000;\n" +
"  background-color: #F8F8F8;\n" +
"}\n" +
".weui-btn_default:not(.weui-btn_disabled):visited {\n" +
"  color: #000000;\n" +
"}\n" +
".weui-btn_default:not(.weui-btn_disabled):active {\n" +
"  color: rgba(0, 0, 0, 0.6);\n" +
"  background-color: #DEDEDE;\n" +
"}\n" +
".weui-btn_primary {\n" +
"  background-color: #1AAD19;\n" +
"}\n" +
".weui-btn_primary:not(.weui-btn_disabled):visited {\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui-btn_primary:not(.weui-btn_disabled):active {\n" +
"  color: rgba(255, 255, 255, 0.6);\n" +
"  background-color: #179B16;\n" +
"}\n" +
".weui-btn_warn {\n" +
"  background-color: #E64340;\n" +
"}\n" +
".weui-btn_warn:not(.weui-btn_disabled):visited {\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui-btn_warn:not(.weui-btn_disabled):active {\n" +
"  color: rgba(255, 255, 255, 0.6);\n" +
"  background-color: #CE3C39;\n" +
"}\n" +
".weui-btn_disabled {\n" +
"  color: rgba(255, 255, 255, 0.6);\n" +
"}\n" +
".weui-btn_disabled.weui-btn_default {\n" +
"  color: rgba(0, 0, 0, 0.3);\n" +
"  background-color: #F7F7F7;\n" +
"}\n" +
".weui-btn_disabled.weui-btn_primary {\n" +
"  background-color: #9ED99D;\n" +
"}\n" +
".weui-btn_disabled.weui-btn_warn {\n" +
"  background-color: #EC8B89;\n" +
"}\n" +
".weui-btn_plain-primary {\n" +
"  color: #1aad19;\n" +
"  border: 1px solid #1aad19;\n" +
"}\n" +
".weui-btn_plain-primary:not(.weui-btn_plain-disabled):active {\n" +
"  color: rgba(26, 173, 25, 0.6);\n" +
"  border-color: rgba(26, 173, 25, 0.6);\n" +
"}\n" +
".weui-btn_plain-primary:after {\n" +
"  border-width: 0;\n" +
"}\n" +
".weui-btn_plain-default {\n" +
"  color: #353535;\n" +
"  border: 1px solid #353535;\n" +
"}\n" +
".weui-btn_plain-default:not(.weui-btn_plain-disabled):active {\n" +
"  color: rgba(53, 53, 53, 0.6);\n" +
"  border-color: rgba(53, 53, 53, 0.6);\n" +
"}\n" +
".weui-btn_plain-default:after {\n" +
"  border-width: 0;\n" +
"}\n" +
".weui-btn_plain-disabled {\n" +
"  color: rgba(0, 0, 0, 0.2);\n" +
"  border-color: rgba(0, 0, 0, 0.2);\n" +
"}\n" +
"button.weui-btn,\n" +
"input.weui-btn {\n" +
"  width: 100%;\n" +
"  border-width: 0;\n" +
"  outline: 0;\n" +
"  -webkit-appearance: none;\n" +
"}\n" +
"button.weui-btn:focus,\n" +
"input.weui-btn:focus {\n" +
"  outline: 0;\n" +
"}\n" +
"button.weui-btn_inline,\n" +
"input.weui-btn_inline,\n" +
"button.weui-btn_mini,\n" +
"input.weui-btn_mini {\n" +
"  width: auto;\n" +
"}\n" +
"button.weui-btn_plain-primary,\n" +
"input.weui-btn_plain-primary,\n" +
"button.weui-btn_plain-default,\n" +
"input.weui-btn_plain-default {\n" +
"  border-width: 1px;\n" +
"  background-color: transparent;\n" +
"}\n" +
".weui-btn_mini {\n" +
"  display: inline-block;\n" +
"  padding: 0 1.32em;\n" +
"  line-height: 2.3;\n" +
"  font-size: 13px;\n" +
"}\n" +
"/*gap between btn*/\n" +
".weui-btn + .weui-btn {\n" +
"  margin-top: 15px;\n" +
"}\n" +
".weui-btn.weui-btn_inline + .weui-btn.weui-btn_inline {\n" +
"  margin-top: auto;\n" +
"  margin-left: 15px;\n" +
"}\n" +
".weui-btn-area {\n" +
"  margin: 1.17647059em 15px 0.3em;\n" +
"}\n" +
".weui-btn-area_inline {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"}\n" +
".weui-btn-area_inline .weui-btn {\n" +
"  margin-top: auto;\n" +
"  margin-right: 15px;\n" +
"  width: 100%;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui-btn-area_inline .weui-btn:last-child {\n" +
"  margin-right: 0;\n" +
"}\n" +
".weui-cells {\n" +
"  margin-top: 1.17647059em;\n" +
"  background-color: #FFFFFF;\n" +
"  line-height: 1.41176471;\n" +
"  font-size: 17px;\n" +
"  overflow: hidden;\n" +
"  position: relative;\n" +
"}\n" +
".weui-cells:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-cells:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-cells__title {\n" +
"  margin-top: .77em;\n" +
"  margin-bottom: .3em;\n" +
"  padding-left: 15px;\n" +
"  padding-right: 15px;\n" +
"  color: #999999;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui-cells__title + .weui-cells {\n" +
"  margin-top: 0;\n" +
"}\n" +
".weui-cells__tips {\n" +
"  margin-top: .3em;\n" +
"  color: #999999;\n" +
"  padding-left: 15px;\n" +
"  padding-right: 15px;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui-cell {\n" +
"  padding: 10px 15px;\n" +
"  position: relative;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui-cell:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui-cell:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
".weui-cell_primary {\n" +
"  -webkit-box-align: start;\n" +
"  -webkit-align-items: flex-start;\n" +
"          align-items: flex-start;\n" +
"}\n" +
".weui-cell__bd {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui-cell__ft {\n" +
"  text-align: right;\n" +
"  color: #999999;\n" +
"}\n" +
".weui-cell_access {\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"  color: inherit;\n" +
"}\n" +
".weui-cell_access:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui-cell_access .weui-cell__ft {\n" +
"  padding-right: 13px;\n" +
"  position: relative;\n" +
"}\n" +
".weui-cell_access .weui-cell__ft:after {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C8C8CD;\n" +
"  border-style: solid;\n" +
"  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  margin-top: -4px;\n" +
"  right: 2px;\n" +
"}\n" +
".weui-cell_link {\n" +
"  color: #586C94;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui-cell_link:first-child:before {\n" +
"  display: block;\n" +
"}\n" +
".weui-check__label {\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-check__label:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui-check {\n" +
"  position: absolute;\n" +
"  left: -9999em;\n" +
"}\n" +
".weui-cells_radio .weui-cell__ft {\n" +
"  padding-left: 0.35em;\n" +
"}\n" +
".weui-cells_radio .weui-check:checked + .weui-icon-checked:before {\n" +
"  display: block;\n" +
"  content: '\\EA08';\n" +
"  color: #09BB07;\n" +
"  font-size: 16px;\n" +
"}\n" +
".weui-cells_checkbox .weui-cell__hd {\n" +
"  padding-right: 0.35em;\n" +
"}\n" +
".weui-cells_checkbox .weui-icon-checked:before {\n" +
"  content: '\\EA01';\n" +
"  color: #C9C9C9;\n" +
"  font-size: 23px;\n" +
"  display: block;\n" +
"}\n" +
".weui-cells_checkbox .weui-check:checked + .weui-icon-checked:before {\n" +
"  content: '\\EA06';\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-label {\n" +
"  display: block;\n" +
"  width: 105px;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"}\n" +
".weui-input {\n" +
"  width: 100%;\n" +
"  border: 0;\n" +
"  outline: 0;\n" +
"  -webkit-appearance: none;\n" +
"  background-color: transparent;\n" +
"  font-size: inherit;\n" +
"  color: inherit;\n" +
"  height: 1.41176471em;\n" +
"  line-height: 1.41176471;\n" +
"}\n" +
".weui-input::-webkit-outer-spin-button,\n" +
".weui-input::-webkit-inner-spin-button {\n" +
"  -webkit-appearance: none;\n" +
"  margin: 0;\n" +
"}\n" +
".weui-textarea {\n" +
"  display: block;\n" +
"  border: 0;\n" +
"  resize: none;\n" +
"  width: 100%;\n" +
"  color: inherit;\n" +
"  font-size: 1em;\n" +
"  line-height: inherit;\n" +
"  outline: 0;\n" +
"}\n" +
".weui-textarea-counter {\n" +
"  color: #B2B2B2;\n" +
"  text-align: right;\n" +
"}\n" +
".weui-cell_warn .weui-textarea-counter {\n" +
"  color: #E64340;\n" +
"}\n" +
".weui-toptips {\n" +
"  display: none;\n" +
"  position: fixed;\n" +
"  -webkit-transform: translateZ(0);\n" +
"          transform: translateZ(0);\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"  padding: 5px;\n" +
"  font-size: 14px;\n" +
"  text-align: center;\n" +
"  color: #FFF;\n" +
"  z-index: 5000;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"}\n" +
".weui-toptips_warn {\n" +
"  background-color: #E64340;\n" +
"}\n" +
".weui-cells_form .weui-cell__ft {\n" +
"  font-size: 0;\n" +
"}\n" +
".weui-cells_form .weui-icon-warn {\n" +
"  display: none;\n" +
"}\n" +
".weui-cells_form input,\n" +
".weui-cells_form textarea,\n" +
".weui-cells_form label[for] {\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-cell_warn {\n" +
"  color: #E64340;\n" +
"}\n" +
".weui-cell_warn .weui-icon-warn {\n" +
"  display: inline-block;\n" +
"}\n" +
".weui-form-preview {\n" +
"  position: relative;\n" +
"  background-color: #FFFFFF;\n" +
"}\n" +
".weui-form-preview:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-form-preview:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-form-preview__hd {\n" +
"  position: relative;\n" +
"  padding: 10px 15px;\n" +
"  text-align: right;\n" +
"  line-height: 2.5em;\n" +
"}\n" +
".weui-form-preview__hd:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui-form-preview__hd .weui-form-preview__value {\n" +
"  font-style: normal;\n" +
"  font-size: 1.6em;\n" +
"}\n" +
".weui-form-preview__bd {\n" +
"  padding: 10px 15px;\n" +
"  font-size: .9em;\n" +
"  text-align: right;\n" +
"  color: #999999;\n" +
"  line-height: 2;\n" +
"}\n" +
".weui-form-preview__ft {\n" +
"  position: relative;\n" +
"  line-height: 50px;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"}\n" +
".weui-form-preview__ft:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D5D5D6;\n" +
"  color: #D5D5D6;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-form-preview__item {\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-form-preview__label {\n" +
"  float: left;\n" +
"  margin-right: 1em;\n" +
"  min-width: 4em;\n" +
"  color: #999999;\n" +
"  text-align: justify;\n" +
"  text-align-last: justify;\n" +
"}\n" +
".weui-form-preview__value {\n" +
"  display: block;\n" +
"  overflow: hidden;\n" +
"  word-break: normal;\n" +
"  word-wrap: break-word;\n" +
"}\n" +
".weui-form-preview__btn {\n" +
"  position: relative;\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  color: #3CC51F;\n" +
"  text-align: center;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
"button.weui-form-preview__btn {\n" +
"  background-color: transparent;\n" +
"  border: 0;\n" +
"  outline: 0;\n" +
"  line-height: inherit;\n" +
"  font-size: inherit;\n" +
"}\n" +
".weui-form-preview__btn:active {\n" +
"  background-color: #EEEEEE;\n" +
"}\n" +
".weui-form-preview__btn:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-left: 1px solid #D5D5D6;\n" +
"  color: #D5D5D6;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui-form-preview__btn:first-child:after {\n" +
"  display: none;\n" +
"}\n" +
".weui-form-preview__btn_default {\n" +
"  color: #999999;\n" +
"}\n" +
".weui-form-preview__btn_primary {\n" +
"  color: #0BB20C;\n" +
"}\n" +
".weui-cell_select {\n" +
"  padding: 0;\n" +
"}\n" +
".weui-cell_select .weui-select {\n" +
"  padding-right: 30px;\n" +
"}\n" +
".weui-cell_select .weui-cell__bd:after {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C8C8CD;\n" +
"  border-style: solid;\n" +
"  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  right: 15px;\n" +
"  margin-top: -4px;\n" +
"}\n" +
".weui-select {\n" +
"  -webkit-appearance: none;\n" +
"  border: 0;\n" +
"  outline: 0;\n" +
"  background-color: transparent;\n" +
"  width: 100%;\n" +
"  font-size: inherit;\n" +
"  height: 44px;\n" +
"  line-height: 44px;\n" +
"  position: relative;\n" +
"  z-index: 1;\n" +
"  padding-left: 15px;\n" +
"}\n" +
".weui-cell_select-before {\n" +
"  padding-right: 15px;\n" +
"}\n" +
".weui-cell_select-before .weui-select {\n" +
"  width: 105px;\n" +
"  box-sizing: border-box;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__hd {\n" +
"  position: relative;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__hd:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-right: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 100% 0;\n" +
"          transform-origin: 100% 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui-cell_select-before .weui-cell__hd:before {\n" +
"  content: \" \";\n" +
"  display: inline-block;\n" +
"  height: 6px;\n" +
"  width: 6px;\n" +
"  border-width: 2px 2px 0 0;\n" +
"  border-color: #C8C8CD;\n" +
"  border-style: solid;\n" +
"  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"          transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);\n" +
"  position: relative;\n" +
"  top: -2px;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  right: 15px;\n" +
"  margin-top: -4px;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__bd {\n" +
"  padding-left: 15px;\n" +
"}\n" +
".weui-cell_select-before .weui-cell__bd:after {\n" +
"  display: none;\n" +
"}\n" +
".weui-cell_select-after {\n" +
"  padding-left: 15px;\n" +
"}\n" +
".weui-cell_select-after .weui-select {\n" +
"  padding-left: 0;\n" +
"}\n" +
".weui-cell_vcode {\n" +
"  padding-top: 0;\n" +
"  padding-right: 0;\n" +
"  padding-bottom: 0;\n" +
"}\n" +
".weui-vcode-img {\n" +
"  margin-left: 5px;\n" +
"  height: 44px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui-vcode-btn {\n" +
"  display: inline-block;\n" +
"  height: 44px;\n" +
"  margin-left: 5px;\n" +
"  padding: 0 0.6em 0 0.7em;\n" +
"  border-left: 1px solid #E5E5E5;\n" +
"  line-height: 44px;\n" +
"  vertical-align: middle;\n" +
"  font-size: 17px;\n" +
"  color: #3CC51F;\n" +
"}\n" +
"button.weui-vcode-btn {\n" +
"  background-color: transparent;\n" +
"  border-top: 0;\n" +
"  border-right: 0;\n" +
"  border-bottom: 0;\n" +
"  outline: 0;\n" +
"}\n" +
".weui-vcode-btn:active {\n" +
"  color: #52a341;\n" +
"}\n" +
".weui-gallery {\n" +
"  display: none;\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  background-color: #000000;\n" +
"  z-index: 1000;\n" +
"}\n" +
".weui-gallery__img {\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 60px;\n" +
"  left: 0;\n" +
"  background: center center no-repeat;\n" +
"  background-size: contain;\n" +
"}\n" +
".weui-gallery__opr {\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  background-color: #0D0D0D;\n" +
"  color: #FFFFFF;\n" +
"  line-height: 60px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui-gallery__del {\n" +
"  display: block;\n" +
"}\n" +
".weui-cell_switch {\n" +
"  padding-top: 6px;\n" +
"  padding-bottom: 6px;\n" +
"}\n" +
".weui-switch {\n" +
"  -webkit-appearance: none;\n" +
"          appearance: none;\n" +
"}\n" +
".weui-switch,\n" +
".weui-switch-cp__box {\n" +
"  position: relative;\n" +
"  width: 52px;\n" +
"  height: 32px;\n" +
"  border: 1px solid #DFDFDF;\n" +
"  outline: 0;\n" +
"  border-radius: 16px;\n" +
"  box-sizing: border-box;\n" +
"  background-color: #DFDFDF;\n" +
"  -webkit-transition: background-color 0.1s, border 0.1s;\n" +
"  transition: background-color 0.1s, border 0.1s;\n" +
"}\n" +
".weui-switch:before,\n" +
".weui-switch-cp__box:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 50px;\n" +
"  height: 30px;\n" +
"  border-radius: 15px;\n" +
"  background-color: #FDFDFD;\n" +
"  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"  transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"  transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);\n" +
"}\n" +
".weui-switch:after,\n" +
".weui-switch-cp__box:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 30px;\n" +
"  height: 30px;\n" +
"  border-radius: 15px;\n" +
"  background-color: #FFFFFF;\n" +
"  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n" +
"  -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"  transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"  transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);\n" +
"}\n" +
".weui-switch:checked,\n" +
".weui-switch-cp__input:checked ~ .weui-switch-cp__box {\n" +
"  border-color: #04BE02;\n" +
"  background-color: #04BE02;\n" +
"}\n" +
".weui-switch:checked:before,\n" +
".weui-switch-cp__input:checked ~ .weui-switch-cp__box:before {\n" +
"  -webkit-transform: scale(0);\n" +
"          transform: scale(0);\n" +
"}\n" +
".weui-switch:checked:after,\n" +
".weui-switch-cp__input:checked ~ .weui-switch-cp__box:after {\n" +
"  -webkit-transform: translateX(20px);\n" +
"          transform: translateX(20px);\n" +
"}\n" +
".weui-switch-cp__input {\n" +
"  position: absolute;\n" +
"  left: -9999px;\n" +
"}\n" +
".weui-switch-cp__box {\n" +
"  display: block;\n" +
"}\n" +
".weui-uploader__hd {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  padding-bottom: 10px;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui-uploader__title {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui-uploader__info {\n" +
"  color: #B2B2B2;\n" +
"}\n" +
".weui-uploader__bd {\n" +
"  margin-bottom: -4px;\n" +
"  margin-right: -9px;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-uploader__files {\n" +
"  list-style: none;\n" +
"}\n" +
".weui-uploader__file {\n" +
"  float: left;\n" +
"  margin-right: 9px;\n" +
"  margin-bottom: 9px;\n" +
"  width: 79px;\n" +
"  height: 79px;\n" +
"  background: no-repeat center center;\n" +
"  background-size: cover;\n" +
"}\n" +
".weui-uploader__file_status {\n" +
"  position: relative;\n" +
"}\n" +
".weui-uploader__file_status:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  bottom: 0;\n" +
"  left: 0;\n" +
"  background-color: rgba(0, 0, 0, 0.5);\n" +
"}\n" +
".weui-uploader__file_status .weui-uploader__file-content {\n" +
"  display: block;\n" +
"}\n" +
".weui-uploader__file-content {\n" +
"  display: none;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui-uploader__file-content .weui-icon-warn {\n" +
"  display: inline-block;\n" +
"}\n" +
".weui-uploader__input-box {\n" +
"  float: left;\n" +
"  position: relative;\n" +
"  margin-right: 9px;\n" +
"  margin-bottom: 9px;\n" +
"  width: 77px;\n" +
"  height: 77px;\n" +
"  border: 1px solid #D9D9D9;\n" +
"}\n" +
".weui-uploader__input-box:before,\n" +
".weui-uploader__input-box:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  background-color: #D9D9D9;\n" +
"}\n" +
".weui-uploader__input-box:before {\n" +
"  width: 2px;\n" +
"  height: 39.5px;\n" +
"}\n" +
".weui-uploader__input-box:after {\n" +
"  width: 39.5px;\n" +
"  height: 2px;\n" +
"}\n" +
".weui-uploader__input-box:active {\n" +
"  border-color: #999999;\n" +
"}\n" +
".weui-uploader__input-box:active:before,\n" +
".weui-uploader__input-box:active:after {\n" +
"  background-color: #999999;\n" +
"}\n" +
".weui-uploader__input {\n" +
"  position: absolute;\n" +
"  z-index: 1;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  opacity: 0;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-msg {\n" +
"  padding-top: 36px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui-msg__icon-area {\n" +
"  margin-bottom: 30px;\n" +
"}\n" +
".weui-msg__text-area {\n" +
"  margin-bottom: 25px;\n" +
"  padding: 0 20px;\n" +
"}\n" +
".weui-msg__text-area a {\n" +
"  color: #586C94;\n" +
"}\n" +
".weui-msg__title {\n" +
"  margin-bottom: 5px;\n" +
"  font-weight: 400;\n" +
"  font-size: 20px;\n" +
"}\n" +
".weui-msg__desc {\n" +
"  font-size: 14px;\n" +
"  color: #999999;\n" +
"}\n" +
".weui-msg__opr-area {\n" +
"  margin-bottom: 25px;\n" +
"}\n" +
".weui-msg__extra-area {\n" +
"  margin-bottom: 15px;\n" +
"  font-size: 14px;\n" +
"  color: #999999;\n" +
"}\n" +
".weui-msg__extra-area a {\n" +
"  color: #586C94;\n" +
"}\n" +
"@media screen and (min-height: 438px) {\n" +
"  .weui-msg__extra-area {\n" +
"    position: fixed;\n" +
"    left: 0;\n" +
"    bottom: 0;\n" +
"    width: 100%;\n" +
"    text-align: center;\n" +
"  }\n" +
"}\n" +
".weui-article {\n" +
"  padding: 20px 15px;\n" +
"  font-size: 15px;\n" +
"}\n" +
".weui-article section {\n" +
"  margin-bottom: 1.5em;\n" +
"}\n" +
".weui-article h1 {\n" +
"  font-size: 18px;\n" +
"  font-weight: 400;\n" +
"  margin-bottom: .9em;\n" +
"}\n" +
".weui-article h2 {\n" +
"  font-size: 16px;\n" +
"  font-weight: 400;\n" +
"  margin-bottom: .34em;\n" +
"}\n" +
".weui-article h3 {\n" +
"  font-weight: 400;\n" +
"  font-size: 15px;\n" +
"  margin-bottom: .34em;\n" +
"}\n" +
".weui-article * {\n" +
"  max-width: 100%;\n" +
"  box-sizing: border-box;\n" +
"  word-wrap: break-word;\n" +
"}\n" +
".weui-article p {\n" +
"  margin: 0 0 .8em;\n" +
"}\n" +
".weui-tabbar {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  position: absolute;\n" +
"  z-index: 500;\n" +
"  bottom: 0;\n" +
"  width: 100%;\n" +
"  background-color: #F7F7FA;\n" +
"}\n" +
".weui-tabbar:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #C0BFC4;\n" +
"  color: #C0BFC4;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-tabbar__item {\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  padding: 5px 0 0;\n" +
"  font-size: 0;\n" +
"  color: #999999;\n" +
"  text-align: center;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon,\n" +
".weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,\n" +
".weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {\n" +
"  color: #09BB07;\n" +
"}\n" +
".weui-tabbar__icon {\n" +
"  display: inline-block;\n" +
"  width: 27px;\n" +
"  height: 27px;\n" +
"}\n" +
"i.weui-tabbar__icon,\n" +
".weui-tabbar__icon > i {\n" +
"  font-size: 24px;\n" +
"  color: #999999;\n" +
"}\n" +
".weui-tabbar__icon img {\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"}\n" +
".weui-tabbar__label {\n" +
"  text-align: center;\n" +
"  color: #999999;\n" +
"  font-size: 10px;\n" +
"  line-height: 1.8;\n" +
"}\n" +
".weui-navbar {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  position: absolute;\n" +
"  z-index: 500;\n" +
"  top: 0;\n" +
"  width: 100%;\n" +
"  background-color: #FAFAFA;\n" +
"}\n" +
".weui-navbar:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #CCCCCC;\n" +
"  color: #CCCCCC;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-navbar + .weui-tab__panel {\n" +
"  padding-top: 50px;\n" +
"  padding-bottom: 0;\n" +
"}\n" +
".weui-navbar__item {\n" +
"  position: relative;\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  padding: 13px 0;\n" +
"  text-align: center;\n" +
"  font-size: 15px;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
".weui-navbar__item:active {\n" +
"  background-color: #EDEDED;\n" +
"}\n" +
".weui-navbar__item.weui-bar__item_on {\n" +
"  background-color: #EAEAEA;\n" +
"}\n" +
".weui-navbar__item:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-right: 1px solid #CCCCCC;\n" +
"  color: #CCCCCC;\n" +
"  -webkit-transform-origin: 100% 0;\n" +
"          transform-origin: 100% 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui-navbar__item:last-child:after {\n" +
"  display: none;\n" +
"}\n" +
".weui-tab {\n" +
"  position: relative;\n" +
"  height: 100%;\n" +
"}\n" +
".weui-tab__panel {\n" +
"  box-sizing: border-box;\n" +
"  height: 100%;\n" +
"  padding-bottom: 50px;\n" +
"  overflow: auto;\n" +
"  -webkit-overflow-scrolling: touch;\n" +
"}\n" +
".weui-tab__content {\n" +
"  display: none;\n" +
"}\n" +
".weui-progress {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui-progress__bar {\n" +
"  background-color: #EBEBEB;\n" +
"  height: 3px;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui-progress__inner-bar {\n" +
"  width: 0;\n" +
"  height: 100%;\n" +
"  background-color: #09BB07;\n" +
"}\n" +
".weui-progress__opr {\n" +
"  display: block;\n" +
"  margin-left: 15px;\n" +
"  font-size: 0;\n" +
"}\n" +
".weui-panel {\n" +
"  background-color: #FFFFFF;\n" +
"  margin-top: 10px;\n" +
"  position: relative;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-panel:first-child {\n" +
"  margin-top: 0;\n" +
"}\n" +
".weui-panel:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-panel:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-panel__hd {\n" +
"  padding: 14px 15px 10px;\n" +
"  color: #999999;\n" +
"  font-size: 13px;\n" +
"  position: relative;\n" +
"}\n" +
".weui-panel__hd:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui-media-box {\n" +
"  padding: 15px;\n" +
"  position: relative;\n" +
"}\n" +
".weui-media-box:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"  left: 15px;\n" +
"}\n" +
".weui-media-box:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
"a.weui-media-box {\n" +
"  color: #000000;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"}\n" +
"a.weui-media-box:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui-media-box__title {\n" +
"  font-weight: 400;\n" +
"  font-size: 17px;\n" +
"  width: auto;\n" +
"  overflow: hidden;\n" +
"  text-overflow: ellipsis;\n" +
"  white-space: nowrap;\n" +
"  word-wrap: normal;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"}\n" +
".weui-media-box__desc {\n" +
"  color: #999999;\n" +
"  font-size: 13px;\n" +
"  line-height: 1.2;\n" +
"  overflow: hidden;\n" +
"  text-overflow: ellipsis;\n" +
"  display: -webkit-box;\n" +
"  -webkit-box-orient: vertical;\n" +
"  -webkit-line-clamp: 2;\n" +
"}\n" +
".weui-media-box__info {\n" +
"  margin-top: 15px;\n" +
"  padding-bottom: 5px;\n" +
"  font-size: 13px;\n" +
"  color: #CECECE;\n" +
"  line-height: 1em;\n" +
"  list-style: none;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-media-box__info__meta {\n" +
"  float: left;\n" +
"  padding-right: 1em;\n" +
"}\n" +
".weui-media-box__info__meta_extra {\n" +
"  padding-left: 1em;\n" +
"  border-left: 1px solid #CECECE;\n" +
"}\n" +
".weui-media-box_text .weui-media-box__title {\n" +
"  margin-bottom: 8px;\n" +
"}\n" +
".weui-media-box_appmsg {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui-media-box_appmsg .weui-media-box__hd {\n" +
"  margin-right: .8em;\n" +
"  width: 60px;\n" +
"  height: 60px;\n" +
"  line-height: 60px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui-media-box_appmsg .weui-media-box__thumb {\n" +
"  width: 100%;\n" +
"  max-height: 100%;\n" +
"  vertical-align: top;\n" +
"}\n" +
".weui-media-box_appmsg .weui-media-box__bd {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  min-width: 0;\n" +
"}\n" +
".weui-media-box_small-appmsg {\n" +
"  padding: 0;\n" +
"}\n" +
".weui-media-box_small-appmsg .weui-cells {\n" +
"  margin-top: 0;\n" +
"}\n" +
".weui-media-box_small-appmsg .weui-cells:before {\n" +
"  display: none;\n" +
"}\n" +
".weui-grids {\n" +
"  position: relative;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-grids:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-grids:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-left: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui-grid {\n" +
"  position: relative;\n" +
"  float: left;\n" +
"  padding: 20px 10px;\n" +
"  width: 33.33333333%;\n" +
"  box-sizing: border-box;\n" +
"}\n" +
".weui-grid:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  right: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-right: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 100% 0;\n" +
"          transform-origin: 100% 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui-grid:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-grid:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui-grid__icon {\n" +
"  width: 28px;\n" +
"  height: 28px;\n" +
"  margin: 0 auto;\n" +
"}\n" +
".weui-grid__icon img {\n" +
"  display: block;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"}\n" +
".weui-grid__icon + .weui-grid__label {\n" +
"  margin-top: 5px;\n" +
"}\n" +
".weui-grid__label {\n" +
"  display: block;\n" +
"  text-align: center;\n" +
"  color: #000000;\n" +
"  font-size: 14px;\n" +
"  white-space: nowrap;\n" +
"  text-overflow: ellipsis;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-footer {\n" +
"  color: #999999;\n" +
"  font-size: 14px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui-footer a {\n" +
"  color: #586C94;\n" +
"}\n" +
".weui-footer_fixed-bottom {\n" +
"  position: fixed;\n" +
"  bottom: .52em;\n" +
"  left: 0;\n" +
"  right: 0;\n" +
"}\n" +
".weui-footer__links {\n" +
"  font-size: 0;\n" +
"}\n" +
".weui-footer__link {\n" +
"  display: inline-block;\n" +
"  vertical-align: top;\n" +
"  margin: 0 .62em;\n" +
"  position: relative;\n" +
"  font-size: 14px;\n" +
"}\n" +
".weui-footer__link:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-left: 1px solid #C7C7C7;\n" +
"  color: #C7C7C7;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"  left: -0.65em;\n" +
"  top: .36em;\n" +
"  bottom: .36em;\n" +
"}\n" +
".weui-footer__link:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
".weui-footer__text {\n" +
"  padding: 0 .34em;\n" +
"  font-size: 12px;\n" +
"}\n" +
".weui-flex {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"}\n" +
".weui-flex__item {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui-dialog {\n" +
"  position: fixed;\n" +
"  z-index: 5000;\n" +
"  width: 80%;\n" +
"  max-width: 300px;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  background-color: #FFFFFF;\n" +
"  text-align: center;\n" +
"  border-radius: 3px;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-dialog__hd {\n" +
"  padding: 1.3em 1.6em 0.5em;\n" +
"}\n" +
".weui-dialog__title {\n" +
"  font-weight: 400;\n" +
"  font-size: 18px;\n" +
"}\n" +
".weui-dialog__bd {\n" +
"  padding: 0 1.6em 0.8em;\n" +
"  min-height: 40px;\n" +
"  font-size: 15px;\n" +
"  line-height: 1.3;\n" +
"  word-wrap: break-word;\n" +
"  word-break: break-all;\n" +
"  color: #999999;\n" +
"}\n" +
".weui-dialog__bd:first-child {\n" +
"  padding: 2.7em 20px 1.7em;\n" +
"  color: #353535;\n" +
"}\n" +
".weui-dialog__ft {\n" +
"  position: relative;\n" +
"  line-height: 48px;\n" +
"  font-size: 18px;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"}\n" +
".weui-dialog__ft:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D5D5D6;\n" +
"  color: #D5D5D6;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-dialog__btn {\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  color: #3CC51F;\n" +
"  text-decoration: none;\n" +
"  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n" +
"  position: relative;\n" +
"}\n" +
".weui-dialog__btn:active {\n" +
"  background-color: #EEEEEE;\n" +
"}\n" +
".weui-dialog__btn:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 1px;\n" +
"  bottom: 0;\n" +
"  border-left: 1px solid #D5D5D6;\n" +
"  color: #D5D5D6;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleX(0.5);\n" +
"          transform: scaleX(0.5);\n" +
"}\n" +
".weui-dialog__btn:first-child:after {\n" +
"  display: none;\n" +
"}\n" +
".weui-dialog__btn_default {\n" +
"  color: #353535;\n" +
"}\n" +
".weui-dialog__btn_primary {\n" +
"  color: #0BB20C;\n" +
"}\n" +
".weui-skin_android .weui-dialog {\n" +
"  text-align: left;\n" +
"  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n" +
"}\n" +
".weui-skin_android .weui-dialog__title {\n" +
"  font-size: 21px;\n" +
"}\n" +
".weui-skin_android .weui-dialog__hd {\n" +
"  text-align: left;\n" +
"}\n" +
".weui-skin_android .weui-dialog__bd {\n" +
"  color: #999999;\n" +
"  padding: 0.25em 1.6em 2em;\n" +
"  font-size: 17px;\n" +
"  text-align: left;\n" +
"}\n" +
".weui-skin_android .weui-dialog__bd:first-child {\n" +
"  padding: 1.6em 1.6em 2em;\n" +
"  color: #353535;\n" +
"}\n" +
".weui-skin_android .weui-dialog__ft {\n" +
"  display: block;\n" +
"  text-align: right;\n" +
"  line-height: 42px;\n" +
"  font-size: 16px;\n" +
"  padding: 0 1.6em 0.7em;\n" +
"}\n" +
".weui-skin_android .weui-dialog__ft:after {\n" +
"  display: none;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn {\n" +
"  display: inline-block;\n" +
"  vertical-align: top;\n" +
"  padding: 0 .8em;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:after {\n" +
"  display: none;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:active {\n" +
"  background-color: rgba(0, 0, 0, 0.06);\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:visited {\n" +
"  background-color: rgba(0, 0, 0, 0.06);\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn:last-child {\n" +
"  margin-right: -0.8em;\n" +
"}\n" +
".weui-skin_android .weui-dialog__btn_default {\n" +
"  color: #808080;\n" +
"}\n" +
"@media screen and (min-width: 1024px) {\n" +
"  .weui-dialog {\n" +
"    width: 35%;\n" +
"  }\n" +
"}\n" +
".weui-toast {\n" +
"  position: fixed;\n" +
"  z-index: 5000;\n" +
"  width: 7.6em;\n" +
"  min-height: 7.6em;\n" +
"  top: 180px;\n" +
"  left: 50%;\n" +
"  margin-left: -3.8em;\n" +
"  background: rgba(40, 40, 40, 0.75);\n" +
"  text-align: center;\n" +
"  border-radius: 5px;\n" +
"  color: #FFFFFF;\n" +
"}\n" +
".weui-icon_toast {\n" +
"  margin: 22px 0 0;\n" +
"  display: block;\n" +
"}\n" +
".weui-icon_toast.weui-icon-success-no-circle:before {\n" +
"  color: #FFFFFF;\n" +
"  font-size: 55px;\n" +
"}\n" +
".weui-icon_toast.weui-loading {\n" +
"  margin: 30px 0 0;\n" +
"  width: 38px;\n" +
"  height: 38px;\n" +
"  vertical-align: baseline;\n" +
"}\n" +
".weui-toast__content {\n" +
"  margin: 0 0 15px;\n" +
"}\n" +
".weui-mask {\n" +
"  position: fixed;\n" +
"  z-index: 1000;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  background: rgba(0, 0, 0, 0.6);\n" +
"}\n" +
".weui-mask_transparent {\n" +
"  position: fixed;\n" +
"  z-index: 1000;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"}\n" +
".weui-actionsheet {\n" +
"  position: fixed;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  -webkit-transform: translate(0, 100%);\n" +
"          transform: translate(0, 100%);\n" +
"  -webkit-backface-visibility: hidden;\n" +
"          backface-visibility: hidden;\n" +
"  z-index: 5000;\n" +
"  width: 100%;\n" +
"  background-color: #EFEFF4;\n" +
"  -webkit-transition: -webkit-transform .3s;\n" +
"  transition: -webkit-transform .3s;\n" +
"  transition: transform .3s;\n" +
"  transition: transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui-actionsheet__menu {\n" +
"  background-color: #FFFFFF;\n" +
"}\n" +
".weui-actionsheet__action {\n" +
"  margin-top: 6px;\n" +
"  background-color: #FFFFFF;\n" +
"}\n" +
".weui-actionsheet__cell {\n" +
"  position: relative;\n" +
"  padding: 10px 0;\n" +
"  text-align: center;\n" +
"  font-size: 18px;\n" +
"}\n" +
".weui-actionsheet__cell:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D9D9D9;\n" +
"  color: #D9D9D9;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-actionsheet__cell:active {\n" +
"  background-color: #ECECEC;\n" +
"}\n" +
".weui-actionsheet__cell:first-child:before {\n" +
"  display: none;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet {\n" +
"  position: fixed;\n" +
"  left: 50%;\n" +
"  top: 50%;\n" +
"  bottom: auto;\n" +
"  -webkit-transform: translate(-50%, -50%);\n" +
"          transform: translate(-50%, -50%);\n" +
"  width: 274px;\n" +
"  box-sizing: border-box;\n" +
"  -webkit-backface-visibility: hidden;\n" +
"          backface-visibility: hidden;\n" +
"  background: transparent;\n" +
"  -webkit-transition: -webkit-transform .3s;\n" +
"  transition: -webkit-transform .3s;\n" +
"  transition: transform .3s;\n" +
"  transition: transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__action {\n" +
"  display: none;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__menu {\n" +
"  border-radius: 2px;\n" +
"  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__cell {\n" +
"  padding: 13px 24px;\n" +
"  font-size: 16px;\n" +
"  line-height: 1.4;\n" +
"  text-align: left;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__cell:first-child {\n" +
"  border-top-left-radius: 2px;\n" +
"  border-top-right-radius: 2px;\n" +
"}\n" +
".weui-skin_android .weui-actionsheet__cell:last-child {\n" +
"  border-bottom-left-radius: 2px;\n" +
"  border-bottom-right-radius: 2px;\n" +
"}\n" +
".weui-actionsheet_toggle {\n" +
"  -webkit-transform: translate(0, 0);\n" +
"          transform: translate(0, 0);\n" +
"}\n" +
".weui-loadmore {\n" +
"  width: 65%;\n" +
"  margin: 1.5em auto;\n" +
"  line-height: 1.6em;\n" +
"  font-size: 14px;\n" +
"  text-align: center;\n" +
"}\n" +
".weui-loadmore__tips {\n" +
"  display: inline-block;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui-loadmore_line {\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  margin-top: 2.4em;\n" +
"}\n" +
".weui-loadmore_line .weui-loadmore__tips {\n" +
"  position: relative;\n" +
"  top: -0.9em;\n" +
"  padding: 0 .55em;\n" +
"  background-color: #FFFFFF;\n" +
"  color: #999999;\n" +
"}\n" +
".weui-loadmore_dot .weui-loadmore__tips {\n" +
"  padding: 0 .16em;\n" +
"}\n" +
".weui-loadmore_dot .weui-loadmore__tips:before {\n" +
"  content: \" \";\n" +
"  width: 4px;\n" +
"  height: 4px;\n" +
"  border-radius: 50%;\n" +
"  background-color: #E5E5E5;\n" +
"  display: inline-block;\n" +
"  position: relative;\n" +
"  vertical-align: 0;\n" +
"  top: -0.16em;\n" +
"}\n" +
".weui-badge {\n" +
"  display: inline-block;\n" +
"  padding: .15em .4em;\n" +
"  min-width: 8px;\n" +
"  border-radius: 18px;\n" +
"  background-color: #E64340;\n" +
"  color: #FFFFFF;\n" +
"  line-height: 1.2;\n" +
"  text-align: center;\n" +
"  font-size: 12px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui-badge_dot {\n" +
"  padding: .4em;\n" +
"  min-width: 0;\n" +
"}\n" +
".weui-search-bar {\n" +
"  position: relative;\n" +
"  padding: 8px 10px;\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  box-sizing: border-box;\n" +
"  background-color: #EFEFF4;\n" +
"}\n" +
".weui-search-bar:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #D7D6DC;\n" +
"  color: #D7D6DC;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-search-bar:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #D7D6DC;\n" +
"  color: #D7D6DC;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn {\n" +
"  display: block;\n" +
"}\n" +
".weui-search-bar.weui-search-bar_focusing .weui-search-bar__label {\n" +
"  display: none;\n" +
"}\n" +
".weui-search-bar__form {\n" +
"  position: relative;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: auto;\n" +
"          flex: auto;\n" +
"  background-color: #EFEFF4;\n" +
"}\n" +
".weui-search-bar__form:after {\n" +
"  content: '';\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  width: 200%;\n" +
"  height: 200%;\n" +
"  -webkit-transform: scale(0.5);\n" +
"          transform: scale(0.5);\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  border-radius: 10px;\n" +
"  border: 1px solid #E6E6EA;\n" +
"  box-sizing: border-box;\n" +
"  background: #FFFFFF;\n" +
"}\n" +
".weui-search-bar__box {\n" +
"  position: relative;\n" +
"  padding-left: 30px;\n" +
"  padding-right: 30px;\n" +
"  height: 100%;\n" +
"  width: 100%;\n" +
"  box-sizing: border-box;\n" +
"  z-index: 1;\n" +
"}\n" +
".weui-search-bar__box .weui-search-bar__input {\n" +
"  padding: 4px 0;\n" +
"  width: 100%;\n" +
"  height: 1.42857143em;\n" +
"  border: 0;\n" +
"  font-size: 14px;\n" +
"  line-height: 1.42857143em;\n" +
"  box-sizing: content-box;\n" +
"  background: transparent;\n" +
"}\n" +
".weui-search-bar__box .weui-search-bar__input:focus {\n" +
"  outline: none;\n" +
"}\n" +
".weui-search-bar__box .weui-icon-search {\n" +
"  position: absolute;\n" +
"  left: 10px;\n" +
"  top: 0;\n" +
"  line-height: 28px;\n" +
"}\n" +
".weui-search-bar__box .weui-icon-clear {\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  padding: 0 10px;\n" +
"  line-height: 28px;\n" +
"}\n" +
".weui-search-bar__label {\n" +
"  position: absolute;\n" +
"  top: 1px;\n" +
"  right: 1px;\n" +
"  bottom: 1px;\n" +
"  left: 1px;\n" +
"  z-index: 2;\n" +
"  border-radius: 3px;\n" +
"  text-align: center;\n" +
"  color: #9B9B9B;\n" +
"  background: #FFFFFF;\n" +
"}\n" +
".weui-search-bar__label span {\n" +
"  display: inline-block;\n" +
"  font-size: 14px;\n" +
"  vertical-align: middle;\n" +
"}\n" +
".weui-search-bar__label .weui-icon-search {\n" +
"  margin-right: 5px;\n" +
"}\n" +
".weui-search-bar__cancel-btn {\n" +
"  display: none;\n" +
"  margin-left: 10px;\n" +
"  line-height: 28px;\n" +
"  color: #09BB07;\n" +
"  white-space: nowrap;\n" +
"}\n" +
".weui-search-bar__input:not(:valid) ~ .weui-icon-clear {\n" +
"  display: none;\n" +
"}\n" +
"input[type=\"search\"]::-webkit-search-decoration,\n" +
"input[type=\"search\"]::-webkit-search-cancel-button,\n" +
"input[type=\"search\"]::-webkit-search-results-button,\n" +
"input[type=\"search\"]::-webkit-search-results-decoration {\n" +
"  display: none;\n" +
"}\n" +
".weui-picker {\n" +
"  position: fixed;\n" +
"  width: 100%;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  z-index: 5000;\n" +
"  -webkit-backface-visibility: hidden;\n" +
"          backface-visibility: hidden;\n" +
"  -webkit-transform: translate(0, 100%);\n" +
"          transform: translate(0, 100%);\n" +
"  -webkit-transition: -webkit-transform .3s;\n" +
"  transition: -webkit-transform .3s;\n" +
"  transition: transform .3s;\n" +
"  transition: transform .3s, -webkit-transform .3s;\n" +
"}\n" +
".weui-picker__hd {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  padding: 10px 15px;\n" +
"  background-color: #fbf9fe;\n" +
"  position: relative;\n" +
"  text-align: center;\n" +
"}\n" +
".weui-picker__hd:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-picker__action {\n" +
"  display: block;\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  color: #586C94;\n" +
"}\n" +
".weui-picker__action:first-child {\n" +
"  text-align: left;\n" +
"}\n" +
".weui-picker__action:last-child {\n" +
"  text-align: right;\n" +
"}\n" +
".weui-picker__bd {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  position: relative;\n" +
"  background-color: #fff;\n" +
"  height: 238px;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-picker__group {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"  position: relative;\n" +
"  height: 100%;\n" +
"}\n" +
".weui-picker__mask {\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 100%;\n" +
"  height: 100%;\n" +
"  margin: 0 auto;\n" +
"  z-index: 3;\n" +
"  background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n" +
"  background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));\n" +
"  background-position: top, bottom;\n" +
"  background-size: 100% 102px;\n" +
"  background-repeat: no-repeat;\n" +
"  -webkit-transform: translateZ(0);\n" +
"          transform: translateZ(0);\n" +
"}\n" +
".weui-picker__indicator {\n" +
"  width: 100%;\n" +
"  height: 34px;\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 102px;\n" +
"  z-index: 3;\n" +
"}\n" +
".weui-picker__indicator:before {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-top: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 0;\n" +
"          transform-origin: 0 0;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-picker__indicator:after {\n" +
"  content: \" \";\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  bottom: 0;\n" +
"  right: 0;\n" +
"  height: 1px;\n" +
"  border-bottom: 1px solid #E5E5E5;\n" +
"  color: #E5E5E5;\n" +
"  -webkit-transform-origin: 0 100%;\n" +
"          transform-origin: 0 100%;\n" +
"  -webkit-transform: scaleY(0.5);\n" +
"          transform: scaleY(0.5);\n" +
"}\n" +
".weui-picker__content {\n" +
"  position: absolute;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 100%;\n" +
"}\n" +
".weui-picker__item {\n" +
"  padding: 5px 0 4px;\n" +
"  text-align: center;\n" +
"  color: #000;\n" +
"  text-overflow: ellipsis;\n" +
"  white-space: nowrap;\n" +
"  overflow: hidden;\n" +
"}\n" +
".weui-picker__item_disabled {\n" +
"  color: #999999;\n" +
"}\n" +
"@-webkit-keyframes slideUp {\n" +
"  from {\n" +
"    -webkit-transform: translate3d(0, 100%, 0);\n" +
"            transform: translate3d(0, 100%, 0);\n" +
"  }\n" +
"  to {\n" +
"    -webkit-transform: translate3d(0, 0, 0);\n" +
"            transform: translate3d(0, 0, 0);\n" +
"  }\n" +
"}\n" +
"@keyframes slideUp {\n" +
"  from {\n" +
"    -webkit-transform: translate3d(0, 100%, 0);\n" +
"            transform: translate3d(0, 100%, 0);\n" +
"  }\n" +
"  to {\n" +
"    -webkit-transform: translate3d(0, 0, 0);\n" +
"            transform: translate3d(0, 0, 0);\n" +
"  }\n" +
"}\n" +
".weui-animate-slide-up {\n" +
"  -webkit-animation: slideUp ease .3s forwards;\n" +
"          animation: slideUp ease .3s forwards;\n" +
"}\n" +
"@-webkit-keyframes slideDown {\n" +
"  from {\n" +
"    -webkit-transform: translate3d(0, 0, 0);\n" +
"            transform: translate3d(0, 0, 0);\n" +
"  }\n" +
"  to {\n" +
"    -webkit-transform: translate3d(0, 100%, 0);\n" +
"            transform: translate3d(0, 100%, 0);\n" +
"  }\n" +
"}\n" +
"@keyframes slideDown {\n" +
"  from {\n" +
"    -webkit-transform: translate3d(0, 0, 0);\n" +
"            transform: translate3d(0, 0, 0);\n" +
"  }\n" +
"  to {\n" +
"    -webkit-transform: translate3d(0, 100%, 0);\n" +
"            transform: translate3d(0, 100%, 0);\n" +
"  }\n" +
"}\n" +
".weui-animate-slide-down {\n" +
"  -webkit-animation: slideDown ease .3s forwards;\n" +
"          animation: slideDown ease .3s forwards;\n" +
"}\n" +
"@-webkit-keyframes fadeIn {\n" +
"  from {\n" +
"    opacity: 0;\n" +
"  }\n" +
"  to {\n" +
"    opacity: 1;\n" +
"  }\n" +
"}\n" +
"@keyframes fadeIn {\n" +
"  from {\n" +
"    opacity: 0;\n" +
"  }\n" +
"  to {\n" +
"    opacity: 1;\n" +
"  }\n" +
"}\n" +
".weui-animate-fade-in {\n" +
"  -webkit-animation: fadeIn ease .3s forwards;\n" +
"          animation: fadeIn ease .3s forwards;\n" +
"}\n" +
"@-webkit-keyframes fadeOut {\n" +
"  from {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  to {\n" +
"    opacity: 0;\n" +
"  }\n" +
"}\n" +
"@keyframes fadeOut {\n" +
"  from {\n" +
"    opacity: 1;\n" +
"  }\n" +
"  to {\n" +
"    opacity: 0;\n" +
"  }\n" +
"}\n" +
".weui-animate-fade-out {\n" +
"  -webkit-animation: fadeOut ease .3s forwards;\n" +
"          animation: fadeOut ease .3s forwards;\n" +
"}\n" +
".weui-agree {\n" +
"  display: block;\n" +
"  padding: .5em 15px;\n" +
"  font-size: 13px;\n" +
"}\n" +
".weui-agree a {\n" +
"  color: #586C94;\n" +
"}\n" +
".weui-agree__text {\n" +
"  color: #999999;\n" +
"}\n" +
".weui-agree__checkbox {\n" +
"  -webkit-appearance: none;\n" +
"          appearance: none;\n" +
"  outline: 0;\n" +
"  font-size: 0;\n" +
"  border: 1px solid #D1D1D1;\n" +
"  background-color: #FFFFFF;\n" +
"  border-radius: 3px;\n" +
"  width: 13px;\n" +
"  height: 13px;\n" +
"  position: relative;\n" +
"  vertical-align: 0;\n" +
"  top: 2px;\n" +
"}\n" +
".weui-agree__checkbox:checked:before {\n" +
"  font-family: \"weui\";\n" +
"  font-style: normal;\n" +
"  font-weight: normal;\n" +
"  font-variant: normal;\n" +
"  text-transform: none;\n" +
"  text-align: center;\n" +
"  speak: none;\n" +
"  display: inline-block;\n" +
"  vertical-align: middle;\n" +
"  text-decoration: inherit;\n" +
"  content: \"\\EA08\";\n" +
"  color: #09BB07;\n" +
"  font-size: 13px;\n" +
"  position: absolute;\n" +
"  top: 50%;\n" +
"  left: 50%;\n" +
"  -webkit-transform: translate(-50%, -48%) scale(0.73);\n" +
"          transform: translate(-50%, -48%) scale(0.73);\n" +
"}\n" +
".weui-agree__checkbox:disabled {\n" +
"  background-color: #E1E1E1;\n" +
"}\n" +
".weui-agree__checkbox:disabled:before {\n" +
"  color: #ADADAD;\n" +
"}\n" +
".weui-loading {\n" +
"  width: 20px;\n" +
"  height: 20px;\n" +
"  display: inline-block;\n" +
"  vertical-align: middle;\n" +
"  -webkit-animation: weuiLoading 1s steps(12, end) infinite;\n" +
"          animation: weuiLoading 1s steps(12, end) infinite;\n" +
"  background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;\n" +
"  background-size: 100%;\n" +
"}\n" +
"@-webkit-keyframes weuiLoading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n" +
"            transform: rotate3d(0, 0, 1, 0deg);\n" +
"  }\n" +
"  100% {\n" +
"    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n" +
"            transform: rotate3d(0, 0, 1, 360deg);\n" +
"  }\n" +
"}\n" +
"@keyframes weuiLoading {\n" +
"  0% {\n" +
"    -webkit-transform: rotate3d(0, 0, 1, 0deg);\n" +
"            transform: rotate3d(0, 0, 1, 0deg);\n" +
"  }\n" +
"  100% {\n" +
"    -webkit-transform: rotate3d(0, 0, 1, 360deg);\n" +
"            transform: rotate3d(0, 0, 1, 360deg);\n" +
"  }\n" +
"}\n" +
".weui-slider {\n" +
"  padding: 15px 18px;\n" +
"  -webkit-user-select: none;\n" +
"          user-select: none;\n" +
"}\n" +
".weui-slider__inner {\n" +
"  position: relative;\n" +
"  height: 2px;\n" +
"  background-color: #E9E9E9;\n" +
"}\n" +
".weui-slider__track {\n" +
"  height: 2px;\n" +
"  background-color: #1AAD19;\n" +
"  width: 0;\n" +
"}\n" +
".weui-slider__handler {\n" +
"  position: absolute;\n" +
"  left: 0;\n" +
"  top: 50%;\n" +
"  width: 28px;\n" +
"  height: 28px;\n" +
"  margin-left: -14px;\n" +
"  margin-top: -14px;\n" +
"  border-radius: 50%;\n" +
"  background-color: #FFFFFF;\n" +
"  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);\n" +
"}\n" +
".weui-slider-box {\n" +
"  display: -webkit-box;\n" +
"  display: -webkit-flex;\n" +
"  display: flex;\n" +
"  -webkit-box-align: center;\n" +
"  -webkit-align-items: center;\n" +
"          align-items: center;\n" +
"}\n" +
".weui-slider-box .weui-slider {\n" +
"  -webkit-box-flex: 1;\n" +
"  -webkit-flex: 1;\n" +
"          flex: 1;\n" +
"}\n" +
".weui-slider-box__value {\n" +
"  margin-left: .5em;\n" +
"  min-width: 24px;\n" +
"  color: #888888;\n" +
"  text-align: center;\n" +
"  font-size: 14px;\n" +
"}\n" +
"\n" +
"/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlL2Jhc2UvcmVzZXQubGVzcyIsInN0eWxlL3dldWkuY3NzIiwic3R5bGUvYmFzZS9taXhpbi9tb2JpbGUubGVzcyIsInN0eWxlL2ljb24vd2V1aS1mb250Lmxlc3MiLCJzdHlsZS9pY29uL3dldWktaWNvbl9mb250Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZ2xvYmFsLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZGVmYXVsdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYnV0dG9uL3dldWktYnRuX3ByaW1hcnkubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ0bl93YXJuLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1idXR0b24vd2V1aS1idG5fZGlzYWJsZWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWJ1dHRvbi93ZXVpLWJ0bl9wbGFpbi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYnV0dG9uL3dldWktYnV0dG9uLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktY2VsbF9nbG9iYWwubGVzcyIsInN0eWxlL2Jhc2UvbWl4aW4vc2V0T25lcHgubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1hY2Nlc3MubGVzcyIsInN0eWxlL2Jhc2UvbWl4aW4vc2V0QXJyb3cubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1jaGVjay93ZXVpLWNoZWNrX2NvbW1vbi5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWNoZWNrL3dldWktcmFkaW8ubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1jaGVjay93ZXVpLWNoZWNrYm94Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktZm9ybS93ZXVpLWZvcm1fY29tbW9uLmxlc3MiLCJzdHlsZS9iYXNlL21peGluL3RleHQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1mb3JtL3dldWktZm9ybS1wcmV2aWV3Lmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1jZWxsL3dldWktZm9ybS93ZXVpLXNlbGVjdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWZvcm0vd2V1aS12Y29kZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktY2VsbC93ZXVpLWdhbGxlcnkubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS1zd2l0Y2gubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWNlbGwvd2V1aS11cGxvYWRlci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGFnZS93ZXVpLW1zZy5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGFnZS93ZXVpLWFydGljbGUubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRhYi93ZXVpLXRhYmJhci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGFiL3dldWktbmF2YmFyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS10YWIvd2V1aS10YWIubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXByb2dyZXNzL3dldWktcHJvZ3Jlc3MubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXBhbmVsL3dldWktcGFuZWwubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLW1lZGlhLWJveC93ZXVpLW1lZGlhLWJveC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktZ3JpZC93ZXVpLWdyaWQubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLWZvb3Rlci93ZXVpLWZvb3Rlci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktZmxleC93ZXVpLWZsZXgubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS1kaWFsb2cubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS10b2FzdC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGlwcy93ZXVpLW1hc2subGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXRpcHMvd2V1aS1hY3Rpb25zaGVldC5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktdGlwcy93ZXVpLWxvYWRtb3JlLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS10aXBzL3dldWktYmFkZ2UubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXNlYXJjaGJhci93ZXVpLXNlYXJjaGJhci5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktcGlja2VyL3dldWktcGlja2VyLmxlc3MiLCJzdHlsZS93aWRnZXQvd2V1aS1hbmltYXRlL3dldWktYW5pbWF0ZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktYWdyZWUvd2V1aS1hZ3JlZS5sZXNzIiwic3R5bGUvd2lkZ2V0L3dldWktbG9hZGluZy93ZXVpLWxvYWRpbmcubGVzcyIsInN0eWxlL3dpZGdldC93ZXVpLXNsaWRlci93ZXVpLXNsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7RUFDSSwyQkFBQTtFQUNBLCtCQUFBO0NDREg7QURJRDtFQUNJLGlCQUFBO0VBQ0EsOERBQUE7Q0NGSDtBREtEO0VBQ0ksVUFBQTtFQUNBLFdBQUE7Q0NISDtBRE1EO0VBQ0ksVUFBQTtDQ0pIO0FET0Q7RUFDSSxzQkFBQTtFRXJCQSw4Q0FBQTtDRGlCSDtBRWxCRDtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFtTUFBQTtDRm9CSDtBRWhCRDs7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7Q0ZtQkg7QUVsQkc7O0VBRUksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0NGb0JQO0FFaEJEO0VBQTJCLGlCQUFBO0NGbUIxQjtBQUNELFNBQVM7QUVuQlQ7RUFBNkIsaUJBQUE7Q0ZzQjVCO0FBQ0QsU0FBUztBRXRCVDtFQUF5QixpQkFBQTtDRnlCeEI7QUFDRCxTQUFTO0FFekJUO0VBQWlDLGlCQUFBO0NGNEJoQztBQUNELFNBQVM7QUU1QlQ7RUFBOEIsaUJBQUE7Q0Yr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dWkuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImZuXCI7XHJcblxyXG5odG1sIHtcclxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICBmb250LWZhbWlseTogQHdldWlGb250RGVmYXVsdDtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5hIGltZyB7XHJcbiAgICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcbn0iLCJodG1sIHtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbS1mb250LCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuYSBpbWcge1xuICBib3JkZXI6IDA7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJ3ZXVpXCI7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUFFQUFBQUxBSUFBQXdBd1IxTlZRckQrcyswQUFBRTRBQUFBUWs5VEx6SkFLRXgrQUFBQmZBQUFBRlpqYldGdzY1Y0ZIUUFBQWh3QUFBSlFaMng1WnZDUlIvRUFBQVNVQUFBS3RHaGxZV1FMS0lOOUFBQUE0QUFBQURab2FHVmhDQ3dEK2dBQUFMd0FBQUFrYUcxMGVFSm8vLzhBQUFIVUFBQUFTR3h2WTJFWXFoVzZBQUFFYkFBQUFDWnRZWGh3QVNFQVZRQUFBUmdBQUFBZ2JtRnRaZU5jSHRnQUFBOUlBQUFCNW5CdmMzVDZiTGhMQUFBUk1BQUFBT1lBQVFBQUErZ0FBQUJhQStqLy8vLy9BK2tBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQklBQVFBQUFBRUFBQ2tDajNkZkR6ejFBQXNENkFBQUFBRFVFUjlYQUFBQUFOUVJIMWYvL3dBQUEra0Q2Z0FBQUFnQUFnQUFBQUFBQUFBQkFBQUFFZ0JKQUFVQUFBQUFBQUlBQUFBS0FBb0FBQUQvQUFBQUFBQUFBQUVBQUFBS0FCNEFMQUFCUkVaTVZBQUlBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFBQUFRT3dBWkFBQlFBSUFub0N2QUFBQUl3Q2VnSzhBQUFCNEFBeEFRSUFBQUlBQlFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVR1pGWkFCQTZnSHFFUVBvQUFBQVdnUHFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2ovL3dQb0FBQUQ2QUFBQUFBQUJRQUFBQU1BQUFBc0FBQUFCQUFBQVhRQUFRQUFBQUFBYmdBREFBRUFBQUFzQUFNQUNnQUFBWFFBQkFCQ0FBQUFCQUFFQUFFQUFPb1IvLzhBQU9vQi8vOEFBQUFCQUFRQUFBQUJBQUlBQXdBRUFBVUFCZ0FIQUFnQUNRQUtBQXNBREFBTkFBNEFEd0FRQUJFQUFBRUdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQU53QUFBQUFBQUFBRVFBQTZnRUFBT29CQUFBQUFRQUE2Z0lBQU9vQ0FBQUFBZ0FBNmdNQUFPb0RBQUFBQXdBQTZnUUFBT29FQUFBQUJBQUE2Z1VBQU9vRkFBQUFCUUFBNmdZQUFPb0dBQUFBQmdBQTZnY0FBT29IQUFBQUJ3QUE2Z2dBQU9vSUFBQUFDQUFBNmdrQUFPb0pBQUFBQ1FBQTZnb0FBT29LQUFBQUNnQUE2Z3NBQU9vTEFBQUFDd0FBNmd3QUFPb01BQUFBREFBQTZnMEFBT29OQUFBQURRQUE2ZzRBQU9vT0FBQUFEZ0FBNmc4QUFPb1BBQUFBRHdBQTZoQUFBT29RQUFBQUVBQUE2aEVBQU9vUkFBQUFFUUFBQUFBQVJnQ01BTklCSmdGNEFjUUNNZ0pnQXFnQy9BTklBNllEL2dST0JLQUU5QVZhQUFBQUFnQUFBQUFEcndPdEFCUUFLUUFBQVNJSEJnY0dGQmNXRnhZeU56WTNOalFuSmljbUF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBZlY0WjJRN1BEdzdaR2Z3Wm1RN1BEdzdaR1o0Ymw1Yk5qYzNObHRlMjE1Yk5qYzNObHRlQTYwOE8yUm44R2RqT3p3OE8yTm44R2RrT3p6OHJ6YzFXMTdiWGx3MU56YzFYRjdiWGxzMU53QUFBQUFDQUFBQUFBT3pBN01BRndBdEFBQUJJZ2NHQndZVkZCY1dGeFl6TWpjMk56WTFOQ2NtSnlZVEJ3WWlMd0VtTmpzQkVUUTJPd0V5RmhVUk16SVdBZTUyWjJRN1BUMDdaR2QyZkdwbU96NCtPMlpwSVhZT0tBNTJEZzBYWFFzSEpnY0xYUmNOQTdNK08yWnFmSFpuWkRzOVBUdGtaM1o5YVdZN1B2M3dtaElTbWhJYUFSY0lDd3NJL3VrYUFBTUFBQUFBQStVRDVRQVhBQ01BTEFBQUFTSUhCZ2NHRlJRWEZoY1dNekkzTmpjMk5UUW5KaWNtQXhRckFTSTFBelE3QVRJSEp5SW1ORFl5RmhRR0FlNkVjbTlCUkVSQmIzS0VpWFp4UWtSRVFuRjFhUUl4QXdnQ1FnTUJJeElaR1NRWkdRUGtSRUp4ZG9tRWNtOUJSRVJCYjNLRWluVnhRa1Q5SFFJQ0FXSUNBakVaSXhrWkl4a0FBQUFBQXdBQUFBQURzUVBrQUJzQUtnQXpBQUFCQmdjR0J3WUhCamNSRkJjV0Z4WVhOamMyTnpZMUVTUVhKaWNtQnpNeUZoVURGQVlyQVNJbkF6UTJFeUltTkRZeUZoUUdBZlZCUVRnN0xEdC9JRWMrYkY1c2JGMXRQVWorMktoUVFWVnZOQVFHREFNQ0pnVUJDd1llRHhZV0hoVVZBK1FQRWc0U0RoSXBDdjZ0ajNWa1NUNGRIVDVKWkhXUEFWTmVOUmtTR1B3R0JQN0dBZ01GQVRvRUJ2NUFGUjhWRlI4VkFBQUFBZ0FBQUFBRHNRUGtBQmtBTGdBQUFRWUhCZ2MyQlJFVUZ4WVhGaGMyTnpZM05qVVJKQmNtSnlZVEFRWXZBU1kvQVRZeUh3RVdOamNsTmpJZkFSWUI5VlZWUWsrdi90RkhQbXhlYkd4ZGJUMUkvdEd2VDBKVm8vN1ZCQVNLQXdNU0FRVUJjUUVGQWdFU0FnVUJFUVFENHhNWUVoazNZUDZzam5WbFNEOGNIRDlJWlhXT0FWUmdOeGtTR1A2Mi90a0RBNDhFQkJrQ0FWWUNBUUhsQVFJUUJBQUFBQUFDQUFBQUFBUGtBK1FBRndBdEFBQUJJZ2NHQndZVkZCY1dGeFl6TWpjMk56WTFOQ2NtSnlZVEFRWWlMd0VtUHdFMk1oOEJGakkzQVRZeUh3RVdBZTZFY205QlEwTkNibk9EaVhWeFFrUkVRbkYxa2Y2Z0FRVUJvd01ERmdFRkFZVUNCUUVCUXdJRkFSVUVBK05FUW5GMWlZTnpia0pEUTBGdmNvU0pkWEZDUlA2ai9xVUJBYWdFQlI0Q0FXWUJBUUVOQWdJVkJBQUFBQVFBQUFBQUE2OERyUUFVQUNrQVB3QkRBQUFCSWdjR0J3WVVGeFlYRmpJM05qYzJOQ2NtSnlZRElpY21KeVkwTnpZM05qSVhGaGNXRkFjR0J3WVRCUTRCTHdFbUJnOEJCaFlmQVJZeU53RStBU1lpRnpBZkFRSDFlR2RrT3p3OE8yUm44R1prT3p3OE8yUm1lRzVlV3pZM056WmJYdHRlV3pZM056WmJYbW4rOWdZU0JtQUdEd1VEQlFFR2ZRVVFCZ0VsQlFFTEVCVUJBUU90UER0a1ovQm5ZenM4UER0alovQm5aRHM4L0s4M05WdGUyMTVjTlRjM05WeGUyMTViTlRjQ0p0MEZBUVZKQlFJR0JBY1JCb0FHQlFFaEJROExCQUVCQUFBQkFBQUFBQU83QXpvQUZ3QUFFeTRCUHdFK0FSOEJGalkzQVRZV0Z5Y1dGQWNCQmlJblBRb0dCd1VIR2d6TERDRUxBaDBMSHdzTkNncjl1UW9lQ2dHekN5RU9DdzBIQ1pNSkFRb0J2Z2tDQ2cwTEhRdjlzUXNLQUFBQUFBSUFBQUFBQStVRDVnQVhBQ3dBQUFFaUJ3WUhCaFVVRnhZWEZqTXlOelkzTmpVMEp5WW5KaE1IQmk4QkppY21OUk0wTmpzQk1oWVZFeGNlQVFIdmhISnZRVU5EUW01emc0bDFjVUpFUkVKeGRWY1FBd1Q2QXdJRUVBTUNLd0lERHNVQ0FRUGxSRUp4ZFltRGMyNUNRME5CYjNLRWlYVnhRa1Q5Vmh3RUFuY0NBZ01HQVhvQ0F3TUMvcTJGQWdRQUFBUUFBQUFBQTY4RHJRQURBQmdBTFFBekFBQUJNQjhCQXlJSEJnY0dGQmNXRnhZeU56WTNOalFuSmljbUF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBeU1WTXpVakF1VUJBZko0WjJRN1BEdzdaR2Z3Wm1RN1BEdzdaR1o0Ymw1Yk5qYzNObHRlMjE1Yk5qYzNObHRlbXlUOTJRS0RBUUVCTER3N1pHZndaMk03UER3N1kyZndaMlE3UFB5dk56VmJYdHRlWERVM056VmNYdHRlV3pVM0FqSDlKQUFBQUFNQUFBQUFBK1FENUFBWEFDY0FNQUFBQVNJSEJnY0dGUlFYRmhjV016STNOamMyTlRRbkppY21Bek15RmhVREZBWXJBU0ltTlFNME5oTWlKalEyTWhZVUJnSHVoSEp2UVVORFFtNXpnNGwxY1VKRVJFSnhkWjQyQkFZTUF3SW5Bd01NQmg4UEZoWWVGaFlENDBSQ2NYV0pnM051UWtORFFXOXloSWwxY1VKRS92WUdCZjdBQWdNREFnRkFCUWIrTmhZZkZoWWZGZ0FBQkFBQUFBQUR3QVBBQUFnQUVnQW9BRDBBQUFFeU5qUW1JZ1lVRmhjakZUTVJJeFV6TlNNRElnY0dCd1lWRkJZWEZqTXlOelkzTmpVMEp5NEJBeUluSmljbU5EYzJOell5RnhZWEZoUUhCZ2NHQWZRWUlTRXdJU0ZSanprNXlUb3JoRzVyUFQ5OWFtK0RkbWhsUEQ0K1BNeUZiVjViTlRjM05WdGUybDViTlRjM05WdGVBcUFpTHlJaUx5STVIZjdFSEJ3Q3NUODlhMjZFZDh3OFBqNDhaV2gyZzI5cWZmeWpOelZiWHRwZVd6VTNOelZiWHRwZVd6VTNBQUFEQUFBQUFBT29BNmdBQ3dBZ0FEVUFBQUVISndjWEJ4YzNGemNuTndNaUJ3WUhCaFFYRmhjV01qYzJOelkwSnlZbkpnTWlKeVluSmpRM05qYzJNaGNXRnhZVUJ3WUhCZ0tPbXBvY21wb2NtcG9jbXBxMmRtWmlPanM3T21KbTdHWmlPanM3T21KbWRtdGRXVFEyTmpSWlhkWmRXVFEyTmpSWlhRS3FtcG9jbXBvY21wb2NtcG9CR1RzNlltYnNabUk2T3pzNlltYnNabUk2Ty96Q05qUlpYZFpkV1RRMk5qUlpYZFpkV1RRMkFBTUFBQUFBQStrRDZnQWFBQzhBTUFBQUFRWUhCaU1pSnlZbkpqUTNOamMyTWhjV0Z4WVZGQWNHQndFSEFUSTNOamMyTkNjbUp5WWlCd1lIQmhRWEZoY1dNd0tPTlVCQ1IyMWRXalUzTnpWYVhkcGRXelUyR0JjckFTTTUvZUJYUzBnckt5c3JTRXV1U2trcUxDd3FTVXBYQVNNckZ4ZzJOVnRkMmwxYU5UYzNOVnBkYlVkQ1FEWCszamtCR1NzclNFdXVTa2txTEN3cVNVcXVTMGdyS3dBQy8vOEFBQVBvQStnQUZBQXdBQUFCSWdjR0J3WVFGeFlYRmlBM05qYzJFQ2NtSnlZVEZnNEJJaThCQndZdUFUUS9BU2NtUGdFV0h3RTNOaDRCQmc4QkFmU0lkSEZEUkVSRGNYUUJFSFJ4UTBSRVEzRjBTUW9CRkJzS29xZ0tHeE1LcUtJS0FSUWJDcUtvQ2hzVUFRcW9BK2hFUTNGMC92QjBjVU5FUkVOeGRBRVFkSEZEUlAxakNoc1RDcWlpQ2dFVUd3cWlxQW9iRkFFS3FLSUtBUlFiQ3FJQUFBSUFBQUFBQStRRDVBQVhBRFFBQUFFaUJ3WUhCaFVVRnhZWEZqTXlOelkzTmpVMEp5WW5KaE1VQmlNRkZ4WVVEd0VHTHdFdUFUOEJOaDhCRmhRUEFRVXlGaDBCQWU2RWNtOUJRME5DYm5PRGlYVnhRa1JFUW5GMWZ3UUMvcEdEQVFFVkF3VHNBZ0VDN0FRRUZBSUJoQUZ3QWdNRDQwUkNjWFdKZzNOdVFrTkRRVzl5aElsMWNVSkUvZllDQXd1VkFnUUNGQVFFMEFJRkF0RUVCQlFDQlFHVkN3TURKd0FBQUFVQUFBQUFBOVFEMHdBakFDY0FOd0JIQUVnQUFBRVJGQVlqSVNJbU5SRWpJaVk5QVRRMk15RTFORFl6SVRJV0hRRWhNaFlkQVJRR0l5RVJJUkVISWdZVkVSUVdPd0V5TmpVUk5DWWpJU0lHRlJFVUZqc0JNalkxRVRRbUt3RURleVliL1hZYkprTUpEUTBKQVFZWkVnRXZFeGtCQmdrTkRRbjlDUUpjMFFrTkRRa3RDUTBOQ2Y3c0NRME5DUzBKRFEwSkxRTWkvVFFiSmlZYkFzd01DaXdKRFM0U0dSa1NMZzBKTEFvTS9Vd0N0R3NOQ2Y1TkNRME5DUUd6Q1EwTkNmNU5DUTBOQ1FHekNRMEFBQUFBRUFER0FBRUFBQUFBQUFFQUJBQUFBQUVBQUFBQUFBSUFCd0FFQUFFQUFBQUFBQU1BQkFBTEFBRUFBQUFBQUFRQUJBQVBBQUVBQUFBQUFBVUFDd0FUQUFFQUFBQUFBQVlBQkFBZUFBRUFBQUFBQUFvQUt3QWlBQUVBQUFBQUFBc0FFd0JOQUFNQUFRUUpBQUVBQ0FCZ0FBTUFBUVFKQUFJQURnQm9BQU1BQVFRSkFBTUFDQUIyQUFNQUFRUUpBQVFBQ0FCK0FBTUFBUVFKQUFVQUZnQ0dBQU1BQVFRSkFBWUFDQUNjQUFNQUFRUUpBQW9BVmdDa0FBTUFBUVFKQUFzQUpnRDZkMlYxYVZKbFozVnNZWEozWlhWcGQyVjFhVlpsY25OcGIyNGdNUzR3ZDJWMWFVZGxibVZ5WVhSbFpDQmllU0J6ZG1jeWRIUm1JR1p5YjIwZ1JtOXVkR1ZzYkc4Z2NISnZhbVZqZEM1b2RIUndPaTh2Wm05dWRHVnNiRzh1WTI5dEFIY0FaUUIxQUdrQVVnQmxBR2NBZFFCc0FHRUFjZ0IzQUdVQWRRQnBBSGNBWlFCMUFHa0FWZ0JsQUhJQWN3QnBBRzhBYmdBZ0FERUFMZ0F3QUhjQVpRQjFBR2tBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQWdBQUFBQUFBQUFLQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVNBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBQVpqYVhKamJHVUlaRzkzYm14dllXUUVhVzVtYnd4ellXWmxYM04xWTJObGMzTUpjMkZtWlY5M1lYSnVCM04xWTJObGMzTU9jM1ZqWTJWemN5MWphWEpqYkdVUmMzVmpZMlZ6Y3kxdWJ5MWphWEpqYkdVSGQyRnBkR2x1Wnc1M1lXbDBhVzVuTFdOcGNtTnNaUVIzWVhKdUMybHVabTh0WTJseVkyeGxCbU5oYm1ObGJBWnpaV0Z5WTJnRlkyeGxZWElFWW1GamF3WmtaV3hsZEdVQUFBQUEnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5bY2xhc3NePVwid2V1aS1pY29uLVwiXSxcbltjbGFzcyo9XCIgd2V1aS1pY29uLVwiXSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIFwid2V1aVwiO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cbltjbGFzc149XCJ3ZXVpLWljb24tXCJdOmJlZm9yZSxcbltjbGFzcyo9XCIgd2V1aS1pY29uLVwiXTpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAuMmVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yZW07XG59XG4ud2V1aS1pY29uLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwMVwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tZG93bmxvYWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDJcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLWluZm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDNcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXNhZmVfc3VjY2VzczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwNFwiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc2FmZV93YXJuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTA1XCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1zdWNjZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTA2XCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1zdWNjZXNzLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwN1wiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDhcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXdhaXRpbmc6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMDlcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLXdhaXRpbmctY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTBBXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi13YXJuOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTBCXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1pbmZvLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcRUEwQ1wiO1xufVxuLyogJ+6ggCcgKi9cbi53ZXVpLWljb24tY2FuY2VsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTBEXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMEVcIjtcbn1cbi8qICfuoIAnICovXG4ud2V1aS1pY29uLWNsZWFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTBGXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1iYWNrOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxFQTEwXCI7XG59XG4vKiAn7qCAJyAqL1xuLndldWktaWNvbi1kZWxldGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXEVBMTFcIjtcbn1cbi8qICfuoIAnICovXG5bY2xhc3NePVwid2V1aS1pY29uX1wiXTpiZWZvcmUsXG5bY2xhc3MqPVwiIHdldWktaWNvbl9cIl06YmVmb3JlIHtcbiAgbWFyZ2luOiAwO1xufVxuLndldWktaWNvbi1zdWNjZXNzIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzA5QkIwNztcbn1cbi53ZXVpLWljb24td2FpdGluZyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMxMEFFRkY7XG59XG4ud2V1aS1pY29uLXdhcm4ge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjRjQzNTMwO1xufVxuLndldWktaWNvbi1pbmZvIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzEwQUVGRjtcbn1cbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGUge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi1zdWNjZXNzLW5vLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS1pY29uLXdhaXRpbmctY2lyY2xlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogIzEwQUVGRjtcbn1cbi53ZXVpLWljb24tY2lyY2xlIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogI0M5QzlDOTtcbn1cbi53ZXVpLWljb24tZG93bmxvYWQge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi1pbmZvLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS1pY29uLXNhZmUtc3VjY2VzcyB7XG4gIGNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktaWNvbi1zYWZlLXdhcm4ge1xuICBjb2xvcjogI0ZGQkUwMDtcbn1cbi53ZXVpLWljb24tY2FuY2VsIHtcbiAgY29sb3I6ICNGNDM1MzA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi53ZXVpLWljb24tc2VhcmNoIHtcbiAgY29sb3I6ICNCMkIyQjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi53ZXVpLWljb24tY2xlYXIge1xuICBjb2xvcjogI0IyQjJCMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLndldWktaWNvbi1kZWxldGUud2V1aS1pY29uX2dhbGxlcnktZGVsZXRlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi53ZXVpLWljb25fbXNnIHtcbiAgZm9udC1zaXplOiA5M3B4O1xufVxuLndldWktaWNvbl9tc2cud2V1aS1pY29uLXdhcm4ge1xuICBjb2xvcjogI0Y3NjI2MDtcbn1cbi53ZXVpLWljb25fbXNnLXByaW1hcnkge1xuICBmb250LXNpemU6IDkzcHg7XG59XG4ud2V1aS1pY29uX21zZy1wcmltYXJ5LndldWktaWNvbi13YXJuIHtcbiAgY29sb3I6ICNDOUM5Qzk7XG59XG4ud2V1aS1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsaW5lLWhlaWdodDogMi41NTU1NTU1NjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1idG46YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ud2V1aS1idG5faW5saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLndldWktYnRuX2RlZmF1bHQge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4RjhGODtcbn1cbi53ZXVpLWJ0bl9kZWZhdWx0Om5vdCgud2V1aS1idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi53ZXVpLWJ0bl9kZWZhdWx0Om5vdCgud2V1aS1idG5fZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERURFREU7XG59XG4ud2V1aS1idG5fcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxQUFEMTk7XG59XG4ud2V1aS1idG5fcHJpbWFyeTpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1idG5fcHJpbWFyeTpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc5QjE2O1xufVxuLndldWktYnRuX3dhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTY0MzQwO1xufVxuLndldWktYnRuX3dhcm46bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6dmlzaXRlZCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktYnRuX3dhcm46bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NFM0MzOTtcbn1cbi53ZXVpLWJ0bl9kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG4ud2V1aS1idG5fZGlzYWJsZWQud2V1aS1idG5fZGVmYXVsdCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGN0Y3Rjc7XG59XG4ud2V1aS1idG5fZGlzYWJsZWQud2V1aS1idG5fcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5RUQ5OUQ7XG59XG4ud2V1aS1idG5fZGlzYWJsZWQud2V1aS1idG5fd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQzhCODk7XG59XG4ud2V1aS1idG5fcGxhaW4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjMWFhZDE5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWFhZDE5O1xufVxuLndldWktYnRuX3BsYWluLXByaW1hcnk6bm90KC53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMjYsIDE3MywgMjUsIDAuNik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNiwgMTczLCAyNSwgMC42KTtcbn1cbi53ZXVpLWJ0bl9wbGFpbi1wcmltYXJ5OmFmdGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuLndldWktYnRuX3BsYWluLWRlZmF1bHQge1xuICBjb2xvcjogIzM1MzUzNTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM1MzUzNTtcbn1cbi53ZXVpLWJ0bl9wbGFpbi1kZWZhdWx0Om5vdCgud2V1aS1idG5fcGxhaW4tZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDUzLCA1MywgNTMsIDAuNik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MywgNTMsIDUzLCAwLjYpO1xufVxuLndldWktYnRuX3BsYWluLWRlZmF1bHQ6YWZ0ZXIge1xuICBib3JkZXItd2lkdGg6IDA7XG59XG4ud2V1aS1idG5fcGxhaW4tZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbmJ1dHRvbi53ZXVpLWJ0bixcbmlucHV0LndldWktYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuYnV0dG9uLndldWktYnRuOmZvY3VzLFxuaW5wdXQud2V1aS1idG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuYnV0dG9uLndldWktYnRuX2lubGluZSxcbmlucHV0LndldWktYnRuX2lubGluZSxcbmJ1dHRvbi53ZXVpLWJ0bl9taW5pLFxuaW5wdXQud2V1aS1idG5fbWluaSB7XG4gIHdpZHRoOiBhdXRvO1xufVxuYnV0dG9uLndldWktYnRuX3BsYWluLXByaW1hcnksXG5pbnB1dC53ZXVpLWJ0bl9wbGFpbi1wcmltYXJ5LFxuYnV0dG9uLndldWktYnRuX3BsYWluLWRlZmF1bHQsXG5pbnB1dC53ZXVpLWJ0bl9wbGFpbi1kZWZhdWx0IHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLndldWktYnRuX21pbmkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAgMS4zMmVtO1xuICBsaW5lLWhlaWdodDogMi4zO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4vKmdhcCBiZXR3ZWVuIGJ0biovXG4ud2V1aS1idG4gKyAud2V1aS1idG4ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLndldWktYnRuLndldWktYnRuX2lubGluZSArIC53ZXVpLWJ0bi53ZXVpLWJ0bl9pbmxpbmUge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi53ZXVpLWJ0bi1hcmVhIHtcbiAgbWFyZ2luOiAxLjE3NjQ3MDU5ZW0gMTVweCAwLjNlbTtcbn1cbi53ZXVpLWJ0bi1hcmVhX2lubGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1idG4tYXJlYV9pbmxpbmUgLndldWktYnRuIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMTtcbn1cbi53ZXVpLWJ0bi1hcmVhX2lubGluZSAud2V1aS1idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi53ZXVpLWNlbGxzIHtcbiAgbWFyZ2luLXRvcDogMS4xNzY0NzA1OWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBsaW5lLWhlaWdodDogMS40MTE3NjQ3MTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1jZWxsczpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1jZWxsczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWNlbGxzX190aXRsZSB7XG4gIG1hcmdpbi10b3A6IC43N2VtO1xuICBtYXJnaW4tYm90dG9tOiAuM2VtO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1jZWxsc19fdGl0bGUgKyAud2V1aS1jZWxscyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ud2V1aS1jZWxsc19fdGlwcyB7XG4gIG1hcmdpbi10b3A6IC4zZW07XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi53ZXVpLWNlbGwge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZXVpLWNlbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICBsZWZ0OiAxNXB4O1xufVxuLndldWktY2VsbDpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktY2VsbF9wcmltYXJ5IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4ud2V1aS1jZWxsX19iZCB7XG4gIGZsZXg6IDE7XG59XG4ud2V1aS1jZWxsX19mdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWNlbGxfYWNjZXNzIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbi53ZXVpLWNlbGxfYWNjZXNzOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG59XG4ud2V1aS1jZWxsX2FjY2VzcyAud2V1aS1jZWxsX19mdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi53ZXVpLWNlbGxfYWNjZXNzIC53ZXVpLWNlbGxfX2Z0OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAwIDA7XG4gIGJvcmRlci1jb2xvcjogI0M4QzhDRDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgdHJhbnNmb3JtOiBtYXRyaXgoMC43MSwgMC43MSwgLTAuNzEsIDAuNzEsIDAsIDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgcmlnaHQ6IDJweDtcbn1cbi53ZXVpLWNlbGxfbGluayB7XG4gIGNvbG9yOiAjNTg2Qzk0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1jZWxsX2xpbms6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2V1aS1jaGVja19fbGFiZWwge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4ud2V1aS1jaGVja19fbGFiZWw6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcbn1cbi53ZXVpLWNoZWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTk5OWVtO1xufVxuLndldWktY2VsbHNfcmFkaW8gLndldWktY2VsbF9fZnQge1xuICBwYWRkaW5nLWxlZnQ6IDAuMzVlbTtcbn1cbi53ZXVpLWNlbGxzX3JhZGlvIC53ZXVpLWNoZWNrOmNoZWNrZWQgKyAud2V1aS1pY29uLWNoZWNrZWQ6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6ICdcXEVBMDgnO1xuICBjb2xvcjogIzA5QkIwNztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLndldWktY2VsbHNfY2hlY2tib3ggLndldWktY2VsbF9faGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjM1ZW07XG59XG4ud2V1aS1jZWxsc19jaGVja2JveCAud2V1aS1pY29uLWNoZWNrZWQ6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcRUEwMSc7XG4gIGNvbG9yOiAjQzlDOUM5O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktY2VsbHNfY2hlY2tib3ggLndldWktY2hlY2s6Y2hlY2tlZCArIC53ZXVpLWljb24tY2hlY2tlZDpiZWZvcmUge1xuICBjb250ZW50OiAnXFxFQTA2JztcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTA1cHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLndldWktaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBoZWlnaHQ6IDEuNDExNzY0NzFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDExNzY0NzE7XG59XG4ud2V1aS1pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbi53ZXVpLWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ud2V1aS10ZXh0YXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDA7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG91dGxpbmU6IDA7XG59XG4ud2V1aS10ZXh0YXJlYS1jb3VudGVyIHtcbiAgY29sb3I6ICNCMkIyQjI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndldWktY2VsbF93YXJuIC53ZXVpLXRleHRhcmVhLWNvdW50ZXIge1xuICBjb2xvcjogI0U2NDM0MDtcbn1cbi53ZXVpLXRvcHRpcHMge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIHotaW5kZXg6IDUwMDA7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLndldWktdG9wdGlwc193YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2NDM0MDtcbn1cbi53ZXVpLWNlbGxzX2Zvcm0gLndldWktY2VsbF9fZnQge1xuICBmb250LXNpemU6IDA7XG59XG4ud2V1aS1jZWxsc19mb3JtIC53ZXVpLWljb24td2FybiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1jZWxsc19mb3JtIGlucHV0LFxuLndldWktY2VsbHNfZm9ybSB0ZXh0YXJlYSxcbi53ZXVpLWNlbGxzX2Zvcm0gbGFiZWxbZm9yXSB7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLWNlbGxfd2FybiB7XG4gIGNvbG9yOiAjRTY0MzQwO1xufVxuLndldWktY2VsbF93YXJuIC53ZXVpLWljb24td2FybiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi53ZXVpLWZvcm0tcHJldmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLWZvcm0tcHJldmlldzpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXc6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2hkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogMi41ZW07XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2hkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICBsZWZ0OiAxNXB4O1xufVxuLndldWktZm9ybS1wcmV2aWV3X19oZCAud2V1aS1mb3JtLXByZXZpZXdfX3ZhbHVlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19iZCB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgZm9udC1zaXplOiAuOWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19mdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1mb3JtLXByZXZpZXdfX2Z0OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDVENUQ2O1xuICBjb2xvcjogI0Q1RDVENjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktZm9ybS1wcmV2aWV3X19pdGVtIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fbGFiZWwge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIG1pbi13aWR0aDogNGVtO1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1hbGlnbi1sYXN0OiBqdXN0aWZ5O1xufVxuLndldWktZm9ybS1wcmV2aWV3X192YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgY29sb3I6ICMzQ0M1MUY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuYnV0dG9uLndldWktZm9ybS1wcmV2aWV3X19idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuLndldWktZm9ybS1wcmV2aWV3X19idG46YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Q1RDVENjtcbiAgY29sb3I6ICNENUQ1RDY7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuX2RlZmF1bHQge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWZvcm0tcHJldmlld19fYnRuX3ByaW1hcnkge1xuICBjb2xvcjogIzBCQjIwQztcbn1cbi53ZXVpLWNlbGxfc2VsZWN0IHtcbiAgcGFkZGluZzogMDtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0IC53ZXVpLXNlbGVjdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdCAud2V1aS1jZWxsX19iZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuLndldWktc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0LWJlZm9yZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG4ud2V1aS1jZWxsX3NlbGVjdC1iZWZvcmUgLndldWktc2VsZWN0IHtcbiAgd2lkdGg6IDEwNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2hkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2hkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDFweDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRDlEOUQ5O1xuICBjb2xvcjogI0Q5RDlEOTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2hkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItd2lkdGg6IDJweCAycHggMCAwO1xuICBib3JkZXItY29sb3I6ICNDOEM4Q0Q7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsIDAuNzEsIC0wLjcxLCAwLjcxLCAwLCAwKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtNHB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2JkIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIC53ZXVpLWNlbGxfX2JkOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLWNlbGxfc2VsZWN0LWFmdGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLndldWktY2VsbF9zZWxlY3QtYWZ0ZXIgLndldWktc2VsZWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLndldWktY2VsbF92Y29kZSB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi53ZXVpLXZjb2RlLWltZyB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGhlaWdodDogNDRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZXVpLXZjb2RlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiAwIDAuNmVtIDAgMC43ZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0U1RTVFNTtcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICMzQ0M1MUY7XG59XG5idXR0b24ud2V1aS12Y29kZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBvdXRsaW5lOiAwO1xufVxuLndldWktdmNvZGUtYnRuOmFjdGl2ZSB7XG4gIGNvbG9yOiAjNTJhMzQxO1xufVxuLndldWktZ2FsbGVyeSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLndldWktZ2FsbGVyeV9faW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDYwcHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4ud2V1aS1nYWxsZXJ5X19vcHIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDBEMEQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndldWktZ2FsbGVyeV9fZGVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2V1aS1jZWxsX3N3aXRjaCB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG4ud2V1aS1zd2l0Y2gge1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuLndldWktc3dpdGNoLFxuLndldWktc3dpdGNoLWNwX19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNERkRGREY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcywgYm9yZGVyIDAuMXM7XG59XG4ud2V1aS1zd2l0Y2g6YmVmb3JlLFxuLndldWktc3dpdGNoLWNwX19ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGREZEO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgY3ViaWMtYmV6aWVyKDAuNDUsIDEsIDAuNCwgMSk7XG59XG4ud2V1aS1zd2l0Y2g6YWZ0ZXIsXG4ud2V1aS1zd2l0Y2gtY3BfX2JveDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzIGN1YmljLWJlemllcigwLjQsIDAuNCwgMC4yNSwgMS4zNSk7XG59XG4ud2V1aS1zd2l0Y2g6Y2hlY2tlZCxcbi53ZXVpLXN3aXRjaC1jcF9faW5wdXQ6Y2hlY2tlZCB+IC53ZXVpLXN3aXRjaC1jcF9fYm94IHtcbiAgYm9yZGVyLWNvbG9yOiAjMDRCRTAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDRCRTAyO1xufVxuLndldWktc3dpdGNoOmNoZWNrZWQ6YmVmb3JlLFxuLndldWktc3dpdGNoLWNwX19pbnB1dDpjaGVja2VkIH4gLndldWktc3dpdGNoLWNwX19ib3g6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbi53ZXVpLXN3aXRjaDpjaGVja2VkOmFmdGVyLFxuLndldWktc3dpdGNoLWNwX19pbnB1dDpjaGVja2VkIH4gLndldWktc3dpdGNoLWNwX19ib3g6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7XG59XG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOTk5OXB4O1xufVxuLndldWktc3dpdGNoLWNwX19ib3gge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53ZXVpLXVwbG9hZGVyX19oZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndldWktdXBsb2FkZXJfX3RpdGxlIHtcbiAgZmxleDogMTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbmZvIHtcbiAgY29sb3I6ICNCMkIyQjI7XG59XG4ud2V1aS11cGxvYWRlcl9fYmQge1xuICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICBtYXJnaW4tcmlnaHQ6IC05cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGUge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgd2lkdGg6IDc5cHg7XG4gIGhlaWdodDogNzlweDtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZV9zdGF0dXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZV9zdGF0dXM6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ud2V1aS11cGxvYWRlcl9fZmlsZV9zdGF0dXMgLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktdXBsb2FkZXJfX2ZpbGUtY29udGVudCAud2V1aS1pY29uLXdhcm4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ud2V1aS11cGxvYWRlcl9faW5wdXQtYm94IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgd2lkdGg6IDc3cHg7XG4gIGhlaWdodDogNzdweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q5RDlEOTtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YmVmb3JlLFxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlEOUQ5O1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDpiZWZvcmUge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDM5LjVweDtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWZ0ZXIge1xuICB3aWR0aDogMzkuNXB4O1xuICBoZWlnaHQ6IDJweDtcbn1cbi53ZXVpLXVwbG9hZGVyX19pbnB1dC1ib3g6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjOTk5OTk5O1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDphY3RpdmU6YmVmb3JlLFxuLndldWktdXBsb2FkZXJfX2lucHV0LWJveDphY3RpdmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5OTk5O1xufVxuLndldWktdXBsb2FkZXJfX2lucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLW1zZyB7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1tc2dfX2ljb24tYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4ud2V1aS1tc2dfX3RleHQtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi53ZXVpLW1zZ19fdGV4dC1hcmVhIGEge1xuICBjb2xvcjogIzU4NkM5NDtcbn1cbi53ZXVpLW1zZ19fdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53ZXVpLW1zZ19fZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1tc2dfX29wci1hcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi53ZXVpLW1zZ19fZXh0cmEtYXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1tc2dfX2V4dHJhLWFyZWEgYSB7XG4gIGNvbG9yOiAjNTg2Qzk0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDQzOHB4KSB7XG4gIC53ZXVpLW1zZ19fZXh0cmEtYXJlYSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLndldWktYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLndldWktYXJ0aWNsZSBzZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG59XG4ud2V1aS1hcnRpY2xlIGgxIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAuOWVtO1xufVxuLndldWktYXJ0aWNsZSBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogLjM0ZW07XG59XG4ud2V1aS1hcnRpY2xlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAuMzRlbTtcbn1cbi53ZXVpLWFydGljbGUgKiB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLndldWktYXJ0aWNsZSBwIHtcbiAgbWFyZ2luOiAwIDAgLjhlbTtcbn1cbi53ZXVpLXRhYmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogNTAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0ZBO1xufVxuLndldWktdGFiYmFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0MwQkZDNDtcbiAgY29sb3I6ICNDMEJGQzQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXRhYmJhcl9faXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBmb250LXNpemU6IDA7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi53ZXVpLXRhYmJhcl9faXRlbS53ZXVpLWJhcl9faXRlbV9vbiAud2V1aS10YWJiYXJfX2ljb24sXG4ud2V1aS10YWJiYXJfX2l0ZW0ud2V1aS1iYXJfX2l0ZW1fb24gLndldWktdGFiYmFyX19pY29uID4gaSxcbi53ZXVpLXRhYmJhcl9faXRlbS53ZXVpLWJhcl9faXRlbV9vbiAud2V1aS10YWJiYXJfX2xhYmVsIHtcbiAgY29sb3I6ICMwOUJCMDc7XG59XG4ud2V1aS10YWJiYXJfX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG59XG5pLndldWktdGFiYmFyX19pY29uLFxuLndldWktdGFiYmFyX19pY29uID4gaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS10YWJiYXJfX2ljb24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53ZXVpLXRhYmJhcl9fbGFiZWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG4ud2V1aS1uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDUwMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbn1cbi53ZXVpLW5hdmJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0NDQ0NDQztcbiAgY29sb3I6ICNDQ0NDQ0M7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLW5hdmJhciArIC53ZXVpLXRhYl9fcGFuZWwge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG4ud2V1aS1uYXZiYXJfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxM3B4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG4ud2V1aS1uYXZiYXJfX2l0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERURFRDtcbn1cbi53ZXVpLW5hdmJhcl9faXRlbS53ZXVpLWJhcl9faXRlbV9vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQUVBRUE7XG59XG4ud2V1aS1uYXZiYXJfX2l0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGNvbG9yOiAjQ0NDQ0NDO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDAuNSk7XG59XG4ud2V1aS1uYXZiYXJfX2l0ZW06bGFzdC1jaGlsZDphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS10YWIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53ZXVpLXRhYl9fcGFuZWwge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuLndldWktdGFiX19jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZXVpLXByb2dyZXNzX19iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUJFQkVCO1xuICBoZWlnaHQ6IDNweDtcbiAgZmxleDogMTtcbn1cbi53ZXVpLXByb2dyZXNzX19pbm5lci1iYXIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDlCQjA3O1xufVxuLndldWktcHJvZ3Jlc3NfX29wciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAwO1xufVxuLndldWktcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ud2V1aS1wYW5lbDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ud2V1aS1wYW5lbDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1wYW5lbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBhbmVsX19oZCB7XG4gIHBhZGRpbmc6IDE0cHggMTVweCAxMHB4O1xuICBjb2xvcjogIzk5OTk5OTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1wYW5lbF9faGQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG4gIGxlZnQ6IDE1cHg7XG59XG4ud2V1aS1tZWRpYS1ib3gge1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1tZWRpYS1ib3g6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBjb2xvcjogI0U1RTVFNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xuICBsZWZ0OiAxNXB4O1xufVxuLndldWktbWVkaWEtYm94OmZpcnN0LWNoaWxkOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5hLndldWktbWVkaWEtYm94IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmEud2V1aS1tZWRpYS1ib3g6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VDRUNFQztcbn1cbi53ZXVpLW1lZGlhLWJveF9fdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLndldWktbWVkaWEtYm94X19kZXNjIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG59XG4ud2V1aS1tZWRpYS1ib3hfX2luZm8ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQ0VDRUNFO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktbWVkaWEtYm94X19pbmZvX19tZXRhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbi53ZXVpLW1lZGlhLWJveF9faW5mb19fbWV0YV9leHRyYSB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDRUNFQ0U7XG59XG4ud2V1aS1tZWRpYS1ib3hfdGV4dCAud2V1aS1tZWRpYS1ib3hfX3RpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLndldWktbWVkaWEtYm94X2FwcG1zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2V1aS1tZWRpYS1ib3hfYXBwbXNnIC53ZXVpLW1lZGlhLWJveF9faGQge1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1tZWRpYS1ib3hfYXBwbXNnIC53ZXVpLW1lZGlhLWJveF9fdGh1bWIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi53ZXVpLW1lZGlhLWJveF9hcHBtc2cgLndldWktbWVkaWEtYm94X19iZCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cbi53ZXVpLW1lZGlhLWJveF9zbWFsbC1hcHBtc2cge1xuICBwYWRkaW5nOiAwO1xufVxuLndldWktbWVkaWEtYm94X3NtYWxsLWFwcG1zZyAud2V1aS1jZWxscyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4ud2V1aS1tZWRpYS1ib3hfc21hbGwtYXBwbXNnIC53ZXVpLWNlbGxzOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1ncmlkcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWdyaWRzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLWdyaWRzOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHdpZHRoOiAzMy4zMzMzMzMzMyU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ud2V1aS1ncmlkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0Q5RDlEOTtcbiAgY29sb3I6ICNEOUQ5RDk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbn1cbi53ZXVpLWdyaWQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1ncmlkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XG59XG4ud2V1aS1ncmlkX19pY29uIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ud2V1aS1ncmlkX19pY29uIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndldWktZ3JpZF9faWNvbiArIC53ZXVpLWdyaWRfX2xhYmVsIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLndldWktZ3JpZF9fbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLWZvb3RlciB7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53ZXVpLWZvb3RlciBhIHtcbiAgY29sb3I6ICM1ODZDOTQ7XG59XG4ud2V1aS1mb290ZXJfZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC41MmVtO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi53ZXVpLWZvb3Rlcl9fbGlua3Mge1xuICBmb250LXNpemU6IDA7XG59XG4ud2V1aS1mb290ZXJfX2xpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1hcmdpbjogMCAuNjJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2V1aS1mb290ZXJfX2xpbms6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0M3QzdDNztcbiAgY29sb3I6ICNDN0M3Qzc7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcbiAgbGVmdDogLTAuNjVlbTtcbiAgdG9wOiAuMzZlbTtcbiAgYm90dG9tOiAuMzZlbTtcbn1cbi53ZXVpLWZvb3Rlcl9fbGluazpmaXJzdC1jaGlsZDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktZm9vdGVyX190ZXh0IHtcbiAgcGFkZGluZzogMCAuMzRlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLndldWktZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1mbGV4X19pdGVtIHtcbiAgZmxleDogMTtcbn1cbi53ZXVpLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogNTAwMDtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktZGlhbG9nX19oZCB7XG4gIHBhZGRpbmc6IDEuM2VtIDEuNmVtIDAuNWVtO1xufVxuLndldWktZGlhbG9nX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi53ZXVpLWRpYWxvZ19fYmQge1xuICBwYWRkaW5nOiAwIDEuNmVtIDAuOGVtO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi53ZXVpLWRpYWxvZ19fYmQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nOiAyLjdlbSAyMHB4IDEuN2VtO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cbi53ZXVpLWRpYWxvZ19fZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ud2V1aS1kaWFsb2dfX2Z0OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDVENUQ2O1xuICBjb2xvcjogI0Q1RDVENjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktZGlhbG9nX19idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgY29sb3I6ICMzQ0M1MUY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ud2V1aS1kaWFsb2dfX2J0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuLndldWktZGlhbG9nX19idG46YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxcHg7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRDVENUQ2O1xuICBjb2xvcjogI0Q1RDVENjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xufVxuLndldWktZGlhbG9nX19idG46Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktZGlhbG9nX19idG5fZGVmYXVsdCB7XG4gIGNvbG9yOiAjMzUzNTM1O1xufVxuLndldWktZGlhbG9nX19idG5fcHJpbWFyeSB7XG4gIGNvbG9yOiAjMEJCMjBDO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDMwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2hkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2JkIHtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIHBhZGRpbmc6IDAuMjVlbSAxLjZlbSAyZW07XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2JkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZzogMS42ZW0gMS42ZW0gMmVtO1xuICBjb2xvcjogIzM1MzUzNTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1kaWFsb2dfX2Z0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBsaW5lLWhlaWdodDogNDJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAwIDEuNmVtIDAuN2VtO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fZnQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwIC44ZW07XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19idG46YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19idG46dmlzaXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktZGlhbG9nX19idG46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogLTAuOGVtO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWRpYWxvZ19fYnRuX2RlZmF1bHQge1xuICBjb2xvcjogIzgwODA4MDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAud2V1aS1kaWFsb2cge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbi53ZXVpLXRvYXN0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA1MDAwO1xuICB3aWR0aDogNy42ZW07XG4gIG1pbi1oZWlnaHQ6IDcuNmVtO1xuICB0b3A6IDE4MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMy44ZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMC43NSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi53ZXVpLWljb25fdG9hc3Qge1xuICBtYXJnaW46IDIycHggMCAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi53ZXVpLWljb25fdG9hc3Qud2V1aS1pY29uLXN1Y2Nlc3Mtbm8tY2lyY2xlOmJlZm9yZSB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDU1cHg7XG59XG4ud2V1aS1pY29uX3RvYXN0LndldWktbG9hZGluZyB7XG4gIG1hcmdpbjogMzBweCAwIDA7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi53ZXVpLXRvYXN0X19jb250ZW50IHtcbiAgbWFyZ2luOiAwIDAgMTVweDtcbn1cbi53ZXVpLW1hc2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuLndldWktbWFza190cmFuc3BhcmVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuLndldWktYWN0aW9uc2hlZXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogNTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRjQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fYWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuLndldWktYWN0aW9uc2hlZXRfX2NlbGwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fY2VsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEOUQ5RDk7XG4gIGNvbG9yOiAjRDlEOUQ5O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1hY3Rpb25zaGVldF9fY2VsbDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFQ0VDO1xufVxuLndldWktYWN0aW9uc2hlZXRfX2NlbGw6Zmlyc3QtY2hpbGQ6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXNraW5fYW5kcm9pZCAud2V1aS1hY3Rpb25zaGVldCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm90dG9tOiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgd2lkdGg6IDI3NHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19hY3Rpb24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19tZW51IHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLndldWktc2tpbl9hbmRyb2lkIC53ZXVpLWFjdGlvbnNoZWV0X19jZWxsIHtcbiAgcGFkZGluZzogMTNweCAyNHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktYWN0aW9uc2hlZXRfX2NlbGw6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG59XG4ud2V1aS1za2luX2FuZHJvaWQgLndldWktYWN0aW9uc2hlZXRfX2NlbGw6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbn1cbi53ZXVpLWFjdGlvbnNoZWV0X3RvZ2dsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xufVxuLndldWktbG9hZG1vcmUge1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDEuNWVtIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2V1aS1sb2FkbW9yZV9fdGlwcyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZXVpLWxvYWRtb3JlX2xpbmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0U1RTVFNTtcbiAgbWFyZ2luLXRvcDogMi40ZW07XG59XG4ud2V1aS1sb2FkbW9yZV9saW5lIC53ZXVpLWxvYWRtb3JlX190aXBzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjllbTtcbiAgcGFkZGluZzogMCAuNTVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG4ud2V1aS1sb2FkbW9yZV9kb3QgLndldWktbG9hZG1vcmVfX3RpcHMge1xuICBwYWRkaW5nOiAwIC4xNmVtO1xufVxuLndldWktbG9hZG1vcmVfZG90IC53ZXVpLWxvYWRtb3JlX190aXBzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IDA7XG4gIHRvcDogLTAuMTZlbTtcbn1cbi53ZXVpLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAuMTVlbSAuNGVtO1xuICBtaW4td2lkdGg6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2NDM0MDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLndldWktYmFkZ2VfZG90IHtcbiAgcGFkZGluZzogLjRlbTtcbiAgbWluLXdpZHRoOiAwO1xufVxuLndldWktc2VhcmNoLWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRjQ7XG59XG4ud2V1aS1zZWFyY2gtYmFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0Q3RDZEQztcbiAgY29sb3I6ICNEN0Q2REM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXNlYXJjaC1iYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEN0Q2REM7XG4gIGNvbG9yOiAjRDdENkRDO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1zZWFyY2gtYmFyLndldWktc2VhcmNoLWJhcl9mb2N1c2luZyAud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ud2V1aS1zZWFyY2gtYmFyLndldWktc2VhcmNoLWJhcl9mb2N1c2luZyAud2V1aS1zZWFyY2gtYmFyX19sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkY0O1xufVxuLndldWktc2VhcmNoLWJhcl9fZm9ybTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFNkU2RUE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2JveCAud2V1aS1zZWFyY2gtYmFyX19pbnB1dCB7XG4gIHBhZGRpbmc6IDRweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxLjQyODU3MTQzZW07XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0M2VtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19ib3ggLndldWktc2VhcmNoLWJhcl9faW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLndldWktc2VhcmNoLWJhcl9fYm94IC53ZXVpLWljb24tc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLndldWktc2VhcmNoLWJhcl9fYm94IC53ZXVpLWljb24tY2xlYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxcHg7XG4gIHJpZ2h0OiAxcHg7XG4gIGJvdHRvbTogMXB4O1xuICBsZWZ0OiAxcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzlCOUI5QjtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2xhYmVsIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2xhYmVsIC53ZXVpLWljb24tc2VhcmNoIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ud2V1aS1zZWFyY2gtYmFyX19jYW5jZWwtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogIzA5QkIwNztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi53ZXVpLXNlYXJjaC1iYXJfX2lucHV0Om5vdCg6dmFsaWQpIH4gLndldWktaWNvbi1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtcmVzdWx0cy1kZWNvcmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi53ZXVpLXBpY2tlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogNTAwMDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcbn1cbi53ZXVpLXBpY2tlcl9faGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmY5ZmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndldWktcGlja2VyX19oZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U1RTVFNTtcbiAgY29sb3I6ICNFNUU1RTU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMC41KTtcbn1cbi53ZXVpLXBpY2tlcl9fYWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiAjNTg2Qzk0O1xufVxuLndldWktcGlja2VyX19hY3Rpb246Zmlyc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLndldWktcGlja2VyX19hY3Rpb246bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLndldWktcGlja2VyX19iZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyMzhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi53ZXVpLXBpY2tlcl9fZ3JvdXAge1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53ZXVpLXBpY2tlcl9fbWFzayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCwgYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cbi53ZXVpLXBpY2tlcl9faW5kaWNhdG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDEwMnB4O1xuICB6LWluZGV4OiAzO1xufVxuLndldWktcGlja2VyX19pbmRpY2F0b3I6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBjb2xvcjogI0U1RTVFNTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xufVxuLndldWktcGlja2VyX19pbmRpY2F0b3I6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNUU1RTU7XG4gIGNvbG9yOiAjRTVFNUU1O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XG59XG4ud2V1aS1waWNrZXJfX2NvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ud2V1aS1waWNrZXJfX2l0ZW0ge1xuICBwYWRkaW5nOiA1cHggMCA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndldWktcGlja2VyX19pdGVtX2Rpc2FibGVkIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG4ud2V1aS1hbmltYXRlLXNsaWRlLXVwIHtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIGVhc2UgLjNzIGZvcndhcmRzO1xufVxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG4ud2V1aS1hbmltYXRlLXNsaWRlLWRvd24ge1xuICBhbmltYXRpb246IHNsaWRlRG93biBlYXNlIC4zcyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLndldWktYW5pbWF0ZS1mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAuM3MgZm9yd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4ud2V1aS1hbmltYXRlLWZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlT3V0IGVhc2UgLjNzIGZvcndhcmRzO1xufVxuLndldWktYWdyZWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogLjVlbSAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ud2V1aS1hZ3JlZSBhIHtcbiAgY29sb3I6ICM1ODZDOTQ7XG59XG4ud2V1aS1hZ3JlZV9fdGV4dCB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IDA7XG4gIHRvcDogMnB4O1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94OmNoZWNrZWQ6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwid2V1aVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBzcGVhazogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gIGNvbnRlbnQ6IFwiXFxFQTA4XCI7XG4gIGNvbG9yOiAjMDlCQjA3O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQ4JSkgc2NhbGUoMC43Myk7XG59XG4ud2V1aS1hZ3JlZV9fY2hlY2tib3g6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFMUUxO1xufVxuLndldWktYWdyZWVfX2NoZWNrYm94OmRpc2FibGVkOmJlZm9yZSB7XG4gIGNvbG9yOiAjQURBREFEO1xufVxuLndldWktbG9hZGluZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYW5pbWF0aW9uOiB3ZXVpTG9hZGluZyAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1qQWlJR2hsYVdkb2REMGlNVEl3SWlCMmFXVjNRbTk0UFNJd0lEQWdNVEF3SURFd01DSStQSEJoZEdnZ1ptbHNiRDBpYm05dVpTSWdaRDBpVFRBZ01HZ3hNREIyTVRBd1NEQjZJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpSVGxGT1VVNUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEQWdMVE13S1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSXprNE9UWTVOeUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3pNQ0F4TURVdU9UZ2dOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqT1VJNU9UbEJJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtEWXdJRGMxTGprNElEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMEV6UVRGQk1pSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNnNU1DQTJOU0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlOQlFrRTVRVUVpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9NVEl3SURVNExqWTJJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBJeVFqSkNNaUlnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3hOVEFnTlRRdU1ESWdOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUWtGQ09FSTVJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtERTRNQ0ExTUNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkRNa013UXpFaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRFMU1DQTBOUzQ1T0NBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkRRa05DUTBJaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRFeU1DQTBNUzR6TkNBMk5Ta2lMejQ4Y21WamRDQjNhV1IwYUQwaU55SWdhR1ZwWjJoMFBTSXlNQ0lnZUQwaU5EWXVOU0lnZVQwaU5EQWlJR1pwYkd3OUlpTkVNa1F5UkRJaUlISjRQU0kxSWlCeWVUMGlOU0lnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTFRrd0lETTFJRFkxS1NJdlBqeHlaV04wSUhkcFpIUm9QU0kzSWlCb1pXbG5hSFE5SWpJd0lpQjRQU0kwTmk0MUlpQjVQU0kwTUNJZ1ptbHNiRDBpSTBSQlJFRkVRU0lnY25nOUlqVWlJSEo1UFNJMUlpQjBjbUZ1YzJadmNtMDlJbkp2ZEdGMFpTZ3ROakFnTWpRdU1ESWdOalVwSWk4K1BISmxZM1FnZDJsa2RHZzlJamNpSUdobGFXZG9kRDBpTWpBaUlIZzlJalEyTGpVaUlIazlJalF3SWlCbWFXeHNQU0lqUlRKRk1rVXlJaUJ5ZUQwaU5TSWdjbms5SWpVaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtDMHpNQ0F0TlM0NU9DQTJOU2tpTHo0OEwzTjJaejQ9KSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMzYwZGVnKTtcbiAgfVxufVxuLndldWktc2xpZGVyIHtcbiAgcGFkZGluZzogMTVweCAxOHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi53ZXVpLXNsaWRlcl9faW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlFOUU5O1xufVxuLndldWktc2xpZGVyX190cmFjayB7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFBRDE5O1xuICB3aWR0aDogMDtcbn1cbi53ZXVpLXNsaWRlcl9faGFuZGxlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG4ud2V1aS1zbGlkZXItYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZXVpLXNsaWRlci1ib3ggLndldWktc2xpZGVyIHtcbiAgZmxleDogMTtcbn1cbi53ZXVpLXNsaWRlci1ib3hfX3ZhbHVlIHtcbiAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gIG1pbi13aWR0aDogMjRweDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuIiwiLnNldFRhcENvbG9yKEBjOnJnYmEoMCwwLDAsMCkpIHtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogQGM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIndldWlcIjtcclxuICAgIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUFFQUFBQUxBSUFBQXdBd1IxTlZRckQrcyswQUFBRTRBQUFBUWs5VEx6SkFLRXgrQUFBQmZBQUFBRlpqYldGdzY1Y0ZIUUFBQWh3QUFBSlFaMng1WnZDUlIvRUFBQVNVQUFBS3RHaGxZV1FMS0lOOUFBQUE0QUFBQURab2FHVmhDQ3dEK2dBQUFMd0FBQUFrYUcxMGVFSm8vLzhBQUFIVUFBQUFTR3h2WTJFWXFoVzZBQUFFYkFBQUFDWnRZWGh3QVNFQVZRQUFBUmdBQUFBZ2JtRnRaZU5jSHRnQUFBOUlBQUFCNW5CdmMzVDZiTGhMQUFBUk1BQUFBT1lBQVFBQUErZ0FBQUJhQStqLy8vLy9BK2tBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQklBQVFBQUFBRUFBQ2tDajNkZkR6ejFBQXNENkFBQUFBRFVFUjlYQUFBQUFOUVJIMWYvL3dBQUEra0Q2Z0FBQUFnQUFnQUFBQUFBQUFBQkFBQUFFZ0JKQUFVQUFBQUFBQUlBQUFBS0FBb0FBQUQvQUFBQUFBQUFBQUVBQUFBS0FCNEFMQUFCUkVaTVZBQUlBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFBQUFRT3dBWkFBQlFBSUFub0N2QUFBQUl3Q2VnSzhBQUFCNEFBeEFRSUFBQUlBQlFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVR1pGWkFCQTZnSHFFUVBvQUFBQVdnUHFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2ovL3dQb0FBQUQ2QUFBQUFBQUJRQUFBQU1BQUFBc0FBQUFCQUFBQVhRQUFRQUFBQUFBYmdBREFBRUFBQUFzQUFNQUNnQUFBWFFBQkFCQ0FBQUFCQUFFQUFFQUFPb1IvLzhBQU9vQi8vOEFBQUFCQUFRQUFBQUJBQUlBQXdBRUFBVUFCZ0FIQUFnQUNRQUtBQXNBREFBTkFBNEFEd0FRQUJFQUFBRUdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQU53QUFBQUFBQUFBRVFBQTZnRUFBT29CQUFBQUFRQUE2Z0lBQU9vQ0FBQUFBZ0FBNmdNQUFPb0RBQUFBQXdBQTZnUUFBT29FQUFBQUJBQUE2Z1VBQU9vRkFBQUFCUUFBNmdZQUFPb0dBQUFBQmdBQTZnY0FBT29IQUFBQUJ3QUE2Z2dBQU9vSUFBQUFDQUFBNmdrQUFPb0pBQUFBQ1FBQTZnb0FBT29LQUFBQUNnQUE2Z3NBQU9vTEFBQUFDd0FBNmd3QUFPb01BQUFBREFBQTZnMEFBT29OQUFBQURRQUE2ZzRBQU9vT0FBQUFEZ0FBNmc4QUFPb1BBQUFBRHdBQTZoQUFBT29RQUFBQUVBQUE2aEVBQU9vUkFBQUFFUUFBQUFBQVJnQ01BTklCSmdGNEFjUUNNZ0pnQXFnQy9BTklBNllEL2dST0JLQUU5QVZhQUFBQUFnQUFBQUFEcndPdEFCUUFLUUFBQVNJSEJnY0dGQmNXRnhZeU56WTNOalFuSmljbUF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBZlY0WjJRN1BEdzdaR2Z3Wm1RN1BEdzdaR1o0Ymw1Yk5qYzNObHRlMjE1Yk5qYzNObHRlQTYwOE8yUm44R2RqT3p3OE8yTm44R2RrT3p6OHJ6YzFXMTdiWGx3MU56YzFYRjdiWGxzMU53QUFBQUFDQUFBQUFBT3pBN01BRndBdEFBQUJJZ2NHQndZVkZCY1dGeFl6TWpjMk56WTFOQ2NtSnlZVEJ3WWlMd0VtTmpzQkVUUTJPd0V5RmhVUk16SVdBZTUyWjJRN1BUMDdaR2QyZkdwbU96NCtPMlpwSVhZT0tBNTJEZzBYWFFzSEpnY0xYUmNOQTdNK08yWnFmSFpuWkRzOVBUdGtaM1o5YVdZN1B2M3dtaElTbWhJYUFSY0lDd3NJL3VrYUFBTUFBQUFBQStVRDVRQVhBQ01BTEFBQUFTSUhCZ2NHRlJRWEZoY1dNekkzTmpjMk5UUW5KaWNtQXhRckFTSTFBelE3QVRJSEp5SW1ORFl5RmhRR0FlNkVjbTlCUkVSQmIzS0VpWFp4UWtSRVFuRjFhUUl4QXdnQ1FnTUJJeElaR1NRWkdRUGtSRUp4ZG9tRWNtOUJSRVJCYjNLRWluVnhRa1Q5SFFJQ0FXSUNBakVaSXhrWkl4a0FBQUFBQXdBQUFBQURzUVBrQUJzQUtnQXpBQUFCQmdjR0J3WUhCamNSRkJjV0Z4WVhOamMyTnpZMUVTUVhKaWNtQnpNeUZoVURGQVlyQVNJbkF6UTJFeUltTkRZeUZoUUdBZlZCUVRnN0xEdC9JRWMrYkY1c2JGMXRQVWorMktoUVFWVnZOQVFHREFNQ0pnVUJDd1llRHhZV0hoVVZBK1FQRWc0U0RoSXBDdjZ0ajNWa1NUNGRIVDVKWkhXUEFWTmVOUmtTR1B3R0JQN0dBZ01GQVRvRUJ2NUFGUjhWRlI4VkFBQUFBZ0FBQUFBRHNRUGtBQmtBTGdBQUFRWUhCZ2MyQlJFVUZ4WVhGaGMyTnpZM05qVVJKQmNtSnlZVEFRWXZBU1kvQVRZeUh3RVdOamNsTmpJZkFSWUI5VlZWUWsrdi90RkhQbXhlYkd4ZGJUMUkvdEd2VDBKVm8vN1ZCQVNLQXdNU0FRVUJjUUVGQWdFU0FnVUJFUVFENHhNWUVoazNZUDZzam5WbFNEOGNIRDlJWlhXT0FWUmdOeGtTR1A2Mi90a0RBNDhFQkJrQ0FWWUNBUUhsQVFJUUJBQUFBQUFDQUFBQUFBUGtBK1FBRndBdEFBQUJJZ2NHQndZVkZCY1dGeFl6TWpjMk56WTFOQ2NtSnlZVEFRWWlMd0VtUHdFMk1oOEJGakkzQVRZeUh3RVdBZTZFY205QlEwTkNibk9EaVhWeFFrUkVRbkYxa2Y2Z0FRVUJvd01ERmdFRkFZVUNCUUVCUXdJRkFSVUVBK05FUW5GMWlZTnpia0pEUTBGdmNvU0pkWEZDUlA2ai9xVUJBYWdFQlI0Q0FXWUJBUUVOQWdJVkJBQUFBQVFBQUFBQUE2OERyUUFVQUNrQVB3QkRBQUFCSWdjR0J3WVVGeFlYRmpJM05qYzJOQ2NtSnlZRElpY21KeVkwTnpZM05qSVhGaGNXRkFjR0J3WVRCUTRCTHdFbUJnOEJCaFlmQVJZeU53RStBU1lpRnpBZkFRSDFlR2RrT3p3OE8yUm44R1prT3p3OE8yUm1lRzVlV3pZM056WmJYdHRlV3pZM056WmJYbW4rOWdZU0JtQUdEd1VEQlFFR2ZRVVFCZ0VsQlFFTEVCVUJBUU90UER0a1ovQm5ZenM4UER0alovQm5aRHM4L0s4M05WdGUyMTVjTlRjM05WeGUyMTViTlRjQ0p0MEZBUVZKQlFJR0JBY1JCb0FHQlFFaEJROExCQUVCQUFBQkFBQUFBQU83QXpvQUZ3QUFFeTRCUHdFK0FSOEJGalkzQVRZV0Z5Y1dGQWNCQmlJblBRb0dCd1VIR2d6TERDRUxBaDBMSHdzTkNncjl1UW9lQ2dHekN5RU9DdzBIQ1pNSkFRb0J2Z2tDQ2cwTEhRdjlzUXNLQUFBQUFBSUFBQUFBQStVRDVnQVhBQ3dBQUFFaUJ3WUhCaFVVRnhZWEZqTXlOelkzTmpVMEp5WW5KaE1IQmk4QkppY21OUk0wTmpzQk1oWVZFeGNlQVFIdmhISnZRVU5EUW01emc0bDFjVUpFUkVKeGRWY1FBd1Q2QXdJRUVBTUNLd0lERHNVQ0FRUGxSRUp4ZFltRGMyNUNRME5CYjNLRWlYVnhRa1Q5Vmh3RUFuY0NBZ01HQVhvQ0F3TUMvcTJGQWdRQUFBUUFBQUFBQTY4RHJRQURBQmdBTFFBekFBQUJNQjhCQXlJSEJnY0dGQmNXRnhZeU56WTNOalFuSmljbUF5SW5KaWNtTkRjMk56WXlGeFlYRmhRSEJnY0dBeU1WTXpVakF1VUJBZko0WjJRN1BEdzdaR2Z3Wm1RN1BEdzdaR1o0Ymw1Yk5qYzNObHRlMjE1Yk5qYzNObHRlbXlUOTJRS0RBUUVCTER3N1pHZndaMk03UER3N1kyZndaMlE3UFB5dk56VmJYdHRlWERVM056VmNYdHRlV3pVM0FqSDlKQUFBQUFNQUFBQUFBK1FENUFBWEFDY0FNQUFBQVNJSEJnY0dGUlFYRmhjV016STNOamMyTlRRbkppY21Bek15RmhVREZBWXJBU0ltTlFNME5oTWlKalEyTWhZVUJnSHVoSEp2UVVORFFtNXpnNGwxY1VKRVJFSnhkWjQyQkFZTUF3SW5Bd01NQmg4UEZoWWVGaFlENDBSQ2NYV0pnM051UWtORFFXOXloSWwxY1VKRS92WUdCZjdBQWdNREFnRkFCUWIrTmhZZkZoWWZGZ0FBQkFBQUFBQUR3QVBBQUFnQUVnQW9BRDBBQUFFeU5qUW1JZ1lVRmhjakZUTVJJeFV6TlNNRElnY0dCd1lWRkJZWEZqTXlOelkzTmpVMEp5NEJBeUluSmljbU5EYzJOell5RnhZWEZoUUhCZ2NHQWZRWUlTRXdJU0ZSanprNXlUb3JoRzVyUFQ5OWFtK0RkbWhsUEQ0K1BNeUZiVjViTlRjM05WdGUybDViTlRjM05WdGVBcUFpTHlJaUx5STVIZjdFSEJ3Q3NUODlhMjZFZDh3OFBqNDhaV2gyZzI5cWZmeWpOelZiWHRwZVd6VTNOelZiWHRwZVd6VTNBQUFEQUFBQUFBT29BNmdBQ3dBZ0FEVUFBQUVISndjWEJ4YzNGemNuTndNaUJ3WUhCaFFYRmhjV01qYzJOelkwSnlZbkpnTWlKeVluSmpRM05qYzJNaGNXRnhZVUJ3WUhCZ0tPbXBvY21wb2NtcG9jbXBxMmRtWmlPanM3T21KbTdHWmlPanM3T21KbWRtdGRXVFEyTmpSWlhkWmRXVFEyTmpSWlhRS3FtcG9jbXBvY21wb2NtcG9CR1RzNlltYnNabUk2T3pzNlltYnNabUk2Ty96Q05qUlpYZFpkV1RRMk5qUlpYZFpkV1RRMkFBTUFBQUFBQStrRDZnQWFBQzhBTUFBQUFRWUhCaU1pSnlZbkpqUTNOamMyTWhjV0Z4WVZGQWNHQndFSEFUSTNOamMyTkNjbUp5WWlCd1lIQmhRWEZoY1dNd0tPTlVCQ1IyMWRXalUzTnpWYVhkcGRXelUyR0JjckFTTTUvZUJYUzBnckt5c3JTRXV1U2trcUxDd3FTVXBYQVNNckZ4ZzJOVnRkMmwxYU5UYzNOVnBkYlVkQ1FEWCszamtCR1NzclNFdXVTa2txTEN3cVNVcXVTMGdyS3dBQy8vOEFBQVBvQStnQUZBQXdBQUFCSWdjR0J3WVFGeFlYRmlBM05qYzJFQ2NtSnlZVEZnNEJJaThCQndZdUFUUS9BU2NtUGdFV0h3RTNOaDRCQmc4QkFmU0lkSEZEUkVSRGNYUUJFSFJ4UTBSRVEzRjBTUW9CRkJzS29xZ0tHeE1LcUtJS0FSUWJDcUtvQ2hzVUFRcW9BK2hFUTNGMC92QjBjVU5FUkVOeGRBRVFkSEZEUlAxakNoc1RDcWlpQ2dFVUd3cWlxQW9iRkFFS3FLSUtBUlFiQ3FJQUFBSUFBQUFBQStRRDVBQVhBRFFBQUFFaUJ3WUhCaFVVRnhZWEZqTXlOelkzTmpVMEp5WW5KaE1VQmlNRkZ4WVVEd0VHTHdFdUFUOEJOaDhCRmhRUEFRVXlGaDBCQWU2RWNtOUJRME5DYm5PRGlYVnhRa1JFUW5GMWZ3UUMvcEdEQVFFVkF3VHNBZ0VDN0FRRUZBSUJoQUZ3QWdNRDQwUkNjWFdKZzNOdVFrTkRRVzl5aElsMWNVSkUvZllDQXd1VkFnUUNGQVFFMEFJRkF0RUVCQlFDQlFHVkN3TURKd0FBQUFVQUFBQUFBOVFEMHdBakFDY0FOd0JIQUVnQUFBRVJGQVlqSVNJbU5SRWpJaVk5QVRRMk15RTFORFl6SVRJV0hRRWhNaFlkQVJRR0l5RVJJUkVISWdZVkVSUVdPd0V5TmpVUk5DWWpJU0lHRlJFVUZqc0JNalkxRVRRbUt3RURleVliL1hZYkprTUpEUTBKQVFZWkVnRXZFeGtCQmdrTkRRbjlDUUpjMFFrTkRRa3RDUTBOQ2Y3c0NRME5DUzBKRFEwSkxRTWkvVFFiSmlZYkFzd01DaXdKRFM0U0dSa1NMZzBKTEFvTS9Vd0N0R3NOQ2Y1TkNRME5DUUd6Q1EwTkNmNU5DUTBOQ1FHekNRMEFBQUFBRUFER0FBRUFBQUFBQUFFQUJBQUFBQUVBQUFBQUFBSUFCd0FFQUFFQUFBQUFBQU1BQkFBTEFBRUFBQUFBQUFRQUJBQVBBQUVBQUFBQUFBVUFDd0FUQUFFQUFBQUFBQVlBQkFBZUFBRUFBQUFBQUFvQUt3QWlBQUVBQUFBQUFBc0FFd0JOQUFNQUFRUUpBQUVBQ0FCZ0FBTUFBUVFKQUFJQURnQm9BQU1BQVFRSkFBTUFDQUIyQUFNQUFRUUpBQVFBQ0FCK0FBTUFBUVFKQUFVQUZnQ0dBQU1BQVFRSkFBWUFDQUNjQUFNQUFRUUpBQW9BVmdDa0FBTUFBUVFKQUFzQUpnRDZkMlYxYVZKbFozVnNZWEozWlhWcGQyVjFhVlpsY25OcGIyNGdNUzR3ZDJWMWFVZGxibVZ5WVhSbFpDQmllU0J6ZG1jeWRIUm1JR1p5YjIwZ1JtOXVkR1ZzYkc4Z2NISnZhbVZqZEM1b2RIUndPaTh2Wm05dWRHVnNiRzh1WTI5dEFIY0FaUUIxQUdrQVVnQmxBR2NBZFFCc0FHRUFjZ0IzQUdVQWRRQnBBSGNBWlFCMUFHa0FWZ0JsQUhJQWN3QnBBRzhBYmdBZ0FERUFMZ0F3QUhjQVpRQjFBR2tBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQWdBQUFBQUFBQUFLQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVNBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBQVpqYVhKamJHVUlaRzkzYm14dllXUUVhVzVtYnd4ellXWmxYM04xWTJObGMzTUpjMkZtWlY5M1lYSnVCM04xWTJObGMzTU9jM1ZqWTJWemN5MWphWEpqYkdVUmMzVmpZMlZ6Y3kxdWJ5MWphWEpqYkdVSGQyRnBkR2x1Wnc1M1lXbDBhVzVuTFdOcGNtTnNaUVIzWVhKdUMybHVabTh0WTJseVkyeGxCbU5oYm1ObGJBWnpaV0Z5WTJnRlkyeGxZWElFWW1GamF3WmtaV3hsZEdVQUFBQUEnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbn1cclxuXHJcblxyXG5bY2xhc3NePVwid2V1aS1pY29uLVwiXSwgW2NsYXNzKj1cIiB3ZXVpLWljb24tXCJdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgXCJ3ZXVpXCI7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgLy8g5bmz5ruR5Y2H57qnXHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuMmVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktaWNvbi1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDFcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tZG93bmxvYWQ6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDJcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24taW5mbzpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwM1wiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi1zYWZlX3N1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDRcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tc2FmZV93YXJuOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTA1XCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aS1pY29uLXN1Y2Nlc3M6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDZcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDdcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tc3VjY2Vzcy1uby1jaXJjbGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMDhcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24td2FpdGluZzpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwOVwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi13YWl0aW5nLWNpcmNsZTpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwQVwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi13YXJuOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBCXCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aS1pY29uLWluZm8tY2lyY2xlOmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxFQTBDXCIgfSAvKiAn7qCAJyAqL1xyXG4ud2V1aS1pY29uLWNhbmNlbDpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUEwRFwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi1zZWFyY2g6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMEVcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tY2xlYXI6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMEZcIiB9IC8qICfuoIAnICovXHJcbi53ZXVpLWljb24tYmFjazpiZWZvcmUgeyBjb250ZW50OiBcIlxcRUExMFwiIH0gLyogJ+6ggCcgKi9cclxuLndldWktaWNvbi1kZWxldGU6YmVmb3JlIHsgY29udGVudDogXCJcXEVBMTFcIiB9IC8qICfuoIAnICovIiwiQGltcG9ydCBcIndldWktZm9udFwiO1xyXG5cclxuW2NsYXNzXj1cIndldWktaWNvbl9cIl06YmVmb3JlLCBbY2xhc3MqPVwiIHdldWktaWNvbl9cIl06YmVmb3JlIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ud2V1aS1pY29uLXN1Y2Nlc3Mge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICMwOUJCMDc7XHJcbn1cclxuLndldWktaWNvbi13YWl0aW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMTBBRUZGO1xyXG59XHJcbi53ZXVpLWljb24td2FybiB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogI0Y0MzUzMDtcclxufVxyXG4ud2V1aS1pY29uLWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICMxMEFFRkY7XHJcbn1cclxuXHJcbi53ZXVpLWljb24tc3VjY2Vzcy1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICMwOUJCMDc7XHJcbn1cclxuLndldWktaWNvbi1zdWNjZXNzLW5vLWNpcmNsZSB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogIzA5QkIwNztcclxufVxyXG4ud2V1aS1pY29uLXdhaXRpbmctY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjMTBBRUZGO1xyXG59XHJcbi53ZXVpLWljb24tY2lyY2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiAjQzlDOUM5O1xyXG59XHJcbi53ZXVpLWljb24tZG93bmxvYWQge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICMwOUJCMDc7XHJcbn1cclxuXHJcbi53ZXVpLWljb24taW5mby1jaXJjbGUge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgY29sb3I6ICMwOUJCMDc7XHJcbn1cclxuXHJcbi53ZXVpLWljb24tc2FmZS1zdWNjZXNzIHtcclxuICAgIGNvbG9yOiAjMDlCQjA3O1xyXG59XHJcbi53ZXVpLWljb24tc2FmZS13YXJuIHtcclxuICAgIGNvbG9yOiAjRkZCRTAwO1xyXG59XHJcblxyXG4ud2V1aS1pY29uLWNhbmNlbCB7XHJcbiAgICBjb2xvcjogI0Y0MzUzMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLndldWktaWNvbi1zZWFyY2gge1xyXG4gICAgY29sb3I6ICNCMkIyQjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi53ZXVpLWljb24tY2xlYXIge1xyXG4gICAgY29sb3I6ICNCMkIyQjI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi53ZXVpLWljb24tZGVsZXRlIHtcclxuICAgICYud2V1aS1pY29uX2dhbGxlcnktZGVsZXRle1xyXG4gICAgICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOjIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWljb25fbXNnIHtcclxuICAgIGZvbnQtc2l6ZTogOTNweDtcclxuICAgICYud2V1aS1pY29uLXdhcm4ge1xyXG4gICAgICAgIGNvbG9yOiAjRjc2MjYwO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLWljb25fbXNnLXByaW1hcnkge1xyXG4gICAgZm9udC1zaXplOiA5M3B4O1xyXG4gICAgJi53ZXVpLWljb24td2FybiB7XHJcbiAgICAgICAgY29sb3I6ICNDOUM5Qzk7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlCdG5Gb250U2l6ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBAd2V1aUJ0bkZvbnRDb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiB1bml0KEB3ZXVpQnRuSGVpZ2h0L0B3ZXVpQnRuRm9udFNpemUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogQHdldWlCdG5Cb3JkZXJSYWRpdXM7XHJcbiAgICAuc2V0VGFwQ29sb3IoKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjUpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEB3ZXVpQnRuQm9yZGVyUmFkaXVzKjI7XHJcbiAgICB9XHJcbn1cclxuLndldWktYnRuX2lubGluZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYnRuX2RlZmF1bHQge1xyXG4gICAgY29sb3I6IEB3ZXVpQnRuRGVmYXVsdEZvbnRDb2xvcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuRGVmYXVsdEJnO1xyXG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogQHdldWlCdG5EZWZhdWx0Rm9udENvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTphY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHRBY3RpdmVGb250Q29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5EZWZhdWx0QWN0aXZlQmc7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYnRuX3ByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5QcmltYXJ5Qmc7XHJcbiAgICAmOm5vdCgud2V1aS1idG5fZGlzYWJsZWQpOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkZvbnRDb2xvcjtcclxuICAgIH1cclxuICAgICY6bm90KC53ZXVpLWJ0bl9kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogQHdldWlCdG5BY3RpdmVGb250Q29sb3I7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlCdG5QcmltYXJ5QWN0aXZlQmc7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWJ0bl93YXJuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuV2FybkJnO1xyXG4gICAgJjpub3QoLndldWktYnRuX2Rpc2FibGVkKTp2aXNpdGVkIHtcclxuICAgICAgICBjb2xvcjogQHdldWlCdG5Gb250Q29sb3I7XHJcbiAgICB9XHJcbiAgICAmOm5vdCgud2V1aS1idG5fZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IEB3ZXVpQnRuQWN0aXZlRm9udENvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQnRuV2FybkFjdGl2ZUJnO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1idG5fZGlzYWJsZWQge1xyXG4gICAgY29sb3I6IEB3ZXVpQnRuRGlzYWJsZWRGb250Q29sb3I7XHJcbiAgICAmLndldWktYnRuX2RlZmF1bHQge1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUJ0bkRlZmF1bHREaXNhYmxlZEZvbnRDb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0bkRlZmF1bHREaXNhYmxlZEJnO1xyXG4gICAgfVxyXG4gICAgJi53ZXVpLWJ0bl9wcmltYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0blByaW1hcnlEaXNhYmxlZEJnO1xyXG4gICAgfVxyXG4gICAgJi53ZXVpLWJ0bl93YXJuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJ0bndhcm5EaXNhYmxlZEJnO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1idG5fcGxhaW4tcHJpbWFyeSB7XHJcbiAgICBjb2xvcjogQHdldWlCdG5QbGFpblByaW1hcnlDb2xvcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIEB3ZXVpQnRuUGxhaW5QcmltYXJ5Qm9yZGVyQ29sb3I7XHJcbiAgICAmOm5vdCgud2V1aS1idG5fcGxhaW4tZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6QHdldWlCdG5QbGFpblByaW1hcnlBY3RpdmVDb2xvcjtcclxuICAgICAgICBib3JkZXItY29sb3I6IEB3ZXVpQnRuUGxhaW5QcmltYXJ5QWN0aXZlQm9yZGVyQ29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWJ0bl9wbGFpbi1kZWZhdWx0IHtcclxuICAgIGNvbG9yOiBAd2V1aUJ0blBsYWluRGVmYXVsdENvbG9yO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgQHdldWlCdG5QbGFpbkRlZmF1bHRCb3JkZXJDb2xvcjtcclxuICAgICY6bm90KC53ZXVpLWJ0bl9wbGFpbi1kaXNhYmxlZCk6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjpAd2V1aUJ0blBsYWluRGVmYXVsdEFjdGl2ZUNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogQHdldWlCdG5QbGFpbkRlZmF1bHRBY3RpdmVCb3JkZXJDb2xvcjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1idG5fcGxhaW4tZGlzYWJsZWR7XHJcbiAgICBjb2xvcjpyZ2JhKDAsMCwwLC4yKTtcclxuICAgIGJvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC4yKTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpLWJ0bl9nbG9iYWxcIjtcclxuQGltcG9ydCBcIndldWktYnRuX2RlZmF1bHRcIjtcclxuQGltcG9ydCBcIndldWktYnRuX3ByaW1hcnlcIjtcclxuQGltcG9ydCBcIndldWktYnRuX3dhcm5cIjtcclxuQGltcG9ydCBcIndldWktYnRuX2Rpc2FibGVkXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpLWJ0bl9wbGFpblwiO1xyXG5cclxuYnV0dG9uLCBpbnB1dCB7XHJcbiAgICAmLndldWktYnRuIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53ZXVpLWJ0bl9pbmxpbmUsJi53ZXVpLWJ0bl9taW5pIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgICYud2V1aS1idG5fcGxhaW4tcHJpbWFyeSwmLndldWktYnRuX3BsYWluLWRlZmF1bHR7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWJ0bl9taW5pIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMS4zMmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IEB3ZXVpQnRuTWluaUhlaWdodDtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlCdG5NaW5pRm9udFNpemU7XHJcbn1cclxuXHJcblxyXG4vKmdhcCBiZXR3ZWVuIGJ0biovXHJcbi53ZXVpLWJ0biArIC53ZXVpLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiBAd2V1aUJ0bkRlZmF1bHRHYXA7XHJcbn1cclxuXHJcbi53ZXVpLWJ0bi53ZXVpLWJ0bl9pbmxpbmUgKyAud2V1aS1idG4ud2V1aS1idG5faW5saW5lIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogQHdldWlCdG5EZWZhdWx0R2FwO1xyXG59XHJcblxyXG4ud2V1aS1idG4tYXJlYSB7XHJcbiAgICBtYXJnaW46IEB3ZXVpQ2VsbHNNYXJnaW5Ub3AgQHdldWlCdG5EZWZhdWx0R2FwIC4zZW07IFxyXG59XHJcbi53ZXVpLWJ0bi1hcmVhX2lubGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLndldWktYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogQHdldWlCdG5EZWZhdWx0R2FwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWNlbGxzIHtcclxuICAgIG1hcmdpbi10b3A6IEB3ZXVpQ2VsbHNNYXJnaW5Ub3A7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUNlbGxCZztcclxuICAgIGxpbmUtaGVpZ2h0OiBAd2V1aUNlbGxMaW5lSGVpZ2h0O1xyXG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxGb250U2l6ZTsgLy9jZWxs5Lit6Ze05pyJ5pWI6auY5bqmMjNweO+8jOi3n+WuouaIt+err+m7mOiupOWbvuagh+WwuuWvuOS4gOiHtFxyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8v5Zug5Li65q+P5LiqY2VsbOeahGJvcmRlcuS9v+eUqGJlZm9yZeWFg+e0oGxlZnTmkJ7nmoTvvIxpZeS4i+S8quWFg+e0oOeahGNvbnRhaW5pbmcgYmxvY2vkvLDorqHot5/moIflh4bkuI3lkIzvvIzlnKhjZWxs5LiK55Sob2jkuI3nlJ/mlYhcclxuXHJcbiAgICAvLyBvbmVweFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktY2VsbHNfX3RpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IC43N2VtOyAvLyAxNXB4IC0g6KGM6auYXHJcbiAgICBtYXJnaW4tYm90dG9tOiAuM2VtOyAvLyA4cHggLSDooYzpq5hcclxuICAgIHBhZGRpbmctbGVmdDogQHdldWlDZWxsR2FwSDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxUaXBzRm9udFNpemU7XHJcblxyXG4gICAgJiArIC53ZXVpLWNlbGxzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1jZWxsc19fdGlwcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAuM2VtOyAvLyA4cHggLSDooYzpq5hcclxuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgZm9udC1zaXplOiBAd2V1aUNlbGxUaXBzRm9udFNpemU7XHJcbn1cclxuXHJcbi53ZXVpLWNlbGwge1xyXG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViBAd2V1aUNlbGxHYXBIO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvL+i/meS4quaYr+S4uuS6huWFvOWuuWNlbGxz5a655Zmob25lcHjmlrnmoYjooqtiZWZvcmXmjKHkvY/ogIzlgZrnmoRcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgICAgICBsZWZ0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS1jZWxsX3ByaW1hcnl7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4ud2V1aS1jZWxsX19iZHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuLndldWktY2VsbF9fZnQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59IiwiLnNldFRvcExpbmUoQGM6ICNDN0M3QzcpIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgQGM7XHJcbiAgICBjb2xvcjogQGM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjUpO1xyXG59XHJcblxyXG4uc2V0Qm90dG9tTGluZShAYzogI0M3QzdDNykge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBAYztcclxuICAgIGNvbG9yOiBAYztcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNSk7XHJcbn1cclxuXHJcbi5zZXRMZWZ0TGluZShAYzogI0M3QzdDNykge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgQGM7XHJcbiAgICBjb2xvcjogQGM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwLjUpO1xyXG59XHJcblxyXG4uc2V0UmlnaHRMaW5lKEBjOiAjQzdDN0M3KSB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIEBjO1xyXG4gICAgY29sb3I6IEBjO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMC41KTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1jZWxsX2FjY2VzcyB7XHJcbiAgICAuc2V0VGFwQ29sb3IoKTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbiAgICB9XHJcbiAgICAud2V1aS1jZWxsX19mdCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTNweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAuc2V0QXJyb3cocmlnaHQsIDZweCwgI0M4QzhDRCwgMnB4KTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLndldWktY2VsbF9saW5re1xyXG4gICAgY29sb3I6IEB3ZXVpTGlua0NvbG9yRGVmYXVsdDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAvLyDnlLHkuo53ZXVpLWNlbGw6Zmlyc3QtY2hpbGTnmoQ6YmVmb3Jl5Li66ZqQ6JeP77yM5omA5Lul6L+Z6YeM6KaB6YeN5paw5pi+56S65Ye65p2lXHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLl9zZXRBcnJvdyhAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsIEBib3JkZXJXaWR0aCl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IEBhcnJvd3NpemU7XHJcbiAgICB3aWR0aDogQGFycm93c2l6ZTtcclxuICAgIGJvcmRlci13aWR0aDogQGJvcmRlcldpZHRoIEBib3JkZXJXaWR0aCAwIDA7XHJcbiAgICBib3JkZXItY29sb3I6IEBib3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbi5zZXRBcnJvdyhAZGlyZWN0aW9uLCBAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsIEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xyXG4gICAgLl9zZXRBcnJvdyhAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsIEBib3JkZXJXaWR0aCk7XHJcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgwLjcxLC0wLjcxLDAuNzEsMC43MSwwLDApOyAvLyByb3RhdGUoLTQ1ZGVnKVxyXG59XHJcblxyXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XHJcbiAgICAuX3NldEFycm93KEBhcnJvd3NpemUsIEBib3JkZXJDb2xvciwgQGJvcmRlcldpZHRoKTtcclxuICAgIHRyYW5zZm9ybTogbWF0cml4KDAuNzEsMC43MSwtMC43MSwwLjcxLDAsMCk7IC8vIHJvdGF0ZSg0NWRlZyk7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMnB4O1xyXG59XHJcblxyXG4uc2V0QXJyb3coQGRpcmVjdGlvbiwgQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLEBib3JkZXJXaWR0aCkgd2hlbiAoQGRpcmVjdGlvbiA9IGRvd24pIHtcclxuICAgIC5fc2V0QXJyb3coQGFycm93c2l6ZSwgQGJvcmRlckNvbG9yLCBAYm9yZGVyV2lkdGgpO1xyXG4gICAgdHJhbnNmb3JtOiBtYXRyaXgoLTAuNzEsMC43MSwtMC43MSwtMC43MSwwLDApOyAvLyByb3RhdGUoMTM1ZGVnKTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbn1cclxuXHJcbi5zZXRBcnJvdyhAZGlyZWN0aW9uLCBAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsQGJvcmRlcldpZHRoKSB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xyXG4gICAgLl9zZXRBcnJvdyhAYXJyb3dzaXplLCBAYm9yZGVyQ29sb3IsIEBib3JkZXJXaWR0aCk7XHJcbiAgICB0cmFuc2Zvcm06IG1hdHJpeCgtMC43MSwtMC43MSwwLjcxLC0wLjcxLDAsMCk7IC8vIHJvdGF0ZSgtMTM1ZGVnKTtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktY2hlY2tfX2xhYmVsIHtcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VDRUM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWNoZWNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTllbTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLy8gbWV0aG9kMiBhY2Nlc3NiaWxpdHlcclxuLndldWktY2VsbHNfcmFkaW97XHJcbiAgICAud2V1aS1jZWxsX19mdCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBAd2V1aUNlbGxJbm5lckdhcEg7XHJcbiAgICB9XHJcbn1cclxuLndldWktY2hlY2sge1xyXG4gICAgLy8gcmFkaW9cclxuICAgIC53ZXVpLWNlbGxzX3JhZGlvICYge1xyXG4gICAgICAgICY6Y2hlY2tlZCB7XHJcbiAgICAgICAgICAgICYgKyAud2V1aS1pY29uLWNoZWNrZWQge1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdcXEVBMDgnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1jZWxsc19jaGVja2JveCB7XHJcbiAgICAud2V1aS1jZWxsX19oZCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogQHdldWlDZWxsSW5uZXJHYXBIO1xyXG4gICAgfVxyXG4gICAgLndldWktaWNvbi1jaGVja2VkIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXEVBMDEnO1xyXG4gICAgICAgICAgICBjb2xvcjogI0M5QzlDOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIG1ldGhvZDIgYWNjZXNzYmlsaXR5XHJcbi53ZXVpLWNoZWNrIHtcclxuICAgIC8vIGNoZWNrYm94XHJcbiAgICAud2V1aS1jZWxsc19jaGVja2JveCAmIHtcclxuICAgICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgICAgICAmICsgLndldWktaWNvbi1jaGVja2VkIHtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnXFxFQTA2JztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1sYWJlbHtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIHdpZHRoOkB3ZXVpQ2VsbExhYmVsV2lkdGg7XHJcbiAgLnRleHRfd3JhcCgpO1xyXG59XHJcbi53ZXVpLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IHVuaXQoQHdldWlDZWxsTGluZUhlaWdodCwgZW0pO1xyXG4gICAgbGluZS1oZWlnaHQ6IEB3ZXVpQ2VsbExpbmVIZWlnaHQ7XHJcblxyXG4gICAgLy8gaGlkZXMgdGhlIHNwaW4tYnV0dG9uXHJcbiAgICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9ue1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuLndldWktdGV4dGFyZWEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuXHJcbi53ZXVpLXRleHRhcmVhLWNvdW50ZXJ7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JUaXBzO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAud2V1aS1jZWxsX3dhcm4gJntcclxuICAgICAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JXYXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS10b3B0aXBzIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAudGV4dF93cmFwKCk7XHJcbn1cclxuLndldWktdG9wdGlwc193YXJuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQ29sb3JXYXJuO1xyXG59XHJcbi53ZXVpLWNlbGxzX2Zvcm0ge1xyXG4gICAgLndldWktY2VsbF9fZnR7XHJcbiAgICAgICAgZm9udC1zaXplOjA7XHJcbiAgICB9XHJcbiAgICAud2V1aS1pY29uLXdhcm57XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgaW5wdXQsIHRleHRhcmVhLCBsYWJlbFtmb3Jde1xyXG4gICAgICAgIC5zZXRUYXBDb2xvcigpO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLWNlbGxfd2FybntcclxuICAgIGNvbG9yOkB3ZXVpVGV4dENvbG9yV2FybjtcclxuICAgIC53ZXVpLWljb24td2FybntkaXNwbGF5OmlubGluZS1ibG9jazt9XHJcbn1cclxuIiwiLmVsbGlwc2lzKEB3OmF1dG8pIHtcclxuICAgIHdpZHRoOiBAdztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcclxufVxyXG5cclxuLmVsbGlwc2lzTG4oQGxpbmUpIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogQGxpbmU7XHJcbn1cclxuLnRleHRfd3JhcCgpIHtcclxuICAgIHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG4gICAgd29yZC1icmVhazpicmVhay1hbGw7XHJcbn1cclxuLmh5cGhlbnMoKSB7XHJcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxuICAgIC13ZWJraXQtaHlwaGVuczphdXRvO1xyXG4gICAgaHlwaGVuczphdXRvO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWZvcm0tcHJldmlld3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgIH1cclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2hke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViBAd2V1aUNlbGxHYXBIO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMi41ZW07XHJcbiAgICAmOmFmdGVye1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpQ2VsbEJvcmRlckNvbG9yKTtcclxuICAgICAgICBsZWZ0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgfVxyXG4gICAgLndldWktZm9ybS1wcmV2aWV3X192YWx1ZXtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcclxuICAgIH1cclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2Jke1xyXG4gICAgcGFkZGluZzogQHdldWlDZWxsR2FwViBAd2V1aUNlbGxHYXBIO1xyXG4gICAgZm9udC1zaXplOiAuOWVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuLndldWktZm9ybS1wcmV2aWV3X19mdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpRGlhbG9nTGluZUNvbG9yKTtcclxuICAgIH1cclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX2l0ZW17XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi53ZXVpLWZvcm0tcHJldmlld19fbGFiZWx7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgbWluLXdpZHRoOiA0ZW07XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIHRleHQtYWxpZ24tbGFzdDoganVzdGlmeTtcclxufVxyXG4ud2V1aS1mb3JtLXByZXZpZXdfX3ZhbHVle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd29yZC1icmVhazpub3JtYWw7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuLndldWktZm9ybS1wcmV2aWV3X19idG4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgY29sb3I6IEB3ZXVpRGlhbG9nTGlua0NvbG9yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcbiAgICBidXR0b24me1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aURpYWxvZ0xpbmtBY3RpdmVCYztcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRMZWZ0TGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLndldWktZm9ybS1wcmV2aWV3X19idG5fZGVmYXVsdCB7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59XHJcbi53ZXVpLWZvcm0tcHJldmlld19fYnRuX3ByaW1hcnkge1xyXG4gICAgY29sb3I6ICMwQkIyMEM7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktY2VsbF9zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC53ZXVpLXNlbGVjdCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC53ZXVpLWNlbGxfX2Jke1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAuc2V0QXJyb3cocmlnaHQsIDZweCwgI0M4QzhDRCwgMnB4KTtcclxuXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiBAd2V1aUNlbGxHYXBIO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLndldWktc2VsZWN0IHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgaGVpZ2h0OiBAd2V1aUNlbGxIZWlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctbGVmdDogQHdldWlDZWxsR2FwSDtcclxufVxyXG5cclxuLndldWktY2VsbF9zZWxlY3QtYmVmb3JlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6QHdldWlDZWxsR2FwSDtcclxuICAgIC53ZXVpLXNlbGVjdHtcclxuICAgICAgICB3aWR0aDpAd2V1aUNlbGxMYWJlbFdpZHRoO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcbiAgICAud2V1aS1jZWxsX19oZCB7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIC5zZXRSaWdodExpbmUoQHdldWlDZWxsQm9yZGVyQ29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgIC5zZXRBcnJvdyhyaWdodCwgNnB4LCAjQzhDOENELCAycHgpO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgcmlnaHQ6IEB3ZXVpQ2VsbEdhcEg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndldWktY2VsbF9fYmQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDpAd2V1aUNlbGxHYXBIO1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWNlbGxfc2VsZWN0LWFmdGVyIHtcclxuICAgIHBhZGRpbmctbGVmdDpAd2V1aUNlbGxHYXBIO1xyXG4gICAgLndldWktc2VsZWN0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1jZWxsX3Zjb2RlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcbi53ZXVpLXZjb2RlLWltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IEB3ZXVpQ2VsbEhlaWdodDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi53ZXVpLXZjb2RlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IEB3ZXVpQ2VsbEhlaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAuNmVtIDAgMC43ZW07XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIEB3ZXVpTGluZUNvbG9yTGlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogQHdldWlDZWxsSGVpZ2h0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGZvbnQtc2l6ZTogQHdldWlDZWxsRm9udFNpemU7XHJcbiAgICBjb2xvcjogQHdldWlEaWFsb2dMaW5rQ29sb3I7XHJcbiAgICBidXR0b24me1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICAgICAgb3V0bGluZTogMDtcclxuICAgIH1cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogZGVzYXR1cmF0ZShAd2V1aURpYWxvZ0xpbmtDb2xvciwgMzAlKTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG5Ad2V1aUdhbGxlcnlPcHJIZWlnaHQ6IDYwcHg7XHJcbi53ZXVpLWdhbGxlcnkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcbi53ZXVpLWdhbGxlcnlfX2ltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogQHdldWlHYWxsZXJ5T3BySGVpZ2h0O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcbi53ZXVpLWdhbGxlcnlfX29wciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQwRDBEO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBsaW5lLWhlaWdodDogQHdldWlHYWxsZXJ5T3BySGVpZ2h0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53ZXVpLWdhbGxlcnlfX2RlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1jZWxsX3N3aXRjaHtcclxuICAgIHBhZGRpbmctdG9wOiAoQHdldWlDZWxsSGVpZ2h0IC0gQHdldWlTd2l0Y2hIZWlnaHQpIC8gMjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAoQHdldWlDZWxsSGVpZ2h0IC0gQHdldWlTd2l0Y2hIZWlnaHQpIC8gMjtcclxufVxyXG4ud2V1aS1zd2l0Y2h7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi53ZXVpLXN3aXRjaCxcclxuLndldWktc3dpdGNoLWNwX19ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTJweDtcclxuICAgIGhlaWdodDogQHdldWlTd2l0Y2hIZWlnaHQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGREZERjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjFzLCBib3JkZXIgLjFzO1xyXG5cclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IEB3ZXVpU3dpdGNoSGVpZ2h0IC0gMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGREZERkQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjM1cyBjdWJpYy1iZXppZXIoMC40NSwgMSwgMC40LCAxKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiBAd2V1aVN3aXRjaEhlaWdodCAtIDI7XHJcbiAgICAgICAgaGVpZ2h0OiBAd2V1aVN3aXRjaEhlaWdodCAtIDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjM1cyBjdWJpYy1iZXppZXIoMC40LCAwLjQsIDAuMjUsIDEuMzUpO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLXN3aXRjaDpjaGVja2VkLFxyXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0OmNoZWNrZWQgfiAud2V1aS1zd2l0Y2gtY3BfX2JveHtcclxuICAgIGJvcmRlci1jb2xvcjogIzA0QkUwMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNEJFMDI7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8g5YW85a65SUUgRWRnZeeahOeJiOacrFxyXG4ud2V1aS1zd2l0Y2gtY3BfX2lucHV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTk5OTlweDtcclxufVxyXG4ud2V1aS1zd2l0Y2gtY3BfX2JveHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLXVwbG9hZGVye31cclxuLndldWktdXBsb2FkZXJfX2hke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctYm90dG9tOiBAd2V1aUNlbGxHYXBWO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud2V1aS11cGxvYWRlcl9fdGl0bGV7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcbi53ZXVpLXVwbG9hZGVyX19pbmZve1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yVGlwcztcclxufVxyXG5cclxuLndldWktdXBsb2FkZXJfX2Jke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlDZWxsR2FwSCAtIChAd2V1aUNlbGxHYXBWICsgQHdldWlVcGxvYWRlckZpbGVTcGFjaW5nKTtcclxuICAgIG1hcmdpbi1yaWdodDogLUB3ZXVpVXBsb2FkZXJGaWxlU3BhY2luZztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndldWktdXBsb2FkZXJfX2ZpbGVze1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ud2V1aS11cGxvYWRlcl9fZmlsZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aVVwbG9hZGVyRmlsZVNwYWNpbmc7XHJcbiAgICB3aWR0aDogQHdldWlVcGxvYWRlclNpemU7XHJcbiAgICBoZWlnaHQ6IEB3ZXVpVXBsb2FkZXJTaXplO1xyXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi53ZXVpLXVwbG9hZGVyX19maWxlX3N0YXR1c3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICB9XHJcbiAgICAud2V1aS11cGxvYWRlcl9fZmlsZS1jb250ZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbi53ZXVpLXVwbG9hZGVyX19maWxlLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLndldWktaWNvbi13YXJue1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxufVxyXG4ud2V1aS11cGxvYWRlcl9faW5wdXQtYm94e1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogQHdldWlVcGxvYWRlckZpbGVTcGFjaW5nO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlVcGxvYWRlckZpbGVTcGFjaW5nO1xyXG4gICAgd2lkdGg6IEB3ZXVpVXBsb2FkZXJTaXplIC0gQHdldWlVcGxvYWRlckJvcmRlcldpZHRoICogMjtcclxuICAgIGhlaWdodDogQHdldWlVcGxvYWRlclNpemUgLSBAd2V1aVVwbG9hZGVyQm9yZGVyV2lkdGggKiAyO1xyXG4gICAgYm9yZGVyOiBAd2V1aVVwbG9hZGVyQm9yZGVyV2lkdGggc29saWQgQHdldWlVcGxvYWRlckJvcmRlckNvbG9yO1xyXG4gICAgJjpiZWZvcmUsICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVVwbG9hZGVyQm9yZGVyQ29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmJlZm9yZXtcclxuICAgICAgICB3aWR0aDogQHdldWlVcGxvYWRlckJvcmRlcldpZHRoICsgMTtcclxuICAgICAgICBoZWlnaHQ6IEB3ZXVpVXBsb2FkZXJTaXplIC8gMjtcclxuICAgIH1cclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgd2lkdGg6IEB3ZXVpVXBsb2FkZXJTaXplIC8gMjtcclxuICAgICAgICBoZWlnaHQ6IEB3ZXVpVXBsb2FkZXJCb3JkZXJXaWR0aCArIDE7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZXtcclxuICAgICAgICBib3JkZXItY29sb3I6IEB3ZXVpVXBsb2FkZXJBY3RpdmVCb3JkZXJDb2xvcjtcclxuICAgICAgICAmOmJlZm9yZSwgJjphZnRlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlVcGxvYWRlckFjdGl2ZUJvcmRlckNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS11cGxvYWRlcl9faW5wdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuQGltcG9ydCBcIi4uL3dldWktYnV0dG9uL3dldWktYnV0dG9uXCI7XHJcblxyXG4ud2V1aS1tc2cge1xyXG4gICAgcGFkZGluZy10b3A6IEB3ZXVpTXNnUGFkZGluZ1RvcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ud2V1aS1tc2dfX2ljb24tYXJlYSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAd2V1aU1zZ0ljb25HYXA7XHJcbn1cclxuLndldWktbXNnX190ZXh0LWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dUZXh0R2FwO1xyXG4gICAgcGFkZGluZzowIDIwcHg7XHJcbn1cclxuLndldWktbXNnX190ZXh0LWFyZWEgYXtcclxuICAgIGNvbG9yOkB3ZXVpTGlua0NvbG9yRGVmYXVsdDtcclxufVxyXG4ud2V1aS1tc2dfX3RpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IEB3ZXVpTXNnVGl0bGVHYXA7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi53ZXVpLW1zZ19fZGVzYyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59XHJcbi53ZXVpLW1zZ19fb3ByLWFyZWEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHdldWlNc2dPcHJHYXA7XHJcbn1cclxuLndldWktbXNnX19leHRyYS1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IEB3ZXVpTXNnRXh0cmFBcmVhR2FwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIGF7Y29sb3I6IEB3ZXVpTGlua0NvbG9yRGVmYXVsdDt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiBAd2V1aU1zZ0V4dHJhQXJlYU9mTWluSGVpZ2h0KSB7XHJcbiAgICAud2V1aS1tc2dfX2V4dHJhLWFyZWEge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYXJ0aWNsZSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBzZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVlbTtcclxuICAgIH1cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC45ZW07XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMzRlbTtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC4zNGVtO1xyXG4gICAgfVxyXG4gICAgKiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgLjhlbTtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS10YWJiYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDUwMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjdGQTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgLnNldFRvcExpbmUoI0MwQkZDNCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLXRhYmJhcl9faXRlbSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC5zZXRUYXBDb2xvcigpO1xyXG5cclxuICAgICYud2V1aS1iYXJfX2l0ZW1fb24ge1xyXG4gICAgICAgIC53ZXVpLXRhYmJhcl9faWNvbixcclxuICAgICAgICAud2V1aS10YWJiYXJfX2ljb24gPiBpLFxyXG4gICAgICAgIC53ZXVpLXRhYmJhcl9fbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLXRhYmJhcl9faWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuXHJcbiAgICBpJixcclxuICAgID4gaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLXRhYmJhcl9fbGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA1MDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoI0NDQ0NDQyk7XHJcbiAgICB9XHJcblxyXG4gICAgJiArIC53ZXVpLXRhYl9fcGFuZWwge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1uYXZiYXJfX2l0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTNweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFREVERUQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi53ZXVpLWJhcl9faXRlbV9vbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0UmlnaHRMaW5lKCNDQ0NDQ0MpO1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuQGltcG9ydCBcIndldWktdGFiYmFyXCI7XHJcbkBpbXBvcnQgXCJ3ZXVpLW5hdmJhclwiO1xyXG5cclxuLndldWktdGFiIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLndldWktdGFiX19wYW5lbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxufVxyXG4ud2V1aS10YWJfX2NvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLXByb2dyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ud2V1aS1wcm9ncmVzc19fYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpUHJvZ3Jlc3NCZztcclxuICAgIGhlaWdodDogQHdldWlQcm9ncmVzc0hlaWdodDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi53ZXVpLXByb2dyZXNzX19pbm5lci1iYXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aVByb2dyZXNzQ29sb3I7XHJcbn1cclxuXHJcbi53ZXVpLXByb2dyZXNzX19vcHIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG5cclxuLndldWktcGFuZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgLnNldFRvcExpbmUoQHdldWlMaW5lQ29sb3JMaWdodCk7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktcGFuZWxfX2hkIHtcclxuICAgIHBhZGRpbmc6IDE0cHggMTVweCAxMHB4O1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKEB3ZXVpTGluZUNvbG9yTGlnaHQpO1xyXG4gICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1tZWRpYS1ib3gge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcclxuICAgICAgICBsZWZ0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGEme1xyXG4gICAgICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICAgICAgLnNldFRhcENvbG9yKCk7XHJcbiAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0VDRUNFQztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLndldWktbWVkaWEtYm94X190aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgLmVsbGlwc2lzKCk7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuLndldWktbWVkaWEtYm94X19kZXNjIHtcclxuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgLmVsbGlwc2lzTG4oMik7XHJcbn1cclxuLndldWktbWVkaWEtYm94X19pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICNDRUNFQ0U7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLndldWktbWVkaWEtYm94X19pbmZvX19tZXRhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcbi53ZXVpLW1lZGlhLWJveF9faW5mb19fbWV0YV9leHRyYSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NFQ0VDRTtcclxufVxyXG4ud2V1aS1tZWRpYS1ib3hfdGV4dCB7XHJcbiAgICAud2V1aS1tZWRpYS1ib3hfX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuLndldWktbWVkaWEtYm94X2FwcG1zZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC53ZXVpLW1lZGlhLWJveF9faGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLndldWktbWVkaWEtYm94X190aHVtYiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG4gICAgLndldWktbWVkaWEtYm94X19iZCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB9XHJcbn1cclxuLndldWktbWVkaWEtYm94X3NtYWxsLWFwcG1zZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLndldWktY2VsbHMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1ncmlkcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUdyaWRCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0TGVmdExpbmUoQHdldWlHcmlkQm9yZGVyQ29sb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1ncmlkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCUgLyBAd2V1aUdyaWRDb2x1bW5Db3VudDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRSaWdodExpbmUoQHdldWlHcmlkQm9yZGVyQ29sb3IpO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoQHdldWlHcmlkQm9yZGVyQ29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJnQ29sb3JBY3RpdmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWdyaWRfX2ljb24ge1xyXG4gICAgd2lkdGg6IEB3ZXVpR3JpZEljb25TaXplO1xyXG4gICAgaGVpZ2h0OiBAd2V1aUdyaWRJY29uU2l6ZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgICYgKyAud2V1aS1ncmlkX19sYWJlbHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWdyaWRfX2xhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yVGl0bGU7XHJcbiAgICBmb250LXNpemU6IEB3ZXVpR3JpZEZvbnRTaXplO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktZm9vdGVyIHtcclxuICAgIGNvbG9yOiBAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUxpbmtDb2xvckRlZmF1bHQ7XHJcbiAgICB9XHJcbn1cclxuLndldWktZm9vdGVyX2ZpeGVkLWJvdHRvbXtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLjUyZW07XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuLndldWktZm9vdGVyX19saW5rc3tcclxuICAgIGZvbnQtc2l6ZTogMDtcclxufVxyXG4ud2V1aS1mb290ZXJfX2xpbmt7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luOiAwIC42MmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgLnNldExlZnRMaW5lKCk7XHJcbiAgICAgICAgbGVmdDogLS42NWVtO1xyXG4gICAgICAgIHRvcDogLjM2ZW07XHJcbiAgICAgICAgYm90dG9tOiAuMzZlbTtcclxuICAgIH1cclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi53ZXVpLWZvb3Rlcl9fdGV4dHtcclxuICAgIHBhZGRpbmc6IDAgLjM0ZW07XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi53ZXVpLWZsZXhfX2l0ZW17XHJcbiAgICBmbGV4OiAxO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWRpYWxvZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpRGlhbG9nQmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4ud2V1aS1kaWFsb2dfX2hkIHtcclxuICAgIHBhZGRpbmc6IDEuM2VtIEB3ZXVpRGlhbG9nR2FwV2lkdGggLjVlbTtcclxufVxyXG4ud2V1aS1kaWFsb2dfX3RpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLndldWktZGlhbG9nX19iZCB7XHJcbiAgICBwYWRkaW5nOiAwIEB3ZXVpRGlhbG9nR2FwV2lkdGggLjhlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgY29sb3I6IEB3ZXVpVGV4dENvbG9yR3JheTtcclxuICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgcGFkZGluZzoyLjdlbSAyMHB4IDEuN2VtO1xyXG4gICAgICAgIGNvbG9yOiMzNTM1MzU7XHJcbiAgICB9XHJcbn1cclxuLndldWktZGlhbG9nX19mdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aURpYWxvZ0xpbmVDb2xvcik7XHJcbiAgICB9XHJcbn1cclxuLndldWktZGlhbG9nX19idG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgY29sb3I6IEB3ZXVpRGlhbG9nTGlua0NvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgLnNldFRhcENvbG9yKCk7XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlEaWFsb2dMaW5rQWN0aXZlQmM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgLnNldExlZnRMaW5lKEB3ZXVpRGlhbG9nTGluZUNvbG9yKTtcclxuICAgIH1cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS1kaWFsb2dfX2J0bl9kZWZhdWx0IHtcclxuICAgIGNvbG9yOiAjMzUzNTM1O1xyXG59XHJcbi53ZXVpLWRpYWxvZ19fYnRuX3ByaW1hcnkge1xyXG4gICAgY29sb3I6ICMwQkIyMEM7XHJcbn1cclxuXHJcbi53ZXVpLXNraW5fYW5kcm9pZHtcclxuICAgIC53ZXVpLWRpYWxvZyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbiAgICB9XHJcbiAgICAud2V1aS1kaWFsb2dfX3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIH1cclxuICAgIC53ZXVpLWRpYWxvZ19faGR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC53ZXVpLWRpYWxvZ19fYmR7XHJcbiAgICAgICAgY29sb3I6QHdldWlUZXh0Q29sb3JHcmF5O1xyXG4gICAgICAgIHBhZGRpbmc6LjI1ZW0gQHdldWlEaWFsb2dHYXBXaWR0aCAyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgcGFkZGluZzoxLjZlbSBAd2V1aURpYWxvZ0dhcFdpZHRoIDJlbTtcclxuICAgICAgICAgICAgY29sb3I6IzM1MzUzNTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAud2V1aS1kaWFsb2dfX2Z0e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBwYWRkaW5nOjAgQHdldWlEaWFsb2dHYXBXaWR0aCAuN2VtO1xyXG4gICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndldWktZGlhbG9nX19idG57XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgcGFkZGluZzowIC44ZW07XHJcbiAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6dmlzaXRlZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLS44ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLndldWktZGlhbG9nX19idG5fZGVmYXVsdCB7XHJcbiAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLndldWktZGlhbG9nIHtcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS10b2FzdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgd2lkdGg6IDcuNmVtO1xyXG4gICAgbWluLWhlaWdodDogNy42ZW07XHJcbiAgICB0b3A6IDE4MHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zLjhlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNDAsIDQwLCA0MCwgMC43NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4ud2V1aS1pY29uX3RvYXN0IHtcclxuICAgIG1hcmdpbjogMjJweCAwIDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICYud2V1aS1pY29uLXN1Y2Nlc3Mtbm8tY2lyY2xle1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi53ZXVpLWxvYWRpbmd7XHJcbiAgICAgIG1hcmdpbjozMHB4IDAgMDtcclxuICAgICAgd2lkdGg6MzhweDtcclxuICAgICAgaGVpZ2h0OjM4cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktdG9hc3RfX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktbWFzayB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNik7XHJcbn1cclxuXHJcbi53ZXVpLW1hc2tfdHJhbnNwYXJlbnR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuQHdldWlBY3Rpb25TaGVldEFuZHJvaWRCb3JkZXJSYWRpdXM6IDJweDtcclxuXHJcbi53ZXVpLWFjdGlvbnNoZWV0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQmdDb2xvckRlZmF1bHQ7XHJcbiAgICAvL3NsaWRlIHVwIGFuaW1hdGlvblxyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxufVxyXG4ud2V1aS1hY3Rpb25zaGVldF9fbWVudXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLndldWktYWN0aW9uc2hlZXRfX2FjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi53ZXVpLWFjdGlvbnNoZWV0X19jZWxsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZShAd2V1aUNlbGxCb3JkZXJDb2xvcik7XHJcbiAgICB9XHJcbiAgICAmOmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAd2V1aUJnQ29sb3JBY3RpdmU7XHJcbiAgICB9XHJcbiAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vYW5kcm9pZCBhY3Rpb25TaGVldFxyXG4ud2V1aS1za2luX2FuZHJvaWR7XHJcbiAgICAud2V1aS1hY3Rpb25zaGVldCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBib3R0b206IGF1dG87XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgLy9wYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI3NHB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC8vc2xpZGUgdXAgYW5pbWF0aW9uXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcztcclxuICAgIH1cclxuICAgIC53ZXVpLWFjdGlvbnNoZWV0X19hY3Rpb257XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC53ZXVpLWFjdGlvbnNoZWV0X19tZW51IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBAd2V1aUFjdGlvblNoZWV0QW5kcm9pZEJvcmRlclJhZGl1cztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAzMHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgICB9XHJcbiAgICAud2V1aS1hY3Rpb25zaGVldF9fY2VsbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTNweCAyNHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IEB3ZXVpQWN0aW9uU2hlZXRBbmRyb2lkQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQHdldWlBY3Rpb25TaGVldEFuZHJvaWRCb3JkZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IEB3ZXVpQWN0aW9uU2hlZXRBbmRyb2lkQm9yZGVyUmFkaXVzO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQHdldWlBY3Rpb25TaGVldEFuZHJvaWRCb3JkZXJSYWRpdXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vL2FjdGlvblNoZWV0IGFuaWFtdGlvblxyXG4ud2V1aS1hY3Rpb25zaGVldF90b2dnbGV7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1sb2FkbW9yZXtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXJnaW46MS41ZW0gYXV0bztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi53ZXVpLWxvYWRtb3JlX190aXBze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLndldWktbG9hZG1vcmVfbGluZXtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIEB3ZXVpTGluZUNvbG9yTGlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjIuNGVtO1xyXG4gICAgLndldWktbG9hZG1vcmVfX3RpcHN7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDotLjllbTtcclxuICAgICAgICBwYWRkaW5nOjAgLjU1ZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICBjb2xvcjpAd2V1aVRleHRDb2xvckdyYXk7XHJcbiAgICB9XHJcbn1cclxuLndldWktbG9hZG1vcmVfZG90e1xyXG4gICAgLndldWktbG9hZG1vcmVfX3RpcHN7XHJcbiAgICAgICAgcGFkZGluZzowIC4xNmVtO1xyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgICAgICAgd2lkdGg6NHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlMaW5lQ29sb3JMaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiAwO1xyXG4gICAgICAgICAgICB0b3A6LS4xNmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1iYWRnZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuMTVlbSAuNGVtO1xyXG4gICAgbWluLXdpZHRoOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogQHdldWlDb2xvcldhcm47XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi53ZXVpLWJhZGdlX2RvdCB7XHJcbiAgICBwYWRkaW5nOiAuNGVtO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuLndldWktc2VhcmNoLWJhciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZGNDtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICAuc2V0VG9wTGluZSgjRDdENkRDKTtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIC5zZXRCb3R0b21MaW5lKCNEN0Q2REMpO1xyXG4gICAgfVxyXG4gICAgJi53ZXVpLXNlYXJjaC1iYXJfZm9jdXNpbmd7XHJcbiAgICAgICAgLndldWktc2VhcmNoLWJhcl9fY2FuY2VsLWJ0bntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53ZXVpLXNlYXJjaC1iYXJfX2xhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ud2V1aS1zZWFyY2gtYmFyX19mb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkY0O1xyXG4gICAgJjphZnRlcntcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6MDtcclxuICAgICAgICB3aWR0aDogMjAwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U2RTZFQTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICB9XHJcbn1cclxuLndldWktc2VhcmNoLWJhcl9fYm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLndldWktc2VhcmNoLWJhcl9faW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjAvMTRlbTtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMC8xNGVtO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC53ZXVpLWljb24tc2VhcmNoIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB9XHJcbiAgICAud2V1aS1pY29uLWNsZWFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIH1cclxufVxyXG4ud2V1aS1zZWFyY2gtYmFyX19sYWJlbCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIHJpZ2h0OiAxcHg7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIGxlZnQ6IDFweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzlCOUI5QjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbiAgICAud2V1aS1pY29uLXNlYXJjaCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuLndldWktc2VhcmNoLWJhcl9fY2FuY2VsLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGNvbG9yOiAjMDlCQjA3O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4ud2V1aS1zZWFyY2gtYmFyX19pbnB1dDpub3QoOnZhbGlkKSB+IC53ZXVpLWljb24tY2xlYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLy/lubLmjolpbnB1dFtzZWFyY2hd6buY6K6k55qEY2xlYXIgYnV0dG9uXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLXJlc3VsdHMtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1yZXN1bHRzLWRlY29yYXRpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSIsIkBpbXBvcnQgXCIuLi8uLi9iYXNlL2ZuXCI7XHJcblxyXG4ud2V1aS1waWNrZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogNTAwMDtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwMCUpO1xyXG4gICAgLy9zbGlkZSB1cCBhbmltYXRpb25cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3M7XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9faGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmY5ZmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICAuc2V0Qm90dG9tTGluZShAd2V1aUxpbmVDb2xvckxpZ2h0KTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktcGlja2VyX19hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgY29sb3I6IEB3ZXVpTGlua0NvbG9yRGVmYXVsdDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktcGlja2VyX19iZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogMjM4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud2V1aS1waWNrZXJfX2dyb3VwIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLy13ZWJraXQtbWFzay1ib3gtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSx0cmFuc3BhcmVudCx0cmFuc3BhcmVudCA1JSwjZmZmIDUwJSwjZmZmIDUwJSx0cmFuc3BhcmVudCA5NSUsdHJhbnNwYXJlbnQpO1xyXG59XHJcblxyXG4ud2V1aS1waWNrZXJfX21hc2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgaHNsYSgwLCAwJSwgMTAwJSwgLjk1KSwgaHNsYSgwLCAwJSwgMTAwJSwgLjYpKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsIGhzbGEoMCwgMCUsIDEwMCUsIC45NSksIGhzbGEoMCwgMCUsIDEwMCUsIC42KSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AsIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDJweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9faW5kaWNhdG9yIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTAycHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC5zZXRUb3BMaW5lKEB3ZXVpTGluZUNvbG9yTGlnaHQpO1xyXG4gICAgfVxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgLnNldEJvdHRvbUxpbmUoQHdldWlMaW5lQ29sb3JMaWdodCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9fY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9faXRlbSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi53ZXVpLXBpY2tlcl9faXRlbV9kaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4ud2V1aS1hbmltYXRlLXNsaWRlLXVwIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVVcCBlYXNlIC4zcyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZURvd24ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktYW5pbWF0ZS1zbGlkZS1kb3duIHtcclxuICAgIGFuaW1hdGlvbjogc2xpZGVEb3duIGVhc2UgLjNzIGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi53ZXVpLWFuaW1hdGUtZmFkZS1pbiB7XHJcbiAgICBhbmltYXRpb246IGZhZGVJbiBlYXNlIC4zcyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLndldWktYW5pbWF0ZS1mYWRlLW91dCB7XHJcbiAgICBhbmltYXRpb246IGZhZGVPdXQgZWFzZSAuM3MgZm9yd2FyZHM7XHJcbn0iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktYWdyZWV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IC41ZW0gMTVweDtcclxuICAgIGZvbnQtc2l6ZSA6MTNweDtcclxuXHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiBAd2V1aUxpbmtDb2xvckRlZmF1bHQ7XHJcbiAgICB9XHJcbn1cclxuLndldWktYWdyZWVfX3RleHR7XHJcbiAgICBjb2xvcjogQHdldWlUZXh0Q29sb3JHcmF5O1xyXG59XHJcbi53ZXVpLWFncmVlX19jaGVja2JveHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdmVydGljYWwtYWxpZ246IDA7XHJcbiAgICB0b3A6IDJweDtcclxuXHJcbiAgICAmOmNoZWNrZWR7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIndldWlcIjtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgc3BlYWs6IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlxcRUEwOFwiO1xyXG4gICAgICAgICAgICBjb2xvcjogIzA5QkIwNztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC00OCUpIHNjYWxlKC43Myk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpkaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNFMUUxRTE7XHJcbiAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiNBREFEQUQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCBcIi4uLy4uL2Jhc2UvZm5cIjtcclxuXHJcbi53ZXVpLWxvYWRpbmcge1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYW5pbWF0aW9uOiB3ZXVpTG9hZGluZyAxcyBzdGVwcygxMiwgZW5kKSBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TWpBaUlHaGxhV2RvZEQwaU1USXdJaUIyYVdWM1FtOTRQU0l3SURBZ01UQXdJREV3TUNJK1BIQmhkR2dnWm1sc2JEMGlibTl1WlNJZ1pEMGlUVEFnTUdneE1EQjJNVEF3U0RCNklpOCtQSEpsWTNRZ2QybGtkR2c5SWpjaUlHaGxhV2RvZEQwaU1qQWlJSGc5SWpRMkxqVWlJSGs5SWpRd0lpQm1hV3hzUFNJalJUbEZPVVU1SWlCeWVEMGlOU0lnY25rOUlqVWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJems0T1RZNU55SWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNnek1DQXhNRFV1T1RnZ05qVXBJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpPVUk1T1RsQklpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWNtOTBZWFJsS0RZd0lEYzFMams0SURZMUtTSXZQanh5WldOMElIZHBaSFJvUFNJM0lpQm9aV2xuYUhROUlqSXdJaUI0UFNJME5pNDFJaUI1UFNJME1DSWdabWxzYkQwaUkwRXpRVEZCTWlJZ2NuZzlJalVpSUhKNVBTSTFJaUIwY21GdWMyWnZjbTA5SW5KdmRHRjBaU2c1TUNBMk5TQTJOU2tpTHo0OGNtVmpkQ0IzYVdSMGFEMGlOeUlnYUdWcFoyaDBQU0l5TUNJZ2VEMGlORFl1TlNJZ2VUMGlOREFpSUdacGJHdzlJaU5CUWtFNVFVRWlJSEo0UFNJMUlpQnllVDBpTlNJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb01USXdJRFU0TGpZMklEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMEl5UWpKQ01pSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNneE5UQWdOVFF1TURJZ05qVXBJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpRa0ZDT0VJNUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWNtOTBZWFJsS0RFNE1DQTFNQ0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlORE1rTXdRekVpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVEUxTUNBME5TNDVPQ0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlORFFrTkNRMElpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVEV5TUNBME1TNHpOQ0EyTlNraUx6NDhjbVZqZENCM2FXUjBhRDBpTnlJZ2FHVnBaMmgwUFNJeU1DSWdlRDBpTkRZdU5TSWdlVDBpTkRBaUlHWnBiR3c5SWlORU1rUXlSRElpSUhKNFBTSTFJaUJ5ZVQwaU5TSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9MVGt3SURNMUlEWTFLU0l2UGp4eVpXTjBJSGRwWkhSb1BTSTNJaUJvWldsbmFIUTlJakl3SWlCNFBTSTBOaTQxSWlCNVBTSTBNQ0lnWm1sc2JEMGlJMFJCUkVGRVFTSWdjbmc5SWpVaUlISjVQU0kxSWlCMGNtRnVjMlp2Y20wOUluSnZkR0YwWlNndE5qQWdNalF1TURJZ05qVXBJaTgrUEhKbFkzUWdkMmxrZEdnOUlqY2lJR2hsYVdkb2REMGlNakFpSUhnOUlqUTJMalVpSUhrOUlqUXdJaUJtYVd4c1BTSWpSVEpGTWtVeUlpQnllRDBpTlNJZ2NuazlJalVpSUhSeVlXNXpabTl5YlQwaWNtOTBZWFJsS0Mwek1DQXROUzQ1T0NBMk5Ta2lMejQ4TDNOMlp6ND0pIG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3ZXVpTG9hZGluZyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vYmFzZS9mblwiO1xyXG5cclxuLndldWktc2xpZGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMThweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ud2V1aS1zbGlkZXJfX2lubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlFOTtcclxufVxyXG5cclxuLndldWktc2xpZGVyX190cmFjayB7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IEB3ZXVpQ29sb3JQcmltYXJ5O1xyXG4gICAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi53ZXVpLXNsaWRlcl9faGFuZGxlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTRweDtcclxuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcbn1cclxuXHJcblxyXG4ud2V1aS1zbGlkZXItYm94e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAud2V1aS1zbGlkZXJ7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgIH1cclxufVxyXG4ud2V1aS1zbGlkZXItYm94X192YWx1ZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjVlbTtcclxuICAgIG1pbi13aWR0aDogMjRweDtcclxuICAgIGNvbG9yOiAjODg4ODg4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */"));
