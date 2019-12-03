import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public email:string="";
  public password:string="";
  constructor( private afAuth: AngularFireAuth, private router: Router, private authService: AuthService ) { }

  ngOnInit() {
    
  }
  registerUser(email: string, password: string): void {
    this.authService.registerUser(email, password).then((res)=>{
      this.authService.isAuth().subscribe(user=>{
        this.authService.updateUserData(user)
        this.onLoginRedirect()
      })
    }).catch(err=> console.log('err',err.message))
}
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/home']);
  }

  register():void{
    this.router.navigate(['/register']);
  }

}
