import { Component, Input, OnInit } from '@angular/core';
let postLove = 0;
@Component({
  selector: 'list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()  postTitle: string;
  @Input()  postContent: string;
  @Input()  postLove: number;
  @Input()  postCreate = new Date;

  onpostLove() {
      postLove++;
      console.log(postLove);
  }

  onpostDLove() {
    postLove--;
    console.log(postLove);
  }
  constructor() { }

  ngOnInit() {
  }

}
