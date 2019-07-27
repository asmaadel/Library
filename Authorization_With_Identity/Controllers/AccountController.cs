using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using BooksApp.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace BooksApp.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private Microsoft.AspNetCore.Identity.SignInResult result;
        public AccountController(SignInManager<IdentityUser> signInManager)
        {
            _signInManager = signInManager;
        }
        //this just for try login from angular loginpage alredy in areas/login
        [HttpPost]
        public IActionResult Post([FromBody]InputModel Input)
        {
         var xx=   authenticate(Input.Email, Input.Password);
            if (true)
            {
                 return Ok();
            }            
            else
            {
                ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                return BadRequest("Custom Message Here");
            }
        }
        public async Task<Microsoft.AspNetCore.Identity.SignInResult> authenticate(string email,string password)
        {
         var reslt=  await _signInManager.PasswordSignInAsync(email, password, true, lockoutOnFailure: true);
            return result;
        }
    }
}