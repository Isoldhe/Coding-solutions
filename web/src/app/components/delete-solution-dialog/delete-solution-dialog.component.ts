import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  deleteSolution: boolean;
}

@Component({
  selector: 'app-delete-solution-dialog',
  templateUrl: './delete-solution-dialog.component.html',
  styleUrls: ['./delete-solution-dialog.component.less']
})
export class DeleteSolutionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteSolutionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.data.deleteSolution = false;
    this.dialogRef.close(this.data.deleteSolution);
  }

  onYesClick() {
    this.data.deleteSolution = true;
    this.dialogRef.close(this.data.deleteSolution);
  }

}
