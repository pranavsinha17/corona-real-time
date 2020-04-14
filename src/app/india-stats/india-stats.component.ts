import { Component, OnInit } from '@angular/core';
import { IndiaStatServiceService } from '../india-stat-service.service';
import { IndiaStat } from '../india-stat';
import { StateWiseStatServiceService } from '../state-wise-stat-service.service';
import { StateWiseStat } from '../state-wise-stat';

@Component({
  selector: 'app-india-stats',
  templateUrl: './india-stats.component.html',
  styleUrls: ['./india-stats.component.css']
})
export class IndiaStatsComponent implements OnInit {
   statList;
   dayBeforeLatestHistory:StateWiseStat[]=[];
   latestHistory:StateWiseStat[]=[];
   totalToday:number=0;
  constructor(private service:IndiaStatServiceService,private service2:StateWiseStatServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((res)=>{
    let data=res["data"];
    let total=data["total"];
    this.statList=total;
    console.log(this.statList);
    });
    this.service2.getStateWiseData().subscribe((res:StateWiseStat[])=>{
      let data=res["data"];
      
      let history=data["history"];
      let cnt=0;
      for(let i=0;i<history.length;i++)
      {
          cnt++;
      }
       this.latestHistory=history[cnt-1];
      this.dayBeforeLatestHistory=history[cnt-2];
      this.latestHistory=this.latestHistory["statewise"];
      this.dayBeforeLatestHistory=this.dayBeforeLatestHistory["statewise"];
      console.log(this.latestHistory);
      console.log(this.dayBeforeLatestHistory)
      for(let i=0;i<this.latestHistory.length;i++)
      {
        
          this.totalToday+=(this.latestHistory[i].confirmed-this.dayBeforeLatestHistory[i].confirmed);
      }
      console.log(this.totalToday);
    });
   

  }

}
