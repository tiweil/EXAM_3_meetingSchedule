// Configuration

class Config { 
    public port = 3008; 
    // mysql database
    public mySQLhost = "localhost";
    public mySQLUser = "root";
    public mySQLPassword = "12345678";
    public mySQLdb = "exam3";
    //another database
}

const config = new Config();
export default config