 function tablePersonal() {
     function initTable(table) {
         checkTableLayour(table); // switch from a collapsed to an expanded layout
         Util.addClass(table, "table--loaded"); // show table

         // custom event emitted when window is resized
         table.addEventListener("update-table", function(event) {
             checkTableLayour(table);
         });
     }

     function checkTableLayour(table) {
         var layout = getComputedStyle(table, ":before")
             .getPropertyValue("content")
             .replace(/\'|"/g, "");
         Util.toggleClass(
             table,
             tableExpandedLayoutClass,
             layout != "collapsed"
         );
     }

     var tables = document.getElementsByClassName("js-table"),
         tableExpandedLayoutClass = "table--expanded";
     if (tables.length > 0) {
         var j = 0;
         for (var i = 0; i < tables.length; i++) {
             var beforeContent = getComputedStyle(
                 tables[i],
                 ":before"
             ).getPropertyValue("content");
             if (beforeContent && beforeContent != "" && beforeContent != "none") {
                 (function(i) {
                     initTable(tables[i]);
                 })(i);
                 j = j + 1;
             } else {
                 Util.addClass(tables[i], "table--loaded");
             }
         }

         if (j > 0) {
             var resizingId = false,
                 customEvent = new CustomEvent("update-table");
             window.addEventListener("resize", function(event) {
                 clearTimeout(resizingId);
                 resizingId = setTimeout(doneResizing, 300);
             });

             function doneResizing() {
                 for (var i = 0; i < tables.length; i++) {
                     (function(i) {
                         tables[i].dispatchEvent(customEvent);
                     })(i);
                 }
             }
         }
     }
 };

 // File#: _1_file-upload
 // Usage: codyhouse.co/license
 function uploadbtn() {
     var InputFile = function(element) {
         this.element = element;
         this.input = this.element.getElementsByClassName('file-upload__input')[0];
         this.label = this.element.getElementsByClassName('file-upload__label')[0];
         this.multipleUpload = this.input.hasAttribute('multiple'); // allow for multiple files selection

         // this is the label text element -> when user selects a file, it will be changed from the default value to the name of the file 
         this.labelText = this.element.getElementsByClassName('file-upload__text')[0];
         this.initialLabel = this.labelText.textContent;

         initInputFileEvents(this);
     };

     function initInputFileEvents(inputFile) {
         // make label focusable
         inputFile.label.setAttribute('tabindex', '0');
         inputFile.input.setAttribute('tabindex', '-1');

         // move focus from input to label -> this is triggered when a file is selected or the file picker modal is closed
         inputFile.input.addEventListener('focusin', function(event) {
             inputFile.label.focus();
         });

         // press 'Enter' key on label element -> trigger file selection
         inputFile.label.addEventListener('keydown', function(event) {
             if (event.keyCode && event.keyCode == 13 || event.key && event.key.toLowerCase() == 'enter') { inputFile.input.click(); }
         });

         // file has been selected -> update label text
         inputFile.input.addEventListener('change', function(event) {
             updateInputLabelText(inputFile);
         });
     };

     function updateInputLabelText(inputFile) {
         var label = '';
         if (inputFile.input.files && inputFile.input.files.length < 1) {
             label = inputFile.initialLabel; // no selection -> revert to initial label
         } else if (inputFile.multipleUpload && inputFile.input.files && inputFile.input.files.length > 1) {
             label = inputFile.input.files.length + ' files'; // multiple selection -> show number of files
         } else {
             label = inputFile.input.value.split('\\').pop(); // single file selection -> show name of the file
         }
         inputFile.labelText.textContent = label;
     };

     //initialize the InputFile objects
     var inputFiles = document.getElementsByClassName('file-upload');
     if (inputFiles.length > 0) {
         for (var i = 0; i < inputFiles.length; i++) {
             (function(i) { new InputFile(inputFiles[i]); })(i);
         }
     }
 };

 // File#: _1_dialog
 // Usage: codyhouse.co/license
 function dialogBox() {
     var Dialog = function(element) {
         this.element = element;
         this.triggers = document.querySelectorAll('[aria-controls="' + this.element.getAttribute('id') + '"]');
         this.firstFocusable = null;
         this.lastFocusable = null;
         this.selectedTrigger = null;
         this.showClass = "dialog--is-visible";
         initDialog(this);
     };

     function initDialog(dialog) {
         if (dialog.triggers) {
             for (var i = 0; i < dialog.triggers.length; i++) {
                 dialog.triggers[i].addEventListener('click', function(event) {
                     event.preventDefault();
                     dialog.selectedTrigger = event.target;
                     showDialog(dialog);
                     initDialogEvents(dialog);
                 });
             }
         }

         // listen to the openDialog event -> open dialog without a trigger button
         dialog.element.addEventListener('openDialog', function(event) {
             if (event.detail) self.selectedTrigger = event.detail;
             showDialog(dialog);
             initDialogEvents(dialog);
         });
     };

     function showDialog(dialog) {
         Util.addClass(dialog.element, dialog.showClass);
         getFocusableElements(dialog);
         dialog.firstFocusable.focus();
         // wait for the end of transitions before moving focus
         dialog.element.addEventListener("transitionend", function cb(event) {
             dialog.firstFocusable.focus();
             dialog.element.removeEventListener("transitionend", cb);
         });
         emitDialogEvents(dialog, 'dialogIsOpen');
     };

     function closeDialog(dialog) {
         Util.removeClass(dialog.element, dialog.showClass);
         dialog.firstFocusable = null;
         dialog.lastFocusable = null;
         if (dialog.selectedTrigger) dialog.selectedTrigger.focus();
         //remove listeners
         cancelDialogEvents(dialog);
         emitDialogEvents(dialog, 'dialogIsClose');
     };

     function initDialogEvents(dialog) {
         //add event listeners
         dialog.element.addEventListener('keydown', handleEvent.bind(dialog));
         dialog.element.addEventListener('click', handleEvent.bind(dialog));
     };

     function cancelDialogEvents(dialog) {
         //remove event listeners
         dialog.element.removeEventListener('keydown', handleEvent.bind(dialog));
         dialog.element.removeEventListener('click', handleEvent.bind(dialog));
     };

     function handleEvent(event) {
         // handle events
         switch (event.type) {
             case 'click':
                 {
                     initClick(this, event);
                 }
             case 'keydown':
                 {
                     initKeyDown(this, event);
                 }
         }
     };

     function initKeyDown(dialog, event) {
         if (event.keyCode && event.keyCode == 27 || event.key && event.key == 'Escape') {
             //close dialog on esc
             closeDialog(dialog);
         } else if (event.keyCode && event.keyCode == 9 || event.key && event.key == 'Tab') {
             //trap focus inside dialog
             trapFocus(dialog, event);
         }
     };

     function initClick(dialog, event) {
         //close dialog when clicking on close button
         if (!event.target.closest('.js-dialog__close')) return;
         event.preventDefault();
         closeDialog(dialog);
     };

     function trapFocus(dialog, event) {
         if (dialog.firstFocusable == document.activeElement && event.shiftKey) {
             //on Shift+Tab -> focus last focusable element when focus moves out of dialog
             event.preventDefault();
             dialog.lastFocusable.focus();
         }
         if (dialog.lastFocusable == document.activeElement && !event.shiftKey) {
             //on Tab -> focus first focusable element when focus moves out of dialog
             event.preventDefault();
             dialog.firstFocusable.focus();
         }
     };

     function getFocusableElements(dialog) {
         //get all focusable elements inside the dialog
         var allFocusable = dialog.element.querySelectorAll('[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable], audio[controls], video[controls], summary');
         getFirstVisible(dialog, allFocusable);
         getLastVisible(dialog, allFocusable);
     };

     function getFirstVisible(dialog, elements) {
         //get first visible focusable element inside the dialog
         for (var i = 0; i < elements.length; i++) {
             if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
                 dialog.firstFocusable = elements[i];
                 return true;
             }
         }
     };

     function getLastVisible(dialog, elements) {
         //get last visible focusable element inside the dialog
         for (var i = elements.length - 1; i >= 0; i--) {
             if (elements[i].offsetWidth || elements[i].offsetHeight || elements[i].getClientRects().length) {
                 dialog.lastFocusable = elements[i];
                 return true;
             }
         }
     };

     function emitDialogEvents(dialog, eventName) {
         var event = new CustomEvent(eventName, { detail: dialog.selectedTrigger });
         dialog.element.dispatchEvent(event);
     };

     //initialize the Dialog objects
     var dialogs = document.getElementsByClassName('js-dialog');
     if (dialogs.length > 0) {
         for (var i = 0; i < dialogs.length; i++) {
             (function(i) { new Dialog(dialogs[i]); })(i);
         }
     }
 };



 export { tablePersonal, uploadbtn, dialogBox }