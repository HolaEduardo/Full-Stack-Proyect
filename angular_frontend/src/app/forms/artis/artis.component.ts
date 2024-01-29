import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomValidators } from 'src/app/helpers/Validators';
import { PainterService } from 'src/app/services/painterService/painter.service';

@Component({
  selector: 'app-artis',
  templateUrl: './artis.component.html',
  styleUrls: ['./artis.component.scss']
})
export class ArtisComponent implements OnInit {
  form: FormGroup;
  prompt: string;
  submitted = false;
  modalRef?: BsModalRef;
  public imageUrl: string | null = null;
  hide: boolean = false;

  customValidators = CustomValidators;
  constructor(
    private fb: FormBuilder,
    private painterService: PainterService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      prompt: ['', Validators.required],
    });

  }
  submit(template: TemplateRef<any>) {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const prompt = this.form.value.prompt;
    this.painterService.generateImage(prompt).subscribe(
      (data: any) => {
        this.imageUrl = data["image_url"];
        console.log(this.imageUrl);
        localStorage.setItem("url", this.imageUrl);
        this.hide = false;
      },
      error => {
        console.log(error);
      }
    );
    this.modalRef = this.modalService.show(template);
  }



}
