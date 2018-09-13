# <a name="download-files-in-a-word-web-add-in"></a>Télécharger des fichiers dans un complément web Word

Cet exemple de code montre les différentes techniques pour télécharger des fichiers par programme dans un complément Office. Les différents navigateurs et hôtes Office (lorsque vous utilisez Office Online) peuvent gérer les fichiers différemment. Si vous souhaitez offrir une expérience uniforme pour le téléchargement de fichiers, utilisez les techniques décrites dans cet exemple de code. Cet exemple vous montre également comment fournir un mécanisme de secours si l’hôte ou le navigateur Office ne prend en charge une des autres méthodes. 

## <a name="table-of-contents"></a>Sommaire
* [Historique des modifications](#change-history)
* [Conditions préalables](#prerequisites)
* [Modèles de conception utilisés dans ce complément](#design-templates-used-in-this-add-in)
* [Obtenir la bibliothèque FileSaver](#get-the-filesaver-library)
* [Exécution du projet](#run-the-project)
* [Questions et commentaires](#questions-and-comments)
* [Ressources supplémentaires](#additional-resources)

## <a name="change-history"></a>Historique des modifications

3 novembre 2016 :

* Version d’origine.

## <a name="prerequisites"></a>Configuration requise

* Word 2016 pour Windows (build 16.0.6727.1000 ou ultérieur), Word Online ou Word pour Mac (build 15.26 ou ultérieur).
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>Modèles de conception utilisés dans le complément

- Page d’accueil

Pour plus d’informations sur les modèles de conception, voir l’article sur les [modèles de conception de l’expérience utilisateur pour les compléments Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns). Pour obtenir des exemples d’implémentation, voir [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code).

## <a name="get-the-filesaver-library"></a>Obtenir la bibliothèque FileSaver 

Cet exemple utilise la bibliothèque FileSaver.js. Une fois que vous avez cloné ce référentiel, procédez comme suit. 

1. Clonez le référentiel [FileSaver.js](https://github.com/eligrey/FileSaver.js/).
2. Copiez le fichier **FileSaver.min.js** dans le dossier **Scripts** de cet exemple de code.
3. Dans Home.html, ajoutez une balise de script pour faire référence au fichier FileSaver.min.js.
 

## <a name="run-the-project"></a>Exécuter le projet

1. Ouvrez le fichier de solution Visual Studio. 
2. Appuyez sur la touche **F5**. 
3. Quand Word s’ouvre, cliquez sur le bouton **Téléchargement de fichier** situé sur l’extrémité droite du ruban **Accueil**. Le complément s’ouvre dans un volet Office.
4. Sélectionnez le bouton **Télécharger un fichier** ou **Insérer un lien de téléchargement**.

## <a name="questions-and-comments"></a>Questions et commentaires

Nous serions ravis de connaître votre opinion sur cet exemple. Vous pouvez nous envoyer vos commentaires via la section *Problèmes* de ce référentiel.

Les questions générales sur le développement de Microsoft Office 365 doivent être publiées sur [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API). Si votre question concerne les API Office JavaScript, assurez-vous qu’elle est marquée avec les balises [office js] et [API].

## <a name="additional-resources"></a>Ressources supplémentaires

* 
  [Documentation de complément Office](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Centre de développement Office](http://dev.office.com/)
* Plus d’exemples de complément Office sur [OfficeDev sur Github](https://github.com/officedev)

## <a name="copyright"></a>Copyright
Copyright (c) 2016 Microsoft Corporation. Tous droits réservés.



Ce projet a adopté le [code de conduite Open Source de Microsoft](https://opensource.microsoft.com/codeofconduct/). Pour plus d’informations, reportez-vous à la [FAQ relative au code de conduite](https://opensource.microsoft.com/codeofconduct/faq/) ou contactez [opencode@microsoft.com](mailto:opencode@microsoft.com) pour toute question ou tout commentaire.
