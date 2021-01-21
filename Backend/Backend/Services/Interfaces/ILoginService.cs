using Backend.Model;

namespace Backend.Services.Interfaces
{
    public interface ILoginService
    {
        User Login(string login, string password);
        void Logout();
    }
}
