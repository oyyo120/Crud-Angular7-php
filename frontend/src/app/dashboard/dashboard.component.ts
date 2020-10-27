import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { patient } from '../patient';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  patients: patient[];
  selectedPatient: patient = { id : null , name:null, gender: null};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readPatient().subscribe((patients: patient[])=>{
      this.patients = patients;
      console.log(this.patients);
    })
  }

  createOrUpdatePatient(form){

    if(this.selectedPatient && this.selectedPatient.id){
      form.value.id = this.selectedPatient.id;
      this.apiService.updatePatient(form.value).subscribe((patient: patient)=>{
        console.log("Patient updated" , patient);
        location.reload();
      });
    }
    else{

      this.apiService.createPatient(form.value).subscribe((patient: patient)=>{
        console.log("Patient created, ", patient);
        location.reload();
      });
    }
  }

  selectPatient(patient: patient){
    this.selectedPatient = patient;
  }

  deletePatient(id){
    this.apiService.deletePatient(id).subscribe((patient: patient)=>{
      console.log("Policy deleted, ", patient);
      location.reload();
    });
  }

}
