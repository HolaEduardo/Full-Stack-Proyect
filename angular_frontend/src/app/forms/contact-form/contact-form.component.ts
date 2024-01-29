
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crudService/crud.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  button =  "Te escuchamos!"

  constructor(private fb: FormBuilder, private crudService: CrudService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['+56'],
      company: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.contactForm.value)
    if (this.contactForm.valid) {
      this.button = "Enviando";
      const formData = this.contactForm.value;
      this.crudService.sandMessage(formData).subscribe(
        (response) => {
          this.contactForm.reset({
            phone: '+56' // Puedes proporcionar valores iniciales específicos si es necesario
          });
          this.button = "Mensaje enviado!";
          console.log('Mensaje enviado correctamente', response);
          // Puedes realizar otras acciones después de enviar el mensaje
        },
        (error) => {
          this.button = "Error al enviar el mensaje";
          this.contactForm.reset({
            phone: '+56' // Puedes proporcionar valores iniciales específicos si es necesario
          });
          console.error('Error al enviar el mensaje', error);
          // Puedes manejar el error de alguna manera
        }
      );
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
}
