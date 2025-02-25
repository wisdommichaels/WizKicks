const adminModel = require("../Models/adminModel");
const { responseReturn } = require("../Utils/response");

const bcrypt = require("bcrypt");
const { generateToken } = require("../Utils/generateToken");

class authController{
    admin_login = async(req, res) => {
      const {email, password} = req.body;
      try {
        if(!email || !password){
          responseReturn(res, 400, {error: "Please enter all fields"})
        }

        const admin = await
        adminModel.findOne({email});
        if(!admin){
          responseReturn(res, 400, {error: "User not found"})
        }
        if(admin){
          const match = await bcrypt.compare(password, admin.password);
          if(match){
            const token = await generateToken({
              id : admin._id,
              role : admin.role
            });
            res.cookie("admin_token", token, {
              expires: new Date(Date.now() + 7*24*60*60*1000), // 7 days
              httpOnly: true,
            });
            responseReturn(res, 200, {message: "Login successful"})
          }else{
            responseReturn(res, 400, {error: "Incorrect password"})
          }
      }

      } catch (error) {
        responseReturn(res, 500, {error: error.message})
        
      }
    }
}

module.exports = new authController()