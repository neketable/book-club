namespace IIS.BookClub.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.IdentityModel.Tokens.Jwt;
    using System.Linq;
    using System.Security.Claims;
    using System.Text;
    using System.Threading.Tasks;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.FunctionalLanguage;
    using IIS.BookClub;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.IdentityModel.Tokens;
    using Newtonsoft.Json;

    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            var user = Authenticate(userLogin);

            if (user != null)
            {
                var token = Generate(user);
                return Ok(new { token });
            }

            return NotFound("User not found");
        }

        private string Generate(UserModel user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Login),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role),
            };

            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(30),
              signingCredentials: credentials);

            var signedToken = new JwtSecurityTokenHandler().WriteToken(token);

            return signedToken;
        }

        private UserModel Authenticate(UserLogin userLogin)
        {
            SQLDataService ds = (SQLDataService)DataServiceProvider.DataService;
            var lcs = LoadingCustomizationStruct.GetSimpleStruct(typeof(User), BookClub.User.Views.UserE);
            lcs.LimitFunction = FunctionBuilder.BuildAnd(
                FunctionBuilder.BuildEquals<User>(x => x.Login, userLogin.Login),
                FunctionBuilder.BuildEquals<User>(x => x.Password, userLogin.Password));
            var currentUser = ds.LoadObjects(lcs).Cast<User>().FirstOrDefault();

            if (currentUser != null)
            {
                var authenticatedUser = new UserModel
                {
                    Login = currentUser.Login,
                    Password = currentUser.Password,
                    Email = currentUser.Email,
                    Role = currentUser.Role,
                };

                return authenticatedUser;
            }

            return null;
        }
    }
}