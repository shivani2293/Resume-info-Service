const db = require("../database");

module.exports = {
  fetchResumeById: (req, res) => {
    const resumeId = req.params.id;
    var query = "SELECT * FROM resume WHERE id = ?";
    db.all(query, resumeId, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      if (rows.length == 0) {
        res.status(404).send({
          message: "No Such ID Exists!",
        });
      } else {
        res.json({
          data: rows[0],
        });
      }
    });
  },

  saveResumeDetails: (req, res, next) => {
    let name = req.body.name.split(" ");
    let firstName = name[0];
    let lastName = name[1];
    let currentJobTitle = req.body.currentJobTitle;
    let currentJobDescription = req.body.currentJobDescription;
    let currentJobCompany = req.body.currentJobCompany;

    if (
      !name ||
      !currentJobTitle ||
      !currentJobDescription ||
      !currentJobCompany
    ) {
      return res.sendStatus(400).send({
        error: "Bad Request. All Parameters are required.",
      });
    }

    var sql =
      "INSERT INTO resume (first_name, last_name, current_job_title,current_job_desc,current_job_company) VALUES (?,?,?,?,?)";
    var params = [
      firstName,
      lastName,
      currentJobTitle,
      currentJobDescription,
      currentJobCompany,
    ];
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.sendStatus(200).send(result);
    });
  },

  fetchResumeByName: (req, res) => {
    const name = req.params.name;
    // Split the name into first name and last name
    const names = name.split(" ");
    // If the name is not in the correct format, return a bad request
    if (names.length !== 2) {
      return res.status(400).json({
        message: "Bad Request",
      });
    }
    const firstName = names[0].toLowerCase();
    const lastName = names[1].toLowerCase();
    var query = `
        SELECT id, (first_name || ' ' || last_name) AS name, current_job_title, current_job_desc, current_job_company
        FROM resume 
        WHERE lower(first_name) = ? OR lower(last_name) = ?
    `;
    db.all(query, [firstName, lastName], (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      if (rows.length == 0) {
        res.status(404).send({
          message: "No such records found!",
        });
      } else {
        res.json({
          data: rows,
        });
      }
    });
  },
};
