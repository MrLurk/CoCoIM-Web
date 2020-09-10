using System;
using CoCoSql.Attributer;

namespace Models {
    [Table("T_ChatList")]
    public class T_ChatList {
        /// <summary>
        /// 聊天列表Id
        /// </summary>
        [InsertExclusion]
        public int Id { get; set; }
        /// <summary>
        /// 用户Id
        /// </summary>
        public int UserId { get; set; }
        /// <summary>
        /// 聊天列表类型,0单独对话,1群组对话
        /// </summary>
        public int Type { get; set; }
        /// <summary>
        /// 关联的群组或者用户Id
        /// </summary>
        public int RelatedId { get; set; }
    }
}
