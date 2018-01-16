# <a name="download-files-in-a-word-web-add-in"></a>Herunterladen von Dateien in ein Word-Web-Add-In

In diesem Codebeispiel erlernen Sie die verschiedenen Techniken zum programmgesteuerten Herunterladen von Dateien in ein Office-Add-In. In anderen Office-Hosts und -Browsern (bei Verwendung von Office Online) werden Dateien unterschiedlich behandelt. Wenn Sie eine einheitliche Umgebung zum Herunterladen von Dateien bereitstellen möchten, verwenden Sie die in diesem Codebeispiel erläuterten Techniken. In diesem Codebeispiel wird außerdem gezeigt, wie Sie eine alternative Methode bereitstellen können, wenn der Office-Host oder -Browser eine der anderen Methoden nicht unterstützt. 

## <a name="table-of-contents"></a>Inhalt
* [Änderungsverlauf](#change-history)
* [Voraussetzungen](#prerequisites)
* [In diesem Add-In verwendete Entwurfsvorlagen](#design-templates-used-in-this-add-in)
* [Abrufen der FileSaver-Bibliothek](#get-the-filesaver-library)
* [Ausführen des Projekts](#run-the-project)
* [Fragen und Kommentare](#questions-and-comments)
* [Zusätzliche Ressourcen](#additional-resources)

## <a name="change-history"></a>Änderungsverlauf

3. November 2016:

* Ursprüngliche Version

## <a name="prerequisites"></a>Voraussetzungen

* Word 2016 für Windows (Build 16.0.6727.1000 oder höher), Word Online oder Word für Mac (Build 15.26 oder höher)
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>In diesem Add-In verwendete Entwurfsvorlagen

- Zielseite

Weitere Informationen zu den Entwurfsmustern finden Sie unter [UX-Entwurfsmustervorlagen für Office-Add-Ins](https://dev.office.com/docs/add-ins/design/ux-design-patterns). Informationen zu Beispielimplementierungen finden Sie unter [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code).

## <a name="get-the-filesaver-library"></a>Abrufen der FileSaver-Bibliothek 

In diesem Codebeispiel wird die FileSaver.js-Bibliothek verwendet. Gehen Sie wie folgt vor, nachdem Sie dieses Repository geklont haben. 

1. Klionen Sie das Repository [FileSaver.js](https://github.com/eligrey/FileSaver.js/).
2. Kopieren Sie die Datei **FileSaver.min.js** in den Ordner **Skripts** in diesem Codebeispiel.
3. Fügen Sie in „Home.html“ ein Skripttag hinzu, um auf die Datei „FileSaver.min.js“ zu verweisen.
 

## <a name="run-the-project"></a>Ausführen des Projekts

1. Öffnen Sie die Visual Studio-Projektmappe. 
2. Drücken Sie **F5**. 
3. Wenn Word geöffnet wird, klicken Sie auf die Schaltfläche **Dateidownload** am rechten Ende des Menübands **Start**. Das Add-In wird in einem Aufgabenbereich geöffnet.
4. Wählen Sie die Schaltfläche **Downloaddatei** oder **Downloadlink einfügen** aus.

## <a name="questions-and-comments"></a>Fragen und Kommentare

Wir schätzen Ihr Feedback hinsichtlich dieses Beispiels. Sie können uns Ihr Feedback über den Abschnitt *Probleme* dieses Repositorys senden.

Fragen zur Microsoft Office 365-Entwicklung sollten in [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API) gestellt werden. Wenn Ihre Frage die Office JavaScript-APIs betrifft, sollte die Frage mit [office-js] und [API] kategorisiert sein.

## <a name="additional-resources"></a>Zusätzliche Ressourcen

* 
  [Dokumentation zu Office-Add-Ins](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Office Dev Center](http://dev.office.com/)
* Weitere Office-Add-In-Beispiele unter [OfficeDev auf Github](https://github.com/officedev)

## <a name="copyright"></a>Copyright
Copyright (c) 2016 Microsoft Corporation. Alle Rechte vorbehalten.



In diesem Projekt wurden die [Microsoft Open Source-Verhaltensregeln](https://opensource.microsoft.com/codeofconduct/) übernommen. Weitere Informationen finden Sie unter [Häufig gestellte Fragen zu Verhaltensregeln](https://opensource.microsoft.com/codeofconduct/faq/), oder richten Sie Ihre Fragen oder Kommentare an [opencode@microsoft.com](mailto:opencode@microsoft.com).
