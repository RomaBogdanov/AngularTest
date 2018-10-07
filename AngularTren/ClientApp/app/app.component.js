var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.employee = new Employee();
        this.tableMode = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadEmployees(); // загрузка данных при старте компонента  
    };
    // получаем данные через сервис
    AppComponent.prototype.loadEmployees = function () {
        var _this = this;
        this.dataService.getEmployees()
            .subscribe(function (data) { return _this.employees = data; });
    };
    // сохранение данных
    AppComponent.prototype.save = function () {
        var _this = this;
        if (this.employee.id == null) {
            this.dataService.createEmployee(this.employee)
                .subscribe(function (data) { return _this.employees.push(data); });
        }
        else {
            this.dataService.updateEmployee(this.employee)
                .subscribe(function (data) { return _this.loadEmployees(); });
        }
        this.cancel();
    };
    AppComponent.prototype.editEmployee = function (p) {
        this.employee = p;
    };
    AppComponent.prototype.cancel = function () {
        this.employee = new Employee();
        this.tableMode = true;
    };
    AppComponent.prototype.delete = function (p) {
        var _this = this;
        this.dataService.deleteEmployee(p.id)
            .subscribe(function (data) { return _this.loadEmployees(); });
    };
    AppComponent.prototype.add = function () {
        this.cancel();
        this.tableMode = false;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app',
            templateUrl: './app.component.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map