import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae ratione ut, aliquam amet deleniti, error eligendi neque ullam aspernatur dolore accusamus! Accusamus voluptate alias provident, corrupti qui corporis in.'
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae ratione ut, aliquam amet deleniti, error eligendi neque ullam aspernatur dolore accusamus! Accusamus voluptate alias provident, corrupti qui corporis in.'
    },
    {
      title: 'Un autre post',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate quae ratione ut, aliquam amet deleniti, error eligendi neque ullam aspernatur dolore accusamus! Accusamus voluptate alias provident, corrupti qui corporis in.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
