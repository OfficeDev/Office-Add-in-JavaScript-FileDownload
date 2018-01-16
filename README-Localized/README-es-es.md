# <a name="download-files-in-a-word-web-add-in"></a>Descargar archivos en un complemento web de Word

Con este ejemplo de código se explican las distintas técnicas para descargar archivos mediante programación en un complemento web de Office. Los diferentes hosts y exploradores de Office (al utilizar Office Online) pueden gestionar los archivos de distinta forma. Si quiere ofrecer una descarga de archivos uniforme, utilice las técnicas que se indican en este ejemplo de código. En dicho ejemplo también se muestra cómo proporcionar un mecanismo de reserva en caso de que el host o explorador de Office no sea compatible con uno de los otros métodos. 

## <a name="table-of-contents"></a>Tabla de contenido
* [Historial de cambios](#change-history)
* [Requisitos previos](#prerequisites)
* [Plantillas de diseño usadas en este complemento](#design-templates-used-in-this-add-in)
* [Obtener la biblioteca de FileSaver](#get-the-filesaver-library)
* [Ejecutar el proyecto](#run-the-project)
* [Preguntas y comentarios](#questions-and-comments)
* [Recursos adicionales](#additional-resources)

## <a name="change-history"></a>Historial de cambios

3 de noviembre de 2016:

* Versión inicial.

## <a name="prerequisites"></a>Requisitos previos

* Word 2016 para Windows (compilación 16.0.6727.1000 o posteriores), Word Online o Word para Mac (compilación 15.26 o posteriores).
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>Plantillas de diseño usadas en este complemento

- Página de aterrizaje

Para obtener más información sobre los modelos de diseño, vea [Plantillas de modelos de diseño de la experiencia del usuario para complementos de Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns). También puede ver las implementaciones de ejemplos en [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code).

## <a name="get-the-filesaver-library"></a>Obtener la biblioteca de FileSaver 

En este ejemplo de código se utiliza la biblioteca de FileSaver.js. Siga estos pasos después de clonar este repositorio. 

1. Clone el repositorio de [FileSaver.js](https://github.com/eligrey/FileSaver.js/).
2. Copie el archivo **FileSaver.min.js** a la carpeta **Scripts** de este ejemplo de código.
3. En Home.html, agregue una etiqueta de script para hacer referencia al archivo FileSaver.min.js.
 

## <a name="run-the-project"></a>Ejecutar el proyecto

1. Abra el archivo de solución de Visual Studio. 
2. Pulse **F5**. 
3. Cuando se abra Word, haga clic en el botón **Descarga de archivos** del extremo derecho de la pestaña **Inicio** de la cinta de opciones. Se abrirá el complemento en un panel de tareas.
4. Elija los botones **Descargar archivo** o **Insertar vínculo de descarga**.

## <a name="questions-and-comments"></a>Preguntas y comentarios

Nos encantaría recibir sus comentarios sobre este ejemplo. Puede enviarnos comentarios a través de la sección *Problemas* de este repositorio.

Las preguntas generales sobre el desarrollo de Microsoft Office 365 deben publicarse en [Desbordamiento de pila](http://stackoverflow.com/questions/tagged/office-js+API). Si su pregunta trata sobre las API de JavaScript para Office, asegúrese de que su pregunta se etiqueta con [office-js] y [API].

## <a name="additional-resources"></a>Recursos adicionales

* 
  [Documentación de complementos de Office](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Centro de desarrollo de Office](http://dev.office.com/)
* Más ejemplos de complementos de Office en [OfficeDev en GitHub](https://github.com/officedev)

## <a name="copyright"></a>Copyright
Copyright (c) 2016 Microsoft Corporation. Todos los derechos reservados.



Este proyecto ha adoptado el [Código de conducta de código abierto de Microsoft](https://opensource.microsoft.com/codeofconduct/). Para obtener más información, consulte las [preguntas más frecuentes sobre el Código de conducta](https://opensource.microsoft.com/codeofconduct/faq/) o póngase en contacto con [opencode@microsoft.com](mailto:opencode@microsoft.com) si tiene otras preguntas o comentarios.
