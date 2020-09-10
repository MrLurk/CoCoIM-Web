using System;
using CoCoSql.Attributer;

namespace Models {
    [Table("T_Room")]
    public class T_Room {

        /// <summary>
        /// 房间Id
        /// </summary>
        [InsertExclusion]
        public int Id { get; set; }

        /// <summary>
        /// 房间号
        /// </summary>
        public string RoomNumber { get; set; }

        /// <summary>
        /// 房间名字
        /// </summary>
        public string RoomName { get; set; }

        /// <summary>
        /// 房间总用户数(离线+在线) 
        /// </summary>
        public int RoomUserNumber { get; set; }

    }
}
