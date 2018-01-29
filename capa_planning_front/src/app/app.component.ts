import { InMemoryCache } from 'apollo-cache-inmemory';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http/HttpLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:4000/api' }),
      cache: new InMemoryCache()
    });
  }

  ngOnInit(): void {

  }


}
