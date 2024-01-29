import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CrudService } from "src/app/services/crudService/crud.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "app-index",
  templateUrl: "index.component.html"
})

export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  date = new Date();
  itemsPerSlide = 9;
  singleSlideOffset = true;
  noWrap = true;
  showIndicators = false;
  form: FormGroup;
  hide: boolean = false;
  slides_aladin: any;
  myModal1: any;



  slides = [
    {image: '../../assets/img/_0eda95f1-ef4a-4909-914d-823b3d026b82.jpeg'},
    {image: '../../assets/img/img-4VypiTqn2ivXtBG1GBlCWo8U.png'},
    {image: '../../assets/img/_04b33e43-97fe-4383-bc8f-9656fc15e355.jpeg'},
    {image: '../../assets/img/_39e8e3ef-9b27-47b7-b619-bf038b16df73.jpeg'},
    {image: '../../assets/img/img-LcCnscT7grguH8zTbPbKGXTS.png'},
    {image: '../../assets/img/_26649a2f-0ee1-4d2f-8e2a-02ca2dee551c.jpeg'},
    {image: '../../assets/img/_642514b0-989d-41cd-a02d-69f3ad6fa12c.jpeg'},
    {image: '../../assets/img/_a6f44ed5-8150-4828-9712-528a2e2813c2.jpeg'},
    {image: '../../assets/img/_40cdab5d-567c-4ae4-b1c8-b8c3e424487d.jpeg'},
    {image: '../../assets/img/_acaeeb03-56db-455e-aac6-064098b327c0.jpeg'},
    {image: '../../assets/img/_b0230b0f-a1f6-44a8-9743-e4f770d2ac8f.jpeg'},
    {image: '../../assets/img/_39e8e3ef-9b27-47b7-b619-bf038b16df73.jpeg'},
    {image: '../../assets/img/_c307f9db-1e34-4f3d-b6a3-12ebec81d3c5.jpeg'},
    {image: '../../assets/img/_cf218031-9265-47ba-b0d1-9c35908b28f0.jpeg'},
    {image: '../../assets/img/_d82ab3b5-4507-4d79-9fe2-a6f97e118336.jpeg'},
  ];

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService  
    ) {
    this.form = this.formBuilder.group({
      prompt: ["", Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");
    
  }



  onSubmit() {
    this.crudService.sandMessage(this.formData).subscribe(
      response => {
        console.log('Formulario enviado con éxito', response);
        // Realiza cualquier acción necesaria después de enviar el formulario
      },
      error => {
        console.error('Error al enviar el formulario', error);
      }
    );
  }


  
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}
