﻿using Backend.Model;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace Backend.Controllers
{
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<AuctionController> _logger;

        private ILoginService _loginService;

        public LoginController(ILogger<AuctionController> logger, ILoginService loginService)
        {
            _logger = logger;
            _loginService = loginService;
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        [Produces("application/json")]
        public IActionResult Authorization(string login, string password)
        {
            try
            {
                User userLoggedin = _loginService.Login(login , password);
                return Ok(new { data = userLoggedin });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
