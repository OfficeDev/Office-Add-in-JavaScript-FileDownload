---
topic: sample
products:
- office-word
- office-365
languages:
- javascript
extensions:
  contentType: samples
  technologies:
  - Add-ins
  platforms:
  - CSS
  - iOS
  createdDate: 11/4/2016 11:31:59 AM
---
# Download files in a Word Web Add-in

This code sample teaches you the different techniques for downloading files programmatically in an Office Add-in. Different Office hosts and browsers (when using Office Online) may handle files differently. If you'd like to provide a uniform file download experience, use the techniques demonstrated in this code sample. This code sample also shows you how you can provide a fallback mechanism if the Office host or browser does not support one of the other methods. 

## Table of Contents
* [Change History](#change-history)
* [Prerequisites](#prerequisites)
* [Design templates used in this add-in](#design-templates-used-in-this-add-in)
* [Get the FileSaver library](#get-the-filesaver-library)
* [Run the project](#run-the-project)
* [Questions and comments](#questions-and-comments)
* [Additional resources](#additional-resources)

## Change History

November 3, 2016:

* Initial version.

## Prerequisites

* Word 2016 for Windows (build 16.0.6727.1000 or later), Word Online, or Word for Mac (build 15.26 or later).
* Visual Studio 2015 

## Design templates used in this add-in

- Landing page

For more information about the design patterns, see [UX design pattern templates for Office Add-ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns). And for sample implementations, see [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code).

## Get the FileSaver library 

This code sample uses the FileSaver.js library. Take the following steps after you have cloned this repo. 

1. Clone the [FileSaver.js](https://github.com/eligrey/FileSaver.js/) repo.
2. Copy the **FileSaver.min.js** file to the **Scripts** folder of this code sample.
3. In Home.html, add a script tag to reference the FileSaver.min.js file.
 

## Run the project

1. Open the Visual Studio solution file. 
2. Press **F5**. 
3. When Word opens, click the **File download** button on the right end of the **Home** ribbon. The add-in opens in a task pane.
4. Choose the **Download file** or **Insert download link** buttons.

## Questions and comments

We'd love to get your feedback about this sample. You can send your feedback to us in the *Issues* section of this repository.

Questions about Microsoft Office 365 development in general should be posted to [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API). If your question is about the Office JavaScript APIs, make sure that your questions are tagged with [office-js] and [API].

## Additional resources

* [Office add-in documentation](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Office Dev Center](http://dev.office.com/)
* More Office Add-in samples at [OfficeDev on Github](https://github.com/officedev)

## Copyright
Copyright (c) 2016 Microsoft Corporation. All rights reserved.



This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information, see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
