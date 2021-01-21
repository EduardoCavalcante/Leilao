using Backend.Model;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<AuctionController> _logger;

        private ILoginService _loginService;

        public LoginController(ILogger<AuctionController> logger, ILoginService loginService)
        {
            _logger = logger;
            _loginService = loginService;
        }

        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult Login()
        {
            try
            {
                _loginService.Login("edu", "123");
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
