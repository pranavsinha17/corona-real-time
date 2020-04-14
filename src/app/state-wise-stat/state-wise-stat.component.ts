import { Component, OnInit } from '@angular/core';
import { StateWiseStatServiceService } from '../state-wise-stat-service.service';
import { StateWiseStat } from '../state-wise-stat';

@Component({
  selector: 'app-state-wise-stat',
  templateUrl: './state-wise-stat.component.html',
  styleUrls: ['./state-wise-stat.component.css']
})
export class StateWiseStatComponent implements OnInit {
  dayBeforeLatestHistory;
   stateStat:StateWiseStat[]=[];

  constructor(private service:StateWiseStatServiceService) { }

  ngOnInit(): void {
    this.service.getStateWiseData().subscribe((res:StateWiseStat[])=>{
      let data=res["data"];
      
      let history=data["history"];
      let cnt=0;
      for(let i=0;i<history.length;i++)
      {
          cnt++;
      }
      let latestHistory=history[cnt-1];
      this.dayBeforeLatestHistory=history[cnt-2];
      this.stateStat=latestHistory["statewise"];
      console.log(this.stateStat);
    });
  }

}
