import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  public series: Array <Serie> = [];

  constructor(private serieService: SerieService) { }

  getSerieList() {
    this.serieService.getSeries().subscribe(series => {this.series = series});
    }
  calcularPromedioTemporadas() {
    let promedio = 0;
    for (let i = 0; i < this.series.length; i++) {
      promedio += this.series[i].seasons;
    }
    return promedio / this.series.length;
  }




  ngOnInit(): void {  this.getSerieList();
  }

}

