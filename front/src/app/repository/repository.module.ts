import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './repository.component';
import { SceneModule } from '../scene/scene.module';
import { ImageSanitizedModule } from '../shared/directives/image-sanitized/image-sanitized.module';
import { SummaryComponent } from './components/summary/summary.component';
import { MatButtonModule } from '@angular/material/button';
import { TreeComponent } from './components/tree/tree.component';
import { TreeStructureModule } from '../tree-structure/tree-structure.module';
import { DialogDeleteItemModule } from '../dialogs/dialog-delete-item/dialog-delete-item.module';
import { HasRoleModule } from '../shared/directives/has-role/has-role.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [RepositoryComponent, SummaryComponent, TreeComponent],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    SceneModule,
    ImageSanitizedModule,
    MatButtonModule,
    TreeStructureModule,
    DialogDeleteItemModule,
    HasRoleModule,
    MatProgressSpinnerModule,
  ],
})
export class RepositoryModule {}
