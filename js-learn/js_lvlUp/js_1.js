function Container(id, className, tagName) {
    // публинчый
    this.id = 'some';
    this.className = 'some';


    this._tagName = tagName;

    // приватный
    var element;

    this.getElement = function () {
        return element;
    };

    this.setElement = function () {
        element = newValue;
    }
}

Container.prototype.render = function () {
    var element = this.getElement();

    if (!element) {
        element = document.createElement(this._tagName);
        element.id = this.id;
        element.className = this.className;

        this.setElement(element);
    }
    return element;

};

function Menu(id, className, items) {
    Container.call(this, id, className, 'ul');
// уславливаемся что это защищённый
    this._items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {
    var container = Container.prototype.render.call(this);

    this._items.forEach(function (item) {
        if (item instanceof MenuItem)
            container.appendChild(item.render());
    });
    return container;
};


function MenuItem(className, link, title) {
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

    container.appendChild(a);

    return container;
};


var menuItem1 = new Menu('menu-item', '/home', 'home');
var menuItem2 = new Menu('menu-item', '/dooom', 'dooom');
var menuItem3 = new Menu('menu-item', '/boom', 'boom');

var menu = new Menu('menu', 'menu active', [menuItem1,
    menuItem2,
    menuItem3
]);

document.body.appendChild(menu.render());



