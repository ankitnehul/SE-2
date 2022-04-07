const router = require("express").Router();
const connection = require("../connection");

router.post("/login", async (req, res) => {
    console.log(req.body);
    const {name, pass} = req.body;
    connection.query(
        `SELECT * FROM customer WHERE name="${name}" and user_id="${pass}";`,
        (e, op) => {
            if(e){
                console.log(e);
                return res.status(404).json({msg: "Some error occured"});
            }else{
                if(op.length === 0){
                    return res.status(404).json({msg:"Invalid creds"});
                }else{
                    return res.status(200).json({msg:"Success", data: op});
                }
            }
        }
    )
})

router.post("/register", async (req, res) => {
    //   console.log(req);
    console.log(req.body);
    const { f_name, m_name, l_name, add, mono, gender, dob } = req.body;
    //   return res.status(200).json("success");
    const que = `INSERT INTO customer values("${f_name}", "${m_name}", "${m_name}", "${l_name}", "${add}", "${mono}", "${gender}", "${dob}");` 
    connection.query(`${que}`, (e, op) => {
      if (e) {
        console.log(e);
        return res.status(404).json({ msg: "Error" });
      } else {
        return res.status(200).json({ msg: "Successfully Registered" });
      }
    });
  });
  

module.exports = router;