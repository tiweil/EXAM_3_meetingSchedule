import dal_mysql from "../Utils/dal_mysql";

const meetings_sql=`CREATE TABLE IF NOT EXISTS meetings (
    id INT NOT NULL AUTO_INCREMENT,
    development_group INT NULL,
    start_date DATE NULL,
    end_date DATE NULL,
    description VARCHAR(250) NULL,
    room VARCHAR(45) NULL,
    PRIMARY KEY (id));`;
const development_group_sql=`CREATE TABLE IF NOT EXISTS development_group (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    PRIMARY KEY (id));`;

const sql_init=()=>{
    dal_mysql.execute(meetings_sql);
    dal_mysql.execute(development_group_sql);
}

export default sql_init;