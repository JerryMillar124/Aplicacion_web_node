import mysql from "mysql";
const connection = mysql.createConnection({
    host: "localhost",
	user: "Jerry",
    password: "J3rry@55G_M",
	database: "alecrmjggm",
});
export default connection;