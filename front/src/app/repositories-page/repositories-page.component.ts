import { Component, Input } from '@angular/core';
import { RepositoryI } from '../shared/models/repository.interface';

@Component({
  selector: 'app-repositories-page',
  templateUrl: './repositories-page.component.html',
  styleUrls: ['./repositories-page.component.scss'],
})
export class RepositoriesPageComponent {
  @Input() repositories: RepositoryI[] = [];
  @Input() title = '';

  constructor() {}
}
