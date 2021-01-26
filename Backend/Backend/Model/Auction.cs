using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Model
{
    [Table("Auction")]

    public class Auction
    {
        [Column("AuctionId")]
        public long AuctionId { get; set; }
        
        [Column("Description")]
        public string Description { get; set; }
        
        [Column("InitialValue")]
        public decimal InitialValue { get; set; }

        [Column("IsUsed")]
        public bool IsUsed { get; set; }
        
        [Column("ResponsibleUserId")]
        public User ResponsibleUser { get; set; }
        
        [Column("InitialDate")]
        public DateTime InitialDate { get; set; }

        [Column("FinalDate")]
        public DateTime FinalDate { get; set; }

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
