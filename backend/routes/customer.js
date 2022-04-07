router.get("/transaction", (req, res) => {
  connection.query(`Select * from transaction;`, (e, op) => {
    if (e) {
      console.log("eroor in getlocation");
      return res.status(404).json({ msg: "error" });
    } else {
      console.log(op);
      return res.status(200).json({ msg: "Success", data: op });
    }
  });
});
