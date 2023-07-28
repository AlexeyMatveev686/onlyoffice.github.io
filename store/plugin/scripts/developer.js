/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined) {

    window.Asc.plugin.init = function() {
		document.getElementById('inp_url').value = localStorage.getItem('DeveloperMarketplaceUrl') || '';
		document.getElementById('lbl_reset').onclick = function() {
			document.getElementById('inp_url').value = '';
		};
	};

	window.Asc.plugin.onThemeChanged = function(theme) {
		window.Asc.plugin.onThemeChangedBase(theme);
	};

	window.Asc.plugin.onTranslate = function() {
		let elements = document.getElementsByClassName('i18n');
		
		for (let index = 0; index < elements.length; index++) {
			const element = elements[index];
			element.innerHTML = window.Asc.plugin.tr(element.innerHTML);
		}
		document.getElementById('inp_url').setAttribute('placeholder', window.Asc.plugin.tr('Enter URL'));
	};

	window.Asc.plugin.attachEvent("onClickBtn", function(){
		sendPluginMessage({type: 'SetURL', url: document.getElementById('inp_url').value.trim()});
	});

	function sendPluginMessage(message) {
		window.Asc.plugin.sendToPlugin("onWindowMessage", message);
	};

})(window, undefined);
