import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';
import { Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {

  @ViewChild(MatDrawer)

  drawer!: MatDrawer;

  constructor(
    private observer: BreakpointObserver
  ) { }

  messageData: any = [
    // {
    //   "fullname": "John Doestar",
    //   "messagecontent": "Anim labore aliqua duis ipsum. Cillum ex nostrud ullamco deserunt adipisicing duis ex culpa labore. Commodo excepteur ad voluptate in ad voluptate dolore deserunt amet exercitation sint incididunt amet eiusmod. Tempor adipisicing do aliqua enim est non Commodo minim commodo nisi duis dolor incididunt cupidatat voluptate irure commodo. Nulla ea mollit irure amet irure qui id do laboris irure. Veniam anim incididunt est laborum qui cillum dolor laboris irure anim exercitation qui voluptate quis.",
    //   "datetime": "2021-08-13 04:25:13",
    //   "img": "assets/images/message-user-icon.png",
    //   "isMe" : false
    // },
    // {
    //   "fullname": "Allen Uy",
    //   "messagecontent": "Anim labore aliqua duis ipsum. Cillum ex nostrud ullamco deserunt adipisicing duis ex culpa labore. Commodo excepteur ad voluptate in ad voluptate dolore deserunt amet exercitation sint incididunt amet eiusmod. Tempor adipisicing do aliqua enim est non Commodo minim commodo nisi duis dolor incididunt cupidatat voluptate irure commodo. Nulla ea mollit irure amet irure qui id do laboris irure. Veniam anim incididunt est laborum qui cillum dolor laboris irure anim exercitation qui voluptate quis.",
    //   "datetime": "2021-08-13 04:25:13",
    //   "img": "assets/images/message-user-icon.png",
    //   "isMe" : false
    // },
    {
      "fullname": "Austin Ray Aranda",
      "messagecontent": "Anim labore aliqua duis ipsum. Cillum ex nostrud ullamco deserunt adipisicing duis ex culpa labore. ",
      "datetime": "2021-08-13 04:25:13",
      "img": "assets/images/message-user-icon.png",
      "isMe" : true
    },
    {
      "fullname": "Mitchel Evans Alop",
      "messagecontent": "Anim labore aliqua duis ipsum. Cillum ex nostrud ullamco deserunt adipisicing duis ex culpa labore. Commodo excepteur ad voluptate in ad voluptate dolore deserunt amet exercitation sint incididunt amet eiusmod. Tempor adipisicing do aliqua enim est non Commodo minim commodo nisi duis dolor incididunt cupidatat voluptate irure commodo. Nulla ea mollit irure amet irure qui id do laboris irure. Veniam anim incididunt est laborum qui cillum dolor laboris irure anim exercitation qui voluptate quis.",
      "datetime": "2021-08-13 04:25:13",
      "img": "assets/images/message-user-icon.png",
      "isMe" : false
    },
    // {
    //   "fullname": "Austin Ray Aranda",
    //   "messagecontent": "Anim labore aliqua duis ipsum. Cillum ex nostrud ullamco deserunt adipisicing duis ex culpa labore. Commodo excepteur ad voluptate in ad voluptate dolore deserunt amet exercitation sint incididunt amet eiusmod. Tempor adipisicing do aliqua enim est non Commodo minim commodo nisi duis dolor incididunt cupidatat voluptate irure commodo. Nulla ea mollit irure amet irure qui id do laboris irure. Veniam anim incididunt est laborum qui cillum dolor laboris irure anim exercitation qui voluptate quis.",
    //   "datetime": "2021-08-13 04:25:13",
    //   "img": "assets/images/message-user-icon.png",
    //   "isMe" : true
    // }
  ]

  ngOnInit(): void {
    this.messageData;
  }

  chatContent: any;

  chat(params: any): void{

      const element = <HTMLElement> document.getElementsByClassName('chatDivReply')[0];
      element.style.animationDelay = "-- delay: 6s"

      this.messageData.push(
        {
          "fullname": "Austin Ray Aranda",
          "messagecontent": `${params}`,
          "datetime": "2021-08-13 04:25:13",
          "img": "assets/images/message-user-icon.png",
          "isMe" : true
        }
      )

    this.ngOnInit();
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
