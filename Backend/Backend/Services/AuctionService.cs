using Backend.Model;
using Backend.Model.Context;
using Backend.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Services
{
    public class AuctionService : IAuctionService
    {
        private MySQLContext _context;

        public AuctionService(MySQLContext context)
        {
            _context = context;
        }

        public List<Auction> GetAll()
        {
            return _context.Auctions.ToList();
        }

        public Auction GetById(long auctionId)
        {
            return _context.Auctions.SingleOrDefault(auction => auction.AuctionId.Equals(auctionId));
        }

        public Auction Create(Auction auction)
        {
            try
            {
                _context.Add(auction);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return auction;
        }

        public Auction Update(Auction auction)
        {

            if (!Exists(auction.AuctionId))
                new Auction();

            Auction result = _context.Auctions.SingleOrDefault(auction => auction.AuctionId.Equals(auction.AuctionId));

            if (result != null)
            {
                try
                {
                    _context.Entry(result).CurrentValues.SetValues(auction);
                    _context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }

            return result;
        }

        public void Delete(long auctionId)
        {
            Auction result = _context.Auctions.SingleOrDefault(auction => auction.AuctionId.Equals(auction.AuctionId));

            if (result != null)
            {
                try
                {
                    _context.Auctions.Remove(result);
                    _context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }

        }

        private bool Exists(long auctionId)
        {
            return _context.Auctions.Any(auction => auction.AuctionId.Equals(auctionId));
        }
    }
}
