// <copyright file="AuthOptions.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace IIS.BookClub
{
    using System.Text;
    using Microsoft.IdentityModel.Tokens;

    public class AuthOptions
    {
        public const string ISSUER = "http://localhost:6500/"; // издатель токена
        public const string AUDIENCE = "http://localhost:6500/"; // потребитель токена
        const string KEY = "c6d65cdad269affd76eb70d35a049181cd4c95544dc7e049c59181c5d1c98e86";   // ключ для шифрации
        public const int LIFETIME = 1; // время жизни токена - 1 минута
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}