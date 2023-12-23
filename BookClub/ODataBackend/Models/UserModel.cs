// <copyright file="User.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace IIS.BookClub
{
    /// <summary>
    /// Класс пользователя.
    /// </summary>
    public class UserModel
    {
        /// <summary>
        /// Gets or sets Login.
        /// </summary>
        public string Login { get; set; }

        /// <summary>
        /// Gets or sets Password.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets Email.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets Role.
        /// </summary>
        public string Role { get; set; }
    }
}
