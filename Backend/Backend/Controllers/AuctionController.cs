using Backend.Model;
using Backend.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace Backend.Controllers
{
    [ApiController]
    public class AuctionController : ControllerBase
    {
        private readonly ILogger<AuctionController> _logger;
     
        private IAuctionService _auctionService;

        public AuctionController(ILogger<AuctionController> logger, IAuctionService auctionService)
        {
            _logger = logger;
            _auctionService = auctionService;
        }

        [HttpPost]
        [Route("api/[controller]/[action]")]
        public IActionResult Create([FromBody] Auction auction)
        {
            try
            {
                if (TryValidateModel(auction) == false)
                    return BadRequest(ModelState.Values);

                Auction newAuction = _auctionService.Create(auction);
                return Ok(newAuction);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpPut]
        [Route("api/[controller]/[action]")]
        public IActionResult Update([FromBody] Auction auction)
        {
            try
            {
                Auction auctionUpdated = _auctionService.Update(auction);

                return Ok(auctionUpdated);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpDelete]
        [Route("api/[controller]/[action]/{auctionId}")]
        public IActionResult Delete(long auctionId)
        {
            try
            {
                _auctionService.Delete(auctionId);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        [Route("api/[controller]/[action]/{auctionId}")]
        public IActionResult GetAuctionById(long auctionId)
        {
            try
            {
                
                Auction auction = _auctionService.GetById(auctionId);
                if (auction != null)
                    return Ok();
                else
                    return NotFound("Leilão não encontrado, verifique.");
            }
            catch (Exception ex) 
            {
                return StatusCode(500, ex);
            }
        }

        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult GetAuctions()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex);
            }
        }
    }
}
