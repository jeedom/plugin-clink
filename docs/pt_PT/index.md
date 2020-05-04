Este plugin permite o gerenciamento de links e eventos na interface do
Jeedom. Você pode, por exemplo, criar um pedido que
abre um modal (janela de diálogo) com uma visualização contendo o seu
câmeras Isso permite, por exemplo, quando alguém toca em sua casa
exiba a câmera de entrada diretamente no seu Jeedom.

Configuração do plugin 
=======================

Depois de baixar o plugin, você só precisa ativá-lo,
não há configuração neste nível.

![clink1](../images/clink1.PNG)

Configuração do equipamento 
=============================

A configuração do equipamento Clink pode ser acessada no menu
Plugins :

![clink2](../images/clink2.PNG)

É assim que a página do plugin Clink se parece (aqui com 1
equipamento) :

![clink3](../images/clink3.PNG)

> **Tip**
>
> Como em muitos lugares em Jeedom, coloque o mouse na extremidade esquerda
> abre um menu de acesso rápido (você pode, em
> do seu perfil, deixe-o sempre visível).

Depois de clicar em um deles, você obtém :

![clink4](../images/clink4.PNG)

Aqui você encontra toda a configuração do seu equipamento :

-   **Nome do equipamento do tim-tim** : nome do seu equipamento Clink,

-   **Objeto pai** : indica o objeto pai ao qual pertence
    o equipamento,

-   **Activer** : torna seu equipamento ativo,

-   **Visible** : torna seu equipamento visível no painel.

Abaixo você encontra a lista de pedidos :

-   **Nom** : o nome exibido no painel,

-   **Mode** : o modo de exibição do elemento (em um modal, em
    uma nova janela ou na janela atual)

    > **Note**
    >
    > No celular, "nova janela" e "janela atual" fazem o mesmo
    > coisa : abrir link na janela atual

-   **Type** : tipo de elemento a ser aberto (visualização, design, painel ou URL)

-   **Nom** : opção dependendo do item selecionado para abrir

-   **Filtro de usuário** : permite filtrar para abrir o elemento
    somente se este usuário estiver logado

-   **Filtro de página** : permite filtrar para abrir o elemento somente se
    nós estamos na página mencionada

    > **Note**
    >
    > Na versão móvel, esta opção não faz nada

-   **Filtro de interface** : permite filtrar para abrir o elemento
    somente na versão móvel / desktop ou em ambas

-   **Afficher** : permite exibir os dados no painel

-   **Tester** : permite testar o comando,

-   **Supprimer** (sinal -) : permite excluir o comando.

> **Important**
>
> É importante não abrir a mesma visão em si mesma, idem para
> Projetos !

> **Important**
>
> No celular, a abertura de um URL não pode ser feita de forma modal
> quanto aos desenhos.

> **Important**
>
> Nem todos os URLs podem ser abertos no modal, isso depende da
> site (ex : Google.fr não pode ser aberto em um modal). Tenha cuidado
> Além disso, se você estiver em https, é imperativo que o site seja aberto
> no modal, quer em https.
