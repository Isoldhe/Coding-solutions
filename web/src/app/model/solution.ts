export class Solution {
    id: number;
    title: string;
    description: string;
    solution: string;
  
    constructor(id: number, title: string, description: string, solution: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.solution = solution;
    }
  }