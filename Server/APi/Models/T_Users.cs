using System;
using CoCoSql.Attributer;

namespace Models {
    [Table("T_Users")]
    public class T_Users {
        [InsertExclusion]
        public int Id { get; set; }
        /// <summary>
        /// 用户名
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 密码
        /// </summary>
        public string Password { get; set; }
    }
}
