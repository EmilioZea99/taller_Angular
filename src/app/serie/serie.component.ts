import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from './dataSeries';



@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avgSeasons: Number=0;
  constructor() { }
  getSerieList(): Array<Serie> {
    return dataSeries;
  }


  ngOnInit() {
    this.series = this.getSerieList();
    this.avgSeasons=this.calcularAvgSeries(this.series)
  }

  calcularAvgSeries(series:Array<Serie>){
    let sum:number=0;
    let cont:number=series.length;
    series.forEach((serie)=>sum=sum+serie.seasons);
    let average:number=sum/cont;
    return average;
  }

}
