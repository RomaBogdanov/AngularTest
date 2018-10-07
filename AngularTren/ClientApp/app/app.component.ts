import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './employee';
 
@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {
 
    employee: Employee = new Employee();   
    employees: Employee[];                
    tableMode: boolean = true;          
 
    constructor(private dataService: DataService) { }
 
    ngOnInit() {
        this.loadEmployees();    // загрузка данных при старте компонента  
    }
    // получаем данные через сервис
    loadEmployees() {
        this.dataService.getEmployees()
            .subscribe((data: Employee[]) => this.employees = data);
    }
    // сохранение данных
    save() {
        if (this.employee.id == null) {
            this.dataService.createEmployee(this.employee)
                .subscribe((data: Employee) => this.employees.push(data));
        } else {
            this.dataService.updateEmployee(this.employee)
                .subscribe(data => this.loadEmployees());
        }
        this.cancel();
    }
    editEmployee(p: Employee) {
        this.employee = p;
    }
    cancel() {
        this.employee = new Employee();
        this.tableMode = true;
    }
    delete(p: Employee) {
        this.dataService.deleteEmployee(p.id)
            .subscribe(data => this.loadEmployees());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}