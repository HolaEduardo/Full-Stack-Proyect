import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomValidators } from "src/app/helpers/Validators/index";
import { PainterService } from "src/app/services/painterService/painter.service";


@Component({
  selector: 'app-aiadin',
  templateUrl: './aiadin.component.html',
  styleUrls: ['./aiadin.component.scss']
})

export class AiadinComponent implements OnInit {
  form1: FormGroup;
  prompt: string;
  submitted = false;
  modalRef?: BsModalRef;
  public imageUrl: string | null = null;
  hide: boolean = false;
  htmlResponse = '';
  displayText: string = '';

  customValidators = CustomValidators;
  constructor(
    private fb: FormBuilder,
    private painterService: PainterService,
  ) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      prompt: ['', Validators.required],
    });
  }

  Completion() {
    this.submitted = true;
    console.log(this.submitted)
    console.log(this.form1.valid)
    if (this.form1.invalid) {
      return;
    }
    const prompt = this.form1.value.prompt;
    console.log(prompt);
  
    this.painterService.getCompletion(prompt).subscribe(
      (data: any) => {
      console.log(data);
      this.htmlResponse = data.answer;
      this.typeWriterEffect();
      },
      error => {
        console.log(error);
      }
    );

  }
  
  typeWriterEffect() {
    const speed = 4.5;
    let i = 0;
    const typeWriter = () => {
      if (i < this.htmlResponse.length) {
        this.displayText += this.htmlResponse.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    };
    typeWriter();
  }
}
