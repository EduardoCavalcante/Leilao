using Backend.Model;
using System.Collections.Generic;

namespace Backend.Services.Interfaces
{
    public interface IAuctionService
    {
        Auction Create(Auction auction);
        void Delete(long auctionId);
        Auction Update(Auction auction);
        List<Auction> GetAll();
        Auction GetById(long auctionId);
    }
}
