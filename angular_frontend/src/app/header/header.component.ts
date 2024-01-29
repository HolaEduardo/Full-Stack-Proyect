import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
focus;
focus1;
focus2;
isButtonDisabled: boolean = true;
isCollapsed = true;

// Define los métodos para manejar eventos como el clic en el botón del modal
showModal2() {
  // Implementa la lógica para mostrar el modal
}

hideModal2() {
  // Implementa la lógica para ocultar el modal
}

  constructor() { }

  ngOnInit(): void {
  }

}
