// // Module Name:  ContactUs.js
// // Project: BhubaneshwarOne
// // Copyright (c) Esri India Technologies Ltd.
// // Description : Contact Us for Home page
// // Purpose : This file will be used for getting the contact details and description
// // Author :
// // Date of Creation  : September 07, 2016
// // Modified By : <Name of editor when file modified first time>
// // Modification Date : <Date of modification when file modified first time>
// // Modificaiton Reseason : <Reseason modification when file modified first time>

// require([
// 	'dojo/_base/lang',
// 	'dojo/_base/array',
// 	'dojo/ready',
// 	'dojo/dom',
// 	'dojo/dom-style',
// 	'dojo/on',
// 	'dojo/parser',

// 	'esri/map',
// 	'esri/layers/FeatureLayer',

// 	'dojo/domReady!'
// ],
// 	function (
// 		lang,
// 		array,
// 		ready,
// 		dom,
// 		domStyle,
// 		on,
// 		parser,

// 		Map,
// 		FeatureLayer

// 	) {

// 		var nameVal = null;
// 		var emailID = null;
// 		var subject = null;
// 		var message = null;

// 		//bind event on send button click
// 		on(dom.byId("btnSend"), "click", submitContactUsForm);

// 		//bind events for clearing the success message
// 		on(dom.byId("name"), "keyup", clearSucceesMessage);
// 		on(dom.byId("email"), "keyup", clearSucceesMessage);
// 		on(dom.byId("subject"), "keyup", clearSucceesMessage);
// 		on(dom.byId("message"), "keyup", clearSucceesMessage);

// 		/**
// 		 * submit details of contact us form
// 		 */
// 		function submitContactUsForm() {
// 			//setup proxy path
// 	        //esriConfig.defaults.io.proxyUrl = "/proxy/proxy.ashx";
// 	        //esri.config.defaults.io.alwaysUseProxy = true;
// 	        //fix cors error
// 	        esri.config.defaults.io.corsEnabledServers.push('https://bhubaneswarone.in');

// 			var ContactFldName = null;
// 			var EmailFldName = null;
// 			var SubjectFldName = null;
// 			var MessageFldName = null;
// 			var bValidation = true;

// 			bValidation = validation();
// 			if (bValidation === false) {
// 				return;
// 			}

// 			var contactUsTable = new FeatureLayer("https://bhubaneswarone.in/arcgis/rest/services/BhubaneswarOne/CityGISServices/FeatureServer/3", {
// 				outFields: ["*"]
// 			});

// 			var strJSON = {
// 				'attributes': {
// 					name: '',
// 					email: '',
// 					subject: '',
// 					message: '',
// 					date: ''
// 				}
// 			};

// 			strJSON.attributes.name = dom.byId('name').value;
// 			strJSON.attributes.email = dom.byId('email').value;
// 			strJSON.attributes.subject = dom.byId('subject').value;
// 			strJSON.attributes.message = dom.byId('message').value;
// 			strJSON.attributes.date = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();

// 			dom.byId("progressLoadingIndicator").style.display = 'block';
// 			contactUsTable.applyEdits([strJSON], null, null, contactUsLayerEditComplete, _featureLayerEditsError);
// 		}



// 		/**
// 		 * on edit complete success
// 		 */
// 		function contactUsLayerEditComplete() {

// 			dom.byId('name').value = "";
// 			dom.byId('email').value = "";
// 			dom.byId('subject').value = "";
// 			dom.byId('message').value = "";

// 			dom.byId("contactUsSuccess").style.display = 'block';

// 			dom.byId("progressLoadingIndicator").style.display = 'none';

// 		}

// 		/**
// 		 * on edit failure
// 		 * @private
// 		 * @param {object} err error message
// 		 */
// 		function _featureLayerEditsError(err) {
// 			console.log('Apply Edits Failed, error message: ' + err.message);
// 			console.log('Apply Edits Failed, error details: ' + err.details[0]);

// 			dom.byId('name').value = "";
// 			dom.byId('email').value = "";
// 			dom.byId('subject').value = "";
// 			dom.byId('message').value = "";

// 			dom.byId("contactUsSuccess").style.display = 'none';

// 			dom.byId("progressLoadingIndicator").style.display = 'none';

// 		}

// 		/**
// 		 * validate user input
// 		 * @returns {boolean} validation value
// 		 */
// 		function validation() {

// 			//name validation
// 			if (!dom.byId('name').checkValidity()) {
// 				if (dom.byId('name').reportValidity !== undefined) {
// 					dom.byId('name').reportValidity();
// 					return false;
// 				} else if (dom.byId('name').validity.patternMismatch) {
// 					alert("Please Enter Valid Name.");
// 					return false;
// 				} else {
// 					alert("Please Enter Name.");
// 					return false;
// 				}
// 			}

// 			//email validation
// 			if (!dom.byId('email').checkValidity()) {
// 				if (dom.byId('email').reportValidity !== undefined) {
// 					dom.byId('email').reportValidity();
// 					return false;
// 				} else if (dom.byId('email').validity.patternMismatch) {
// 					alert("Please Enter Valid Email.");
// 					return false;
// 				} else {
// 					alert("Please Enter Email.");
// 					return false;
// 				}
// 			}


// 			//subject validation
// 			if (!dom.byId('subject').checkValidity()) {
// 				if (dom.byId('subject').reportValidity !== undefined) {
// 					dom.byId('subject').reportValidity();
// 					return false;
// 				} else {
// 					alert("Please Enter Subject.");
// 					return false;
// 				}
// 			}

// 			//message validation
// 			if (dom.byId('message').value.trim().length < 1) {
// 				if (!dom.byId('message').checkValidity()) {
// 					if (dom.byId('message').reportValidity !== undefined) {
// 						dom.byId('message').reportValidity();
// 						return false;
// 					} else {
// 						alert("Please Enter Message.");
// 						return false;
// 					}
// 				}
// 				dom.byId('message').value = '';
// 				if (dom.byId('message').reportValidity !== undefined) {
// 					dom.byId('message').reportValidity();
// 				} else {
// 					alert("Please Enter Message.");
// 					return false;
// 				}
// 				return false;
// 			}

// 		}

// 		/**
// 		 * clear success message
// 		 */
// 		function clearSucceesMessage() {
// 			dom.byId("contactUsSuccess").style.display = 'none';
// 		}

// 	});