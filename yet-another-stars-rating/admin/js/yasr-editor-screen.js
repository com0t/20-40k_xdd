(()=>{function e(e){"Product"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"LocalBusiness"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"Recipe"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"SoftwareApplication"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"Book"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="none"):"Movie"===e?(document.getElementById("yasr-metabox-info-snippet-container").style.display="",document.getElementById("yasr-metabox-info-snippet-container-movie").style.display="",document.getElementById("yasr-metabox-info-snippet-container-recipe").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-localbusiness").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-product").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-software").style.display="none",document.getElementById("yasr-metabox-info-snippet-container-book").style.display="none"):document.getElementById("yasr-metabox-info-snippet-container").style.display="none"}function t(e,t,n){const a={action:"yasr_send_id_nameset",set_id:e,post_id:t};return jQuery.post(ajaxurl,a,(function(t){n>1&&(document.getElementById("yasr-loader-select-multi-set").style.display="none");for(var a=JSON.parse(t),o="",s=0;s<a.length;s++){var i=a[s].name,r=a[s].average_rating,l=a[s].id;o+="<tr>",o+="<td>"+i+"</td>",o+='<td><div class="yasr-multiset-admin" id="yasr-multiset-admin-'+l+'" data-rating="'+r+'" data-multi-idfield="'+l+'"></div>',o+='<span id="yasr-loader-multi-set-field-'+l+'" style="display: none">',o+='<img src="'+yasrCommonData.loaderHtml+'" alt="yasr-loader"></span>',o+="</span>",o+="</td>",o+="</tr>",document.getElementById("yasr-table-multi-set-admin").innerHTML=o}document.getElementById("yasr-multi-set-admin-choose-text").style.display="block",function(e){document.getElementById("yasr-multiset-id").value=e;let t=document.getElementsByClassName("yasr-multiset-admin"),n=[],a=!1;for(let e=0;e<t.length;e++)!function(e){let o=t.item(e).id,s=document.getElementById(o),i=parseInt(s.getAttribute("data-multi-idfield")),r=parseInt(s.getAttribute("data-rating")),l={field:i,rating:r};n.push(l),raterJs({starSize:32,step:.5,showToolTip:!1,readOnly:!1,element:s,rateCallback:function(e,t){e=e.toFixed(1),e=parseFloat(e),this.setRating(e);for(let t=0;t<n.length;t++)n[t].field===i&&(n[t].rating=e);a=JSON.stringify(n),document.getElementById("yasr-multiset-author-votes").value=a,t()}})}(e)}(e),document.getElementById("yasr-multi-set-admin-explain").style.display="block",document.getElementById("yasr-multi-set-admin-explain-with-id-readonly").innerHTML="<strong>[yasr_multiset setid="+e+"]</strong>",document.getElementById("yasr-multi-set-admin-explain-with-id-visitor").innerHTML="<strong>[yasr_visitor_multiset setid="+e+"]</strong>"})),!1}document.addEventListener("DOMContentLoaded",(function(n){var a;!0!==document.body.classList.contains("block-editor-page")&&(function(){let e=parseFloat(document.getElementById("yasr-overall-rating-value").value);raterJs({starSize:32,step:.1,showToolTip:!1,rating:e,readOnly:!1,element:document.getElementById("yasr-rater-overall"),rateCallback:function(e,t){e=e.toFixed(1),e=parseFloat(e),document.getElementById("yasr-overall-rating-value").value=e,this.setRating(e);document.getElementById("yasr_overall_text").textContent="You've rated "+e,t()}})}(),a={action:"yasr_create_shortcode"},jQuery.get(ajaxurl,a,(function(e){jQuery(e).appendTo("body").hide(),function(){let e=!1;null!==document.getElementById("yasr-editor-multiset-container")&&(e=!0);const t=document.getElementById("yasr-tinypopup-link-doc");jQuery("#yasr-link-tab-main").on("click",(function(){jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-link-tab-main").addClass("nav-tab-active"),jQuery(".yasr-content-tab-tinymce").hide(),jQuery("#yasr-content-tab-main").show(),t.setAttribute("href","https://yetanotherstarsrating.com/yasr-basics-shortcode/?utm_source=wp-plugin&utm_medium=tinymce-popup&utm_campaign=yasr_editor_screen")})),jQuery("#yasr-link-tab-charts").on("click",(function(){jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-link-tab-charts").addClass("nav-tab-active"),jQuery(".yasr-content-tab-tinymce").hide(),jQuery("#yasr-content-tab-charts").show(),t.setAttribute("href","https://yetanotherstarsrating.com/yasr-rankings/?utm_source=wp-plugin&utm_medium=tinymce-popup&utm_campaign=yasr_editor_screen")})),jQuery("#yasr-overall").on("click",(function(){jQuery("#yasr-overall-choose-size").toggle("slow")})),jQuery("#yasr-visitor-votes").on("click",(function(){jQuery("#yasr-visitor-choose-size").toggle("slow")})),jQuery(".yasr-tinymce-shortcode-buttons").on("click",(function(){let e=this.getAttribute("data-shortcode");null==tinyMCE.activeEditor?jQuery("#content").append(e):tinyMCE.activeEditor.execCommand("mceInsertContent",0,e),tb_remove()})),!0===e&&jQuery("#yasr-insert-multiset-select").on("click",(function(){var e=jQuery("input:radio[name=yasr_tinymce_pick_set]:checked").val();let t;t=jQuery("#yasr-allow-vote-multiset").is(":checked")?"[yasr_multiset setid=":"[yasr_visitor_multiset setid=",t+=e,jQuery("#yasr-hide-average-multiset").is(":checked")&&(t+=" show_average='no'"),t+="]",null==tinyMCE.activeEditor?jQuery("#content").append(t):tinyMCE.activeEditor.execCommand("mceInsertContent",0,t),tb_remove()}))}()}))),function(){jQuery("#yasr-metabox-below-editor-structured-data-tab").on("click",(function(e){e.preventDefault(),jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-metabox-below-editor-structured-data-tab").addClass("nav-tab-active"),jQuery(".yasr-metabox-below-editor-content").hide(),jQuery("#yasr-metabox-below-editor-structured-data").show()})),jQuery("#yasr-metabox-below-editor-multiset-tab").on("click",(function(e){e.preventDefault(),jQuery(".yasr-nav-tab").removeClass("nav-tab-active"),jQuery("#yasr-metabox-below-editor-multiset-tab").addClass("nav-tab-active"),jQuery(".yasr-metabox-below-editor-content").hide(),jQuery("#yasr-metabox-below-editor-multiset").show()}));let n=document.getElementById("yasr-metabox-below-editor-select-schema").value;null!==document.getElementById("yasr-editor-multiset-container")&&function(){let e=document.getElementById("yasr-editor-multiset-container"),n=parseInt(e.getAttribute("data-nmultiset")),a=parseInt(e.getAttribute("data-setid")),o=parseInt(e.getAttribute("data-postid"));t(a,o,n),n>1&&jQuery("#yasr-button-select-set").on("click",(function(){return a=jQuery("#select_set").val(),jQuery("#yasr-loader-select-multi-set").show(),t(a,o,n),!1}))}(),e(n)}()})),document.getElementById("yasr-metabox-below-editor-select-schema").addEventListener("change",(function(){e(this.value)}))})();