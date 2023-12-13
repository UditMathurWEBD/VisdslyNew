import { Box,  IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import './login.css';

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
   <div>
      
<div class="page-content">
<div class="form-v10-content">
<form class="form-detail" action="#" method="post" id="myform">
{/* <div class="form-left">
<h2>Signup Form</h2>

<div class="form-group">
<div class="form-row form-row-1">
<input type="text" name="first_name" id="first_name" class="input-text" placeholder="First Name" required />
</div>
<div class="form-row form-row-2">
<input type="text" name="last_name" id="last_name" class="input-text" placeholder="Last Name" required />
</div>
</div>

<div class="form-row">
<input type="text" name="company" class="company"  placeholder="Enter Email Id" required />
</div>
<div class="form-row">
<input type="text" name="company" class="company"  placeholder="Enter Password" required />
</div>
<div class="form-row">
<input type="text" name="company" class="company"  placeholder="Enter Password Again" required />
</div>
<div class="register-here"><button class="register-button" type="submit"><a href="#">Register Here</a></button></div>

</div> */}
<div class="form-right">
<h2>Login Here</h2>
<div class="form-row">
<input type="text" name="street" class="street" id="street" placeholder="Username" required />
</div>
<div class="form-row">
<input type="text" name="additional" class="additional" id="additional" placeholder="Password" required />
</div>




<div class="form-checkbox">
<label class="container"><p>I do accept the <a href="/dashboard" class="text">Terms and Conditions</a> of your site.</p>
<input type="checkbox" name="checkbox" />
<span class="checkmark"></span>
</label>
</div>
<div class="form-row-last">
<input type="submit" name="" class="register" placeholder="Login" />
</div>
</div>
</form>
</div>
</div>


   </div>
  );
};

export default Login;
