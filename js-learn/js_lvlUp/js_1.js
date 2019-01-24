// public, protected, private
window.onload = function () {


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
            element.className = this.className;

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

    function SubMenu(id, className, items, link, title) {

        MenuItem.call(this, 'item', link, title);
        Menu.call(this, id, className, items);

    }

    SubMenu.prototype = Object.create(Menu.prototype);
    SubMenu.prototype.render = function (id, className, items, link, title) {

        if (this.link && this.title) {

            var menuItem = new MenuItem('item name', '/homehone', 'item').render();
            var menu = Menu.prototype.render.call(this);

            menuItem.appendChild(menu);

            return menuItem;

        } else {

            return Menu.prototype.render.call(this);

        }
    };


    var menuItem1 = new MenuItem('menu-item', '/', 'Home');
    var menuItem2 = new MenuItem('menu-item', '/news', 'News');
    var menuItem3 = new MenuItem('menu-item', '/efw', 'wdfqyt');
    var menuItem4 = new MenuItem('menu-item', '/blog', 'Blog');

    var subsubMenu = new SubMenu('', 'first', [
        menuItem1
    ], '/', 'first');

    var superMenu = new SubMenu('11', 'submenu', [
        menuItem1,
        menuItem2,
        menuItem3,
        menuItem4,
        subsubMenu
    ]);

    document.body.appendChild(superMenu.render());


};
