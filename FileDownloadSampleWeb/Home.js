/* 
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */


(function () {
    "use strict";

    // The initialize function must be defined in each page of your add-in.
    Office.initialize = function (reason) {

        // A function must be assigned to Office.initialize. You can also include initialization code here. In
        // this code sample, we don't have anything to initialize. 

    };

    $(document).ready(function () {
        // Initialize the UI 
        $('#button-text1').text("Download file");
        $('#button-desc1').text("Download file");
        $('#btnDownload1').click(
           downloadFile);

        $('#button-text2').text("Insert download link");
        $('#button-desc2').text("Insert download link");
        $('#btnDownload2').click(
           InsertURL);
    });

    var downloadUri = location.origin + '/testdata.pdf'; // PDF file to download from the remote server.
   
    /*
        For all Office clients and browsers, except Safari, the user gets prompted to save the file.
        In Safari, the file is opened in another tab and the user manually chooses where to save the file.
    */
    function downloadFile() {
        // The following line is taken from http://stackoverflow.com/questions/7944460/detect-safari-browser
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {                        
            insertAndClickLink();          
        }
        else {
            // First download the file, then prompt the user to save it. 
            // This function uses the file-saver.js library.
            getFile(downloadUri)  
            .then(function (file) {
                saveAs(file, "myfile.pdf"); 
            })
            .catch(function (e) {
                console.error(e);
            });
        }
    }

    /*
        Downloads the file from the remote server.
    */
    function getFile(url) {
        return new OfficeExtension.Promise(function (resolve, reject) {
            // Use XHR to fetch the file from the remote server.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'blob';

            xhr.onload = function () {
                try {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else if (xhr.status !== 200) {
                        reject({
                            error: 'Request failed. ' + xhr.response
                        });
                    }
                } catch (e) {
                    reject({
                        error: e
                    });
                }
            };
            xhr.send();
        });
    }

    /*
        The following solution programmatically inserts a link and clicks it. 
        Use with Safari browsers.
    */
    function insertAndClickLink() {

        //Taken from http://stackoverflow.com/questions/3077242/force-download-a-pdf-link-using-javascript-ajax-jquery/29266135#29266135
        try {
            if (!window.ActiveXObject) {
                var save = document.createElement('a');
                save.href = downloadUri;
                save.target = '_blank';                
                save.download = "myfile.pdf" || 'unknown';

                var evt = new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                });

                save.dispatchEvent(evt);
                (window.URL || window.webkitURL).revokeObjectURL(save.href);
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    /*
       This function inserts a URL into a DIV tag, which the user then clicks. This provides a good fallback experience. 
   */
    function InsertURL() {        
        $("#InsertURL").append("<a href=\"" + downloadUri + "\" target=\"_blank\">PDF</a>");
    }
})();
