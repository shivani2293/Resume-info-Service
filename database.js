var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE resume (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name text, 
            last_name text,
            current_job_title text, 
            current_job_desc text, 
            current_job_company text
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO resume (first_name, last_name, current_job_title,current_job_desc,current_job_company) VALUES (?,?,?,?,?)";
          db.run(insert, [
            "Shivani",
            "Dubey",
            "Software Engineer",
            "Develop scalable application",
            "TCS",
          ]);
          db.run(insert, [
            "Neha",
            "Pandey",
            "Software Engineer",
            "Data Metrics and Monitoring",
            "Infosys",
          ]);
        }
      }
    );
  }
});

module.exports = db;
