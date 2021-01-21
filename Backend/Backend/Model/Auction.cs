using System;

namespace Backend.Model
{
    public class Auction
    {
        public long AuctionId { get; set; }
        public string Description { get; set; }
        public decimal InitialValue { get; set; }
        public bool IsUsed { get; set; }
        public User ResponsibleUser { get; set; }
        public DateTime InitialDate { get; set; }
        public DateTime FinalDate { get; set; }

        /*Padrões*/
        public DateTime CreationDate { get; set; }
        public User CreationUser { get; set; }
        public DateTime DeletionDate { get; set; }
        public User UpdateUser { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
