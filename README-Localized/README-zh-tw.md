# <a name="download-files-in-a-word-web-add-in"></a>在 Word Web 增益集下載檔案

此程式碼範例會教您在 Office 增益集中以程式控制方式下載檔案的不同技術。不同的 Office 主機和瀏覽器 (使用 Office Online 時) 可能以不同的方式處理檔案。如果您想要提供制式的檔案下載經驗，請使用此程式碼範例中示範的技巧。此程式碼範例也向您展示，如何在 Office 主機或瀏覽器不支援其他方法之一時提供遞補機制。 

## <a name="table-of-contents"></a>目錄
* [變更歷程記錄](#change-history)
* [必要條件](#prerequisites)
* [此增益集使用的設計範本](#design-templates-used-in-this-add-in)
* [取得 FileSaver 程式庫](#get-the-filesaver-library)
* [執行專案](#run-the-project)
* [問題和建議](#questions-and-comments)
* [其他資源](#additional-resources)

## <a name="change-history"></a>變更歷程記錄

2016 年 11 月 3 日

* 初始版本。

## <a name="prerequisites"></a>必要條件

* Word 2016 for Windows (組建 16.0.6727.1000 或更新版本)、Word Online 或 Word for Mac (組建 15.26 或更新版本)。
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>此增益集使用的設計範本

- 登陸頁面

如需有關設計模式的詳細資訊，請參閱 [Office 增益集的 UX 設計模式範本](https://dev.office.com/docs/add-ins/design/ux-design-patterns)。欲取得實作範例，請參閱 [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)。

## <a name="get-the-filesaver-library"></a>取得 FileSaver 程式庫 

這個程式碼範例會使用 FileSaver.js 程式庫。複製儲存機制之後，請執行下列步驟。 

1. 複製[FileSaver.js](https://github.com/eligrey/FileSaver.js/) 儲存機制。
2. 將 **FileSaver.min.js** 檔案複製到此程式碼範例的**指令碼**資料夾。
3. 在 Home.html 中，新增指令碼標籤以參照 FileSaver.min.js 檔案。
 

## <a name="run-the-project"></a>執行專案

1. 開啟 Visual Studio 解決方案檔案。 
2. 按 [F5]****。 
3. 當 Word 開啟時，在 [首頁]**** 功能區右端上，按一下 [檔案下載]**** 按鈕。增益集會在工作窗格中開啟。
4. 選擇[下載檔案]**** 或 [插入下載連結]**** 按鈕。

## <a name="questions-and-comments"></a>問題和建議

我們很樂於收到您對於此範例的意見反應。您可以在此存放庫的 [問題]** 區段中，將您的意見反應傳送給我們。

請在 [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API) 提出有關 Microsoft Office 365 開發的一般問題。如果您的問題是關於 Office JavaScript API，請確定您的問題標記有 [office js] 與 [API]。

## <a name="additional-resources"></a>其他資源

* [Office 增益集文件](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Office 開發人員中心](http://dev.office.com/)
* 在 [Github 上的 OfficeDev](https://github.com/officedev) 中有更多 Office 增益集範例

## <a name="copyright"></a>著作權
Copyright (c) 2016 Microsoft Corporation.著作權所有，並保留一切權利。



此專案已採用 [Microsoft 開放原始碼管理辦法](https://opensource.microsoft.com/codeofconduct/)。如需詳細資訊，請參閱[管理辦法常見問題集](https://opensource.microsoft.com/codeofconduct/faq/)，如果有其他問題或意見，請連絡 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
