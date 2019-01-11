import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

import { SolutionService } from '../../shared';
import { Solution } from '../../model/solution';

@Component({
  selector: 'app-edit-solution',
  templateUrl: './edit-solution.component.html',
  styleUrls: ['./edit-solution.component.less'],
  providers: [SolutionService]
})
export class EditSolutionComponent implements OnInit, OnChanges {
  editSolution: FormGroup;
  submitted = false;

  @Input() solution: Solution;

  constructor(public fb: FormBuilder,
              private solutionService: SolutionService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() { 
    const id = +this.route.snapshot.paramMap.get('id');
    this.solutionService.findById(id).subscribe(solution => {
        this.solution = solution;
        this.createForm();
        this.rebuildForm();
    });
  }

  createForm() {
    this.editSolution = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(60)]],
        description: ['', Validators.required],
        solution: ['', Validators.required]
    });
  }

  // Tracks changes in the form
  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.editSolution.reset({
      title: this.solution.title,
      description: this.solution.description,
      solution: this.solution.solution
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.editSolution.controls; }

  saveSolution() {
    this.solution.title = this.f['title'].value;
    this.solution.description = this.f['description'].value;
    this.solution.solution = this.f['solution'].value;

    this.submitted = true;
    // stop here if form is invalid
    if (this.editSolution.invalid) {
      return;
    }

    // TODO: create this method in service
    this.solutionService.updateSolution(this.solution.id, this.solution).subscribe(() => this.router.navigate(['/solutions-list']));
  }

}