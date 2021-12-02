(()=>{"use strict";var e,t,a,r,n={245:(e,t,a)=>{a.r(t),a.d(t,{YasrBlocksPanel:()=>R,YasrDivRatingOverall:()=>S,YasrNoSettingsPanel:()=>E,YasrPrintInputId:()=>h,YasrPrintSelectSize:()=>v,YasrProText:()=>b,yasrLabelSelectSize:()=>i,yasrLeaveThisBlankText:()=>d,yasrOptionalText:()=>o,yasrOverallDescription:()=>g,yasrSelectSizeChoose:()=>c,yasrSelectSizeLarge:()=>p,yasrSelectSizeMedium:()=>m,yasrSelectSizeSmall:()=>u,yasrVisitorVotesDescription:()=>y});var r=a(245),n=wp.i18n.__,s=wp.components.PanelBody,l=wp.blockEditor.InspectorControls,o=n("All these settings are optional","yet-another-stars-rating"),i=n("Choose Size","yet-another-stars-rating"),c=n("Choose stars size","yet-another-stars-rating"),u=n("Small","yet-another-stars-rating"),m=n("Medium","yet-another-stars-rating"),p=n("Large","yet-another-stars-rating"),d=n("Leave this blank if you don't know what you're doing.","yet-another-stars-rating"),g=n("Remember: only the post author can rate here.","yet-another-stars-rating"),y=n("This is the star set where your users will be able to vote","yet-another-stars-rating");function v(e){return React.createElement("form",null,React.createElement("select",{value:e.size,onChange:function(t){return(0,e.setAttributes)({size:(a=t).target.querySelector("option:checked").value}),void a.preventDefault();var a}},React.createElement("option",{value:"--"},r.yasrSelectSizeChoose),React.createElement("option",{value:"small"},r.yasrSelectSizeSmall),React.createElement("option",{value:"medium"},r.yasrSelectSizeMedium),React.createElement("option",{value:"large"},r.yasrSelectSizeLarge)))}function h(e){var t;return!1!==e.postId&&(t=e.postId),React.createElement("div",null,React.createElement("input",{type:"text",size:"4",defaultValue:t,onKeyPress:function(t){return function(e,t){if("Enter"===t.key){var a=t.target.value;!0!==/^\d+$/.test(a)&&""!==a||e({postId:a}),t.preventDefault()}}(e.setAttributes,t)}}))}function b(){var e=n("To be able to customize this ranking, you need","yet-another-stars-rating"),t=n("You can buy the plugin, including support, updates and upgrades, on","yet-another-stars-rating");return React.createElement("h3",null,e," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings#yasr-pro"},"Yasr Pro."),React.createElement("br",null),t," ",React.createElement("a",{href:"https://yetanotherstarsrating.com/?utm_source=wp-plugin&utm_medium=gutenberg_panel&utm_campaign=yasr_editor_screen&utm_content=rankings"},"yetanotherstarsrating.com"))}function E(e){return React.createElement("div",null,React.createElement(b,null))}function R(e){var t;return"visitors"===e.block&&(t=y),"overall"===e.block&&(t=g),React.createElement(l,null,"overall"===e.block&&React.createElement(S,null),React.createElement(s,{title:"Settings"},React.createElement("h3",null,o),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,i),React.createElement("div",null,React.createElement(v,{size:e.size,setAttributes:e.setAttributes}))),React.createElement("div",{className:"yasr-guten-block-panel"},React.createElement("label",null,"Post ID"),React.createElement(h,{postId:e.postId,setAttributes:e.setAttributes}),React.createElement("div",{className:"yasr-guten-block-explain"},d)),React.createElement("div",{className:"yasr-guten-block-panel"},t)))}function S(e){if(!0===JSON.parse(yasrConstantGutenberg.isFseElement))return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},React.createElement("div",null,n("This is a template file, you can't rate here. You need to insert the rating inside the single post or page","yet-another-stars-rating")),React.createElement("br",null));var t=n("Rate this article / item","yet-another-stars-rating"),a=wp.data.select("core/editor").getCurrentPost().meta.yasr_overall_rating,r=function(e,t){e=e.toFixed(1),e=parseFloat(e),wp.data.dispatch("core/editor").editPost({meta:{yasr_overall_rating:e}}),this.setRating(e),t()};return React.createElement("div",{className:"yasr-guten-block-panel yasr-guten-block-panel-center"},t,React.createElement("div",{id:"overall-rater",ref:function(){return function(e,t){var a,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.1,n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],l=arguments.length>6&&void 0!==arguments[6]&&arguments[6];a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]||document.getElementById(t),e=parseInt(e),raterJs({starSize:e,showToolTip:!1,element:a,step:r,readOnly:n,rating:s,rateCallback:l})}(32,"overall-rater",!1,.1,!1,a,r)}}))}}},s={};function l(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}};return n[e](a,a.exports,l),a.exports}l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e=l(245),wp.i18n.__,t=wp.blocks.registerBlockType,a=wp.element.Fragment,r=wp.blockEditor.useBlockProps,t("yet-another-stars-rating/visitor-votes",{edit:function(t){var n=r({className:"yasr-vv-block"}),s=t.attributes,l=s.size,o=s.postId,i=t.setAttributes,c=t.isSelected,u=null,m=null;return"large"!==l&&(u=' size="'+l+'"'),!0===/^\d+$/.test(o)&&(m=' postid="'+o+'"'),React.createElement(a,null,React.createElement(e.YasrBlocksPanel,{block:"visitors",size:l,setAttributes:i,postId:o}),React.createElement("div",n,"[yasr_visitor_votes",u,m,"]",c&&React.createElement(e.YasrPrintSelectSize,{size:l,setAttributes:i})))},save:function(e){var t=r.save({className:"yasr-vv-block"}),a=e.attributes,n=a.size,s=a.postId,l="";return n&&(l+='size="'+n+'"'),s&&(l+=' postid="'+s+'"'),React.createElement("div",t,"[yasr_visitor_votes ",l,"]")}})})();