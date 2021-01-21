using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Model
{
    public class User
    {
        public string Nickname { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }
        public string Token { get; set; }
        /*Padrões*/
        public DateTime CreationDate { get; set; }
        public User CreationUser { get; set; }
        public DateTime DeletionDate { get; set; }
        public User UpdateUser { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
