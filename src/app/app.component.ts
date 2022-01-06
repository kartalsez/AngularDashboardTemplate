import { Component } from '@angular/core';
import { CoreService } from './shared/services/core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-app';
  mode: { value: 'side' | 'over' | 'push' } = { value: 'side' };
  showSpinner$;

  constructor(coreService: CoreService) {
    this.showSpinner$ = coreService.showSpinner$;
  }
}


