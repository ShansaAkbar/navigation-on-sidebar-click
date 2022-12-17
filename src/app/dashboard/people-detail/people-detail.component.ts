import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { People } from 'src/app/people.interface';
import { Peopledata } from 'src/app/peopleData';
@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  public form: FormGroup;
  width = 100;
  height = 100;
  linkedIn = 'https://www.linkedin.com/';
  git = 'https://www.git.com/';
  facebook = 'https://www.facebook.com';
  twitter = 'https://www.twitter.com';
  peopleData: People[] = Peopledata;
  imageName = ''
  constructor(private formBuilder: FormBuilder,
    private matIconRegistory: MatIconRegistry,
    private domsanitizer: DomSanitizer,
    private route: ActivatedRoute) {
    this.iniTializeForm();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getPeopleData(params['id']);
      }
    });
    this.getAllSvgIcons();
  }
  ngOnInit(): void {
    this.getPeopleData();
  }
  iniTializeForm() {
    this.form = this.formBuilder.group({
      userName: 'Leslia Alexander',
      userImage: 'text-box-png-11.png',
      email: 'gyemail.com',
      number: '022232424324',
      designation: 'Co founder Apple'
    });
  }
  getPeopleData(id?: number) {
    let userData = this.peopleData[0]
    this.imageName = userData.userName.charAt(0).toUpperCase()
    if (id)
      userData = this.peopleData.find(r => r.id == id)
    if ((userData.userName).includes(' ')) {
      let imagena = userData.userName.split(' ');
      if (imagena.length > 2)
        this.imageName = imagena[0].charAt(0).toUpperCase() + imagena[2].charAt(0).toUpperCase();
      else
        this.imageName = imagena[0].charAt(0).toUpperCase() + imagena[1].charAt(0).toUpperCase();
    }

    this.UpdateForm(userData)
  }
  UpdateForm(value: People) {
    this.form.patchValue({
      userName: value.userName,
      userImage: value.userImage,
      email: value.email,
      number: value.number,
      designation: value.designation
    });
  }
  /**
   * getting all svg icons from assets
   */
  getAllSvgIcons() {
    this.matIconRegistory.addSvgIcon(
      'email',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/email.svg')
    );
    this.matIconRegistory.addSvgIcon(
      'briefcase',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/briefcase.svg')
    );
    this.matIconRegistory.addSvgIcon(
      'call',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/call.svg')
    );
    this.matIconRegistory.addSvgIcon(
      'github',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/github.svg')
    );
    this.matIconRegistory.addSvgIcon(
      'instagram',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/instagram.svg')
    );
    this.matIconRegistory.addSvgIcon(
      'linkedin',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/linkedin.svg')
    );
    this.matIconRegistory.addSvgIcon(
      'twitter',
      this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/twitter.svg')
    );
    // this.matIconRegistory.addSvgIcon(
    //   'facebook',
    //   this.domsanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/facebook')
    // );
  }


  onSubmit(event?) {
    if (event.keyCode === 13) {
      console.log(this.form.value)

    }
  }
}
