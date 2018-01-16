# <a name="download-files-in-a-word-web-add-in"></a>Скачивание файлов в веб-надстройке Word

Из этого примера кода вы узнаете, как скачивать файлы в надстройке Office программным путем. Разные основные приложения Office и браузеры (при работе с Office Online) могут обрабатывать файлы по-разному. Чтобы унифицировать скачивание файлов, используйте методы, показанные в этом примере кода. В этом примере кода также показано, как обеспечить резервный механизм, если основное приложение Office или браузер не поддерживает один из методов. 

## <a name="table-of-contents"></a>Содержание
* [История изменений](#change-history)
* [Необходимые компоненты](#prerequisites)
* [Шаблоны оформления, используемые в этой надстройке](#design-templates-used-in-this-add-in)
* [Получение библиотеки FileSaver](#get-the-filesaver-library)
* [Запуск проекта](#run-the-project)
* [Вопросы и комментарии](#questions-and-comments)
* [Дополнительные ресурсы](#additional-resources)

## <a name="change-history"></a>История изменений

3 ноября 2016 г.

* Исходная версия.

## <a name="prerequisites"></a>Необходимые компоненты

* Word 2016 для Windows (сборка 16.0.6727.1000 или более новая), Word Online или Word для Mac (сборка 15.26 или более новая).
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>Шаблоны оформления, используемые в этой надстройке

- Целевая страница

Дополнительные сведения о шаблонах оформления см. в статье [Конструктивные шаблоны пользовательского интерфейса надстроек Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns). Примеры реализации см. в статье [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code).

## <a name="get-the-filesaver-library"></a>Получение библиотеки FileSaver 

В этом примере кода используется библиотека FileSaver.js. После клонирования этого репозитория выполните указанные ниже действия. 

1. Склонируйте репозиторий [FileSaver.js](https://github.com/eligrey/FileSaver.js/).
2. Скопируйте файл **FileSaver.min.js** в папку **Scripts** в этом примере кода.
3. В файле Home.html добавьте тег сценария для ссылки на файл FileSaver.min.js.
 

## <a name="run-the-project"></a>Запуск проекта

1. Откройте файл решения в Visual Studio. 
2. Нажмите клавишу **F5**. 
3. Когда Word откроется, нажмите кнопку **File download** (Скачивание файлов) в правой части ленты **Главная**. Надстройка откроется в области задач.
4. Нажмите кнопку **Download file** (Скачать файл) или **Insert download link** (Вставить ссылку для скачивания).

## <a name="questions-and-comments"></a>Вопросы и комментарии

Мы будем рады узнать ваше мнение об этом примере. Своими мыслями можете поделиться на вкладке *Issues* (Проблемы) этого репозитория.

Общие вопросы о разработке решений для Microsoft Office 365 следует задавать на сайте [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API). Если ваш вопрос касается API JavaScript для Office, добавьте к нему теги [office-js] и [API].

## <a name="additional-resources"></a>Дополнительные ресурсы

* 
  [Документация по надстройкам Office](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Центр разработки для Office](http://dev.office.com/)
* Другие примеры надстроек Office см. на странице [OfficeDev на Github](https://github.com/officedev).

## <a name="copyright"></a>Авторское право
© Корпорация Майкрософт (Microsoft Corporation), 2016. Все права защищены.



Этот проект соответствует [правилам поведения Майкрософт, касающимся обращения с открытым кодом](https://opensource.microsoft.com/codeofconduct/). Дополнительную информацию см. в разделе [часто задаваемых вопросов по правилам поведения](https://opensource.microsoft.com/codeofconduct/faq/). Если у вас возникли вопросы или замечания, напишите нам по адресу [opencode@microsoft.com](mailto:opencode@microsoft.com).
