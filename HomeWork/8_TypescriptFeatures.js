// Typescript	Features
// 1.	Create	class,	which	extends	from	an	AbstractClass
// 2.	Apply	interfaces	to	class,	it's	method,	property
// 3.	Use	generics	there
// 4.	Analyze	transpiled	code	in	ES5	and	explain	it
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
        this.abstract = true;
    }
    return AbstractClass;
}());
var CustomClass = /** @class */ (function (_super) {
    __extends(CustomClass, _super);
    function CustomClass() {
        var _this = _super.call(this) || this;
        _this.abstract = false;
        _this._activeItem = [];
        return _this;
    }
    CustomClass.prototype.addItem = function (name) {
        this._activeItem.push({ name: name });
    };
    CustomClass.prototype.printItems = function () {
        return this._activeItem;
    };
    return CustomClass;
}(AbstractClass));
var item = new CustomClass();
item.addItem('try');
item.addItem(0.123);
item.addItem(true);
item.addItem({ status: 'ready' });
console.log(item.printItems());
