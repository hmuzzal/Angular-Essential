import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  exports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule
  ],
})
export class AntDesignModule {}