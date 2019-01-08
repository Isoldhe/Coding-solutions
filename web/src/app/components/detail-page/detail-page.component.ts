import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { SolutionService } from '../../shared';
import { Solution } from '../../model/solution';
import { DeleteSolutionDialogComponent } from '../delete-solution-dialog/delete-solution-dialog.component';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less'],
  providers: [SolutionService]
})
export class DetailPageComponent implements OnInit {
  @Input() solution: Solution;

  // Boolean for DeleteSolutionDialog
  deleteSolution: boolean = false;

  constructor(private solutionService: SolutionService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    // snapshot creates a snapshot of the current route, including its id
    // The + sign means that the value is lazy loaded. It's needed to put the const id as an argument in the findById() method
    const id = +this.route.snapshot.paramMap.get('id');
    this.solutionService.findById(id).subscribe(solution => {
          this.solution = solution;
    });
  }

  delete(id) {
    this.solutionService.delete(id).subscribe(() => {
      this.solutionService.getAllSolutions();
      this.router.navigate(['/solutions-list']);
    });
  }

  // Open DeleteSolutionDialog
  openDeleteSolutionDialog(solutionId): void {
    console.log("this.deleteSolution on open dialog = " + this.deleteSolution);

    const dialogRef = this.dialog.open(DeleteSolutionDialogComponent, {
      disableClose: false,
      autoFocus: false,
      hasBackdrop: true,
      backdropClass: '',
      width: '600px',
      height: '',
      position: {
          top: '',
          bottom: '',
          left: '',
          right: ''
      },
      data: {deleteSolution: this.deleteSolution}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteSolution = result;

      // If user clicks "yes", deletes the post
      if (this.deleteSolution) {
        this.delete(solutionId);
      }
    });
  }

}
