// public, protected, private

function Container(id, className, tagName) {
    // public
    this.id = id;
    this.className = className;

    // protected
    this._tagName = tagName;

    // private
    var element;

    this.getElement = function () {
        return element;
    };

    this.setElement = function (newValue) {
        element = newValue;
    }
}

Container.prototype.render = function () {
    var element = this.getElement();

    if (!element) {
        element = document.createElement(this._tagName);
        element.id = this.id;

        this.setElement(element);
    }

    return element;
};

Container.prototype.delete = function () {
    var element = this.getElement();

    if (element) {
        element.parentElement.removeChild(element);
        this.setElement(null);
    }

};

function Menu(id, className, items) {
    Container.call(this, id, className, 'ul');

    // protected
    this._items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
    var container = Container.prototype.render.call(this);

    this._items.forEach(function (item) {
        if (item instanceof Container) {
            container.appendChild(item.render());
        }
    });

    return container;
};

function MenuItem(className, title, link) {
    Container.call(this, '', className, 'li');

    this.link = link;
    this.title = title;
}

MenuItem.prototype = Object.create(Container.prototype);
MenuItem.prototype.render = function () {
    var container = Container.prototype.render.call(this);

    var a = document.createElement('a');
    a.textContent = this.title;
    a.href = this.link;
    a.className = this.className;

    container.appendChild(a);

    return container;
};

function SubMenu(id, className, items, title, link) {
    Menu.call(this, id, className, items);

    this.title = title;
    this.link = link;

}

SubMenu.prototype = Object.create(Menu.prototype);
SubMenu.prototype.render = function () {

    if (this.title && this.link) {

        var menuItem = new MenuItem(this.link, this.title).render();

        menuItem.appendChild(Menu.prototype.render.call(this));

        return menuItem;

    } else {
        return Menu.prototype.render.call(this);
    }
};

window.onload = function () {
    var newMenu = document.getElementById('menu');
    var item = [
        new MenuItem('Mega_menu_column_list', 'Dresses', '/Dresses'),
        new MenuItem('Mega_menu_column_list', 'Tops', '/Tops'),
        new MenuItem('Mega_menu_column_list', 'Blazers', '/Blazers'),
        new MenuItem('Mega_menu_column_list', 'Denim', '/Denim'),
        new MenuItem('Mega_menu_column_list', 'Accessories', '/Accessories')
        //     new SubMenu('Shield', 'Boots and Shield', [
        //         new MenuItem('/boots', 'Boots'),
        //         new MenuItem('/shields', 'Shields'),
        //         new SubMenu('/sword', 'Sword', [
        //             new MenuItem('/One-hand', 'One-hand'),
        //             new MenuItem('/two-hand', 'Two-hand'),
        //         ], 'Одноручные или двуручные', '/1111'),
        //
        //
        //     ], 'Ботинки и Щиты', '/222'),
    ];

    var menu = new SubMenu('catalog', 'Mastery', item, '', 'Mastery');



    var $menu = document.getElementById('megaMenu');

    var $menuContainer = document.createElement('div');
    var $containerInside = document.createElement('div');
    var $menuColumn = document.createElement('div');
    var $menuTitle = document.createElement('div');

    $menuContainer.classList.add('mega_menu_container');
    $containerInside.classList.add('mega_container_inside');
    $menuColumn.classList.add('mega_menu_column');
    $menuTitle.classList.add('mega_menu_title');

    $menuColumn.setAttribute('id', 'menu');
    $menuTitle.innerText = 'Women';


    $menuContainer.appendChild($containerInside);
    $containerInside.appendChild($menuColumn);
    $menuColumn.appendChild($menuTitle);

    $menuColumn.appendChild(menu.render());

    $menu.onmouseover = function (e) {
        let target = e.target;
        // проверяем наличие нужного класса у элемента
        if (target.classList == 'menu_list') {
             var parentTarget = target.parentNode;
             parentTarget.appendChild($menuContainer);


        }
    };
    $menu.onmouseout = function (e) {
        let target = e.target;
        if (target.classList == 'menu_list') {
            var parentTarget = target.parentNode;
            parentTarget.removeChild($menuContainer);
        }
    }

};
