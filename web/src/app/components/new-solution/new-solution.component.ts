import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { SolutionService } from '../../shared';
import { Solution } from '../../model/solution';

@Component({
  selector: 'app-new-solution',
  templateUrl: './new-solution.component.html',
  styleUrls: ['./new-solution.component.less'],
  providers: [SolutionService]
})
export class NewSolutionComponent implements OnInit {
  newSolution: FormGroup;
  submitted = false;

  constructor(public fb: FormBuilder,
              private solutionService: SolutionService,
              private router: Router) { }

  ngOnInit() {
    // Build form including validators
    this.newSolution = this.fb.group({
      title: ['', [Validators.required, Validators.maxLength(60)]],
      description: ['', Validators.required],
      solution: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.newSolution.controls; }

  public saveNewSolution() {
    const title = this.f['title'].value;
    const description = this.f['description'].value;
    const solution = this.f['solution'].value;

    this.submitted = true;
    // stop here if form is invalid
    if (this.newSolution.invalid) {
      return;
    }

    this.solutionService.saveNewSolution(new Solution(0, title, description, solution)).subscribe(() => this.router.navigate(['/solutions-list']));
  }

}
