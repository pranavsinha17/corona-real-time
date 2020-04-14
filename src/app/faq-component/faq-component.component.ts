import { Component, OnInit } from '@angular/core';
import { FaqServiceService } from '../faq-service.service';
import { Faq } from '../faq';

@Component({
  selector: 'app-faq-component',
  templateUrl: './faq-component.component.html',
  styleUrls: ['./faq-component.component.css']
})
export class FaqComponentComponent implements OnInit {
  contact:Faq[]=[];
  primary_number:string;
  primary_toll_free_number:string;
  primary_email:string;
  constructor(private service:FaqServiceService) { }

  ngOnInit(): void {
    this.service.getContact().subscribe((res:Faq[])=>{
     let data=res["data"];
     let contacts=data["contacts"];
     let primary=contacts["primary"];
     this.primary_number=primary.number;
     this.primary_toll_free_number=primary["number-tollfree"];
     this.primary_email=primary.email;
     console.log(this.primary_email);
     let regional=contacts["regional"];
     this.contact=regional;
     console.log(this.contact);
     var text = ["❝Wear a cloth face cover❞", "❝Practice social distancing❞", "❝Avoid touching your eyes, nose and mouth❞","❝Cover your coughs and sneezes❞","❝Call a medical professional as soon as COVID-19 symptoms start, if you are at higher risk❞","❝People who are pregnant should also be monitored since they are known to be at risk with severe viral illness; however, to date data on COVID-19 has not shown increased risk.❞","❝Cover your coughs and sneezes. Use a tissue to cover your nose and mouth, and throw used tissues in a lined trash can. If a tissue isn’t available, cough or sneeze into your elbow — not your hands. Wash your hands immediately.❞"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 3000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
    });
  }
  

}
