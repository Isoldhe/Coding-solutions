import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SolutionService } from '../../shared';
import { Solution } from '../../model/solution';
import { DeleteSolutionDialogComponent } from '../delete-solution-dialog/delete-solution-dialog.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.less'],
  providers: [SolutionService]
})
export class ListPageComponent implements OnInit {
  allSolutions: Solution[];

  // Boolean for DeleteSolutionDialog
  deleteSolution: boolean = false;

  constructor(private solutionService: SolutionService,
    public dialog: MatDialog) {
    this.solutionService.eventCallback$.subscribe(data => {
      this.callbackFunction();
    });
  }

  ngOnInit() {
    this.solutionService.getAllSolutions()
  }

  callbackFunction() {
    this.allSolutions = this.solutionService.solutions;

    // Sort solutions order based on date
    // this.allSolutions = this.allSolutions.sort((a: any, b: any) =>
    //   new Date(a.date).getTime() - new Date(b.date).getTime()
    // );
  }

  delete(id) {
    this.solutionService.delete(id).subscribe(() => this.solutionService.getAllSolutions());
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
