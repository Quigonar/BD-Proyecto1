import { Component, OnInit } from '@angular/core';
import { ProviderListI } from 'app/models/providerlist.interface';
import { ApiService } from 'app/services/api.service';
import { ProviderService } from 'app/services/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  public tableData1
  public providerD:string[]
  public provider:ProviderListI

  constructor(private _providerService:ProviderService, private api:ApiService) { }

  public passProvider(index: number) {
    this._providerService.setProvider(this._providerService.getProviders()[index]);
  }

  public elimProvider(index: number) {
    this._providerService.setProvider(this._providerService.getProviders()[index]);
    this.providerD = this._providerService.getProvider();
    this.provider.Name = this.providerD[0];

    this.api.deleteProvider(this.provider).subscribe(data => {
      console.log(data);
    })
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.api.gTableProviders().subscribe(data => {
      console.log(data)
      this._providerService.setTable(data)
    });
    this.tableData1 = this._providerService.getTable();
    this.provider = {
      Name: '',
      ID: '',
      Address: '',
      Email: '',
      Contact: ''
    }
  }

}
