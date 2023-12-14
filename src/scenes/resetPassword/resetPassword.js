import { Box,  IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import './resetpass.css';

const ResetPassword = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
   <div>
      
<div class="page-content">
<div class="form-v10-content">
<form class="form-detail" action="#" method="post" id="myform">

<div class="form-right">
<h2>Reset Your Password</h2>
<div class="form-row">
<input type="text" name="street" class="street" id="street" placeholder="Enter Your New Password" required />
</div>

<div class="form-row">
<input type="text" name="street" class="street" id="street" placeholder="Re Enter Your New Password" required />
</div>




<div class="form-row-last">
    <button type="submit" class="register forgotpass" >Send</button>
</div>


<div class="form-checkbox">
<label class="container"><p><a href="/signup" class="text">Login Here</a>.</p>


</label>
</div>
</div>
</form>
</div>
</div>


   </div>
  );
};

export default ResetPassword;
