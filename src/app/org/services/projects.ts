export class Projects {
  org_name: string;
  proj_name: string;
  no_of_people: number;
  created_at: Date;
  last_visited_at: Date;
  constructor(org_name: string, proj_name:string, no_of_people: number, created_at: Date, last_visited_at: Date) {
    this.org_name = org_name;
    this.proj_name=proj_name;
    this.no_of_people = no_of_people;
    this.created_at = created_at;
    this.last_visited_at = last_visited_at;
  }
}
