import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatDrawer } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

  students = new FormControl('');
  
  studentList: string[] = [
    'Nicole Marcial', 
    'Bernie Inociete', 
    'Christian Alip',
    'Allen Eduard Uy',
    'Mitchell Alop',
    'Austin Ray Aranda',
    'Ralph Martin Flores'
  ];

  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  constructor(private observer: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  
    // timer(0, 1000).subscribe(() => {
    //   this.datetime = new Date()
    // })

    // Observes for breakpoint changes and changes sidenav mode to be more responsive
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.drawer.mode = 'over';
          this.drawer.close();
        } else {
          this.drawer.mode = 'side';
          this.drawer.open();
        }
      });
  }

}
