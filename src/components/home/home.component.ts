import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { FooterComponent } from '../footer/footer.component';
import { WhyComponent } from '../why/why.component';
import { TeamComponent } from '../team/team.component';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProjectsComponent } from '../projects/projects.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AboutComponent, ProjectsComponent, ServiceComponent, FooterComponent, WhyComponent, TeamComponent, RouterOutlet, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  title = 'AR Agency';
  selectedColor: string = 'home'
  contactForm: FormGroup;
  serviceId = 'service_s2qc95s'; // Replace with your EmailJS service ID
  templateId = 'template_5pj9trt'; // Replace with your EmailJS template ID
  publicKey = 'Uw-bBU_SizAeWY1JZ'; // Replace with your EmailJS public key

  constructor(private router: Router,
    private toast: ToastrService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      ph_No: ['', [Validators.required, Validators.pattern(/^(\+91[\-\s]?)?[6-9]\d{9}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        from_name: this.contactForm.value.name,
        reply_to: this.contactForm.value.email,
        message: `Name: ${this.contactForm.value.name}\nPh.NO: ${this.contactForm.value.ph_No}\nEmail: ${this.contactForm.value.email}\nMessage: ${this.contactForm.value.message}`
      };
      emailjs.send(this.serviceId, this.templateId, templateParams, this.publicKey)
        .then(
          (response: EmailJSResponseStatus) => {
            this.contactForm.reset();
            this.toast.success('Message Sent Successfully!',);
            // alert('Message Sent Successfully!');
          },
          (error) => {
            console.error('FAILED...', error);
            this.toast.error('Failed to send message. Please try again later.');
            // alert('Failed to send message. Please try again later.');
          }
        );
    }
    else {
      this.contactForm.markAllAsTouched();
      // alert('Please fill out all required fields.');
      this.toast.error('Please fill out all required fields...!!!');
    }
  }

  openMapwithMarker(): void {
    const mapUrl =
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.1352295177226!2d80.1538678736714!3d12.96582421500772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f609cb29add%3A0xbc33f21aaa5746b6!2sPallava%20Enclave%20Appartments.!5e1!3m2!1sen!2sin!4v1732377792919!5m2!1sen!2sin';
    window.open(mapUrl, '_blank');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

}
