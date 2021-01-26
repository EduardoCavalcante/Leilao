using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Model
{
    [Table("User")]
    public class User
    {
        [Column("UserId")]
        public long UserId { get; set; }

        [Column("Login")]
        public string Login { get; set; }

        [Column("Password")]
        public string Password { get; set; }

        [Column("IsActive")]
        public bool IsActive { get; set; }

        [Column("Token")]
        public string Token { get; set; }
        /*Padrões*/

        [Column("CreationDate")]
        public DateTime CreationDate { get; set; }

        [Column("CreationUser")]
        public User CreationUser { get; set; }

        [Column("DeletionDate")]
        public DateTime DeletionDate { get; set; }

        [Column("UpdateUser")]
        public User UpdateUser { get; set; }

        [Column("UpdateDate")]
        public DateTime UpdateDate { get; set; }
    }
}
