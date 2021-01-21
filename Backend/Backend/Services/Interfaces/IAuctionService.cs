using Backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Services.Interfaces
{
    public interface IAuctionService
    {
        User Create(User auction);
        void Delete(long auctionId);
        User Update(User auction);
        List<User> GetAll();
        User GetById(long auctionId);
    }
}
