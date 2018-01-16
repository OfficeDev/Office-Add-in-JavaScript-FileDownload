# <a name="download-files-in-a-word-web-add-in"></a>Word Web アドインでファイルをダウンロードする

このコード サンプルでは、Office アドインでプログラムを使用してファイルをダウンロードするためのさまざまな手法を説明します。異なる Office ホストとブラウザー (Office Online を使用する場合) では、ファイルの処理方法が異なる場合があります。ファイルのダウンロードの操作性を統一する場合は、このコード サンプルで示す手法を使用します。このサンプル コードでは、Office ホストまたはブラウザーが他のメソッドのいずれかをサポートしていない場合にフォールバック メカニズムを提供する方法も示します。 

## <a name="table-of-contents"></a>目次
* [変更履歴](#change-history)
* [前提条件](#prerequisites)
* [このアドインで使用されるデザイン テンプレート](#design-templates-used-in-this-add-in)
* [FileSaver ライブラリを取得する](#get-the-filesaver-library)
* [プロジェクトを実行する](#run-the-project)
* [質問とコメント](#questions-and-comments)
* [その他のリソース](#additional-resources)

## <a name="change-history"></a>変更履歴

2016 年 11 月 3 日:

* 初期バージョン。

## <a name="prerequisites"></a>前提条件

* Word 2016 for Windows (ビルド 16.0.6727.1000 以降)、Word Online、または Word for Mac (ビルド 15.26 以降)。
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>このアドインで使用されるデザイン テンプレート

- ランディング ページ

デザイン パターンの詳細については、「[Office アドインの UX デザイン パターンのテンプレート](https://dev.office.com/docs/add-ins/design/ux-design-patterns)」を参照してください。サンプルの実装については、「[Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code)」を参照してください。

## <a name="get-the-filesaver-library"></a>FileSaver ライブラリを取得する 

このコード サンプルでは、FileSaver.js ライブラリを使用します。このリポジトリを複製した後、次の手順を実行します。 

1. [FileSaver.js](https://github.com/eligrey/FileSaver.js/) リポジトリを複製します。
2. **FileSaver.min.js** ファイルをこのコード サンプルの**スクリプト** フォルダーにコピーします。
3. Home.html で、FileSaver.min.js ファイルを参照するスクリプト タグを追加します。
 

## <a name="run-the-project"></a>プロジェクトを実行する

1. Visual Studio ソリューション ファイルを開きます。 
2. **F5** キーを押します。 
3. Word が開いたら、**[ホーム]** リボンの右端にある **[ファイル ダウンロード]** ボタンをクリックします。アドインが作業ウィンドウで開きます。
4. **[ダウンロード ファイル]** または **[ダウンロード リンクの挿入]** ボタンを選択します。

## <a name="questions-and-comments"></a>質問とコメント

このサンプルに関するフィードバックをお寄せください。このリポジトリの「*問題*」セクションでフィードバックを送信できます。

Microsoft Office 365 開発全般の質問につきましては、「[スタック オーバーフロー](http://stackoverflow.com/questions/tagged/office-js+API)」に投稿してください。Office JavaScript API に関する質問の場合は、必ず質問に [office-js] と [API] のタグを付けてください。

## <a name="additional-resources"></a>追加リソース

* [Office アドインのドキュメント](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Office デベロッパー センター](http://dev.office.com/)
* [Github の OfficeDev](https://github.com/officedev) にあるその他の Office アドイン サンプル

## <a name="copyright"></a>著作権
Copyright (c) 2016 Microsoft Corporation.All rights reserved.



このプロジェクトでは、[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[Code of Conduct の FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。また、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までお問い合わせください。
