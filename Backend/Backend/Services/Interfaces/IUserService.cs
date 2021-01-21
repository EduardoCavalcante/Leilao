using Backend.Model;

namespace Backend.Services.Interfaces
{
    public interface IUserService
    {
        User Create(User user);
        void Delete(long userId);
        User Update(User user);
        User GetById(long userId);
        User GetByLogin(string login);
    }
}
