import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input()  postTitle: string;
  @Input()  postContent: string;
  public postLove: number = 0;
  @Input()  postCreate = new Date;

  onpostLove() {
      this.postLove++;
  }

  onpostDLove() {
    this.postLove--;
  }
  constructor() {
   }

  ngOnInit() {
  }

}
