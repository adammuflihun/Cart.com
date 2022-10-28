// <!-- Clearbit -->
// <script type="text/javascript">
//   (function (d, u, h, s) {
//     h = d.getElementsByTagName('head')[0];
//     s = d.createElement('script');
//     s.async = 1;
//     s.src = u + new Date().getTime();
//     h.appendChild(s);
//   })(document, 'https://grow.clearbitjs.com/api/pixel.js?v=');
// </script>

// <!-- SalesIntel -->
// <script>
//   (function (w, d, t) {
//     _ml = w._ml || {};
//     _ml.eid = '81430';
//     _ml.cid = '380178d7-d2d3-4644-98bf-aeb6391f4087';
//     var s, cd, tag; s = d.getElementsByTagName(t)[0]; cd = new Date();
//     tag = d.createElement(t); tag.async = 1;
//     tag.src = 'https://ml314.com/tag.aspx?' + cd.getDate() + cd.getMonth();
//     s.parentNode.insertBefore(tag, s);
//   })(window, document, 'script');
// </script>

// <!-- Custom scripts -->
// <script>
//   const selectButton = document.getElementById("country");
//   const defaultSelectedOption = selectButton.options[245];
//   defaultSelectedOption.selected = "United States";
//   const stateShow = document.getElementById("state");
//   stateShow.classList.add("show");

//   $("#country").change(function() {
//     if ($(this).find(":selected").text() === "United States") {
//       $("#state").addClass("show");
//     } else {
//       $("#state").removeClass("show");
//     };
//   });
// </script>

// <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"></script>

// <script>
//   // Parse the URL

//   if (window.location.href.indexOf('utm') > -1) {

//     function getParameterByName(name) {
//       name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//       var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
//           results = regex.exec(location.search);
//       return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
//     }
//     // Give the URL parameters variable names
//     let source = getParameterByName('utm_source');
//     let medium = getParameterByName('utm_medium');
//     let campaign = getParameterByName('utm_campaign');

//     // Set the cookies
//     Cookies.set('utm_source', source);
//     Cookies.set('utm_medium', medium);
//     Cookies.set('utm_campaign', campaign);

//   }
//   else {}

//   $(document).ready(function() {
//     let landing_page = Cookies.get("__gtm_campaign_url");
//     let referrer = Cookies.get("__gtm_referrer");
//     let prev_page =  document.referrer;
//     let current_page = window.location.href;
//     let utm_medium_f = Cookies.get("utm_medium");
//     let utm_source_f = Cookies.get("utm_source");
//     let utm_campaign_f = Cookies.get("utm_campaign");

//     $('.utm_source').val(utm_source_f);
//     $('.utm_medium').val(utm_medium_f);
//     $('.utm_campaign').val(utm_campaign_f);
//     $('.current_page').val(current_page);
//     $('.prev_page').val(prev_page);
//     $('.referrer_url').val(referrer);
//     $('.landing_page').val(landing_page);

//     // Get all links on a page that go to brand console signup page
//     const bcButtons = document.querySelectorAll("a[href^='https://console.cart.com/signup']");
//     // Split the UTM cookie on the query param separator
//     const utmCodes = landing_page.split('?')[1]

//     // Add the UTM codes to each brand console link based on whether or not
//     // the link already has query parameters. These links should not already
//     // have UTM codes on them (or else we wouldn't have had UTM tracking
//     // problems in the first place)
//     bcButtons.forEach((bcButton) => {
//       if (bcButton.href.includes('?')) {
//         bcButton.href += `&${utmCodes}`
//       } else {
//         bcButton.href += `?${utmCodes}`
//       }
//     })
//   });

// </script>

// <script>
// $(function () {
// 	$(".form__submit").click(function () {
// 			var check_values = [];
// 		var check_family = [];

// 		$(".checkboxes__grid input:checked").each(function () {
// 			check_values.push($(this).data("name"));
// 			check_family.push($(this).attr("family"));

// 			$(".check_select").val(check_values);

// 			if (
// 				check_family.includes("Storefront") === true ||
// 				check_family.includes("Multichannel Management") === true ||
// 				check_family.includes("Advanced Analytics") === true ||
// 				check_family.includes("Feed Management") === true ||
// 				check_family.includes("Funding") === true
// 			) {
// 				$(".product_family").val("Storefront");
// 			}
// 			else if (check_family.includes("Marketplace Services") === true || check_family.includes("Growth Marketing") === true) {
// 				$(".product_family").val("Marketplace Services");
// 			}
//          else if (check_family.includes("Fulfillment") === true || check_family.includes("Customer Engagement") === true) {
// 				$(".product_family").val("Fulfillment");
// 			}else {
// 				$(".product_family").val("error41");
// 			}
// 		});
// 	});
// });

// </script>

// <!-- Start of Async Drift Code -->
// <script>
//   "use strict";
//   !function() {
//     var t = window.driftt = window.drift = window.driftt || [];
//     if (!t.init) {
//       if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
//       t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
//         t.factory = function(e) {
//         return function() {
//           var n = Array.prototype.slice.call(arguments);
//           return n.unshift(e), t.push(n), t;
//         };
//       }, t.methods.forEach(function(e) {
//         t[e] = t.factory(e);
//       }), t.load = function(t) {
//         var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
//         o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
//         var i = document.getElementsByTagName("script")[0];
//         i.parentNode.insertBefore(o, i);
//       };
//     }
//   }();
//   drift.SNIPPET_VERSION = '0.3.1';
//   drift.load('wm88bfyphwp8');

//   drift.api.collectFormData('#wf-form-Order-Fulfillment-Form', {
//     campaignId: 2538522,
//     followupUrl: 'Optional: Remove this or replace with thank you page URL'
//   });
// </script>
// <!-- End of Async Drift Code -->

// <script>
//   window._6si = window._6si || [];
//   window._6si.push(['enableEventTracking', true]);
//   window._6si.push(['setToken', 'ddfdd50420fc201ec8748072d5313bd5']);
//   window._6si.push(['setEndpoint', 'b.6sc.co']);

//   (function() {
//     var gd = document.createElement('script');
//     gd.type = 'text/javascript';
//     gd.async = true;
//     gd.src = '//j.6sc.co/6si.min.js';
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gd, s);
//   })();
// </script>

// <!-- 6Sense -->
