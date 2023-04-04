export class Issue {
  id: number;
  title: string;
  state: string;
  url: string;
  created_at: string;
  updated_at: string;
}

export class Match {
  eventKey: string; when: string; where: string; 
  teams: [];
}
