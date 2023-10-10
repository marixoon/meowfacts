import { Component, OnInit } from '@angular/core';
import { CatFactsService } from "../../services/cat-facts.service";
import { Observable, BehaviorSubject } from "rxjs";
import { switchMap, scan } from "rxjs/operators";

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  private loadFactSubject = new BehaviorSubject<void>(undefined);
  public facts$: Observable<string[]>;

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit(): void {
    this.facts$ = this.loadFactSubject.pipe(
      switchMap(() => this.catFactsService.getCatFact()),
      scan((facts: string[], newFact: string) => {
        return facts.includes(newFact) ? facts : [...facts, newFact];
      }, [])
    );
  }

  public loadMoreFacts(): void {
    this.loadFactSubject.next();
  }
}
