// public, protected, private



function Container(id, className, tagName) {
    debugger;
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

function MenuItem(className, title, link ) {
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
    var item = [
        new MenuItem('/home', 'Home'),
        new MenuItem('/news', 'News'),
        new SubMenu('Shield', 'Boots and Shield', [
            new MenuItem('/boots', 'Boots'),
            new MenuItem('/shields', 'Shields'),
            new SubMenu('/sword', 'Sword', [
                new MenuItem('/One-hand', 'One-hand'),
                new MenuItem('/two-hand', 'Two-hand'),
            ], 'Одноручные или двуручные', '/1111'),


        ], 'Ботинки и Щиты', '/222'),
    ];

    var menu = new SubMenu('catalog', 'Mastery', item, '', 'Mastery');

    document.body.appendChild(menu.render());

};

var xhr = new XMLHttpRequest();

xhr.open('GET');
