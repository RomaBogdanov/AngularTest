using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularTren.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }    // имя 
        public string Lastname { get; set; } // фамилия
        public string Patronymic { get; set; }  // отчество
        public string Position { get; set; } // должность
    }
}
