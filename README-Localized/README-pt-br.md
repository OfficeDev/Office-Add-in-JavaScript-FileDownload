# <a name="download-files-in-a-word-web-add-in"></a>Baixar arquivos em um Suplemento da Web do Word

Este exemplo de código mostra as várias técnicas disponíveis para baixar arquivos de forma programática em um suplemento do Office. Os diversos navegadores e hosts do Office (durante o uso do Office Online) podem tratar os arquivos de forma diferente. Se você pretende fornecer uma experiência de download de arquivos uniforme, use as técnicas demonstradas neste exemplo de código. O exemplo de código mostra também como fornecer um mecanismo de fallback se o host do Office ou o navegador não tiver suporte para um dos outros métodos. 

## <a name="table-of-contents"></a>Sumário
* [Histórico de Alterações](#change-history)
* [Pré-requisitos](#prerequisites)
* [Modelos de design usados neste suplemento](#design-templates-used-in-this-add-in)
* [Obter a biblioteca FileSaver](#get-the-filesaver-library)
* [Executar o projeto](#run-the-project)
* [Perguntas e comentários](#questions-and-comments)
* [Recursos adicionais](#additional-resources)

## <a name="change-history"></a>Histórico de Alterações

3 de novembro de 2016:

* Versão inicial.

## <a name="prerequisites"></a>Pré-requisitos

* Word 2016 para Windows (build 16.0.6727.1000 ou posterior), Word Online ou Word para Mac (build 15.26 ou posterior).
* Visual Studio 2015 

## <a name="design-templates-used-in-this-add-in"></a>Modelos de design usados neste suplemento

- Página de aterrissagem

Para saber mais sobre os padrões de design, confira [Modelos de padrão de design da experiência do usuário para suplementos do Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns). Para obter exemplos de implementações, confira [Office-Add-in-UX-Design-Patterns-Code](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code).

## <a name="get-the-filesaver-library"></a>Obter a biblioteca FileSaver 

Este exemplo de código usa a biblioteca FileSaver.js. Após clonar este repositório, execute os procedimentos a seguir. 

1. Faça a clonagem do repositório [FileSaver.js](https://github.com/eligrey/FileSaver.js/).
2. Copie o arquivo **FileSaver.min.js** para a pasta **Scripts** deste exemplo de código.
3. Em Home.html, adicione uma marca de script ao arquivo FileSaver.min.js.
 

## <a name="run-the-project"></a>Executar o projeto

1. Abra o arquivo de solução do Visual Studio. 
2. Pressione **F5**. 
3. Quando o Word abrir, clique no botão **Download de arquivo**, na extremidade direita da faixa de opções da **Página Inicial**. O suplemento é aberto em um painel de tarefas.
4. Escolha os botões **Baixar arquivo** ou **Inserir link de download**.

## <a name="questions-and-comments"></a>Perguntas e comentários

Gostaríamos de saber sua opinião sobre este exemplo. Você pode nos enviar comentários na seção *Problemas* deste repositório.

As perguntas sobre o desenvolvimento do Microsoft Office 365 em geral devem ser postadas no [Stack Overflow](http://stackoverflow.com/questions/tagged/office-js+API). Se sua pergunta estiver relacionada às APIs JavaScript para Office, não deixe de marcá-la com as tags [office-js] e [API].

## <a name="additional-resources"></a>Recursos adicionais

* [Documentação dos suplementos do Office](https://dev.office.com/docs/add-ins/overview/office-add-ins)
* [Centro de Desenvolvimento do Office](http://dev.office.com/)
* Confira outros exemplos de Suplemento do Office em [OfficeDev no Github](https://github.com/officedev)

## <a name="copyright"></a>Direitos autorais
Copyright (C) 2016 Microsoft Corporation. Todos os direitos reservados.

