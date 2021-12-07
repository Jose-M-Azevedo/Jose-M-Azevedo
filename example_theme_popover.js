"use strict";

ckan.module('example_theme_popover', function ($) {
  return {
    initialize: function () {
         const params = new URLSearchParams(window.location.search)
         params.append('hide', 'true');

         if (params.get('hide') === 'true'){
           document.getElementById("footer").style.display="none";
           document.getElementById("header").style.display="none";
         }
    }
  };
});
