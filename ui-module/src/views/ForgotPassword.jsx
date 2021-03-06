import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import fire from '../fire.js';

var firebase = require('firebase');

class ForgotPassword extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      email: null,
      status:0,    
    };
    
  }

  handleInputChange = e => {
    this.setState({[e.target.name]:e.target.value});
    this.setState({status:0});
  }

  restpassword(){
      var auth = firebase.auth();
      var emailAddress = this.state.email;
 
      auth.sendPasswordResetEmail(emailAddress).then((u)=>{
      }).then((u)=>{
        // Email sent.
        console.log("Email sent");
        this.props.history.push({
          pathname: '/access/login'        
        });
        
      })
      .catch((error) => {
          // An error happened.
        this.setState({status:1});
        console.log("Email not sent");
      })    
  };

  back(){
     this.props.history.push({
        pathname: '/access/login'        
      })
  };
  
  render() {

  const classes  ={

      main:{
        // backgroundColor:'red',
        top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'

      },

      paper: {
        padding:'0.1rem 0 17rem 0',
        textAlign:'center',
        backgroundColor:'#F0F3F0'
      },
      
      form: {
        margin:'3rem 0 0 0',
        textAlign:'center',
        display:'block'
        // right:'0',
      },
      button: {
        textAlign:'center',
        margin:'2rem 0 0 0'
      },
      text:{
        // color:'#8C8E8F ',
        textAlign:'left',
        fontSize:'14px',
        fontFamily: 'Arial',
        marginBottom:'1rem'
        // padding:' 0 10px'
      }
    };
    

    return(
      // <Card  style={classes.root} variant="outlined" >
      // <CardContent>
        <div className="main" style={classes.main}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <a href={"javascript:void(0)"}>
              <Typography variant="h3" style={{ fontSize: '2.5rem', fontWeight: '500', fontFamily:'Arial', color:'black', position: 'absolute',margin:'1rem' }}>UNIQUE</Typography>
            </a>

            <img style={classes.img} src={require("../assets/img/unique.jpg")} height='100%' width='100%'/>

          </Grid>

          <Grid item xs={12} sm={6}>

          <div style={classes.paper}>
            <Container maxWidth='xs' >

              <Typography component="h1" variant="h4" style={{marginTop: '8rem'}}>
                Reset Password
              </Typography>

              <form style={classes.form}  noValidate>
              

                <Grid container spacing={2} style={{textAlign:'center'}}>
                  <Grid item xs={12} style={classes.text}>
                    Enter your registered e-mail below. You'll recevied instructions for reset your password from the e-mail.
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoFocus
                      autoComplete="email"
                      onChange={e => {this.handleInputChange(e)}}
                    />
                  </Grid>

                  <Grid item xs={12} style={{display:this.state.status!=0?'':'none', marginTop:'0.5rem'}}>
                    <span style={{color:'red'}}>
                      <b>{this.state.status==1?'Invalid email!':''}</b>
                    </span>
                  </Grid>

                  <Grid item xs={6} sm={6} style={{textAlign:'left'}}>
                    <Button

                      variant="contained"
                      color="primary"        
                      style={{margin:'2rem 0 0.5rem 0',padding:'0.3rem 2.8rem' , fontSize:'20px',backgroundColor:'#BB0D1D'}}
                      onClick={() => {this.back();}}
                    >
                      Cancel
                    </Button>
                  </Grid>

                  <Grid item xs={6} sm={6} style={{textAlign:'right'}}>
                    <Button

                      variant="contained"
                      color="primary"        
                      style={{margin:'2rem 0 0.5rem 0',padding:'0.3rem 1.5rem', fontSize:'20px',backgroundColor:'#066294 '}}
                      onClick={() => {this.restpassword();}}
                    >
                      Send E-mail
                    </Button>
                  </Grid>


                </Grid>

              
              </form>
            </Container>

          </div>
          
          </Grid>
        </Grid>



      </div>
    );
  }
}

export default ForgotPassword;
