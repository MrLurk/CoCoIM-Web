using System;
using CoCoSql.Attributer;

namespace Models {

    [Table("T_Message")]
    public class T_Message {

        [InsertExclusion]
        public int Id { get; set; }
        /// <summary>
        /// 消息来自方用户Id
        /// </summary>
        public int FromUserId { get; set; }
        /// <summary>
        /// 消息发送给用户Id
        /// </summary>
        public int ToUserId { get; set; }
        /// <summary>
        /// 消息内容
        /// </summary>
        public string Message { get; set; }
        /// <summary>
        /// 发送时间
        /// </summary>
        public DateTime SendTime { get; set; }


    }
}
