This plugin allows the management of links and events on the interface of
Jeedom. You can for example with this create an order which
opens a modal (dialog window) with a view containing your
cameras. This allows for example when someone rings at your house
display the entrance camera directly on your Jeedom.

Plugin configuration 
=======================

After downloading the plugin, you just need to activate it,
there is no configuration at this level.

![clink1](../images/clink1.PNG)

Equipment configuration 
=============================

The configuration of Clink equipment is accessible from the menu
Plugins :

![clink2](../images/clink2.PNG)

This is what the Clink plugin page looks like (here with already 1
equipment) :

![clink3](../images/clink3.PNG)

> **Tip**
>
> As in many places on Jeedom, place the mouse on the far left
> brings up a quick access menu (you can, at
> from your profile, always leave it visible).

Once you click on one of them, you get :

![clink4](../images/clink4.PNG)

Here you find all the configuration of your equipment :

-   **Clink equipment name** : Clink equipment name,

-   **Parent object** : indicates the parent object to which belongs
    equipment,

-   **Activer** : makes your equipment active,

-   **Visible** : makes your equipment visible on the dashboard.

Below you find the list of orders :

-   **Nom** : the name displayed on the dashboard,

-   **Mode** : the display mode of the element (in a modal, in
    a new window or in the current window)

    > **Note**
    >
    > In mobile &quot;new window&quot; and &quot;current window&quot; do the same
    > thing : open link in current window

-   **Type** : type of element to open (view, design, panel or URL)

-   **Nom** : option depending on the item selected to open

-   **User filter** : allows to filter to open the element
    only if this user is logged in

-   **Page filter** : allows to filter to open the element only if
    we are on the page mentioned

    > **Note**
    >
    > In mobile version this option does nothing

-   **Interface filter** : allows to filter to open the element
    only in mobile / desktop version or on both

-   **Afficher** : allows to display the data on the dashboard

-   **Tester** : Used to test the command,

-   **Supprimer** (sign -) : allows to delete the command.

> **Important**
>
> It is important not to open the same view on itself, ditto for
> Designs !

> **Important**
>
> In mobile the opening of a URL cannot be done in a modal
> as for the Designs.

> **Important**
>
> Not all URLs can be opened in modal, it depends on the
> site (ex : google.fr cannot be opened in a modal). Warning
> also if you are in https, it is imperative that the site to open
> in modal either in https.
