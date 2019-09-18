---
page_type: sample
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
# <a name="download-files-in-a-word-web-add-in"></a>在 Word Web 外接程序中下载文件

此示例代码展示了在 Office 外接程序中以编程方式下载文件的不同技巧。不同的 Office 主机和浏览器（若使用 Office Online）处理文件的方式可能也不同。若要提供一致的下载体验，请使用此示例代码中展示的技巧。此示例代码还展示了如何在 Office 主机或浏览器不支持其他一种方法时提供回退机制。 

## <a name="table-of-contents"></a>目录
* [修订记录](#change-history)
* [先决条件](#prerequisites)
* [此外接程序中使用的设计模板](#design-templates-used-in-this-add-in)
* [获取 FileSaver 库](#get-the-filesaver-library)
* [运行项目](#run-the-project)
* [问题和意见](#questions-and-comments)
* [其他资源](#additional-resources)

## <a name="change-history"></a>修订记录

2016 年 11 月 3 日：

* 首版。

## <a name="prerequisites"></a>系统必备

* Word 2016 for Windows（内部版本 16.0.6727.1000 或更高版本）、Word Online 或 Word for Mac（内部版本 15.26 或更高版本）。
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>此外接程序中使用的设计模板

- 登陆页面

有关设计模式的详细信息，请参阅 [Office 外接程序的用户体验设计模式模板](https://dev.office.com/docs/add-ins/design/ux-design-patterns)。有关实现示例，请参阅 [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)。

## <a name="get-the-filesaver-library"></a>获取 FileSaver 库 

此示例代码使用 FileSaver.js 库。克隆此存储库后，请按以下步骤操作。 

1. 克隆 [FileSaver.js](https://github.com/eligrey/FileSaver.js/) 存储库。
2. 将 **FileSaver.min.js** 文件复制到此示例代码的 **Scripts** 文件夹。
3. 在 Home.html 中，添加脚本标记，以引用 FileSaver.min.js 文件。
 

## <a name="run-the-project"></a>运行项目

1. 打开 Visual Studio 解决方案文件。 
2. 按 **F5**。 
3. 在 Word 打开后，单击“**主页**”功能区右端的“**文件下载**”按钮。此时，系统会在任务窗格中打开外接程序。
4. 选择“**下载文件**”或“**插入下载链接**”按钮。

## <a name="questions-and-comments"></a>问题和意见

我们乐意倾听你对此示例的反馈。你可以在此存储库中的“*问题*”部分向我们发送反馈。

与 Microsoft Office 365 开发相关的一般问题应发布到 [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API)。如果你的问题是关于 Office JavaScript API，请务必为问题添加 [office-js] 和 [API].标记。

## <a name="additional-resources"></a>其他资源

* [Office 外接程序文档](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Office 开发人员中心](http://dev.office.com/)
* 有关更多 Office 外接程序示例，请访问 [Github 上的 OfficeDev](https://github.com/officedev)。

## <a name="copyright"></a>版权
版权所有 (c) 2016 Microsoft Corporation。保留所有权利。



此项目已采用 [Microsoft 开放源代码行为准则](https://opensource.microsoft.com/codeofconduct/)。有关详细信息，请参阅[行为准则 FAQ](https://opensource.microsoft.com/codeofconduct/faq/)。如有其他任何问题或意见，也可联系 [opencode@microsoft.com](mailto:opencode@microsoft.com)。
