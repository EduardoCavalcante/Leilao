using Backend.Model;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ILogger<AuctionController> _logger;
        private IUserService _userService;

        public UserController(ILogger<AuctionController> logger, IUserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public IActionResult Create([FromBody] User user)
        {
            try
            {
                if (TryValidateModel(user) == false)
                    return BadRequest();

                User newUser = _userService.Create(user);
                return Ok(newUser);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut]
        [Route("api/[controller]/[action]")]
        public IActionResult Update([FromBody] User user)
        {
            try
            {
                User auctionUpdated = _userService.Update(user);

                return Ok(auctionUpdated);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpDelete]
        [Route("api/[controller]/[action]/{userId}")]
        public IActionResult Delete(long userId)
        {
            try
            {
                _userService.Delete(userId);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        [Route("api/[controller]/[action]/{userId}")]
        public IActionResult GetUserById(long userId)
        {
            try
            {

                User user = _userService.GetById(userId);
                if (user != null)
                    return Ok();
                else
                    return NotFound("Usuário não encontrado, verifique.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult GetUserByLogin(string login)
        {
            try
            {

                User user = _userService.GetByLogin(login);
                if (user != null)
                    return Ok();
                else
                    return NotFound("Usuário não encontrado, verifique.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
