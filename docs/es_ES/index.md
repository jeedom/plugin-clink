Ce plugin permet la gestion de liens et d’évènements sur l’interface de
Jeedom. Por ejemplo, puede crear un pedido que
abre un modal (ventana de diálogo) con una vista que contiene su
caméras. Cela permet par exemple lorsque quelqu’un sonne chez vous
d’afficher directement la caméra de l’entrée sur votre Jeedom.

Configuración del complemento 
=======================

Après téléchargement du plugin, il vous suffit juste d’activer celui-ci,
il n’y a aucune configuration à ce niveau.

![Clink1] (../ images / clink1.PNG)

Configuración del equipo 
=============================

Se puede acceder a la configuración del equipo Clink desde el menú
plugins :

![Clink2] (../ images / clink2.PNG)

Así es como se ve la página del complemento Clink (aquí con ya 1
equipos) :

![Clink3] (../ images / clink3.PNG)

> **punta**
>
> Comme à beaucoup d’endroits sur Jeedom, placer la souris tout à gauche
> permet de faire apparaître un menu d’accès rapide (vous pouvez, à
> desde su perfil, siempre déjelo visible).

Une fois que vous cliquez sur l’un d’eux, vous obtenez :

![Clink4] (../ images / clink4.PNG)

Aquí encontrarás toda la configuración de tu equipo :

-   **apellido de l’équipement Clink** : nombre de su equipo Clink,

-   **Objeto padre** : indique l’objet parent auquel appartient
    l’équipement,

-   **Activar** : activa su equipo,

-   **visible** : hace que su equipo sea visible en el tablero de instrumentos.

A continuación encontrará la lista de pedidos. :

-   **apellido** : el nombre que se muestra en el tablero,

-   **modo** : le mode d’affichage de l’élément (dans une modale, dans
    una nueva ventana o en la ventana actual)

    > **nota**
    >
    > En el móvil, &quot;nueva ventana&quot; y &quot;ventana actual&quot; hacen lo mismo
    > cosa : abrir enlace en la ventana actual

-   **tipo** : type d’élément à ouvrir (vue, design, panel ou URL)

-   **apellido** : option en fonction de l’élément choisi à ouvrir

-   **Filtro de usuario** : permet de filtrer pour n’ouvrir l’élément
    que si c’est cet utilisateur qui est connecté

-   **Filtro de página** : permet de filtrer pour n’ouvrir l’élément que si
    estamos en la página mencionada

    > **nota**
    >
    > En la versión móvil, esta opción no hace nada

-   **Filtro de interfaz** : permet de filtrer pour n’ouvrir l’élément
    qu’en version mobile/desktop ou sur les 2

-   **visualización** : permet d’afficher la donnée sur le dashboard

-   **prueba** : permite probar el comando,

-   **remove** (signo -) : le permite eliminar el pedido.

> **importante**
>
> Es importante no abrir la misma vista en sí mismo, lo mismo para
> diseños!

> **importante**
>
> En mobile l’ouverture d’une URL ne peut pas être faite dans une modale
> En cuanto a los diseños.

> **importante**
>
> No todas las URL se pueden abrir en modal, depende de
> sitio (ex : google.fr no puede abrirse en un modal). Atención
> Además, si está en https, es imprescindible que el sitio se abra
> en modal ya sea en https.
