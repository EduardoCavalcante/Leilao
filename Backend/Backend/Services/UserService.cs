using Backend.Model;
using Backend.Model.Context;
using Backend.Services.Interfaces;
using System;
using System.Linq;

namespace Backend.Services
{
    public class UserService : IUserService
    {

        private MySQLContext _context;

        public UserService(MySQLContext context)
        {
            _context = context;
        }

        public User GetById(long userId)
        {
            return _context.Users.SingleOrDefault(user => user.UserId.Equals(userId));
        }

        public User GetByLogin(string login)
        {
            return _context.Users.SingleOrDefault(user => user.Login.Equals(login));
        }

        public User Create(User user)
        {
            try
            {
                _context.Add(user);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

            return user;
        }
        public User Update(User user)
        {
            if (!Exists(user.UserId))
                new Auction();

            User result = _context.Users.SingleOrDefault(user => user.UserId.Equals(user.UserId));

            if (result != null)
            {
                try
                {
                    _context.Entry(result).CurrentValues.SetValues(user);
                    _context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }

            return result;
        }

        public void Delete(long userId)
        {
            User result = _context.Users.SingleOrDefault(user => user.UserId.Equals(userId));

            if (result != null)
            {
                try
                {
                    _context.Users.Remove(result);
                    _context.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }
            }
        }

        private bool Exists(long userId)
        {
            return _context.Users.Any(user => user.UserId.Equals(userId));
        }
    }
}
