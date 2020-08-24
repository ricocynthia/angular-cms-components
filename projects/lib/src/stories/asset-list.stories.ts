import './storybook-base-configuration';
import { moduleMetadata } from '@storybook/angular';
import { CmsAdminModule } from '../public-api';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssetListComponent } from '../admin/components/asset-list/asset-list.component';

export default {
  title: 'Admin/Asset List',
  component: AssetListComponent,
  parameters: {
    component: AssetListComponent,
  },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CmsAdminModule,
      ],
    }),
  ],
};

const isDefaultFilterOptionsExample = false;

export const FullExample = () => ({
  component: AssetListComponent,
  template: isDefaultFilterOptionsExample ? 
      `<cms-asset-list [defaultFilterOptions]="{ filters: {ID: '40009-*'} }"></cms-asset-list>` :
      `<cms-asset-list></cms-asset-list>`,
  props: {},
});
